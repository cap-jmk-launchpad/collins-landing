import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const deliverables = join(root, "deliverables");
const sizes = [512, 1024];

const variants = [
  { svg: "collins-logo-neon.svg", prefix: "collins-logo-neon" },
  { svg: "collins-logo-neon-light.svg", prefix: "collins-logo-neon-light" },
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const { svg, prefix } of variants) {
  const markup = readFileSync(join(deliverables, svg), "utf8");
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: transparent; }
      #logo { display: block; width: 100%; height: auto; }
    </style>
  </head>
  <body>
    <div id="wrap">${markup.replace("<svg", '<svg id="logo"')}</div>
  </body>
</html>`;

  for (const size of sizes) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(html, { waitUntil: "load" });
    const logo = page.locator("#logo");
    const box = await logo.boundingBox();
    if (!box) throw new Error(`Could not measure ${svg}`);

    const pad = Math.round(size * 0.08);
    const clip = {
      x: Math.max(0, box.x - pad),
      y: Math.max(0, box.y - pad),
      width: Math.min(size, box.width + pad * 2),
      height: Math.min(size, box.height + pad * 2),
    };

    await page.screenshot({
      path: join(deliverables, `${prefix}-${size}.png`),
      clip,
      omitBackground: true,
    });
    console.log(`Wrote ${prefix}-${size}.png`);
  }
}

await browser.close();
