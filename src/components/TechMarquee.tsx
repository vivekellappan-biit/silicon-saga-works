import { motion } from "framer-motion";

const techItems = [
  "React", "Flutter", "Python", "Node.js", "AWS", "Google Cloud",
  "Azure", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "TypeScript",
  "Swift", "Kotlin", "GraphQL", "Terraform",
];

const TechMarquee = () => (
  <section id="tech" className="py-20 bg-background overflow-hidden">
    <div className="container mx-auto px-6 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-primary">Technology</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Our Tech Stack</h2>
      </motion.div>
    </div>

    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...techItems, ...techItems].map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="inline-flex items-center mx-4 px-6 py-3 rounded-lg glass text-sm font-medium text-foreground whitespace-nowrap"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechMarquee;
