import { chromium } from 'playwright-core';
import assert from 'node:assert/strict';
import {writeFile,mkdir} from 'node:fs/promises';

// Instrumented integration run: positioning and health are controlled by the harness.
// Seals, boss deaths, wards, story choices and ending flags must come from real game systems.
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH??'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const errors=[];const results=[];
await mkdir('docs/screenshots',{recursive:true});
try {
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173');await page.waitForFunction(()=>!!window.__GAME_APP__);
 await page.evaluate(()=>{const a=window.__GAME_APP__;cancelAnimationFrame(a.animationFrameId);a.startNewGame();a.finishDialogue();});
 const pose=async(name,x,z,yaw=0)=>{
  await page.evaluate(({x,z,yaw})=>{const a=window.__GAME_APP__;a.saveData.player.x=x;a.saveData.player.z=z;a.saveData.player.yaw=yaw;a.updateCheckpointsAndTriggers();a.syncVisualsFromState();a.updateThirdPersonCamera(1);a.updateHUDDisplay();a.renderer.render(a.scene,a.camera);}, {x,z,yaw});
  await page.screenshot({path:`docs/screenshots/${name}.png`});
 };
 await pose('after-gameplay',0,2.5);
 await page.evaluate(()=>window.__GAME_APP__.pauseGame());await page.screenshot({path:'docs/screenshots/after-pause.png'});await page.evaluate(()=>window.__GAME_APP__.resumeGame());
 const solve=async(id,screenshot)=>{
  await page.evaluate(async id=>{
   const {PYLON_SPECS,CHEST_SPECS,DOOR_SPECS}=await import('/src/world/levelData.ts');const a=window.__GAME_APP__;
   const spec=[...PYLON_SPECS,...CHEST_SPECS,...DOOR_SPECS].find(s=>s.id===id);
   a.saveData.player.x=spec.x;a.saveData.player.z=spec.z+1.8;a.saveData.player.yaw=0;
   a.triggerInteraction({kind:PYLON_SPECS.includes(spec)?'pylon':CHEST_SPECS.includes(spec)?'chest':'door',id,label:spec.label,x:spec.x,z:spec.z});
   a.syncVisualsFromState();a.updateThirdPersonCamera(1);a.renderer.render(a.scene,a.camera);
  },id);
  if(screenshot) await page.screenshot({path:`docs/screenshots/${screenshot}.png`});
  return await page.evaluate(id=>{
   const a=window.__GAME_APP__;const model=a.energyModels.get(id)??a.optModels.get(id);const before=a.simTime;
   if('setDial' in model) model.setDial(model.a);else model.setCrystals(model.a,model.b);
   for(let i=0;i<90 && a.appState==='mechanism';i++) a.fixedUpdate(1/60);
   if(a.appState==='dialogue')a.finishDialogue();
   return {solved:model.stabilized??model.unlocked,worldTimeFrozen:a.simTime===before};
  },id);
 };
 const fight=async id=>{
  for(let swing=0;swing<35;swing++) {
   let enemy=await page.evaluate(id=>{const e=window.__GAME_APP__.enemies.find(e=>e.id===id);return {state:e.state,shielded:e.shielded,pylon:e.activeShieldPylonId,hp:e.hp};},id);
   if(enemy.state==='dead'){results.push({boss:id,defeated:true,swings:swing});return;}
   if(enemy.shielded){const result=await solve(enemy.pylon);assert.equal(result.solved,true);}
   await page.evaluate(id=>{
    const a=window.__GAME_APP__,e=a.enemies.find(e=>e.id===id);a.combat.tryStartAttack();
    for(let i=0;i<45;i++){
     if(a.appState!=='playing')break;
     a.saveData.player.hp=100; // Isolate reward/state transitions from difficulty balancing.
     a.saveData.player.x=e.x;a.saveData.player.z=e.z+1.8;a.saveData.player.yaw=0;
     a.fixedUpdate(1/60);
    }
   },id);
  }
  throw Error(`Guardian did not fall: ${id}`);
 };
 const door=await solve('door_ruins_side','mechanism-seal');assert.ok(door.solved&&door.worldTimeFrozen);results.push({mechanism:'single',...door});
 await pose('stone-sentinel',0,-20);
 await fight('boss_stone_sentinel');
 await pose('chamber-of-whispers',0,-43.5);
 assert.ok((await solve('mech_rescue_axiom')).solved);
 const chest=await solve('chest_whispers_library','mechanism-crystals');assert.ok(chest.solved&&chest.worldTimeFrozen);
 const firstReward=await page.evaluate(()=>window.__GAME_APP__.saveData.inventory.potions);
 await page.evaluate(()=>window.__GAME_APP__.awardChestOnce('chest_whispers_library',2,1,false));
 assert.equal(await page.evaluate(()=>window.__GAME_APP__.saveData.inventory.potions),firstReward);
 await fight('boss_arcane_scholar');
 await pose('abyssal-bridge',0,-95);
 assert.ok((await solve('mech_abyss_barrier')).solved);
 await pose('abyssal-sanctum',0,-110);
 await fight('boss_keeper_equations');
 const seals=await page.evaluate(()=>window.__GAME_APP__.saveData.inventory.seals);assert.equal(new Set(seals).size,3);
 await page.evaluate(()=>{const a=window.__GAME_APP__;a.triggerInteraction({kind:'pedestal',id:'pedestal_three_seals',x:0,z:-136.2,label:'insert'});a.finishDialogue();});
 await pose('eternal-archivist',0,-141);
 await fight('boss_eternal_archivist');
 await page.evaluate(()=>{const a=window.__GAME_APP__;if(a.appState==='dialogue')a.finishDialogue();});
 const beforeChoice=await page.evaluate(()=>structuredClone(window.__GAME_APP__.saveData));
 for(const choice of ['helped','left']) {
  await page.evaluate(save=>{const a=window.__GAME_APP__;a.saveData=structuredClone(save);a.initModelsAndEntitiesFromSave();a.appState='playing';a.ui.setMainMenuVisible(false,true);a.openStudentDecision();},beforeChoice);
  await page.click(choice==='helped'?'#btnChoiceHelpStudent':'#btnChoiceLeaveStudent');
  await page.evaluate(choice=>{
   const a=window.__GAME_APP__;
   if(choice==='helped'){const m=a.optModels.get('mech_student_rescue');m.setCrystals(m.a,m.b);for(let i=0;i<90&&a.appState==='mechanism';i++)a.fixedUpdate(1/60);}
   if(a.appState==='dialogue')a.finishDialogue();
   a.triggerAxiomSacrificeCinematic();a.skipActiveCinematic();a.saveData.player.x=0;a.saveData.player.z=-176;a.updateCheckpointsAndTriggers();a.renderer.render(a.scene,a.camera);
  },choice);
  const snapshot=await page.evaluate(()=>window.__GAME_APP__.getDebugSnapshot());
  assert.equal(snapshot.worldFlags.studentChoice,choice);assert.equal(snapshot.worldFlags.axiomSacrificed,true);
  assert.equal(snapshot.worldFlags.endingReached,choice==='helped'?'good':'bad');
  await page.screenshot({path:`docs/screenshots/ending-${choice==='helped'?'shared':'greed'}.png`});
  await page.evaluate(()=>{const a=window.__GAME_APP__;a.ui.endingModal.classList.add('hidden');a.returnToMainMenu();});
  results.push({ending:choice,actualStoryFlow:true});
 }
 assert.deepEqual(errors,[]);
 await writeFile('docs/adventure-results.json',JSON.stringify({method:'Instrumented positioning and health; real models, combat hits, rewards, rescue choices and cinematic callbacks',results,errors},null,2));
 console.log(JSON.stringify({results,errors},null,2));
}finally{await browser.close();}
