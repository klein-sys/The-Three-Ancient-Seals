import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { DUNGEON_ROOMS } from './levelData';
import { MaterialPalette } from './proceduralAssets';
import { BoxCollider } from '../math/geometry';
import { mesh } from './characterArt';

/** Static art is merged per material and room: detailed silhouettes without a draw call per stone. */
export function addEnvironmentArt(root:T.Group, palette:MaterialPalette, colliders:BoxCollider[]) {
  const limestone=new T.MeshStandardMaterial({color:0x767b75,roughness:.96,flatShading:true});
  const darkStone=new T.MeshStandardMaterial({color:0x3d4948,roughness:1});
  const blueCloth=new T.MeshStandardMaterial({color:0x203d51,roughness:1,side:T.DoubleSide});
  const paper=new T.MeshStandardMaterial({color:0x9d8c6d,roughness:1});
  const flame=new T.MeshBasicMaterial({color:0xffd08a});
  const coal=new T.MeshBasicMaterial({color:0xd36930});
  const books=[0x4a5557,0x735447,0x3e5452,0x615b46].map(color=>new T.MeshStandardMaterial({color,roughness:1}));
  let seed=941;const rand=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
  const fixtures:T.Vector3[]=[];
  const batches:T.Group[]=[];
  for(const room of DUNGEON_ROOMS) {
    const art=new T.Group(); root.add(art);batches.push(art);
    const w=room.maxX-room.minX,d=room.maxZ-room.minZ,cx=(room.maxX+room.minX)/2,cz=(room.maxZ+room.minZ)/2;
    const box=(ww:number,hh:number,dd:number,mat:T.Material,x:number,y:number,z:number)=>mesh(art,new T.BoxGeometry(ww,hh,dd),mat,x,y,z);
    const major=w>=8&&d>=8;
    if(room.isBridge) {
      box(24,.8,d+3,darkStone,cx,10,cz);
      for(const side of [-1,1]) {
        box(2.5,18,d+4,darkStone,cx+side*10,1,cz);
        const railX = cx+side*(w/2-.15);
        box(.34,.18,d+.4,darkStone,railX,.09,cz);
        for(let j=0;j<6;j++) {
          const zPos = room.minZ+j*2.4;
          const crag=mesh(art,new T.ConeGeometry(1+rand(),4+rand()*3,5),limestone,cx+side*(6+rand()*2),7.8,zPos);
          crag.rotation.z=Math.PI;
          box(.28,.2,.28,darkStone,railX,.1,zPos);
          const post=mesh(art,new T.CylinderGeometry(.11,.15,1.38,6),palette.goldTrim,railX,.86,zPos);post.castShadow=false;
        }
        box(.08,.08,d,palette.goldTrim,railX,1.54,cz);
        box(.05,.05,d,darkStone,railX,.86,cz);
      }
    }
    // Vaults close every room. Bridge has an intentional tall cavern opening.
    if(!room.isBridge) {
      const verts:number[]=[],uv:number[]=[],ind:number[]=[];
      for(let zi=0;zi<2;zi++) for(let i=0;i<=16;i++) {
        const a=i/16*Math.PI;verts.push(cx+Math.cos(a)*(w/2+.15),4.8+Math.sin(a)*2.4,zi?room.maxZ:room.minZ);uv.push(i/16,zi);
      }
      for(let i=0;i<16;i++) { const a=i,b=i+17;ind.push(a,b,a+1,a+1,b,b+1); }
      const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(verts,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(ind);geo.computeVertexNormals();
      const roofMat=palette.stoneWall.clone();roofMat.side=T.DoubleSide;roofMat.color.setHex(0x9aa39d);roofMat.emissive.setHex(0x161d21);roofMat.emissiveIntensity=1;
      const roof=mesh(art,geo,roofMat);roof.castShadow=false;roof.receiveShadow=false;
      const ribCount=Math.max(2,Math.round(d/5.5));
      for(let r=1;r<ribCount;r++) {
        const rz=room.minZ+(d*r)/ribCount;
        const rib=mesh(art,new T.TorusGeometry(w/2+.02,.13,5,14,Math.PI),darkStone,cx,4.8,rz);
        rib.scale.y=2.4/(w/2+.02);rib.castShadow=false;rib.receiveShadow=false;
      }
    }
    // Massive ribs and engaged columns repeat at a believable architectural rhythm.
    const zs=major ? [room.minZ+1,cz,room.maxZ-1] : [cz];
    for(const z of zs) {
      if(room.isBridge) continue;
      for(const s of [-1,1]) {
        const x=cx+s*(w/2-.12);
        const outsideX=x+s*.5;
        // Shared room edges are open passageways, never foundations for a column.
        if(DUNGEON_ROOMS.some(other=>other.id!==room.id && outsideX>other.minX && outsideX<other.maxX && z>other.minZ && z<other.maxZ)) continue;
        box(.6,.28,.8,limestone,x,.14,z);
        const col=mesh(art,new T.CylinderGeometry(.21,.25,4.2,8),limestone,x,2.35,z);col.receiveShadow=true;
        box(.65,.27,.8,limestone,x,4.48,z);box(.38,.18,.55,palette.goldTrim,x,4.18,z);
        colliders.push({id:`art_col_${room.id}_${z}_${s}`,minX:x-.3,maxX:x+.3,minZ:z-.4,maxZ:z+.4,minY:0,maxY:4.7,blocksSight:true});
      }
      for(let i=0;i<18;i++) {
        const a=(i+.5)/18*Math.PI;
        const arcLength=Math.hypot((w/2-.12)*Math.sin(a),2.4*Math.cos(a))*Math.PI/18*1.015;
        const block=box(arcLength,.4,.48,i===8||i===9?palette.goldTrim:limestone,cx+Math.cos(a)*(w/2-.12),4.6+Math.sin(a)*2.4,z);
        block.rotation.z=Math.atan2(2.4*Math.cos(a),-(w/2-.12)*Math.sin(a));
      }
    }
    if(!major) continue;
    // Inlaid route, a radial sanctuary floor, and bronze corner strips.
    for(const s of [-1,1]) box(.045,.015,d-.9,palette.goldTrim,cx+s*Math.min(2,w*.2),.014,cz);
    const radius=Math.min(w,d)*.25;
    for(const rad of [radius,radius+.2]) {const ring=mesh(art,new T.RingGeometry(rad,rad+.045,64),palette.goldTrim,cx,.022,cz);ring.rotation.x=-Math.PI/2;}
    for(let i=0;i<12;i++) {const a=i/12*Math.PI*2;const rune=box(.08,.024,.34,palette.goldTrim,cx+Math.sin(a)*(radius+.45),.025,cz+Math.cos(a)*(radius+.45));rune.rotation.y=a;}
    // Small raised shrines stay at room margins; their visible steps have matching collision.
    for(const s of [-1,1]) {
      const x=cx+s*(w/2-.8), z=room.maxZ-2.2;
      for(let i=0;i<3;i++) box(.9-i*.14,.16,1.4-i*.2,limestone,x,.08+i*.16,z);
      colliders.push({id:`shrine_${room.id}_${s}`,minX:x-.45,maxX:x+.45,minZ:z-.7,maxZ:z+.7,minY:0,maxY:.48,blocksSight:false});
      // Bronze braziers, coals, tongues of flame (no shadow-casting point light).
      mesh(art,new T.CylinderGeometry(.13,.25,1.1,6),palette.arcaneMetal,x,1.05,z);
      mesh(art,new T.CylinderGeometry(.36,.14,.25,8,1,true),palette.goldTrim,x,1.7,z);
      mesh(art,new T.IcosahedronGeometry(.15,0),coal,x,1.76,z);
      for(let i=0;i<3;i++){const fire=mesh(art,new T.ConeGeometry(.07,.32-i*.05,5),flame,x+(i-1)*.1,1.98,z);fire.rotation.z=(i-1)*.2;}
      fixtures.push(new T.Vector3(x,2.2,z));
      // Hanging, hemmed cloth with an embroidered crest.
      if(room.floorType!=='abyss') {
        const banner=box(.05,1.8,1.0,blueCloth,x+s*.35,3.35,cz-1.5);
        box(.07,.045,1.02,palette.goldTrim,banner.position.x,2.5,cz-1.5);
        box(.08,1.0,.05,palette.goldTrim,banner.position.x-s*.04,3.45,cz-1.5);
        box(.09,.05,.5,palette.goldTrim,banner.position.x-s*.05,3.55,cz-1.5);
        box(.12,.12,1.3,palette.arcaneMetal,banner.position.x,4.3,cz-1.5);
      }
    }
    // Hand-placed masonry, weathering and roots at the perimeter, clear of the central route.
    for(let i=0;i<18;i++) {
      const s=i%2?1:-1,x=cx+s*(w/2-.23-rand()*.4),z=room.minZ+rand()*d;
      const stone=box(.14+rand()*.2,.08+rand()*.12,.18+rand()*.25,limestone,x,.08,z);stone.rotation.y=rand()*3;
    }
    if(room.region==='ruins') {
      for(const s of [-1,1]) for(let i=0;i<5;i++) {const vine=mesh(art,new T.CylinderGeometry(.02,.06,1.4,5),darkStone,cx+s*(w/2-.1),3.8-i*.65,room.minZ+2+i*.15);vine.rotation.z=s*.15;}
    }
    if(room.region==='whispers') {
      // Library landmark: shelves, rows of individual book spines, and a central suspended astrolabe.
      for(const s of [-1,1]) for(let j=0;j<Math.floor(d/2.5);j++) {
        const x=cx+s*(w/2-.15),z=room.minZ+1.1+j*2.5;
        for(let row=0;row<4;row++) {
          box(.42,.1,2.1,palette.woodShelf,x,.5+row*.85,z);
          for(let b=0;b<10;b++) box(.25,.4+rand()*.25,.11,books[b%4],x-s*.2,.82+row*.85,z-.9+b*.18);
        }
      }
      for(const rot of [0,Math.PI/2]) {const ring=mesh(art,new T.TorusGeometry(1.7,.065,6,48),palette.goldTrim,cx,5.1,cz);ring.rotation.y=rot;}
      mesh(art,new T.IcosahedronGeometry(.45,1),palette.sealBlueGlow,cx,5.1,cz);
      // Lectern positioned against a wall, never in the crossing.
      box(.8,.9,.7,palette.woodShelf,room.maxX-1.1,.45,room.minZ+3);
      const tome=box(.8,.08,.55,paper,room.maxX-1.1,.96,room.minZ+3);tome.rotation.x=.25;
    }
    if(room.region==='abyss' || room.region==='sanctum') {
      // Machinery and the broken celestial clock give later arenas an identifiable silhouette.
      for(const s of [-1,1]) {
        const x=cx+s*(w/2-.8),z=room.minZ+2;
        for(let j=0;j<3;j++) {const gear=mesh(art,new T.TorusGeometry(.65+j*.15,.07,6,24),palette.goldTrim,x,1.5+j*.85,z);gear.rotation.x=Math.PI/2;}
        mesh(art,new T.CylinderGeometry(.26,.4,3.6,7),darkStone,x,1.8,z);
        mesh(art,new T.CylinderGeometry(.06,.06,2.8,6),palette.sealBlueGlow,x,2,z);
        colliders.push({id:`machine_${room.id}_${s}`,minX:x-.5,maxX:x+.5,minZ:z-.5,maxZ:z+.5,minY:0,maxY:3.6,blocksSight:true});
      }
      if(room.id.includes('arena')) for(let i=0;i<3;i++){const ring=mesh(art,new T.TorusGeometry(2+i*.55,.1,6,48,Math.PI*1.75),i%2?palette.goldTrim:limestone,cx,4.6,room.minZ+.6);ring.rotation.z=i*.7;}
    }
  }
  // Batch only static art; preserve texture attributes, room culling and animated actors.
  for(const group of batches) {
    const bins=new Map<string,{mat:T.Material;geos:T.BufferGeometry[];shadow:boolean}>();
    group.updateMatrixWorld(true);
    for(const child of [...group.children]) if(child instanceof T.Mesh) {
      const mat=child.material as T.Material;const key=mat.uuid+child.castShadow;
      const bin=bins.get(key)??{mat,geos:[],shadow:child.castShadow};
      const geo=child.geometry.clone().applyMatrix4(child.matrix);bin.geos.push(geo);bins.set(key,bin);
      group.remove(child);child.geometry.dispose();
    }
    for(const bin of bins.values()) {
      const geo=mergeGeometries(bin.geos,false);bin.geos.forEach(g=>g.dispose());
      if(geo){const m=mesh(group,geo,bin.mat);m.castShadow=bin.shadow;}
    }
  }
  return fixtures;
}
