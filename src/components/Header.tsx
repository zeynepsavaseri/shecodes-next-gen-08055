import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import hercodeLogo from "@/assets/hercode-logo.png";
import { FounderStorySection } from "@/components/FounderStorySection";

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

  const [showFounderStory, setShowFounderStory] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-sm shadow-glow border-b border-border"
          : "bg-card/80 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-14 md:h-16 gap-2">
          <img 
            src={hercodeLogo}
            alt="HerCode Logo"
            className="h-9 sm:h-10 md:h-12 w-auto cursor-pointer hover:scale-105 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground/80 hover:text-primary transition-all font-mono font-bold uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full shadow-glow" />
              </button>
            ))}
            <FounderStorySection 
              trigger={
                <button className="text-sm text-foreground/80 hover:text-primary transition-all font-mono font-bold uppercase tracking-wider relative group">
                  About the Founder
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full shadow-glow" />
                </button>
              }
            />
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-gradient-primary hover:shadow-glow-intense text-sm font-mono font-bold uppercase tracking-wider px-4 transition-all duration-300"
              size="sm"
            >
              Become a Member
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-2 text-sm text-foreground/80 hover:text-primary transition-colors font-mono font-bold uppercase min-h-[44px]"
              >
                {item.label}
              </button>
            ))}
            <FounderStorySection 
              trigger={
                <button className="block w-full text-left py-3 px-2 text-sm text-foreground/80 hover:text-primary transition-colors font-mono font-bold uppercase min-h-[44px]">
                  About the Founder
                </button>
              }
            />
            <Button
              onClick={() => scrollToSection("cta")}
              className="w-full shadow-glow min-h-[44px]"
              size="lg"
            >
              Become a Member
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};