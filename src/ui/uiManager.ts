import { InputManager } from '../input/inputManager';
import { DUNGEON_ROOMS } from '../world/levelData';
import { SaveDataV1 } from '../storage/persistence';
import { PLAYER_CONFIG } from '../config/gameConfig';

export interface UIHooks {
  onPause:()=>void;
  onInventory:()=>void;
  onNewGame: () => void;
  onContinueGame: () => void;
  onResumeGame: () => void;
  onRestartCheckpoint: () => void;
  onReturnMainMenu: () => void;
  onOpenSettings: (tab?: 'controls' | 'desktop' | 'mobile' | 'graphics') => void;
  onStudentDecision: (choice: 'helped' | 'left') => void;
  onAdvanceDialogue: () => void;
  onSkipCinematic: () => void;
  onUsePotionFromInventory: () => void;
}

export class GameUIManager {
  private inputManager: InputManager;
  private hooks: UIHooks;

  // HUD Elements
  private hudRoot: HTMLElement;
  private hpFill: HTMLElement;
  private hpText: HTMLElement;
  private regionLabel: HTMLElement;
  private objectiveLabel: HTMLElement;
  private sealsHud: HTMLElement;
  private keysCountEl: HTMLElement;
  private potionsCountEl: HTMLElement;
  private interactPromptEl: HTMLElement;
  private desktopHintsBar: HTMLElement;
  private lookStatusPill: HTMLElement;
  private fpsPill: HTMLElement;
  private toastEl: HTMLElement;
  private minimapWrap: HTMLElement;
  private minimapCanvas: HTMLCanvasElement;
  private bossBarWrap: HTMLElement;
  private bossBarName: HTMLElement;
  private bossBarFill: HTMLElement;
  private bossShieldStatus: HTMLElement;

  // Modals
  private mainMenuModal: HTMLElement;
  private pauseModal: HTMLElement;
  private inventoryModal: HTMLElement;
  private howToPlayModal: HTMLElement;
  private creditsModal: HTMLElement;
  private calculusGuideModal: HTMLElement;
  private dialogueBox: HTMLElement;
  private decisionModal: HTMLElement;
  private gameOverModal: HTMLElement;
  private endingModal: HTMLElement;
  private overwriteConfirmBox: HTMLElement;

  private toastTimer: number | null = null;
  private minimapVisible = true;
  private showDesktopHints = false;
  private lookGuidanceUntil=0;
  private lastSealKey="";

