import { describe,expect,it } from 'vitest';
import { InputManager } from '../src/input/inputManager';
import { cloneBindings,DEFAULT_CONTROL_BINDINGS } from '../src/input/actions';
import { createInitialSaveData,createDefaultSettings,sanitizeSaveData,PersistenceManager } from '../src/storage/persistence';
import { OptimizationChestModel } from '../src/math/calculusModels';
import { createEnemyInstance,stepEnemies } from '../src/gameplay/enemyController';
import { ENEMY_SPAWNS } from '../src/world/levelData';

describe('Overhaul regressions',()=>{
 it('keeps a second held binding active when the first is released',()=>{
  const bindings=cloneBindings(DEFAULT_CONTROL_BINDINGS);bindings.moveForward.secondary='ArrowUp';
  const input=new InputManager(bindings);input.setContext('gameplay');
  input.setVirtualAction('moveForward',true,'primary');input.setVirtualAction('moveForward',true,'secondary');
  input.beginSimulationFrame();expect(input.isPressed('moveForward')).toBe(true);
  input.setVirtualAction('moveForward',false,'primary');input.beginSimulationFrame();
  expect(input.isHeld('moveForward')).toBe(true);expect(input.isReleased('moveForward')).toBe(false);
  input.setVirtualAction('moveForward',false,'secondary');input.beginSimulationFrame();expect(input.isReleased('moveForward')).toBe(true);
 });
 it('clears movement, attack and camera deltas on a context change',()=>{
  const input=new InputManager(cloneBindings(DEFAULT_CONTROL_BINDINGS));input.setContext('gameplay');
  input.setVirtualAnalog(1,1);input.setVirtualAction('attack',true,'touch:attack:12');input.addTouchLookDelta(40,10);
  input.setContext('menu');input.setContext('gameplay');input.beginSimulationFrame();
  expect(input.getMovementAxes()).toEqual({x:0,z:0});expect(input.isHeld('attack')).toBe(false);expect(input.consumeLookDelta()).toEqual({dx:0,dy:0});
 });
 it('normalizes simultaneous diagonal movement',()=>{
  const input=new InputManager(cloneBindings(DEFAULT_CONTROL_BINDINGS));input.setVirtualAnalog(1,1);
  const axes=input.getMovementAxes();expect(Math.hypot(axes.x,axes.z)).toBeCloseTo(1,10);
 });
 it('preserves old right-mouse settings without changing the new left-mouse default',()=>{
  const data=new Map<string,string>();const pm=new PersistenceManager({getItem:k=>data.get(k)??null,setItem:(k,v)=>{data.set(k,v);},removeItem:k=>{data.delete(k);}});
  const settings=createDefaultSettings();settings.controls.attack.primary='Mouse2';pm.saveSettings(settings);
  expect(pm.loadSettings().settings.controls.attack.primary).toBe('Mouse2');expect(createDefaultSettings().controls.attack.primary).toBe('Mouse0');
 });
 it('repairs unknown rewards, impossible ending flags and out-of-world positions',()=>{
  const save=createInitialSaveData();save.player.x=9000;save.player.z=-9000;save.checkpointId='missing';
  save.inventory.seals=['imaginary','imaginary'];save.worldFlags.endingReached='good';save.worldFlags.axiomSacrificed=true;save.worldFlags.sealsInserted=true;
  const clean=sanitizeSaveData(save)!;
  expect(clean.player.x).toBe(0);expect(clean.player.z).toBe(2.5);expect(clean.inventory.seals).toEqual([]);
  expect(clean.worldFlags.endingReached).toBeNull();expect(clean.worldFlags.sealsInserted).toBe(false);
 });
 it('retains earned legacy seals and makes their defeated guardians coherent',()=>{
  const save=createInitialSaveData();save.inventory.seals=['seal_rates','seal_rates'];const clean=sanitizeSaveData(save)!;
  expect(clean.inventory.seals).toEqual(['seal_rates']);expect(clean.worldFlags.defeatedBosses).toContain('boss_stone_sentinel');
 });
 it('retains current-session checkpoints when browser storage is unavailable',()=>{
  const pm=new PersistenceManager(null);const save=createInitialSaveData();save.inventory.potions=4;
  expect(pm.saveGame(save)).toBe(false);expect(pm.hasValidSave()).toBe(true);expect(pm.loadGameSave().save?.inventory.potions).toBe(4);
  pm.clearGameSave();expect(pm.hasValidSave()).toBe(false);
 });
 it('holds a two-crystal alignment for the same duration at 30, 60 and 120 Hz',()=>{
  for(const hz of [30,60,120]){
   const model=new OptimizationChestModel({id:'test',label:'test',kx:18,ky:22,a:.3,b:.7,eMin:8,tolerance:2,dwellTime:1.1});
   model.setCrystals(.3,.7);for(let i=0;i<hz;i++)model.step(1/hz);expect(model.unlocked).toBe(false);
   for(let i=0;i<Math.ceil(hz*.12);i++)model.step(1/hz);expect(model.unlocked).toBe(true);
  }
 });
 it('accelerates a telegraphed lunge without instantly snapping to full speed',()=>{
  const enemy=createEnemyInstance(ENEMY_SPAWNS[0],false);enemy.state='windup';enemy.stateTimer=.001;enemy.vx=0;enemy.vz=0;
  stepEnemies([enemy],{x:0,z:enemy.z-1,radius:.45},[],1/60);
  expect(enemy.state).toBe('attack');expect(Math.hypot(enemy.vx,enemy.vz)).toBeLessThanOrEqual(enemy.config.maxAccel/60+.0001);
 });
 it('does not let an enemy strike through a wall during active frames',()=>{
  const enemy=createEnemyInstance(ENEMY_SPAWNS[0],false);enemy.state='attack';enemy.stateTimer=.15;enemy.x=0;enemy.z=0;enemy.yaw=0;
  const events=stepEnemies([enemy],{x:0,z:-1,radius:.45},[{id:'wall',minX:-2,maxX:2,minY:0,maxY:3,minZ:-.7,maxZ:-.5,blocksSight:true}],1/60);
  expect(events.playerDamageEvents).toEqual([]);
 });
});
