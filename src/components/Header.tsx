import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
import hercodeLogo from "@/assets/hercode-logo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Mission", id: "mission" },
    { label: "Our Events", id: "events" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Become a Partner", id: "sponsors" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-pixel border-primary/30"
          : "bg-white/90 backdrop-blur-sm border-primary/10"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Code2 className="w-5 h-5 text-primary animate-pulse-glow" />
            <img 
              src={hercodeLogo}
              alt="HerCode Logo"
              className="h-8 sm:h-10 md:h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm lg:text-base text-foreground/80 hover:text-primary transition-colors font-medium relative group font-mono"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full shadow-glow" />
                <span className="absolute -bottom-1 right-0 w-2 h-2 bg-primary/0 group-hover:bg-primary transition-all" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              className="shadow-pixel text-xs sm:text-sm lg:text-base px-3 sm:px-4 font-mono hover:shadow-pixel-lg transition-all"
              size="sm"
            >
              <span className="hidden sm:inline">Become a Member</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              className="w-full shadow-glow"
              size="sm"
            >
              Become a Member
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};