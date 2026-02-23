import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-32 bg-background px-6">
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Let's work together.
        </h2>
        <p className="text-muted-foreground mt-5 text-lg max-w-md mx-auto">
          Have a project in mind? We'd love to hear about it.
        </p>

        <a
          href="mailto:info@sembiyan.in?subject=Project%20Inquiry&body=Hi%20Sembiyan%20team%2C%0A%0AI%20want%20to%20discuss%20a%20project.%0A"
          aria-label="Send email to info@sembiyan.in"
          className="inline-flex items-center gap-2 mt-10 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Mail size={16} />
          info@sembiyan.in
          <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
