import {
  ACTION_METADATA,
  BindingCode,
  ControlBindings,
  GameAction,
  InputContext,
  cloneBindings,
  getFriendlyBindingLabel,
  isSupportedBindingCode,
  mouseButtonToCode,
  refreshKeyboardLayoutMap,
} from './actions';
import { InterfaceMode, SprintMode } from '../config/gameConfig';

export interface RebindCaptureCallbacks {
  onCaptured: (code: BindingCode) => void;
  onCancel: () => void;
}

export interface InputListeners {
  onContextLostPause?: () => void;
  onInputActivity?: (mode: 'desktop' | 'touch') => void;
}

export class InputManager {
  private bindings: ControlBindings;
  private codeToActions = new Map<BindingCode, GameAction[]>();
  private context: InputContext = 'menu';

  private activeSources = new Map<GameAction, Set<string>>();
  private pendingPressed = new Set<GameAction>();
  private pendingReleased = new Set<GameAction>();
  private tickPressed = new Set<GameAction>();
  private tickReleased = new Set<GameAction>();

  private sprintToggled = false;
  private sprintMode: SprintMode = 'hold';
  private holdToRepeatAttack = false;

  // Camera look deltas accumulated between simulation steps
  private lookDeltaX = 0;
  private lookDeltaY = 0;
  private dragLookActive = false;
  private dragLookButton: number | null = null;
  private lastDragX = 0;
  private lastDragY = 0;

  // Virtual analog vector from touch joystick (magnitude 0..1)
  private virtualMoveX = 0;
  private virtualMoveY = 0;

  // Pointer lock state & Escape deduplication
  private gameplayCanvas: HTMLElement | null = null;
  private wasPointerLocked = false;
  private lastPointerLockExitTime = -1000;
  private pointerLockSupported = false;
  private pointerLockDenied = false;

  // Rebinding capture state
  private captureArmed = false;
  private captureCallbacks: RebindCaptureCallbacks | null = null;
  private captureSuppressElement: HTMLElement | null = null;
  private ignoreEscapeUntil = 0;

  private listeners: InputListeners = {};
  private activeInterfaceMode: 'desktop' | 'touch' = 'desktop';
  private interfaceModeSetting: InterfaceMode = 'auto';

  private boundOnKeyDown: (e: KeyboardEvent) => void;
  private boundOnKeyUp: (e: KeyboardEvent) => void;
  private boundOnMouseDown: (e: MouseEvent) => void;
  private boundOnMouseUp: (e: MouseEvent) => void;
  private boundOnMouseMove: (e: MouseEvent) => void;
  private boundOnContextMenu: (e: MouseEvent) => void;
  private boundOnBlur: () => void;
  private boundOnVisibilityChange: () => void;
  private boundOnPointerLockChange: () => void;
  private boundOnPointerLockError: () => void;
  private boundOnPointerCancel: () => void;

  constructor(initialBindings: ControlBindings, listeners: InputListeners = {}) {
    this.bindings = cloneBindings(initialBindings);
    this.listeners = listeners;
    for (const meta of ACTION_METADATA) {
      this.activeSources.set(meta.action, new Set());
    }
    this.rebuildLookup();

    this.boundOnKeyDown = this.handleKeyDown.bind(this);
    this.boundOnKeyUp = this.handleKeyUp.bind(this);
    this.boundOnMouseDown = this.handleMouseDown.bind(this);
    this.boundOnMouseUp = this.handleMouseUp.bind(this);
    this.boundOnMouseMove = this.handleMouseMove.bind(this);
    this.boundOnContextMenu = this.handleContextMenu.bind(this);
    this.boundOnBlur = this.handleWindowBlur.bind(this);
    this.boundOnVisibilityChange = this.handleVisibilityChange.bind(this);
    this.boundOnPointerLockChange = this.handlePointerLockChange.bind(this);
    this.boundOnPointerLockError = this.handlePointerLockError.bind(this);
    this.boundOnPointerCancel = this.handlePointerCancel.bind(this);
  }

