import { motion } from "framer-motion";
import { Briefcase, Users, Headphones } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Global Clients" },
  { icon: Headphones, value: "24/7", label: "Dedicated Support" },
];

const StatsSection = () => (
  <section id="stats" className="py-20">
    <div className="container mx-auto px-6">
      <div className="stat-gradient rounded-2xl p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon size={32} className="mx-auto mb-4 text-primary-foreground/70" />
              <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-primary-foreground/70 tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
