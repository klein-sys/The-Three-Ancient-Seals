import * as THREE from 'three';
import { animateCharacter } from '../world/characterArt';
import {
  COMBAT_CONFIG,
  PLAYER_CONFIG,
  SHADOW_MAP_SIZES,
  SIMULATION_CONFIG,
  VIEW_DISTANCE_METERS,
} from '../config/gameConfig';
import {
  EnergyStabilizerModel,
  HarmonicTrapModel,
  OptimizationChestModel,
} from '../math/calculusModels';
import {
  BoxCollider,
  raycastAgainstBoxes,
  hasLineOfSight3D,
  resolveCircleXZAgainstBoxes,
  sweptBoxIntersectsCircleXZ,
} from '../math/geometry';
import { InputManager } from '../input/inputManager';
import { TouchControlsUI } from '../input/touchControls';
import {
  PersistenceManager,
  SaveDataV1,
  SettingsDataV1,
  createInitialSaveData,
} from '../storage/persistence';
import { SoundEngine } from '../audio/soundEngine';
import {
  CHECKPOINTS,
  CHEST_SPECS,
  DOOR_SPECS,
  ENEMY_SPAWNS,
  PYLON_SPECS,
  REGION_NAMES,
  TABLET_SPECS,
  TRAP_ANCHORS,
  TRAP_SPECS,
} from '../world/levelData';
import { BuiltWorld, buildGameWorld } from '../world/worldBuilder';
import { CombatController } from './combatSystem';
import {
  EnemyInstance,
  createEnemyInstance,
  damageEnemy,
  openBossVulnerability,
  stepEnemies,
} from './enemyController';
import {
  CompanionState,
  createCompanionState,
  stepCompanions,
} from './companionController';
import { MechanismOverlayUI } from '../ui/mechanismUI';
import { SettingsUI } from '../ui/settingsUI';
import { GameUIManager } from '../ui/uiManager';

type AppState =
  | 'main_menu'
  | 'playing'
  | 'paused'
  | 'mechanism'
  | 'dialogue'
  | 'decision'
  | 'game_over'
  | 'ending';

interface DialogueLine {
  speaker: string;
  text: string;
}

interface ActiveCinematic {
  lines: DialogueLine[];
  skippable: boolean;
  onComplete: () => void;
}

interface InteractableTarget {
  kind: 'door' | 'chest' | 'pylon' | 'tablet' | 'pedestal' | 'student' | 'lever';
  id: string;
  label: string;
  x: number;
  z: number;
}

export class GameApp {
  private container: HTMLElement;
  private persistence: PersistenceManager;
  private settings: SettingsDataV1;
  private saveData: SaveDataV1;

  private sound: SoundEngine;
  private inputManager: InputManager;
  private touchUI: TouchControlsUI;
  private ui: GameUIManager;
  private settingsUI: SettingsUI;
  private mechanismUI: MechanismOverlayUI;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private world!: BuiltWorld;

  private appState: AppState = 'main_menu';
  private returnStateAfterSettings: 'main_menu' | 'paused' = 'main_menu';
  private activeMechanismTarget: { x: number; y: number; z: number; orientation?: 'x-axis' | 'z-axis' } | null = null;

  // Simulation state
  private simTime = 0;
  private accumulator = 0;
  private lastFrameMs = 0;
  private fpsSamples: number[] = [];
  private currentFps = 60;
  private currentCamDist: number = PLAYER_CONFIG.cameraDefaultDistance;
  private playerPitch = 0.22;
  private walkBobTime = 0;
  private playerSpeed=0;
  private mechanismTime=0;
  private impactTime=0;
  private archivistMotionStart:number|null=null;

  private combat = new CombatController();
  private companionState: CompanionState = createCompanionState();
  private enemies: EnemyInstance[] = [];
  private energyModels = new Map<string, EnergyStabilizerModel>();
  private optModels = new Map<string, OptimizationChestModel>();
  private trapModels = new Map<string, HarmonicTrapModel>();
  private trapPrevPos = new Map<string, { x: number; z: number }>();
  private trapDirections=new Map<string,number>();

  private activeCinematic: ActiveCinematic | null = null;
  private currentTextureQuality: SettingsDataV1['graphics']['textureQuality'];
  private currentShadowQuality: SettingsDataV1['graphics']['shadowQuality'];
  private nearbyInteractable: InteractableTarget | null = null;
  private animationFrameId = 0;

  // Exposed for automated verification & telemetry
  public getDebugSnapshot() {
    return {
      appState: this.appState,
      simTime: this.simTime,
      fps: this.currentFps,
      swordPhase: this.combat.swordPhase,
      rendererStats: {
        drawCalls:this.renderer.info.render.calls,
        triangles:this.renderer.info.render.triangles,
        pixelRatio: this.renderer.getPixelRatio(),
        shadowEnabled: this.renderer.shadowMap.enabled,
        cameraFov: this.camera.fov,
        cameraFar: this.camera.far,
      },
      player: { ...this.saveData.player },
      inventory: { ...this.saveData.inventory, seals: [...this.saveData.inventory.seals] },
      worldFlags: { ...this.saveData.worldFlags },
      inputContext: this.inputManager.getContext(),
      activeBindings: this.inputManager.getBindings(),
      settings: structuredClone(this.settings),
      nearbyInteractable: this.nearbyInteractable,
      enemies: this.enemies.map((e) => ({
        id: e.id,
        hp: e.hp,
        state: e.state,
        shielded: e.shielded,
        x: e.x,
        z: e.z,
      })),
    };
  }

  constructor(container: HTMLElement) {
    this.container = container;
    this.persistence = new PersistenceManager();
    const loadedSettings = this.persistence.loadSettings();
    this.settings = loadedSettings.settings;
    this.currentTextureQuality = this.settings.graphics.textureQuality;
    this.currentShadowQuality = this.settings.graphics.shadowQuality;

    const loadedSave = this.persistence.loadGameSave();
    this.saveData = loadedSave.save ?? createInitialSaveData();

    this.sound = new SoundEngine();
    this.sound.setMuted(this.settings.soundMuted);
    document.body.classList.toggle('reduced-motion',this.settings.reducedMotion);

    this.inputManager = new InputManager(this.settings.controls, {
      onContextLostPause: () => {
        if(this.appState==='mechanism') this.mechanismUI.close();
        if (this.appState === 'playing') this.pauseGame();
      },
      onInputActivity: () => {
        this.syncInterfaceModeVisibility();
      },
    });
    this.inputManager.configureGameplayOptions({
      sprintMode: this.settings.desktop.sprintMode,
      holdToRepeatAttack: this.settings.desktop.holdToRepeatAttack,
      interfaceMode: this.settings.interfaceMode,
    });

    this.initThreeScene();

    this.touchUI = new TouchControlsUI(container, this.inputManager, this.settings.mobile, {
      onOpenInventory: () => {
        if (this.appState === 'playing') {
          this.toggleInventory();
        }
      },
      onToggleMap: () => {
        if (this.appState === 'playing') {
          this.ui.toggleMinimap();
        }
      },
      onPause: () => {
        if (this.appState === 'playing') {
          this.pauseGame();
        }
      },
      onOpenSettings: () => {
        if (this.appState === 'playing') {
          this.pauseGame();
          this.openSettingsModal('mobile');
        }
      },
    });

    this.ui = new GameUIManager(container, this.inputManager, {
      onPause: () => this.pauseGame(),
      onInventory: () => {this.pauseGame();this.ui.openInventoryModal(this.saveData);},
      onNewGame: () => this.startNewGame(),
      onContinueGame: () => this.continueSavedGame(),
      onResumeGame: () => this.resumeGame(),
      onRestartCheckpoint: () => this.restartFromCheckpoint(),
      onReturnMainMenu: () => this.returnToMainMenu(),
      onOpenSettings: (tab) => this.openSettingsModal(tab ?? 'controls'),
      onStudentDecision: (choice) => this.handleStudentDecision(choice),
      onAdvanceDialogue: () => this.advanceDialogue(),
      onSkipCinematic: () => this.skipActiveCinematic(),
      onUsePotionFromInventory: () => {
        this.tryUsePotion();
        this.ui.openInventoryModal(this.saveData);
      },
    });

    this.settingsUI = new SettingsUI(container, this.inputManager, this.settings, {
      onApplySettings: (updated) => this.applyNewSettings(updated),
      onClose: () => {
        this.inputManager.setContext('menu');
        if (this.returnStateAfterSettings === 'paused') {
          this.ui.setPauseVisible(true);
        }
      },
    });

    this.mechanismUI = new MechanismOverlayUI(container, this.inputManager, this.sound);

    this.inputManager.attach(this.renderer.domElement);
    this.initModelsAndEntitiesFromSave();
    this.applyGraphicsSettings(this.settings.graphics);
    this.ui.refreshDynamicInstructions();
    this.ui.setMainMenuVisible(true, this.persistence.hasValidSave());
    this.syncInterfaceModeVisibility();

    if (loadedSettings.recoveredFromError) {
      this.ui.showToast('Settings storage was corrupted and safely restored to defaults.');
    } else if (!this.persistence.isStorageAvailable()) {
      this.ui.showToast('Browser storage unavailable — settings and progress stay active for this session.');
    }

    if (loadedSave.corrupted) {
      this.ui.showToast('Saved progress data was invalid and could not be loaded.');
    }

    window.addEventListener('resize', () => this.handleResize());
    this.lastFrameMs = performance.now();
    this.loop(this.lastFrameMs);
  }

