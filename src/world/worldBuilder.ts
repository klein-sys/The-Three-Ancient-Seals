import * as THREE from 'three';
import { createCharacter, mesh as artMesh } from './characterArt';
import { addEnvironmentArt } from './environmentArt';
import { batchStatic } from './batchArt';
import {
  CHEST_SPECS,
  DUNGEON_ROOMS,
  DOOR_SPECS,
  ENEMY_SPAWNS,
  PYLON_SPECS,
  TABLET_SPECS,
  TRAP_ANCHORS,
  TRAP_SPECS,
  buildDungeonWallColliders,
} from './levelData';
import { MaterialPalette, createDungeonMaterials } from './proceduralAssets';
import { BoxCollider } from '../math/geometry';
import { EffectsQuality, TextureQuality } from '../config/gameConfig';

export interface PlayerVisual {
  root: THREE.Group;
  bodyGroup: THREE.Group;
  swordPivot: THREE.Group;
  capeMesh: THREE.Mesh;
  torchLight: THREE.PointLight;
}

export interface DoorVisual {
  id: string;
  mesh: THREE.Mesh;
  frameGroup: THREE.Group;
  closedY: number;
  openY: number;
  collider: BoxCollider;
}

export interface ChestVisual {
  id: string;
  root: THREE.Group;
  lidPivot: THREE.Group;
  glowMesh: THREE.Mesh;
}

export interface PylonVisual {
  id: string;
  root: THREE.Group;
  crystal: THREE.Mesh;
  ringA: THREE.Mesh;
  ringB: THREE.Mesh;
}

export interface TrapVisual {
  id: string;
  root: THREE.Group;
  bladeGroup: THREE.Group;
}

export interface EnemyVisual {
  id: string;
  root: THREE.Group;
  bodyMesh: THREE.Mesh;
  shieldSphere: THREE.Mesh;
  telegraphRing: THREE.Mesh;
  hpBarBg: THREE.Mesh;
  hpBarFill: THREE.Mesh;
}

export interface AxiomVisual {
  root: THREE.Group;
  core: THREE.Mesh;
  ring1: THREE.Mesh;
  ring2: THREE.Mesh;
  light: THREE.PointLight;
}

export interface StudentVisual {
  root: THREE.Group;
  bodyGroup: THREE.Group;
  stasisDome: THREE.Mesh;
}

export interface BuiltWorld {
  dungeonRoot: THREE.Group;
  endingRoot: THREE.Group;
  palette: MaterialPalette;
  wallColliders: BoxCollider[];
  doors: Map<string, DoorVisual>;
  chests: Map<string, ChestVisual>;
  pylons: Map<string, PylonVisual>;
  traps: Map<string, TrapVisual>;
  enemies: Map<string, EnemyVisual>;
  player: PlayerVisual;
  axiom: AxiomVisual;
  student: StudentVisual;
  sealPedestalMesh: THREE.Group;
  exitLeverHandle: THREE.Group;
  ambientLights: THREE.Light[];
  effectLights: THREE.PointLight[];
  endingSunLight: THREE.DirectionalLight;
  endingSkyMat: THREE.MeshBasicMaterial;
  endingStudentGroup: THREE.Group;
  endingProtagonistGroup: THREE.Group;
  updateAtmosphere: (x: number, z: number, time: number) => void;
  applyTextureQuality: (quality: TextureQuality) => void;
  applyEffectsQuality: (quality: EffectsQuality) => void;
  dispose: () => void;
}

