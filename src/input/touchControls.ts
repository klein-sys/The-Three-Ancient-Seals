import { InputManager } from './inputManager';
import { MobileSettings } from '../storage/persistence';
import { GameAction } from './actions';

export interface TouchActionHooks {
  onOpenInventory: () => void;
  onToggleMap: () => void;
  onPause: () => void;
  onOpenSettings: () => void;
}

export class TouchControlsUI {
  private root: HTMLElement;
  private joystickZone: HTMLElement;
  private joystickBase: HTMLElement;
  private joystickKnob: HTMLElement;
  private lookZone: HTMLElement;
  private portraitBanner: HTMLElement;

  private btnAttack: HTMLButtonElement;
  private btnDodge: HTMLButtonElement;
  private btnSprint: HTMLButtonElement;
  private btnInteract: HTMLButtonElement;
  private btnPotion: HTMLButtonElement;

  private inputManager: InputManager;
  private hooks: TouchActionHooks;
  private mobileSettings: MobileSettings;

  private joystickPointerId: number | null = null;
  private joystickCenter = { x: 0, y: 0 };
  private lookPointerId: number | null = null;
  private lastLookPos = { x: 0, y: 0 };
  private buttonPointers = new Map<number, GameAction>();
  private touchSprintLatched = false;
  private visible = false;

  constructor(
    container: HTMLElement,
    inputManager: InputManager,
    initialSettings: MobileSettings,
    hooks: TouchActionHooks
  ) {
    this.inputManager = inputManager;
    this.mobileSettings = { ...initialSettings };
    this.hooks = hooks;

    this.root = document.createElement('div');
    this.root.id = 'mobileControlsLayer';
    this.root.className = 'mobile-controls hidden';
    this.root.innerHTML = `
      <div id="portraitWarningBanner" class="portrait-banner hidden" role="status">
        Rotate your device to landscape mode for the best experience.
      </div>
      <div class="mobile-top-utils">
        <button type="button" class="touch-util-btn" data-util="inventory" aria-label="Inventory">Bag</button>
        <button type="button" class="touch-util-btn" data-util="map" aria-label="Map">Map</button>
        <button type="button" class="touch-util-btn" data-util="settings" aria-label="Settings">Settings</button>
        <button type="button" class="touch-util-btn" data-util="pause" aria-label="Pause">Pause</button>
      </div>
      <div id="touchLookZone" class="touch-look-zone" aria-label="Camera Look Area"></div>
      <div id="touchJoystickZone" class="touch-joystick-zone" aria-label="Movement Joystick">
        <div id="touchJoystickBase" class="joystick-base">
          <div id="touchJoystickKnob" class="joystick-knob"></div>
        </div>
      </div>
      <div class="touch-action-cluster">
        <button type="button" id="touchBtnInteract" class="touch-action-btn touch-interact hidden" aria-label="Interact">
          <span>Interact</span>
        </button>
        <button type="button" id="touchBtnPotion" class="touch-action-btn touch-potion" aria-label="Use Potion">
          <span>Potion</span>
          <small id="touchPotionBadge">1</small>
        </button>
        <button type="button" id="touchBtnSprint" class="touch-action-btn touch-sprint" aria-label="Sprint">
          <span>Sprint</span>
        </button>
        <button type="button" id="touchBtnDodge" class="touch-action-btn touch-dodge" aria-label="Dodge">
          <span>Dodge</span>
        </button>
        <button type="button" id="touchBtnAttack" class="touch-action-btn touch-attack" aria-label="Attack">
          <span>Attack</span>
        </button>
      </div>
    `;

    container.appendChild(this.root);

    this.joystickZone = this.root.querySelector('#touchJoystickZone')!;
    this.joystickBase = this.root.querySelector('#touchJoystickBase')!;
    this.joystickKnob = this.root.querySelector('#touchJoystickKnob')!;
    this.lookZone = this.root.querySelector('#touchLookZone')!;
    this.portraitBanner = this.root.querySelector('#portraitWarningBanner')!;

    this.btnAttack = this.root.querySelector('#touchBtnAttack')!;
    this.btnDodge = this.root.querySelector('#touchBtnDodge')!;
    this.btnSprint = this.root.querySelector('#touchBtnSprint')!;
    this.btnInteract = this.root.querySelector('#touchBtnInteract')!;
    this.btnPotion = this.root.querySelector('#touchBtnPotion')!;

    this.bindEvents();
    this.applySettings(this.mobileSettings);
    this.updateOrientationBanner();
  }

