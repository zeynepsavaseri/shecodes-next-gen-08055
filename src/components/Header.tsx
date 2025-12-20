import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import hercodeLogo from "@/assets/hercode-icon.png";
import { useTheme } from "next-themes";
import { FounderTerminal } from "@/components/FounderTerminal";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
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
    { label: "Join our events", id: "events", bright: true },
    { label: "Partner up with us", id: "why-partner", bright: true },
    { label: "Values", id: "mission", bright: false },
    { label: "Testimonials", id: "testimonials", bright: false },
    { label: "The Ecosystem", id: "sponsors", bright: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-card/80 backdrop-blur-sm border-b border-border/50"
      } ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo with hover animation */}
          <img 
            src={hercodeLogo}
            alt="HerCode Logo"
            className="h-28 sm:h-32 w-auto cursor-pointer -ml-4 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-all duration-300 font-bold uppercase tracking-wider relative group ${
                    item.bright 
                      ? 'bg-gradient-primary bg-clip-text text-transparent hover:opacity-80' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    item.bright ? 'bg-gradient-to-r from-primary to-primary/60' : 'bg-primary'
                  }`} />
                </button>
              );
            })}
            {/* Founder Terminal */}
            <div className="transition-all duration-300 hover:scale-105">
              <FounderTerminal />
            </div>
            {/* Theme Toggle with spin animation */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 hover:rotate-180 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden text-foreground p-2 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation with slide animation */}
        <nav 
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2">
            {navItems.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-2 text-sm transition-all duration-300 font-bold uppercase transform ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  } ${
                    item.bright 
                      ? 'bg-gradient-primary bg-clip-text text-transparent' 
                      : 'text-foreground/80 hover:text-primary hover:translate-x-2'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
            <div 
              className={`flex items-center gap-2 pt-2 transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${navItems.length * 50}ms` : '0ms',
              }}
            >
              <FounderTerminal />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground/80 hover:text-primary transition-all duration-300 p-2 hover:rotate-180"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