  private initThreeScene(): void {
    try {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
      this.renderer.setSize(this.container.clientWidth || window.innerWidth, this.container.clientHeight || window.innerHeight);
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure=1.18;
      this.renderer.outputColorSpace=THREE.SRGBColorSpace;
      this.renderer.domElement.id = 'gameplayCanvas';
      this.renderer.domElement.className = 'gameplay-canvas';
      this.container.prepend(this.renderer.domElement);

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x15242c);
      this.scene.fog = new THREE.Fog(0x15242c, 16, 52);

      const aspect = (this.container.clientWidth || window.innerWidth) / Math.max(1, this.container.clientHeight || window.innerHeight);
      this.camera = new THREE.PerspectiveCamera(this.settings.desktop.fov, aspect, 0.1, 60);

      this.world = buildGameWorld(
        this.scene,
        this.settings.graphics.textureQuality,
        this.settings.graphics.effectsQuality
      );
    } catch (err) {
      const errOverlay = document.createElement('div');
      errOverlay.className = 'fatal-error-screen';
      errOverlay.innerHTML = `
        <h2>3D Graphics Initialization Failed</h2>
        <p>WebGL could not be initialized in this browser environment.</p>
        <pre>${err instanceof Error ? err.message : String(err)}</pre>
      `;
      this.container.appendChild(errOverlay);
      throw err;
    }
  }

  private handleResize(): void {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    this.camera.aspect = w / Math.max(1, h);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.touchUI.updateOrientationBanner();
  }

  private applyNewSettings(updated: SettingsDataV1): void {
    this.settings = structuredClone(updated);
    this.sound.setMuted(this.settings.soundMuted);
    document.body.classList.toggle('reduced-motion',this.settings.reducedMotion);
    this.inputManager.applyBindings(this.settings.controls);
    this.inputManager.configureGameplayOptions({
      sprintMode: this.settings.desktop.sprintMode,
      holdToRepeatAttack: this.settings.desktop.holdToRepeatAttack,
      interfaceMode: this.settings.interfaceMode,
    });

    this.camera.fov = this.settings.desktop.fov;
    this.camera.updateProjectionMatrix();
    this.touchUI.applySettings(this.settings.mobile);
    this.container.style.setProperty("--hud-scale",String(this.settings.mobile.hudScale));
    this.applyGraphicsSettings(this.settings.graphics);
    this.syncInterfaceModeVisibility();
    this.ui.refreshDynamicInstructions();

    const savedOk = this.persistence.saveSettings(this.settings);
    if (!savedOk) {
      this.ui.showToast('Settings applied for session (storage unavailable).');
    } else {
      this.ui.showToast('Settings saved.');
    }
  }

  private applyGraphicsSettings(gfx: SettingsDataV1['graphics']): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(dpr * gfx.renderScale);

    const vd = VIEW_DISTANCE_METERS[gfx.viewDistance];
    this.camera.far = vd.far;
    this.camera.updateProjectionMatrix();
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.near = vd.fogNear;
      this.scene.fog.far = vd.fogFar;
    }

    if (gfx.shadowQuality !== this.currentShadowQuality || !this.renderer.shadowMap.enabled) {
      this.currentShadowQuality = gfx.shadowQuality;
      if (gfx.shadowQuality !== 'off') {
        this.renderer.shadowMap.enabled = true;
        const size = SHADOW_MAP_SIZES[gfx.shadowQuality];
        for (const light of this.world.ambientLights) {
          if (light instanceof THREE.DirectionalLight && light.castShadow) {
            light.shadow.mapSize.set(size, size);
            light.shadow.map?.dispose();
            light.shadow.map = null;
          }
        }
      } else {
        this.renderer.shadowMap.enabled = false;
      }
      this.renderer.shadowMap.needsUpdate = true;
    } else {
      this.renderer.shadowMap.enabled = gfx.shadowQuality !== 'off';
    }

    this.world.applyEffectsQuality(gfx.effectsQuality);

    if (gfx.textureQuality !== this.currentTextureQuality) {
      this.currentTextureQuality = gfx.textureQuality;
      this.world.applyTextureQuality(gfx.textureQuality);
    }
  }

  private syncInterfaceModeVisibility(): void {
    const isTouch = this.inputManager.getActiveInterfaceMode() === 'touch';
    const shouldShowTouch = isTouch && this.appState === 'playing';
    this.touchUI.setVisible(shouldShowTouch);
  }

  private initModelsAndEntitiesFromSave(): void {
    this.archivistMotionStart=null;
    const fog=VIEW_DISTANCE_METERS[this.settings.graphics.viewDistance];
    this.scene.fog=new THREE.Fog(0x15242c,fog.fogNear,fog.fogFar);
    this.simTime = 0;
    this.combat.reset();
    this.companionState = createCompanionState();
    this.energyModels.clear();
    this.optModels.clear();
    this.trapModels.clear();
    this.trapPrevPos.clear();

    // Doors & Energy Pylons
    for (const spec of DOOR_SPECS) {
      if (spec.energyConfig) {
        const m = new EnergyStabilizerModel(spec.energyConfig);
        if (this.saveData.worldFlags.openedDoors.includes(spec.id)) {
          m.stabilized = true;
        }
        this.energyModels.set(spec.id, m);
      }
    }

    for (const spec of PYLON_SPECS) {
      if (spec.energyConfig) {
        const m = new EnergyStabilizerModel(spec.energyConfig);
        if (spec.kind === 'axiomCage' && this.saveData.worldFlags.axiomRescued) m.stabilized = true;
        if (spec.kind === 'barrierControl' && this.saveData.worldFlags.brokenBarriers.includes(spec.targetId)) m.stabilized = true;
        this.energyModels.set(spec.id, m);
      }
      if (spec.optConfig) {
        const m = new OptimizationChestModel(spec.optConfig);
        if (spec.kind === 'studentCage' && this.saveData.worldFlags.studentChoice === 'helped') m.unlocked = true;
        this.optModels.set(spec.id, m);
      }
    }

    for (const spec of CHEST_SPECS) {
      if (spec.optConfig) {
        const m = new OptimizationChestModel(spec.optConfig);
        if (this.saveData.worldFlags.openedChests.includes(spec.id)) m.unlocked = true;
        this.optModels.set(spec.id, m);
      }
    }

    // Traps
    for (const spec of TRAP_SPECS) {
      const m = new HarmonicTrapModel({
        id: spec.id,
        p0: spec.p0,
        amplitude: spec.amplitude,
        omega: spec.omega,
        phase: spec.phase,
      });
      this.trapModels.set(spec.id, m);
      const anchor = TRAP_ANCHORS[spec.id];
      const initEval = m.evaluate(0);
      this.trapPrevPos.set(spec.id, {
        x: anchor.x + (spec.axis === 'x' ? initEval.position : 0),
        z: anchor.z + (spec.axis === 'z' ? initEval.position : 0),
      });
    }

    // Enemies
    this.enemies = ENEMY_SPAWNS.map((sp) => {
      const isDefeated =
        this.saveData.worldFlags.defeatedEnemies.includes(sp.id) ||
        this.saveData.worldFlags.defeatedBosses.includes(sp.id);
      return createEnemyInstance(sp, isDefeated);
    });

    // Place companions coherently on load
    if (this.saveData.worldFlags.axiomSacrificed) {
      this.companionState.axiomX = -2;
      this.companionState.axiomZ = -171;
    } else if (this.saveData.worldFlags.axiomRescued) {
      this.companionState.axiomX = this.saveData.player.x - 1.2;
      this.companionState.axiomZ = this.saveData.player.z + 0.8;
    }
    if (this.saveData.worldFlags.studentChoice === 'helped') {
      this.companionState.studentX = this.saveData.player.x + 1.2;
      this.companionState.studentZ = this.saveData.player.z + 1.5;
    }

    this.world.dungeonRoot.visible = true;
    this.world.endingRoot.visible = false;
    this.activeMechanismTarget = null;
    const vd = VIEW_DISTANCE_METERS[this.settings.graphics.viewDistance];
    this.scene.fog = new THREE.Fog(0x15242c, vd.fogNear, vd.fogFar);
    this.camera.far = vd.far;
    this.camera.updateProjectionMatrix();
    for(const [id,door] of this.world.doors) door.mesh.position.y=this.isDoorOpen(id)?door.openY:door.closedY;
    this.syncVisualsFromState();
  }

  private startNewGame(): void {
    this.sound.ensureInitialized();
    this.saveData = createInitialSaveData();
    this.persistence.saveGame(this.saveData);
    this.initModelsAndEntitiesFromSave();
    this.ui.setMainMenuVisible(false, true);
    this.ui.setPauseVisible(false);
    this.appState = 'playing';
    this.inputManager.setContext('gameplay');
    this.syncInterfaceModeVisibility();

    this.updateThirdPersonCamera(1/60);
    this.updateHUDDisplay();

    // Intro narration
    if (!this.saveData.worldFlags.seenTutorials.includes('intro')) {
      this.saveData.worldFlags.seenTutorials.push('intro');
      this.startDialogue([
        { speaker: 'Narrator', text: 'You awaken amid cold, moss-lined stone ruins. Blue arcane conduits pulse softly along the walls.' },
        { speaker: 'Narrator', text: 'Inspect the stone tablet ahead to learn how the Three Ancient Seals govern this dungeon.' },
      ], true, () => {
        this.persistence.saveGame(this.saveData);
      });
    }
  }

  private continueSavedGame(): void {
    const { save } = this.persistence.loadGameSave();
    if (!save) return;
    this.sound.ensureInitialized();
    this.saveData = save;
    this.initModelsAndEntitiesFromSave();
    this.ui.setMainMenuVisible(false, true);
    this.ui.setPauseVisible(false);

    if (this.saveData.worldFlags.endingReached) {
      this.enterEndingScene(this.saveData.worldFlags.endingReached);
      return;
    }

    this.appState = 'playing';
    this.inputManager.setContext('gameplay');
    this.syncInterfaceModeVisibility();
    this.ui.showToast(`Resumed at ${REGION_NAMES[this.saveData.currentRegionId]}`);
  }

  private pauseGame(): void {
    if (this.appState !== 'playing') return;
    this.persistence.saveGame(this.saveData);
    this.appState = 'paused';
    this.inputManager.setContext('menu');
    this.touchUI.setVisible(false);
    this.ui.setPauseVisible(true);
  }

  private resumeGame(): void {
    if (this.appState !== 'paused') return;
    this.ui.closeSubmodals();
    this.ui.setPauseVisible(false);
    this.appState = 'playing';
    this.inputManager.setContext('gameplay');
    this.syncInterfaceModeVisibility();
  }

  private restartFromCheckpoint(): void {
    const cp = CHECKPOINTS.find((c) => c.id === this.saveData.checkpointId) ?? CHECKPOINTS[0];
    this.saveData.player.x = cp.x;
    this.saveData.player.y = 0;
    this.saveData.player.z = cp.z;
    this.saveData.player.yaw = cp.yaw;
    this.saveData.player.hp = PLAYER_CONFIG.maxHp;
    this.saveData.currentRegionId = cp.region;
    this.persistence.saveGame(this.saveData);

    this.initModelsAndEntitiesFromSave();
    this.ui.setPauseVisible(false);
    this.appState = 'playing';
    this.inputManager.setContext('gameplay');
    this.syncInterfaceModeVisibility();
    this.ui.showToast(`Restored at checkpoint: ${REGION_NAMES[cp.region]}`);
  }

  private returnToMainMenu(): void {
    if(this.appState!=="main_menu") this.persistence.saveGame(this.saveData);
    this.mechanismUI.close();
    this.ui.closeSubmodals();
    this.ui.hideDialogue();
    this.ui.setPauseVisible(false);
    this.touchUI.setVisible(false);
    this.world.dungeonRoot.visible = true;
    this.world.endingRoot.visible = false;
    this.activeMechanismTarget = null;
    const fog=VIEW_DISTANCE_METERS[this.settings.graphics.viewDistance];
    this.scene.fog=new THREE.Fog(0x15242c,fog.fogNear,fog.fogFar);
    this.camera.far = fog.far;
    this.camera.updateProjectionMatrix();
    this.appState = 'main_menu';
    this.inputManager.setContext('menu');
    this.ui.setMainMenuVisible(true, this.persistence.hasValidSave());
  }

  private openSettingsModal(tab: 'controls' | 'desktop' | 'mobile' | 'graphics'): void {
    this.returnStateAfterSettings = this.appState === 'paused' ? 'paused' : 'main_menu';
    this.ui.setPauseVisible(false);
    this.inputManager.setContext('menu');
    this.settingsUI.open(this.settings, tab);
  }

  private isDoorOpen(id: string): boolean {
    const spec = DOOR_SPECS.find((d) => d.id === id);
    if (!spec) return true;
    const wf = this.saveData.worldFlags;

    if (wf.openedDoors.includes(id) || wf.brokenBarriers.includes(id)) return true;
    if (spec.requiredFlag === 'stoneSentinelDefeated') return wf.defeatedBosses.includes('boss_stone_sentinel');
    if (spec.requiredFlag === 'axiomRescued') return wf.axiomRescued;
    if (spec.requiredFlag === 'arcaneScholarDefeated') return wf.defeatedBosses.includes('boss_arcane_scholar');
    if (spec.requiredFlag === 'keeperDefeated') return wf.defeatedBosses.includes('boss_keeper_equations');
    if (spec.requiredFlag === 'sealsInserted') return wf.sealsInserted;
    if (spec.requiredFlag === 'archivistDefeated') return wf.defeatedBosses.includes('boss_eternal_archivist');
    if (spec.requiredFlag === 'axiomSacrificed') return wf.axiomSacrificed;
    return false;
  }

  private getSolidCollisionBoxes(): BoxCollider[] {
    const boxes: BoxCollider[] = [...this.world.wallColliders];
    for (const [id, dv] of this.world.doors) {
      const top=dv.mesh.position.y+dv.closedY;
      if (!this.isDoorOpen(id) || top>.15) {
        boxes.push({...dv.collider,maxY:Math.max(.15,top)});
      }
    }
    return boxes;
  }

  private loop(nowMs: number): void {
    this.animationFrameId = requestAnimationFrame((t) => this.loop(t));
    const rawDt = Math.max(0, (nowMs - this.lastFrameMs) / 1000);
    this.lastFrameMs = nowMs;

    if (rawDt > 0.0001 && rawDt < 0.5) {
      this.fpsSamples.push(1 / rawDt);
      if (this.fpsSamples.length > 30) this.fpsSamples.shift();
      this.currentFps = this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length;
    }

    // Bounded catch-up prevents jump spikes after tab suspension
    const frameDt = Math.min(rawDt, SIMULATION_CONFIG.maxFrameDt);

    if (this.appState === 'playing' || this.appState === 'mechanism') {
      this.accumulator += frameDt;
      while (this.accumulator >= SIMULATION_CONFIG.fixedDt && (this.appState==='playing'||this.appState==='mechanism')) {
        this.fixedUpdate(SIMULATION_CONFIG.fixedDt);
        this.accumulator -= SIMULATION_CONFIG.fixedDt;
      }
      if(this.appState!=='playing' && this.appState!=='mechanism') this.accumulator=0;
      this.updateThirdPersonCamera(frameDt);
    } else if (this.appState === 'paused') {
      this.handlePausedInput();
    } else if (this.appState === 'dialogue') {
      this.handleDialogueInput();
    } else if(this.appState === 'main_menu') {
      const t=this.settings.reducedMotion?0:nowMs*.001;
      this.world.player.root.position.set(1.55,0,1.05);this.world.player.root.rotation.y=Math.PI+.42;this.world.player.root.scale.setScalar(1.22);
      animateCharacter(this.world.player.root.userData.rig,t,0,'idle',0,this.settings.reducedMotion);
      this.camera.position.set(3.85+Math.sin(t*.13)*.12,2.15,4.75);this.camera.lookAt(0.05,1.65,-2.4);
      this.world.updateAtmosphere(0,0,t);
      this.inputManager.beginSimulationFrame();
      if(this.inputManager.isPressed('pause')) this.ui.closeSubmodals();
    } else if (this.appState === 'ending') {
      const t = this.settings.reducedMotion ? 0 : nowMs * 0.001;
      const heroRig = this.world.endingProtagonistGroup.children[0]?.userData.rig;
      const studentRig = this.world.endingStudentGroup.children[0]?.userData.rig;
      if (heroRig) animateCharacter(heroRig, t, 0, 'idle', 0, this.settings.reducedMotion);
      if (studentRig) animateCharacter(studentRig, t + 1.1, 0, 'idle', 0, this.settings.reducedMotion);
    }

    this.renderer.render(this.scene, this.camera);
  }

  private handlePausedInput(): void {
    this.inputManager.beginSimulationFrame();
    if (this.settingsUI.isOpen()) return;
    if (this.inputManager.isPressed('pause')) {
      if (this.ui.isPauseSubmodalOpen()) {
        this.ui.closeSubmodals();
      } else {
        this.resumeGame();
      }
    }
  }

  private handleDialogueInput(): void {
    this.inputManager.beginSimulationFrame();
    if (this.inputManager.isPressed('interact') || this.inputManager.isPressed('pause')) {
      this.advanceDialogue();
    }
  }

  private fixedUpdate(dt: number): void {
    this.inputManager.beginSimulationFrame();

    if (this.appState === 'mechanism') {
      this.mechanismTime += dt;
      this.mechanismUI.stepSimulation(dt);
      this.syncVisualsFromState();
      return;
    }

    // Pause check
    if (this.inputManager.isPressed('pause')) {
      if (this.ui.isInventoryOpen()) {
        this.ui.toggleInventory(this.saveData);
      } else {
        this.pauseGame();
        return;
      }
    }

    // Inventory & Map toggles
    if (this.inputManager.isPressed('inventory')) {
      this.pauseGame();this.ui.openInventoryModal(this.saveData);return;
    }
    if (this.inputManager.isPressed('map')) {
      this.ui.toggleMinimap();
    }
    if (this.inputManager.isPressed('usePotion')) {
      this.tryUsePotion();
    }

    if (this.ui.isInventoryOpen()) {
      return;
    }

    this.simTime += dt;

    // Camera yaw/pitch from mouse or touch
    const look = this.inputManager.consumeLookDelta();
    const touchLook=this.inputManager.getActiveInterfaceMode()==='touch';
    const hSens = 0.0024 * (touchLook?1:this.settings.desktop.horizontalSensitivity);
    const vSens = 0.002 * (touchLook?1:this.settings.desktop.verticalSensitivity * (this.settings.desktop.invertY ? -1 : 1));
    this.saveData.player.yaw -= look.dx * hSens;
    this.playerPitch = Math.max(
      PLAYER_CONFIG.cameraMinPitch,
      Math.min(PLAYER_CONFIG.cameraMaxPitch, this.playerPitch + look.dy * vSens)
    );

    const solidBoxes = this.getSolidCollisionBoxes();

    // Movement & Dodge
    const axes = this.inputManager.getMovementAxes();
    const isMoving = Math.hypot(axes.x, axes.z) > 0.05;

    const fwdX = -Math.sin(this.saveData.player.yaw);
    const fwdZ = -Math.cos(this.saveData.player.yaw);
    const rightX = Math.cos(this.saveData.player.yaw);
    const rightZ = -Math.sin(this.saveData.player.yaw);

    const wishX = fwdX * axes.z + rightX * axes.x;
    const wishZ = fwdZ * axes.z + rightZ * axes.x;

    if (this.inputManager.isPressed('dodge')) {
      const dX = isMoving ? wishX : fwdX;
      const dZ = isMoving ? wishZ : fwdZ;
      if (this.combat.tryStartDodge(dX, dZ)) {
        this.sound.playDodge();
      }
    }

    // Sword Attack (single press OR hold-to-repeat)
    const attackTriggered = this.settings.desktop.holdToRepeatAttack
      ? this.inputManager.isHeld('attack')
      : this.inputManager.isPressed('attack');

    if (attackTriggered && this.combat.tryStartAttack()) {
      this.sound.playSwordSwing();
    }

    let moveVelX = 0;
    let moveVelZ = 0;
    if (this.combat.isDodging()) {
      moveVelX = this.combat.dodgeDirX * PLAYER_CONFIG.dodgeSpeed;
      moveVelZ = this.combat.dodgeDirZ * PLAYER_CONFIG.dodgeSpeed;
    } else if (isMoving) {
      const sprintMult = this.inputManager.isSprintingActive(isMoving) ? PLAYER_CONFIG.sprintMultiplier : 1.0;
      const speed = PLAYER_CONFIG.walkSpeed * sprintMult;
      moveVelX = wishX * speed;
      moveVelZ = wishZ * speed;
      this.walkBobTime += dt * (sprintMult > 1 ? 13 : 9);
    }

    this.playerSpeed=Math.hypot(moveVelX,moveVelZ);
    const nextPX = this.saveData.player.x + moveVelX * dt;
    const nextPZ = this.saveData.player.z + moveVelZ * dt;
    const resolvedP = resolveCircleXZAgainstBoxes(
      nextPX,
      nextPZ,
      PLAYER_CONFIG.radius,
      solidBoxes,
      0,
      PLAYER_CONFIG.height
    );
    this.saveData.player.x = resolvedP.x;
    this.saveData.player.z = resolvedP.z;

    // Step sword active hit detection
    const combatTargets = this.enemies.map((e) => ({
      id: e.id,
      x: e.x,
      z: e.z,
      radius: e.config.radius,
      alive: e.state !== 'dead',
      shielded: e.shielded,
    }));
    const swordHits = this.combat.step(
      dt,
      { x: this.saveData.player.x, z: this.saveData.player.z, yaw: this.saveData.player.yaw },
      combatTargets,
      solidBoxes
    );

    for (const hit of swordHits) {
      const enemy = this.enemies.find((e) => e.id === hit.targetId);
      if (!enemy) continue;
      if (hit.blockedByShield) {
        this.sound.playShieldDeflect();
        this.ui.showToast('Shielded! Stabilize the nearby arcane pylon to break the shield.');
      } else {
        const res = damageEnemy(enemy, COMBAT_CONFIG.swordDamage);
        if (res.hit) {this.sound.playSwordHit(this.soundPan(enemy.x,enemy.z));this.impactTime=this.simTime;}
        if (res.phase2Triggered) {
          this.archivistMotionStart=this.simTime;
          this.ui.showToast('The ancient clock awakens. Watch its first sweep, then align the eastern crystals.');
        }
        if (res.defeated) {
          this.handleEnemyDefeated(enemy);
        }
      }
    }

    // Step Harmonic Traps with sub-stepping for high-speed reliability
    const trapSubDt = dt / SIMULATION_CONFIG.trapStepSubdivisions;
    for (let s = 0; s < SIMULATION_CONFIG.trapStepSubdivisions; s++) {
      const tStep = this.simTime - dt + (s + 1) * trapSubDt;
      for (const spec of TRAP_SPECS) {
        const model = this.trapModels.get(spec.id)!;
        const anchor = TRAP_ANCHORS[spec.id];
        const isFinal=spec.id==='trap_archivist_clock';
        if(isFinal && (this.archivistMotionStart===null || this.saveData.worldFlags.defeatedBosses.includes('boss_eternal_archivist'))) continue;
        const trapTime=isFinal?tStep-this.archivistMotionStart!:tStep;
        const kine = model.evaluate(trapTime);
        const direction=Math.sign(kine.velocity);
        const dist=Math.hypot(anchor.x-this.saveData.player.x,anchor.z-this.saveData.player.z);
        if(direction!==this.trapDirections.get(spec.id) && this.trapDirections.has(spec.id) && dist<14) this.sound.playTrapTurn(this.soundPan(anchor.x+kine.position,anchor.z),dist);
        this.trapDirections.set(spec.id,direction);
        const currX = anchor.x + (spec.axis === 'x' ? kine.position : 0);
        const currZ = anchor.z + (spec.axis === 'z' ? kine.position : 0);
        const prev = this.trapPrevPos.get(spec.id)!;

        if (
          (!isFinal || trapTime>4.2) && !this.combat.isPlayerInvulnerable() &&
          sweptBoxIntersectsCircleXZ(
            prev.x,
            prev.z,
            currX,
            currZ,
            spec.halfExtents.x,
            spec.halfExtents.z,
            this.saveData.player.x,
            this.saveData.player.z,
            PLAYER_CONFIG.radius
          )
        ) {
          this.applyPlayerDamage(spec.damage);
        }

        prev.x = currX;
        prev.z = currZ;
      }
    }

    // Step Enemies (with acceleration steering)
    const enemyEvents = stepEnemies(
      this.enemies,
      { x: this.saveData.player.x, z: this.saveData.player.z, radius: PLAYER_CONFIG.radius },
      solidBoxes,
      dt
    );
    for(const id of enemyEvents.telegraphedIds) {
      const enemy=this.enemies.find(e=>e.id===id)!;
      const distance=Math.hypot(enemy.x-this.saveData.player.x,enemy.z-this.saveData.player.z);
      if(distance<22) this.sound.playEnemyTelegraph(this.soundPan(enemy.x,enemy.z),distance);
    }
    for (const dmgEv of enemyEvents.playerDamageEvents) {
      if (!this.combat.isPlayerInvulnerable()) {
        this.applyPlayerDamage(dmgEv.damage);
      }
    }
    for (const pylonId of enemyEvents.shieldReactivatedPylonIds) {
      this.energyModels.get(pylonId)?.resetForRetry();
      this.optModels.get(pylonId)?.resetForRetry();
      this.ui.showToast('Boss shield regenerated! Stabilize the pylon again.');
    }

    // Step Companions
    const compRes = stepCompanions(this.companionState, {
      dt,
      playerX: this.saveData.player.x,
      playerZ: this.saveData.player.z,
      playerYaw: this.saveData.player.yaw,
      axiomRescued: this.saveData.worldFlags.axiomRescued,
      axiomSacrificed: this.saveData.worldFlags.axiomSacrificed,
      studentRescued: this.saveData.worldFlags.studentChoice === 'helped',
    });
    if (compRes.dangerHint && this.settings.companionHints) {
      this.ui.showToast(compRes.dangerHint);
    }

    // Region & Checkpoint tracking
    this.updateCheckpointsAndTriggers();

    // Nearby Interactables
    this.nearbyInteractable = this.findNearestInteractable();
    if (this.inputManager.isPressed('interact') && this.nearbyInteractable) {
      this.triggerInteraction(this.nearbyInteractable);
    }

    this.syncVisualsFromState();
    this.updateHUDDisplay();
  }

  private applyPlayerDamage(amount: number): void {
    this.combat.playerHitInvulnTimer = COMBAT_CONFIG.playerHitInvulnSec;
    this.saveData.player.hp = Math.max(0, this.saveData.player.hp - amount);
    this.sound.playPlayerHurt();

    if (this.saveData.player.hp <= 0) {
      this.appState = 'game_over';
      this.inputManager.setContext('menu');
      this.touchUI.setVisible(false);
      this.ui.showGameOver();
    }
  }

  private soundPan(x:number,z:number):number {
    const dx=x-this.saveData.player.x,dz=z-this.saveData.player.z;
    return Math.max(-1,Math.min(1,(dx*Math.cos(this.saveData.player.yaw)-dz*Math.sin(this.saveData.player.yaw))/Math.max(2,Math.hypot(dx,dz))));
  }

  private tryUsePotion(): void {
    if (this.saveData.inventory.potions <= 0 || this.saveData.player.hp >= PLAYER_CONFIG.maxHp) {
      return;
    }
    this.saveData.inventory.potions -= 1;
    this.saveData.player.hp = Math.min(PLAYER_CONFIG.maxHp, this.saveData.player.hp + PLAYER_CONFIG.potionHealAmount);
    this.sound.playPotion();
    this.ui.showToast(`Used Health Potion (+${PLAYER_CONFIG.potionHealAmount} HP).`);
  }

  private handleEnemyDefeated(enemy: EnemyInstance): void {
    if (enemy.config.isBoss) {
      if (!this.saveData.worldFlags.defeatedBosses.includes(enemy.id)) {
        this.saveData.worldFlags.defeatedBosses.push(enemy.id);
      }
      if (enemy.spec.dropsSeal && !this.saveData.inventory.seals.includes(enemy.spec.dropsSeal.id)) {
        this.saveData.inventory.seals.push(enemy.spec.dropsSeal.id);
        this.sound.playSealCollected();
        this.ui.showToast(`Obtained ${enemy.spec.dropsSeal.name}!`);
      }
      if (enemy.id === 'boss_eternal_archivist') {
        this.saveData.checkpointId = 'archivist_antechamber';
        this.persistence.saveGame(this.saveData);
        this.startDialogue([
          { speaker: 'The Eternal Archivist', text: 'The wards fall silent... My watch is ended.' },
          { speaker: 'Axiom', text: 'Listen! Someone is calling for help from the newly opened West Chamber!' },
        ], false);
      } else {
        this.persistence.saveGame(this.saveData);
      }
    } else {
      if (!this.saveData.worldFlags.defeatedEnemies.includes(enemy.id)) {
        this.saveData.worldFlags.defeatedEnemies.push(enemy.id);
      }
    }
  }

  private updateCheckpointsAndTriggers(): void {
    const pz = this.saveData.player.z;
    for (const cp of CHECKPOINTS) {
      if (pz >= cp.minZ && pz <= cp.maxZ) {
        this.saveData.currentRegionId = cp.region;
        if (this.saveData.checkpointId !== cp.id) {
          this.saveData.checkpointId = cp.id;
          this.persistence.saveGame(this.saveData);
        }
      }
    }

    // Trigger Ending upon walking past open Final Exit Gateway (z <= -175.5)
    if (this.saveData.worldFlags.axiomSacrificed && pz <= -175.5) {
      const endingType: 'good' | 'bad' = this.saveData.worldFlags.studentChoice === 'helped' ? 'good' : 'bad';
      this.enterEndingScene(endingType);
    }
  }

  private findNearestInteractable(): InteractableTarget | null {
    const px = this.saveData.player.x;
    const pz = this.saveData.player.z;
    let best: InteractableTarget | null = null;
    let bestDist: number = PLAYER_CONFIG.interactRadius;

    const consider = (cand: InteractableTarget) => {
      const d = Math.hypot(cand.x - px, cand.z - pz);
      const boxes=this.world.wallColliders;
      if (d <= bestDist && hasLineOfSight3D(px,1.2,pz,cand.x,1.2,cand.z,boxes)) {
        bestDist = d;
        best = cand;
      }
    };

    // Tablets
    for (const tab of TABLET_SPECS) {
      consider({ kind: 'tablet', id: tab.id, label: 'read Ancient Tablet', x: tab.x, z: tab.z });
    }

    // Unopened Chests
    for (const ch of CHEST_SPECS) {
      if (this.saveData.worldFlags.openedChests.includes(ch.id)) continue;
      if (ch.kind === 'greedyGold' && this.saveData.worldFlags.studentChoice !== null) continue;
      consider({ kind: 'chest', id: ch.id, label: `open ${ch.label}`, x: ch.x, z: ch.z });
    }

    // Closed Doors
    for (const d of DOOR_SPECS) {
      if (this.isDoorOpen(d.id)) continue;
      if (d.kind === 'energy' || d.kind === 'progression' || d.kind === 'sealGate' || d.kind === 'finalExit') {
        consider({ kind: 'door', id: d.id, label: `inspect ${d.label}`, x: d.x, z: d.z });
      }
    }

    // Active Stabilization Pylons
    for (const p of PYLON_SPECS) {
      if (p.kind === 'axiomCage' && this.saveData.worldFlags.axiomRescued) continue;
      if (p.kind === 'barrierControl' && this.saveData.worldFlags.brokenBarriers.includes(p.targetId)) continue;
      if (p.kind === 'studentCage' && this.saveData.worldFlags.studentChoice !== null) continue;
      if (p.kind === 'bossShield1D' || p.kind === 'bossShield2D') {
        const boss = this.enemies.find((e) => e.id === p.targetId);
        if (!boss || boss.state === 'dead' || !boss.shielded || boss.activeShieldPylonId !== p.id) continue;
      }
      consider({ kind: 'pylon', id: p.id, label: `stabilize ${p.label}`, x: p.x, z: p.z });
    }

    // Three-Seal Pedestal
    if (!this.saveData.worldFlags.sealsInserted) {
      consider({ kind: 'pedestal', id: 'pedestal_three_seals', label: 'insert Ancient Seals', x: 0, z: -136.2 });
    }

    // Trapped Student (before decision)
    if (this.saveData.worldFlags.studentChoice === null && this.saveData.worldFlags.defeatedBosses.includes('boss_eternal_archivist')) {
      consider({ kind: 'student', id: 'npc_trapped_student', label: 'speak with Trapped Student', x: -20, z: -150 });
    }

    // Final Exit Lever
    if (!this.saveData.worldFlags.axiomSacrificed && this.saveData.worldFlags.defeatedBosses.includes('boss_eternal_archivist')) {
      consider({ kind: 'lever', id: 'mech_exit_lever', label: 'activate Exit Binding Lever', x: -2, z: -171 });
    }

    return best;
  }

  private triggerInteraction(target: InteractableTarget): void {
    if (target.kind === 'tablet') {
      const tab = TABLET_SPECS.find((t) => t.id === target.id)!;
      this.startDialogue(
        tab.lines.map((line) => ({ speaker: tab.title, text: line })),
        false
      );
    } else if (target.kind === 'door') {
      const spec = DOOR_SPECS.find((d) => d.id === target.id)!;
      if (spec.kind === 'energy') {
        const model = this.energyModels.get(spec.id)!;
        this.openMechanism('1d', spec.id, spec.label, 'Turn the seal until the current settles. Hold it steady to open the gate.', model, () => {
          if (!this.saveData.worldFlags.openedDoors.includes(spec.id)) {
            this.saveData.worldFlags.openedDoors.push(spec.id);
          }
          this.persistence.saveGame(this.saveData);
          this.ui.showToast(`${spec.label} stabilized and unlocked!`);
        });
      } else if (spec.requiredFlag === 'axiomRescued') {
        this.ui.showToast('The Sanctum Gate stays sealed until Axiom is rescued in the West Library Wing!');
      } else if (spec.requiredFlag === 'sealsInserted') {
        this.ui.showToast('Use the Three-Seal Pedestal right in front of the gate!');
      } else if (spec.requiredFlag === 'axiomSacrificed') {
        this.ui.showToast('Pull the Exit Binding Lever beside the gate to open the exit!');
      } else {
        this.ui.showToast('Defeat the regional guardian to unseal this gate.');
      }
    } else if (target.kind === 'chest') {
      const spec = CHEST_SPECS.find((c) => c.id === target.id)!;
      if (spec.kind === 'standard') {
        this.awardChestOnce(spec.id, spec.rewards.potions, spec.rewards.keys, false);
      } else if (spec.kind === 'optimization') {
        const model = this.optModels.get(spec.id)!;
        this.openMechanism(
          '2d',
          spec.id,
          spec.label,
          'Bring both crystals into harmony. Follow the currents until they settle.',
          model,
          () => {
            this.awardChestOnce(spec.id, spec.rewards.potions, spec.rewards.keys, false);
          }
        );
      } else if (spec.kind === 'greedyGold') {
        this.handleStudentDecision('left');
      }
    } else if (target.kind === 'pylon') {
      const spec = PYLON_SPECS.find((p) => p.id === target.id)!;
      if (spec.kind === 'studentCage') {
        // Trigger choice modal if player touches device before choosing
        this.openStudentDecision();
        return;
      }
      if (spec.energyConfig) {
        const model = this.energyModels.get(spec.id)!;
        this.openMechanism('1d', spec.id, spec.label, 'Steady the current until the bronze ring closes.', model, () => {
          this.handlePylonSolved(spec.id);
        });
      } else if (spec.optConfig) {
        const model = this.optModels.get(spec.id)!;
        this.openMechanism('2d', spec.id, spec.label, 'Align both crystals to weaken the barrier.', model, () => {
          this.handlePylonSolved(spec.id);
        });
      }
    } else if (target.kind === 'pedestal') {
      if (this.saveData.inventory.seals.length >= 3) {
        this.saveData.worldFlags.sealsInserted = true;
        this.sound.playSealCollected();
        this.persistence.saveGame(this.saveData);
        this.startDialogue([
          { speaker: 'Axiom', text: 'All Three Ancient Seals resonate in harmony! The Grand Sanctum opens—prepare to face the Eternal Archivist!' },
        ], false);
      } else {
        this.ui.showToast(`Requires all 3 Ancient Seals (${this.saveData.inventory.seals.length}/3 collected).`);
      }
    } else if (target.kind === 'student') {
      this.openStudentDecision();
    } else if (target.kind === 'lever') {
      if (this.saveData.worldFlags.studentChoice === null) {
        this.ui.showToast('Axiom: "Wait! Check the West Hidden Chamber first—someone is trapped inside!"');
        return;
      }
      this.triggerAxiomSacrificeCinematic();
    }
  }

  private awardChestOnce(chestId: string, potions: number, keys: number, goldRelic: boolean): void {
    if (this.saveData.worldFlags.openedChests.includes(chestId)) return;
    this.saveData.worldFlags.openedChests.push(chestId);
    this.saveData.inventory.potions += potions;
    this.saveData.inventory.keys += keys;
    if (goldRelic) this.saveData.inventory.goldRelicLooted = true;
    this.sound.playPotion();
    this.persistence.saveGame(this.saveData);
    this.ui.showToast(`Chest opened! +${potions} Potion(s), +${keys} Key(s).`);
  }

  private handlePylonSolved(pylonId: string): void {
    const spec = PYLON_SPECS.find((p) => p.id === pylonId)!;
    if (spec.kind === 'axiomCage') {
      this.saveData.worldFlags.axiomRescued = true;
      this.persistence.saveGame(this.saveData);
      this.startDialogue([
        { speaker: 'Axiom', text: 'Free at last! Thank you, traveler. I am Axiom, guide of these chambers.' },
        { speaker: 'Axiom', text: 'The Sanctum Gate ahead is open now. Beware the Arcane Scholar—watch for its telegraphed strikes!' },
      ], false);
    } else if (spec.kind === 'barrierControl') {
      if (!this.saveData.worldFlags.brokenBarriers.includes(spec.targetId)) {
        this.saveData.worldFlags.brokenBarriers.push(spec.targetId);
      }
      this.persistence.saveGame(this.saveData);
      this.ui.showToast('Abyssal Barrier collapsed! Path across the bridge is clear.');
    } else if (spec.kind === 'bossShield1D' || spec.kind === 'bossShield2D') {
      const boss = this.enemies.find((e) => e.id === spec.targetId);
      if (boss) {
        openBossVulnerability(boss);
        this.ui.showToast(`${boss.config.name}'s shield shattered! Strike now!`);
      }
    }
  }

  private openMechanism(
    kind: '1d' | '2d',
    id: string,
    title: string,
    subtitle: string,
    model: EnergyStabilizerModel | OptimizationChestModel,
    onSolved: () => void
  ): void {
    this.appState = 'mechanism';
    this.inputManager.setContext('mechanism');
    this.touchUI.setVisible(false);

    const doorSpec = DOOR_SPECS.find((d) => d.id === id);
    const chestSpec = CHEST_SPECS.find((c) => c.id === id);
    const pylonId = id === 'mech_student_rescue' ? 'pylon_student_cage' : id;
    const pylonSpec = PYLON_SPECS.find((p) => p.id === pylonId);
    this.activeMechanismTarget = doorSpec
      ? { x: doorSpec.x, y: 1.85, z: doorSpec.z, orientation: doorSpec.orientation }
      : chestSpec
        ? { x: chestSpec.x, y: 0.72, z: chestSpec.z }
        : pylonSpec
          ? { x: pylonSpec.x, y: 1.45, z: pylonSpec.z }
          : null;

    if (kind === '1d') {
      this.mechanismUI.open(
        { kind: '1d', id, title, subtitle, model: model as EnergyStabilizerModel, onSolved },
        () => this.onMechanismClosed()
      );
    } else {
      this.mechanismUI.open(
        { kind: '2d', id, title, subtitle, model: model as OptimizationChestModel, onSolved },
        () => this.onMechanismClosed()
      );
    }
  }

  private onMechanismClosed(): void {
    this.activeMechanismTarget = null;
    if (this.appState === 'mechanism') {
      this.appState = 'playing';
      this.inputManager.setContext('gameplay');
      this.syncInterfaceModeVisibility();
    }
  }

  private openStudentDecision(): void {
    if(this.saveData.worldFlags.studentChoice!==null) {this.ui.showToast("The exit awaits to the north.");return;}
    this.appState = 'decision';
    this.inputManager.setContext('menu');
    this.touchUI.setVisible(false);
    this.ui.showDecisionModal();
  }

  private handleStudentDecision(choice: 'helped' | 'left'): void {
    if(this.saveData.worldFlags.studentChoice!==null) {this.ui.showToast('Your choice has been made. The way out is north.');return;}
    if(!this.saveData.worldFlags.defeatedBosses.includes('boss_eternal_archivist')) return;
    if (choice === 'helped') {
      const model = this.optModels.get('mech_student_rescue')!;
      this.openMechanism(
        '2d',
        'mech_student_rescue',
        'Student Containment Lock',
        'Balance both crystals to collapse the prison field and save the student.',
        model,
        () => {
          this.saveData.worldFlags.studentChoice = 'helped';
          this.persistence.saveGame(this.saveData);
          this.startDialogue([
            { speaker: 'Trapped Student', text: 'The barrier is gone! I thought I would never escape—thank you! Let us head to the exit together!' },
            { speaker: 'Axiom', text: 'You chose compassion over treasure. Let us walk to the surface gateway north of the arena.' },
          ], false);
        }
      );
    } else {
      this.saveData.worldFlags.studentChoice = 'left';
      this.saveData.inventory.goldRelicLooted = true;
      if (!this.saveData.worldFlags.openedChests.includes('chest_greedy_gold')) {
        this.saveData.worldFlags.openedChests.push('chest_greedy_gold');
      }
      this.sound.playPotion();
      this.persistence.saveGame(this.saveData);
      this.startDialogue([
        { speaker: 'Trapped Student', text: 'Wait—please do not leave me trapped here! I only needed a little help...' },
        { speaker: 'Axiom', text: 'We came so far through knowledge... yet you abandoned someone in need for gold.' },
      ], false);
    }
  }

  private triggerAxiomSacrificeCinematic(): void {
    const lines: DialogueLine[] = [
      { speaker: 'Axiom', text: 'Look closely at the binding lever. It must stay pressed down continuously or the exit seals shut.' },
      { speaker: 'Protagonist', text: 'Then how can we all pass through?' },
      { speaker: 'Axiom', text: 'Someone must remain behind to hold it. You solved every trial—now allow me to solve the last one.' },
      { speaker: 'Axiom', text: 'Remember: knowledge opens doors, but our choices decide who walks through them. Go!' },
    ];
    this.startDialogue(lines, true, () => {
      this.saveData.worldFlags.axiomSacrificed = true;
      this.sound.playMechanismSolved();
      this.persistence.saveGame(this.saveData);
      this.ui.showToast('Axiom holds the lever! Walk north through the Grand Exit Gateway.');
    });
  }

  private startDialogue(lines: DialogueLine[], skippable: boolean, onComplete?: () => void): void {
    this.activeCinematic = {
      lines: [...lines],
      skippable,
      onComplete: onComplete ?? (() => {}),
    };
    this.appState = 'dialogue';
    this.inputManager.setContext('menu');
    this.touchUI.setVisible(false);
    this.advanceDialogue();
  }

  private advanceDialogue(): void {
    if (!this.activeCinematic) return;
    const next = this.activeCinematic.lines.shift();
    if (next) {
      this.ui.showDialogue(next.speaker, next.text, this.activeCinematic.skippable);
      this.sound.playUiClick();
    } else {
      this.finishDialogue();
    }
  }

  private skipActiveCinematic(): void {
    if (!this.activeCinematic) return;
    this.finishDialogue();
  }

  private finishDialogue(): void {
    const cin = this.activeCinematic;
    this.activeCinematic = null;
    this.ui.hideDialogue();
    this.appState = 'playing';
    this.inputManager.setContext('gameplay');
    this.syncInterfaceModeVisibility();
    cin?.onComplete();
  }

  private enterEndingScene(type: 'good' | 'bad'): void {
    this.saveData.worldFlags.endingReached = type;
    this.persistence.saveGame(this.saveData);

    this.appState = 'ending';
    this.activeMechanismTarget = null;
    this.inputManager.setContext('menu');
    this.touchUI.setVisible(false);

    this.world.dungeonRoot.visible = false;
    this.world.endingRoot.visible = true;
    this.camera.far = 260;
    this.camera.updateProjectionMatrix();

    if (type === 'good') {
      this.world.endingSkyMat.color.setHex(0xffffff);
      this.world.endingSunLight.color.setHex(0xffdf99);
      this.world.endingStudentGroup.visible = true;
      this.scene.fog = new THREE.Fog(0xa39c8c, 32, 130);
    } else {
      this.world.endingSkyMat.color.setHex(0xa7434c);
      this.world.endingSunLight.color.setHex(0xef4444);
      this.world.endingStudentGroup.visible = false;
      this.scene.fog = new THREE.Fog(0x450a0a, 24, 110);
    }

    this.camera.position.set(0, 2.35, 6.4);
    this.camera.lookAt(0, 2.55, -28);
    this.ui.showEnding(type);
  }

  private toggleInventory(): void {
    this.pauseGame();
    this.ui.openInventoryModal(this.saveData);
  }

  private updateThirdPersonCamera(dt: number): void {
    const px = this.saveData.player.x;
    const pz = this.saveData.player.z;
    const yaw = this.saveData.player.yaw;

    if (this.appState === 'mechanism' && this.activeMechanismTarget) {
      const T = this.activeMechanismTarget;
      const solidBoxes = this.getSolidCollisionBoxes();
      let dx = px - T.x;
      let dz = pz - T.z;
      if (T.orientation === 'z-axis') {
        dx = px <= T.x ? -1 : 1;
        dz = 0;
      } else if (T.orientation === 'x-axis') {
        dx = 0;
        dz = pz >= T.z ? 1 : -1;
      } else {
        const dist2 = Math.hypot(dx, dz);
        if (dist2 < 0.05) {
          dx = Math.sin(yaw);
          dz = Math.cos(yaw);
        } else {
          dx /= dist2;
          dz /= dist2;
        }
      }
      const rightX = dz;
      const rightZ = -dx;
      const desiredDist = T.orientation ? 3.55 : 3.25;
      const sideShift = T.orientation ? 0.65 : -1.05;
      const offX = dx * desiredDist + rightX * sideShift;
      const offZ = dz * desiredDist + rightZ * sideShift;
      const dirLen = Math.hypot(offX, offZ);
      const rayX = offX / dirLen;
      const rayZ = offZ / dirLen;
      const startX = T.x + dx * (T.orientation ? 0.75 : 0.3);
      const startZ = T.z + dz * (T.orientation ? 0.75 : 0.3);
      const startY = T.y + (T.orientation ? 0.15 : 0.85);
      const slopeY = T.orientation ? 0.08 : 0.24;
      const hit = raycastAgainstBoxes(startX, startY, startZ, rayX, slopeY, rayZ, dirLen + 0.3, solidBoxes);
      const safeDist = hit !== null ? Math.max(1.4, hit - 0.35) : dirLen;
      this.camera.position.set(
        startX + rayX * safeDist,
        Math.max(1.35, startY + safeDist * slopeY),
        startZ + rayZ * safeDist
      );
      this.camera.lookAt(T.x + rightX * 0.92, T.y - 0.05, T.z + rightZ * 0.92);
      return;
    }

    const solidBoxes = this.getSolidCollisionBoxes();
    const rightX = Math.cos(yaw);
    const rightZ = -Math.sin(yaw);

    // Check shoulder offset collision so pivot never clips into walls
    const baseEyeX = px;
    const baseEyeY = PLAYER_CONFIG.cameraShoulderHeight;
    const baseEyeZ = pz;
    const shoulderHit = raycastAgainstBoxes(
      baseEyeX,
      baseEyeY,
      baseEyeZ,
      rightX,
      0,
      rightZ,
      PLAYER_CONFIG.cameraShoulderOffset + PLAYER_CONFIG.cameraWallPadding,
      solidBoxes
    );
    const safeOffset = shoulderHit !== null ? Math.max(0.1, shoulderHit - PLAYER_CONFIG.cameraWallPadding) : PLAYER_CONFIG.cameraShoulderOffset;
    const pivotX = baseEyeX + rightX * safeOffset;
    const pivotY = baseEyeY;
    const pivotZ = baseEyeZ + rightZ * safeOffset;

    // Camera backward ray direction from yaw & pitch
    const cosPitch = Math.cos(this.playerPitch);
    const dirX = Math.sin(yaw) * cosPitch;
    const dirY = Math.sin(this.playerPitch);
    const dirZ = Math.cos(yaw) * cosPitch;

    const camHit = raycastAgainstBoxes(
      pivotX,
      pivotY,
      pivotZ,
      dirX,
      dirY,
      dirZ,
      PLAYER_CONFIG.cameraDefaultDistance + PLAYER_CONFIG.cameraWallPadding,
      solidBoxes
    );
    const targetDist =
      camHit !== null
        ? Math.max(0.55, camHit - PLAYER_CONFIG.cameraWallPadding)
        : PLAYER_CONFIG.cameraDefaultDistance;

    // Pull in immediately on collision; relax smoothly outward
    if (targetDist < this.currentCamDist) {
      this.currentCamDist = targetDist;
    } else {
      this.currentCamDist += (targetDist - this.currentCamDist) * (1-Math.exp(-12*dt));
    }

    this.camera.position.set(
      pivotX + dirX * this.currentCamDist,
      Math.max(0.45, pivotY + dirY * this.currentCamDist),
      pivotZ + dirZ * this.currentCamDist
    );
    this.camera.lookAt(
      pivotX - Math.sin(yaw) * 4,
      pivotY - Math.sin(this.playerPitch) * 2.2,
      pivotZ - Math.cos(yaw) * 4
    );
  }

  private syncVisualsFromState(): void {
    // Player
    this.world.player.root.scale.setScalar(1);
    this.world.updateAtmosphere(this.saveData.player.x,this.saveData.player.z,this.simTime);
    this.world.player.root.position.set(this.saveData.player.x, 0, this.saveData.player.z);
    this.world.player.root.rotation.y = this.saveData.player.yaw;
    animateCharacter(this.world.player.root.userData.rig,this.simTime,this.playerSpeed,
      this.saveData.player.hp<=0?'dead':this.combat.isDodging()?'dodge':this.combat.playerHitInvulnTimer>.45?'stagger':this.combat.swordPhase==='active'?'attack':this.combat.swordPhase,
      this.combat.getSwordSwingAngle(),this.settings.reducedMotion);
    // Restrained physical hit flash on the blade; no oversized wireframe slash.
    this.world.player.swordPivot.scale.setScalar(this.simTime-this.impactTime<.08?1.035:1);

    // Doors
    for (const [id, dv] of this.world.doors) {
      const open = this.isDoorOpen(id);
      const targetY = open ? dv.openY : dv.closedY;
      dv.mesh.position.y += (targetY - dv.mesh.position.y) * 0.15;
      const model=this.energyModels.get(id);
      if(model){const state=model.evaluateStatic();dv.mesh.traverse(o=>{if(o.name==='dialRotor'){o.rotation.z=model.x*Math.PI*2;o.rotation.x=Math.sin((this.simTime+this.mechanismTime)*8)*(1-state.closeness)*.12;}});}
    }

    // Chests
    for (const [id, cv] of this.world.chests) {
      const opened = this.saveData.worldFlags.openedChests.includes(id);
      cv.lidPivot.rotation.x = opened ? -1.45 : 0;
      cv.glowMesh.visible = !opened;
    }

    // Pylons
    for (const [id, pv] of this.world.pylons) {
      const m1 = this.energyModels.get(id);
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

    }

    // Traps
    for (const spec of TRAP_SPECS) {
      const tv = this.world.traps.get(spec.id);
      const isFinal=spec.id==='trap_archivist_clock';
      const active=!isFinal || (this.archivistMotionStart!==null && !this.saveData.worldFlags.defeatedBosses.includes('boss_eternal_archivist'));
      if(tv) tv.root.visible=active;
      const kine = this.trapModels.get(spec.id)?.evaluate(isFinal?this.simTime-(this.archivistMotionStart??this.simTime):this.simTime);
      if (tv && kine) {
        tv.bladeGroup.position.x = spec.axis === 'x' ? kine.position : 0;
        tv.bladeGroup.position.z = spec.axis === 'z' ? kine.position : 0;
      }
    }

    // Enemies
    for (const e of this.enemies) {
      const ev = this.world.enemies.get(e.id);
      if (!ev) continue;
      if(e.state==='dead') {
        ev.root.userData.deathAt ??= this.simTime;
        ev.root.visible=this.simTime>0&&this.simTime-ev.root.userData.deathAt<1.1;
        ev.shieldSphere.visible=false;ev.telegraphRing.visible=false;ev.hpBarBg.visible=false;ev.hpBarFill.visible=false;
        animateCharacter(ev.root.userData.rig,this.simTime,0,'dead');continue;
      }
      ev.root.visible=true;delete ev.root.userData.deathAt;
      ev.root.position.set(e.x, 0, e.z);
      ev.root.rotation.y = e.yaw;
      ev.shieldSphere.visible = e.shielded;
      ev.shieldSphere.rotation.y=this.simTime*.3;
      animateCharacter(ev.root.userData.rig,this.simTime,Math.hypot(e.vx,e.vz),e.state,e.state==="attack"?1-e.stateTimer*6:0,this.settings.reducedMotion);
      ev.telegraphRing.visible = e.state === 'windup';
      ev.telegraphRing.scale.setScalar(.6+.4*(1-e.stateTimer/e.config.windupSec));
      ev.hpBarBg.visible=ev.hpBarFill.visible=e.hp<e.maxHp&&Math.hypot(e.x-this.saveData.player.x,e.z-this.saveData.player.z)<12;

      const mat = ev.bodyMesh.material as THREE.MeshStandardMaterial;
      mat.emissive.setHex(e.hitFlashTimer > 0 ? 0xffffff : 0x000000);
      mat.emissiveIntensity = e.hitFlashTimer > 0 ? 0.9 : 0;

      // Billboard HP bar
      ev.hpBarBg.lookAt(this.camera.position);
      ev.hpBarFill.lookAt(this.camera.position);
      ev.hpBarFill.scale.x = Math.max(0.01, e.hp / e.maxHp);
    }

    // Axiom & Student
    this.world.axiom.root.position.set(
      this.companionState.axiomX,
      this.companionState.axiomY,
      this.companionState.axiomZ
    );
    this.world.axiom.ring1.rotation.y=this.simTime*.7;
    this.world.axiom.ring2.rotation.x=this.simTime*.6;

    this.world.student.root.position.set(this.companionState.studentX, 0, this.companionState.studentZ);
    this.world.student.root.rotation.y = this.companionState.studentYaw;
    this.world.student.stasisDome.visible = this.saveData.worldFlags.studentChoice !== 'helped';

    // Lever
    this.world.exitLeverHandle.rotation.x = this.saveData.worldFlags.axiomSacrificed ? 0.45 : -0.45;
  }

  private getCurrentObjectiveText(): string {
    const wf = this.saveData.worldFlags;
    if (wf.axiomSacrificed) return 'Step through the Grand Exit Gateway to escape!';
    if (wf.defeatedBosses.includes('boss_eternal_archivist')) {
      return wf.studentChoice === null
        ? 'Investigate the West Hidden Chamber before escaping'
        : 'Head North to the Exit Binding Lever';
    }
    if (wf.sealsInserted) return 'Defeat The Eternal Archivist by stabilizing its energy pylons';
    if (this.saveData.inventory.seals.length >= 3) return 'Insert the Three Ancient Seals at the Sanctum Pedestal';
    if (!wf.defeatedBosses.includes('boss_stone_sentinel')) return 'Collect the First Ancient Seal from The Stone Sentinel';
    if (!wf.axiomRescued) return 'Rescue Axiom in the West Library Wing';
    if (!wf.defeatedBosses.includes('boss_arcane_scholar')) return 'Defeat The Arcane Scholar for the Second Ancient Seal';
    return 'Cross the Abyss and defeat Abyssal Warden for the Third Seal';
  }

  private updateHUDDisplay(): void {
    const activeBoss = this.enemies.find(
      (e) =>
        e.config.isBoss &&
        e.state !== 'dead' &&
        Math.hypot(e.x - this.saveData.player.x, e.z - this.saveData.player.z) <= 22
    );

    const isTouch = this.inputManager.getActiveInterfaceMode() === 'touch';

    this.ui.updateHUD({
      hp: this.saveData.player.hp,
      maxHp: PLAYER_CONFIG.maxHp,
      potions: this.saveData.inventory.potions,
      keys: this.saveData.inventory.keys,
      seals: this.saveData.inventory.seals,
      regionName: REGION_NAMES[this.saveData.currentRegionId],
      objective: this.getCurrentObjectiveText(),
      interactPrompt: this.nearbyInteractable?.label ?? null,
      isTouchMode: isTouch,
      pointerLocked: this.inputManager.isPointerLocked(),
      pointerLockAvailable: this.inputManager.isPointerLockAvailable(),
      showFps: this.settings.showFpsCounter,
      fps: this.currentFps,
      activeBoss: activeBoss
        ? {
            name: activeBoss.config.name,
            hp: activeBoss.hp,
            maxHp: activeBoss.maxHp,
            shielded: activeBoss.shielded,
            vulnRemaining: activeBoss.vulnerabilityTimer,
          }
        : null,
      minimap: {
        playerX: this.saveData.player.x,
        playerZ: this.saveData.player.z,
        playerYaw: this.saveData.player.yaw,
        axiomX: this.companionState.axiomX,
        axiomZ: this.companionState.axiomZ,
        axiomVisible: this.saveData.worldFlags.axiomRescued,
        enemies: this.enemies.map((e) => ({
          x: e.x,
          z: e.z,
          alive: e.state !== 'dead',
          isBoss: e.config.isBoss,
        })),
        doors: DOOR_SPECS.map((d) => ({ x: d.x, z: d.z, open: this.isDoorOpen(d.id) })),
      },
    });

    if (isTouch) {
      this.touchUI.updateContextualState({
        canInteract: this.nearbyInteractable !== null,
        interactLabel: this.nearbyInteractable ? 'Use' : 'Interact',
        potions: this.saveData.inventory.potions,
        hp: this.saveData.player.hp,
        maxHp: PLAYER_CONFIG.maxHp,
      });
    }
  }

  public dispose(): void {
    cancelAnimationFrame(this.animationFrameId);
    this.inputManager.detach();
    this.sound.stopMechanismResonance();
    this.world.dispose();
    this.renderer.dispose();
  }
}
