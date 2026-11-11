from pathlib import Path
p=Path('src/world/worldBuilder.ts');s=p.read_text(encoding='utf-8');a=s.index('    const color =',s.index('  // Enemies & Bosses'));b=s.index('    const rig=',a);s=s[:a]+s[b:];p.write_text(s,encoding='utf-8')
p=Path('src/gameplay/gameEngine.ts');s=p.read_text(encoding='utf-8')
s=s.replace("import * as THREE from 'three';", "import * as THREE from 'three';\nimport { animateCharacter } from '../world/characterArt';")
s=s.replace('  private walkBobTime = 0;', '  private walkBobTime = 0;\n  private playerSpeed=0;\n  private mechanismTime=0;\n  private impactTime=0;')
s=s.replace('        pixelRatio:', '        drawCalls:this.renderer.info.render.calls,\n        triangles:this.renderer.info.render.triangles,\n        pixelRatio:')
s=s.replace("        if (this.appState === 'playing') {\n          this.pauseGame();\n        }\n      },\n      onInputActivity", "        if(this.appState==='mechanism') this.mechanismUI.close();\n        if (this.appState === 'playing') this.pauseGame();\n      },\n      onInputActivity")
s=s.replace('      onNewGame: () =>', '      onPause: () => this.pauseGame(),\n      onInventory: () => {this.pauseGame();this.ui.openInventoryModal(this.saveData);},\n      onNewGame: () =>')
s=s.replace("    this.sound.setMuted(this.settings.soundMuted);", "    this.sound.setMuted(this.settings.soundMuted);\n    document.body.classList.toggle('reduced-motion',this.settings.reducedMotion);")
s=s.replace('      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;', '      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;\n      this.renderer.toneMapping=THREE.ACESFilmicToneMapping;\n      this.renderer.toneMappingExposure=1.18;\n      this.renderer.outputColorSpace=THREE.SRGBColorSpace;')
s=s.replace('0x070a12','0x15242c')
s=s.replace("    if (gfx.shadowQuality !== this.currentShadowQuality) {", "    if (gfx.shadowQuality !== this.currentShadowQuality || !this.renderer.shadowMap.enabled) {")
s=s.replace("    this.appState = 'paused';", "    this.persistence.saveGame(this.saveData);\n    this.appState = 'paused';")
s=s.replace('  private returnToMainMenu(): void {', '  private returnToMainMenu(): void {\n    if(this.appState!=="main_menu") this.persistence.saveGame(this.saveData);')
s=s.replace("    } else if (this.appState === 'ending') {", "    } else if(this.appState === 'main_menu') {\n      const t=this.settings.reducedMotion?0:nowMs*.001;\n      this.world.player.root.position.set(2.8,0,-.5);this.world.player.root.rotation.y=-.35;\n      animateCharacter(this.world.player.root.userData.rig,t,0,'idle',0,this.settings.reducedMotion);\n      this.camera.position.set(5.5+Math.sin(t*.13)*.15,2.5,5.4);this.camera.lookAt(-.4,2,-3.2);\n      this.world.updateAtmosphere(0,0,t);\n      this.inputManager.beginSimulationFrame();\n      if(this.inputManager.isPressed('pause')) this.ui.closeSubmodals();\n    } else if (this.appState === 'ending') {")
s=s.replace('      this.simTime += dt;\n      this.mechanismUI.stepSimulation(dt);','      this.mechanismTime += dt;\n      this.mechanismUI.stepSimulation(dt);')
s=s.replace('    const nextPX =', '    this.playerSpeed=Math.hypot(moveVelX,moveVelZ);\n    const nextPX =')
s=s.replace('        if (res.hit) this.sound.playSwordHit();', '        if (res.hit) {this.sound.playSwordHit();this.impactTime=this.simTime;}')
s=s.replace('  private updateThirdPersonCamera(_dt: number): void {','  private updateThirdPersonCamera(dt: number): void {')
s=s.replace('* 0.16;', '* (1-Math.exp(-12*dt));')
s=s.replace('    // Player\n    this.world.player.root.position', '    // Player\n    this.world.updateAtmosphere(this.saveData.player.x,this.saveData.player.z,this.simTime);\n    this.world.player.root.position')
start=s.index('    this.world.player.bodyGroup.position.y =');end=s.index('    // Doors',start)
s=s[:start]+'''    animateCharacter(this.world.player.root.userData.rig,this.simTime,this.playerSpeed,
      this.saveData.player.hp<=0?'dead':this.combat.isDodging()?'dodge':this.combat.playerHitInvulnTimer>.45?'stagger':this.combat.swordPhase==='active'?'attack':this.combat.swordPhase,
      this.combat.getSwordSwingAngle(),this.settings.reducedMotion);
    // Restrained physical hit flash on the blade; no oversized wireframe slash.
    this.world.player.swordPivot.scale.setScalar(this.simTime-this.impactTime<.08?1.035:1);

'''+s[end:]
start=s.index('      pv.ringA.rotation.y +=');end=s.index('\n    }\n\n    // Traps',start)
s=s[:start]+'''      const m1 = this.energyModels.get(id);
      const m2 = this.optModels.get(id);
      const solved = m1?.stabilized || m2?.unlocked;
      const evalState=m1?.evaluateStatic() ?? m2?.evaluateStatic();
      const unrest=1-(evalState?.closeness??0);
      const t=this.simTime+this.mechanismTime;
      pv.ringA.rotation.y=solved?0:Math.sin(t*(1+unrest*4))*.8*unrest;
      pv.ringB.rotation.z=solved?0:Math.cos(t*(1+unrest*3))*.7*unrest;
      pv.crystal.position.y=1.75+(this.settings.reducedMotion?0:Math.sin(t*8)*unrest*.12);
      const mat=pv.crystal.material as THREE.MeshStandardMaterial;
      mat.emissive.setHex(solved?0xab8d4a:0x4c9c99);mat.emissiveIntensity=solved?.7:.65+unrest*(.5+Math.sin(t*13)*.3);
      const ring=pv.root.getObjectByName('holdRing') as THREE.Mesh;
      if(ring) { const model=m1??m2;const progress=model?model.dwellElapsed/model.dwellTime:0;ring.scale.setScalar(.75+progress*.25);ring.visible=!!solved||progress>0; }
'''+s[end:]
s=s.replace("      ev.root.visible = e.state !== 'dead';\n      if (e.state === 'dead') continue;", "      if(e.state==='dead') {\n        ev.root.userData.deathAt ??= this.simTime;\n        ev.root.visible=this.simTime>0&&this.simTime-ev.root.userData.deathAt<1.1;\n        ev.shieldSphere.visible=false;ev.telegraphRing.visible=false;ev.hpBarBg.visible=false;ev.hpBarFill.visible=false;\n        animateCharacter(ev.root.userData.rig,this.simTime,0,'dead');continue;\n      }\n      ev.root.visible=true;delete ev.root.userData.deathAt;")
s=s.replace('      ev.shieldSphere.rotation.y += 0.02;', '      ev.shieldSphere.rotation.y=this.simTime*.3;\n      animateCharacter(ev.root.userData.rig,this.simTime,Math.hypot(e.vx,e.vz),e.state,e.state==="attack"?1-e.stateTimer*6:0,this.settings.reducedMotion);')
s=s.replace("      ev.telegraphRing.visible = e.state === 'windup';", "      ev.telegraphRing.visible = e.state === 'windup';\n      ev.telegraphRing.scale.setScalar(.6+.4*(1-e.stateTimer/e.config.windupSec));\n      ev.hpBarBg.visible=ev.hpBarFill.visible=e.hp<e.maxHp&&Math.hypot(e.x-this.saveData.player.x,e.z-this.saveData.player.z)<12;")
s=s.replace('this.world.axiom.ring1.rotation.y += 0.03;', 'this.world.axiom.ring1.rotation.y=this.simTime*.7;').replace('this.world.axiom.ring2.rotation.x += 0.025;', 'this.world.axiom.ring2.rotation.x=this.simTime*.6;')
s=s.replace('    // Intro narration', '    this.updateThirdPersonCamera(1/60);\n    this.updateHUDDisplay();\n\n    // Intro narration')
s=s.replace("      ], false, () => {\n        this.persistence.saveGame(this.saveData);", "      ], true, () => {\n        this.persistence.saveGame(this.saveData);")
s=s.replace('  private toggleInventory(): void {', '  private toggleInventory(): void {')
# Prevent changing a settled story decision by returning to the treasure/containment.
s=s.replace("  private handleStudentDecision(choice: 'helped' | 'left'): void {", "  private handleStudentDecision(choice: 'helped' | 'left'): void {\n    if(this.saveData.worldFlags.studentChoice!==null) {this.ui.showToast('Your choice has been made. The way out is north.');return;}\n    if(!this.saveData.worldFlags.defeatedBosses.includes('boss_eternal_archivist')) return;")
s=s.replace('  private openStudentDecision(): void {','  private openStudentDecision(): void {\n    if(this.saveData.worldFlags.studentChoice!==null) {this.ui.showToast("The exit awaits to the north.");return;}')
p.write_text(s,encoding='utf-8')
# Reduce plastic-looking materials and give texture variants small-scale relief.
p=Path('src/world/proceduralAssets.ts');s=p.read_text(encoding='utf-8')
s=s.replace("'#2a303c', '#151922'", "'#626961', '#454b45'").replace("'#1e232e', '#0f131b'", "'#525b57', '#39413c'").replace("'#252136', '#12101d'", "'#484d51', '#30373c'").replace("'#162336', '#0a1424'", "'#3d5257', '#293c40'")
s=s.replace('    map: wallTex,','    map: wallTex,\n    bumpMap:wallTex, bumpScale:.035,').replace('    map: floorTex,','    map: floorTex,\n    bumpMap:floorTex, bumpScale:.025,')
s=s.replace('color: 0xd4af37','color: 0xb49a64').replace('roughness: 0.32','roughness: 0.52').replace("ctx.strokeStyle = '#38bdf8'","ctx.strokeStyle = '#6e9e99'")
p.write_text(s,encoding='utf-8')
# Backward-compatible reduced motion flag in versioned settings.
p=Path('src/storage/persistence.ts');s=p.read_text(encoding='utf-8');s=s.replace('  showFpsCounter: boolean;', '  showFpsCounter: boolean;\n  reducedMotion: boolean;');s=s.replace('    showFpsCounter: false,','    showFpsCounter: false,\n    reducedMotion: typeof matchMedia!=="undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches,');s=s.replace('    showFpsCounter: asBoolean','    reducedMotion: asBoolean(obj.reducedMotion,def.reducedMotion),\n    showFpsCounter: asBoolean');p.write_text(s,encoding='utf-8')
p=Path('src/ui/settingsUI.ts');s=p.read_text(encoding='utf-8');s=s.replace('          <span>Mute Sound Effects</span>', '''          <span>Reduced motion</span><input id="inpReducedMotion" type="checkbox" ${this.draftSettings.reducedMotion?'checked':''}>
        </label><label class="setting-row checkbox-row">
          <span>Mute Sound Effects</span>''');s=s.replace("    const mute = container.querySelector", "    const reduced=container.querySelector('#inpReducedMotion') as HTMLInputElement;\n    reduced.addEventListener('change',()=>{this.draftSettings.reducedMotion=reduced.checked;});\n    const mute = container.querySelector");p.write_text(s,encoding='utf-8')