  public attach(gameplayCanvas: HTMLElement): void {
    this.gameplayCanvas = gameplayCanvas;
    this.pointerLockSupported =
      typeof gameplayCanvas.requestPointerLock === 'function' && 'pointerLockElement' in document;

    window.addEventListener('keydown', this.boundOnKeyDown, { capture: true });
    window.addEventListener('keyup', this.boundOnKeyUp, { capture: true });
    window.addEventListener('mousedown', this.boundOnMouseDown, { capture: true });
    window.addEventListener('mouseup', this.boundOnMouseUp, { capture: true });
    window.addEventListener('mousemove', this.boundOnMouseMove);
    window.addEventListener('contextmenu', this.boundOnContextMenu, { capture: true });
    window.addEventListener('blur', this.boundOnBlur);
    window.addEventListener('pointercancel', this.boundOnPointerCancel);
    document.addEventListener('visibilitychange', this.boundOnVisibilityChange);
    document.addEventListener('pointerlockchange', this.boundOnPointerLockChange);
    document.addEventListener('pointerlockerror', this.boundOnPointerLockError);

    void refreshKeyboardLayoutMap();
  }

  public detach(): void {
    window.removeEventListener('keydown', this.boundOnKeyDown, { capture: true });
    window.removeEventListener('keyup', this.boundOnKeyUp, { capture: true });
    window.removeEventListener('mousedown', this.boundOnMouseDown, { capture: true });
    window.removeEventListener('mouseup', this.boundOnMouseUp, { capture: true });
    window.removeEventListener('mousemove', this.boundOnMouseMove);
    window.removeEventListener('contextmenu', this.boundOnContextMenu, { capture: true });
    window.removeEventListener('blur', this.boundOnBlur);
    window.removeEventListener('pointercancel', this.boundOnPointerCancel);
    document.removeEventListener('visibilitychange', this.boundOnVisibilityChange);
    document.removeEventListener('pointerlockchange', this.boundOnPointerLockChange);
    document.removeEventListener('pointerlockerror', this.boundOnPointerLockError);
    this.gameplayCanvas = null;
  }

  public applyBindings(newBindings: ControlBindings): void {
    this.bindings = cloneBindings(newBindings);
    this.rebuildLookup();
    this.clearAllInputs();
  }

  public getBindings(): ControlBindings {
    return cloneBindings(this.bindings);
  }

  public configureGameplayOptions(opts: {
    sprintMode: SprintMode;
    holdToRepeatAttack: boolean;
    interfaceMode: InterfaceMode;
  }): void {
    this.sprintMode = opts.sprintMode;
    this.holdToRepeatAttack = opts.holdToRepeatAttack;
    this.interfaceModeSetting = opts.interfaceMode;
    if (opts.interfaceMode === 'desktop') this.activeInterfaceMode = 'desktop';
    if (opts.interfaceMode === 'touch') this.activeInterfaceMode = 'touch';
    if (this.sprintMode === 'hold') this.sprintToggled = false;
  }

  public getActiveInterfaceMode(): 'desktop' | 'touch' {
    if (this.interfaceModeSetting === 'desktop') return 'desktop';
    if (this.interfaceModeSetting === 'touch') return 'touch';
    return this.activeInterfaceMode;
  }

  public reportTouchActivity(): void {
    if (this.interfaceModeSetting === 'auto' && this.activeInterfaceMode !== 'touch') {
      this.activeInterfaceMode = 'touch';
      this.listeners.onInputActivity?.('touch');
    }
  }

  public reportDesktopActivity(): void {
    if (this.interfaceModeSetting === 'auto' && this.activeInterfaceMode !== 'desktop') {
      this.activeInterfaceMode = 'desktop';
      this.listeners.onInputActivity?.('desktop');
    }
  }

  public getActionPrimaryLabel(action: GameAction): string {
    const b = this.bindings[action];
    const code = b?.primary ?? b?.secondary ?? null;
    return getFriendlyBindingLabel(code);
  }

  public getActionAllLabels(action: GameAction): string {
    const b = this.bindings[action];
    const labels: string[] = [];
    if (b?.primary) labels.push(getFriendlyBindingLabel(b.primary));
    if (b?.secondary) labels.push(getFriendlyBindingLabel(b.secondary));
    return labels.length > 0 ? labels.join(' / ') : 'Unbound';
  }

  public setContext(nextContext: InputContext): void {
    if (this.context === nextContext) return;
    this.context = nextContext;
    this.clearAllInputs();
    if (nextContext !== 'gameplay' && this.isPointerLocked()) {
      this.exitPointerLockSafely();
    }
  }

  public getContext(): InputContext {
    return this.context;
  }

  public isPointerLocked(): boolean {
    return Boolean(this.gameplayCanvas && document.pointerLockElement === this.gameplayCanvas);
  }

