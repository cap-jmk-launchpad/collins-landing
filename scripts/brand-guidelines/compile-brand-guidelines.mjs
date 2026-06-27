import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "../..");
const texDir = scriptDir;
const texFile = "brand-guidelines.tex";
const pdfName = "brand-guidelines.pdf";
const pdfLocal = path.join(texDir, pdfName);
const pdfDeliverables = path.join(root, "deliverables", pdfName);
const pdfRoot = path.join(root, pdfName);
const urlsPath = path.join(root, "urls.json");

function run(cmd, args, options = {}) {
  const result = spawnSync(cmd, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    ...options,
  });
  return result.status === 0;
}

const tectonicLocal = path.join(texDir, "bin", process.platform === "win32" ? "tectonic.exe" : "tectonic");

function tryLocalXeLaTeX() {
  console.log("Trying local xelatex...");
  const ok1 = run("xelatex", [
    "-interaction=nonstopmode",
    "-output-directory",
    texDir,
    texFile,
  ], { cwd: texDir });
  if (!ok1) return false;
  return run("xelatex", [
    "-interaction=nonstopmode",
    "-output-directory",
    texDir,
    texFile,
  ], { cwd: texDir });
}

function tryTectonic() {
  const tectonicCmd = existsSync(tectonicLocal) ? tectonicLocal : "tectonic";
  console.log(`Trying tectonic (${tectonicCmd})...`);
  return run(tectonicCmd, [
    "-X",
    "compile",
    texFile,
    "--outdir",
    texDir,
  ], { cwd: texDir });
}

function tryDocker() {
  console.log("Trying Docker texlive...");
  const mount = `${texDir}:/work`;
  const cmd = [
    "run",
    "--rm",
    "-v",
    mount,
    "-w",
    "/work",
    "texlive/texlive:latest",
    "xelatex",
    "-interaction=nonstopmode",
    texFile,
  ];
  const ok1 = run("docker", cmd);
  if (!ok1) return false;
  return run("docker", cmd);
}

function compilePdf() {
  if (existsSync(pdfLocal)) {
    // stale cleanup handled by overwrite
  }

  if (tryLocalXeLaTeX()) return pdfLocal;
  if (tryTectonic()) return pdfLocal;
  if (tryDocker()) return pdfLocal;

  throw new Error(
    "Could not compile brand-guidelines.tex. Install XeLaTeX, tectonic (choco install tectonic), or Docker.",
  );
}

async function uploadToCatbox(filePath) {
  const boundary = `----CollinsBoundary${Date.now()}`;
  const fileBuffer = readFileSync(filePath);
  const filename = path.basename(filePath);

  const preamble = [
    `--${boundary}`,
    'Content-Disposition: form-data; name="reqtype"',
    "",
    "fileupload",
    `--${boundary}`,
    `Content-Disposition: form-data; name="fileToUpload"; filename="${filename}"`,
    "Content-Type: application/pdf",
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

function updateUrls(catboxUrl) {
  let raw = readFileSync(urlsPath, "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
  const urls = JSON.parse(raw);
  const previous = { ...(urls.previous || {}) };
  if (urls["brand-guidelines.pdf"]) {
    previous["brand-guidelines.pdf"] = urls["brand-guidelines.pdf"];
  }
  urls.previous = previous;
  urls["brand-guidelines.pdf"] = catboxUrl;
  writeFileSync(urlsPath, `${JSON.stringify(urls, null, 2)}\n`, "utf8");
  console.log(`Updated ${urlsPath}`);
}

function syncManifestUrls(catboxUrl) {
  for (const rel of ["deliverables/manifest.json", "deliverables/assets.json", "assets.json"]) {
    const filePath = path.join(root, rel);
    if (!existsSync(filePath)) continue;
    let raw = readFileSync(filePath, "utf8");
    if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
    const data = JSON.parse(raw);
    if (data.catbox) data.catbox.guidelinesPdf = catboxUrl;
    if (data.guidelinesPdf !== undefined) data.guidelinesPdf = catboxUrl;
    writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
    console.log(`Updated ${rel}`);
  }
}

mkdirSync(path.dirname(pdfDeliverables), { recursive: true });

console.log("Ensuring bundled brand fonts...");
await import("./ensure-fonts.mjs");

const built = compilePdf();
if (!existsSync(built)) {
  throw new Error(`Expected PDF at ${built} but file was not created.`);
}

copyFileSync(built, pdfDeliverables);
copyFileSync(built, pdfRoot);

const texSource = readFileSync(path.join(texDir, texFile), "utf8").replace(
  "\\graphicspath{{../../deliverables/}}",
  "\\graphicspath{{./}}",
);
writeFileSync(path.join(root, "deliverables", texFile), texSource, "utf8");
copyFileSync(path.join(texDir, "collins-beamer.sty"), path.join(root, "deliverables", "collins-beamer.sty"));
const deliverablesFonts = path.join(root, "deliverables", "fonts");
mkdirSync(deliverablesFonts, { recursive: true });
cpSync(path.join(texDir, "fonts"), deliverablesFonts, { recursive: true });
console.log(`Wrote ${pdfDeliverables}`);
console.log(`Wrote ${pdfRoot}`);

try {
  const catboxUrl = await uploadToCatbox(pdfDeliverables);
  console.log(`Uploaded to ${catboxUrl}`);
  updateUrls(catboxUrl);
  syncManifestUrls(catboxUrl);
} catch (error) {
  console.warn(`Catbox upload skipped: ${error.message}`);
}
