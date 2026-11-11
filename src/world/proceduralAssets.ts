import * as THREE from 'three';
import { TextureQuality } from '../config/gameConfig';

export interface MaterialPalette {
  stoneWall: THREE.MeshStandardMaterial;
  stoneFloor: THREE.MeshStandardMaterial;
  libraryFloor: THREE.MeshStandardMaterial;
  abyssFloor: THREE.MeshStandardMaterial;
  goldTrim: THREE.MeshStandardMaterial;
  arcaneMetal: THREE.MeshStandardMaterial;
  woodShelf: THREE.MeshStandardMaterial;
  sealBlueGlow: THREE.MeshStandardMaterial;
  dispose: () => void;
}

function createStoneTexture(size: number, detailed: boolean, baseColor: string, crackColor: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, size, size);

  const rows = 4;
  const cols = 4;
  const bh = size / rows;
  const bw = size / cols;

  // Deterministic pseudo-random helper
  let seed = 1337;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let r = 0; r < rows; r++) {
    const offset = (r % 2) * (bw * 0.5);
    for (let c = -1; c <= cols; c++) {
      const x = c * bw + offset;
      const y = r * bh;
      const shade = Math.floor(rand() * 18) - 9;
      ctx.fillStyle = `rgba(${120 + shade}, ${125 + shade}, ${138 + shade}, 0.16)`;
      ctx.fillRect(x + 2, y + 2, bw - 4, bh - 4);

      ctx.strokeStyle = crackColor;
      ctx.lineWidth = detailed ? 3 : 2;
      ctx.strokeRect(x, y, bw, bh);

      if (detailed) {
        // Fine stone speckles and micro-cracks
        for (let s = 0; s < 14; s++) {
          const sx = x + 4 + rand() * (bw - 8);
          const sy = y + 4 + rand() * (bh - 8);
          ctx.fillStyle = rand() > 0.5 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.16)';
          ctx.fillRect(sx, sy, 2 + rand() * 3, 2);
        }
        if (rand() > 0.55) {
          ctx.beginPath();
          ctx.moveTo(x + rand() * bw * 0.4, y + 4);
          ctx.lineTo(x + bw * 0.5, y + bh * (0.4 + rand() * 0.4));
          ctx.strokeStyle = 'rgba(10, 14, 22, 0.4)';
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createRuneMetalTexture(size: number, detailed: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#182438';
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = '#6e9e99';
  ctx.lineWidth = detailed ? 3 : 2;
  ctx.strokeRect(size * 0.08, size * 0.08, size * 0.84, size * 0.84);

  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.5, size * 0.28, 0, Math.PI * 2);
  ctx.stroke();

  if (detailed) {
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(size * 0.2, size * 0.5);
    ctx.lineTo(size * 0.8, size * 0.5);
    ctx.moveTo(size * 0.5, size * 0.2);
    ctx.lineTo(size * 0.5, size * 0.8);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createDungeonMaterials(quality: TextureQuality): MaterialPalette {
  const size = quality === 'detailed' ? 512 : 256;
  const detailed = quality === 'detailed';

  const wallTex = createStoneTexture(size, detailed, '#626961', '#454b45');
  wallTex.repeat.set(2, 1.5);

  const floorTex = createStoneTexture(size, detailed, '#525b57', '#39413c');
  floorTex.repeat.set(6, 6);

  const libFloorTex = createStoneTexture(size, detailed, '#484d51', '#30373c');
  libFloorTex.repeat.set(6, 6);

  const abyssFloorTex = createStoneTexture(size, detailed, '#3d5257', '#293c40');
  abyssFloorTex.repeat.set(6, 6);

  const runeTex = createRuneMetalTexture(size, detailed);

  const stoneWall = new THREE.MeshStandardMaterial({
    map: wallTex,
    bumpMap:wallTex, bumpScale:.035,
    roughness: 0.88,
    metalness: 0.08,
  });

  const stoneFloor = new THREE.MeshStandardMaterial({
    map: floorTex,
    bumpMap:floorTex, bumpScale:.025,
    roughness: 0.92,
    metalness: 0.05,
  });

  const libraryFloor = new THREE.MeshStandardMaterial({
    map: libFloorTex,
    roughness: 0.85,
    metalness: 0.1,
  });

  const abyssFloor = new THREE.MeshStandardMaterial({
    map: abyssFloorTex,
    roughness: 0.75,
    metalness: 0.2,
  });

  const goldTrim = new THREE.MeshStandardMaterial({
    color: 0xb49a64,
    roughness: 0.52,
    metalness: 0.82,
  });

  const arcaneMetal = new THREE.MeshStandardMaterial({
    map: runeTex,
    roughness: 0.35,
    metalness: 0.7,
    emissive: new THREE.Color(0x0a2e4d),
    emissiveIntensity: 0.55,
  });

  const woodShelf = new THREE.MeshStandardMaterial({
    color: 0x3b2416,
    roughness: 0.85,
    metalness: 0.05,
  });

  const sealBlueGlow = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    emissive: 0x0284c7,
    emissiveIntensity: 1.35,
    roughness: 0.2,
    metalness: 0.4,
  });

  return {
    stoneWall,
    stoneFloor,
    libraryFloor,
    abyssFloor,
    goldTrim,
    arcaneMetal,
    woodShelf,
    sealBlueGlow,
    dispose: () => {
      [wallTex, floorTex, libFloorTex, abyssFloorTex, runeTex].forEach((t) => t.dispose());
      [
        stoneWall,
        stoneFloor,
        libraryFloor,
        abyssFloor,
        goldTrim,
        arcaneMetal,
        woodShelf,
        sealBlueGlow,
      ].forEach((m) => m.dispose());
    },
  };
}

