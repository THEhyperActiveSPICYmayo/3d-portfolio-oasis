import { motion } from 'framer-motion';

export const HeroContent = () => {
  return (
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
  );
};