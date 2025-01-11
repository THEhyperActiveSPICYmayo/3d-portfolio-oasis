import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';

interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical glowing line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neon-purple/20">
        <div className="absolute inset-0 animate-pulse bg-neon-purple/40" />
      </div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <ExperienceCard experience={experience} isLeft={index % 2 === 0} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};