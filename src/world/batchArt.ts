import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** Merge only explicitly selected static meshes; colliders and all animated roots remain independent. */
export function batchStatic(root:T.Object3D, recursive=false, chunkSize=18):void {
  const selected:T.Mesh[]=[];
  if(recursive) root.traverse(o=>{if(o!==root&&o instanceof T.Mesh) selected.push(o);});
  else for(const o of root.children) if(o instanceof T.Mesh) selected.push(o);
  root.updateWorldMatrix(true,true);
  const inverse=root.matrixWorld.clone().invert();
  const bins=new Map<string,{material:T.Material,geometries:T.BufferGeometry[],shadow:boolean}>();
  for(const m of selected) {
    if(Array.isArray(m.material)) continue;
    const transform=new T.Matrix4().multiplyMatrices(inverse,m.matrixWorld);
    const key=m.material.uuid+'_'+m.castShadow+'_'+Math.floor(transform.elements[14]/chunkSize);
    const bin=bins.get(key)??{material:m.material,geometries:[],shadow:m.castShadow};
    const base = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
    bin.geometries.push(base.applyMatrix4(transform));bins.set(key,bin);
    m.removeFromParent();m.geometry.dispose();
  }
  for(const bin of bins.values()) {
    const geo=mergeGeometries(bin.geometries);bin.geometries.forEach(g=>g.dispose());
    if(!geo) continue;
    const m=new T.Mesh(geo,bin.material);m.castShadow=bin.shadow;m.receiveShadow=true;root.add(m);
  }
}
