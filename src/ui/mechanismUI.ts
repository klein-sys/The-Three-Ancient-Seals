import {
  EnergyStabilizerModel,
  OptimizationChestModel,
} from '../math/calculusModels';
import { InputManager } from '../input/inputManager';
import { SoundEngine } from '../audio/soundEngine';

export type ActiveMechanism =
  | { kind: '1d'; id: string; title: string; subtitle: string; model: EnergyStabilizerModel; onSolved: () => void }
  | { kind: '2d'; id: string; title: string; subtitle: string; model: OptimizationChestModel; onSolved: () => void };

export class MechanismOverlayUI {
  private root: HTMLElement;
  private titleEl: HTMLElement;
  private subtitleEl: HTMLElement;
  private body1D: HTMLElement;
  private body2D: HTMLElement;
  private controlHintEl: HTMLElement;

  // 1D elements
  private slider1D: HTMLInputElement;
  private needle1D: HTMLElement;
  private energyBar1D: HTMLElement;
  private dwellBar1D: HTMLElement;
  private status1DEl: HTMLElement;
  private curvature1DEl: HTMLElement;

  // 2D elements
  private pad2D: HTMLElement;
  private puck2D: HTMLElement;
  private crystalXBar: HTMLElement;
  private crystalYBar: HTMLElement;
  private crystalXHint: HTMLElement;
  private crystalYHint: HTMLElement;
  private gradMagBar: HTMLElement;
  private dwellBar2D: HTMLElement;
  private status2DEl: HTMLElement;

  // Optional math explanation drawer
  private mathPanel: HTMLElement;
  private mathBody: HTMLElement;
  private mathOpen = false;

  private active: ActiveMechanism | null = null;
  private dragging2D = false;
  private inputManager: InputManager;
  private sound: SoundEngine;
  private onCloseCallback: (() => void) | null = null;

