const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public/images/colored-logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(path.join(dir, filename)))
           .on('finish', resolve)
           .on('error', reject);
      } else {
        console.log(`Failed to download ${url}: ${res.statusCode}`);
        resolve(); // Continue anyway
      }
    }).on('error', reject);
  });
}

function writeSvg(filename, svgContent) {
  fs.writeFileSync(path.join(dir, filename), svgContent);
}

async function run() {
  await download('https://api.iconify.design/logos:openai.svg', 'openai.svg');
  await download('https://api.iconify.design/simple-icons:anthropic.svg?color=%23d97757', 'claude.svg');
  await download('https://api.iconify.design/simple-icons:anthropic.svg?color=%23d97757', 'claude-code.svg');
  await download('https://api.iconify.design/logos:firebase.svg', 'firebase.svg');
  await download('https://api.iconify.design/logos:google-bigquery.svg', 'google-bq.svg');
  await download('https://api.iconify.design/logos:google-analytics.svg', 'google-analytics.svg');
  await download('https://api.iconify.design/logos:microsoft-excel.svg', 'excel.svg');
  await download('https://api.iconify.design/logos:meta-icon.svg', 'meta-suite.svg');
  await download('https://api.iconify.design/logos:google-ads.svg', 'ads.svg');
  await download('https://api.iconify.design/logos:google-docs.svg', 'google-doc.svg');
  await download('https://api.iconify.design/logos:figma.svg', 'figma.svg');
  await download('https://api.iconify.design/logos:jira.svg', 'jira.svg');
  await download('https://api.iconify.design/logos:notion-icon.svg', 'notion.svg');
  
  // Custom Sarvam (Blue square with atom)
  writeSvg('sarvam.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#4B82F6"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#fff" opacity="0.3"/><circle cx="12" cy="12" r="3" fill="#fff"/></svg>`);

  // Custom Eleven Labs (White circle with pause)
  writeSvg('eleven-labs.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#fff"/><rect x="9" y="8" width="2" height="8" fill="#000"/><rect x="13" y="8" width="2" height="8" fill="#000"/></svg>`);

  // Custom Codex (Cloud with code)
  writeSvg('codex.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 4-4v2.5L7.5 13l2.5 1.5V17zm7 0h-4v-2h4v2z" fill="#5A67D8" transform="scale(0.8) translate(3,3)"/></svg>`);

  // Custom Moengage (Blue circle with user)
  writeSvg('moengage.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#1E3A8A"/><circle cx="12" cy="8" r="4" fill="#fff"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="#fff"/></svg>`);

  // Custom CleverTap (Red C)
  writeSvg('clevertap.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#DC2626"/><path d="M17 8c-2-2-6-2-8 0s-2 6 0 8 6 2 8 0" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="15.5" cy="16.5" r="1.5" fill="#fff"/></svg>`);

  // Looker
  writeSvg('looker.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#4285F4"/><circle cx="12" cy="12" r="4" fill="#34A853"/><circle cx="15" cy="8" r="2" fill="#EA4335"/></svg>`);

  // Claude Design (Orange circle with palette)
  writeSvg('claude-design.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#E27A5F"/><path d="M12 4a8 8 0 0 0-8 8c0 2.21 1.79 4 4 4h.5c1.1 0 2 .9 2 2 0 1.1-.9 2-2 2h-1.5A10 10 0 1 1 12 2v2zm-3.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#fff"/></svg>`);

  // Lovable (Green circle with G)
  writeSvg('lovable.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#10B981"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 2.21 1.79 4 4h2c0-3.31-2.69-6-6-6z" fill="#fff"/></svg>`);

  // Whimsical (Grey circle with abstract shape)
  writeSvg('whimsical.svg', `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#374151"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" opacity="0.8"/><circle cx="12" cy="12" r="2" fill="#000"/></svg>`);
}

run();
