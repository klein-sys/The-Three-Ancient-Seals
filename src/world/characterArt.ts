import * as T from 'three';
import { batchStatic } from './batchArt';

const steel = new T.MeshStandardMaterial({ color: 0x8d9ea2, metalness: 0.72, roughness: 0.34, flatShading: true });
const bronze = new T.MeshStandardMaterial({ color: 0xaa7f46, metalness: 0.74, roughness: 0.42 });
const leather = new T.MeshStandardMaterial({ color: 0x262a2e, roughness: 0.94 });
const dark = new T.MeshStandardMaterial({ color: 0x0b1218, roughness: 0.92 });
const glow = new T.MeshStandardMaterial({ color: 0xb6efe4, emissive: 0x5cc9b9, emissiveIntensity: 1.55 });
const crimsonGlow = new T.MeshStandardMaterial({ color: 0xfca5a5, emissive: 0xdc2626, emissiveIntensity: 1.75 });
const boneMat = new T.MeshStandardMaterial({ color: 0xb6b29f, roughness: 0.86, metalness: 0.08, flatShading: true });

export interface CharacterRig {
  root: T.Group;
  body: T.Group;
  chest: T.Mesh;
  sword: T.Group;
  cape: T.Mesh;
  arms: T.Group[];
  legs: T.Group[];
  head: T.Group;
}

