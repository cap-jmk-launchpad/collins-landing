import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { COLLINS_STORYBOARD, beatAssetBase, MOTION } from "./storyboard.mjs";
import {
  smoothScrollTo,
  scrollYForHash,
  hideLiveOverlays,
  forceRevealsVisible,
} from "./scroll-motion.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const assetsDir = join(root, "assets");
const segmentsDir = join(assetsDir, "segments");
const baseURL = process.env.DEMO_BASE_URL || "http://127.0.0.1:4173";
const FULL_SEGMENT = "collins-demo-full.webm";

function prepareDirs() {
  mkdirSync(assetsDir, { recursive: true });
  rmSync(segmentsDir, { recursive: true, force: true });
  mkdirSync(segmentsDir, { recursive: true });
}

async function hold(page, ms) {
  await page.waitForTimeout(ms);
}

async function snapPoster(page, path) {
  await hold(page, MOTION.posterLeadMs);
  await page.screenshot({ path, fullPage: false });
}

async function waitForServer(page) {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const res = await page.goto(baseURL, { waitUntil: "domcontentloaded", timeout: 5000 });
      if (res && res.ok()) return;
    } catch {
      /* retry */
    }
    await hold(page, 1000);
  }
  throw new Error(
    `Site not reachable at ${baseURL}. Start it first: npm run serve`
  );
}

async function recordContinuousTour(browser) {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: segmentsDir, size: { width: 1920, height: 1080 } },
  });
  const page = await context.newPage();
  const timeline = [];
  const t0 = Date.now();

  function elapsedSec() {
    return (Date.now() - t0) / 1000;
  }

  await waitForServer(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await hideLiveOverlays(page);
  await forceRevealsVisible(page);
  await hold(page, MOTION.loadSettleMs);

  const beats = COLLINS_STORYBOARD;

  for (let i = 0; i < beats.length; i++) {
    const beat = beats[i];
    console.log(`  Beat ${beat.id} — ${beat.title} (${beat.hash})`);

    if (i === 0) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await hold(page, MOTION.settleMs);
    }

    const startSec = Math.round(elapsedSec() * 100) / 100;
    timeline.push({ beat, startSec });

    const holdMs =
      beat.holdMs ??
      (beat.slug === "endcard" ? MOTION.endcardHoldMs : MOTION.holdMs);
    await hold(page, holdMs - MOTION.posterLeadMs);

    const poster = join(assetsDir, `${beatAssetBase(beat)}.png`);
    await snapPoster(page, poster);

    if (i < beats.length - 1) {
      const nextY = await scrollYForHash(page, beats[i + 1].hash);
      await smoothScrollTo(page, nextY, MOTION.scrollMs);
      await hold(page, MOTION.settleMs);
    }
  }

  const fullPath = join(segmentsDir, FULL_SEGMENT);
  const video = page.video();
  await context.close();
  if (video) {
    await video.saveAs(fullPath);
  }

  return { timeline, fullPath, totalDurationSec: elapsedSec() };
}

function buildManifestBeats(timeline, totalDurationSec) {
  return timeline.map((entry, i) => {
    const { beat, startSec } = entry;
    const nextStart = timeline[i + 1]?.startSec ?? totalDurationSec;
    const durationSec = Math.round((nextStart - startSec) * 100) / 100;

    return {
      id: beat.id,
      slug: beat.slug,
      title: beat.title,
      caption: beat.caption,
      hash: beat.hash,
      startSec,
      durationSec,
      poster: `${beatAssetBase(beat)}.png`,
      segment: null,
    };
  });
}

async function main() {
  prepareDirs();
  console.log(`Recording Collins demo (hyperframes motion) from ${baseURL}`);

  const browser = await chromium.launch({ headless: true });
  let result;

  try {
    result = await recordContinuousTour(browser);
  } finally {
    await browser.close();
  }

  const manifestBeats = buildManifestBeats(result.timeline, result.totalDurationSec);

  const manifest = {
    version: 2,
    engine: "playwright-hyperframes-motion",
    recordedAt: new Date().toISOString(),
    motion: {
      holdMs: MOTION.holdMs,
      scrollMs: MOTION.scrollMs,
      settleMs: MOTION.settleMs,
    },
    sourceSegment: `segments/${FULL_SEGMENT}`,
    beats: manifestBeats,
  };

  writeFileSync(join(assetsDir, "hyperframes-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Wrote assets/hyperframes-manifest.json (${manifestBeats.length} beats)`);
  console.log(`Source webm: assets/segments/${FULL_SEGMENT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
