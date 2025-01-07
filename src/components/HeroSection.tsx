import { ThreeScene } from './three/ThreeScene';
import { HeroContent } from './hero/HeroContent';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_100%)]" />
      <ThreeScene />
      <div className="container mx-auto px-6 relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};