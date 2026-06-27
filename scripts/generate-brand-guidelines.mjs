import { chromium } from "playwright";
import { copyFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "deliverables", "brand-guidelines.html");
const pdfDeliverables = path.join(root, "deliverables", "brand-guidelines.pdf");
const pdfRoot = path.join(root, "brand-guidelines.pdf");
const htmlUrl = `file:///${htmlPath.replace(/\\/g, "/")}`;

mkdirSync(path.dirname(pdfDeliverables), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(htmlUrl, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: pdfDeliverables,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await browser.close();

copyFileSync(pdfDeliverables, pdfRoot);
console.log(`Wrote ${pdfDeliverables}`);
console.log(`Wrote ${pdfRoot}`);
