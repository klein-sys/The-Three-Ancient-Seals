# THE THREE ANCIENT SEALS: ECHOES OF THE FORGOTTEN DUNGEON
## Visual overhaul and immersive gameplay development prompt

Act as an experienced browser-game developer, technical artist, and game designer. Improve the supplied game into a polished, playable third-person fantasy adventure. Inspect the existing project and the three supplied screenshots before making changes. Build on its working architecture, progression, controls, and saves; do not replace working systems without a clear technical reason.

The priority is a substantial improvement to the actual 3D graphics, art direction, animation, camera, combat feedback, and interface. Changes must be obvious during ordinary gameplay, not only on the title screen.

Differential calculus must drive real gameplay, but players should experience it through motion, acceleration, timing, and stabilization. The game should feel like a fantasy adventure rather than a mathematics presentation. Removing mathematical labels must never mean removing the underlying mechanics.

### 1. Use the supplied screenshots as the baseline

Address these specific weaknesses:

- Characters and enemies look assembled from basic spheres and capsules, with limited visual identity.
- Large, repeated wall and floor surfaces make the dungeon feel empty and artificial.
- Lighting provides too little separation between the player, enemies, architecture, and background.
- The black overhead void and abrupt architectural edges weaken the sense of an enclosed dungeon.
- Floating diamonds, wireframe effects, and oversized flat doors resemble development placeholders.
- Menu screens use large, uniform panels and stacked buttons with limited atmosphere or hierarchy.
- Persistent control text and calculus-related labels compete with the world for attention.

Use these observations to guide implementation. Do not reproduce the screenshots' visual weaknesses. Do not treat a palette change, heavier bloom, more particles, or a redesigned menu as a complete graphics overhaul.

### 2. Art direction: ancient, atmospheric, readable

Create a coherent stylized medieval dark-fantasy world: weathered stone, aged bronze, muted gold, deep blue fabric, warm torchlight, and restrained cyan magic. Favor strong silhouettes and intentional materials over unrealistic promises of photorealism.

**Architecture and environments**

- Build believable rooms with ceilings or intentional openings, arches, doorframes, pillars, stairs, wall recesses, and changes in elevation.
- Give major spaces distinctive silhouettes and landmarks so players can orient themselves without constantly watching the minimap.
- Break up repetition using damaged masonry, trim, material variation, rubble, roots, banners, and props placed with a purpose.
- Make doors feel constructed: carved frames, visible depth, inset seals, moving components, and readable opening animations.
- Use appropriate surface detail and roughness. Stone should feel matte and worn; metal should catch light selectively; cloth should not resemble polished plastic.
- Keep collision aligned with visible architecture and leave movement routes clear. Decoration must not conceal essential hazards.

**Lighting and atmosphere**

- Establish ambient fill, directional or architectural light, and selected local light sources. Avoid making every visible torch a costly shadow-casting light.
- Use warm and cool lighting to guide attention toward destinations, interactable objects, and threats.
- Add contact shadows, convincing character grounding, restrained fog, and subtle bloom where supported by the performance budget.
- Preserve detail in dark areas. Darkness should create atmosphere without hiding the floor, enemy silhouettes, or attack warnings.
- Use exposure and color grading consistently across rooms. Do not obscure weak geometry with excessive darkness, blur, or glow.

**Characters and animation**

- Replace visible placeholder bodies with coherent stylized characters: readable armor, clothing, weapons, proportions, and recognizable silhouettes.
- Give the hero a clear head, torso, hands, legs, boots, and equipment. Avoid a collection of disconnected shiny primitives.
- Provide convincing idle, movement, attack, dodge, hurt, and death animations, with smooth transitions and minimal foot sliding.
- Make enemies visually distinct through shape, posture, animation, and attack behavior. Bosses need distinctive silhouettes and encounter presentation.
- If licensed models are unavailable, create intentional low-poly geometry. Primitive colliders may remain invisible; the rendered character should look designed.

Use original or appropriately licensed assets and document their sources and licenses. Keep essential runtime assets local where feasible, and handle loading failures clearly.

### 3. Calculus should be felt through play

Remove visible mathematical branding from normal gameplay. This includes the current “Powered by Differential Calculus” subtitle, “Rates / Motion / Extremum” HUD badges, formula labels, derivative symbols, and compulsory mathematics explanations.

