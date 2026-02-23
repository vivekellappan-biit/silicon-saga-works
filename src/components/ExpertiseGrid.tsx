import { motion } from "framer-motion";
import { Building2, Smartphone, Globe, Shield, Cloud, LayoutGrid } from "lucide-react";

const expertiseItems = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Scalable platforms tailored to complex business workflows.",
    featured: false,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps with pixel-perfect design.",
    featured: false,
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description: "High-performance web applications built to scale.",
    featured: false,
  },
  {
    icon: LayoutGrid,
    title: "Facility Management",
    description: "End-to-end FMS with real-time monitoring and IoT.",
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud-native architecture and infrastructure automation.",
    featured: false,
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Data protection strategies and regulatory compliance.",
    featured: false,
  },
];

const ExpertiseGrid = () => (
  <section id="expertise" className="py-32 bg-secondary px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Our Expertise</h2>
        <p className="text-muted-foreground mt-5 max-w-md mx-auto text-lg">
          From concept to deployment, solutions that drive real outcomes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {expertiseItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className={`relative rounded-2xl p-8 transition-all duration-300 ${
              item.featured
                ? "bg-primary text-primary-foreground"
                : "bg-card hover:shadow-lg"
            }`}
          >
            <item.icon
              size={28}
              strokeWidth={1.5}
              className={`mb-5 ${item.featured ? "text-primary-foreground/80" : "text-primary"}`}
            />
            <h3 className={`text-lg font-semibold mb-2 ${item.featured ? "" : "text-foreground"}`}>
              {item.title}
            </h3>
            <p className={`text-sm leading-relaxed ${item.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseGrid;
