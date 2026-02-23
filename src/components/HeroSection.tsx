import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Global software network" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,80%,10%)/0.6] via-[hsl(222,80%,10%)/0.7] to-[hsl(222,80%,10%)/0.9]" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/20 text-primary-foreground border border-primary/30">
          Global Full-Stack Agency
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-primary-foreground mb-6">
          We Build the Software That{" "}
          <span className="bg-gradient-to-r from-[hsl(222,80%,60%)] to-[hsl(270,70%,65%)] bg-clip-text text-transparent">
            Powers Your Business
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[hsl(220,20%,75%)] max-w-2xl mx-auto mb-10 leading-relaxed">
          End-to-end development for Web, Mobile, Cloud & Enterprise — delivered by a team that's built 500+ products worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="glow-primary text-base px-8 py-6">
            Start Your Project <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 border-[hsl(220,20%,30%)] text-primary-foreground bg-transparent hover:bg-primary/10"
          >
            View Our Work
          </Button>
        </div>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
