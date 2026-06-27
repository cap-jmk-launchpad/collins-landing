import { cpSync, existsSync, mkdirSync, rmSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const deliverablesDir = path.join(root, "deliverables");
const today = new Date().toISOString().slice(0, 10);
const zipPath = path.join(root, `collins-deliverables-${today}.zip`);

/** Handoff essentials only — no LaTeX sources, fonts, HTML, or manifest sidecars. */
const HANDOFF_ENTRIES = [
  "brand-guidelines.pdf",
  "brand.md",
  "design.md",
  "collins-agency-demo.mp4",
  "collins-logo-neon.svg",
  "collins-logo-neon-light.svg",
  "collins-logo-neon-512.png",
  "collins-logo-neon-1024.png",
  "collins-logo-neon-light-512.png",
  "collins-logo-neon-light-1024.png",
];

function syncDeliverables() {
  for (const name of ["brand.md", "design.md"]) {
    const src = path.join(root, name);
    if (!existsSync(src)) throw new Error(`Missing ${name}`);
    cpSync(src, path.join(deliverablesDir, name));
  }

  const demoSrc = path.join(root, "assets", "collins-agency-demo.mp4");
  const demoDest = path.join(deliverablesDir, "collins-agency-demo.mp4");
  if (!existsSync(demoSrc)) throw new Error("Missing assets/collins-agency-demo.mp4");
  cpSync(demoSrc, demoDest);
}

function buildZip() {
  syncDeliverables();
  const staging = path.join(deliverablesDir, ".zip-staging");
  const stagingDeliverables = path.join(staging, "deliverables");
  rmSync(staging, { recursive: true, force: true });
  mkdirSync(stagingDeliverables, { recursive: true });

  for (const name of HANDOFF_ENTRIES) {
    const src = path.join(deliverablesDir, name);
    if (!existsSync(src)) throw new Error(`Missing deliverables/${name}`);
    cpSync(src, path.join(stagingDeliverables, name));
  }

  rmSync(zipPath, { force: true });
  const ps = `Compress-Archive -Path '${stagingDeliverables.replace(/'/g, "''")}' -DestinationPath '${zipPath.replace(/'/g, "''")}' -Force`;
  execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: "inherit" });
  rmSync(staging, { recursive: true, force: true });
  console.log(`Wrote ${zipPath}`);
}

buildZip();