  constructor(container: HTMLElement, inputManager: InputManager, sound: SoundEngine) {
    this.inputManager = inputManager;
    this.sound = sound;

    this.root = document.createElement('div');
    this.root.id = 'mechanismOverlay';
    this.root.className = 'modal-overlay hidden';
    this.root.innerHTML = `
      <div class="modal-card mechanism-card" role="dialog" aria-modal="true" aria-labelledby="mechTitle">
        <div class="modal-header">
          <div>
            <h2 id="mechTitle">Arcane Stabilizer</h2>
            <div id="mechSubtitle" class="modal-subtitle">Steady the current. Let the old lock settle.</div>
          </div>
          <div class="mech-header-actions">
            <button type="button" id="btnMechMathInfo" class="btn-secondary btn-sm">A quiet hint</button>
            <button type="button" id="btnMechClose" class="btn-secondary btn-sm">Exit</button>
          </div>
        </div>

        <div id="mechMathDrawer" class="mech-math-drawer hidden">
          <div id="mechMathText" class="mech-math-text"></div>
        </div>

        <div class="resonance-art" aria-hidden="true"><div class="resonance-orbit"></div><div class="resonance-orbit second"></div><div class="resonance-core">✧</div><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="55" /></svg></div>
        <!-- 1D Energy Dial UI -->
        <div id="mechBody1D" class="mech-body hidden">
          <div class="mech-meter-group">
            <div class="mech-meter-label">
              <span>Restless current</span>
              <span id="mechStatus1D" class="mech-status-badge">Unstable</span>
            </div>
            <div class="mech-bar-track"><div id="mechEnergyBar1D" class="mech-bar-fill energy"></div></div>
          </div>

          <div class="mech-meter-group">
            <div class="mech-meter-label">
              <span>Follow the pull</span>
              <span id="mechCurvature1D" class="mech-curvature-badge">Listen closely</span>
            </div>
            <div class="slope-gauge">
              <span class="slope-end">◄ Turn left</span>
              <div class="slope-track">
                <div class="slope-target-zone"></div>
                <div id="mechNeedle1D" class="slope-needle"></div>
              </div>
              <span class="slope-end">Turn right ►</span>
            </div>
          </div>

          <div class="mech-dial-row">
            <label for="mechSlider1D">Turn the seal</label>
            <input id="mechSlider1D" type="range" min="0" max="1" step="0.005" value="0.2" class="mech-slider" />
          </div>

          <div class="mech-meter-group">
            <div class="mech-meter-label"><span>Hold the harmony</span></div>
            <div class="mech-bar-track"><div id="mechDwellBar1D" class="mech-bar-fill dwell"></div></div>
          </div>
        </div>

        <!-- 2D Optimization Crystal Pad UI -->
        <div id="mechBody2D" class="mech-body hidden">
          <div class="mech-2d-layout">
            <div class="mech-pad-wrap">
              <div id="mechPad2D" class="mech-pad-2d" aria-label="2D Crystal Alignment Pad">
                <div class="pad-grid-lines"></div>
                <div id="mechPuck2D" class="pad-puck"></div>
              </div>
            </div>

            <div class="mech-2d-meters">
              <div class="mech-meter-group">
                <div class="mech-meter-label">
                  <span>First crystal</span>
                  <span id="mechCrystalXHint" class="crystal-hint">◄</span>
                </div>
                <div class="mech-bar-track"><div id="mechCrystalXBar" class="mech-bar-fill crystal"></div></div>
              </div>

              <div class="mech-meter-group">
                <div class="mech-meter-label">
                  <span>Second crystal</span>
                  <span id="mechCrystalYHint" class="crystal-hint">▲</span>
                </div>
                <div class="mech-bar-track"><div id="mechCrystalYBar" class="mech-bar-fill crystal"></div></div>
              </div>

              <div class="mech-meter-group">
                <div class="mech-meter-label">
                  <span>Turbulence</span>
                  <span id="mechStatus2D" class="mech-status-badge">Seeking harmony</span>
                </div>
                <div class="mech-bar-track"><div id="mechGradMagBar" class="mech-bar-fill energy"></div></div>
              </div>

              <div class="mech-meter-group">
                <div class="mech-meter-label"><span>Hold the harmony</span></div>
                <div class="mech-bar-track"><div id="mechDwellBar2D" class="mech-bar-fill dwell"></div></div>
              </div>
            </div>
          </div>
        </div>

        <div id="mechControlHint" class="mech-control-hint"></div>
      </div>
    `;

    container.appendChild(this.root);

    this.titleEl = this.root.querySelector('#mechTitle')!;
    this.subtitleEl = this.root.querySelector('#mechSubtitle')!;
    this.body1D = this.root.querySelector('#mechBody1D')!;
    this.body2D = this.root.querySelector('#mechBody2D')!;
    this.controlHintEl = this.root.querySelector('#mechControlHint')!;

    this.slider1D = this.root.querySelector('#mechSlider1D')!;
    this.needle1D = this.root.querySelector('#mechNeedle1D')!;
    this.energyBar1D = this.root.querySelector('#mechEnergyBar1D')!;
    this.dwellBar1D = this.root.querySelector('#mechDwellBar1D')!;
    this.status1DEl = this.root.querySelector('#mechStatus1D')!;
    this.curvature1DEl = this.root.querySelector('#mechCurvature1D')!;

    this.pad2D = this.root.querySelector('#mechPad2D')!;
    this.puck2D = this.root.querySelector('#mechPuck2D')!;
    this.crystalXBar = this.root.querySelector('#mechCrystalXBar')!;
    this.crystalYBar = this.root.querySelector('#mechCrystalYBar')!;
    this.crystalXHint = this.root.querySelector('#mechCrystalXHint')!;
    this.crystalYHint = this.root.querySelector('#mechCrystalYHint')!;
    this.gradMagBar = this.root.querySelector('#mechGradMagBar')!;
    this.dwellBar2D = this.root.querySelector('#mechDwellBar2D')!;
    this.status2DEl = this.root.querySelector('#mechStatus2D')!;

    this.mathPanel = this.root.querySelector('#mechMathDrawer')!;
    this.mathBody = this.root.querySelector('#mechMathText')!;

    this.bindEvents();
  }

  public isOpen(): boolean {
    return this.active !== null;
  }

