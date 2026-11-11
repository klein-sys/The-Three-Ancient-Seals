import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
await mkdir('docs/screenshots', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-gl=angle','--use-angle=swiftshader','--enable-webgl','--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('pageerror', e => console.log(e.message));
await page.goto('http://127.0.0.1:5173');
await page.waitForFunction(() => !!window.__GAME_APP__);
await page.screenshot({ path: 'docs/screenshots/after-title.png' });
await page.click('#btnMainNewGame');
await page.evaluate(() => { window.__GAME_APP__.finishDialogue(); window.__GAME_APP__.updateThirdPersonCamera(1/60); });
await page.waitForTimeout(1000);
await page.screenshot({ path: 'docs/screenshots/after-gameplay.png' });
await page.keyboard.press('Escape');
await page.screenshot({ path: 'docs/screenshots/after-pause.png' });
console.log(JSON.stringify(await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot().rendererStats)));
await browser.close();



