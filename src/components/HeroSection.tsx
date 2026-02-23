import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center bg-background px-6">
    <div className="max-w-3xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm font-medium text-primary tracking-wide mb-6"
      >
        Global Full-Stack Agency
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-8"
      >
        We build the software that powers your business.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
      >
        End-to-end development for Web, Mobile, Cloud & Enterprise — delivered by a global team.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="mailto:info@sembiyan.in"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Start a Project <ArrowRight size={16} />
        </a>
        <a
          href="#portfolio"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          See our work →
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
