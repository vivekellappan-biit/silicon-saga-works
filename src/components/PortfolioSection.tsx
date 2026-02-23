import { motion } from "framer-motion";
import devicesMockup from "@/assets/devices-mockup.png";

const PortfolioSection = () => (
  <section id="portfolio" className="py-32 bg-background px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Recent Works</h2>
        <p className="text-muted-foreground mt-5 max-w-md mx-auto text-lg">
          Cross-platform products built for startups and enterprises.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <img
          src={devicesMockup}
          alt="Applications shown on laptop, tablet, and phone"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