export function mesh(parent: T.Object3D, geo: T.BufferGeometry, mat: T.Material, x = 0, y = 0, z = 0): T.Mesh {
  const m = new T.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
const box = (p: T.Object3D, w: number, h: number, d: number, m: T.Material, x = 0, y = 0, z = 0) =>
  mesh(p, new T.BoxGeometry(w, h, d), m, x, y, z);
const taper = (p: T.Object3D, top: number, bottom: number, h: number, m: T.Material, x = 0, y = 0, z = 0, n = 6) =>
  mesh(p, new T.CylinderGeometry(top, bottom, h, n), m, x, y, z);

/** Original articulated silhouette. All front-facing equipment points toward local -Z. */
export function createCharacter(kind = 'hero'): CharacterRig {
  const archivist = /Archivist/i.test(kind);
  const scholar = /Scholar/i.test(kind);
  const wraith = /Wraith/i.test(kind);
  const skeleton = /skeleton/i.test(kind);
  const stone = /SentinelBoss/i.test(kind);
  const construct = /Construct|Equations/i.test(kind);
  const mage = archivist || scholar || wraith;
  const hero = kind === 'hero';
  const student = kind === 'student';

  const eyeGlow = archivist ? crimsonGlow : glow;
  const root = new T.Group();
  const body = new T.Group();
  root.add(body);

  const cloth = new T.MeshStandardMaterial({
    color: student ? 0x456b64 : archivist ? 0x3b1d2e : scholar ? 0x2d3252 : wraith ? 0x243b42 : hero ? 0x1d3f59 : 0x313834,
    roughness: 0.96,
    side: T.DoubleSide,
    flatShading: true,
  });
  const armor = steel.clone();
  armor.color.setHex(
    stone ? 0x6f756b : construct ? 0x527670 : skeleton ? 0x6b7069 : hero ? 0x9eb0b5 : 0x5e6972,
  );
  armor.roughness = stone ? 0.94 : skeleton ? 0.72 : 0.44;
  armor.metalness = stone ? 0.08 : skeleton ? 0.36 : 0.68;

  // Fitted breastplate / tunic with sloped shoulders, collar gorget, and layered waist.
  const shape = new T.Shape();
  shape.moveTo(-0.26, -0.24);
  shape.lineTo(0.26, -0.24);
  shape.lineTo(0.36, 0.18);
  shape.lineTo(0.19, 0.32);
  shape.lineTo(-0.19, 0.32);
  shape.lineTo(-0.36, 0.18);
  shape.closePath();
  const chest = mesh(
    body,
    new T.ExtrudeGeometry(shape, { depth: 0.28, bevelEnabled: true, bevelSize: 0.035, bevelThickness: 0.035, bevelSegments: 1, steps: 1 }),
    mage || student ? cloth : armor,
    0,
    1.12,
    -0.16,
  );
  box(body, 0.075, 0.48, 0.045, bronze, 0, 1.14, -0.2);
  taper(body, 0.2, 0.24, 0.1, mage || student ? bronze : armor, 0, 1.43, -0.01, 8);
  box(body, 0.56, 0.11, 0.39, leather, 0, 0.85, 0);
  box(body, 0.13, 0.14, 0.055, bronze, 0, 0.85, -0.22);

  if (construct || stone) {
    // Glowing chest arcane core for bosses and bronze constructs
    mesh(body, new T.OctahedronGeometry(0.11, 0), eyeGlow, 0, 1.16, -0.22);
    taper(body, 0.15, 0.17, 0.05, bronze, 0, 1.16, -0.19, 6).rotation.x = Math.PI / 2;
  }
  if (skeleton) {
    for (let r = 0; r < 3; r++) box(body, 0.38 - r * 0.04, 0.038, 0.05, boneMat, 0, 1.24 - r * 0.11, -0.205);
  }
  if (!student) {
    const crest = taper(body, 0.1, 0.02, 0.22, bronze, 0, 1.22, -0.23, 4);
    crest.rotation.x = Math.PI / 2;
    for (let s = -1; s <= 1; s += 2) {
      const skirt = box(body, 0.23, 0.32, 0.3, cloth, s * 0.18, 0.7, 0);
      skirt.rotation.z = s * 0.1;
    }
  }

  const head = new T.Group();
  head.position.y = 1.58;
  body.add(head);

  if (student) {
    taper(head, 0.17, 0.16, 0.3, new T.MeshStandardMaterial({ color: 0xc69c79, roughness: 0.94 }), 0, 0, 0, 8);
    mesh(head, new T.SphereGeometry(0.185, 10, 7, 0, Math.PI * 2, 0, Math.PI * 0.62), leather, 0, 0.08, 0.01);
    const hoodPeak = box(head, 0.3, 0.08, 0.22, leather, 0, 0.15, -0.06);
    hoodPeak.rotation.x = 0.22;
  } else if (mage) {
    // Draped hooded cowl with deep shadowed recess and peering arcane/crimson eyes
    box(head, 0.34, 0.28, 0.3, dark, 0, -0.01, -0.02);
    const cowlBack = taper(head, 0.2, 0.27, 0.34, cloth, 0, 0.02, 0.03, 8);
    cowlBack.rotation.x = -0.14;
    const cowlDome = mesh(head, new T.SphereGeometry(0.24, 9, 7, 0, Math.PI * 2, 0, Math.PI * 0.65), cloth, 0, 0.09, 0.01);
    cowlDome.scale.set(0.95, 1.0, 1.15);
    const cowlPeak = taper(head, 0.03, 0.19, 0.24, cloth, 0, 0.18, -0.11, 6);
    cowlPeak.rotation.x = -0.95;
    box(head, 0.3, 0.045, 0.06, bronze, 0, 0.14, -0.2);
    for (const s of [-1, 1]) box(head, 0.072, 0.028, 0.045, eyeGlow, s * 0.08, 0.02, -0.185);
    if (archivist) {
      // Ceremonial golden astrolabe halo ring around the Eternal Archivist's crown
      const halo = mesh(head, new T.TorusGeometry(0.42, 0.028, 6, 24), bronze, 0, 0.22, 0.14);
      halo.rotation.x = -0.28;
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI) / 2 + Math.PI / 4;
        const fin = box(halo, 0.04, 0.12, 0.04, eyeGlow, Math.cos(a) * 0.44, Math.sin(a) * 0.44, 0);
        fin.rotation.z = a + Math.PI / 2;
      }
    }
  } else if (skeleton) {
    // Cracked skull helm with hollow jaw and rusted iron brow band
    mesh(head, new T.SphereGeometry(0.18, 9, 7), boneMat, 0, 0.04, 0);
    box(head, 0.2, 0.13, 0.22, boneMat, 0, -0.07, -0.04);
    taper(head, 0.195, 0.195, 0.07, armor, 0, 0.08, 0, 8);
    box(head, 0.26, 0.055, 0.05, dark, 0, 0.01, -0.17);
    for (const s of [-1, 1]) box(head, 0.065, 0.028, 0.04, glow, s * 0.075, 0.025, -0.19);
  } else {
    // Rounded medieval barbute / sallet knight dome with visor brow, cheek plates, and crest
    taper(head, 0.18, 0.22, 0.26, armor, 0, -0.04, 0, 8);
    const dome = mesh(head, new T.SphereGeometry(0.205, 10, 7, 0, Math.PI * 2, 0, Math.PI * 0.64), armor, 0, 0.075, 0.005);
    dome.scale.set(0.96, 0.92, 1.08);
    const brow = box(head, 0.34, 0.058, 0.16, armor, 0, 0.075, -0.155);
    brow.rotation.x = 0.24;
    const nape = box(head, 0.31, 0.11, 0.16, armor, 0, -0.06, 0.145);
    nape.rotation.x = -0.35;
    box(head, 0.29, 0.06, 0.04, dark, 0, 0.015, -0.2);
    box(head, 0.042, 0.2, 0.045, bronze, 0, -0.03, -0.225);
    for (const s of [-1, 1]) box(head, 0.07, 0.022, 0.04, hero ? dark : eyeGlow, s * 0.085, 0.022, -0.22);
    if (hero) {
      // Swept dorsal helm crest ridge (rounded medieval ridge rather than sharp cone)
      box(head, 0.042, 0.075, 0.32, bronze, 0, 0.265, 0.02);
      const ridgeTip = box(head, 0.036, 0.05, 0.12, cloth, 0, 0.24, 0.19);
      ridgeTip.rotation.x = -0.42;
    }
  }

  if (stone || construct || archivist) {
    for (const s of [-1, 1]) {
      const horn = taper(head, 0.018, 0.085, 0.56, bronze, s * 0.22, 0.34, 0, 5);
      horn.rotation.z = -s * 0.45;
      if (archivist) {
        for (let i = 0; i < 3; i++) {
          const h = taper(head, 0.01, 0.032, 0.26, bronze, s * (0.22 + i * 0.08), 0.46 + i * 0.12, 0, 4);
          h.rotation.z = s * 0.78;
        }
      }
    }
  }

  const arms: T.Group[] = [];
  const legs: T.Group[] = [];
  for (const s of [-1, 1]) {
    const arm = new T.Group();
    arm.position.set(s * 0.37, 1.32, 0);
    body.add(arm);
    arms.push(arm);
    const shoulder = taper(arm, 0.18, 0.24, 0.2, mage ? bronze : armor, s * 0.03, -0.035, 0, 6);
    shoulder.scale.z = 1.15;
    if (hero || construct || archivist) {
      box(arm, 0.26, 0.045, 0.26, bronze, s * 0.04, 0.055, 0);
    }
    taper(arm, 0.1, 0.085, 0.28, cloth, 0, -0.23, 0);
    taper(arm, 0.12, 0.09, 0.23, armor, 0, -0.47, -0.015);
    box(arm, 0.16, 0.17, 0.17, leather, 0, -0.65, -0.02);

    const leg = new T.Group();
    leg.position.set(s * 0.17, 0.76, 0);
    body.add(leg);
    legs.push(leg);
    taper(leg, 0.14, 0.11, 0.31, leather, 0, -0.17, 0);
    box(leg, 0.19, 0.17, 0.2, armor, 0, -0.33, -0.045);
    taper(leg, 0.115, 0.09, 0.27, mage ? cloth : armor, 0, -0.48, 0.01);
    box(leg, 0.21, 0.17, 0.37, leather, 0, -0.67, -0.07);
    box(leg, 0.19, 0.065, 0.27, armor, 0, -0.6, -0.12);
  }
  if (mage) taper(body, 0.3, 0.54, 0.78, cloth, 0, 0.58, 0, 9);

  // Weighted cloth with a scalloped hem; deformed by movement rather than a rigid box.
  const capeGeo = new T.PlaneGeometry(0.68, 1.08, 6, 7);
  const pos = capeGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const f = (0.54 - pos.getY(i)) / 1.08;
    pos.setX(i, pos.getX(i) * (1 + f * 0.58));
    pos.setZ(i, 0.04 * Math.cos(pos.getX(i) * 28) + f * 0.12);
  }
  capeGeo.computeVertexNormals();
  const cape = mesh(body, capeGeo, cloth, 0, 0.91, 0.24);
  cape.rotation.x = 0.12;

  const sword = new T.Group();
  sword.position.set(0.4, 0.72, -0.08);
  body.add(sword);
  if (!student) {
    box(sword, 0.065, 0.065, 0.28, leather, 0, 0, -0.09);
    box(sword, 0.42, 0.055, 0.075, bronze, 0, 0, -0.26);
    const bladeShape = new T.Shape();
    bladeShape.moveTo(-0.07, 0);
    bladeShape.lineTo(0.07, 0);
    bladeShape.lineTo(0.05, -1.16);
    bladeShape.lineTo(0, -1.36);
    bladeShape.lineTo(-0.05, -1.16);
    bladeShape.closePath();
    const blade = mesh(sword, new T.ExtrudeGeometry(bladeShape, { depth: 0.035, bevelEnabled: false }), steel, 0, -0.02, -0.29);
    blade.rotation.x = Math.PI / 2;
    if (mage) {
      sword.clear();
      taper(sword, 0.04, 0.045, 1.95, bronze, 0, 0.18, 0);
      mesh(sword, new T.TorusGeometry(0.19, 0.032, 6, 18), bronze, 0, 1.15, 0);
      mesh(sword, new T.IcosahedronGeometry(0.105, 0), eyeGlow, 0, 1.15, 0);
    }
    if (stone) {
      box(sword, 0.52, 0.16, 1.08, armor, 0, 0, -0.92);
      box(sword, 0.22, 0.18, 0.08, bronze, 0, 0, -0.74);
    }
    if (construct) {
      box(sword, 0.045, 0.045, 0.85, eyeGlow, 0, 0.02, -0.78);
    }
    if (hero || skeleton) {
      const sh = new T.Shape();
      sh.moveTo(-0.23, 0.25);
      sh.lineTo(0.23, 0.25);
      sh.lineTo(0.2, -0.15);
      sh.lineTo(0, -0.35);
      sh.lineTo(-0.2, -0.15);
      sh.closePath();
      const shield = mesh(
        arms[0],
        new T.ExtrudeGeometry(sh, { depth: 0.065, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 1, steps: 1 }),
        bronze,
        -0.08,
        -0.42,
        -0.16,
      );
      const inner = mesh(shield, new T.ExtrudeGeometry(sh, { depth: 0.02, bevelEnabled: false }), cloth, 0, 0, -0.04);
      inner.scale.set(0.78, 0.78, 1);
      box(shield, 0.035, 0.4, 0.03, bronze, 0, 0, -0.07);
    }
  }

  // Merge static submeshes per articulating limb/head/weapon to reduce draw calls significantly
  batchStatic(head, true, 100);
  batchStatic(sword, true, 100);
  arms.forEach((a) => batchStatic(a, true, 100));
  legs.forEach((l) => batchStatic(l, true, 100));

  // Cheap, soft grounding on every preset.
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(32, 32, 4, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(0,0,0,0.55)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  const shadow = mesh(
    root,
    new T.PlaneGeometry(1.65, 1.65),
    new T.MeshBasicMaterial({ map: new T.CanvasTexture(canvas), transparent: true, depthWrite: false }),
    0,
    0.018,
    0,
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.castShadow = false;
  root.userData.rig = { root, body, chest, sword, cape, arms, legs, head };
  return root.userData.rig;
}

export function animateCharacter(
  rig: CharacterRig,
  time: number,
  speed: number,
  state: string,
  attackAngle = 0,
  reduced = false,
): void {
  const stride = Math.min(1, speed / 4.5);
  const wave = Math.sin(time * 9);
  rig.body.position.y = Math.abs(wave) * 0.035 * stride + (reduced ? 0 : Math.sin(time * 2) * 0.012);
  rig.legs.forEach((l, i) => {
    l.rotation.x = wave * (i ? -1 : 1) * 0.65 * stride;
  });
  rig.arms.forEach((a, i) => {
    a.rotation.x = wave * (i ? 1 : -1) * 0.45 * stride;
  });
  rig.body.rotation.x = state === 'dodge' ? -0.7 : state === 'stagger' ? 0.23 : 0;
  rig.body.rotation.z = state === 'stagger' ? 0.1 : 0;
  rig.sword.rotation.y = attackAngle;
  rig.sword.rotation.x = state === 'windup' ? -0.9 : state === 'attack' ? 0.35 : 0;
  if (state === 'windup') rig.arms[1].rotation.x = -1.5;
  if (state === 'attack') rig.arms[1].rotation.x = -0.6;
  if (state === 'dead') {
    rig.body.rotation.x = -1.45;
    rig.body.position.y = 0.26;
  }
  rig.cape.rotation.x = 0.12 + stride * 0.3 + (reduced ? 0 : Math.sin(time * 4) * 0.05);
}
