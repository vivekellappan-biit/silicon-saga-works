import { motion } from "framer-motion";
import { BriefcaseBusiness, Download, Star, Users } from "lucide-react";

const stats = [
  {
    value: "3",
    label: "Projects",
    detail: "Live apps delivered",
    icon: BriefcaseBusiness,
    href: "#portfolio",
  },
  {
    value: "2",
    label: "Clients",
    detail: "Active client partnerships",
    icon: Users,
    href: "https://arulvakku.com",
  },
  {
    value: "100K+",
    label: "Downloads",
    detail: "Google Play installs",
    icon: Download,
  },
  {
    value: "5.0",
    label: "User Rating",
    detail: "Store rating",
    icon: Star,
  },
];

const StatsSection = () => (
  <section id="stats" className="py-24 bg-secondary/60 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Proof Of Delivery</h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Transparent numbers from projects we have shipped.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => {
          const CardTag = stat.href ? "a" : "div";
          const isExternal = Boolean(stat.href?.startsWith("http"));

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <CardTag
                href={stat.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group relative block overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between mb-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-primary">
                    <stat.icon size={18} />
                  </div>
                </div>
                <div className="relative text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="relative text-sm font-semibold text-foreground/90">
                  {stat.label}
                </div>
                <div className="relative mt-2 text-xs text-muted-foreground">{stat.detail}</div>
              </CardTag>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default StatsSection;
