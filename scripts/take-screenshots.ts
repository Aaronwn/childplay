import { chromium } from "playwright";
import { spawn, type ChildProcess } from "child_process";
import path from "path";

const PORT = 3099;
const BASE = `http://localhost:${PORT}`;
const OUT = path.resolve(import.meta.dirname, "../screenshots");

async function waitForServer(url: string, timeout = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server not ready at ${url}`);
}

async function main() {
  // Start dev server
  console.log("Starting dev server...");
  const server: ChildProcess = spawn("npx", ["vite", "--port", String(PORT)], {
    cwd: path.resolve(import.meta.dirname, ".."),
    stdio: "pipe",
  });

  try {
    await waitForServer(BASE);
    console.log("Server ready.");

    const browser = await chromium.launch();
    const ctx = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 2,
    });
    const page = await ctx.newPage();

    // Screenshot 1: Homepage
    console.log("Taking homepage screenshot...");
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(OUT, "homepage.png"),
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
    console.log("✓ homepage.png");

    // Screenshot 2: Activity detail page
    console.log("Taking activity detail screenshot...");
    await page.goto(`${BASE}/activities/sound-hide-and-seek`, {
      waitUntil: "networkidle",
    });
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(OUT, "activity-detail.png"),
      fullPage: false,
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
    console.log("✓ activity-detail.png");

    await browser.close();
    console.log("Done!");
  } finally {
    server.kill();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
