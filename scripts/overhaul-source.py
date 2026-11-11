from pathlib import Path
p=Path('src/world/worldBuilder.ts');s=p.read_text(encoding='utf-8')
s=s.replace("import * as THREE from 'three';", "import * as THREE from 'three';\nimport { createCharacter, mesh as artMesh } from './characterArt';\nimport { addEnvironmentArt } from './environmentArt';")
s=s.replace('  applyTextureQuality: (quality:', '  updateAtmosphere: (x:number,z:number,time:number) => void;\n  applyTextureQuality: (quality:')
s=s.replace('0x8fa8d6, 0x1a1520, 0.72','0x9eafb6, 0x343e38, 1.5').replace('0xffe6b3, 0.85','0xffd9a5, 2.2')
s=s.replace('  dirLight.shadow.camera.left = -35;', '  dirLight.shadow.normalBias = .04;\n  dirLight.shadow.bias = -.0002;\n  dirLight.shadow.camera.left = -18;').replace('camera.right = 35','camera.right = 18').replace('camera.top = 35','camera.top = 18').replace('camera.bottom = -35','camera.bottom = -18')
s=s.replace('  ambientLights.push(dirLight);','  ambientLights.push(dirLight);\n  dungeonRoot.add(dirLight.target);\n  const rim = new THREE.DirectionalLight(0x85b8c8, .7); rim.position.set(-10,8,-20); dungeonRoot.add(rim);')
# Texture world units instead of stretch on each differently sized wall.
s=s.replace('    mesh.receiveShadow = true;\n    dungeonRoot.add(mesh);\n\n    if (r.floorType', '''    const uv=geo.attributes.uv; for(let i=0;i<uv.count;i++) { uv.setXY(i,uv.getX(i)*w/12,uv.getY(i)*d/12); }
    mesh.receiveShadow = true;
    dungeonRoot.add(mesh);

    if (r.floorType''')
s=s.replace('    if (!isShelf) wallMeshes.push(mesh);', '''    if (!isShelf) {
      const uv=mesh.geometry.attributes.uv;
      // Box face UVs: side faces repeat with their own physical widths.
      for(let i=0;i<uv.count;i++){ const face=Math.floor(i/4); const span=face<2?d:face<4?w:w; uv.setXY(i,uv.getX(i)*span/3,uv.getY(i)*h/3); }
      wallMeshes.push(mesh);
    } else {
      for(let y=.55;y<3.4;y+=.72) for(let z=box.minZ+.2;z<box.maxZ-.1;z+=.27) {
        const book=artMesh(dungeonRoot,new THREE.BoxGeometry(w+.05,.48,.16),new THREE.MeshStandardMaterial({color:z%1>.5?0x74634e:0x435557,roughness:1}),(box.minX+box.maxX)/2,y,z); book.castShadow=false;
      }
    }''')
