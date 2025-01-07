import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
}

interface CertificationsCarouselProps {
  certifications: Certification[];
}

export const CertificationsCarousel = ({ certifications }: CertificationsCarouselProps) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="perspective"
            initial={{ opacity: 0, rotateY: -30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              onClick={() => setSelectedCert(cert)}
              className="group relative h-[300px] transform-style-3d transition-transform duration-500 cursor-pointer hover:rotate-y-180"
            >
              <div className="absolute inset-0 backface-hidden">
                <div className="h-full overflow-hidden rounded-xl glass neon-border border-neon-blue">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl glass bg-black/50 p-6 neon-border border-neon-blue">
                <div className="flex h-full flex-col justify-center text-center">
                  <h3 className="text-xl font-bold mb-2 text-white neon-text">{cert.title}</h3>
                  <p className="text-neon-blue mb-2">{cert.organization}</p>
                  <p className="text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        {selectedCert && (
          <DialogContent className="glass border-neon-blue neon-border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white neon-text">
                {selectedCert.title}
              </DialogTitle>
              <DialogDescription>
                <div className="mt-4 space-y-4">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-neon-blue">{selectedCert.organization}</p>
                  <p className="text-muted-foreground">{selectedCert.date}</p>
                  <p className="text-white">{selectedCert.description}</p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};