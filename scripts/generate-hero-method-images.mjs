import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");
mkdirSync(assetsDir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 800;
const DEVICE_SCALE = 2;

const steps = [
  {
    id: "01",
    slug: "discover",
    number: "01",
    icon: "compass",
    accent: "#39ff14",
    title: "Discover",
    caption: "Start with a 30-minute strategy call. Tell us where momentum is stuck.",
  },
  {
    id: "02",
    slug: "strategy",
    number: "02",
    icon: "map",
    accent: "#00ff88",
    title: "Map the sprint",
    caption: "Week one maps SEO, paid, content, and automation to your KPIs.",
  },
  {
    id: "03",
    slug: "scope",
    number: "03",
    icon: "scope",
    accent: "#b6ff00",
    title: "Scope with clarity",
    caption: "Transparent line items, senior access, and reporting cadence locked in.",
  },
  {
    id: "04",
    slug: "ship",
    number: "04",
    icon: "rocket",
    accent: "#39ff14",
    title: "Ship campaigns",
    caption: "Content, paid media, and nurture launch from one shared playbook.",
  },
  {
    id: "05",
    slug: "automate",
    number: "05",
    icon: "flow",
    accent: "#00ff88",
    title: "Automate and connect",
    caption: "CRM and workflows wired to the same growth plan.",
  },
  {
    id: "06",
    slug: "measure",
    number: "06",
    icon: "chart",
    accent: "#b6ff00",
    title: "Measure and compound",
    caption: "Revenue tied reporting and quarterly channel tuning.",
  },
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function iconSvg(type, color) {
  const stroke = `stroke="${color}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"`;
  switch (type) {
    case "compass":
      return `<circle cx="120" cy="120" r="72" ${stroke} opacity="0.35"/>
        <circle cx="120" cy="120" r="8" fill="${color}" opacity="0.9"/>
        <path d="M120 48 L128 112 L120 120 L112 112 Z" fill="${color}" opacity="0.85"/>
        <path d="M120 192 L112 128 L120 120 L128 128 Z" fill="${color}" opacity="0.25"/>`;
    case "map":
      return `<rect x="48" y="56" width="144" height="128" rx="12" ${stroke} opacity="0.35"/>
        <path d="M72 160 L96 120 L120 140 L144 96 L168 112" ${stroke}/>
        <circle cx="96" cy="120" r="6" fill="${color}"/>
        <circle cx="144" cy="96" r="6" fill="${color}" opacity="0.7"/>`;
    case "scope":
      return `<rect x="56" y="72" width="128" height="96" rx="10" ${stroke} opacity="0.35"/>
        <path d="M72 104 H168 M72 128 H148 M72 152 H128" ${stroke} opacity="0.7"/>
        <path d="M184 88 L200 72 L200 168 L184 152" ${stroke} opacity="0.5"/>`;
    case "rocket":
      return `<path d="M120 48 C120 48 88 88 88 136 C88 152 104 168 120 168 C136 168 152 152 152 136 C152 88 120 48 120 48Z" ${stroke}/>
        <circle cx="120" cy="120" r="16" fill="${color}" opacity="0.2"/>
        <path d="M104 168 L96 192 L120 184 L144 192 L136 168" ${stroke} opacity="0.6"/>`;
    case "flow":
      return `<rect x="48" y="80" width="56" height="56" rx="10" ${stroke}/>
        <rect x="144" y="80" width="56" height="56" rx="10" ${stroke}/>
        <rect x="96" y="144" width="56" height="56" rx="10" ${stroke}/>
        <path d="M104 108 H136 M176 108 H152 M152 136 L124 152" ${stroke} opacity="0.7"/>`;
    case "chart":
      return `<path d="M56 168 V88 M56 168 H184" ${stroke} opacity="0.5"/>
        <rect x="72" y="128" width="24" height="40" rx="4" fill="${color}" opacity="0.35"/>
        <rect x="108" y="104" width="24" height="64" rx="4" fill="${color}" opacity="0.55"/>
        <rect x="144" y="80" width="24" height="88" rx="4" fill="${color}" opacity="0.85"/>`;
    default:
      return "";
  }
}

function cardHtml(step, { textless = false } = {}) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap" rel="stylesheet" />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        width: ${WIDTH}px;
        height: ${HEIGHT}px;
        font-family: "Plus Jakarta Sans", system-ui, sans-serif;
        background: #040806;
        overflow: hidden;
      }
      .card {
        position: relative;
        width: 100%;
        height: 100%;
        background:
          radial-gradient(ellipse 70% 55% at 85% 15%, rgba(57, 255, 20, 0.08), transparent 60%),
          radial-gradient(ellipse 50% 45% at 10% 90%, rgba(0, 255, 136, 0.06), transparent 55%),
          linear-gradient(155deg, #0a100c 0%, #040806 45%, #0f1610 100%);
      }
      .grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(57, 255, 20, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(57, 255, 20, 0.04) 1px, transparent 1px);
        background-size: 48px 48px;
        mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 85%);
      }
      .frame {
        position: absolute;
        inset: 28px;
        border: 1px solid rgba(57, 255, 20, 0.14);
        border-radius: 20px;
        box-shadow: inset 0 0 40px rgba(57, 255, 20, 0.03);
      }
      .step-num {
        position: absolute;
        top: 52px;
        left: 56px;
        font-size: 120px;
        font-weight: 800;
        line-height: 1;
        letter-spacing: -0.06em;
        color: ${step.accent};
        opacity: 0.18;
        user-select: none;
        pointer-events: none;
      }
      .copy {
        position: absolute;
        left: 56px;
        top: 50%;
        transform: translateY(-46%);
        max-width: 52%;
        z-index: 2;
      }
      .step-tag {
        margin: 0 0 14px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #9aab94;
      }
      .card-title {
        margin: 0 0 12px;
        font-size: 40px;
        font-weight: 800;
        line-height: 1.08;
        letter-spacing: -0.02em;
        color: #f0f7eb;
      }
      .card-caption {
        margin: 0;
        max-width: 420px;
        font-family: "Inter", system-ui, sans-serif;
        font-size: 17px;
        font-weight: 400;
        line-height: 1.5;
        color: #9aab94;
      }
      .icon-wrap {
        position: absolute;
        right: 72px;
        top: 50%;
        transform: translateY(-50%);
        width: 240px;
        height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(57, 255, 20, 0.08) 0%, transparent 70%);
        box-shadow: 0 0 60px rgba(57, 255, 20, 0.12);
      }
      .icon-wrap svg {
        width: 240px;
        height: 240px;
        filter: drop-shadow(0 0 18px ${step.accent}88);
      }
      .accent-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, transparent, ${step.accent}, transparent);
        opacity: 0.65;
      }
      .label {
        position: absolute;
        bottom: 48px;
        left: 56px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #6b7a66;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="grid"></div>
      <div class="frame"></div>
      <div class="step-num">${step.number}</div>
      ${
        textless
          ? ""
          : `<div class="copy">
        <p class="step-tag">Step ${step.number} of 6</p>
        <h1 class="card-title">${escapeHtml(step.title)}</h1>
        <p class="card-caption">${escapeHtml(step.caption)}</p>
      </div>`
      }
      <div class="icon-wrap">
        <svg viewBox="0 0 240 240" aria-hidden="true">
          ${iconSvg(step.icon, step.accent)}
        </svg>
      </div>
      <p class="label">Collins method</p>
      <div class="accent-bar"></div>
    </div>
  </body>
</html>`;
}

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: DEVICE_SCALE,
});
const page = await context.newPage();

const variants = [
  { textless: false, prefix: "hero-method" },
  { textless: true, prefix: "hero-method-reel" },
];

for (const step of steps) {
  for (const variant of variants) {
    await page.setContent(cardHtml(step, { textless: variant.textless }), {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    const filename = `${variant.prefix}-${step.id}-${step.slug}.png`;
    await page.screenshot({
      path: join(assetsDir, filename),
      type: "png",
    });
    console.log(`Wrote assets/${filename}`);
  }
}

await browser.close();