export function buildGameWorld(
  scene: THREE.Scene,
  initialTextureQuality: TextureQuality,
  initialEffectsQuality: EffectsQuality
): BuiltWorld {
  const dungeonRoot = new THREE.Group();
  const endingRoot = new THREE.Group();
  endingRoot.visible = false;
  scene.add(dungeonRoot);
  scene.add(endingRoot);

  const palette = createDungeonMaterials(initialTextureQuality);
  const wallColliders = buildDungeonWallColliders();
  const effectLights: THREE.PointLight[] = [];
  const ambientLights: THREE.Light[] = [];

  // Global atmospheric lights (sky fill + shadowing warm key + cool architectural rim)
  const hemi = new THREE.HemisphereLight(0x9eafb6, 0x343e38, 1.5);
  dungeonRoot.add(hemi);
  ambientLights.push(hemi);

  const dirLight = new THREE.DirectionalLight(0xffd9a5, 2.2);
  dirLight.position.set(18, 36, 12);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.set(1024, 1024);
  dirLight.shadow.normalBias = 0.04;
  dirLight.shadow.bias = -0.0002;
  dirLight.shadow.camera.near = 2;
  dirLight.shadow.camera.far = 120;
  dirLight.shadow.camera.left = -18;
  dirLight.shadow.camera.right = 18;
  dirLight.shadow.camera.top = 18;
  dirLight.shadow.camera.bottom = -18;
  dungeonRoot.add(dirLight);
  dungeonRoot.add(dirLight.target);
  ambientLights.push(dirLight);

  const rim = new THREE.DirectionalLight(0x85b8c8, 0.7);
  rim.position.set(-10, 8, -20);
  dungeonRoot.add(rim);

  const floorsRoot = new THREE.Group();
  dungeonRoot.add(floorsRoot);
  for (const r of DUNGEON_ROOMS) {
    const w = r.maxX - r.minX;
    const d = r.maxZ - r.minZ;
    const geo = new THREE.BoxGeometry(w, 0.4, d);
    const mat =
      r.floorType === 'library'
        ? palette.libraryFloor
        : r.floorType === 'abyss'
          ? palette.abyssFloor
          : palette.stoneFloor;
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) {
      uv.setXY(i, (uv.getX(i) * w) / 12, (uv.getY(i) * d) / 12);
    }
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((r.minX + r.maxX) * 0.5, -0.2, (r.minZ + r.maxZ) * 0.5);
    mesh.receiveShadow = true;
    floorsRoot.add(mesh);
  }
  batchStatic(floorsRoot, false, 36);

  // Abyss void glow underneath bridge
  const abyssVoid = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 32),
    new THREE.MeshBasicMaterial({ color: 0x05182e })
  );
  abyssVoid.rotation.x = -Math.PI / 2;
  abyssVoid.position.set(0, -8, -101);
  dungeonRoot.add(abyssVoid);

  // Build solid wall meshes & bookshelves from merged colliders with physical-unit UVs
  const wallsRoot = new THREE.Group();
  dungeonRoot.add(wallsRoot);
  const booksRoot = new THREE.Group();
  dungeonRoot.add(booksRoot);
  const bookMatA = new THREE.MeshStandardMaterial({ color: 0x74634e, roughness: 1 });
  const bookMatB = new THREE.MeshStandardMaterial({ color: 0x435557, roughness: 1 });
  for (const box of wallColliders) {
    const w = box.maxX - box.minX;
    const h = box.maxY - box.minY;
    const d = box.maxZ - box.minZ;
    const isShelf = box.id.startsWith('shelf_');
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      isShelf ? palette.woodShelf : palette.stoneWall
    );
    mesh.position.set((box.minX + box.maxX) * 0.5, (box.minY + box.maxY) * 0.5, (box.minZ + box.maxZ) * 0.5);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    wallsRoot.add(mesh);
    if (!isShelf) {
      const uv = mesh.geometry.attributes.uv;
      for (let i = 0; i < uv.count; i++) {
        const face = Math.floor(i / 4);
        const span = face < 2 ? d : w;
        uv.setXY(i, (uv.getX(i) * span) / 3, (uv.getY(i) * h) / 3);
      }
    } else {
      for (let y = 0.55; y < 3.4; y += 0.72) {
        for (let z = box.minZ + 0.2; z < box.maxZ - 0.1; z += 0.27) {
          const book = artMesh(
            booksRoot,
            new THREE.BoxGeometry(w + 0.05, 0.48, 0.16),
            z % 1 > 0.5 ? bookMatA : bookMatB,
            (box.minX + box.maxX) * 0.5,
            y,
            z
          );
          book.castShadow = false;
        }
      }
    }
  }
  batchStatic(wallsRoot, false, 24);
  batchStatic(booksRoot, false, 24);

  // Architectural ceilings, vaults, engaged columns, shrines, braziers & landmarks
  const fixturePositions = addEnvironmentArt(dungeonRoot, palette, wallColliders);
  // Fixed light pool tracks nearest braziers around the player without expensive dynamic shader recompiles
  for (let i = 0; i < 3; i++) {
    const light = new THREE.PointLight(0xffb96c, 28, 13, 2);
    dungeonRoot.add(light);
    effectLights.push(light);
  }
  let effectsQuality = initialEffectsQuality;
  const updateAtmosphere = (x: number, z: number, time: number) => {
    const nearest = [...fixturePositions].sort((a, b) => Math.hypot(a.x - x, a.z - z) - Math.hypot(b.x - x, b.z - z));
    effectLights.forEach((light, i) => {
      const pos = nearest[i];
      if (pos) light.position.copy(pos);
      light.intensity = (effectsQuality === 'low' ? 16 : 30) * (1 + 0.055 * Math.sin(time * 6 + i * 2));
    });
    dirLight.position.set(x + 8, 18, z + 5);
    dirLight.target.position.set(x, 0, z - 4);
    dirLight.target.updateMatrixWorld();
  };

  // Doors
  const doors = new Map<string, DoorVisual>();
  for (const spec of DOOR_SPECS) {
    const frameGroup = new THREE.Group();
    frameGroup.position.set(spec.x, 0, spec.z);

    const doorMat =
      spec.kind === 'barrier'
        ? new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            emissive: 0x0284c7,
            emissiveIntensity: 1.4,
            transparent: true,
            opacity: 0.62,
          })
        : spec.kind === 'energy' || spec.kind === 'sealGate' || spec.kind === 'finalExit'
          ? palette.arcaneMetal
          : palette.stoneWall;

    const h = 3.8;
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(spec.width, h, spec.depth), doorMat);
    mesh.position.y = h * 0.5;
    mesh.castShadow = spec.kind !== 'barrier';
    mesh.receiveShadow = true;
    frameGroup.add(mesh);

    const lintel = new THREE.Mesh(
      new THREE.BoxGeometry(spec.width + 0.4, 0.35, spec.depth + 0.4),
      palette.goldTrim
    );
    lintel.position.y = h + 0.15;
    frameGroup.add(lintel);

    const side = spec.orientation === 'z-axis';
    const span = side ? spec.depth : spec.width;
    const portal = new THREE.Group();
    if (side) portal.rotation.y = Math.PI / 2;
    frameGroup.add(portal);
    for (const sign of [-1, 1]) {
      const jamb = artMesh(portal, new THREE.BoxGeometry(0.42, 4.2, 1.1), palette.stoneWall, sign * (span / 2 + 0.05), 2.1, 0);
      artMesh(jamb, new THREE.BoxGeometry(0.48, 0.22, 1.17), palette.goldTrim, 0, 1.6, 0);
    }
    for (let i = 0; i < 9; i++) {
      const a = ((i + 0.5) / 9) * Math.PI;
      const stone = artMesh(
        portal,
        new THREE.BoxGeometry(span / 9, 0.32, 0.85),
        palette.stoneWall,
        (Math.cos(a) * span) / 2,
        3.85 + Math.sin(a) * 0.6,
        0
      );
      stone.rotation.z = a - Math.PI / 2;
    }

    const detail = new THREE.Group();
    if (side) detail.rotation.y = Math.PI / 2;
    mesh.add(detail);
    if (spec.kind === 'barrier') {
      // Flanking bronze emitter pylons and glowing arcane energy ribs rather than opaque wood panels
      for (const sx of [-1, 1]) {
        artMesh(portal, new THREE.BoxGeometry(0.24, 3.7, 0.45), palette.goldTrim, sx * (span / 2 - 0.22), 1.85, 0);
        artMesh(portal, new THREE.OctahedronGeometry(0.16, 0), palette.sealBlueGlow, sx * (span / 2 - 0.22), 3.75, 0);
      }
      for (const sy of [-1.25, 0, 1.25]) {
        const rib = artMesh(detail, new THREE.BoxGeometry(span - 0.45, 0.065, 0.12), palette.sealBlueGlow, 0, sy, 0);
        rib.castShadow = false;
      }
    } else {
      for (let face of [-1, 1]) {
        for (const sy of [-1, 1]) artMesh(detail, new THREE.BoxGeometry(span - 0.2, 0.12, 0.05), palette.goldTrim, 0, sy * 1.35, face * 0.48);
        for (const sx of [-1, 1]) {
          artMesh(detail, new THREE.BoxGeometry(span * 0.38, 2.35, 0.1), palette.woodShelf, sx * span * 0.24, 0, face * 0.48);
          for (const sy of [-1, 1]) {
            artMesh(detail, new THREE.CylinderGeometry(0.06, 0.06, 0.08, 6), palette.goldTrim, sx * (span / 2 - 0.25), sy * 1.34, face * 0.54).rotation.x =
              Math.PI / 2;
          }
        }
        const dialGroup = new THREE.Group();
        if (side) dialGroup.rotation.y = Math.PI / 2;
        mesh.add(dialGroup);
        const seal = artMesh(dialGroup, new THREE.TorusGeometry(0.43, 0.065, 6, 32), palette.goldTrim, 0, 0, face * 0.62);
        seal.name = 'dialRotor';
        artMesh(seal, new THREE.CylinderGeometry(0.29, 0.29, 0.06, 8), palette.arcaneMetal).rotation.x = Math.PI / 2;
        for (let i = 0; i < 3; i++) artMesh(seal, new THREE.BoxGeometry(0.035, 0.2, 0.04), palette.sealBlueGlow, (i - 1) * 0.13, 0, face * 0.05);
      }
      batchStatic(detail, true, 100);
    }
    batchStatic(portal, true, 100);

    dungeonRoot.add(frameGroup);

    const collider: BoxCollider = {
      id: `door_${spec.id}`,
      minX: spec.x - spec.width * 0.5,
      maxX: spec.x + spec.width * 0.5,
      minY: 0,
      maxY: h,
      minZ: spec.z - spec.depth * 0.5,
      maxZ: spec.z + spec.depth * 0.5,
      blocksSight: spec.kind !== 'barrier',
    };

    doors.set(spec.id, {
      id: spec.id,
      mesh,
      frameGroup,
      closedY: h * 0.5,
      openY: -h * 0.65,
      collider,
    });
  }

  // Chests
  const chests = new Map<string, ChestVisual>();
  for (const spec of CHEST_SPECS) {
    const root = new THREE.Group();
    root.position.set(spec.x, 0, spec.z);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 0.55, 0.78),
      spec.kind === 'greedyGold' ? palette.goldTrim : palette.woodShelf
    );
    base.position.y = 0.275;
    base.castShadow = true;
    root.add(base);

    const lidPivot = new THREE.Group();
    lidPivot.position.set(0, 0.55, -0.39);
    const lid = new THREE.Mesh(
      new THREE.BoxGeometry(1.14, 0.26, 0.8),
      spec.kind === 'optimization' ? palette.arcaneMetal : palette.goldTrim
    );
    lid.position.set(0, 0.13, 0.39);
    lidPivot.add(lid);
    root.add(lidPivot);

    const glowMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 10, 10),
      new THREE.MeshBasicMaterial({ color: spec.kind === 'greedyGold' ? 0xfbbf24 : 0x38bdf8 })
    );
    glowMesh.position.set(0, 0.65, 0);
    root.add(glowMesh);

    dungeonRoot.add(root);
    chests.set(spec.id, { id: spec.id, root, lidPivot, glowMesh });
  }

  // Stabilization Pylons
  const pylons = new Map<string, PylonVisual>();
  for (const spec of PYLON_SPECS) {
    const root = new THREE.Group();
    root.position.set(spec.x, 0, spec.z);

    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.6, 1.15, 8), palette.arcaneMetal);
    pedestal.position.y = 0.575;
    pedestal.castShadow = true;
    root.add(pedestal);

    const crystal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.19, 0.23, 0.55, 6),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 1.4,
        roughness: 0.2,
      })
    );
    crystal.position.y = 1.75;
    root.add(crystal);

    const ringA = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.04, 8, 24), palette.goldTrim);
    ringA.position.y = 1.75;
    root.add(ringA);

    const ringB = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.03, 8, 24), palette.sealBlueGlow);
    ringB.position.y = 1.75;
    ringB.rotation.x = Math.PI / 2;
    root.add(ringB);

    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      const brace = artMesh(root, new THREE.CylinderGeometry(0.055, 0.08, 0.85, 6), palette.goldTrim, Math.cos(a) * 0.38, 1.4, Math.sin(a) * 0.38);
      brace.rotation.z = Math.cos(a) * 0.2;
    }
    const holdRing = artMesh(root, new THREE.TorusGeometry(0.68, 0.045, 6, 48), palette.sealBlueGlow, 0, 0.08, 0);
    holdRing.rotation.x = -Math.PI / 2;
    holdRing.name = 'holdRing';

    dungeonRoot.add(root);
    pylons.set(spec.id, { id: spec.id, root, crystal, ringA, ringB });
  }

  // Tablets
  for (const tab of TABLET_SPECS) {
    const tGroup = new THREE.Group();
    tGroup.position.set(tab.x, 0, tab.z);
    const slab = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.85, 0.3), palette.stoneWall);
    slab.position.y = 0.925;
    slab.castShadow = true;
    tGroup.add(slab);
    const runePlate = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.25, 0.34), palette.arcaneMetal);
    runePlate.position.y = 1.05;
    tGroup.add(runePlate);
    dungeonRoot.add(tGroup);
  }

  // Three-Seal Pedestal before Sanctum Gate
  const sealPedestalMesh = new THREE.Group();
  sealPedestalMesh.position.set(0, 0, -136.2);
  const pedBase = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.95, 1.2, 8), palette.goldTrim);
  pedBase.position.y = 0.6;
  sealPedestalMesh.add(pedBase);
  for (let i = 0; i < 3; i++) {
    const slot = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.18, 0),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4 })
    );
    slot.position.set((i - 1) * 0.42, 1.5, 0);
    slot.name = `sealSlot_${i}`;
    sealPedestalMesh.add(slot);
  }
  dungeonRoot.add(sealPedestalMesh);

  // Final Exit Lever
  const leverRoot = new THREE.Group();
  leverRoot.position.set(-2, 0, -171);
  const leverBase = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), palette.arcaneMetal);
  leverBase.position.y = 0.45;
  leverRoot.add(leverBase);
  const exitLeverHandle = new THREE.Group();
  exitLeverHandle.position.set(0, 0.9, 0);
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.1, 8), palette.goldTrim);
  rod.position.y = 0.55;
  exitLeverHandle.add(rod);
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 10), palette.sealBlueGlow);
  orb.position.y = 1.1;
  exitLeverHandle.add(orb);
  exitLeverHandle.rotation.x = -0.45;
  leverRoot.add(exitLeverHandle);
  dungeonRoot.add(leverRoot);

  // Harmonic Traps (sculpted bronze/steel scythe-blade carriages on sunken tracks)
  const traps = new Map<string, TrapVisual>();
  for (const spec of TRAP_SPECS) {
    const anchor = TRAP_ANCHORS[spec.id];
    const root = new THREE.Group();
    root.position.set(anchor.x, 0, anchor.z);

    const trackLen = spec.amplitude * 2 + spec.halfExtents.x * 2;
    const trackBed = artMesh(root, new THREE.BoxGeometry(trackLen, 0.05, 0.56), palette.stoneWall, 0, 0.025, 0);
    trackBed.castShadow = false;
    for (const rz of [-0.16, 0.16]) {
      const rail = artMesh(root, new THREE.BoxGeometry(trackLen, 0.06, 0.07), palette.arcaneMetal, 0, 0.065, rz);
      rail.castShadow = false;
    }

    const bladeGroup = new THREE.Group();
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0x9aa4a6, metalness: 0.84, roughness: 0.28, flatShading: true });
    artMesh(bladeGroup, new THREE.BoxGeometry(spec.halfExtents.x * 1.35, 0.2, Math.max(0.44, spec.halfExtents.z * 1.2)), palette.goldTrim, 0, 0.14, 0);
    artMesh(bladeGroup, new THREE.BoxGeometry(0.22, spec.halfExtents.y * 1.85, 0.22), palette.arcaneMetal, 0, spec.halfExtents.y * 0.96, 0);
    artMesh(bladeGroup, new THREE.OctahedronGeometry(0.16, 0), palette.sealBlueGlow, 0, spec.halfExtents.y * 1.92, 0);
    artMesh(bladeGroup, new THREE.CylinderGeometry(0.18, 0.22, 0.1, 8), palette.goldTrim, 0, 0.26, 0);

    const hx = spec.halfExtents.x;
    const topY = spec.halfExtents.y * 1.72;
    for (const side of [-1, 1]) {
      const bladeShape = new THREE.Shape();
      bladeShape.moveTo(0, 0.28);
      bladeShape.lineTo(side * hx * 1.02, 0.55);
      bladeShape.lineTo(side * hx * 0.82, topY * 0.56);
      bladeShape.lineTo(side * hx * 1.05, topY * 0.94);
      bladeShape.lineTo(0, topY * 0.78);
      bladeShape.closePath();
      const wing = artMesh(
        bladeGroup,
        new THREE.ExtrudeGeometry(bladeShape, { depth: 0.08, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 1 }),
        bladeMat,
        0,
        0,
        -0.04
      );
      wing.receiveShadow = true;
    }

    const cushionMat = new THREE.MeshStandardMaterial({ color: 0xd99b52, emissive: 0x7c4518, emissiveIntensity: 0.9 });
    for (const endpoint of [-1, 1]) {
      const ex = endpoint * (spec.amplitude + spec.halfExtents.x);
      artMesh(root, new THREE.CylinderGeometry(0.2, 0.27, 0.34, 8), palette.goldTrim, ex, 0.17, 0);
      artMesh(root, new THREE.CylinderGeometry(0.15, 0.15, 0.08, 8), cushionMat, ex, 0.36, 0);
    }
    const warning = artMesh(root, new THREE.BoxGeometry(trackLen, 0.024, 0.065), new THREE.MeshBasicMaterial({ color: 0xae774c }), 0, 0.06, spec.halfExtents.z + 0.24);
    warning.name = 'motionCue';
    warning.castShadow = false;

    root.add(bladeGroup);
    dungeonRoot.add(root);
    traps.set(spec.id, { id: spec.id, root, bladeGroup });
  }

  // Enemies & Bosses (articulated character rigs)
  const enemies = new Map<string, EnemyVisual>();
  for (const sp of ENEMY_SPAWNS) {
    const isBoss = sp.archetypeId.includes('Boss');
    const root = new THREE.Group();
    root.position.set(sp.x, 0, sp.z);
    const scale = isBoss ? 1.55 : 1.0;

    const rig = createCharacter(sp.archetypeId);
    rig.root.scale.setScalar(scale);
    root.add(rig.root);
    root.userData.rig = rig;
    const bodyMesh = rig.chest;

    const shieldSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.15 * scale, 18, 14),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 1.0,
        transparent: true,
        opacity: 0.12,
        wireframe: false,
        depthWrite: false,
      })
    );
    shieldSphere.position.y = 1.0 * scale;
    shieldSphere.visible = isBoss;
    root.add(shieldSphere);

    const telegraphRing = new THREE.Mesh(
      new THREE.RingGeometry(0.8 * scale, 1.35 * scale, 24),
      new THREE.MeshBasicMaterial({ color: 0xf43f5e, side: THREE.DoubleSide, transparent: true, opacity: 0.75 })
    );
    telegraphRing.rotation.x = -Math.PI / 2;
    telegraphRing.position.y = 0.06;
    telegraphRing.visible = false;
    root.add(telegraphRing);

    const barWidth = 1.2 * scale;
    const hpBarBg = new THREE.Mesh(
      new THREE.PlaneGeometry(barWidth, 0.14),
      new THREE.MeshBasicMaterial({ color: 0x0f172a, side: THREE.DoubleSide })
    );
    hpBarBg.position.set(0, 2.25 * scale, 0);
    root.add(hpBarBg);

    const hpBarFill = new THREE.Mesh(
      new THREE.PlaneGeometry(barWidth - 0.06, 0.09),
      new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide })
    );
    hpBarFill.position.set(0, 2.25 * scale, 0.01);
    root.add(hpBarFill);

    dungeonRoot.add(root);
    enemies.set(sp.id, { id: sp.id, root, bodyMesh, shieldSphere, telegraphRing, hpBarBg, hpBarFill });
  }

  // Player Character Visual
  const heroRig = createCharacter('hero');
  const playerRoot = heroRig.root;
  const bodyGroup = heroRig.body;
  const swordPivot = heroRig.sword;
  const capeMesh = heroRig.cape;
  const playerTorch = new THREE.PointLight(0xa5c8d3, 8, 10, 2);
  playerTorch.position.set(0.4, 2.4, 1.5);
  playerRoot.add(playerTorch);
  dungeonRoot.add(playerRoot);

  // Axiom Companion Visual (antique astrolabe)
  const axiomRoot = new THREE.Group();
  axiomRoot.position.set(-18, 1.5, -51);
  const axCore = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.13, 1),
    new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x38bdf8, emissiveIntensity: 1.8 })
  );
  axiomRoot.add(axCore);
  const axRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.03, 8, 24), palette.goldTrim);
  axiomRoot.add(axRing1);
  const axRing2 = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.025, 8, 24), palette.sealBlueGlow);
  axRing2.rotation.x = Math.PI / 2;
  axiomRoot.add(axRing2);
  const axLight = new THREE.PointLight(0x83cbbb, 0, 6, 2);
  axiomRoot.add(axLight);
  dungeonRoot.add(axiomRoot);

  // Trapped Student Visual
  const studentRoot = new THREE.Group();
  studentRoot.position.set(-20, 0, -150);
  const studentRig = createCharacter('student');
  const studentBodyGroup = studentRig.body;
  studentRoot.add(studentRig.root);

  const stasisDome = new THREE.Mesh(
    new THREE.SphereGeometry(1.15, 16, 14),
    new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0.13,
      wireframe: false,
      depthWrite: false,
    })
  );
  stasisDome.position.y = 1.0;
  studentRoot.add(stasisDome);
  dungeonRoot.add(studentRoot);

  // ========================================================
  // 3D ENDING OVERLOOK SCENE (Good vs Bad Sunset Mountains)
  // ========================================================
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 4;
  skyCanvas.height = 256;
  const skyCtx = skyCanvas.getContext('2d')!;
  const sunset = skyCtx.createLinearGradient(0, 0, 0, 256);
  sunset.addColorStop(0, '#1a2742');
  sunset.addColorStop(0.34, '#75677e');
  sunset.addColorStop(0.52, '#ffdfb0');
  sunset.addColorStop(0.66, '#d89772');
  sunset.addColorStop(1, '#273142');
  skyCtx.fillStyle = sunset;
  skyCtx.fillRect(0, 0, 4, 256);
  const skyTex = new THREE.CanvasTexture(skyCanvas);
  skyTex.colorSpace = THREE.SRGBColorSpace;
  const endingSkyMat = new THREE.MeshBasicMaterial({ map: skyTex, color: 0xffffff, side: THREE.BackSide, fog: false, depthWrite: false });
  const endingSky = new THREE.Mesh(new THREE.SphereGeometry(135, 36, 20), endingSkyMat);
  endingRoot.add(endingSky);

  const haloMat = new THREE.MeshBasicMaterial({ color: 0xffcf88, transparent: true, opacity: 0.28, fog: false, depthWrite: false });
  artMesh(endingRoot, new THREE.CircleGeometry(10.5, 48), haloMat, 6, 8.5, -93).castShadow = false;
  const sun = artMesh(endingRoot, new THREE.CircleGeometry(4.6, 48), new THREE.MeshBasicMaterial({ color: 0xfff1c9, fog: false }), 6, 8.5, -92);
  sun.castShadow = false;

  const ridgeColors = [0x2c3c48, 0x495b68, 0x6e7382, 0x998b8d];
  for (let layer = 0; layer < 4; layer++) {
    const ridge = new THREE.Shape();
    ridge.moveTo(-150, -28);
    for (let i = 0; i <= 44; i++) {
      const rx = -150 + i * (300 / 44);
      const ry = -1 + Math.sin(i * 0.9 + layer * 1.4) * 4.4 + Math.cos(i * 0.37 + layer * 2.1) * 4.2 + (layer === 0 ? -1.5 : layer * 1.1);
      ridge.lineTo(rx, ry);
    }
    ridge.lineTo(150, -28);
    ridge.closePath();
    const rMesh = artMesh(
      endingRoot,
      new THREE.ShapeGeometry(ridge),
      new THREE.MeshStandardMaterial({ color: ridgeColors[layer], roughness: 1, metalness: 0 }),
      0,
      1.5,
      -28 - layer * 16
    );
    rMesh.castShadow = false;
    rMesh.receiveShadow = false;
  }

  const bastion = artMesh(endingRoot, new THREE.CylinderGeometry(10.2, 13.5, 6.5, 10), new THREE.MeshStandardMaterial({ color: 0x2b3440, roughness: 0.95, flatShading: true }), 0, -3.4, 0);
  bastion.receiveShadow = true;
  const terrace = artMesh(endingRoot, new THREE.CylinderGeometry(9.1, 9.5, 0.36, 12), palette.stoneFloor, 0, -0.18, 0);
  terrace.receiveShadow = true;
  for (const [x, h, z] of [
    [-5.6, 0.95, -3.3],
    [-3.6, 0.72, -3.8],
    [-1.9, 0.45, -4.0],
    [1.9, 0.45, -4.0],
    [3.6, 0.72, -3.8],
    [5.6, 0.95, -3.3],
  ] as const) {
    artMesh(endingRoot, new THREE.BoxGeometry(1.5, h, 0.95), palette.stoneWall, x, h * 0.5 - 0.02, z);
    artMesh(endingRoot, new THREE.BoxGeometry(1.66, 0.11, 1.08), palette.goldTrim, x, h + 0.03, z);
  }

  const endingSunLight = new THREE.DirectionalLight(0xffd28a, 2.6);
  endingSunLight.position.set(6, 13, -36);
  endingRoot.add(endingSunLight);
  const endingFillLight = new THREE.DirectionalLight(0xb2c9e6, 1.05);
  endingFillLight.position.set(4, 7, 12);
  endingRoot.add(endingFillLight);
  endingRoot.add(new THREE.HemisphereLight(0xffe1ba, 0x263142, 0.95));

  // Protagonist on overlook
  const endingProtagonistGroup = new THREE.Group();
  endingProtagonistGroup.add(createCharacter('hero').root);
  endingProtagonistGroup.position.set(-0.95, 0, -2.35);
  endingProtagonistGroup.rotation.y = -0.32;
  endingRoot.add(endingProtagonistGroup);

  // Rescued student on overlook (shown only in Good Ending)
  const endingStudentGroup = new THREE.Group();
  endingStudentGroup.add(createCharacter('student').root);
  endingStudentGroup.position.set(0.95, 0, -2.25);
  endingStudentGroup.rotation.y = 0.32;
  endingRoot.add(endingStudentGroup);

  const applyTextureQuality = (quality: TextureQuality) => {
    const newPal = createDungeonMaterials(quality);
    const names = ['stoneWall', 'stoneFloor', 'libraryFloor', 'abyssFloor', 'arcaneMetal'] as const;
    for (const key of names) {
      const mat = palette[key];
      mat.map?.dispose();
      mat.map = newPal[key].map;
      if (mat.bumpMap) mat.bumpMap = mat.map;
      mat.needsUpdate = true;
    }
    for (const key of names) newPal[key].dispose();
  };

  const applyEffectsQuality = (quality: EffectsQuality) => {
    effectsQuality = quality;
    effectLights.forEach((pt, i) => {
      pt.visible = i < (quality === 'low' ? 1 : quality === 'medium' ? 2 : 3);
    });
    playerTorch.intensity = quality === 'low' ? 10 : 8;
  };

  applyEffectsQuality(initialEffectsQuality);

  return {
    dungeonRoot,
    endingRoot,
    palette,
    wallColliders,
    doors,
    chests,
    pylons,
    traps,
    enemies,
    player: { root: playerRoot, bodyGroup, swordPivot, capeMesh, torchLight: playerTorch },
    axiom: { root: axiomRoot, core: axCore, ring1: axRing1, ring2: axRing2, light: axLight },
    student: { root: studentRoot, bodyGroup: studentBodyGroup, stasisDome },
    sealPedestalMesh,
    exitLeverHandle,
    ambientLights,
    effectLights,
    endingSunLight,
    endingSkyMat,
    endingStudentGroup,
    endingProtagonistGroup,
    updateAtmosphere,
    applyTextureQuality,
    applyEffectsQuality,
    dispose: () => {
      palette.dispose();
    },
  };
}
