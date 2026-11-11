/**
 * Action definitions, default bindings, validation helpers, and physical-key friendly labels.
 */

export type GameAction =
  | 'moveForward'
  | 'moveBackward'
  | 'moveLeft'
  | 'moveRight'
  | 'attack'
  | 'sprint'
  | 'dodge'
  | 'interact'
  | 'usePotion'
  | 'inventory'
  | 'map'
  | 'pause';

export type BindingCode = string; // KeyboardEvent.code (e.g. 'KeyW', 'ShiftLeft') or 'Mouse0' | 'Mouse1' | 'Mouse2'

export interface ActionBinding {
  primary: BindingCode | null;
  secondary: BindingCode | null;
}

export type ControlBindings = Record<GameAction, ActionBinding>;

export type InputContext = 'menu' | 'gameplay' | 'mechanism' | 'rebinding';

export interface ActionMetadata {
  action: GameAction;
  label: string;
  description: string;
  required: boolean;
  isSinglePress: boolean;
  primaryLockedEscape?: boolean;
}

export const ACTION_METADATA: readonly ActionMetadata[] = [
  { action: 'moveForward', label: 'Move Forward', description: 'Move forward / adjust Y+ in mechanisms', required: true, isSinglePress: false },
  { action: 'moveBackward', label: 'Move Backward', description: 'Move backward / adjust Y- in mechanisms', required: true, isSinglePress: false },
  { action: 'moveLeft', label: 'Move Left', description: 'Strafe left / adjust X- in mechanisms', required: true, isSinglePress: false },
  { action: 'moveRight', label: 'Move Right', description: 'Strafe right / adjust X+ in mechanisms', required: true, isSinglePress: false },
  { action: 'attack', label: 'Primary Attack', description: 'Swing your sword', required: true, isSinglePress: false },
  { action: 'sprint', label: 'Sprint', description: 'Run faster while exploring or dodging traps', required: true, isSinglePress: false },
  { action: 'dodge', label: 'Dodge / Roll', description: 'Evade with brief invulnerability', required: true, isSinglePress: true },
  { action: 'interact', label: 'Interact', description: 'Inspect tablets, open chests, align ancient mechanisms', required: true, isSinglePress: true },
  { action: 'usePotion', label: 'Use Health Potion', description: 'Drink a potion to restore HP', required: true, isSinglePress: true },
  { action: 'inventory', label: 'Inventory', description: 'Open satchel, seals, and field notes', required: true, isSinglePress: true },
  { action: 'map', label: 'Map', description: 'Toggle minimap / dungeon overview', required: true, isSinglePress: true },
  { action: 'pause', label: 'Pause / Back', description: 'Pause game or close screens (Escape stays active)', required: true, isSinglePress: true, primaryLockedEscape: true },
] as const;

export const DEFAULT_CONTROL_BINDINGS: ControlBindings = {
  moveForward: { primary: 'KeyW', secondary: null },
  moveBackward: { primary: 'KeyS', secondary: null },
  moveLeft: { primary: 'KeyA', secondary: null },
  moveRight: { primary: 'KeyD', secondary: null },
  attack: { primary: 'Mouse0', secondary: null },
  sprint: { primary: 'ShiftLeft', secondary: null },
  dodge: { primary: 'Space', secondary: null },
  interact: { primary: 'KeyE', secondary: null },
  usePotion: { primary: 'KeyR', secondary: null },
  inventory: { primary: 'KeyI', secondary: null },
  map: { primary: 'KeyM', secondary: null },
  pause: { primary: 'Escape', secondary: null },
};

export function cloneBindings(bindings: ControlBindings): ControlBindings {
  const out = {} as ControlBindings;
  for (const meta of ACTION_METADATA) {
    const src = bindings[meta.action] ?? DEFAULT_CONTROL_BINDINGS[meta.action];
    out[meta.action] = {
      primary: meta.primaryLockedEscape ? 'Escape' : src.primary,
      secondary: src.secondary,
    };
  }
  return out;
}

const DISALLOWED_KEYBOARD_CODES = new Set([
  'Escape',
  'MetaLeft',
  'MetaRight',
  'ContextMenu',
  'PrintScreen',
  'ScrollLock',
  'Pause',
  'CapsLock',
  'NumLock',
  'F5',
  'F11',
  'F12',
]);

