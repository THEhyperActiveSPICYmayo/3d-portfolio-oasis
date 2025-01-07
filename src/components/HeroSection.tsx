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
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Add geometric shapes
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    const shape = new THREE.Mesh(geometry, material);
    sceneRef.current.add(shape);

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 2);
    sceneRef.current.add(light);

    cameraRef.current.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (shape) {
        shape.rotation.x += 0.001;
        shape.rotation.y += 0.001;
      }
      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Cleanup
    return () => {
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block">
              Welcome to my portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
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
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};