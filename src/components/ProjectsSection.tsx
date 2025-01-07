import { motion } from 'framer-motion';

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
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and expertise in
            creating engaging digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl glass">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};