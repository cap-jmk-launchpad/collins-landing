import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import {
  BRAND_REEL_STORYBOARD,
  HERO_METHOD_STORYBOARD,
  beatPosterFile,
  MOTION,
  buildReelTimeline,
  reelTotalDurationMs,
} from "./storyboard.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const assetsDir = join(root, "assets");
const segmentsDir = join(assetsDir, "segments");
const baseURL = process.env.DEMO_BASE_URL || "http://127.0.0.1:4173";
const REEL_URL = `${baseURL.replace(/\/$/, "")}/demo-reel.html?record=1`;
const FULL_SEGMENT = "collins-demo-full.webm";

function prepareDirs() {
  mkdirSync(assetsDir, { recursive: true });
  rmSync(segmentsDir, { recursive: true, force: true });
  mkdirSync(segmentsDir, { recursive: true });
}

async function hold(page, ms) {
  await page.waitForTimeout(ms);
}

async function waitForServer(page) {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const res = await page.goto(REEL_URL, { waitUntil: "networkidle", timeout: 8000 });
      if (res && res.ok()) return;
    } catch {
      /* retry */
    }
    await hold(page, 1000);
  }
  throw new Error(`Brand reel not reachable at ${REEL_URL}. Start it first: npm run serve`);
}

async function waitForReelReady(page) {
  await page.waitForFunction(() => window.__REEL_READY__ && window.__REEL_SHOW_BEAT__, {
    timeout: 20_000,
  });
}

async function showBeat(page, index) {
  await page.evaluate((i) => window.__REEL_SHOW_BEAT__(i), index);
}

async function snapPoster(page, path) {
  await hold(page, MOTION.posterLeadMs);
  await page.screenshot({ path, fullPage: false });
}

async function recordBrandReel(browser) {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: segmentsDir, size: { width: 1920, height: 1080 } },
  });
  const page = await context.newPage();
  const timeline = buildReelTimeline();
  const t0 = Date.now();

  function elapsedSec() {
    return (Date.now() - t0) / 1000;
  }

  await waitForServer(page);
  await waitForReelReady(page);
  await hold(page, MOTION.reelLoadMs);

  const recordedTimeline = [];

  for (let i = 0; i < BRAND_REEL_STORYBOARD.length; i++) {
    const beat = BRAND_REEL_STORYBOARD[i];
    console.log(`  Beat ${beat.id} — ${beat.title}`);

    await showBeat(page, i);
    const startSec = Math.round(elapsedSec() * 100) / 100;
    recordedTimeline.push({ beat, startSec });

    const holdDuration = beat.durationMs - MOTION.posterLeadMs;
    await hold(page, Math.max(900, holdDuration));

    const posterPath = join(assetsDir, beatPosterFile(beat));
    await snapPoster(page, posterPath);
  }

  await hold(page, MOTION.reelBufferMs);

  const fullPath = join(segmentsDir, FULL_SEGMENT);
  const video = page.video();
  await context.close();
  if (video) {
    await video.saveAs(fullPath);
  }

  return {
    timeline: recordedTimeline,
    fullPath,
    totalDurationSec: elapsedSec(),
  };
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
      hash: beat.hash || null,
      startSec,
      durationSec,
      poster: beatPosterFile(beat),
      segment: null,
    };
  });
}

function buildHeroBeatsManifest() {
  return HERO_METHOD_STORYBOARD.map((beat) => ({
    id: beat.id,
    slug: beat.slug,
    title: beat.title,
    caption: beat.caption,
    poster: beatPosterFile(beat),
    durationSec: 4,
  }));
}

async function main() {
  prepareDirs();
  console.log(`Recording Collins brand reel from ${REEL_URL}`);

  const browser = await chromium.launch({ headless: true });
  let result;

  try {
    result = await recordBrandReel(browser);
  } finally {
    await browser.close();
  }

  const manifestBeats = buildManifestBeats(result.timeline, result.totalDurationSec);

  const manifest = {
    version: 3,
    engine: "playwright-brand-reel",
    recordedAt: new Date().toISOString(),
    motion: {
      reelLoadMs: MOTION.reelLoadMs,
      reelBufferMs: MOTION.reelBufferMs,
      heroHoldMs: MOTION.heroHoldMs,
    },
    sourceSegment: `segments/${FULL_SEGMENT}`,
    heroBeats: buildHeroBeatsManifest(),
    beats: manifestBeats,
    totalDurationSec: Math.round(result.totalDurationSec * 100) / 100,
  };

  writeFileSync(join(assetsDir, "hyperframes-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Wrote assets/hyperframes-manifest.json (${manifestBeats.length} beats)`);
  console.log(`Source webm: assets/segments/${FULL_SEGMENT}`);
  console.log(`Expected duration ~${Math.round((reelTotalDurationMs() + MOTION.reelLoadMs + MOTION.reelBufferMs) / 1000)}s`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
