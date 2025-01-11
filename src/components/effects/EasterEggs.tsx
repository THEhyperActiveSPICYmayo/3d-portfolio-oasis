import { useEffect } from 'react';
import gsap from 'gsap';
import { useToast } from "@/hooks/use-toast";

export const EasterEggs = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    let konami = '';
    const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      konami += e.key;
      if (konami.length > konamiCode.length) {
        konami = konami.substring(1);
      }
      
      if (konami.includes(konamiCode)) {
        // Trigger neon explosion effect
        const explosion = document.createElement('div');
        explosion.className = 'neon-explosion';
        document.body.appendChild(explosion);
        
        gsap.to(explosion, {
          scale: 2,
          opacity: 0,
          duration: 1,
          onComplete: () => explosion.remove(),
        });
        
        toast({
          title: "🎮 Konami Code Activated!",
          description: "You found a secret! The neon intensifies...",
        });
        
        // Intensify all neon effects temporarily
        document.body.classList.add('neon-intensified');
        setTimeout(() => {
          document.body.classList.remove('neon-intensified');
        }, 5000);
        
        konami = '';
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return null;
};