  public setVisible(visible: boolean): void {
    this.visible = visible;
    this.root.classList.toggle('hidden', !visible);
    if (!visible) {
      this.resetAllTouches();
    }
  }

  public isVisible(): boolean {
    return this.visible;
  }

  public applySettings(settings: MobileSettings): void {
    this.mobileSettings = { ...settings };
    this.root.style.setProperty('--hud-scale', String(settings.hudScale));
    this.root.style.setProperty('--touch-opacity', String(settings.buttonOpacity));
    this.root.style.setProperty('--joystick-size', `${settings.joystickSize}px`);
    this.root.style.setProperty('--attack-size', `${settings.attackButtonSize}px`);
  }

  public updateContextualState(opts: {
    canInteract: boolean;
    interactLabel?: string;
    potions: number;
    hp: number;
    maxHp: number;
  }): void {
    this.btnInteract.classList.toggle('hidden', !opts.canInteract);
    if (opts.interactLabel) {
      this.btnInteract.querySelector('span')!.textContent = opts.interactLabel;
    }
    const badge = this.btnPotion.querySelector('#touchPotionBadge')!;
    badge.textContent = String(opts.potions);
    this.btnPotion.disabled = opts.potions <= 0 || opts.hp >= opts.maxHp;
  }

  public resetAllTouches(): void {
    this.joystickPointerId = null;
    this.lookPointerId = null;
    this.joystickKnob.style.transform = 'translate(-50%, -50%)';
    this.inputManager.setVirtualAnalog(0, 0);

    for (const [pointerId,action] of this.buttonPointers) {
      this.inputManager.setVirtualAction(action, false, `touch:${action}:${pointerId}`);
    }
    this.root.querySelectorAll('.pressed').forEach(button=>button.classList.remove('pressed'));
    this.buttonPointers.clear();
    this.touchSprintLatched = false;
    this.btnSprint.classList.remove('active');
    this.inputManager.setVirtualAction('sprint', false, 'touch:sprint');
  }

  public updateOrientationBanner(): void {
    const isPortrait = window.innerHeight > window.innerWidth;
    this.portraitBanner.classList.toggle('hidden', !isPortrait);
  }

