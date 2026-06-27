import { readFileSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const assetsDir = join(root, "assets");
const manifestPath = join(assetsDir, "hyperframes-manifest.json");
const outputName = process.env.DEMO_OUTPUT || "collins-agency-demo.mp4";
const outputPath = join(assetsDir, outputName);
const listPath = join(assetsDir, "hyperframes-ffmpeg.txt");

function resolveSegmentPath(beat) {
  const rel = beat.segment.replace(/^assets\//, "");
  return join(assetsDir, rel);
}

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
  return (
    parseInt(match[1], 10) * 3600 + parseInt(match[2], 10) * 60 + parseFloat(match[3])
  );
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

  const missing = [];
  const listLines = beats.map((beat) => {
    const segmentPath = resolveSegmentPath(beat);
    if (!existsSync(segmentPath)) missing.push(segmentPath);
    const normalized = segmentPath.replace(/\\/g, "/").replace(/'/g, "'\\''");
    return `file '${normalized}'`;
  });

  if (missing.length) {
    console.error("Missing segment files:");
    missing.forEach((p) => console.error("  " + p));
    console.error("Run: npm run serve (separate terminal) && npm run demo:frames");
    process.exit(1);
  }

  beats.forEach((beat) => {
    const segmentPath = resolveSegmentPath(beat);
    const measured = probeDurationSec(segmentPath);
    if (measured) {
      beat.durationSec = Math.round(measured * 100) / 100;
    }
  });

  writeFileSync(listPath, listLines.join("\n") + "\n");

  console.log(`Stitching ${beats.length} segments → assets/${outputName}`);

  const copied = runFfmpeg([
    "-y",
    "-f",
    "concat",
    "-safe",
    "0",
    "-i",
    listPath,
    "-c",
    "copy",
    outputPath,
  ]);

  if (!copied) {
    console.log("Stream copy failed; re-encoding to H.264 MP4…");
    const encoded = runFfmpeg([
      "-y",
      "-f",
      "concat",
      "-safe",
      "0",
      "-i",
      listPath,
      "-c:v",
      "libx264",
      "-preset",
      "fast",
      "-crf",
      "23",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      "-an",
      outputPath,
    ]);
    if (!encoded) {
      console.error("ffmpeg stitch failed.");
      process.exit(1);
    }
  }

  if (existsSync(listPath)) unlinkSync(listPath);

  manifest.fullVideo = outputName;
  manifest.totalDurationSec = beats.reduce((sum, beat) => sum + (beat.durationSec || 0), 0);
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`Wrote assets/${outputName} (${manifest.totalDurationSec}s)`);
  console.log("Updated assets/hyperframes-manifest.json with fullVideo");
}

main();
