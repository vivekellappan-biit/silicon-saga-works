import { motion } from "framer-motion";
import { Building2, Smartphone, Globe, Shield, Cloud, LayoutGrid } from "lucide-react";

const expertiseItems = [
  {
    icon: Building2,
    title: "Custom Enterprise Solutions",
    description: "Scalable, secure platforms tailored to complex business workflows and integrations.",
    featured: false,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps for iOS and Android with pixel-perfect design.",
    featured: false,
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description: "High-performance web applications, SPAs, and progressive web apps built to scale.",
    featured: false,
  },
  {
    icon: LayoutGrid,
    title: "Facility Management Systems",
    description: "End-to-end FMS solutions with real-time monitoring, IoT integration, and analytics.",
    featured: true,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud-native architecture, CI/CD pipelines, and infrastructure automation.",
    featured: false,
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Security audits, data protection strategies, and regulatory compliance frameworks.",
    featured: false,
  },
];

const ExpertiseGrid = () => (
  <section id="expertise" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-primary">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Our Expertise</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          From concept to deployment, we deliver software solutions that drive measurable business outcomes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`group relative rounded-lg p-8 transition-all duration-300 hover:shadow-[var(--card-hover-shadow)] ${
              item.featured
                ? "hero-gradient text-primary-foreground ring-2 ring-primary/30"
                : "glass hover:-translate-y-1"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5 ${
                item.featured ? "bg-primary-foreground/15" : "bg-primary/10"
              }`}
            >
              <item.icon
                size={24}
                className={item.featured ? "text-primary-foreground" : "text-primary"}
              />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${item.featured ? "" : "text-foreground"}`}>
              {item.title}
            </h3>
            <p className={`text-sm leading-relaxed ${item.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {item.description}
            </p>
            {item.featured && (
              <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-primary-foreground/20 px-2.5 py-1 rounded-full">
                Featured
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseGrid;
