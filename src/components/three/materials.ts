import * as THREE from 'three';

export const createNeonMaterial = (color: number) => {
  return new THREE.MeshPhongMaterial({
    color,
    wireframe: true,
    emissive: color,
    emissiveIntensity: 0.8,
  });
};