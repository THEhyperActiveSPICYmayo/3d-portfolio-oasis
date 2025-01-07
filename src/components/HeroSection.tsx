import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

export const HeroSection = () => {
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

    // Create multiple geometric shapes with neon materials
    const shapes: THREE.Mesh[] = [];
    
    // Icosahedron with neon purple
    const icoGeometry = new THREE.IcosahedronGeometry(1.2, 0);
    const icoMaterial = new THREE.MeshPhongMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      emissive: 0x8B5CF6,
      emissiveIntensity: 0.8,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    shapes.push(icosahedron);

    // Torus with neon pink
    const torusGeometry = new THREE.TorusGeometry(0.8, 0.2, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0xD946EF,
      wireframe: true,
      emissive: 0xD946EF,
      emissiveIntensity: 0.8,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.x = 2;
    shapes.push(torus);

    // Octahedron with neon blue
    const octaGeometry = new THREE.OctahedronGeometry(0.8);
    const octaMaterial = new THREE.MeshPhongMaterial({
      color: 0x0EA5E9,
      wireframe: true,
      emissive: 0x0EA5E9,
      emissiveIntensity: 0.8,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.x = -2;
    shapes.push(octahedron);

    // Dodecahedron with neon green
    const dodecaGeometry = new THREE.DodecahedronGeometry(0.8);
    const dodecaMaterial = new THREE.MeshPhongMaterial({
      color: 0x4ADE80,
      wireframe: true,
      emissive: 0x4ADE80,
      emissiveIntensity: 0.8,
    });
    const dodecahedron = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
    dodecahedron.position.y = 2;
    shapes.push(dodecahedron);

    shapes.forEach(shape => sceneRef.current?.add(shape));

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    sceneRef.current?.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 5, 5);
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

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_100%)]" />
      <div ref={containerRef} className="absolute inset-0 -z-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4"
          >
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple neon-glow inline-block">
              Welcome to my portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
          >
            Creative Developer &
            <br />
            Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Crafting digital experiences through code and design
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="neon-button inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-neon-purple/20 text-neon-purple hover:bg-neon-purple/30 h-11 px-8 neon-glow"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};