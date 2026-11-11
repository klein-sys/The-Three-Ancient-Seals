from pathlib import Path
p=Path('src/ui/uiManager.ts');s=p.read_text(encoding='utf-8')
start=s.index('        <div class="crest-emblem">');end=s.index('\n      </div>\n    `;',start)
s=s[:start]+'''        <div class="edition-label"><span class="edition-mark">✧</span> A FORGOTTEN WORLD AWAITS</div>
        <h1 id="gameMainTitle" class="game-title"><small>THE THREE</small>ANCIENT<br>SEALS<span class="title-period">.</span></h1>
        <p class="game-subtitle">ECHOES OF THE FORGOTTEN DUNGEON</p>
        <div class="title-rule"><span>◆</span></div>
        <p class="game-tagline">Some doors open to strength.<br>Others ask you to listen.</p>
        <div id="overwriteConfirmBox" class="conflict-banner hidden">
          <div class="conflict-text">Begin again? Your saved expedition will be replaced.</div>
          <div class="conflict-actions"><button type="button" id="btnConfirmOverwrite" class="btn-danger btn-sm">Start New Game</button><button type="button" id="btnCancelOverwrite" class="btn-secondary btn-sm">Cancel</button></div>
        </div>
        <div class="title-primary-actions">
          <button type="button" id="btnMainContinue" class="btn-primary">Continue <span>→</span></button>
          <button type="button" id="btnMainNewGame" class="btn-secondary">New Game <span>→</span></button>
        </div>
        <nav class="title-secondary-actions" aria-label="Main menu">
          <button type="button" id="btnMainSettings">Settings</button><i></i>
          <button type="button" id="btnMainHowToPlay">How to Play</button><i></i>
          <button type="button" id="btnMainCredits">Credits</button>
        </nav>
        <div id="mainMenuSaveNote" class="save-local-note">Progress is saved in this browser. It does not sync across devices.</div>
        <div class="title-scene-caption"><span>CHAPTER I</span><strong>The Forgotten Ruins</strong><small>Beyond the stone, something remembers.</small></div>
        <div class="title-footer"><span>THREE SEALS. ONE WAY HOME.</span><span>AN ORIGINAL FANTASY ADVENTURE</span></div>'''+s[end:]
s=s.replace('World simulation and trap timers are frozen','Take a breath. The dungeon can wait.').replace('Expedition Paused','A moment of stillness')
s=s.replace('<div class="pause-controls-summary">\n            <h3>Active Controls</h3>','<details class="pause-controls-summary">\n            <summary>Keyboard &amp; mouse controls</summary>').replace('<div id="pauseControlsList" class="controls-summary-list"></div>\n          </div>','<div id="pauseControlsList" class="controls-summary-list"></div>\n          </details>')
s=s.replace('How Calculus Powers the Dungeon','Behind the Magic')
s=s.replace('A 3D Educational Fantasy Action RPG','An atmospheric fantasy adventure')
s=s.replace('Cinzel, Inter, and JetBrains Mono (with native system serif/sans/mono fallbacks).','Cinzel by Natanael Gama (SIL Open Font License, bundled locally); system sans-serif body text.')
start=s.index('        <div class="guide-body">');end=s.index('\n      </div>\n    `;',start)
s=s[:start]+'''        <div class="guide-body">
          <div class="guide-block"><h4>Listen to the current</h4><p>The seal trembles when its current is unsettled. Turn it in the direction of the pull. A quiet tone and a closing ring tell you when to hold still.</p></div>
          <div class="guide-block"><h4>Watch the crossing</h4><p>The ancient blades slow at each end of their tracks, then gather speed through the middle. Watch a full sweep from safety before choosing your moment.</p></div>
          <div class="guide-block"><h4>Find harmony</h4><p>Some wards bind two crystals together. Follow each crystal’s pull until both currents become steady at the same time.</p></div>
          <div class="guide-block"><h4>Read the guardian</h4><p>Raised weapons and a marked floor warn of a coming lunge. Dodge as the strike begins, then use its recovery to get close. A shielded guardian must first be weakened at its nearby mechanism.</p></div>
        </div>'''+s[end:]
