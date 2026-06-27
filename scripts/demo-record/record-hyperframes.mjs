import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { COLLINS_STORYBOARD, beatAssetBase } from "./storyboard.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const assetsDir = join(root, "assets");
const segmentsDir = join(assetsDir, "segments");
const baseURL = process.env.DEMO_BASE_URL || "http://127.0.0.1:4173";

function prepareDirs() {
  mkdirSync(assetsDir, { recursive: true });
  rmSync(segmentsDir, { recursive: true, force: true });
  mkdirSync(segmentsDir, { recursive: true });
}

async function hold(page, ms) {
  await page.waitForTimeout(ms);
}

async function snapPoster(page, path) {
  await hold(page, 500);
  await page.screenshot({ path, fullPage: false });
}

async function recordBeat(browser, beat, index) {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: segmentsDir, size: { width: 1920, height: 1080 } },
  });
  const page = await context.newPage();

  await page.goto(`${baseURL}${beat.hash === "#top" ? "/" : beat.hash}`, {
    waitUntil: "networkidle",
  });
  if (beat.hash && beat.hash !== "#top") {
    await page.locator(beat.hash).scrollIntoViewIfNeeded();
  } else {
    await page.evaluate(() => window.scrollTo(0, 0));
  }
  await hold(page, 400);
  // Live HTML subtitles only — never burn caption bars into recorded video.
  await page.addStyleTag({
    content:
      ".hyperframe-overlay, .hyperframe-subtitles { display: none !important; visibility: hidden !important; }",
  });
  await hold(page, beat.durationSec * 1000);

  const poster = join(assetsDir, `${beatAssetBase(beat)}.png`);
  await snapPoster(page, poster);

  const video = page.video();
  const segmentPath = join(segmentsDir, `${beatAssetBase(beat)}.webm`);
  await context.close();
  if (video) {
    await video.saveAs(segmentPath);
  }

  return {
    id: beat.id,
    slug: beat.slug,
    title: beat.title,
    caption: beat.caption,
    durationSec: beat.durationSec,
    poster: `${beatAssetBase(beat)}.png`,
    segment: `segments/${beatAssetBase(beat)}.webm`,
  };
}

async function main() {
  prepareDirs();
  const browser = await chromium.launch({ headless: true });
  const manifestBeats = [];

  try {
    for (let i = 0; i < COLLINS_STORYBOARD.length; i++) {
      const beat = COLLINS_STORYBOARD[i];
      console.log(`Recording hyperframe ${beat.id} — ${beat.title}`);
      manifestBeats.push(await recordBeat(browser, beat, i));
    }
  } finally {
    await browser.close();
  }

  const manifest = {
    version: 1,
    recordedAt: new Date().toISOString(),
    beats: manifestBeats,
  };
  writeFileSync(join(assetsDir, "hyperframes-manifest.json"), JSON.stringify(manifest, null, 2));
  console.log("Wrote assets/hyperframes-manifest.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
