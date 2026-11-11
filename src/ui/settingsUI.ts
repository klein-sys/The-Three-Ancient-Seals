import {
  ACTION_METADATA,
  BindingCode,
  DEFAULT_CONTROL_BINDINGS,
  GameAction,
  cloneBindings,
  findBindingConflict,
  getFriendlyBindingLabel,
  validateControlBindings,
} from '../input/actions';
import { InputManager } from '../input/inputManager';
import {
  GRAPHICS_PRESETS,
  GraphicsPresetId,
  InterfaceMode,
  RenderScale,
  ShadowQuality,
  EffectsQuality,
  ViewDistance,
  TextureQuality,
} from '../config/gameConfig';
import { SettingsDataV1, sanitizeSettings } from '../storage/persistence';

export interface SettingsApplyHandler {
  onApplySettings: (settings: SettingsDataV1) => void;
  onClose: () => void;
}

type SettingsTab = 'controls' | 'desktop' | 'mobile' | 'graphics';

export class SettingsUI {
  private root: HTMLElement;
  private inputManager: InputManager;
  private activeSettings: SettingsDataV1;
  private draftSettings: SettingsDataV1;
  private callbacks: SettingsApplyHandler;

  private currentTab: SettingsTab = 'controls';
  private capturingTarget: { action: GameAction; slot: 'primary' | 'secondary' } | null = null;
  private pendingConflict: {
    targetAction: GameAction;
    targetSlot: 'primary' | 'secondary';
    code: BindingCode;
    conflictAction: GameAction;
    conflictLabel: string;
    conflictSlot: 'primary' | 'secondary';
  } | null = null;
  private confirmingResetAll = false;
  private validationErrorMsg: string | null = null;
  private infoNoticeMsg: string | null = null;