s=s.replace('First Ancient Seal — Seal of Rates','First Ancient Seal').replace('Second Ancient Seal — Seal of Motion','Second Ancient Seal').replace('Third Ancient Seal — Seal of Extremum','Third Ancient Seal')
s=s.replace('Mastered derivative energy tuning in The Forgotten Ruins.','Recovered from the Stone Sentinel.').replace('Mastered harmonic velocity & rescued Axiom in The Chamber of Whispers.','Recovered from the Arcane Scholar.').replace('Mastered two-variable gradient optimization in The Abyss of Equations.','Recovered from the Abyssal Warden.')
s=s.replace("label: 'Rates'","label: 'I'").replace("label: 'Motion'","label: 'II'").replace("label: 'Extremum'","label: 'III'")
s=s.replace('calculus energy shields','ancient wards')
s=s.replace('<strong>Calculus Mechanisms:</strong> When adjusting energy dials or dual-crystal pads, observe the energy meter and slope/gradient direction cues. Hold steady at the minimum valley until stabilization completes!','<strong>Ancient mechanisms:</strong> Follow the pull of the current. A steady light and a closing ring mean the crystals are aligned. Hold them still until the lock opens.')
s=s.replace('GOOD ENDING — FREEDOM SHARED','FREEDOM SHARED').replace('BAD ENDING — THE PRICE OF GREED','THE PRICE OF GREED')
s=s.replace('🧪 Potions:','<span class="item-icon">♧</span> Potions').replace('🗝️ Keys:','<span class="item-icon">⚿</span> Keys')
s=s.replace('<canvas id="minimapCanvas"','<span class="map-north">N</span><canvas id="minimapCanvas"')
s=s.replace("    btnContinue.disabled = !hasValidSave;", "    btnContinue.disabled = !hasValidSave;\n    this.mainMenuModal.classList.toggle('has-save',hasValidSave);\n    this.lookGuidanceUntil=performance.now()+6500;")
s=s.replace('  private minimapVisible = true;','  private minimapVisible = true;\n  private lookGuidanceUntil=0;\n  private lastSealKey="";')
s=s.replace("    this.desktopHintsBar.classList.toggle('hidden', opts.isTouchMode);", "    this.desktopHintsBar.classList.add('hidden');")
s=s.replace("this.lookStatusPill.classList.toggle('hidden', opts.isTouchMode);", "this.lookStatusPill.classList.toggle('hidden', opts.isTouchMode || opts.pointerLocked || performance.now()>this.lookGuidanceUntil);")
# Keep the seal DOM stable rather than allocating markup at 60Hz.
s=s.replace('    this.sealsHud.innerHTML = sealInfo','    const sealKey=opts.seals.join(",");\n    if(this.lastSealKey!==sealKey || !this.sealsHud.children.length) {\n    this.lastSealKey=sealKey;\n    this.sealsHud.innerHTML = sealInfo')
s=s.replace("      .join('');\n\n    if (opts.interactPrompt", "      .join('');\n    }\n\n    if (opts.interactPrompt")
s=s.replace("ctx.fillStyle = '#070b14'", "ctx.fillStyle = '#111d21'").replace("ctx.fillStyle = '#1e293b'", "ctx.fillStyle = '#334044'").replace("ctx.strokeStyle = '#475569'", "ctx.strokeStyle = '#6b7772'")
s=s.replace('      ctx.arc(p.sx, p.sy, e.isBoss ? 4.5 : 3, 0, Math.PI * 2);','      const r=e.isBoss ? 4.5:3; ctx.moveTo(p.sx,p.sy-r);ctx.lineTo(p.sx+r,p.sy);ctx.lineTo(p.sx,p.sy+r);ctx.lineTo(p.sx-r,p.sy);ctx.closePath();')
p.write_text(s,encoding='utf-8')
p=Path('src/ui/mechanismUI.ts');s=p.read_text(encoding='utf-8')
repl={'Balance the energy flow to its minimum':'Steady the current. Let the old lock settle.','How Calculus Works Here':'A quiet hint','Energy Level E(x)':'Restless current',"Slope Balance E'(x) = 0":'Follow the pull',"E''(x) &gt; 0 ✓":'Listen closely','◄ Negative':'◄ Turn left','Positive ►':'Turn right ►','Dial Position x':'Turn the seal','Stabilization Dwell Hold':'Hold the harmony','Crystal X Alignment':'First crystal','Crystal Y Alignment':'Second crystal','Gradient ||∇E(x,y)||':'Turbulence','Seeking Minimum':'Seeking harmony','Too Low — Increase x':'Turn right →','Too High — Decrease x':'← Turn left'}
for a,b in repl.items():s=s.replace(a,b)
s=s.replace('        <!-- 1D Energy Dial UI -->','        <div class="resonance-art" aria-hidden="true"><div class="resonance-orbit"></div><div class="resonance-orbit second"></div><div class="resonance-core">✧</div><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="55" /></svg></div>\n        <!-- 1D Energy Dial UI -->')
start=s.index('      this.curvature1DEl.textContent =');end=s.index('\n\n      this.status1DEl',start)
s=s[:start]+'''      this.curvature1DEl.textContent = ev.isMinimumConditionMet ? '◆ Steady' : '◇ Unsettled';
      this.setResonance(ev.closeness,ev.dwellProgress,ev.isMinimumConditionMet);'''+s[end:]
s=s.replace('          : `||∇E|| = ${ev.gradientMagnitude.toFixed(1)}`;', "          : 'Follow each current';\n      this.setResonance(ev.closeness,ev.dwellProgress,ev.isMinimumConditionMet);")
s=s.replace('  private bindEvents(): void {','''  private setResonance(closeness:number,hold:number,steady:boolean):void {
    this.root.style.setProperty('--unrest',String(1-closeness));
    this.root.style.setProperty('--hold',String(hold));
    this.root.style.setProperty('--orbit-time',`${.6+closeness*5}s`);
    this.root.classList.toggle('steady',steady);
  }

  private bindEvents(): void {''')
# Replace optional equation drawer with readable hints; formulas live in developer docs.
start=s.index('      this.mathBody.innerHTML = `');end=s.index('      `;',start)+len('      `;')
s=s[:start]+"      this.mathBody.innerHTML = 'The ring closes only while the current stays calm. Follow the pull, make smaller adjustments as the trembling fades, then hold still.';"+s[end:]
start=s.index('      this.mathBody.innerHTML = `');end=s.index('      `;',start)+len('      `;')
s=s[:start]+"      this.mathBody.innerHTML = 'Each crystal has its own current. Follow both arrows. When both crystals settle together, hold them steady until the ring closes.';"+s[end:]
p.write_text(s,encoding='utf-8')
