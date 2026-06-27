import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const deliverablesDir = path.join(root, "deliverables");
const zipPath = path.join(deliverablesDir, "collins-deliverables.zip");

const DELIVERABLES_ENTRIES = [
  "brand-guidelines.pdf",
  "brand.md",
  "design.md",
  "manifest.json",
  "assets.json",
  "collins-agency-demo.mp4",
  "collins-logo-neon.svg",
  "collins-logo-neon-light.svg",
  "collins-logo-neon-512.png",
  "collins-logo-neon-1024.png",
  "collins-logo-neon-light-512.png",
  "collins-logo-neon-light-1024.png",
  "logo.svg",
];

const ROOT_ENTRIES = ["urls.json", "assets.json"];

function ensureSources() {
  const logoSrc = path.join(root, "assets", "logo.svg");
  const logoDest = path.join(deliverablesDir, "logo.svg");
  if (!existsSync(logoSrc)) throw new Error("Missing assets/logo.svg");
  writeFileSync(logoDest, readFileSync(logoSrc));

  const demoSrc = path.join(root, "assets", "collins-agency-demo.mp4");
  const demoDest = path.join(deliverablesDir, "collins-agency-demo.mp4");
  if (!existsSync(demoSrc)) throw new Error("Missing assets/collins-agency-demo.mp4");
  writeFileSync(demoDest, readFileSync(demoSrc));
}

function buildZip() {
  ensureSources();
  const staging = path.join(deliverablesDir, ".zip-staging");
  rmSync(staging, { recursive: true, force: true });
  mkdirSync(staging, { recursive: true });
  mkdirSync(path.join(staging, "deliverables"), { recursive: true });

  for (const name of DELIVERABLES_ENTRIES) {
    const src = path.join(deliverablesDir, name);
    if (!existsSync(src)) throw new Error(`Missing deliverables/${name}`);
    cpSync(src, path.join(staging, name));
    if (name === "assets.json") {
      cpSync(src, path.join(staging, "deliverables", "assets.json"));
    }
  }

  for (const name of ROOT_ENTRIES) {
    const src = path.join(root, name);
    if (!existsSync(src)) throw new Error(`Missing ${name}`);
    cpSync(src, path.join(staging, name));
  }

  rmSync(zipPath, { force: true });
  const ps = `Compress-Archive -Path '${staging.replace(/'/g, "''")}\\*' -DestinationPath '${zipPath.replace(/'/g, "''")}' -Force`;
  execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: "inherit" });
  rmSync(staging, { recursive: true, force: true });
  console.log(`Wrote ${zipPath}`);
}

buildZip();
