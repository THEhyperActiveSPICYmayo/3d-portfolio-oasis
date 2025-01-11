import { motion } from 'framer-motion';

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    date: string;
    description: string;
    technologies: string[];
  };
  isLeft: boolean;
}

export const ExperienceCard = ({ experience, isLeft }: ExperienceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`w-[calc(50%-2rem)] glass p-6 rounded-xl border border-neon-purple/20 hover:border-neon-purple/40 transition-colors duration-300 ${
        isLeft ? 'mr-auto' : 'ml-auto'
      }`}
    >
      <div className="relative">
        {/* Connector line */}
        <div
          className={`absolute top-1/2 ${
            isLeft ? '-right-10' : '-left-10'
          } w-8 h-0.5 bg-neon-purple/40`}
        >
          <div className="absolute inset-0 animate-pulse bg-neon-purple/60" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
        <p className="text-neon-purple mb-1">{experience.company}</p>
        <p className="text-sm text-muted-foreground mb-4">{experience.date}</p>
        <p className="text-muted-foreground mb-4">{experience.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neon-purple/10 text-neon-purple"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};