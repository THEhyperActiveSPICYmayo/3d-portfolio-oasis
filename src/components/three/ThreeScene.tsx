import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNeonMaterial } from './materials';

export const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    rendererRef.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create shapes array
    const shapes: THREE.Mesh[] = [];
    
    // Add shapes with neon materials
    const geometries = [
      { geometry: new THREE.IcosahedronGeometry(1.2, 0), color: 0x8B5CF6, position: { x: 0, y: 0, z: 0 } },
      { geometry: new THREE.TorusGeometry(0.8, 0.2, 16, 100), color: 0xD946EF, position: { x: 2, y: 0, z: 0 } },
      { geometry: new THREE.OctahedronGeometry(0.8), color: 0x0EA5E9, position: { x: -2, y: 0, z: 0 } },
      { geometry: new THREE.DodecahedronGeometry(0.8), color: 0x4ADE80, position: { x: 0, y: 2, z: 0 } }
    ];

    geometries.forEach(({ geometry, color, position }) => {
      const material = createNeonMaterial(color);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(position.x, position.y, position.z);
      shapes.push(mesh);
      sceneRef.current?.add(mesh);
    });

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 5, 5);
    
    sceneRef.current?.add(ambientLight);
    sceneRef.current?.add(pointLight);

    cameraRef.current.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      shapes.forEach(shape => {
        shape.rotation.x += 0.002;
        shape.rotation.y += 0.002;
      });
      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};