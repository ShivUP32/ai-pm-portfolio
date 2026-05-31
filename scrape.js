const { chromium } = require('playwright');
const fs = require('fs');
const https = require('https');

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

(async () => {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log("Scraping Knot.Dating...");
    await page.goto('https://www.behance.net/gallery/215724655/Membership-Plans-KnotDating', { waitUntil: 'networkidle' });
    let knotImgs = await page.evaluate(() => Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => src.includes('project_modules')));
    if(knotImgs.length > 0) {
      console.log('Downloading Knot Image:', knotImgs[0]);
      await download(knotImgs[0], 'public/images/knot.png');
    }

    console.log("Scraping Hood Streak...");
    await page.goto('https://www.behance.net/gallery/207847495/Streak-Gamification-in-Hood-', { waitUntil: 'networkidle' });
    let hoodStreakImgs = await page.evaluate(() => Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => src.includes('project_modules')));
    if(hoodStreakImgs.length > 0) {
      console.log('Downloading Hood Streak Image:', hoodStreakImgs[0]);
      await download(hoodStreakImgs[0], 'public/images/hood.png');
    }

    console.log("Scraping Reevo...");
    await page.goto('https://www.figma.com/proto/ZuF3PFGE0DEKZScwjwkrwy/Work-Deck?node-id=183-6156&t=NBH3YPWrAUXlqNIG-6', { waitUntil: 'networkidle' });
    // For Figma, we can't extract images easily. Let's just take a screenshot.
    console.log("Waiting for Figma to render...");
    await page.waitForTimeout(10000); // 10 seconds to ensure canvas renders
    await page.screenshot({ path: 'public/images/reevo.png' });
    console.log('Took screenshot of Reevo Figma Deck');
  } catch (err) {
    console.error("Error during scraping:", err);
  } finally {
    await browser.close();
  }
})();