  public open(mech: ActiveMechanism, onClose: () => void): void {
    this.active = mech;
    this.onCloseCallback = onClose;
    this.mathOpen = false;
    this.mathPanel.classList.add('hidden');
    this.titleEl.textContent = mech.title;
    this.subtitleEl.textContent = mech.subtitle;

    if (mech.kind === '1d') {
      this.body1D.classList.remove('hidden');
      this.body2D.classList.add('hidden');
      this.slider1D.value = String(mech.model.x);
      this.mathBody.innerHTML = 'The ring closes only while the current stays calm. Follow the pull, make smaller adjustments as the trembling fades, then hold still.';
    } else {
      this.body1D.classList.add('hidden');
      this.body2D.classList.remove('hidden');
      this.mathBody.innerHTML = 'Each crystal has its own current. Follow both arrows. When both crystals settle together, hold them steady until the ring closes.';
    }

    this.refreshControlHint();
    this.root.classList.remove('hidden');
    this.stepSimulation(0);
  }

  public close(): void {
    if (!this.active) return;
    this.active = null;
    this.dragging2D = false;
    this.sound.stopMechanismResonance();
    this.root.classList.add('hidden');
    const cb = this.onCloseCallback;
    this.onCloseCallback = null;
    cb?.();
  }

  public refreshControlHint(): void {
    const left = this.inputManager.getActionPrimaryLabel('moveLeft');
    const right = this.inputManager.getActionPrimaryLabel('moveRight');
    const up = this.inputManager.getActionPrimaryLabel('moveForward');
    const down = this.inputManager.getActionPrimaryLabel('moveBackward');
    const interact = this.inputManager.getActionPrimaryLabel('interact');
    const pause = this.inputManager.getActionPrimaryLabel('pause');

    if (this.active?.kind === '2d') {
      this.controlHintEl.textContent =
        `Drag the crystal puck or use [${left}]/[${right}] (X) and [${up}]/[${down}] (Y). Press [${interact}] or [${pause}] to exit.`;
    } else {
      this.controlHintEl.textContent =
        `Drag the dial or use [${left}]/[${right}] to tune energy. Press [${interact}] or [${pause}] to exit.`;
    }
  }

