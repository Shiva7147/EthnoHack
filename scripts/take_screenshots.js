import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUTPUT_DIR = path.resolve(__dirname, '..', 'screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function captureScreenshots() {
  console.log("Launching Edge at:", EDGE_PATH);
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1000']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1.5 });

  console.log("Navigating to http://localhost:5173/ ...");
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  // Screenshot 1: Step 1 - NLP Extractor
  console.log("Capturing Screenshot 1: Step 1 - NLP Extractor...");
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'screenshot_1_step1_nlp.png') });

  // Click Step 2
  console.log("Switching to Step 2...");
  const stepButtons = await page.$$('button');
  for (const btn of stepButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('02') && text.includes('Taxonomy')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  console.log("Capturing Screenshot 2: Step 2 - Taxonomy...");
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'screenshot_2_step2_taxonomy.png') });

  // Click Step 3
  console.log("Switching to Step 3...");
  const stepButtons3 = await page.$$('button');
  for (const btn of stepButtons3) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('03') && text.includes('Phytochemistry')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  console.log("Capturing Screenshot 3: Step 3 - Phytochemistry...");
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'screenshot_3_step3_phytochemistry.png') });

  // Click Step 4
  console.log("Switching to Step 4...");
  const stepButtons4 = await page.$$('button');
  for (const btn of stepButtons4) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('04') && text.includes('Molecular Targets')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  console.log("Capturing Screenshot 4: Step 4 - Molecular Targets...");
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'screenshot_4_step4_targets.png') });

  // Click Step 5
  console.log("Switching to Step 5...");
  const stepButtons5 = await page.$$('button');
  for (const btn of stepButtons5) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('05') && text.includes('Pharmacovigilance')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  console.log("Capturing Screenshot 5: Step 5 - Pharmacovigilance...");
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'screenshot_5_step5_pharmacovigilance.png') });

  // Also capture Knowledge Graph View
  console.log("Switching to Knowledge Graph View...");
  const graphButtons = await page.$$('button');
  for (const btn of graphButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('Knowledge Graph')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'screenshot_knowledge_graph.png') });

  await browser.close();
  console.log("All screenshots captured successfully into:", OUTPUT_DIR);
}

captureScreenshots().catch(err => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
