import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { COLLINS_GREEN, COLLINS_STORYBOARD, beatAssetBase } from "./storyboard.mjs";

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

async function showOverlay(page, beat, index, total) {
  await page.evaluate(
    ({ beat, index, total, colors }) => {
      const rootId = "collins-hyperframe-overlay";
      document.getElementById(rootId)?.remove();

      const root = document.createElement("div");
      root.id = rootId;
      root.setAttribute(
        "style",
        [
          "position:fixed",
          "left:0",
          "right:0",
          "bottom:0",
          "z-index:99999",
          "pointer-events:none",
          "font-family:'Plus Jakarta Sans',system-ui,sans-serif",
        ].join(";"),
      );

      const bar = document.createElement("div");
      bar.setAttribute(
        "style",
        [
          "margin:0 24px 24px",
          "padding:16px 22px",
          "border-radius:14px",
          `background:${colors.bg}`,
          `color:${colors.text}`,
          `border:2px solid ${colors.border}`,
          "box-shadow:0 8px 32px rgba(57,255,20,0.18)",
        ].join(";"),
      );

      const step = document.createElement("p");
      step.textContent = `Step ${index + 1} of ${total}`;
      step.setAttribute(
        "style",
        "margin:0;font-size:13px;opacity:0.75;letter-spacing:0.04em;font-weight:600",
      );

      const title = document.createElement("p");
      title.textContent = beat.title;
      title.setAttribute("style", "margin:6px 0 0;font-size:22px;font-weight:800");

      const caption = document.createElement("p");
      caption.textContent = beat.caption;
      caption.setAttribute(
        "style",
        "margin:6px 0 0;font-size:15px;line-height:1.45;opacity:0.9;max-width:920px",
      );

      bar.append(step, title, caption);
      root.append(bar);
      document.body.append(root);
    },
    { beat, index, total, colors: COLLINS_GREEN },
  );
}

async function snapPoster(page, path, beat, index) {
  await showOverlay(page, beat, index, COLLINS_STORYBOARD.length);
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
  await showOverlay(page, beat, index, COLLINS_STORYBOARD.length);
  await hold(page, beat.durationSec * 1000);

  const poster = join(assetsDir, `${beatAssetBase(beat)}.png`);
  await snapPoster(page, poster, beat, index);

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
