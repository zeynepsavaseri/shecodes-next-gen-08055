import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export const StickyPartnerCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sponsorsSection = document.getElementById('sponsors');
      if (sponsorsSection) {
        const rect = sponsorsSection.getBoundingClientRect();
        // Show when sponsors section has scrolled past viewport
        setIsVisible(rect.bottom < 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in [animation-duration:0.2s] sm:[animation-duration:0.3s]">
      <div className="bg-gradient-to-r from-primary/95 via-secondary/95 to-primary/95 backdrop-blur-md border-t border-border/50 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider truncate">
              Ready to collaborate?
            </p>
            <p className="hidden sm:block font-mono text-[10px] sm:text-xs text-white/80 mt-0.5">
              Let's build something impactful together
            </p>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link to="/partner">
              <Button
                size="sm"
                variant="secondary"
                className="font-mono font-bold uppercase text-[10px] sm:text-xs tracking-wider shadow-glow hover:shadow-[0_0_30px_hsla(280,65%,60%,0.6)] transition-all duration-300 bg-white text-primary hover:bg-white/90"
              >
                Open Form
              </Button>
            </Link>
            
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 hover:bg-white/20 rounded transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
