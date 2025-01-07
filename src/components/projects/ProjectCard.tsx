import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
  };
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative perspective"
    >
      <div className="relative h-[400px] transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full overflow-hidden rounded-xl glass neon-border border-neon-pink">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl glass bg-black/50 p-6 neon-border border-neon-pink">
          <div className="flex h-full flex-col justify-center">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-neon-pink/10 text-neon-pink neon-glow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};