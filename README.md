# The Three Ancient Seals: Echoes of the Forgotten Dungeon

A playable third-person 3D fantasy action RPG built with Three.js and TypeScript where differential calculus models drive core dungeon mechanisms, combat telegraphs, harmonic traps, and ancient boss wards—experienced directly through spatial motion, timing, and mechanical stabilization rather than equation entry or multiple-choice quizzes.

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Modern Chromium-based, Firefox, or Safari browser with WebGL support (Chrome is also used for headless E2E verification)

### Install & Run
```bash
npm install
npm run dev
```
Open the URL printed by Vite (default `http://127.0.0.1:5173/`).

### Production Build & Standalone `file://` Launch
```bash
npm run build
npm run preview
```
`npm run build` runs:
1. `tsc --noEmit` (strict TypeScript typecheck)
2. `vite build` -> outputs ES module bundle in `dist/`
3. `node scripts/build-standalone.mjs` -> bundles an offline `file://`-compatible IIFE build into `standalone/game.iife.js` + `standalone/game.iife.css` (and copies both into `dist/standalone/`) with `Cinzel.ttf` base64-inlined so opening root `index.html` directly via `file://` in a browser boots the full 3D game without CORS module errors.

### Automated Verification Commands
```bash
npm run typecheck         # Strict TypeScript check (tsc --noEmit)
npm test                  # Vitest mathematical, persistence, combat, and input regression suite (21 tests)
node tests/e2e_verify.mjs # Headless Chrome E2E suite (controls, saves, 1D/2D puzzles, touch, endings, file:// launch)
```

---

## Differential Calculus Mechanics

All calculus mechanics evaluate continuous analytical functions in `src/math/calculusModels.ts`:

- **1D Energy Doors & Stabilization Pylons (`EnergyStabilizerModel`)**:
  - Potential energy $E(x) = k(x - a)^2 + E_{\min}$ with first derivative $E'(x) = 2k(x - a)$ and curvature $E''(x) = 2k > 0$.
  - Players steer the bronze mechanism using movement keys or drag controls. Near the equilibrium valley ($|E'(x)| \le \varepsilon$ and $E''(x) > 0$), physical dial tremor subsides and resonance settles. Holding steady for `dwellTime` unlocks gates or shatters boss shields (leaving the minimum resets the dwell timer).
- **2D Dual-Crystal Chests & Containment Locks (`OptimizationChestModel`)**:
  - Potential surface $E(x,y) = k_x(x-a)^2 + k_y(y-b)^2 + E_{\min}$ with gradient $\nabla E(x,y) = (2k_x(x-a),\, 2k_y(y-b))$ and Hessian test ($\partial_{xx} E > 0, \partial_{yy} E > 0$).
  - Directional pull cues guide $(x, y)$ toward the valley minimum until $\|\nabla E(x,y)\| \le \varepsilon$ is held continuously for `dwellTime`.
- **Harmonic Blade Traps (`HarmonicTrapModel`)**:
  - Sweeping scythe carriages follow $p(t) = p_0 + A \sin(\omega t + \phi)$ with velocity $v(t) = A\omega\cos(\omega t + \phi)$ and acceleration $a(t) = -A\omega^2\sin(\omega t + \phi)$. Collision checks perform continuous swept intervals across simulation sub-steps so fast crossings cannot tunnel.
- **Enemy Steering (`enemyController.ts`)**:
  - Guardians and bosses accelerate via first-order velocity tracking $\vec{a} = \text{clamp}\!\left(\frac{\vec{v}_{\text{target}} - \vec{v}}{\tau},\, a_{\max}\right)$, preventing instant teleporting velocity snaps during telegraphed lunges and pivots.

---

## Controls

All keyboard gameplay actions and primary attack support full rebinding with conflict detection (`Replace` / `Swap` / `Cancel`), dual bindings (`Primary` + `Secondary`), required-action validation, and `Escape` pause/back reservation in **Settings → Controls**:

| Action | Default Primary Binding | Notes |
| --- | --- | --- |
| Move Forward / Left / Backward / Right | `W` / `A` / `S` / `D` | Also drives 1D/2D mechanisms while open |
| Primary Attack | `Left Mouse Button` (`Mouse0`) | Fully rebindable (including `Right Mouse Button` / `Mouse2`) |
| Dodge / Roll | `Space` | Invulnerability window + stamina/cooldown paced |
| Sprint | `Left Shift` | Hold or Toggle configurable in Settings → Desktop |
| Interact / Stabilize | `E` | Reads tablets, opens doors/chests/pylons, advances dialogue |
| Use Health Potion | `R` | Restores HP when damaged |
| Inventory / Minimap | `I` / `M` | Opens Satchel modal / toggles circular minimap |
| Pause / Back | `Escape` | Reserved reliable Pause/Back control |
| Controls Overlay Toggle | HUD `Controls` button | Optional live binding strip on desktop HUD |

Mobile & touch viewports expose a simultaneous multi-touch virtual joystick, right-side camera drag zone, Attack/Dodge/Interact/Potion cluster, and Satchel/Pause utilities.

---

## Project Architecture

- `src/config/gameConfig.ts` — Graphics presets (`low`, `medium`, `high`), view/shadow distances, player & combat parameters, enemy archetypes, and save/settings schemas (`tas_settings_v1`, `tas_save_v1`).
- `src/math/calculusModels.ts` & `src/math/geometry.ts` — Pure calculus models, XZ circle-vs-AABB resolution, sightline/attack obstruction checks, swept trap intersection, and raycasting.
- `src/world/` — Dungeon layout (`levelData.ts`), procedural canvas materials (`proceduralAssets.ts`), articulated rigs (`characterArt.ts`), vaulted rooms & props (`environmentArt.ts`), geometry batching (`batchArt.ts`), and 3D scene construction (`worldBuilder.ts`).
- `src/gameplay/` — Real-time fixed-timestep engine (`gameEngine.ts`), windup/active/recovery combat (`combatSystem.ts`), enemy steering (`enemyController.ts`), and Axiom/student companions (`companionController.ts`).
- `src/input/` — Multi-context input router (`gameplay`, `menu`, `mechanism`, `rebinding`) in `inputManager.ts`, action metadata in `actions.ts`, and touch controls in `touchControls.ts`.
- `src/ui/` — HUD, minimap, title composition, pause menu (`uiManager.ts`), settings & rebind modals (`settingsUI.ts`), and 1D/2D mechanism overlay (`mechanismUI.ts`).
- `src/storage/persistence.ts` — Versioned `localStorage` persistence with corrupted-data sanitization and in-memory session fallback when browser storage is restricted.
- `src/audio/soundEngine.ts` — Web Audio API procedural SFX and continuous mechanism resonance synthesis.

---

## Asset & Library Credits

- **Three.js (`three` v0.187.0)** — 3D WebGL scene graph, geometry, lighting, and rendering engine. Licensed under the **MIT License**.
- **Cinzel Display Typeface (`public/fonts/Cinzel.ttf`)** — Copyright 2020 The Cinzel Project Authors (`https://github.com/NDISCOVER/Cinzel`). Licensed under the **SIL Open Font License, Version 1.1** (`public/fonts/Cinzel-LICENSE.txt`).
- **3D Models, Procedural Stone/Wood/Metal Textures, UI Icons/Styling & Web Audio Soundscapes** — Authored procedurally in-project via TypeScript, Three.js geometry primitives/extrusion, HTML5 Canvas textures, SVG UI accents, and Web Audio oscillators.

