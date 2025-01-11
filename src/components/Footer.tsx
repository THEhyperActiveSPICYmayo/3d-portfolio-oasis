import { motion, useAnimation } from 'framer-motion';
import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { useEffect } from 'react';
import gsap from 'gsap';

export const Footer = () => {
  const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Animate the arrow button
    gsap.to(".scroll-top-btn", {
      y: -10,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
    });
  };

  useEffect(() => {
    // Initialize hover animations for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
        });
      });
    });
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      color: 'text-neon-blue',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      color: 'text-neon-blue',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'text-neon-blue',
    },
  ];

  return (
    <footer className="section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} social-icon neon-glow transition-transform duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          <motion.button
            onClick={scrollToTop}
            className="scroll-top-btn neon-button rounded-full p-3 bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-6 h-6 neon-glow" />
          </motion.button>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};