import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:scale-110 transition-transform duration-300`}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Icon className="w-6 h-6 neon-glow" />
                </motion.a>
              );
            })}
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="neon-button rounded-full p-3 bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-300"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-6 h-6 neon-glow" />
          </motion.button>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};