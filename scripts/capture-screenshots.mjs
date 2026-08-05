/**
 * Capture after-screenshots for DoD (Lika review).
 * Run: npm run screenshots
 * Uses live GitHub Pages preview by default.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const base =
  process.env.SCREENSHOT_BASE ??
  "https://thoriumsteinar.github.io/upgrade-piperight-demo";

const outDir = path.join(process.cwd(), "docs", "screenshots");

const pages = [
  { file: "after-home.png", url: `${base}/` },
  { file: "after-services.png", url: `${base}/services/` },
  { file: "after-contact.png", url: `${base}/contact/` },
];

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  for (const { file, url } of pages) {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(outDir, file), fullPage: false });
    console.log("Saved", file, "←", url);
  }

  await browser.close();
  console.log("Done → docs/screenshots/");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
