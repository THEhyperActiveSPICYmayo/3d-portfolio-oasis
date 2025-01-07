import { motion } from 'framer-motion';
import { CertificationsCarousel } from './certifications/CertificationsCarousel';

const certifications = [
  {
    title: "Advanced Web Development",
    organization: "Frontend Masters",
    date: "2024",
    description: "Comprehensive course covering modern web development practices",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "React Certification",
    organization: "Meta",
    date: "2023",
    description: "Professional certification in React development",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "TypeScript Expert",
    organization: "Microsoft",
    date: "2023",
    description: "Advanced TypeScript programming and best practices",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-neon-blue/10 text-neon-blue neon-glow inline-block mb-4">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Professional Growth
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of certifications and achievements that showcase my
            commitment to continuous learning and professional development.
          </p>
        </motion.div>
        <CertificationsCarousel certifications={certifications} />
      </div>
    </section>
  );
};