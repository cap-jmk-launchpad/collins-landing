import { readFileSync, writeFileSync, existsSync, unlinkSync, mkdirSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const assetsDir = join(root, "assets");
const deliverablesDir = join(root, "deliverables");
const manifestPath = join(assetsDir, "hyperframes-manifest.json");
const outputName = process.env.DEMO_OUTPUT || "collins-agency-demo.mp4";
const outputPath = join(assetsDir, outputName);
const deliverablePath = join(deliverablesDir, outputName);

function runFfmpeg(args, inherit = true) {
  const result = spawnSync(ffmpegPath, args, { stdio: inherit ? "inherit" : "pipe", encoding: "utf8" });
  if (result.error) throw result.error;
  return inherit ? result.status === 0 : result;
}

function probeDurationSec(filePath) {
  const result = runFfmpeg(["-i", filePath, "-f", "null", "-"], false);
  const text = `${result.stderr || ""}${result.stdout || ""}`;
  const match = text.match(/Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/);
  if (!match) return null;
  return parseInt(match[1], 10) * 3600 + parseInt(match[2], 10) * 60 + parseFloat(match[3]);
}

function resolveSourceWebm(manifest) {
  const rel = manifest.sourceSegment || "segments/collins-demo-full.webm";
  return join(assetsDir, rel.replace(/^assets\//, ""));
}

function rebalanceBeatDurations(beats, totalDurationSec) {
  if (!beats.length) return beats;

  for (let i = 0; i < beats.length; i++) {
    const start = beats[i].startSec ?? 0;
    const nextStart = beats[i + 1]?.startSec ?? totalDurationSec;
    beats[i].durationSec = Math.round((nextStart - start) * 100) / 100;
  }

  const last = beats[beats.length - 1];
  if (last.startSec != null) {
    last.durationSec = Math.round((totalDurationSec - last.startSec) * 100) / 100;
  }

  return beats;
}

function main() {
  if (!ffmpegPath || !existsSync(ffmpegPath)) {
    console.error("ffmpeg not found. Install ffmpeg-static or add ffmpeg to PATH.");
    process.exit(1);
  }

  if (!existsSync(manifestPath)) {
    console.error("Missing assets/hyperframes-manifest.json — run npm run demo:frames first.");
    process.exit(1);
  }

  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const beats = manifest.beats || [];
  if (!beats.length) {
    console.error("Manifest has no beats.");
    process.exit(1);
  }

  const sourceWebm = resolveSourceWebm(manifest);
  if (!existsSync(sourceWebm)) {
    console.error(`Missing source recording: ${sourceWebm}`);
    console.error("Run: npm run serve (terminal 1) && npm run demo:frames");
    process.exit(1);
  }

  console.log(`Encoding ${sourceWebm} → assets/${outputName}`);

  const encoded = runFfmpeg([
    "-y",
    "-i",
    sourceWebm,
    "-c:v",
    "libx264",
    "-preset",
    "fast",
    "-crf",
    "22",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-an",
    outputPath,
  ]);

  if (!encoded) {
    console.error("ffmpeg encode failed.");
    process.exit(1);
  }

  const measured = probeDurationSec(outputPath);
  if (measured) {
    manifest.totalDurationSec = Math.round(measured * 100) / 100;
    rebalanceBeatDurations(beats, measured);
  }

  manifest.fullVideo = outputName;
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  mkdirSync(deliverablesDir, { recursive: true });
  copyFileSync(outputPath, deliverablePath);

  console.log(`Wrote assets/${outputName} (${manifest.totalDurationSec}s)`);
  console.log(`Copied → deliverables/${outputName}`);
  console.log("Updated assets/hyperframes-manifest.json with beat startSec / durationSec");
}

main();
