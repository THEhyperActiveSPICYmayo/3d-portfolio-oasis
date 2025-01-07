import { motion } from 'framer-motion';

export const ContactSection = () => {
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
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="flex h-10 w-full rounded-md border bg-black/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-neon-green/50 text-white neon-border"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border bg-black/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-neon-green/50 text-white neon-border"
                placeholder="Your email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border bg-black/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-neon-green/50 text-white neon-border"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="neon-button inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-neon-green/20 text-neon-green hover:bg-neon-green/30 h-11 px-8 w-full neon-glow"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};