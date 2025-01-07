import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-neon-blue/10 text-neon-blue neon-glow inline-block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Passionate about creating impactful digital experiences
            </h2>
            <p className="text-muted-foreground">
              With a focus on user-centered design and cutting-edge technology, I craft
              digital solutions that make a difference. My approach combines creativity
              with technical expertise to build memorable experiences.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass p-8 neon-border border-neon-blue">
              <div className="w-full h-full bg-gradient-to-br from-neon-blue/5 to-neon-purple/10 rounded-xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};