  public isPointerLockAvailable(): boolean {
    return this.pointerLockSupported && !this.pointerLockDenied;
  }

  public requestPointerLock(): void {
    if (!this.gameplayCanvas || !this.pointerLockSupported) return;
    if (this.context !== 'gameplay' || this.getActiveInterfaceMode() === 'touch') return;
    try {
      const maybePromise = this.gameplayCanvas.requestPointerLock() as unknown as Promise<void> | undefined;
      if (maybePromise && typeof maybePromise.catch === 'function') {
        maybePromise.catch(() => {
          this.pointerLockDenied = true;
        });
      }
    } catch {
      this.pointerLockDenied = true;
    }
  }

  public exitPointerLockSafely(): void {
    try {
      if (document.pointerLockElement) {
        this.wasPointerLocked = false; // Programmatic exit should not trigger pause loop
        document.exitPointerLock();
      }
    } catch {
      // Ignore browser exit errors
    }
  }

  public startRebindCapture(callbacks: RebindCaptureCallbacks, ignoreContainer?: HTMLElement | null): void {
    this.setContext('rebinding');
    this.captureCallbacks = callbacks;
    this.captureSuppressElement = ignoreContainer ?? null;
    this.captureArmed = false;

    // Microtask runs right after the opening click dispatch finishes, before any next user event
    queueMicrotask(() => {
      if (this.context === 'rebinding' && this.captureCallbacks) {
        this.captureArmed = true;
      }
    });
  }

  public stopRebindCapture(): void {
    this.captureArmed = false;
    this.captureCallbacks = null;
    this.captureSuppressElement = null;
  }

  public clearAllInputs(): void {
    for (const set of this.activeSources.values()) {
      set.clear();
    }
    this.pendingPressed.clear();
    this.pendingReleased.clear();
    this.tickPressed.clear();
    this.tickReleased.clear();
    this.sprintToggled = false;
    this.virtualMoveX = 0;
    this.virtualMoveY = 0;
    this.lookDeltaX = 0;
    this.lookDeltaY = 0;
    this.dragLookActive = false;
    this.dragLookButton = null;
  }

  /**
   * Moves accumulated pressed/released edges into the current simulation frame.
   */
  public beginSimulationFrame(): void {
    this.tickPressed.clear();
    this.tickReleased.clear();
    for (const act of this.pendingPressed) {
      this.tickPressed.add(act);
    }
    for (const act of this.pendingReleased) {
      this.tickReleased.add(act);
    }
    this.pendingPressed.clear();
    this.pendingReleased.clear();
  }

  public isPressed(action: GameAction): boolean {
    return this.tickPressed.has(action);
  }

  public isHeld(action: GameAction): boolean {
    return (this.activeSources.get(action)?.size ?? 0) > 0;
  }

  public isReleased(action: GameAction): boolean {
    return this.tickReleased.has(action);
  }

  public isSprintingActive(isMoving: boolean): boolean {
    if (this.sprintMode === 'hold') {
      return this.isHeld('sprint') && isMoving;
    }
    if (!isMoving) {
      this.sprintToggled = false;
      return false;
    }
    return this.sprintToggled;
  }

  public setVirtualAnalog(x: number, y: number): void {
    this.virtualMoveX = Math.max(-1, Math.min(1, x));
    this.virtualMoveY = Math.max(-1, Math.min(1, y));
  }

  public setVirtualAction(action: GameAction, active: boolean, sourceTag = 'touch'): void {
    if (active) {
      this.activateSource(action, sourceTag, false);
    } else {
      this.deactivateSource(action, sourceTag);
    }
  }

  public addTouchLookDelta(dx: number, dy: number): void {
    this.lookDeltaX += dx;
    this.lookDeltaY += dy;
  }

  public consumeLookDelta(): { dx: number; dy: number } {
    const out = { dx: this.lookDeltaX, dy: this.lookDeltaY };
    this.lookDeltaX = 0;
    this.lookDeltaY = 0;
    return out;
  }

  public getMovementAxes(): { x: number; z: number } {
    let x = this.virtualMoveX;
    let z = this.virtualMoveY; // +1 forward in virtual Y means -Z forward in 3D

    if (this.isHeld('moveRight')) x += 1;
    if (this.isHeld('moveLeft')) x -= 1;
    if (this.isHeld('moveForward')) z += 1;
    if (this.isHeld('moveBackward')) z -= 1;

    const len = Math.hypot(x, z);
    if (len > 1) {
      x /= len;
      z /= len;
    }
    return { x, z };
  }

