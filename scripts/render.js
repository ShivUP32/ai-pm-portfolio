const { chromium } = require("playwright");
const path = require("path");

const imagesToRender = [
  { html: "01-hero.html", png: "framework-hero.png" },
  { html: "02-architecture.html", png: "framework-architecture.png" },
  { html: "03-before-after.html", png: "framework-shift.png" },
  { html: "04-impact.html", png: "framework-impact.png" },
  { html: "05-personas.html", png: "framework-identities.png" },
];

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 810 },
    deviceScaleFactor: 2, // Retains high resolution / sharp text
  });

  for (const item of imagesToRender) {
    const page = await context.newPage();
    const filePath = path.resolve(__dirname, "../public/images", item.html);
    const fileUrl = `file://${filePath}`;
    
    console.log(`Loading ${fileUrl}...`);
    await page.goto(fileUrl);
    await page.waitForLoadState("networkidle");

    const destPath = path.resolve(__dirname, "../public/images", item.png);
    console.log(`Saving screenshot to ${destPath}...`);
    await page.screenshot({ path: destPath });
    await page.close();
  }

  await browser.close();
  console.log("All screenshots rendered successfully!");
}

main().catch((err) => {
  console.error("Error rendering screenshots:", err);
  process.exit(1);
});
