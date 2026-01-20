import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary-foreground border-t border-secondary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold text-secondary">
              argent<span className="text-primary">.africa</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-secondary-foreground/6 hover:text-secondary-foreground transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-secondary-foreground/6 hover:text-secondary-foreground transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-secondary-foreground/6 hover:text-secondary-foreground transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/4 text-sm">
            © 2024 Argent Africa. Built for Africa, by Africa 🌍
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