  private bindEvents(): void {
    window.addEventListener('resize', () => this.updateOrientationBanner());
    window.addEventListener('orientationchange', () => this.updateOrientationBanner());
    window.addEventListener('blur', () => this.resetAllTouches());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.resetAllTouches();
    });

    // Detect global touch activity for hybrid devices
    window.addEventListener(
      'pointerdown',
      (e) => {
        if (e.pointerType === 'touch') {
          this.inputManager.reportTouchActivity();
        }
      },
      { passive: true }
    );

    // Joystick handling
    this.joystickZone.addEventListener('pointerdown', (e) => {
      if (this.joystickPointerId !== null) return;
      e.preventDefault();
      e.stopPropagation();
      this.inputManager.reportTouchActivity();
      this.joystickPointerId = e.pointerId;
      try { this.joystickZone.setPointerCapture(e.pointerId); } catch {}
      const rect = this.joystickBase.getBoundingClientRect();
      this.joystickCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      this.updateJoystickFromPointer(e.clientX, e.clientY);
    });

    this.joystickZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.joystickPointerId) return;
      e.preventDefault();
      this.updateJoystickFromPointer(e.clientX, e.clientY);
    });

    const endJoystick = (e: PointerEvent) => {
      if (e.pointerId !== this.joystickPointerId) return;
      this.joystickPointerId = null;
      this.joystickKnob.style.transform = 'translate(-50%, -50%)';
      this.inputManager.setVirtualAnalog(0, 0);
    };
    this.joystickZone.addEventListener('pointerup', endJoystick);
    this.joystickZone.addEventListener('pointercancel', endJoystick);

    // Right-side camera swipe handling
    this.lookZone.addEventListener('pointerdown', (e) => {
      if (this.lookPointerId !== null) return;
      e.preventDefault();
      this.inputManager.reportTouchActivity();
      this.lookPointerId = e.pointerId;
      try { this.lookZone.setPointerCapture(e.pointerId); } catch {}
      this.lastLookPos = { x: e.clientX, y: e.clientY };
    });

    this.lookZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.lookPointerId) return;
      e.preventDefault();
      const dx = e.clientX - this.lastLookPos.x;
      const dy = e.clientY - this.lastLookPos.y;
      this.lastLookPos = { x: e.clientX, y: e.clientY };

      const sens = this.mobileSettings.cameraSensitivity * 1.45;
      const invert = this.mobileSettings.invertY ? -1 : 1;
      this.inputManager.addTouchLookDelta(dx * sens, dy * sens * invert);
    });

    const endLook = (e: PointerEvent) => {
      if (e.pointerId !== this.lookPointerId) return;
      this.lookPointerId = null;
    };
    this.lookZone.addEventListener('pointerup', endLook);
    this.lookZone.addEventListener('pointercancel', endLook);

    // Action buttons (strictly stopPropagation so touching buttons never rotates camera)
    this.bindActionButton(this.btnAttack, 'attack');
    this.bindActionButton(this.btnDodge, 'dodge');
    this.bindActionButton(this.btnInteract, 'interact');
    this.bindActionButton(this.btnPotion, 'usePotion');

    // Sprint button works smoothly on touch as a toggle or hold
    this.btnSprint.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.inputManager.reportTouchActivity();
      this.touchSprintLatched = !this.touchSprintLatched;
      this.btnSprint.classList.toggle('active', this.touchSprintLatched);
      this.inputManager.setVirtualAction('sprint', this.touchSprintLatched, 'touch:sprint');
    });

    // Top utility buttons
    this.root.querySelectorAll('.touch-util-btn').forEach((el) => {
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const util = (el as HTMLElement).dataset.util;
        if (util === 'inventory') this.hooks.onOpenInventory();
        else if (util === 'map') this.hooks.onToggleMap();
        else if (util === 'settings') this.hooks.onOpenSettings();
        else if (util === 'pause') this.hooks.onPause();
      });
    });
  }

  private bindActionButton(btn: HTMLButtonElement, action: GameAction): void {
    btn.addEventListener('pointerdown', (e) => {
      if (btn.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      this.inputManager.reportTouchActivity();
      this.buttonPointers.set(e.pointerId, action);
      try { btn.setPointerCapture(e.pointerId); } catch {}
      btn.classList.add('pressed');
      this.inputManager.setVirtualAction(action, true, `touch:${action}:${e.pointerId}`);
    });

    const release = (e: PointerEvent) => {
      const act = this.buttonPointers.get(e.pointerId);
      if (!act) return;
      this.buttonPointers.delete(e.pointerId);
      btn.classList.remove('pressed');
      this.inputManager.setVirtualAction(act, false, `touch:${act}:${e.pointerId}`);
    };

    btn.addEventListener('pointerup', release);
    btn.addEventListener('pointercancel', release);
  }

  private updateJoystickFromPointer(clientX: number, clientY: number): void {
    const maxRadius = this.mobileSettings.joystickSize * 0.42;
    const rawDx = clientX - this.joystickCenter.x;
    const rawDy = clientY - this.joystickCenter.y;
    const dist = Math.hypot(rawDx, rawDy);
    const clampedDist = Math.min(maxRadius, dist);
    const angle = Math.atan2(rawDy, rawDx);

    const visualX = Math.cos(angle) * clampedDist;
    const visualY = Math.sin(angle) * clampedDist;
    this.joystickKnob.style.transform = `translate(calc(-50% + ${visualX}px), calc(-50% + ${visualY}px))`;

    // Apply joystick sensitivity and deadzone
    const normMag = clampedDist / maxRadius;
    if (normMag < 0.12) {
      this.inputManager.setVirtualAnalog(0, 0);
      return;
    }
    const scaled = Math.min(1, normMag * this.mobileSettings.joystickSensitivity);
    const outX = Math.cos(angle) * scaled;
    const outForward = -Math.sin(angle) * scaled; // Up on screen is +forward
    this.inputManager.setVirtualAnalog(outX, outForward);
  }
}