export function isSupportedBindingCode(code: string): boolean {
  if (!code || typeof code !== 'string') return false;
  if (code === 'Mouse0' || code === 'Mouse1' || code === 'Mouse2') return true;
  if (DISALLOWED_KEYBOARD_CODES.has(code)) return false;
  // Standard physical KeyboardEvent.code values
  return /^(Key[A-Z]|Digit[0-9]|Numpad([0-9]|Add|Subtract|Multiply|Divide|Decimal|Enter)|Arrow(Up|Down|Left|Right)|Space|Shift(Left|Right)|Control(Left|Right)|Alt(Left|Right)|Tab|Enter|Backspace|Minus|Equal|BracketLeft|BracketRight|Backslash|Semicolon|Quote|Backquote|Comma|Period|Slash|F[1-9]|F10)$/.test(
    code
  );
}

export function mouseButtonToCode(button: number): BindingCode | null {
  if (button === 0) return 'Mouse0';
  if (button === 1) return 'Mouse1';
  if (button === 2) return 'Mouse2';
  return null;
}

const STATIC_FRIENDLY_NAMES: Record<string, string> = {
  Mouse0: 'Left Mouse Button',
  Mouse1: 'Middle Mouse Button',
  Mouse2: 'Right Mouse Button',
  Space: 'Space',
  ShiftLeft: 'Left Shift',
  ShiftRight: 'Right Shift',
  ControlLeft: 'Left Ctrl',
  ControlRight: 'Right Ctrl',
  AltLeft: 'Left Alt',
  AltRight: 'Right Alt',
  ArrowUp: 'Arrow Up',
  ArrowDown: 'Arrow Down',
  ArrowLeft: 'Arrow Left',
  ArrowRight: 'Arrow Right',
  Escape: 'Escape',
  Tab: 'Tab',
  Enter: 'Enter',
  Backspace: 'Backspace',
  Minus: '-',
  Equal: '=',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Semicolon: ';',
  Quote: "'",
  Backquote: '`',
  Comma: ',',
  Period: '.',
  Slash: '/',
  NumpadEnter: 'Numpad Enter',
  NumpadAdd: 'Numpad +',
  NumpadSubtract: 'Numpad -',
  NumpadMultiply: 'Numpad *',
  NumpadDivide: 'Numpad /',
  NumpadDecimal: 'Numpad .',
};

let cachedLayoutMap: Map<string, string> | null = null;

export async function refreshKeyboardLayoutMap(): Promise<void> {
  try {
    const kb = (navigator as Navigator & { keyboard?: { getLayoutMap?: () => Promise<Map<string, string>> } }).keyboard;
    if (kb && typeof kb.getLayoutMap === 'function') {
      cachedLayoutMap = await kb.getLayoutMap();
    }
  } catch {
    cachedLayoutMap = null;
  }
}

export function getFriendlyBindingLabel(code: BindingCode | null): string {
  if (!code) return 'Unbound';
  if (STATIC_FRIENDLY_NAMES[code]) return STATIC_FRIENDLY_NAMES[code];

  if (cachedLayoutMap && cachedLayoutMap.has(code)) {
    const mapped = cachedLayoutMap.get(code);
    if (mapped && mapped.trim().length > 0) {
      return mapped.toUpperCase();
    }
  }

  if (code.startsWith('Key')) {
    return code.slice(3);
  }
  if (code.startsWith('Digit')) {
    return code.slice(5);
  }
  if (code.startsWith('Numpad')) {
    return `Numpad ${code.slice(6)}`;
  }
  return code;
}

export function findBindingConflict(
  bindings: ControlBindings,
  candidateCode: BindingCode,
  targetAction: GameAction,
  targetSlot: 'primary' | 'secondary'
): { action: GameAction; label: string; slot: 'primary' | 'secondary' } | null {
  for (const meta of ACTION_METADATA) {
    const binding = bindings[meta.action];
    if (binding.primary === candidateCode && !(meta.action === targetAction && targetSlot === 'primary')) {
      return { action: meta.action, label: meta.label, slot: 'primary' };
    }
    if (binding.secondary === candidateCode && !(meta.action === targetAction && targetSlot === 'secondary')) {
      return { action: meta.action, label: meta.label, slot: 'secondary' };
    }
  }
  return null;
}

export function validateControlBindings(bindings: ControlBindings): { valid: boolean; missingActions: ActionMetadata[] } {
  const missingActions: ActionMetadata[] = [];
  for (const meta of ACTION_METADATA) {
    if (!meta.required) continue;
    const b = bindings[meta.action];
    const hasPrimary = Boolean(b?.primary);
    const hasSecondary = Boolean(b?.secondary);
    if (!hasPrimary && !hasSecondary) {
      missingActions.push(meta);
    }
  }
  return { valid: missingActions.length === 0, missingActions };
}