  public stepSimulation(dt: number): void {
    if (!this.active) return;

    // Exit check
    if (this.inputManager.isPressed('pause') || this.inputManager.isPressed('interact')) {
      this.close();
      return;
    }

    // Keyboard movement bindings manipulate dial/crystals smoothly
    const axes = this.inputManager.getMovementAxes();
    const adjustSpeed = 0.36;

    if (this.active.kind === '1d') {
      if (Math.abs(axes.x) > 0.05) {
        this.active.model.adjustDial(axes.x * adjustSpeed * dt);
        this.slider1D.value = String(this.active.model.x);
      }

      const ev = this.active.model.step(dt);
      this.sound.updateMechanismResonance(ev.closeness, ev.isMinimumConditionMet);

      // Visual updates
      const normalizedSlope = Math.max(-1, Math.min(1, ev.firstDerivative / Math.max(1, this.active.model.k * 1.4)));
      const needlePct = 50 + normalizedSlope * 45;
      this.needle1D.style.left = `${needlePct}%`;
      this.needle1D.classList.toggle('aligned', ev.isMinimumConditionMet);

      this.energyBar1D.style.width = `${Math.max(6, (1 - ev.closeness * 0.88) * 100)}%`;
      this.energyBar1D.classList.toggle('aligned', ev.isMinimumConditionMet);
      this.dwellBar1D.style.width = `${ev.dwellProgress * 100}%`;

      this.curvature1DEl.textContent = ev.isMinimumConditionMet ? '◆ Steady' : '◇ Unsettled';
      this.setResonance(ev.closeness,ev.dwellProgress,ev.isMinimumConditionMet);

      this.status1DEl.textContent = ev.stabilized
        ? 'Stabilized!'
        : ev.isMinimumConditionMet
          ? 'Hold Steady...'
          : Math.abs(ev.firstDerivative) > 0.1
            ? ev.firstDerivative < 0
              ? 'Turn right →'
              : '← Turn left'
            : 'Adjusting';
      this.status1DEl.className = `mech-status-badge ${ev.isMinimumConditionMet ? 'ready' : ''}`;

      if (ev.stabilized) {
        const solvedCb = this.active.onSolved;
        this.sound.stopMechanismResonance();
        this.sound.playMechanismSolved();
        this.active = null;
        this.root.classList.add('hidden');
        this.onCloseCallback?.();
        this.onCloseCallback = null;
        solvedCb();
      }
    } else {
      if (Math.abs(axes.x) > 0.05 || Math.abs(axes.z) > 0.05) {
        this.active.model.adjustCrystals(axes.x * adjustSpeed * dt, axes.z * adjustSpeed * dt);
      }

      const ev = this.active.model.step(dt);
      this.sound.updateMechanismResonance(ev.closeness, ev.isMinimumConditionMet);

      // Update puck position (Y=1 top, Y=0 bottom)
      this.puck2D.style.left = `${ev.x * 100}%`;
      this.puck2D.style.top = `${(1 - ev.y) * 100}%`;
      this.puck2D.classList.toggle('aligned', ev.isMinimumConditionMet);

      this.crystalXBar.style.width = `${ev.xFeedback.closeness * 100}%`;
      this.crystalYBar.style.width = `${ev.yFeedback.closeness * 100}%`;

      this.crystalXHint.textContent =
        ev.xFeedback.directionHint === 0 ? '✓ Aligned' : ev.xFeedback.directionHint > 0 ? 'Move Right ►' : '◄ Move Left';
      this.crystalYHint.textContent =
        ev.yFeedback.directionHint === 0 ? '✓ Aligned' : ev.yFeedback.directionHint > 0 ? 'Move Up ▲' : '▼ Move Down';

      this.gradMagBar.style.width = `${Math.max(6, (1 - ev.closeness * 0.88) * 100)}%`;
      this.dwellBar2D.style.width = `${ev.dwellProgress * 100}%`;

      this.status2DEl.textContent = ev.unlocked
        ? 'Stabilized!'
        : ev.isMinimumConditionMet
          ? 'Hold Steady...'
          : 'Follow each current';
      this.setResonance(ev.closeness,ev.dwellProgress,ev.isMinimumConditionMet);
      this.status2DEl.className = `mech-status-badge ${ev.isMinimumConditionMet ? 'ready' : ''}`;

      if (ev.unlocked) {
        const solvedCb = this.active.onSolved;
        this.sound.stopMechanismResonance();
        this.sound.playMechanismSolved();
        this.active = null;
        this.root.classList.add('hidden');
        this.onCloseCallback?.();
        this.onCloseCallback = null;
        solvedCb();
      }
    }
  }

  private setResonance(closeness:number,hold:number,steady:boolean):void {
    this.root.style.setProperty('--unrest',String(1-closeness));
    this.root.style.setProperty('--hold',String(hold));
    this.root.style.setProperty('--orbit-time',`${.6+closeness*5}s`);
    this.root.classList.toggle('steady',steady);
  }

  private bindEvents(): void {
    this.root.querySelector('#btnMechClose')!.addEventListener('click', () => {
      this.sound.playUiClick();
      this.close();
    });

    this.root.querySelector('#btnMechMathInfo')!.addEventListener('click', () => {
      this.sound.playUiClick();
      this.mathOpen = !this.mathOpen;
      this.mathPanel.classList.toggle('hidden', !this.mathOpen);
    });

    this.slider1D.addEventListener('input', () => {
      if (this.active?.kind === '1d') {
        this.active.model.setDial(parseFloat(this.slider1D.value));
      }
    });

    const update2DPadFromPointer = (clientX: number, clientY: number) => {
      if (this.active?.kind !== '2d') return;
      const rect = this.pad2D.getBoundingClientRect();
      const nx = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const ny = Math.max(0, Math.min(1, 1 - (clientY - rect.top) / rect.height));
      this.active.model.setCrystals(nx, ny);
    };

    this.pad2D.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.dragging2D = true;
      try { this.pad2D.setPointerCapture(e.pointerId); } catch {}
      update2DPadFromPointer(e.clientX, e.clientY);
    });

    this.pad2D.addEventListener('pointermove', (e) => {
      if (!this.dragging2D) return;
      e.preventDefault();
      update2DPadFromPointer(e.clientX, e.clientY);
    });

    const endDrag2D = () => {
      this.dragging2D = false;
    };
    this.pad2D.addEventListener('pointerup', endDrag2D);
    this.pad2D.addEventListener('pointercancel', endDrag2D);
  }
}

