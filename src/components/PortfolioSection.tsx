import { motion } from "framer-motion";
import devicesMockup from "@/assets/devices-mockup.png";

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-primary">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Recent Works</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Cross-platform products built for startups and enterprises across the globe.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="glass rounded-2xl p-4 md:p-8">
          <img
            src={devicesMockup}
            alt="Cross-platform application showcased on laptop, tablet, and phone"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Decorative glow */}
        <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
