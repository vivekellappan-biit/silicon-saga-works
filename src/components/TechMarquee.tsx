import { motion } from "framer-motion";
import {
  Bell,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Server,
  Shield,
  Smartphone,
  TestTube,
  Zap,
} from "lucide-react";

const techItems = [
  { name: "Flutter", icon: Smartphone },
  { name: "React Native", icon: Smartphone },
  { name: "Android (Kotlin)", icon: Code2 },
  { name: "iOS (Swift)", icon: Code2 },
  { name: "Firebase", icon: Bell },
  { name: "Push Notifications", icon: Zap },
  { name: "Node.js APIs", icon: Server },
  { name: "TypeScript", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Google Cloud", icon: Cloud },
  { name: "CI/CD", icon: GitBranch },
  { name: "Testing", icon: TestTube },
  { name: "App Security", icon: Shield },
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
        <p className="text-muted-foreground mt-5 text-lg">
          Mobile-first technologies we use to ship production apps.
        </p>
      </motion.div>
    </div>

    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...techItems, ...techItems].map((tech, i) => (
          <span
            key={`${tech.name}-${i}`}
            className="inline-flex items-center gap-2 mx-4 px-4 py-2.5 rounded-full border border-border text-sm text-muted-foreground whitespace-nowrap bg-card"
          >
            <tech.icon size={15} />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TechMarquee;
