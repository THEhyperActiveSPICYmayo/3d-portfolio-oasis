import { motion } from 'framer-motion';
import { ProjectsCarousel } from './projects/ProjectsCarousel';

const projects = [
  {
    title: "Project One",
    description: "A brief description of the project and its impact.",
    tags: ["React", "Three.js", "TypeScript"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Two",
    description: "Another amazing project with cutting-edge technology.",
    tags: ["Next.js", "Tailwind", "GSAP"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Three",
    description: "Innovative solution for modern problems.",
    tags: ["React", "Three.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-neon-pink/10 text-neon-pink neon-glow inline-block mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and expertise in
            creating engaging digital experiences.
          </p>
        </motion.div>
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;