import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import argentlogo from '../assets/argent_africa.png';

const Navbar = ({ showLinks = true, showAuthButtons = true, showLogo = true, fullWidth = false }) => { 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className={`${fullWidth ? "w-full px-10" : "container mx-auto px-6"} flex items-center justify-between`}>
        {/* Logo */}
        {showLogo && (
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300">
              <img src={argentlogo} alt="Argent Africa Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className="text-2xl font-bold text-foreground">
            argent<span className="text-primary">.africa</span>
          </span>
          </a>
        )}

        {/* Desktop Navigation */}
        {showLinks && (
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            How it Works
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Services
          </a>
          <a href="#vision" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium">
            Our Vision
          </a>
          </div>
        )}

        {/* CTA Buttons */}
        {showAuthButtons && (
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  {user.email}
                </span>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                  Log in
                </Button>
                <Button variant="default" size="sm" onClick={() => navigate('/signup')}>
                  Get Started
                </Button>
              </>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <a href="#how-it-works" className="text-foreground py-2 font-medium">
              How it Works
            </a>
            <a href="#services" className="text-foreground py-2 font-medium">
              Services
            </a>
            <a href="#vision" className="text-foreground py-2 font-medium">
              Our Vision
            </a>
            <div className="flex gap-4 pt-4">
              {user ? (
                <Button variant="ghost" className="flex-1" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </Button>
              ) : (
                <>
                  <Button variant="ghost" className="flex-1" onClick={() => navigate('/login')}>
                    Log in
                  </Button>
                  <Button variant="default" className="flex-1" onClick={() => navigate('/signup')}>
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
