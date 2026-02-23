import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects" },
  { value: "100+", label: "Global Clients" },
  { value: "24/7", label: "Support" },
];

const StatsSection = () => (
  <section id="stats" className="py-24 bg-secondary px-6">
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-3 divide-x divide-border">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center py-4"
          >
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
