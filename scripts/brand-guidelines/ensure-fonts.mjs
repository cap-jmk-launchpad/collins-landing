import { createWriteStream, existsSync, mkdirSync, renameSync, statSync } from "node:fs";
import { get } from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const fontDir = path.join(scriptDir, "fonts");
const base = "https://raw.githubusercontent.com/google/fonts/main/ofl";

const files = [
  {
    rel: "inter/Inter[opsz,wght].ttf",
    dest: "Inter-Regular.ttf",
  },
  {
    rel: "inter/Inter-Italic[opsz,wght].ttf",
    dest: "Inter-Italic.ttf",
  },
  {
    rel: "plusjakartasans/PlusJakartaSans[wght].ttf",
    dest: "PlusJakartaSans-Regular.ttf",
  },
  {
    rel: "plusjakartasans/PlusJakartaSans-Italic[wght].ttf",
    dest: "PlusJakartaSans-Italic.ttf",
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    get(url, { headers: { "User-Agent": "collins-brand-guidelines" } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        download(response.headers.location, dest).then(resolve, reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      const stream = createWriteStream(dest);
      response.pipe(stream);
      stream.on("finish", () => {
        stream.close(resolve);
      });
      stream.on("error", reject);
    }).on("error", reject);
  });
}

mkdirSync(fontDir, { recursive: true });

for (const entry of files) {
  const dest = path.join(fontDir, entry.dest);
  if (existsSync(dest) && statSync(dest).size > 10_000) {
    console.log(`fonts: ${entry.dest} (cached)`);
    continue;
  }
  const tmp = path.join(fontDir, `${entry.dest}.download`);
  const url = `${base}/${entry.rel}`;
  console.log(`fonts: downloading ${entry.dest}...`);
  await download(url, tmp);
  if (existsSync(dest)) renameSync(dest, `${dest}.bak`);
  renameSync(tmp, dest);
  console.log(`fonts: wrote ${entry.dest}`);
}
