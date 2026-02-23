const Footer = () => (
  <footer className="py-12 border-t border-border bg-card">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm font-bold tracking-tight text-foreground">
        <span className="text-primary">Nova</span>Dev
      </span>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} NovaDev. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Privacy", "Terms", "Contact"].map((link) => (
          <a key={link} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