  constructor(
    container: HTMLElement,
    inputManager: InputManager,
    initialSettings: SettingsDataV1,
    callbacks: SettingsApplyHandler
  ) {
    this.inputManager = inputManager;
    this.activeSettings = sanitizeSettings(initialSettings) ?? initialSettings;
    this.draftSettings = structuredClone(this.activeSettings);
    this.callbacks = callbacks;

    this.root = document.createElement('div');
    this.root.id = 'settingsModal';
    this.root.className = 'modal-overlay hidden';
    this.root.innerHTML = `
      <div class="modal-card settings-card" role="dialog" aria-modal="true" aria-labelledby="settingsHeading">
        <div class="modal-header">
          <div>
            <h2 id="settingsHeading">Settings</h2>
            <div class="modal-subtitle">Configure Controls, Desktop, Mobile, and Graphics</div>
          </div>
          <button type="button" id="btnSettingsTopClose" class="btn-secondary btn-sm">✕</button>
        </div>

        <div class="settings-tabs" role="tablist">
          <button type="button" class="settings-tab active" data-tab="controls" role="tab">Controls → Keyboard &amp; Mouse</button>
          <button type="button" class="settings-tab" data-tab="desktop" role="tab">Desktop</button>
          <button type="button" class="settings-tab" data-tab="mobile" role="tab">Mobile</button>
          <button type="button" class="settings-tab" data-tab="graphics" role="tab">Graphics &amp; Audio</button>
        </div>

        <div id="settingsBannerArea"></div>
        <div id="settingsTabBody" class="settings-body"></div>

        <div class="settings-footer">
          <button type="button" id="btnResetAllControls" class="btn-danger">Reset All Controls</button>
          <div class="settings-footer-right">
            <button type="button" id="btnSettingsCancel" class="btn-secondary">Cancel</button>
            <button type="button" id="btnSettingsApply" class="btn-primary">Apply</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(this.root);
    this.bindStaticEvents();
  }

  public isOpen(): boolean {
    return !this.root.classList.contains('hidden');
  }

  public open(activeSettings: SettingsDataV1, initialTab: SettingsTab = 'controls'): void {
    this.activeSettings = structuredClone(activeSettings);
    this.draftSettings = structuredClone(activeSettings);
    this.currentTab = initialTab;
    this.capturingTarget = null;
    this.pendingConflict = null;
    this.confirmingResetAll = false;
    this.validationErrorMsg = null;
    this.infoNoticeMsg = null;

    this.root.classList.remove('hidden');
    this.render();
  }

  public close(): void {
    if (this.capturingTarget) {
      this.inputManager.stopRebindCapture();
      this.capturingTarget = null;
    }
    this.root.classList.add('hidden');
    this.callbacks.onClose();
  }

  private bindStaticEvents(): void {
    this.root.querySelector('#btnSettingsTopClose')!.addEventListener('click', () => {
      this.close();
    });

    this.root.querySelector('#btnSettingsCancel')!.addEventListener('click', () => {
      // Discard unapplied draft edits
      this.draftSettings = structuredClone(this.activeSettings);
      this.close();
    });

    this.root.querySelector('#btnSettingsApply')!.addEventListener('click', () => {
      this.handleApply();
    });

    this.root.querySelector('#btnResetAllControls')!.addEventListener('click', () => {
      this.confirmingResetAll = true;
      this.pendingConflict = null;
      this.validationErrorMsg = null;
      this.renderBanners();
    });

    this.root.querySelectorAll('.settings-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (this.capturingTarget) {
          this.inputManager.stopRebindCapture();
          this.capturingTarget = null;
          this.inputManager.setContext('menu');
        }
        const tab = (btn as HTMLElement).dataset.tab as SettingsTab;
        this.currentTab = tab;
        this.render();
      });
    });
  }

  private handleApply(): void {
    if (this.capturingTarget) {
      this.inputManager.stopRebindCapture();
      this.capturingTarget = null;
      this.inputManager.setContext('menu');
    }

    const validation = validateControlBindings(this.draftSettings.controls);
    if (!validation.valid) {
      const missingNames = validation.missingActions.map((m) => m.label).join(', ');
      this.validationErrorMsg = `Cannot apply: required action(s) have no binding assigned (${missingNames}).`;
      this.currentTab = 'controls';
      this.render();
      return;
    }

    this.validationErrorMsg = null;
    this.activeSettings = structuredClone(this.draftSettings);
    this.callbacks.onApplySettings(structuredClone(this.activeSettings));
    this.root.classList.add('hidden');
    this.callbacks.onClose();
  }

  private render(): void {
    this.root.querySelectorAll('.settings-tab').forEach((tab) => {
      tab.classList.toggle('active', (tab as HTMLElement).dataset.tab === this.currentTab);
    });

    this.root.querySelector('#btnResetAllControls')!.classList.toggle('hidden', this.currentTab !== 'controls');

    this.renderBanners();
    const body = this.root.querySelector('#settingsTabBody')!;
    if (this.currentTab === 'controls') {
      this.renderControlsTab(body as HTMLElement);
    } else if (this.currentTab === 'desktop') {
      this.renderDesktopTab(body as HTMLElement);
    } else if (this.currentTab === 'mobile') {
      this.renderMobileTab(body as HTMLElement);
    } else {
      this.renderGraphicsTab(body as HTMLElement);
    }
  }

  private renderBanners(): void {
    const area = this.root.querySelector('#settingsBannerArea')!;
    area.innerHTML = '';

    if (this.validationErrorMsg) {
      const div = document.createElement('div');
      div.className = 'settings-banner error';
      div.textContent = this.validationErrorMsg;
      area.appendChild(div);
    }

    if (this.infoNoticeMsg) {
      const div = document.createElement('div');
      div.className = 'settings-banner info';
      div.textContent = this.infoNoticeMsg;
      area.appendChild(div);
    }

    if (this.capturingTarget) {
      const meta = ACTION_METADATA.find((m) => m.action === this.capturingTarget!.action)!;
      const box = document.createElement('div');
      box.className = 'capture-banner';
      box.innerHTML = `
        <div class="capture-text">
          <strong>${meta.label} (${this.capturingTarget.slot === 'primary' ? 'Primary' : 'Secondary'})</strong>:
          Press a key or mouse button. (Escape cancels)
        </div>
        <div id="captureControlBtns" class="capture-actions">
          <button type="button" id="btnCaptureClear" class="btn-secondary btn-sm">Clear</button>
          <button type="button" id="btnCaptureCancel" class="btn-secondary btn-sm">Cancel</button>
        </div>
      `;
      area.appendChild(box);

      box.querySelector('#btnCaptureCancel')!.addEventListener('click', () => {
        this.inputManager.stopRebindCapture();
        this.inputManager.setContext('menu');
        this.capturingTarget = null;
        this.render();
      });

      box.querySelector('#btnCaptureClear')!.addEventListener('click', () => {
        const target = this.capturingTarget;
        this.inputManager.stopRebindCapture();
        this.inputManager.setContext('menu');
        this.capturingTarget = null;
        if (target) {
          this.draftSettings.controls[target.action][target.slot] = null;
          this.validationErrorMsg = null;
        }
        this.render();
      });
    }

    if (this.pendingConflict) {
      const c = this.pendingConflict;
      const targetMeta = ACTION_METADATA.find((m) => m.action === c.targetAction)!;
      const box = document.createElement('div');
      box.className = 'conflict-banner';
      box.innerHTML = `
        <div class="conflict-text">
          <strong>Key Conflict:</strong> "${getFriendlyBindingLabel(c.code)}" is already bound to
          <strong>${c.conflictLabel}</strong> (${c.conflictSlot}). Replace it for <strong>${targetMeta.label}</strong>?
        </div>
        <div class="conflict-actions">
          <button type="button" id="btnConflictReplace" class="btn-primary btn-sm">Replace</button>
          <button type="button" id="btnConflictCancel" class="btn-secondary btn-sm">Cancel</button>
        </div>
      `;
      area.appendChild(box);

      box.querySelector('#btnConflictReplace')!.addEventListener('click', () => {
        this.draftSettings.controls[c.conflictAction][c.conflictSlot] = null;
        this.draftSettings.controls[c.targetAction][c.targetSlot] = c.code;
        this.pendingConflict = null;
        this.validationErrorMsg = null;
        this.render();
      });

      box.querySelector('#btnConflictCancel')!.addEventListener('click', () => {
        this.pendingConflict = null;
        this.render();
      });
    }

    if (this.confirmingResetAll) {
      const box = document.createElement('div');
      box.className = 'conflict-banner';
      box.innerHTML = `
        <div class="conflict-text">
          <strong>Confirm Reset:</strong> Reset all Keyboard &amp; Mouse bindings back to default values?
        </div>
        <div class="conflict-actions">
          <button type="button" id="btnConfirmResetYes" class="btn-danger btn-sm">Confirm Reset</button>
          <button type="button" id="btnConfirmResetNo" class="btn-secondary btn-sm">Cancel</button>
        </div>
      `;
      area.appendChild(box);

      box.querySelector('#btnConfirmResetYes')!.addEventListener('click', () => {
        this.draftSettings.controls = cloneBindings(DEFAULT_CONTROL_BINDINGS);
        this.confirmingResetAll = false;
        this.validationErrorMsg = null;
        this.infoNoticeMsg = 'All draft bindings reset to defaults. Click Apply to save.';
        this.render();
      });

      box.querySelector('#btnConfirmResetNo')!.addEventListener('click', () => {
        this.confirmingResetAll = false;
        this.render();
      });
    }
  }

  private renderControlsTab(container: HTMLElement): void {
    const validation = validateControlBindings(this.draftSettings.controls);
    const missingSet = new Set(validation.missingActions.map((m) => m.action));

    container.innerHTML = `
      <div class="controls-header-row">
        <span>Action</span>
        <span>Primary</span>
        <span>Secondary</span>
        <span>Reset</span>
      </div>
      <div id="controlsListRows" class="controls-rows"></div>
    `;

    const list = container.querySelector('#controlsListRows')!;
    for (const meta of ACTION_METADATA) {
      const binding = this.draftSettings.controls[meta.action];
      const isMissing = missingSet.has(meta.action);
      const isCapturingPrim = this.capturingTarget?.action === meta.action && this.capturingTarget.slot === 'primary';
      const isCapturingSec = this.capturingTarget?.action === meta.action && this.capturingTarget.slot === 'secondary';

      const row = document.createElement('div');
      row.className = `control-row ${isMissing ? 'row-missing' : ''}`;
      row.dataset.action = meta.action;

      const primLabel = meta.primaryLockedEscape
        ? 'Escape (Locked)'
        : isCapturingPrim
          ? 'Press a key or mouse button.'
          : getFriendlyBindingLabel(binding.primary);
      const secLabel = isCapturingSec
        ? 'Press a key or mouse button.'
        : getFriendlyBindingLabel(binding.secondary);

      row.innerHTML = `
        <div class="control-action-info">
          <div class="control-action-name">${meta.label}${isMissing ? ' <span class="missing-tag">(Required)</span>' : ''}</div>
          <div class="control-action-desc">${meta.description}</div>
        </div>
        <div>
          <button type="button" class="bind-btn ${isCapturingPrim ? 'capturing' : ''}" data-slot="primary" ${meta.primaryLockedEscape ? 'disabled title="Escape always pauses/backs out"' : ''}>
            ${primLabel}
          </button>
        </div>
        <div>
          <button type="button" class="bind-btn ${isCapturingSec ? 'capturing' : ''} ${!binding.secondary ? 'unbound' : ''}" data-slot="secondary">
            ${secLabel}
          </button>
        </div>
        <div>
          <button type="button" class="btn-secondary btn-sm reset-action-btn">Reset Action</button>
        </div>
      `;

      const primBtn = row.querySelector('[data-slot="primary"]') as HTMLButtonElement;
      const secBtn = row.querySelector('[data-slot="secondary"]') as HTMLButtonElement;
      const resetBtn = row.querySelector('.reset-action-btn') as HTMLButtonElement;

      if (!meta.primaryLockedEscape) {
        primBtn.addEventListener('click', () => this.beginCapture(meta.action, 'primary'));
      }
      secBtn.addEventListener('click', () => this.beginCapture(meta.action, 'secondary'));
      resetBtn.addEventListener('click', () => this.resetSingleAction(meta.action));

      list.appendChild(row);
    }
  }

  private beginCapture(action: GameAction, slot: 'primary' | 'secondary'): void {
    this.pendingConflict = null;
    this.confirmingResetAll = false;
    this.infoNoticeMsg = null;
    this.capturingTarget = { action, slot };
    this.render();

    const suppressBtns = this.root.querySelector('#captureControlBtns') as HTMLElement | null;
    this.inputManager.startRebindCapture(
      {
        onCaptured: (code: BindingCode) => {
          this.capturingTarget = null;
          this.inputManager.setContext('menu');
          this.handleCapturedInput(action, slot, code);
        },
        onCancel: () => {
          this.capturingTarget = null;
          this.inputManager.setContext('menu');
          this.render();
        },
      },
      suppressBtns
    );
  }

  private handleCapturedInput(action: GameAction, slot: 'primary' | 'secondary', code: BindingCode): void {
    // Check if the same code is already on the OTHER slot of the same action
    const otherSlot = slot === 'primary' ? 'secondary' : 'primary';
    if (this.draftSettings.controls[action][otherSlot] === code) {
      this.draftSettings.controls[action][otherSlot] = null;
    }

    const conflict = findBindingConflict(this.draftSettings.controls, code, action, slot);
    if (conflict) {
      this.pendingConflict = {
        targetAction: action,
        targetSlot: slot,
        code,
        conflictAction: conflict.action,
        conflictLabel: conflict.label,
        conflictSlot: conflict.slot,
      };
      this.render();
      return;
    }

    this.draftSettings.controls[action][slot] = code;
    this.validationErrorMsg = null;
    this.render();
  }

  private resetSingleAction(action: GameAction): void {
    this.pendingConflict = null;
    this.validationErrorMsg = null;
    const def = DEFAULT_CONTROL_BINDINGS[action];
    // Remove default codes from any conflicting action in draft
    if (def.primary) {
      const conflict = findBindingConflict(this.draftSettings.controls, def.primary, action, 'primary');
      if (conflict) {
        this.draftSettings.controls[conflict.action][conflict.slot] = null;
      }
    }
    if (def.secondary) {
      const conflict = findBindingConflict(this.draftSettings.controls, def.secondary, action, 'secondary');
      if (conflict) {
        this.draftSettings.controls[conflict.action][conflict.slot] = null;
      }
    }
    this.draftSettings.controls[action] = { ...def };
    this.render();
  }

  private renderDesktopTab(container: HTMLElement): void {
    const d = this.draftSettings.desktop;
    container.innerHTML = `
      <div class="settings-grid">
        <label class="setting-row">
          <span>Horizontal Mouse Sensitivity <strong id="valHorizSens">${d.horizontalSensitivity.toFixed(1)}</strong></span>
          <input id="inpHorizSens" type="range" min="0.1" max="3.0" step="0.1" value="${d.horizontalSensitivity}">
        </label>
        <label class="setting-row">
          <span>Vertical Mouse Sensitivity <strong id="valVertSens">${d.verticalSensitivity.toFixed(1)}</strong></span>
          <input id="inpVertSens" type="range" min="0.1" max="3.0" step="0.1" value="${d.verticalSensitivity}">
        </label>
        <label class="setting-row">
          <span>Field of View <strong id="valFov">${d.fov}°</strong></span>
          <input id="inpFov" type="range" min="60" max="90" step="1" value="${d.fov}">
        </label>
        <label class="setting-row checkbox-row">
          <span>Invert Y-Axis</span>
          <input id="inpDeskInvertY" type="checkbox" ${d.invertY ? 'checked' : ''}>
        </label>
        <label class="setting-row">
          <span>Sprint Behavior</span>
          <select id="selSprintMode">
            <option value="hold" ${d.sprintMode === 'hold' ? 'selected' : ''}>Hold to Sprint</option>
            <option value="toggle" ${d.sprintMode === 'toggle' ? 'selected' : ''}>Toggle Sprint</option>
          </select>
        </label>
        <label class="setting-row checkbox-row">
          <span>Hold-to-Repeat Primary Attack</span>
          <input id="inpHoldAttack" type="checkbox" ${d.holdToRepeatAttack ? 'checked' : ''}>
        </label>
        <label class="setting-row">
          <span>Interface Mode</span>
          <select id="selInterfaceMode">
            <option value="auto" ${this.draftSettings.interfaceMode === 'auto' ? 'selected' : ''}>Auto (Hybrid Detect)</option>
            <option value="desktop" ${this.draftSettings.interfaceMode === 'desktop' ? 'selected' : ''}>Keyboard &amp; Mouse</option>
            <option value="touch" ${this.draftSettings.interfaceMode === 'touch' ? 'selected' : ''}>Touch Controls</option>
          </select>
        </label>
      </div>
    `;

    const horiz = container.querySelector('#inpHorizSens') as HTMLInputElement;
    horiz.addEventListener('input', () => {
      d.horizontalSensitivity = parseFloat(horiz.value);
      container.querySelector('#valHorizSens')!.textContent = d.horizontalSensitivity.toFixed(1);
    });

    const vert = container.querySelector('#inpVertSens') as HTMLInputElement;
    vert.addEventListener('input', () => {
      d.verticalSensitivity = parseFloat(vert.value);
      container.querySelector('#valVertSens')!.textContent = d.verticalSensitivity.toFixed(1);
    });

    const fov = container.querySelector('#inpFov') as HTMLInputElement;
    fov.addEventListener('input', () => {
      d.fov = parseInt(fov.value, 10);
      container.querySelector('#valFov')!.textContent = `${d.fov}°`;
    });

    const inv = container.querySelector('#inpDeskInvertY') as HTMLInputElement;
    inv.addEventListener('change', () => {
      d.invertY = inv.checked;
    });

    const sprint = container.querySelector('#selSprintMode') as HTMLSelectElement;
    sprint.addEventListener('change', () => {
      d.sprintMode = sprint.value === 'toggle' ? 'toggle' : 'hold';
    });

    const holdAtk = container.querySelector('#inpHoldAttack') as HTMLInputElement;
    holdAtk.addEventListener('change', () => {
      d.holdToRepeatAttack = holdAtk.checked;
    });

    const iface = container.querySelector('#selInterfaceMode') as HTMLSelectElement;
    iface.addEventListener('change', () => {
      this.draftSettings.interfaceMode = iface.value as InterfaceMode;
    });
  }

  private renderMobileTab(container: HTMLElement): void {
    const m = this.draftSettings.mobile;
    container.innerHTML = `
      <div class="settings-grid">
        <label class="setting-row">
          <span>Camera Sensitivity <strong id="valMobSens">${m.cameraSensitivity.toFixed(1)}</strong></span>
          <input id="inpMobSens" type="range" min="0.1" max="3.0" step="0.1" value="${m.cameraSensitivity}">
        </label>
        <label class="setting-row checkbox-row">
          <span>Invert Touch Camera Y</span>
          <input id="inpMobInvertY" type="checkbox" ${m.invertY ? 'checked' : ''}>
        </label>
        <label class="setting-row">
          <span>Joystick Sensitivity <strong id="valJoySens">${m.joystickSensitivity.toFixed(1)}</strong></span>
          <input id="inpJoySens" type="range" min="0.5" max="2.0" step="0.1" value="${m.joystickSensitivity}">
        </label>
        <label class="setting-row">
          <span>Joystick Size <strong id="valJoySize">${m.joystickSize}px</strong></span>
          <input id="inpJoySize" type="range" min="80" max="160" step="4" value="${m.joystickSize}">
        </label>
        <label class="setting-row">
          <span>HUD Scale <strong id="valHudScale">${m.hudScale.toFixed(2)}x</strong></span>
          <input id="inpHudScale" type="range" min="0.75" max="1.35" step="0.05" value="${m.hudScale}">
        </label>
        <label class="setting-row">
          <span>Button Opacity <strong id="valBtnOpacity">${Math.round(m.buttonOpacity * 100)}%</strong></span>
          <input id="inpBtnOpacity" type="range" min="0.4" max="1.0" step="0.05" value="${m.buttonOpacity}">
        </label>
        <label class="setting-row">
          <span>Attack Button Size <strong id="valAtkSize">${m.attackButtonSize}px</strong></span>
          <input id="inpAtkSize" type="range" min="56" max="100" step="4" value="${m.attackButtonSize}">
        </label>
      </div>
    `;

    const bindRange = (id: string, valId: string, fmt: (v: number) => string, apply: (v: number) => void) => {
      const el = container.querySelector(id) as HTMLInputElement;
      el.addEventListener('input', () => {
        const v = parseFloat(el.value);
        apply(v);
        container.querySelector(valId)!.textContent = fmt(v);
      });
    };

    bindRange('#inpMobSens', '#valMobSens', (v) => v.toFixed(1), (v) => (m.cameraSensitivity = v));
    bindRange('#inpJoySens', '#valJoySens', (v) => v.toFixed(1), (v) => (m.joystickSensitivity = v));
    bindRange('#inpJoySize', '#valJoySize', (v) => `${v}px`, (v) => (m.joystickSize = v));
    bindRange('#inpHudScale', '#valHudScale', (v) => `${v.toFixed(2)}x`, (v) => (m.hudScale = v));
    bindRange('#inpBtnOpacity', '#valBtnOpacity', (v) => `${Math.round(v * 100)}%`, (v) => (m.buttonOpacity = v));
    bindRange('#inpAtkSize', '#valAtkSize', (v) => `${v}px`, (v) => (m.attackButtonSize = v));

    const inv = container.querySelector('#inpMobInvertY') as HTMLInputElement;
    inv.addEventListener('change', () => {
      m.invertY = inv.checked;
    });
  }

  private renderGraphicsTab(container: HTMLElement): void {
    const g = this.draftSettings.graphics;
    const canFs = typeof document !== 'undefined' && document.fullscreenEnabled;

    container.innerHTML = `
      <div class="settings-grid">
        <label class="setting-row">
          <span>Quality Preset</span>
          <select id="selGfxPreset">
            <option value="low" ${g.preset === 'low' ? 'selected' : ''}>Low</option>
            <option value="medium" ${g.preset === 'medium' ? 'selected' : ''}>Medium</option>
            <option value="high" ${g.preset === 'high' ? 'selected' : ''}>High</option>
            <option value="custom" ${g.preset === 'custom' ? 'selected' : ''}>Custom</option>
          </select>
        </label>
        <label class="setting-row">
          <span>Shadow Quality</span>
          <select id="selShadowQ">
            <option value="off" ${g.shadowQuality === 'off' ? 'selected' : ''}>Off</option>
            <option value="low" ${g.shadowQuality === 'low' ? 'selected' : ''}>Low (512)</option>
            <option value="medium" ${g.shadowQuality === 'medium' ? 'selected' : ''}>Medium (1024)</option>
            <option value="high" ${g.shadowQuality === 'high' ? 'selected' : ''}>High (2048)</option>
          </select>
        </label>
        <label class="setting-row">
          <span>Effects Quality</span>
          <select id="selEffectsQ">
            <option value="low" ${g.effectsQuality === 'low' ? 'selected' : ''}>Low</option>
            <option value="medium" ${g.effectsQuality === 'medium' ? 'selected' : ''}>Medium</option>
            <option value="high" ${g.effectsQuality === 'high' ? 'selected' : ''}>High</option>
          </select>
        </label>
        <label class="setting-row">
          <span>Render Scale</span>
          <select id="selRenderScale">
            <option value="0.5" ${g.renderScale === 0.5 ? 'selected' : ''}>50%</option>
            <option value="0.75" ${g.renderScale === 0.75 ? 'selected' : ''}>75%</option>
            <option value="1" ${g.renderScale === 1.0 ? 'selected' : ''}>100%</option>
          </select>
        </label>
        <label class="setting-row">
          <span>View Distance</span>
          <select id="selViewDist">
            <option value="near" ${g.viewDistance === 'near' ? 'selected' : ''}>Near</option>
            <option value="medium" ${g.viewDistance === 'medium' ? 'selected' : ''}>Medium</option>
            <option value="far" ${g.viewDistance === 'far' ? 'selected' : ''}>Far</option>
          </select>
        </label>
        <label class="setting-row">
          <span>Procedural Texture Detail</span>
          <select id="selTextureQ">
            <option value="standard" ${g.textureQuality === 'standard' ? 'selected' : ''}>Standard (256px)</option>
            <option value="detailed" ${g.textureQuality === 'detailed' ? 'selected' : ''}>Detailed (512px)</option>
          </select>
        </label>
        <label class="setting-row checkbox-row">
          <span>Axiom’s situational hints</span><input id="inpCompanionHints" type="checkbox" ${this.draftSettings.companionHints?'checked':''}>
        </label><label class="setting-row checkbox-row">
          <span>Reduced motion</span><input id="inpReducedMotion" type="checkbox" ${this.draftSettings.reducedMotion?'checked':''}>
        </label><label class="setting-row checkbox-row">
          <span>Mute Sound Effects</span>
          <input id="inpSoundMute" type="checkbox" ${this.draftSettings.soundMuted ? 'checked' : ''}>
        </label>
        <label class="setting-row checkbox-row">
          <span>Show FPS Performance Counter</span>
          <input id="inpShowFps" type="checkbox" ${this.draftSettings.showFpsCounter ? 'checked' : ''}>
        </label>
        ${
          canFs
            ? `<div class="setting-row"><span>Display Mode</span><button type="button" id="btnToggleFullscreen" class="btn-secondary btn-sm">Toggle Fullscreen</button></div>`
            : ''
        }
      </div>
    `;

    const presetSel = container.querySelector('#selGfxPreset') as HTMLSelectElement;
    presetSel.addEventListener('change', () => {
      const val = presetSel.value as GraphicsPresetId;
      if (val !== 'custom') {
        this.draftSettings.graphics = { ...GRAPHICS_PRESETS[val] };
        this.renderGraphicsTab(container);
      } else {
        this.draftSettings.graphics.preset = 'custom';
      }
    });

    const markCustom = () => {
      this.draftSettings.graphics.preset = 'custom';
      presetSel.value = 'custom';
    };

    const shadowSel = container.querySelector('#selShadowQ') as HTMLSelectElement;
    shadowSel.addEventListener('change', () => {
      g.shadowQuality = shadowSel.value as ShadowQuality;
      markCustom();
    });

    const effSel = container.querySelector('#selEffectsQ') as HTMLSelectElement;
    effSel.addEventListener('change', () => {
      g.effectsQuality = effSel.value as EffectsQuality;
      markCustom();
    });

    const scaleSel = container.querySelector('#selRenderScale') as HTMLSelectElement;
    scaleSel.addEventListener('change', () => {
      g.renderScale = parseFloat(scaleSel.value) as RenderScale;
      markCustom();
    });

    const viewSel = container.querySelector('#selViewDist') as HTMLSelectElement;
    viewSel.addEventListener('change', () => {
      g.viewDistance = viewSel.value as ViewDistance;
      markCustom();
    });

    const texSel = container.querySelector('#selTextureQ') as HTMLSelectElement;
    texSel.addEventListener('change', () => {
      g.textureQuality = texSel.value as TextureQuality;
      markCustom();
    });

    const hints=container.querySelector('#inpCompanionHints') as HTMLInputElement;
    hints.addEventListener('change',()=>{this.draftSettings.companionHints=hints.checked;});
    const reduced=container.querySelector('#inpReducedMotion') as HTMLInputElement;
    reduced.addEventListener('change',()=>{this.draftSettings.reducedMotion=reduced.checked;});
    const mute = container.querySelector('#inpSoundMute') as HTMLInputElement;
    mute.addEventListener('change', () => {
      this.draftSettings.soundMuted = mute.checked;
    });

    const fps = container.querySelector('#inpShowFps') as HTMLInputElement;
    fps.addEventListener('change', () => {
      this.draftSettings.showFpsCounter = fps.checked;
    });

    const fsBtn = container.querySelector('#btnToggleFullscreen');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          void document.documentElement.requestFullscreen().catch(() => {});
        } else {
          void document.exitFullscreen().catch(() => {});
        }
      });
    }
  }
}