start=s.index('  // Regional atmospheric torch/arcane point lights')
end=s.index('  // Doors',start)
s=s[:start]+'''  const fixturePositions = addEnvironmentArt(dungeonRoot, palette, wallColliders);
  // A fixed light pool avoids compiling a shader with a light for every torch in the dungeon.
  for(let i=0;i<3;i++) { const light=new THREE.PointLight(0xffb96c,28,13,2); dungeonRoot.add(light); effectLights.push(light); }
  let effectsQuality=initialEffectsQuality;
  const updateAtmosphere=(x:number,z:number,time:number)=>{
    const nearest=[...fixturePositions].sort((a,b)=>Math.hypot(a.x-x,a.z-z)-Math.hypot(b.x-x,b.z-z));
    effectLights.forEach((light,i)=>{ const pos=nearest[i]; if(pos) light.position.copy(pos); light.intensity=(effectsQuality==='low'?16:30)*(1+.055*Math.sin(time*6+i*2)); });
    dirLight.position.set(x+8,18,z+5); dirLight.target.position.set(x,0,z-4); dirLight.target.updateMatrixWorld();
  };

'''+s[end:]
# Gate construction: visible structural jambs, inset panels, bands, bolts and a central seal.
needle='    frameGroup.add(lintel);'
s=s.replace(needle,needle+'''
    const side=spec.orientation==='z-axis';
    const span=side?spec.depth:spec.width;
    const portal=new THREE.Group(); if(side) portal.rotation.y=Math.PI/2; frameGroup.add(portal);
    for(const sign of [-1,1]) {
      const jamb=artMesh(portal,new THREE.BoxGeometry(.42,4.2,1.1),palette.stoneWall,sign*(span/2+.05),2.1,0);
      artMesh(jamb,new THREE.BoxGeometry(.48,.22,1.17),palette.goldTrim,0,1.6,0);
    }
    for(let i=0;i<9;i++) {const a=(i+.5)/9*Math.PI;const stone=artMesh(portal,new THREE.BoxGeometry(span/9,.32,.85),palette.stoneWall,Math.cos(a)*span/2,3.85+Math.sin(a)*.6,0);stone.rotation.z=a-Math.PI/2;}
    const detail=new THREE.Group(); if(side) detail.rotation.y=Math.PI/2; mesh.add(detail);
    for(const face of [-1,1]) {
      for(const sy of [-1,1]) artMesh(detail,new THREE.BoxGeometry(span-.2,.12,.05),palette.goldTrim,0,sy*1.35,face*.48);
      for(const sx of [-1,1]) {
        artMesh(detail,new THREE.BoxGeometry(span*.38,2.35,.1),palette.woodShelf,sx*span*.24,0,face*.48);
        for(const sy of [-1,1]) artMesh(detail,new THREE.CylinderGeometry(.06,.06,.08,6),palette.goldTrim,sx*(span/2-.25),sy*1.34,face*.54).rotation.x=Math.PI/2;
      }
      const seal=artMesh(detail,new THREE.TorusGeometry(.43,.065,6,32),palette.goldTrim,0,0,face*.62);
      artMesh(seal,new THREE.CylinderGeometry(.29,.29,.06,8),palette.arcaneMetal).rotation.x=Math.PI/2;
      for(let i=0;i<3;i++) artMesh(seal,new THREE.BoxGeometry(.035,.2,.04),palette.sealBlueGlow,(i-1)*.13,0,face*.05);
    }
''')
s=s.replace('new THREE.OctahedronGeometry(0.35, 0)','new THREE.CylinderGeometry(0.19, 0.23, 0.55, 6)')
s=s.replace('    root.add(ringB);\n\n    dungeonRoot.add(root);','''    root.add(ringB);
    for(let i=0;i<3;i++){const a=i/3*Math.PI*2;const brace=artMesh(root,new THREE.CylinderGeometry(.055,.08,.85,6),palette.goldTrim,Math.cos(a)*.38,1.4,Math.sin(a)*.38);brace.rotation.z=Math.cos(a)*.2;}
    const holdRing=artMesh(root,new THREE.TorusGeometry(.68,.045,6,48),palette.sealBlueGlow,0,.08,0);holdRing.rotation.x=-Math.PI/2;holdRing.name='holdRing';

    dungeonRoot.add(root);''')
# Blade geometry aligned with existing swept box collider.
start=s.index('    const body = new THREE.Mesh(',s.index('  // Harmonic Traps'))
end=s.index('    root.add(bladeGroup);',start)
s=s[:start]+'''    const bladeMat=new THREE.MeshStandardMaterial({color:0x8c9291,metalness:.8,roughness:.35});
    artMesh(bladeGroup,new THREE.BoxGeometry(spec.halfExtents.x*2,spec.halfExtents.y*2,spec.halfExtents.z*2),bladeMat,0,spec.halfExtents.y,0);
    for(const side of [-1,1]) for(let i=0;i<4;i++) {
      const tooth=artMesh(bladeGroup,new THREE.ConeGeometry(.22,.48,3),bladeMat,side*spec.halfExtents.x,.4+i*.7,0);tooth.rotation.z=side*-Math.PI/2;
    }
    artMesh(bladeGroup,new THREE.BoxGeometry(.14,spec.halfExtents.y*2+.7,.14),palette.arcaneMetal,0,spec.halfExtents.y+.25,0);
    for(const endpoint of [-1,1]) artMesh(root,new THREE.CylinderGeometry(.18,.25,.22,8),palette.goldTrim,endpoint*(spec.amplitude+spec.halfExtents.x),.11,0);
    const warning=artMesh(root,new THREE.BoxGeometry(trackLen,.025,.055),new THREE.MeshBasicMaterial({color:0xae774c}),0,.07,spec.halfExtents.z+.25);warning.name='motionCue';

'''+s[end:]
# Enemy rig replaces placeholder body and eyes; maintain existing combat bindings.
start=s.index('    const bodyMesh = new THREE.Mesh(',s.index('  // Enemies & Bosses'))
end=s.index('    const shieldSphere =',start)
s=s[:start]+'''    const rig=createCharacter(sp.archetypeId); rig.root.scale.setScalar(scale); root.add(rig.root); root.userData.rig=rig;
    const bodyMesh=rig.chest;

'''+s[end:]
s=s.replace('        wireframe: true,','        wireframe: false,\n        depthWrite: false,',1).replace('        opacity: 0.32,','        opacity: 0.12,')
# Player rig
start=s.index('  // Player Character Visual');end=s.index('  // Axiom Companion Visual',start)
s=s[:start]+'''  // Articulated armor, equipment and weighted cape.
  const heroRig=createCharacter('hero');
  const playerRoot=heroRig.root, bodyGroup=heroRig.body, swordPivot=heroRig.sword, capeMesh=heroRig.cape;
  const playerTorch = new THREE.PointLight(0xa5c8d3, 8, 10, 2);
  playerTorch.position.set(.4,2.4,1.5);playerRoot.add(playerTorch);dungeonRoot.add(playerRoot);

'''+s[end:]
# Axiom is an antique astrolabe, not a floating diamond.
s=s.replace('new THREE.OctahedronGeometry(0.28, 1)','new THREE.IcosahedronGeometry(0.13, 1)')
s=s.replace('const axLight = new THREE.PointLight(0x38bdf8, 6, 10, 1.6);','const axLight = new THREE.PointLight(0x83cbbb, 0, 6, 2);')
start=s.index('  const studentBodyGroup = new THREE.Group();');end=s.index('  const stasisDome =',start)
s=s[:start]+'''  const studentRig=createCharacter('student');
  const studentBodyGroup=studentRig.body;
  studentRoot.add(studentRig.root);

'''+s[end:]
s=s.replace('      wireframe: true,','      wireframe: false,\n      depthWrite: false,').replace('      opacity: 0.35,','      opacity: 0.13,')
s=s.replace('  const eTorso = torso.clone();\n  const eHead = head.clone();\n  endingProtagonistGroup.add(eTorso, eHead);','  endingProtagonistGroup.add(createCharacter("hero").root);')
s=s.replace('  const esTorso = sTorso.clone();\n  const esHead = sHead.clone();\n  endingStudentGroup.add(esTorso, esHead);','  endingStudentGroup.add(createCharacter("student").root);')
start=s.index('    const factor =',s.index('  const applyEffectsQuality'))
end=s.index('\n  };',start)
s=s[:start]+'''    effectsQuality=quality;
    effectLights.forEach((pt,i) => {pt.visible=i<(quality==='low'?1:quality==='medium'?2:3);});
    playerTorch.intensity=quality==='low'?10:8;'''+s[end:]
