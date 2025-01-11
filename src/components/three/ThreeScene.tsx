import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createNeonMaterial } from './materials';

export const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup with performance optimizations
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Optimize renderer
    rendererRef.current = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: window.devicePixelRatio < 2, // Disable antialiasing on high-DPI devices
      powerPreference: "high-performance",
    });
    
    // Adjust pixel ratio for better performance on mobile
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    rendererRef.current.setPixelRatio(pixelRatio);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create shapes with shared geometries for better performance
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      { geometry: new THREE.IcosahedronGeometry(1.2, 0), color: 0x8B5CF6, position: { x: 0, y: 0, z: 0 } },
      { geometry: new THREE.TorusGeometry(0.8, 0.2, 16, 100), color: 0xD946EF, position: { x: 2, y: 0, z: 0 } },
      { geometry: new THREE.OctahedronGeometry(0.8), color: 0x0EA5E9, position: { x: -2, y: 0, z: 0 } },
      { geometry: new THREE.DodecahedronGeometry(0.8), color: 0x4ADE80, position: { x: 0, y: 2, z: 0 } }
    ];

    // Use shared materials
    const materials = new Map();
    
    geometries.forEach(({ geometry, color, position }) => {
      let material = materials.get(color);
      if (!material) {
        material = createNeonMaterial(color);
        materials.set(color, material);
      }
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(position.x, position.y, position.z);
      shapes.push(mesh);
      sceneRef.current?.add(mesh);
    });

    // Optimize lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 5, 5);
    
    sceneRef.current?.add(ambientLight);
    sceneRef.current?.add(pointLight);

    cameraRef.current.position.z = 5;

    // Throttle animation frame for better performance
    let lastFrame = 0;
    const fps = 60;
    const interval = 1000 / fps;

    const animate = (timestamp: number) => {
      requestAnimationFrame(animate);
      
      const delta = timestamp - lastFrame;
      if (delta < interval) return;
      
      shapes.forEach(shape => {
        shape.rotation.x += 0.002;
        shape.rotation.y += 0.002;
      });
      
      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      lastFrame = timestamp;
    };

    // Start animation and mark as loaded
    animate(0);
    setIsLoading(false);

    // Throttled resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      resizeTimeout = setTimeout(() => {
        if (!cameraRef.current || !rendererRef.current) return;
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      // Clean up geometries and materials
      shapes.forEach(shape => {
        shape.geometry.dispose();
      });
      materials.forEach(material => {
        material.dispose();
      });
    };
  }, []);

  if (isLoading) {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-neon-purple rounded-full animate-spin border-t-transparent" />
      </div>
    );
  }

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};