import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import hercodeLogo from "@/assets/hercode-icon.png";
import { useTheme } from "next-themes";
import { ArchitectGame } from "@/components/ArchitectGame";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
    { label: "Join our events", id: "events", bright: true },
    { label: "Partner up with us", id: "why-partner", bright: true },
    { label: "Values", id: "mission", bright: false },
    { label: "Testimonials", id: "testimonials", bright: false },
    { label: "The Ecosystem", id: "sponsors", bright: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-sm shadow-lg border-b border-border"
          : "bg-card/80 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <img 
            src={hercodeLogo}
            alt="HerCode Logo"
            className="h-28 sm:h-32 md:h-48 lg:h-56 w-auto cursor-pointer hover:opacity-80 transition-opacity -ml-4"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors font-bold uppercase tracking-wider ${
                    item.bright 
                      ? 'bg-gradient-primary bg-clip-text text-transparent hover:opacity-80' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground/80 hover:text-primary transition-colors p-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-2 text-sm transition-colors font-bold uppercase ${
                    item.bright 
                      ? 'bg-gradient-primary bg-clip-text text-transparent' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground/80 hover:text-primary transition-colors p-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};