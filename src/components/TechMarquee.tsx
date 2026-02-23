import { motion } from "framer-motion";

const techItems = [
  "React", "Flutter", "Python", "Node.js", "AWS", "Google Cloud",
  "Azure", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "TypeScript",
  "Swift", "Kotlin", "GraphQL", "Terraform",
];

const TechMarquee = () => (
  <section id="tech" className="py-28 bg-background overflow-hidden px-6">
    <div className="max-w-6xl mx-auto mb-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Tech Stack</h2>
        <p className="text-muted-foreground mt-5 text-lg">Technologies we work with every day.</p>
      </motion.div>
    </div>

    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...techItems, ...techItems].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-block mx-5 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TechMarquee;