s=s.replace('    applyTextureQuality,','    updateAtmosphere,\n    applyTextureQuality,')
# Preserve live material references when selecting real procedural texture variants.
start=s.index('    for (const m of wallMeshes)',s.index('  const applyTextureQuality'))
end=s.index('\n  };',start)
s=s[:start]+'''    const names=['stoneWall','stoneFloor','libraryFloor','abyssFloor','arcaneMetal'] as const;
    for(const key of names) { const mat=palette[key];mat.map?.dispose();mat.map=newPal[key].map;mat.needsUpdate=true; }
    // Other materials stay owned by the palette; only replacement material shells are discarded.
    for(const key of names) newPal[key].dispose();'''+s[end:]
p.write_text(s,encoding='utf-8')
# Presentation-safe text, keeping all stable IDs and existing saves.
replacements={
'The Abyss of Equations':'The Abyssal Sanctum', 'Abyss of Equations':'Abyssal Sanctum', 'Keeper of Equations':'Abyssal Warden', 'Equation Stalker':'Bronze Revenant',
'Derivative Energy Door':'The Stillwater Seal', 'Harmonic Core Optimizer':'Celestial Core', 'Student Containment Optimizer':'Student Containment Seal',
'First Ancient Seal (Seal of Rates)':'First Ancient Seal', 'Second Ancient Seal (Seal of Motion)':'Second Ancient Seal', 'Third Ancient Seal (Seal of Extremum)':'Third Ancient Seal',
'Energy mechanisms settle only where their rate of change vanishes and their curvature curves upward into a true valley.':'Turn the bronze seals until their trembling fades. When the current runs steady, hold it there. The old locks will remember.',
'operate calculus mechanisms':'align ancient mechanisms','calculus field notes':'field notes',
"Align derivative E\\'(x) to zero to unlock the gate.":'Turn the seal until the current settles. Hold it steady to open the gate.',
'Balance both crystals until the gradient ||∇E(x,y)|| falls to zero.':'Bring both crystals into harmony. Follow the currents until they settle.',
'Stabilize the energy valley to trigger the mechanism.':'Steady the current until the bronze ring closes.',
'Align both optimization crystals to collapse the field.':'Align both crystals to weaken the barrier.',
'You stabilized the minimum!':'The barrier is gone!',
}
for file in ['src/world/levelData.ts','src/config/gameConfig.ts','src/gameplay/gameEngine.ts','src/input/actions.ts','src/gameplay/companionController.ts']:
 p=Path(file);s=p.read_text(encoding='utf-8')
 for a,b in replacements.items():s=s.replace(a,b)
 if file.endswith('actions.ts'):s=s.replace("attack: { primary: 'Mouse2'", "attack: { primary: 'Mouse0'")
 if file.endswith('levelData.ts'):s=s.replace('WALL_HEIGHT = 4.6','WALL_HEIGHT = 6.8')
 p.write_text(s,encoding='utf-8')