  constructor(container: HTMLElement, inputManager: InputManager, hooks: UIHooks) {
    this.inputManager = inputManager;
    this.hooks = hooks;

    // 1. HUD Layer
    this.hudRoot = document.createElement('div');
    this.hudRoot.id = 'gameHudLayer';
    this.hudRoot.className = 'hud-layer hidden';
    this.hudRoot.innerHTML = `
      <div class="hud-top-row">
        <div class="hud-left-panel">
          <div class="hp-panel">
            <div class="hp-meta">
              <span>VITALITY</span>
              <span id="hudHpText">100 / 100</span>
            </div>
            <div class="hp-track"><div id="hudHpFill" class="hp-fill"></div></div>
          </div>
          <div class="hud-badges-row">
            <span class="hud-pill" title="Health Potions"><span class="item-icon">♧</span> Potions <strong id="hudPotionsCount">0</strong></span>
            <span class="hud-pill" title="Dungeon Keys"><span class="item-icon">⚿</span> Keys <strong id="hudKeysCount">0</strong></span>
            <span id="hudFpsPill" class="hud-pill hidden">FPS: --</span>
          </div>
        </div>

        <div class="hud-center-panel">
          <div id="hudRegionName" class="region-title">The Forgotten Ruins</div>
          <div id="hudObjective" class="objective-text">Explore the ruins and seek the First Ancient Seal</div>
          <div id="hudSealsRow" class="seals-hud-row"></div>
        </div>

        <div id="hudMinimapWrap" class="minimap-panel">
          <span class="map-north">N</span><canvas id="minimapCanvas" width="144" height="144"></canvas>
          <div id="hudLookPill" class="look-status-pill">Click view to lock cursor (or drag)</div>
        </div>
      </div>

      <div id="hudBossBar" class="boss-bar-wrap hidden">
        <div class="boss-bar-top">
          <span id="hudBossName">Stone Sentinel</span>
          <span id="hudBossShieldStatus" class="boss-shield-tag">🛡️ Shielded</span>
        </div>
        <div class="boss-track"><div id="hudBossFill" class="boss-fill"></div></div>
      </div>

      <div id="hudInteractPrompt" class="interact-prompt hidden" role="status"></div>
      <div id="hudToast" class="hud-toast hidden" role="status"></div>

      <div class="hud-utilities"><button id="hudControlsToggle" aria-label="Toggle controls reference" aria-pressed="false">Controls</button><button id="hudInventoryButton" aria-label="Open inventory">Satchel</button><button id="hudPauseButton" aria-label="Pause expedition">Ⅱ</button></div>
      <div id="hudDesktopHints" class="desktop-hints-bar"></div>
    `;
    container.appendChild(this.hudRoot);
    const controlsToggle = this.hudRoot.querySelector("#hudControlsToggle") as HTMLButtonElement;
    controlsToggle.addEventListener("click", () => {
      this.showDesktopHints = !this.showDesktopHints;
      controlsToggle.setAttribute("aria-pressed", String(this.showDesktopHints));
      this.desktopHintsBar.classList.toggle("hidden", !this.showDesktopHints);
    });
    this.hudRoot.querySelector("#hudPauseButton")!.addEventListener("click",()=>this.hooks.onPause());
    this.hudRoot.querySelector("#hudInventoryButton")!.addEventListener("click",()=>this.hooks.onInventory());

    this.hpFill = this.hudRoot.querySelector('#hudHpFill')!;
    this.hpText = this.hudRoot.querySelector('#hudHpText')!;
    this.regionLabel = this.hudRoot.querySelector('#hudRegionName')!;
    this.objectiveLabel = this.hudRoot.querySelector('#hudObjective')!;
    this.sealsHud = this.hudRoot.querySelector('#hudSealsRow')!;
    this.keysCountEl = this.hudRoot.querySelector('#hudKeysCount')!;
    this.potionsCountEl = this.hudRoot.querySelector('#hudPotionsCount')!;
    this.interactPromptEl = this.hudRoot.querySelector('#hudInteractPrompt')!;
    this.desktopHintsBar = this.hudRoot.querySelector('#hudDesktopHints')!;
    this.lookStatusPill = this.hudRoot.querySelector('#hudLookPill')!;
    this.fpsPill = this.hudRoot.querySelector('#hudFpsPill')!;
    this.toastEl = this.hudRoot.querySelector('#hudToast')!;
    this.minimapWrap = this.hudRoot.querySelector('#hudMinimapWrap')!;
    this.minimapCanvas = this.hudRoot.querySelector('#minimapCanvas')!;
    this.bossBarWrap = this.hudRoot.querySelector('#hudBossBar')!;
    this.bossBarName = this.hudRoot.querySelector('#hudBossName')!;
    this.bossBarFill = this.hudRoot.querySelector('#hudBossFill')!;
    this.bossShieldStatus = this.hudRoot.querySelector('#hudBossShieldStatus')!;

    // 2. Main Menu Modal
    this.mainMenuModal = document.createElement('div');
    this.mainMenuModal.id = 'mainMenuModal';
    this.mainMenuModal.className = 'modal-overlay';
    this.mainMenuModal.innerHTML = `
      <div class="modal-card main-menu-card" role="dialog" aria-modal="true" aria-labelledby="gameMainTitle">
        <div class="edition-label"><span class="edition-mark">✧</span> A FORGOTTEN WORLD AWAITS</div>
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
        <div class="title-footer"><span>THREE SEALS. ONE WAY HOME.</span><span>AN ORIGINAL FANTASY ADVENTURE</span></div>
      </div>
    `;
    container.appendChild(this.mainMenuModal);
    this.overwriteConfirmBox = this.mainMenuModal.querySelector('#overwriteConfirmBox')!;

    // 3. Pause Menu Modal
    this.pauseModal = document.createElement('div');
    this.pauseModal.id = 'pauseModal';
    this.pauseModal.className = 'modal-overlay hidden';
    this.pauseModal.innerHTML = `
      <div class="modal-card pause-card" role="dialog" aria-modal="true" aria-labelledby="pauseTitle">
        <div class="modal-header">
          <div>
            <h2 id="pauseTitle">A moment of stillness</h2>
            <div class="modal-subtitle">Take a breath. The dungeon can wait.</div>
          </div>
        </div>
        <div class="pause-layout">
          <div class="menu-btn-stack">
            <button type="button" id="btnPauseResume" class="btn-primary">Resume</button>
            <button type="button" id="btnPauseSettings" class="btn-secondary">Settings</button>
            <button type="button" id="btnPauseInventory" class="btn-secondary">Inventory</button>
            <button type="button" id="btnPauseCalculusGuide" class="btn-secondary">Behind the Magic</button>
            <button type="button" id="btnPauseCheckpoint" class="btn-secondary">Restart from Checkpoint</button>
            <button type="button" id="btnPauseMainMenu" class="btn-danger">Return to Main Menu</button>
          </div>
          <details class="pause-controls-summary">
            <summary>Keyboard &amp; mouse controls</summary>
            <div id="pauseControlsList" class="controls-summary-list"></div>
          </details>
        </div>
      </div>
    `;
    container.appendChild(this.pauseModal);

    // 4. Inventory Modal
    this.inventoryModal = document.createElement('div');
    this.inventoryModal.id = 'inventoryModal';
    this.inventoryModal.className = 'modal-overlay hidden';
    this.inventoryModal.innerHTML = `
      <div class="modal-card inventory-card" role="dialog" aria-modal="true" aria-labelledby="invHeading">
        <div class="modal-header">
          <h2 id="invHeading">Adventurer's Satchel</h2>
          <button type="button" id="btnCloseInventory" class="btn-secondary btn-sm">Close</button>
        </div>
        <div class="inv-stats-row">
          <div class="inv-stat"><span>Health</span><strong id="invHpVal">100 / 100</strong></div>
          <div class="inv-stat"><span>Health Potions</span><strong id="invPotVal">0</strong></div>
          <div class="inv-stat"><span>Dungeon Keys</span><strong id="invKeyVal">0</strong></div>
          <div class="inv-stat"><span>Golden Relics</span><strong id="invGoldVal">None</strong></div>
        </div>
        <div class="inv-actions-row">
          <button type="button" id="btnInvUsePotion" class="btn-primary btn-sm">Drink Health Potion (+${PLAYER_CONFIG.potionHealAmount} HP)</button>
        </div>
        <h3 class="inv-section-heading">The Three Ancient Seals</h3>
        <div id="invSealsList" class="inv-seals-list"></div>
      </div>
    `;
    container.appendChild(this.inventoryModal);

    // 5. How to Play Modal
    this.howToPlayModal = document.createElement('div');
    this.howToPlayModal.id = 'howToPlayModal';
    this.howToPlayModal.className = 'modal-overlay hidden';
    this.howToPlayModal.innerHTML = `
      <div class="modal-card howto-card" role="dialog" aria-modal="true" aria-labelledby="howtoHeading">
        <div class="modal-header">
          <h2 id="howtoHeading">How to Play</h2>
          <button type="button" id="btnCloseHowTo" class="btn-secondary btn-sm">Close</button>
        </div>
        <div id="howToPlayDynamicBody" class="howto-body"></div>
      </div>
    `;
    container.appendChild(this.howToPlayModal);

    // 6. Credits & Calculus Info Modal
    this.creditsModal = document.createElement('div');
    this.creditsModal.id = 'creditsModal';
    this.creditsModal.className = 'modal-overlay hidden';
    this.creditsModal.innerHTML = `
      <div class="modal-card credits-card" role="dialog" aria-modal="true" aria-labelledby="creditsHeading">
        <div class="modal-header">
          <h2 id="creditsHeading">Credits &amp; Assets</h2>
          <button type="button" id="btnCloseCredits" class="btn-secondary btn-sm">Close</button>
        </div>
        <div class="credits-body">
          <p><strong>The Three Ancient Seals: Echoes of the Forgotten Dungeon</strong></p>
          <p>An atmospheric fantasy adventure built with Three.js, TypeScript, and Vite.</p>
          <hr class="modal-divider">
          <p><strong>Asset &amp; Technology Credits:</strong></p>
          <ul>
            <li><strong>3D Engine:</strong> Three.js (MIT License).</li>
            <li><strong>Meshes, Shaders &amp; Textures:</strong> Original procedural Three.js geometry and HTML5 Canvas stone/rune textures generated at runtime.</li>
            <li><strong>Audio:</strong> Original Web Audio API procedural sound effects and harmonic resonance synthesizer.</li>
            <li><strong>Typography:</strong> Cinzel by Natanael Gama (SIL Open Font License, bundled locally); system sans-serif body text.</li>
          </ul>
          <p class="save-local-note" style="margin-top: 12px;">
            Note: Game settings and checkpoints are stored in browser localStorage and do not synchronize across devices.
          </p>
          <button type="button" id="btnOpenGuideFromCredits" class="btn-primary btn-sm" style="margin-top: 10px;">
            Behind the Magic
          </button>
        </div>
      </div>
    `;
    container.appendChild(this.creditsModal);

    // 7. Optional "Behind the Magic" Guide
    this.calculusGuideModal = document.createElement('div');
    this.calculusGuideModal.id = 'calculusGuideModal';
    this.calculusGuideModal.className = 'modal-overlay hidden';
    this.calculusGuideModal.innerHTML = `
      <div class="modal-card guide-card" role="dialog" aria-modal="true" aria-labelledby="calcGuideHeading">
        <div class="modal-header">
          <h2 id="calcGuideHeading">Behind the Magic</h2>
          <button type="button" id="btnCloseCalcGuide" class="btn-secondary btn-sm">Close</button>
        </div>
        <div class="guide-body">
          <div class="guide-block"><h4>Listen to the current</h4><p>The seal trembles when its current is unsettled. Turn it in the direction of the pull. A quiet tone and a closing ring tell you when to hold still.</p></div>
          <div class="guide-block"><h4>Watch the crossing</h4><p>The ancient blades slow at each end of their tracks, then gather speed through the middle. Watch a full sweep from safety before choosing your moment.</p></div>
          <div class="guide-block"><h4>Find harmony</h4><p>Some wards bind two crystals together. Follow each crystal’s pull until both currents become steady at the same time.</p></div>
          <div class="guide-block"><h4>Read the guardian</h4><p>Raised weapons and a marked floor warn of a coming lunge. Dodge as the strike begins, then use its recovery to get close. A shielded guardian must first be weakened at its nearby mechanism.</p></div>
        </div>
      </div>
    `;
    container.appendChild(this.calculusGuideModal);

    // 8. Dialogue & Cinematic Banner
    this.dialogueBox = document.createElement('div');
    this.dialogueBox.id = 'dialogueBanner';
    this.dialogueBox.className = 'dialogue-banner hidden';
    this.dialogueBox.innerHTML = `
      <div class="dialogue-inner">
        <div class="dialogue-top">
          <span id="dlgSpeaker" class="dialogue-speaker">Axiom</span>
          <button type="button" id="btnSkipCinematic" class="btn-secondary btn-sm hidden">Skip Cinematic</button>
        </div>
        <div id="dlgText" class="dialogue-text"></div>
        <div id="dlgAdvanceHint" class="dialogue-advance-hint"></div>
      </div>
    `;
    container.appendChild(this.dialogueBox);

    // 9. Student Choice Modal
    this.decisionModal = document.createElement('div');
    this.decisionModal.id = 'studentDecisionModal';
    this.decisionModal.className = 'modal-overlay hidden';
    this.decisionModal.innerHTML = `
      <div class="modal-card decision-card" role="dialog" aria-modal="true" aria-labelledby="decisionHeading">
        <h2 id="decisionHeading">The Trapped Student</h2>
        <p class="decision-intro">
          Behind the Archivist's chamber, you discover a student sealed inside an unstable crystal containment field,
          beside a gleaming hoard of ancient golden relics.
        </p>
        <div class="decision-choices">
          <button type="button" id="btnChoiceHelpStudent" class="choice-btn help">
            <h3>Help the Student</h3>
            <p>Engage the two-crystal stabilization mechanism to collapse the stasis lock and escape together.</p>
          </button>
          <button type="button" id="btnChoiceLeaveStudent" class="choice-btn leave">
            <h3>Leave the Student</h3>
            <p>Claim the golden relic hoard and depart immediately toward the exit alone.</p>
          </button>
        </div>
      </div>
    `;
    container.appendChild(this.decisionModal);

    // 10. Game Over Modal
    this.gameOverModal = document.createElement('div');
    this.gameOverModal.id = 'gameOverModal';
    this.gameOverModal.className = 'modal-overlay hidden';
    this.gameOverModal.innerHTML = `
      <div class="modal-card gameover-card" role="dialog" aria-modal="true" aria-labelledby="gameOverHeading">
        <h2 id="gameOverHeading">Fallen in the Ruins</h2>
        <p>Your vitality reached zero. Return to your last checkpoint or restart from the main menu.</p>
        <div class="menu-btn-stack">
          <button type="button" id="btnGameOverCheckpoint" class="btn-primary">Restart from Checkpoint</button>
          <button type="button" id="btnGameOverMenu" class="btn-secondary">Return to Main Menu</button>
        </div>
      </div>
    `;
    container.appendChild(this.gameOverModal);

    // 11. Ending Overlay (Floats gently at bottom/center over the 3D sunset overlook scene!)
    this.endingModal = document.createElement('div');
    this.endingModal.id = 'endingOverlay';
    this.endingModal.className = 'ending-overlay hidden';
    this.endingModal.innerHTML = `
      <div class="ending-card">
        <h1 id="endingTitle" class="ending-title">FREEDOM SHARED</h1>
        <p id="endingQuote" class="ending-quote"></p>
        <p id="endingDesc" class="ending-desc"></p>
        <div class="ending-actions">
          <button type="button" id="btnEndingMenu" class="btn-primary">Return to Main Menu</button>
        </div>
      </div>
    `;
    container.appendChild(this.endingModal);

    this.bindEvents();
  }

