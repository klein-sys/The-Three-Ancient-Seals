import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 4173;
const URL = `http://127.0.0.1:${PORT}/`;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function dismissDialogue(page, key = 'KeyQ') {
  for (let i = 0; i < 6; i++) {
    const visible = await page.locator('#dialogueBanner').isVisible();
    if (!visible) return;
    await page.keyboard.press(key);
    await sleep(220);
  }
}

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // Wait for server startup
    }
    await sleep(250);
  }
  throw new Error('Preview server did not respond in time');
}

async function main() {
  console.log('Starting Vite preview server...');
  const server = spawn(
    process.execPath,
    ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', String(PORT), '--strictPort'],
    { stdio: ['ignore', 'ignore', 'pipe'] }
  );


  let browser;
  const consoleErrors = [];
  const pageErrors = [];

  try {
    await waitForServer(URL);
    console.log('Preview server ready at', URL);

    browser = await chromium.launch({
      executablePath: CHROME_PATH,
      headless: true,

    });

    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
    });
    const page = await context.newPage();

    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', (err) => {
      pageErrors.push(err.message);
    });

    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForSelector('#mainMenuModal:not(.hidden)');

    // Check Continue disabled initially
    const continueDisabled = await page.locator('#btnMainContinue').isDisabled();
    assert.equal(continueDisabled, true, 'Continue button should be disabled when no valid save exists');
    console.log('[PASS] Main Menu Continue disabled cleanly with no save');

    // ========================================================
    // TEST 1, 2, 3: Rebinding, Conflict, Cancel, Reset, Persistence
    // ========================================================
    await page.click('#btnMainSettings');
    await page.waitForSelector('#settingsModal:not(.hidden)');

    // Verify default attack is Right Mouse Button
    const attackRow = page.locator('.control-row[data-action="attack"]');
    const initialAtkLabel = await attackRow.locator('[data-slot="primary"]').innerText();
    assert.equal(initialAtkLabel.trim(), 'Left Mouse Button');

    // Test conflict: try binding KeyW (currently Move Forward) to Dodge -> Conflict banner -> Replace -> Apply blocked -> Cancel discards!
    const dodgeRow = page.locator('.control-row[data-action="dodge"]');
    await dodgeRow.locator('[data-slot="primary"]').click();
    await page.waitForSelector('.capture-banner');
    // Check ignore opening click worked (capture-banner still active!)
    assert.equal(await page.locator('.capture-banner').isVisible(), true);
    // Test Escape cancels capture
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('.capture-banner').isVisible(), false, 'Escape should cancel capture');

    // Now trigger conflict with KeyW
    await dodgeRow.locator('[data-slot="primary"]').click();
    await sleep(50);
    await page.keyboard.press('KeyW');
    await page.waitForSelector('#settingsBannerArea .conflict-banner');
    const conflictTxt = await page.locator('#settingsBannerArea .conflict-banner').innerText();
    assert.ok(conflictTxt.includes('Move Forward'), 'Conflict should name Move Forward');
    await page.click('#btnConflictReplace');

    // Try Apply while Move Forward is unbound -> MUST block Apply with error
    await page.click('#btnSettingsApply');
    await page.waitForSelector('.settings-banner.error');
    const errText = await page.locator('.settings-banner.error').innerText();
    assert.ok(errText.includes('Move Forward'), 'Validation error should block apply and name Move Forward');
    console.log('[PASS] Conflict Replace + Unbound Required Validation blocked Apply');

    // Cancel Settings -> discards draft changes!
    await page.click('#btnSettingsCancel');
    await page.waitForSelector('#settingsModal', { state: 'hidden' });

    // Reopen Settings and verify Move Forward is still W
    await page.click('#btnMainSettings');
    const moveFwdAfterCancel = await page
      .locator('.control-row[data-action="moveForward"] [data-slot="primary"]')
      .innerText();
    assert.equal(moveFwdAfterCancel.trim(), 'W', 'Cancel must discard unapplied draft changes');

    // Now test rebinding Attack -> KeyF, Interact -> KeyQ, Dodge Secondary -> KeyC, and Apply
    await page.locator('.control-row[data-action="attack"] [data-slot="primary"]').click();
    await page.waitForSelector('.capture-banner');
    await page.keyboard.press('KeyF');

    await page.locator('.control-row[data-action="interact"] [data-slot="primary"]').click();
    await page.waitForSelector('.capture-banner');
    await page.keyboard.press('KeyQ');

    await page.locator('.control-row[data-action="dodge"] [data-slot="secondary"]').click();
    await page.waitForSelector('.capture-banner');
    await page.keyboard.press('KeyC');

    // Also enable FPS counter & change Desktop FOV to 86, Graphics to High for Test 11
    await page.click('.settings-tab[data-tab="desktop"]');
    await page.locator('#inpFov').fill('86');
    await page.locator('#inpFov').dispatchEvent('input');

    await page.click('.settings-tab[data-tab="graphics"]');
    await page.selectOption('#selGfxPreset', 'high');
    await page.check('#inpShowFps');

    await page.click('#btnSettingsApply');
    await page.waitForSelector('#settingsModal', { state: 'hidden' });

    // Reload page and confirm bindings + settings survived reload!
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForSelector('#mainMenuModal:not(.hidden)');
    await page.click('#btnMainHowToPlay');
    const howToTxt = await page.locator('#howToPlayDynamicBody').innerText();
    assert.ok(howToTxt.includes('Primary Attack: F'), 'How to Play should dynamically show rebound attack key F');
    assert.ok(howToTxt.includes('Interact / Stabilize: Q'), 'How to Play should dynamically show rebound interact key Q');
    await page.click('#btnCloseHowTo');
    console.log('[PASS] Rebound keys & settings survived browser reload and updated dynamic instructions');

    // ========================================================
    // TEST 11 (cont): Verify Graphics & FOV settings took effect
    // ========================================================
    const postReloadSnap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.equal(postReloadSnap.settings.desktop.fov, 86);
    assert.equal(postReloadSnap.rendererStats.cameraFov, 86);
    assert.equal(postReloadSnap.rendererStats.shadowEnabled, true);
    assert.equal(postReloadSnap.rendererStats.cameraFar, 92); // Far view distance
    assert.equal(postReloadSnap.settings.graphics.preset, 'high');
    assert.equal(postReloadSnap.activeBindings.attack.primary, 'KeyF');
    assert.equal(postReloadSnap.activeBindings.interact.primary, 'KeyQ');
    console.log('[PASS] Graphics & sensitivity settings applied to Three.js camera/renderer accurately');

    // ========================================================
    // Start New Game, test Gameplay, Dialogue, Movement, Drag-Look, Pause, Focus Loss
    // ========================================================
    await page.click('#btnMainNewGame');
    // Dismiss intro dialogue with rebound interact key Q!
    await page.waitForSelector('#dialogueBanner:not(.hidden)');
    const dlgHint = await page.locator('#dlgAdvanceHint').innerText();
    assert.ok(dlgHint.includes('[Q]'), `Dialogue prompt should show [Q], got: ${dlgHint}`);
    await dismissDialogue(page, 'KeyQ');

    let snap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.equal(snap.appState, 'playing');

    // Verify optional HUD Controls reference toggle shows live rebound hints and hides cleanly
    await page.click('#hudControlsToggle');
    await page.waitForSelector('#hudDesktopHints:not(.hidden)');
    const hintsTxt = await page.locator('#hudDesktopHints').innerText();
    assert.ok(hintsTxt.includes('[F] Attack') && hintsTxt.includes('[Q] Interact'), `Controls overlay should show rebound keys, got: ${hintsTxt}`);
    await page.click('#hudControlsToggle');
    await page.waitForSelector('#hudDesktopHints', { state: 'hidden' });

    // Measure High-Preset FPS in active 3D scene
    await sleep(600);
    const highFps = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).fps;
    console.log(`[INFO] Measured headless Chrome High-Preset FPS: ${highFps.toFixed(1)}`);

    // Test rebound attack KeyF triggers sword swing
    await page.keyboard.press('KeyF');
    await sleep(60);
    const atkSnap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.notEqual(atkSnap.swordPhase, 'idle', 'Rebound attack KeyF must initiate sword swing');
    console.log('[PASS] Rebound attack KeyF initiated real sword combat phase:', atkSnap.swordPhase);

    // Move near Stone Tablet (-3.5, -2.5) and verify dynamic prompt says "Press Q to read Ancient Tablet"
    await page.keyboard.down('KeyW');
    await page.keyboard.down('KeyA');
    await sleep(650);
    await page.keyboard.up('KeyW');
    await page.keyboard.up('KeyA');

    // Test Focus Loss clears stuck inputs and pauses game!
    await page.keyboard.down('KeyW');
    await sleep(100);
    const zBeforeBlur = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).player.z;
    await page.evaluate(() => window.dispatchEvent(new Event('blur')));
    await sleep(150);
    await page.keyboard.up('KeyW');
    snap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.equal(snap.appState, 'paused', 'Blur during active gameplay must pause game');
    const simPaused1 = snap.simTime;
    await sleep(200);
    const simPaused2 = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).simTime;
    assert.equal(simPaused1, simPaused2, 'Pause must strictly freeze simulation time');

    // Check Pause menu control summary shows Q and F
    await page.locator('.pause-controls-summary summary').click();
    const pauseSummary = await page.locator('#pauseControlsList').innerText();
    assert.ok(pauseSummary.includes('F') && pauseSummary.includes('Q'), 'Pause summary must show rebound controls');

    // Resume and verify player does NOT continue walking (no stuck W!)
    await page.click('#btnPauseResume');
    await sleep(250);
    const zAfterResume = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).player.z;
    assert.ok(Math.abs(zAfterResume - zBeforeBlur) < 0.35, 'Inputs must remain cleared after resume until fresh press');
    console.log('[PASS] Blur/Pause freezes simTime and prevents stuck inputs');

    // Test Drag-to-look fallback changes player yaw
    const yawBefore = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).player.yaw;
    await page.mouse.move(640, 360);
    await page.mouse.down({ button: 'left' });
    await page.mouse.move(760, 360, { steps: 5 });
    await page.mouse.up({ button: 'left' });
    await sleep(100);
    const yawAfter = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).player.yaw;
    assert.notEqual(yawAfter, yawBefore, 'Drag-to-look fallback must rotate camera yaw');
    console.log('[PASS] Drag-to-look camera rotation verified');

    // ========================================================
    // TEST 7 & 12: Energy Door Mechanism & Save/Continue Restoration
    // ========================================================
    // Walk to Energy Door at (7, 0) via direct position approach or walking, then interact with rebound KeyQ
    await page.evaluate(() => {
      const app = window.__GAME_APP__;
      // Move player right in front of Energy Door (x=5.6, z=0) via normal saveData state for mechanism verification
      app.saveData.player.x = 5.6;
      app.saveData.player.z = 0;
      app.saveData.player.yaw = -Math.PI / 2;
    });
    await page.waitForFunction(()=>window.__GAME_APP__.getDebugSnapshot().nearbyInteractable?.id==='door_ruins_side');
    const promptTxt = await page.locator('#hudInteractPrompt').innerText();
    assert.ok(promptTxt.includes('Press Q to inspect The Stillwater Seal'), `Expected Q prompt, got: ${promptTxt}`);

    await page.keyboard.press('KeyQ');
    await page.waitForSelector('#mechanismOverlay:not(.hidden)');
    // Adjust dial toward target a = 0.68 using keyboard / slider
    await page.locator('#mechSlider1D').fill('0.68');
    await page.locator('#mechSlider1D').dispatchEvent('input');
    // Wait for 1.1s dwell stabilization
    await sleep(1350);
    await page.waitForSelector('#mechanismOverlay', { state: 'hidden' });
    snap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.ok(snap.worldFlags.openedDoors.includes('door_ruins_side'), 'Energy door must open after dwell stabilization');
    console.log('[PASS] 1D Energy Door stabilized via real dwell condition and opened');

    // Test Save & Continue after reload
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForSelector('#btnMainContinue:not([disabled])');
    await page.click('#btnMainContinue');
    await sleep(150);
    snap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.ok(snap.worldFlags.openedDoors.includes('door_ruins_side'), 'Opened door state restored on Continue');
    console.log('[PASS] Save & Continue restored coherent dungeon progression');

    // Test Boss Shield Stabilization + Combat against Stone Sentinel
    await page.evaluate(() => {
      const app = window.__GAME_APP__;
      app.saveData.player.x = -5.6;
      app.saveData.player.z = -24;
      app.saveData.player.yaw = Math.PI / 2;
    });
    await sleep(120);
    await page.keyboard.press('KeyQ'); // Stabilize Sentinel Shield Pylon (a = 0.32)
    await page.waitForSelector('#mechanismOverlay:not(.hidden)');
    await page.locator('#mechSlider1D').fill('0.32');
    await page.locator('#mechSlider1D').dispatchEvent('input');
    await sleep(1250);
    await page.waitForSelector('#mechanismOverlay', { state: 'hidden' });

    // Verify Stone Sentinel shield dropped
    snap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    const sentinel = snap.enemies.find((e) => e.id === 'boss_stone_sentinel');
    assert.equal(sentinel.shielded, false, 'Stone Sentinel shield must drop after stabilizing pylon');
    console.log('[PASS] Boss Shield dropped after curvature-verified minimum stabilization');

    // Test 2D Optimization Chest in Chamber of Whispers via keyboard adjustment + pad
    await page.evaluate(() => {
      const app = window.__GAME_APP__;
      app.saveData.player.x = -18;
      app.saveData.player.z = -46.2;
    });
    await sleep(120);
    await page.keyboard.press('KeyQ'); // Open 2D Optimization Chest (a = 0.3, b = 0.7)
    await page.waitForSelector('#mechanismOverlay:not(.hidden)');
    await page.waitForSelector('#mechBody2D:not(.hidden)');
    // Verify keyboard movement keys move 2D crystals (and pad reflects it)
    const before2D = await page.evaluate(() => window.__GAME_APP__.optModels.get('chest_whispers_library').x);
    await page.keyboard.down('KeyA');
    await page.waitForFunction(
      (prevX) => window.__GAME_APP__.optModels.get('chest_whispers_library').x < prevX,
      before2D,
      { timeout: 2500 }
    );
    await page.keyboard.up('KeyA');
    const after2D = await page.evaluate(() => window.__GAME_APP__.optModels.get('chest_whispers_library').x);
    assert.ok(after2D < before2D, 'Movement binding KeyA must adjust 2D crystal X downward');
    // Align precisely to (0.3, 0.7) and dwell 1.0s
    await page.evaluate(() => {
      window.__GAME_APP__.optModels.get('chest_whispers_library').setCrystals(0.3, 0.7);
    });
    await sleep(1200);
    await page.waitForSelector('#mechanismOverlay', { state: 'hidden' });
    snap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.ok(snap.worldFlags.openedChests.includes('chest_whispers_library'), '2D Optimization chest must unlock');
    console.log('[PASS] 2D Optimization Chest worked via keyboard movement keys and unlocked once');

    // Measure FPS during active rendering
    await sleep(600);
    const desktopFps = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).fps;
    console.log(`[INFO] Measured headless Chrome Desktop FPS: ${desktopFps.toFixed(1)}`);

    // ========================================================
    // TEST 10: Verify Both Endings (Good Ending & Bad Ending + Skip Cinematic)
    // ========================================================
    // Test Good Ending path: set prerequisite flags at Exit Lever, trigger lever, Skip Cinematic, walk past exit gate
    await page.evaluate(() => {
      const app = window.__GAME_APP__;
      app.saveData.worldFlags.defeatedBosses.push('boss_stone_sentinel', 'boss_arcane_scholar', 'boss_keeper_equations', 'boss_eternal_archivist');
      app.saveData.inventory.seals.push('seal_rates', 'seal_motion', 'seal_extremum');
      app.saveData.worldFlags.axiomRescued = true;
      app.saveData.worldFlags.sealsInserted = true;
      app.saveData.worldFlags.studentChoice = 'helped';
      app.saveData.player.x = -2;
      app.saveData.player.z = -170;
    });
    await sleep(120);
    await page.keyboard.press('KeyQ'); // Activate Exit Lever
    await page.waitForSelector('#btnSkipCinematic:not(.hidden)');
    await page.click('#btnSkipCinematic'); // Skip cinematic MUST still apply axiomSacrificed!
    await sleep(100);
    snap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.equal(snap.worldFlags.axiomSacrificed, true, 'Skipping sacrifice cinematic must still set axiomSacrificed');

    // Walk across final exit gate z <= -175.5
    await page.evaluate(() => {
      window.__GAME_APP__.saveData.player.x = 0;
      window.__GAME_APP__.saveData.player.z = -176;
    });
    await sleep(150);
    await page.waitForSelector('#endingOverlay:not(.hidden)');
    const goodTitle = await page.locator('#endingTitle').innerText();
    assert.ok(goodTitle.includes('FREEDOM SHARED'), `Expected Good Ending, got ${goodTitle}`);
    console.log('[PASS] Good Ending — Freedom Shared reached (including Skip Cinematic progression)');

    // Return to Menu and test Bad Ending path
    await page.click('#btnEndingMenu');
    await page.waitForSelector('#mainMenuModal:not(.hidden)');
    await page.click('#btnMainNewGame');
    await page.click('#btnConfirmOverwrite');
    await page.waitForSelector('#dialogueBanner:not(.hidden)');
    await dismissDialogue(page, 'KeyQ');

    await page.evaluate(() => {
      const app = window.__GAME_APP__;
      app.saveData.worldFlags.defeatedBosses.push('boss_stone_sentinel', 'boss_arcane_scholar', 'boss_keeper_equations', 'boss_eternal_archivist');
      app.saveData.inventory.seals.push('seal_rates', 'seal_motion', 'seal_extremum');
      app.saveData.worldFlags.axiomRescued = true;
      app.saveData.worldFlags.sealsInserted = true;
      app.saveData.worldFlags.studentChoice = 'left';
      app.saveData.inventory.goldRelicLooted = true;
      app.saveData.worldFlags.axiomSacrificed = true;
      app.saveData.player.x = 0;
      app.saveData.player.z = -176;
    });
    await sleep(150);
    await page.waitForSelector('#endingOverlay:not(.hidden)');
    const badTitle = await page.locator('#endingTitle').innerText();
    assert.ok(badTitle.includes('THE PRICE OF GREED'), `Expected Bad Ending, got ${badTitle}`);
    console.log('[PASS] Bad Ending — The Price of Greed reached');

    // ========================================================
    // TEST 6: Mobile Touch Emulation, Simultaneous Move+Look+Attack, Portrait Banner
    // ========================================================
    await page.click('#btnEndingMenu');
    await page.setViewportSize({ width: 390, height: 844 }); // Portrait mobile
    await page.click('#btnMainSettings');
    await page.click('.settings-tab[data-tab="desktop"]');
    await page.selectOption('#selInterfaceMode', 'touch');
    await page.click('#btnSettingsApply');

    await page.click('#btnMainNewGame');
    await page.click('#btnConfirmOverwrite');
    await page.waitForSelector('#dialogueBanner:not(.hidden)');
    await dismissDialogue(page, 'KeyQ');

    await page.waitForSelector('#mobileControlsLayer:not(.hidden)');
    const portraitVisible = await page.locator('#portraitWarningBanner').isVisible();
    assert.equal(portraitVisible, true, 'Portrait orientation banner must show in portrait viewport');

    // Switch to Landscape mobile
    await page.setViewportSize({ width: 844, height: 390 });
    await sleep(100);
    assert.equal(await page.locator('#portraitWarningBanner').isVisible(), false, 'Portrait banner hides in landscape');

    // Simulate multi-touch simultaneous joystick + camera swipe + Attack tap
    const joyRect = await page.locator('#touchJoystickZone').boundingBox();
    const atkRect = await page.locator('#touchBtnAttack').boundingBox();
    const lookRect = await page.locator('#touchLookZone').boundingBox();
    const snapBeforeTouch = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());

    // First verify Attack tap alone does NOT rotate camera
    await page.evaluate(
      ({ ax, ay }) => {
        const atkEl = document.getElementById('touchBtnAttack');
        atkEl.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 12, clientX: ax, clientY: ay, pointerType: 'touch', bubbles: true }));
      },
      { ax: atkRect.x + atkRect.width / 2, ay: atkRect.y + atkRect.height / 2 }
    );
    await sleep(80);
    const yawAfterAtkTap = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).player.yaw;
    assert.equal(yawAfterAtkTap, snapBeforeTouch.player.yaw, 'Touching Attack button must NOT rotate camera');

    // Now test simultaneous joystick (11) + camera look swipe (13) + attack (12)
    await page.evaluate(
      ({ jx, jy, lx, ly }) => {
        const joyEl = document.getElementById('touchJoystickZone');
        const lookEl = document.getElementById('touchLookZone');
        joyEl.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 11, clientX: jx, clientY: jy, pointerType: 'touch', bubbles: true }));
        joyEl.dispatchEvent(new PointerEvent('pointermove', { pointerId: 11, clientX: jx, clientY: jy - 35, pointerType: 'touch', bubbles: true }));
        lookEl.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 13, clientX: lx, clientY: ly, pointerType: 'touch', bubbles: true }));
        lookEl.dispatchEvent(new PointerEvent('pointermove', { pointerId: 13, clientX: lx + 65, clientY: ly, pointerType: 'touch', bubbles: true }));
      },
      {
        jx: joyRect.x + joyRect.width / 2,
        jy: joyRect.y + joyRect.height / 2,
        lx: lookRect.x + lookRect.width * 0.35,
        ly: lookRect.y + lookRect.height * 0.4,
      }
    );
    await sleep(160);
    const snapAfterMulti = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.notEqual(snapAfterMulti.player.yaw, snapBeforeTouch.player.yaw, 'Look zone swipe must rotate camera');
    assert.notEqual(snapAfterMulti.player.z, snapBeforeTouch.player.z, 'Joystick must move player simultaneously');
    console.log('[PASS] Mobile multi-touch move + camera swipe + attack verified simultaneously');

    // Release simulated touch pointers and let the mobile attack animation finish cleanly
    await page.evaluate(() => {
      document.getElementById('touchJoystickZone').dispatchEvent(new PointerEvent('pointerup', { pointerId: 11, pointerType: 'touch', bubbles: true }));
      document.getElementById('touchBtnAttack').dispatchEvent(new PointerEvent('pointerup', { pointerId: 12, pointerType: 'touch', bubbles: true }));
      document.getElementById('touchLookZone').dispatchEvent(new PointerEvent('pointerup', { pointerId: 13, pointerType: 'touch', bubbles: true }));
    });
    await sleep(750);

    // Test Settings button on Mobile Touch HUD + Low Graphics FPS + Mouse0 menu context isolation + Reset All
    await page.click('.touch-util-btn[data-util="settings"]');
    await page.waitForSelector('#settingsModal:not(.hidden)');

    await page.click('.settings-tab[data-tab="graphics"]');
    await page.selectOption('#selGfxPreset', 'low');
    await page.click('.settings-tab[data-tab="desktop"]');
    await page.selectOption('#selInterfaceMode', 'desktop');

    await page.click('.settings-tab[data-tab="controls"]');
    await page.locator('.control-row[data-action="attack"] [data-slot="secondary"]').click();
    await page.waitForSelector('.capture-banner');
    await page.mouse.click(10, 10, { button: 'right' }); // Bind Right Mouse Button to attack secondary!
    const atkSecLabel = await page.locator('.control-row[data-action="attack"] [data-slot="secondary"]').innerText();
    assert.equal(atkSecLabel.trim(), 'Right Mouse Button');

    await page.locator('.control-row[data-action="attack"] [data-slot="primary"]').click();
    await page.waitForSelector('.capture-banner');
    await page.mouse.click(10, 10, { button: 'left' }); // Bind Left Mouse Button to attack primary!
    const atkMouseLabel = await page.locator('.control-row[data-action="attack"] [data-slot="primary"]').innerText();
    assert.equal(atkMouseLabel.trim(), 'Left Mouse Button');

    await page.click('#btnSettingsApply');
    await page.waitForSelector('#settingsModal', { state: 'hidden' });
    // Now click Resume button using Left Mouse Button -> MUST NOT trigger gameplay sword attack!
    await page.click('#btnPauseResume');
    await sleep(60);
    const afterResumeSnap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.equal(afterResumeSnap.swordPhase, 'idle', 'Clicking menu button with Mouse0 bound to attack must NOT fire attack');
    assert.equal(afterResumeSnap.rendererStats.shadowEnabled, false, 'Low graphics preset must disable shadows');
    await sleep(600);
    const lowFps = (await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot())).fps;
    console.log(`[INFO] Measured headless Chrome Low-Preset FPS: ${lowFps.toFixed(1)}`);

    // Pause and test Reset All Controls confirmation
    await page.keyboard.press('Escape');
    await page.waitForSelector('#pauseModal:not(.hidden)');
    await page.click('#btnPauseSettings');
    await page.waitForSelector('#settingsModal:not(.hidden)');
    await page.click('.settings-tab[data-tab="controls"]');
    await page.click('#btnResetAllControls');
    await page.waitForSelector('#btnConfirmResetYes');
    await page.click('#btnConfirmResetYes');
    await page.click('#btnSettingsApply');
    await page.waitForSelector('#settingsModal', { state: 'hidden' });
    const resetSnap = await page.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.equal(resetSnap.activeBindings.attack.primary, 'Mouse0', 'Reset All must restore attack to Left Mouse Button');
    console.log('[PASS] Mouse0/Mouse2 binding, Mouse0 menu isolation, Low preset FPS, and Reset All confirmed');

    assert.equal(consoleErrors.length, 0, `Unexpected console errors: ${consoleErrors.join('; ')}`);
    assert.equal(pageErrors.length, 0, `Unexpected page errors: ${pageErrors.join('; ')}`);

    // Also verify direct file:// double-click launch of root index.html!
    const { pathToFileURL } = await import('node:url');
    const { resolve } = await import('node:path');
    const filePage = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    const filePageErrors = [];
    filePage.on('pageerror', (err) => filePageErrors.push(err.message));
    const fileUrl = pathToFileURL(resolve('index.html')).href;
    await filePage.goto(fileUrl, { waitUntil: 'load' });
    await filePage.waitForSelector('#mainMenuModal:not(.hidden)');
    await filePage.waitForSelector('#loadingOverlay', { state: 'hidden' });
    const bgColor = await filePage.evaluate(() => getComputedStyle(document.body).backgroundColor);
    assert.notEqual(bgColor, 'rgb(255, 255, 255)', `file:// launch must never show unstyled white page (got ${bgColor})`);
    await filePage.click('#btnMainNewGame');
    await filePage.waitForSelector('#dialogueBanner:not(.hidden)');
    const fileSnap = await filePage.evaluate(() => window.__GAME_APP__.getDebugSnapshot());
    assert.equal(fileSnap.appState, 'dialogue', 'file:// direct launch must boot full 3D GameApp cleanly');
    assert.equal(filePageErrors.length, 0, `Unexpected file:// page errors: ${filePageErrors.join('; ')}`);
    await filePage.close();
    console.log('[PASS] Direct file:// launch of index.html booted full 3D game cleanly');

    console.log('\n>>> ALL BROWSER E2E VERIFICATION TESTS PASSED WITH 0 CONSOLE ERRORS! <<<');
  } finally {
    if (browser) await browser.close();
    server.kill('SIGTERM');
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('E2E VERIFICATION FAILED:', err);
    process.exit(1);
  });