Use natural fantasy language: “Align the crystals,” “Steady the current,” “Watch its rhythm,” and “The barrier is weakening.” Decorative fantasy runes are appropriate; equations and mathematical notation should not become ambient decoration.

Teach through safe observation, clear cause and effect, and progressive challenge. The first encounter with each mechanism should let players experiment without severe punishment. Later encounters can combine familiar behaviors under pressure.

**Changing motion and acceleration**

- Traps visibly speed up, slow down, pause near turning points, and reverse direction according to their real motion model.
- Let players watch a complete cycle before entering a dangerous crossing.
- Use world-space cues such as moving shadows, light trails, mechanical sounds, and visible endpoints to communicate motion.
- Enemy lunges must have readable anticipation and acceleration, followed by a recovery opportunity.
- Players should succeed by recognizing how motion changes, not by reading a speed number or guessing an invisible timer.

**Stabilization and optimization**

- Rotating a seal or moving a crystal must visibly alter a magical system.
- Poor alignment creates unstable motion, irregular light, and unsettled sound. Better alignment produces calmer motion, coherent light, and a steadier tone.
- Feedback should help players discover a useful adjustment direction and refine their position. Do not require blind searching with only a success/failure message.
- Use a short continuous hold within the stable range to open a door or weaken a shield. Show this through an in-world ring, settling mechanism, or similar readable effect.
- Feedback must derive from the actual mathematical state. Do not display success effects while unrelated timers decide the result.
- Provide equivalent visual feedback for essential audio cues, and avoid relying on color alone.

Do not add mandatory quizzes, equation entry, classroom pop-ups, or numerical answer selection. Keep exact formulas and mathematical explanations in developer documentation. Any optional player-facing “Behind the Magic” guide should be outside the critical path and use plain language by default.

### 4. Implement genuine mathematical models

Keep parameters centralized and tunable. Use the same simulation state for rendering, collisions, puzzle conditions, and feedback.

**Single-control stabilization**

For x in [0, 1], implement:

```text
E(x)   = k(x - a)^2 + E_min
E'(x)  = 2k(x - a)
E''(x) = 2k
```

