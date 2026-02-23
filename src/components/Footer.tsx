const Footer = () => (
  <footer className="py-10 border-t border-border bg-background px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm font-semibold text-foreground">NovaDev</span>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} NovaDev. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Privacy", "Terms", "Contact"].map((link) => (
          <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
