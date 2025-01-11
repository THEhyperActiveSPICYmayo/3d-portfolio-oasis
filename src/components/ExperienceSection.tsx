import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { ExperienceTimeline } from './experience/ExperienceTimeline';

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    date: "2022 - Present",
    description: "Led development of enterprise applications",
    technologies: ["React", "Node.js", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    date: "2020 - 2022",
    description: "Built scalable web applications",
    technologies: ["Vue.js", "Python", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Startup Inc",
    date: "2018 - 2020",
    description: "Developed responsive user interfaces",
    technologies: ["React", "TypeScript", "SASS"],
  },
];

export const ExperienceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-neon-purple/10 text-neon-purple neon-glow inline-block mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and growth in the tech industry.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
        >
          <ExperienceTimeline experiences={experiences} />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;