import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
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
            <div className="aspect-square rounded-2xl overflow-hidden glass p-8">
              {/* Placeholder for 3D workspace - will be implemented in next iteration */}
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};