import { useEffect, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const trail = document.querySelector('.cursor-trail') as HTMLElement;
    
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create trail effect
      const trailDot = document.createElement('div');
      trailDot.className = 'cursor-trail-dot';
      trailDot.style.left = `${e.clientX}px`;
      trailDot.style.top = `${e.clientY}px`;
      document.body.appendChild(trailDot);

      gsap.to(trailDot, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        onComplete: () => trailDot.remove(),
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'scale-150' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div className="cursor-trail" />
    </>
  );
};