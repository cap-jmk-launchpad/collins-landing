import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const MIME = {
  ".zip": "application/zip",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".md": "text/markdown",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

export async function uploadToCatbox(filePath) {
  const boundary = `----CollinsBoundary${Date.now()}`;
  const fileBuffer = readFileSync(filePath);
  const filename = path.basename(filePath);
  const ext = path.extname(filename).toLowerCase();
  const contentType = MIME[ext] || "application/octet-stream";

  const preamble = [
    `--${boundary}`,
    'Content-Disposition: form-data; name="reqtype"',
    "",
    "fileupload",
    `--${boundary}`,
    `Content-Disposition: form-data; name="fileToUpload"; filename="${filename}"`,
    `Content-Type: ${contentType}`,
    "",
  ].join("\r\n");

  const closing = `\r\n--${boundary}--\r\n`;
  const body = Buffer.concat([
    Buffer.from(`${preamble}\r\n`, "utf8"),
    fileBuffer,
    Buffer.from(closing, "utf8"),
  ]);

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    headers: {
      "Content-Type": `multipart/form-data; boundary=${boundary}`,
    },
    body,
  });

  const text = (await response.text()).trim();
  if (!response.ok || !text.startsWith("https://")) {
    throw new Error(`Catbox upload failed: ${text || response.statusText}`);
  }
  return text;
}

function updateJsonFile(relPath, mutator) {
  const filePath = path.join(root, relPath);
  if (!existsSync(filePath)) return;
  let raw = readFileSync(filePath, "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
  const data = JSON.parse(raw);
  mutator(data);
  writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log(`Updated ${relPath}`);
}

async function main() {
  const targets = process.argv.slice(2);
  if (targets.length === 0) {
    console.error("Usage: node scripts/upload-catbox.mjs <file> [file...]");
    process.exit(1);
  }

  const results = {};
  for (const target of targets) {
    const filePath = path.isAbsolute(target) ? target : path.join(root, target);
    const key = path.basename(filePath);
    const url = await uploadToCatbox(filePath);
    results[key] = url;
    console.log(`${key} -> ${url}`);
  }

  if (results["collins-deliverables-2026-06-27.zip"]) {
    const zipUrl = results["collins-deliverables-2026-06-27.zip"];
    updateJsonFile("urls.json", (urls) => {
      urls.previous = {
        ...(urls.previous || {}),
        ...(urls["deliverables.zip"] ? { "deliverables.zip": urls["deliverables.zip"] } : {}),
      };
      urls["deliverables.zip"] = zipUrl;
    });
    updateJsonFile("deliverables/manifest.json", (data) => {
      if (data.catbox) data.catbox.deliverablesZip = zipUrl;
    });
    updateJsonFile("deliverables/assets.json", (data) => {
      if (data.deliverablesZip !== undefined) data.deliverablesZip = zipUrl;
      else data.deliverablesZip = zipUrl;
    });
    updateJsonFile("assets.json", (data) => {
      data.deliverablesZip = zipUrl;
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