p=Path('src/input/inputManager.ts');s=p.read_text(encoding='utf-8');s=s.replace('  private handleKeyDown(e: KeyboardEvent): void {','  private handleKeyDown(e: KeyboardEvent): void {\n    if(e.repeat) return; // Held sources persist; repeats must never resurrect cleared inputs.');p.write_text(s,encoding='utf-8')
# Minimal desktop utility buttons, no permanent control strip.
p=Path('src/ui/uiManager.ts');s=p.read_text(encoding='utf-8');s=s.replace('export interface UIHooks {','export interface UIHooks {\n  onPause:()=>void;\n  onInventory:()=>void;');s=s.replace('      <div id="hudDesktopHints"','      <div class="hud-utilities"><button id="hudInventoryButton" aria-label="Open inventory">Satchel</button><button id="hudPauseButton" aria-label="Pause expedition">Ⅱ</button></div>\n      <div id="hudDesktopHints"');s=s.replace('    container.appendChild(this.hudRoot);','    container.appendChild(this.hudRoot);\n    this.hudRoot.querySelector("#hudPauseButton")!.addEventListener("click",()=>this.hooks.onPause());\n    this.hudRoot.querySelector("#hudInventoryButton")!.addEventListener("click",()=>this.hooks.onInventory());');p.write_text(s,encoding='utf-8')
