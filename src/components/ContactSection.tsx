import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Mail } from 'lucide-react';
import gsap from 'gsap';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const iconControls = useAnimation();
  const { toast } = useToast();

  useEffect(() => {
    // Initialize GSAP animations
    gsap.to(".neon-input", {
      duration: 0.3,
      boxShadow: "0 0 10px rgba(74, 222, 128, 0.2)",
      paused: true,
    });
  }, []);

  const handleInputFocus = (inputId: string) => {
    setFocusedInput(inputId);
    gsap.to(`#${inputId}`, {
      duration: 0.3,
      boxShadow: "0 0 20px rgba(74, 222, 128, 0.4), 0 0 40px rgba(74, 222, 128, 0.2)",
    });
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
    gsap.to(".neon-input", {
      duration: 0.3,
      boxShadow: "0 0 10px rgba(74, 222, 128, 0.2)",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Animate the icon
    await iconControls.start({
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 }
    });

    // Success animation for the envelope
    gsap.to(".mail-icon", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.to(".mail-icon", {
          y: 0,
          opacity: 1,
          duration: 0.5,
        });
      },
    });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-neon-green/10 text-neon-green neon-glow inline-block mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <motion.div
            animate={iconControls}
            className="flex justify-center mb-8"
          >
            <Mail className="w-12 h-12 text-neon-green mail-icon" />
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                className={`neon-input flex h-10 w-full rounded-md border bg-black/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-neon-green/50 text-white transition-all duration-300 ${
                  focusedInput === 'name' ? 'border-neon-green' : ''
                }`}
                placeholder="Your name"
                onFocus={() => handleInputFocus('name')}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`neon-input flex h-10 w-full rounded-md border bg-black/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-neon-green/50 text-white transition-all duration-300 ${
                  focusedInput === 'email' ? 'border-neon-green' : ''
                }`}
                placeholder="Your email"
                onFocus={() => handleInputFocus('email')}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                className={`neon-input flex min-h-[120px] w-full rounded-md border bg-black/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-neon-green/50 text-white transition-all duration-300 ${
                  focusedInput === 'message' ? 'border-neon-green' : ''
                }`}
                placeholder="Your message"
                onFocus={() => handleInputFocus('message')}
                onBlur={handleInputBlur}
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="neon-button inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-neon-green/20 text-neon-green hover:bg-neon-green/30 h-11 px-8 w-full neon-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};