  private rebuildLookup(): void {
    this.codeToActions.clear();
    for (const meta of ACTION_METADATA) {
      const b = this.bindings[meta.action];
      const codes = new Set<string>();
      if (meta.primaryLockedEscape) {
        codes.add('Escape');
      } else if (b.primary) {
        codes.add(b.primary);
      }
      if (b.secondary) {
        codes.add(b.secondary);
      }
      for (const code of codes) {
        const list = this.codeToActions.get(code) ?? [];
        list.push(meta.action);
        this.codeToActions.set(code, list);
      }
    }
  }

  private activateSource(action: GameAction, sourceId: string, isRepeat: boolean): void {
    const meta = ACTION_METADATA.find((m) => m.action === action);
    if (!meta) return;

    const sources = this.activeSources.get(action)!;
    const wasHeld = sources.size > 0;

    if (isRepeat) {
      if (meta.isSinglePress) return;
      if (action === 'attack' && !this.holdToRepeatAttack) return;
    }

    sources.add(sourceId);
    if (!wasHeld) {
      this.pendingPressed.add(action);
      if (action === 'sprint' && this.sprintMode === 'toggle') {
        this.sprintToggled = !this.sprintToggled;
      }
    }
  }

  private deactivateSource(action: GameAction, sourceId: string): void {
    const sources = this.activeSources.get(action);
    if (!sources) return;
    const hadSource = sources.delete(sourceId);
    if (hadSource && sources.size === 0) {
      this.pendingReleased.add(action);
    }
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if(e.repeat) return; // Held sources persist; repeats must never resurrect cleared inputs.
    this.reportDesktopActivity();

    if (this.context === 'rebinding') {
      if (e.code === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        this.ignoreEscapeUntil = performance.now() + 200;
        const cb = this.captureCallbacks;
        this.stopRebindCapture();
        cb?.onCancel();
        return;
      }
      if (!this.captureArmed && (e.code === 'Enter' || e.code === 'Space')) return;
      if (isSupportedBindingCode(e.code)) {
        e.preventDefault();
        e.stopPropagation();
        const cb = this.captureCallbacks;
        this.stopRebindCapture();
        cb?.onCaptured(e.code);
      }
      return;
    }

    const actions = this.codeToActions.get(e.code);
    if (!actions || actions.length === 0) return;

    if (e.code === 'Escape') {
      const now = performance.now();
      if (now < this.ignoreEscapeUntil || now - this.lastPointerLockExitTime < 180) {
        e.preventDefault();
        return;
      }
    }

    if (this.context === 'menu') {
      // Allow pause/back and dialogue interact in menu context without triggering gameplay combat
      if (actions.includes('pause') && !e.repeat) {
        e.preventDefault();
        this.activateSource('pause', `key:${e.code}`, false);
      }
      if (actions.includes('interact') && !e.repeat) {
        e.preventDefault();
        this.activateSource('interact', `key:${e.code}`, false);
      }
      return;
    }

    if (this.context === 'mechanism') {
      const allowedMechActions: GameAction[] = ['moveForward', 'moveBackward', 'moveLeft', 'moveRight', 'interact', 'pause'];
      const matched = actions.filter((a) => allowedMechActions.includes(a));
      if (matched.length > 0) {
        e.preventDefault();
        for (const act of matched) {
          this.activateSource(act, `key:${e.code}`, e.repeat);
        }
      }
      return;
    }

    // Gameplay context
    if (e.code === 'Space' || e.code.startsWith('Arrow') || e.code === 'Tab') {
      e.preventDefault();
    }
    for (const act of actions) {
      this.activateSource(act, `key:${e.code}`, e.repeat);
    }
  }

  private handleKeyUp(e: KeyboardEvent): void {
    const actions = this.codeToActions.get(e.code);
    if (!actions) return;
    for (const act of actions) {
      this.deactivateSource(act, `key:${e.code}`);
    }
  }

  private isInsideGameplaySurface(target: EventTarget | null): boolean {
    return Boolean(this.gameplayCanvas && target instanceof Node && (target === this.gameplayCanvas || this.gameplayCanvas.contains(target)));
  }

