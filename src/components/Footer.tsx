const Footer = () => (
  <footer className="py-10 border-t border-border bg-background px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-sm font-semibold text-foreground">sembiyan<span className="text-primary">.in</span></span>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} sembiyan.in — All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="mailto:info@sembiyan.in" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          info@sembiyan.in
        </a>
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Privacy
        </a>
        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Terms
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