Require k > 0 and a within the allowed range. Stabilize only when abs(E'(x)) stays below a configured tolerance for a continuous dwell time; reset progress when the condition fails. Drive visible instability from a bounded, normalized measure of the actual derivative magnitude. The positive curvature establishes that the stationary point is a minimum.

**Moving traps**

```text
p(t) = p0 + A sin(omega t + phi)
v(t) = A omega cos(omega t + phi)
a(t) = -A omega^2 sin(omega t + phi)
```

Use calculated position for the trap and its collision. Design crossing windows around the actual motion. Prevent collision tunneling at high speeds through appropriate swept collision or substeps. Pause must freeze simulation time.

**Two-control optimization**

```text
E(x, y) = kx(x - a)^2 + ky(y - b)^2 + E_min
gradient E = (2kx(x - a), 2ky(y - b))
```

Require positive coefficients and reachable targets. Unlock when the gradient magnitude stays below tolerance for the dwell time. Provide directional feedback for each crystal and award the reward only once.

**Enemy acceleration**

```text
a = (v_target - v) / tau
```

Require tau > 0, cap acceleration, and integrate with stable simulation steps. Separate movement acceleration from attack telegraphing so enemies remain readable and fair.

Boss shields may reuse these models with encounter-specific parameters. Stable alignment opens a clearly signaled vulnerability window; a stationary point must not qualify as a minimum unless the model or curvature establishes it.

### 5. Camera, combat, and interaction quality

- Use a responsive third-person camera with collision avoidance, smooth following, useful framing, adjustable sensitivity, and a 60–90 degree field-of-view setting.
- Keep the hero and relevant threats visible. Camera smoothing must not create substantial control lag.
- Support moving, looking, attacking, and dodging together. Normalize diagonal movement.
- Give sword attacks distinct windup, active, and recovery phases. Match visible weapon motion to active hit frames.
- Check reach and obstruction. Each target may take damage at most once per swing unless a deliberately designed move specifies otherwise.
- Add restrained impact effects, spatial sound, damage reactions, and optional light camera shake. Offer reduced-motion settings for nonessential shake and effects.
- Telegraph enemy attacks through animation, sound, and ground cues. Do not use arbitrary instant damage to create difficulty.
- Implement patrol, detection, pursuit, attack, recovery, hurt, and death states. Prevent overlapping attacks from creating unavoidable damage loops.
- Keep damage, reach, cooldowns, dodge rules, healing, and enemy statistics in shared configuration. The player has 100 maximum HP.
- Use short interaction prompts near relevant objects. Opening a mechanism enters a dedicated manipulation mode that supports mouse, keyboard, and touch.

### 6. Redesign the interface as part of the world

**Title screen**

Replace the generic centered stack of equal-sized buttons with an intentional title composition. Show a polished dungeon scene or hero vignette with subtle motion. Use a distinctive fantasy display typeface for the title and a highly readable UI typeface for body text.

Give Continue or New Game clear priority, with Settings, How to Play, and Credits as secondary actions. Use restrained bronze or gold ornament, consistent spacing, visible keyboard focus, and responsive hover/pressed states. Avoid making every control glow.

Move the browser-local save explanation into a small, readable save note or help area instead of making it a dominant element. Disable Continue without a valid save. Confirm before overwriting existing progress.

**Gameplay HUD**

- Show health, potions, keys, three Seal indicators, and a concise current objective with clear hierarchy.
- Keep the minimap compact and stylistically consistent. Distinguish destinations, threats, and the player using shapes as well as color.
- Hide FPS and debugging information by default; expose them through an explicit diagnostic option.
- Replace the permanent full-width control list with contextual prompts and an optional controls overlay.
- Show mouse-capture guidance briefly when needed instead of permanently displaying implementation status.
- Avoid oversized floating markers and wireframe combat effects. Use restrained in-world highlighting and optional navigation assistance.

**Pause and settings**

Use consistent panel styling, purposeful grouping, readable text, and generous spacing. Keep Resume prominent. Include Settings, Inventory, Restart from Checkpoint, and Return to Main Menu. Put detailed control references in a secondary area rather than letting them dominate the pause screen.

Support keyboard, mouse, and touch throughout. UI clicks must never trigger gameplay actions. Pause freezes world simulation, trap motion, and gameplay timers.

### 7. Preserve customizable controls and browser behavior

Use named gameplay actions rather than scattered physical-key checks. Preserve valid existing saved bindings. For new profiles, use the screenshot's current convention: WASD movement, Left Mouse Button attack, Space dodge, Left Shift sprint, E interact, R potion, I inventory, M map, and Escape pause/back. Right Mouse Button must remain available as an attack binding.

Provide Settings → Controls → Keyboard & Mouse from both title and pause menus:

- Primary and optional secondary bindings; per-action reset; Apply, Cancel, and Reset All.
- Bind keyboard gameplay actions and attack to supported keys or left/middle/right mouse buttons. Keep Escape as a reliable reserved pause/back key with an optional additional pause binding.
- Capture the next valid input without triggering gameplay; ignore the input that opened capture. Escape cancels. Provide visible Cancel and Clear controls.
- Show conflicts within the same input context and offer Replace or Cancel. Validate required actions remain bound before applying.
- Edit a draft configuration, activate only on Apply, and confirm Reset All.
- Use physical key codes with friendly labels. Update every tutorial, prompt, tooltip, and control summary from active bindings.
- Save versioned settings separately from progress; recover safely from malformed or unavailable storage.

Track pressed, held, and released states. Ignore auto-repeat for single-press actions. Releasing one binding must not cancel an action still held through another binding. Clear inputs on pause, focus loss, tab hiding, pointer cancellation, rebinding, and context changes; require a fresh press after resuming.

Request pointer lock through a user gesture. Losing pointer lock during active play must pause and restore the cursor. Prevent duplicate Escape transitions and provide drag-to-look fallback. Limit context-menu suppression to the relevant gameplay or rebinding surface.

### 8. Mobile and accessibility

Use the same gameplay rules and simulation on desktop and mobile. Provide a left movement joystick, a separate camera-swipe area, and accessible Attack, Dodge, Sprint, Interact, Potion, Inventory, Map, and Pause controls.

Track touches independently so movement, camera control, and attacking work simultaneously. Action buttons must not rotate the camera. Recover cleanly from interrupted touches and app switching.

Respect safe-area insets and use large, separated touch targets. Provide adjustable HUD scale, button opacity, joystick size/sensitivity, attack-button size, and camera sensitivity/inversion. Support Auto, Keyboard & Mouse, and Touch interface modes for hybrid devices.

Prioritize landscape; give a concise rotation suggestion in portrait while allowing continued play when usable. Preserve readable text, captions, visible focus states, and non-color cues.

### 9. Preserve the complete adventure

Keep the objective: collect three Ancient Seals, defeat a separate final boss, and escape.

1. **The Forgotten Ruins:** weathered stone halls and introductory stabilization doors; defeat the Stone Sentinel for the First Seal.
2. **The Chamber of Whispers:** an atmospheric underground library with changing-speed traps; rescue Axiom before completing the region and defeat the Arcane Scholar for the Second Seal.
3. **The Abyssal Sanctum:** unstable magical machinery and interacting crystal mechanisms; defeat the Abyssal Warden for the Third Seal.

Use “The Abyssal Sanctum” and “Abyssal Warden” as immersive player-facing replacements for “The Abyss of Equations” and “Keeper of Equations.” Preserve existing internal IDs or migrate saves safely.

Give each region distinct architecture, lighting, ambience, encounters, and a memorable landmark. Axiom becomes a floating companion who gives optional situational hints in natural language.

All three Seals open the final gateway and awaken the Eternal Archivist. Its phases combine changing-speed attacks, shield stabilization, and opportunities for direct combat. Convey phase transitions through animation, lighting, sound, and arena behavior.

After victory, reveal the trapped student. Helping requires completing a stabilization mechanism and leads to **Freedom Shared**, with the hero and student overlooking mountains at sunset. Leaving with the treasure leads to **The Price of Greed**, with the hero alone against a dark red sunset. Axiom holds the escape mechanism and remains behind in both endings.

Persist choices. Skipping cinematics must still apply required progression changes. Do not replace completed game systems with a visual showcase or stop after polishing one room.

### 10. Saving, performance, and honest delivery

Save checkpoints, player state, inventory, rewards, Seals, defeated bosses, Axiom's rescue, student choice, and ending state. Restore a coherent world. Prevent duplicate rewards, unavailable potion use, invalid progression, and crashes from corrupted storage. Explain that browser-local saves do not synchronize across devices.

Use the existing browser-compatible stack unless a change is necessary. Provide meaningful Low, Medium, High, and Custom graphics presets with real effects on rendering. Include shadow/effects quality, render scale, and appropriate view-distance settings. Expose texture quality only when real variants exist. Preserve essential gameplay cues at every quality level.

Target approximately 60 FPS on capable desktops and 30 FPS on tested mid-range phones. These are targets, not claims of measured performance. Bound simulation catch-up after tab suspension, resize correctly, provide loading feedback, and avoid unnecessary lights, draw calls, allocations, or oversized assets.

Work in verifiable passes:

1. Audit the supplied project and identify working systems, visual weaknesses, and performance constraints.
2. Finish one representative room, hero, enemy, mechanism, and HUD to establish the visual standard in playable form.
3. Apply that standard across the full adventure while preserving progression.
4. Verify controls, collision, saves, mobile behavior, performance, and both endings; fix regressions.

Before declaring completion, demonstrate:

- Visible before/after improvement from comparable in-game viewpoints, plus title and pause screens.
- A coherent hero and enemy, readable animation, grounded lighting, detailed architecture, and finished interaction effects.
- A trap whose changing speed is observable and predictable without mathematical labels.
- A mechanism whose actual derivative or gradient changes its visible and audible behavior, with consistent success conditions across frame rates.
- Attack rebinding, conflict handling, cancellation, resets, secondary bindings, updated hints, and persistence after reload.
- No stuck inputs after pause, focus loss, or pointer-lock release; usable fallback camera controls.
- Concurrent mobile movement, looking, and attacking, plus keyboard/mouse/touch mechanism operation.
- Correct hit windows, cooldowns, obstructions, one-time rewards, checkpoint restoration, and reachable endings.
- Graphics and sensitivity settings that genuinely change behavior, with measured performance identified by device, browser, resolution, and preset.

Deliver the runnable source, exact install/run/build instructions, asset credits, concise architecture and mathematics notes, comparison screenshots, and a test report separating implemented, tested, unfinished, and untested behavior. Distinguish real-device testing from emulation.

**Final quality bar:** a cohesive fantasy adventure with substantially better in-game graphics and responsive play. Players should learn to anticipate change, read acceleration, and find stable states through the world itself, without needing calculus terminology on screen.