  private isNonAttackDragButton(button: number): boolean {
    const code = mouseButtonToCode(button);
    if (!code) return false;
    const actions = this.codeToActions.get(code);
    // Allow drag-to-look on Left Mouse if not bound to attack, else Right/Middle if not bound to attack
    return !actions || !actions.includes('attack');
  }

  private handleMouseDown(e: MouseEvent): void {
    this.reportDesktopActivity();

    if (this.context === 'rebinding') {
      if (!this.captureArmed) return;
      // Do not capture clicks on Cancel / Clear buttons
      if (this.captureSuppressElement && e.target instanceof Node && this.captureSuppressElement.contains(e.target)) {
        return;
      }
      const code = mouseButtonToCode(e.button);
      if (code && isSupportedBindingCode(code)) {
        e.preventDefault();
        e.stopPropagation();
        const cb = this.captureCallbacks;
        this.stopRebindCapture();
        cb?.onCaptured(code);
      }
      return;
    }

    // Never fire gameplay mouse bindings in menus or mechanisms
    if (this.context !== 'gameplay') return;
    if (!this.isInsideGameplaySurface(e.target)) return;

    const code = mouseButtonToCode(e.button);
    if (!code) return;

    if (e.button === 2) {
      e.preventDefault();
    }

    // Request pointer lock on deliberate click on canvas if not locked and button is left click (or any canvas click)
    if (!this.isPointerLocked() && e.button === 0 && this.isPointerLockAvailable()) {
      this.requestPointerLock();
    }

    // Activate any gameplay action bound to this mouse button
    const actions = this.codeToActions.get(code);
    if (actions) {
      for (const act of actions) {
        this.activateSource(act, `mouse:${code}`, false);
      }
    }

    // Fallback drag-to-look when pointer lock is not active
    if (!this.isPointerLocked() && this.isNonAttackDragButton(e.button)) {
      this.dragLookActive = true;
      this.dragLookButton = e.button;
      this.lastDragX = e.clientX;
      this.lastDragY = e.clientY;
    }
  }

  private handleMouseUp(e: MouseEvent): void {
    const code = mouseButtonToCode(e.button);
    if (code) {
      const actions = this.codeToActions.get(code);
      if (actions) {
        for (const act of actions) {
          this.deactivateSource(act, `mouse:${code}`);
        }
      }
    }
    if (this.dragLookActive && e.button === this.dragLookButton) {
      this.dragLookActive = false;
      this.dragLookButton = null;
    }
  }

  private handleMouseMove(e: MouseEvent): void {
    if (this.context !== 'gameplay') return;
    if (this.isPointerLocked()) {
      this.lookDeltaX += e.movementX;
      this.lookDeltaY += e.movementY;
    } else if (this.dragLookActive) {
      const dx = e.clientX - this.lastDragX;
      const dy = e.clientY - this.lastDragY;
      this.lastDragX = e.clientX;
      this.lastDragY = e.clientY;
      this.lookDeltaX += dx;
      this.lookDeltaY += dy;
    }
  }

  private handleContextMenu(e: MouseEvent): void {
    // Suppress right-click context menu ONLY inside active gameplay surface or during mouse rebinding capture
    if (this.context === 'rebinding') {
      e.preventDefault();
      return;
    }
    if ((this.context === 'gameplay' || this.context === 'mechanism') && this.isInsideGameplaySurface(e.target)) {
      e.preventDefault();
    }
  }

  private handleWindowBlur(): void {
    this.clearAllInputs();
    if (this.context === 'gameplay' || this.context === 'mechanism') {
      this.listeners.onContextLostPause?.();
    }
  }

  private handleVisibilityChange(): void {
    if (document.hidden) {
      this.clearAllInputs();
      if (this.context === 'gameplay' || this.context === 'mechanism') {
        this.listeners.onContextLostPause?.();
      }
    }
  }

  private handlePointerCancel(): void {
    this.clearAllInputs();
  }

  private handlePointerLockChange(): void {
    const nowLocked = this.isPointerLocked();
    if (nowLocked) {
      this.wasPointerLocked = true;
      this.pointerLockDenied = false;
      return;
    }

    if (this.wasPointerLocked) {
      this.wasPointerLocked = false;
      this.lastPointerLockExitTime = performance.now();
      this.clearAllInputs();
      if (this.context === 'gameplay' || this.context === 'mechanism') {
        this.listeners.onContextLostPause?.();
      }
    }
  }

  private handlePointerLockError(): void {
    this.pointerLockDenied = true;
  }
}