  private bindEvents(): void {
    const btnContinue = this.mainMenuModal.querySelector('#btnMainContinue')!;
    const btnNew = this.mainMenuModal.querySelector('#btnMainNewGame')!;

    btnContinue.addEventListener('click', () => this.hooks.onContinueGame());
    btnNew.addEventListener('click', () => {
      if (!btnContinue.hasAttribute('disabled')) {
        this.overwriteConfirmBox.classList.remove('hidden');
      } else {
        this.hooks.onNewGame();
      }
    });

    this.mainMenuModal.querySelector('#btnConfirmOverwrite')!.addEventListener('click', () => {
      this.overwriteConfirmBox.classList.add('hidden');
      this.hooks.onNewGame();
    });
    this.mainMenuModal.querySelector('#btnCancelOverwrite')!.addEventListener('click', () => {
      this.overwriteConfirmBox.classList.add('hidden');
    });

    this.mainMenuModal.querySelector('#btnMainSettings')!.addEventListener('click', () => {
      this.hooks.onOpenSettings('controls');
    });
    this.mainMenuModal.querySelector('#btnMainHowToPlay')!.addEventListener('click', () => {
      this.refreshDynamicInstructions();
      this.howToPlayModal.classList.remove('hidden');
    });
    this.mainMenuModal.querySelector('#btnMainCredits')!.addEventListener('click', () => {
      this.creditsModal.classList.remove('hidden');
    });

    // Pause Menu
    this.pauseModal.querySelector('#btnPauseResume')!.addEventListener('click', () => this.hooks.onResumeGame());
    this.pauseModal.querySelector('#btnPauseSettings')!.addEventListener('click', () => {
      this.hooks.onOpenSettings('controls');
    });
    this.pauseModal.querySelector('#btnPauseInventory')!.addEventListener('click', () => {
      this.openInventoryModal(null); // Refreshed by caller
    });
    this.pauseModal.querySelector('#btnPauseCalculusGuide')!.addEventListener('click', () => {
      this.calculusGuideModal.classList.remove('hidden');
    });
    this.pauseModal.querySelector('#btnPauseCheckpoint')!.addEventListener('click', () => {
      this.hooks.onRestartCheckpoint();
    });
    this.pauseModal.querySelector('#btnPauseMainMenu')!.addEventListener('click', () => {
      this.hooks.onReturnMainMenu();
    });

    // Submodals
    this.inventoryModal.querySelector('#btnCloseInventory')!.addEventListener('click', () => {
      this.inventoryModal.classList.add('hidden');
    });
    this.inventoryModal.querySelector('#btnInvUsePotion')!.addEventListener('click', () => {
      this.hooks.onUsePotionFromInventory();
    });
    this.howToPlayModal.querySelector('#btnCloseHowTo')!.addEventListener('click', () => {
      this.howToPlayModal.classList.add('hidden');
    });
    this.creditsModal.querySelector('#btnCloseCredits')!.addEventListener('click', () => {
      this.creditsModal.classList.add('hidden');
    });
    this.creditsModal.querySelector('#btnOpenGuideFromCredits')!.addEventListener('click', () => {
      this.creditsModal.classList.add('hidden');
      this.calculusGuideModal.classList.remove('hidden');
    });
    this.calculusGuideModal.querySelector('#btnCloseCalcGuide')!.addEventListener('click', () => {
      this.calculusGuideModal.classList.add('hidden');
    });

    // Decision & Skip & GameOver & Ending
    this.decisionModal.querySelector('#btnChoiceHelpStudent')!.addEventListener('click', () => {
      this.decisionModal.classList.add('hidden');
      this.hooks.onStudentDecision('helped');
    });
    this.decisionModal.querySelector('#btnChoiceLeaveStudent')!.addEventListener('click', () => {
      this.decisionModal.classList.add('hidden');
      this.hooks.onStudentDecision('left');
    });
    this.dialogueBox.querySelector('#btnSkipCinematic')!.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hooks.onSkipCinematic();
    });
    this.dialogueBox.addEventListener('click', () => {
      this.hooks.onAdvanceDialogue();
    });
    this.gameOverModal.querySelector('#btnGameOverCheckpoint')!.addEventListener('click', () => {
      this.gameOverModal.classList.add('hidden');
      this.hooks.onRestartCheckpoint();
    });
    this.gameOverModal.querySelector('#btnGameOverMenu')!.addEventListener('click', () => {
      this.gameOverModal.classList.add('hidden');
      this.hooks.onReturnMainMenu();
    });
    this.endingModal.querySelector('#btnEndingMenu')!.addEventListener('click', () => {
      this.endingModal.classList.add('hidden');
      this.hooks.onReturnMainMenu();
    });
  }

  public setMainMenuVisible(visible: boolean, hasValidSave: boolean): void {
    this.mainMenuModal.classList.toggle('hidden', !visible);
    this.hudRoot.classList.toggle('hidden', visible);
    this.overwriteConfirmBox.classList.add('hidden');

    const btnContinue = this.mainMenuModal.querySelector('#btnMainContinue') as HTMLButtonElement;
    btnContinue.disabled = !hasValidSave;
    this.mainMenuModal.classList.toggle('has-save',hasValidSave);
    this.lookGuidanceUntil=performance.now()+6500;
    btnContinue.title = hasValidSave ? 'Resume your saved expedition' : 'No valid saved game found';
  }

  public setPauseVisible(visible: boolean): void {
    this.pauseModal.classList.toggle('hidden', !visible);
    if (visible) {
      this.refreshDynamicInstructions();
    }
  }

  public isPauseSubmodalOpen(): boolean {
    return (
      !this.inventoryModal.classList.contains('hidden') ||
      !this.howToPlayModal.classList.contains('hidden') ||
      !this.creditsModal.classList.contains('hidden') ||
      !this.calculusGuideModal.classList.contains('hidden')
    );
  }

  public closeSubmodals(): void {
    this.inventoryModal.classList.add('hidden');
    this.howToPlayModal.classList.add('hidden');
    this.creditsModal.classList.add('hidden');
    this.calculusGuideModal.classList.add('hidden');
  }

  public openInventoryModal(save: SaveDataV1 | null): void {
    if (save) {
      this.inventoryModal.querySelector('#invHpVal')!.textContent = `${Math.ceil(save.player.hp)} / ${PLAYER_CONFIG.maxHp}`;
      this.inventoryModal.querySelector('#invPotVal')!.textContent = String(save.inventory.potions);
      this.inventoryModal.querySelector('#invKeyVal')!.textContent = String(save.inventory.keys);
      this.inventoryModal.querySelector('#invGoldVal')!.textContent = save.inventory.goldRelicLooted ? 'Ancient Hoard' : 'None';

      const btnPot = this.inventoryModal.querySelector('#btnInvUsePotion') as HTMLButtonElement;
      btnPot.disabled = save.inventory.potions <= 0 || save.player.hp >= PLAYER_CONFIG.maxHp;

      const sealsList = this.inventoryModal.querySelector('#invSealsList')!;
      const sealDefs = [
        { id: 'seal_rates', glyph: '◆', name: 'First Ancient Seal', desc: 'Recovered from the Stone Sentinel.' },
        { id: 'seal_motion', glyph: '▲', name: 'Second Ancient Seal', desc: 'Recovered from the Arcane Scholar.' },
        { id: 'seal_extremum', glyph: '●', name: 'Third Ancient Seal', desc: 'Recovered from the Abyssal Warden.' },
      ];
      sealsList.innerHTML = sealDefs
        .map((s) => {
          const owned = save.inventory.seals.includes(s.id);
          return `
            <div class="inv-seal-item ${owned ? 'owned' : 'missing'}">
              <span class="seal-glyph">${s.glyph}</span>
              <div>
                <div class="seal-title">${s.name} — ${owned ? 'Collected' : 'Missing'}</div>
                <div class="seal-desc">${s.desc}</div>
              </div>
            </div>
          `;
        })
        .join('');
    }
    this.inventoryModal.classList.remove('hidden');
  }

  public isInventoryOpen(): boolean {
    return !this.inventoryModal.classList.contains('hidden');
  }

  public toggleInventory(save: SaveDataV1): boolean {
    if (this.isInventoryOpen()) {
      this.inventoryModal.classList.add('hidden');
      return false;
    }
    this.openInventoryModal(save);
    return true;
  }

  public toggleMinimap(): void {
    this.minimapVisible = !this.minimapVisible;
    this.minimapWrap.classList.toggle('hidden', !this.minimapVisible);
  }

  public showDialogue(speaker: string, text: string, isSkippableCinematic = false): void {
    this.dialogueBox.querySelector('#dlgSpeaker')!.textContent = speaker;
    this.dialogueBox.querySelector('#dlgText')!.textContent = text;
    this.dialogueBox.querySelector('#btnSkipCinematic')!.classList.toggle('hidden', !isSkippableCinematic);
    const keyHint = this.inputManager.getActionPrimaryLabel('interact');
    this.dialogueBox.querySelector('#dlgAdvanceHint')!.textContent = `Press [${keyHint}] to continue`;
    this.dialogueBox.classList.remove('hidden');
  }

  public hideDialogue(): void {
    this.dialogueBox.classList.add('hidden');
  }

  public showDecisionModal(): void {
    this.decisionModal.classList.remove('hidden');
  }

  public showGameOver(): void {
    this.gameOverModal.classList.remove('hidden');
  }

  public showEnding(type: 'good' | 'bad'): void {
    this.hudRoot.classList.add('hidden');
    this.dialogueBox.classList.add('hidden');
    const title = this.endingModal.querySelector('#endingTitle')!;
    const quote = this.endingModal.querySelector('#endingQuote')!;
    const desc = this.endingModal.querySelector('#endingDesc')!;

    if (type === 'good') {
      title.textContent = 'FREEDOM SHARED';
      title.className = 'ending-title good';
      quote.textContent = '“Knowledge becomes meaningful when it is used to help others.”';
      desc.textContent =
        'Beside the rescued student, you gaze across sunlit mountain peaks while the ruins seal behind you. Axiom remains at the binding lever forever, remembered in gratitude.';
    } else {
      title.textContent = 'THE PRICE OF GREED';
      title.className = 'ending-title bad';
      quote.textContent = '“Not every correct answer leads to the right decision.”';
      desc.textContent =
        'Alone beneath a dark crimson sky, you clutch the stolen gold relics. Behind you in the sealed depths, both Axiom and the trapped student remain imprisoned.';
    }
    this.endingModal.classList.remove('hidden');
  }

  public showToast(msg: string): void {
    this.toastEl.textContent = msg;
    this.toastEl.classList.remove('hidden');
    if (this.toastTimer !== null) window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => {
      this.toastEl.classList.add('hidden');
    }, 3400);
  }

  public refreshDynamicInstructions(): void {
    const kMove = `${this.inputManager.getActionPrimaryLabel('moveForward')}/${this.inputManager.getActionPrimaryLabel('moveLeft')}/${this.inputManager.getActionPrimaryLabel('moveBackward')}/${this.inputManager.getActionPrimaryLabel('moveRight')}`;
    const kAtk = this.inputManager.getActionPrimaryLabel('attack');
    const kDodge = this.inputManager.getActionPrimaryLabel('dodge');
    const kSprint = this.inputManager.getActionPrimaryLabel('sprint');
    const kInt = this.inputManager.getActionPrimaryLabel('interact');
    const kPot = this.inputManager.getActionPrimaryLabel('usePotion');
    const kInv = this.inputManager.getActionPrimaryLabel('inventory');
    const kMap = this.inputManager.getActionPrimaryLabel('map');
    const kPause = this.inputManager.getActionAllLabels('pause');

    // Bottom desktop quick hints
    this.desktopHintsBar.innerHTML = `
      <span><strong>[${kAtk}]</strong> Attack</span>
      <span><strong>[${kDodge}]</strong> Dodge</span>
      <span><strong>[${kSprint}]</strong> Sprint</span>
      <span><strong>[${kInt}]</strong> Interact</span>
      <span><strong>[${kPot}]</strong> Potion</span>
      <span><strong>[${kInv}]</strong> Inventory</span>
      <span><strong>[${kMap}]</strong> Map</span>
      <span><strong>[${kPause}]</strong> Pause</span>
    `;

    // Pause control summary
    const pauseList = this.pauseModal.querySelector('#pauseControlsList')!;
    pauseList.innerHTML = `
      <div><span>Move:</span> <strong>${kMove}</strong></div>
      <div><span>Primary Attack:</span> <strong>${this.inputManager.getActionAllLabels('attack')}</strong></div>
      <div><span>Dodge / Roll:</span> <strong>${this.inputManager.getActionAllLabels('dodge')}</strong></div>
      <div><span>Sprint:</span> <strong>${this.inputManager.getActionAllLabels('sprint')}</strong></div>
      <div><span>Interact:</span> <strong>${this.inputManager.getActionAllLabels('interact')}</strong></div>
      <div><span>Health Potion:</span> <strong>${this.inputManager.getActionAllLabels('usePotion')}</strong></div>
      <div><span>Inventory / Map:</span> <strong>${kInv} / ${kMap}</strong></div>
      <div><span>Pause / Back:</span> <strong>${kPause}</strong></div>
    `;

    // How to play dynamic instructions
    this.howToPlayModal.querySelector('#howToPlayDynamicBody')!.innerHTML = `
      <p>Explore four ancient dungeon stages, defeat guardians by stabilizing their ancient wards, collect the Three Ancient Seals, and escape the Forgotten Dungeon.</p>
      <div class="howto-grid">
        <div><strong>Movement:</strong> ${kMove}</div>
        <div><strong>Primary Attack:</strong> ${this.inputManager.getActionAllLabels('attack')}</div>
        <div><strong>Dodge / Roll:</strong> ${this.inputManager.getActionAllLabels('dodge')}</div>
        <div><strong>Sprint:</strong> ${this.inputManager.getActionAllLabels('sprint')}</div>
        <div><strong>Interact / Stabilize:</strong> ${this.inputManager.getActionAllLabels('interact')}</div>
        <div><strong>Use Health Potion:</strong> ${this.inputManager.getActionAllLabels('usePotion')}</div>
        <div><strong>Inventory / Minimap:</strong> ${kInv} / ${kMap}</div>
        <div><strong>Pause / Back:</strong> ${kPause}</div>
      </div>
      <p class="howto-tip">
        <strong>Ancient mechanisms:</strong> Follow the pull of the current. A steady light and a closing ring mean the crystals are aligned. Hold them still until the lock opens.
      </p>
    `;
  }

  public updateHUD(opts: {
    hp: number;
    maxHp: number;
    potions: number;
    keys: number;
    seals: string[];
    regionName: string;
    objective: string;
    interactPrompt: string | null;
    isTouchMode: boolean;
    pointerLocked: boolean;
    pointerLockAvailable: boolean;
    showFps: boolean;
    fps: number;
    activeBoss: { name: string; hp: number; maxHp: number; shielded: boolean; vulnRemaining: number } | null;
    minimap: {
      playerX: number;
      playerZ: number;
      playerYaw: number;
      axiomX: number;
      axiomZ: number;
      axiomVisible: boolean;
      enemies: Array<{ x: number; z: number; alive: boolean; isBoss: boolean }>;
      doors: Array<{ x: number; z: number; open: boolean }>;
    };
  }): void {
    const pct = Math.max(0, Math.min(100, (opts.hp / opts.maxHp) * 100));
    this.hpFill.style.width = `${pct}%`;
    this.hpFill.classList.toggle('low', opts.hp <= 30);
    this.hpText.textContent = `${Math.ceil(opts.hp)} / ${opts.maxHp}${opts.hp <= 30 ? ' (!)' : ''}`;

    this.potionsCountEl.textContent = String(opts.potions);
    this.keysCountEl.textContent = String(opts.keys);
    this.regionLabel.textContent = opts.regionName;
    this.objectiveLabel.textContent = opts.objective;

    const sealInfo = [
      { id: 'seal_rates', glyph: '◆', label: 'I' },
      { id: 'seal_motion', glyph: '▲', label: 'II' },
      { id: 'seal_extremum', glyph: '●', label: 'III' },
    ];
    const sealKey=opts.seals.join(",");
    if(this.lastSealKey!==sealKey || !this.sealsHud.children.length) {
    this.lastSealKey=sealKey;
    this.sealsHud.innerHTML = sealInfo
      .map((s) => {
        const active = opts.seals.includes(s.id);
        return `<span class="seal-pip ${active ? 'active' : ''}">${s.glyph} ${s.label}</span>`;
      })
      .join('');
    }

    if (opts.interactPrompt && !opts.isTouchMode) {
      const kInt = this.inputManager.getActionPrimaryLabel('interact');
      this.interactPromptEl.textContent = `Press ${kInt} to ${opts.interactPrompt}`;
      this.interactPromptEl.classList.remove('hidden');
    } else {
      this.interactPromptEl.classList.add('hidden');
    }

    this.desktopHintsBar.classList.toggle('hidden', opts.isTouchMode || !this.showDesktopHints);
    this.lookStatusPill.classList.toggle('hidden', opts.isTouchMode || opts.pointerLocked || performance.now()>this.lookGuidanceUntil);
    if (!opts.isTouchMode) {
      this.lookStatusPill.textContent = opts.pointerLocked
        ? 'Mouse Locked (Esc to Pause)'
        : opts.pointerLockAvailable
          ? 'Click view to lock cursor (or drag to look)'
          : 'Drag viewport to rotate camera';
    }

    this.fpsPill.classList.toggle('hidden', !opts.showFps);
    if (opts.showFps) {
      this.fpsPill.textContent = `FPS: ${Math.round(opts.fps)}`;
    }

    if (opts.activeBoss) {
      this.bossBarWrap.classList.remove('hidden');
      this.bossBarName.textContent = opts.activeBoss.name;
      this.bossBarFill.style.width = `${Math.max(0, (opts.activeBoss.hp / opts.activeBoss.maxHp) * 100)}%`;
      this.bossShieldStatus.textContent = opts.activeBoss.shielded
        ? '🛡️ Shielded — Stabilize Pylon'
        : `⚡ Vulnerable (${opts.activeBoss.vulnRemaining.toFixed(1)}s)`;
      this.bossShieldStatus.className = `boss-shield-tag ${opts.activeBoss.shielded ? 'shielded' : 'vulnerable'}`;
    } else {
      this.bossBarWrap.classList.add('hidden');
    }

    if (this.minimapVisible) {
      this.renderMinimap(opts.minimap);
    }
  }

  private renderMinimap(data: {
    playerX: number;
    playerZ: number;
    playerYaw: number;
    axiomX: number;
    axiomZ: number;
    axiomVisible: boolean;
    enemies: Array<{ x: number; z: number; alive: boolean; isBoss: boolean }>;
    doors: Array<{ x: number; z: number; open: boolean }>;
  }): void {
    const ctx = this.minimapCanvas.getContext('2d');
    if (!ctx) return;
    const w = this.minimapCanvas.width;
    const h = this.minimapCanvas.height;
    const scale = 3.2; // pixels per meter around player

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#111d21';
    ctx.fillRect(0, 0, w, h);

    const toScreen = (wx: number, wz: number) => ({
      sx: w * 0.5 + (wx - data.playerX) * scale,
      sy: h * 0.5 + (wz - data.playerZ) * scale,
    });

    // Rooms
    ctx.fillStyle = '#334044';
    ctx.strokeStyle = '#6b7772';
    ctx.lineWidth = 1;
    for (const r of DUNGEON_ROOMS) {
      const topLeft = toScreen(r.minX, r.minZ);
      const rw = (r.maxX - r.minX) * scale;
      const rh = (r.maxZ - r.minZ) * scale;
      ctx.fillRect(topLeft.sx, topLeft.sy, rw, rh);
      ctx.strokeRect(topLeft.sx, topLeft.sy, rw, rh);
    }

    // Closed doors
    for (const d of data.doors) {
      if (d.open) continue;
      const p = toScreen(d.x, d.z);
      ctx.fillStyle = '#d4af37';
      ctx.fillRect(p.sx - 3, p.sy - 3, 6, 6);
    }

    // Enemies
    for (const e of data.enemies) {
      if (!e.alive) continue;
      const p = toScreen(e.x, e.z);
      ctx.fillStyle = e.isBoss ? '#f43f5e' : '#fb923c';
      ctx.beginPath();
      const r=e.isBoss ? 4.5:3; ctx.moveTo(p.sx,p.sy-r);ctx.lineTo(p.sx+r,p.sy);ctx.lineTo(p.sx,p.sy+r);ctx.lineTo(p.sx-r,p.sy);ctx.closePath();
      ctx.fill();
    }

    // Axiom
    if (data.axiomVisible) {
      const a = toScreen(data.axiomX, data.axiomZ);
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(a.sx, a.sy, 3.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Player direction cone at center
    ctx.save();
    ctx.translate(w * 0.5, h * 0.5);
    ctx.rotate(-data.playerYaw);
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(4.5, 5);
    ctx.lineTo(-4.5, 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

