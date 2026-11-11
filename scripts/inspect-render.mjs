import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try{
 const page=await browser.newPage({viewport:{width:1280,height:800}});
 page.on('pageerror',e=>console.log('ERROR',e.message));
 await page.goto('http://127.0.0.1:5173');
 await page.waitForFunction(()=>!!window.__GAME_APP__);
 console.log(await page.evaluate(()=>{const a=window.__GAME_APP__;cancelAnimationFrame(a.animationFrameId);return a.getDebugSnapshot();}));
 await page.screenshot({path:'docs/screenshots/after-title.png',timeout:20000});
 await page.click('#btnMainNewGame');
 await page.evaluate(()=>{const a=window.__GAME_APP__;a.finishDialogue();a.syncVisualsFromState();a.updateThirdPersonCamera(1/60);a.updateHUDDisplay();a.renderer.render(a.scene,a.camera);});
 await page.screenshot({path:'docs/screenshots/after-gameplay.png',timeout:20000});
 await page.evaluate(()=>window.__GAME_APP__.pauseGame());
 await page.screenshot({path:'docs/screenshots/after-pause.png'});
}finally{await browser.close();}
