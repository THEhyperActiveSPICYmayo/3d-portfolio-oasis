import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { motion } from "framer-motion";

// Lazy load components
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CertificationsSection = lazy(() => import("@/components/CertificationsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="w-8 h-8 border-4 border-neon-purple rounded-full animate-spin border-t-transparent" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AboutSection />
          <ExperienceSection />
          <CertificationsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </motion.div>
      </Suspense>
    </main>
  );
};

export default Index;