import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderPixel from "@/assets/founder-pixel.png";

export const FounderTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"menu" | "about" | "story" | "contact">("menu");

  const renderContent = () => {
    switch (currentView) {
      case "about":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">⟨ THE ARCHITECT ⟩</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-primary">Name:</span> Zeynep Savaseri</p>
              <p><span className="text-primary">Role:</span> Founder & Organizer of HerCode</p>
              <p><span className="text-primary">Status:</span> Building bridges between health & technology</p>
            </div>
          </div>
        );
      case "story":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Mission & Background</h3>
            <div className="space-y-3 text-sm">
              <p className="text-foreground/80">
                Currently exploring health & technology at ETH Zurich, passionate about creating inclusive tech spaces.
              </p>
              <p className="text-foreground/80">
                <span className="text-primary font-semibold">Mission:</span> To empower, connect, and challenge the next generation of women in technology through hands-on experiences, mentorship, and community building.
              </p>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-foreground/80">
                <span className="text-primary">LinkedIn:</span>{" "}
                <a 
                  href="https://linkedin.com/in/zeynep-savaseri-9653b92aa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  linkedin.com/in/zeynep-savaseri-9653b92aa/
                </a>
              </p>
              <p className="text-primary font-semibold mt-4">Always open to meet new people & ideas!</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center text-primary mb-6">Select an option:</h3>
            <div className="space-y-3">
              <Button
                onClick={() => setCurrentView("about")}
                variant="outline"
                className="w-full justify-start font-mono text-left hover:bg-primary/10"
              >
                <span className="text-primary mr-2">1.</span> About the Founder
              </Button>
              <Button
                onClick={() => setCurrentView("story")}
                variant="outline"
                className="w-full justify-start font-mono text-left hover:bg-primary/10"
              >
                <span className="text-primary mr-2">2.</span> Mission & Background
              </Button>
              <Button
                onClick={() => setCurrentView("contact")}
                variant="outline"
                className="w-full justify-start font-mono text-left hover:bg-primary/10"
              >
                <span className="text-primary mr-2">3.</span> Contact Info
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) setCurrentView("menu");
    }}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-primary/40 hover:bg-primary/10 hover:border-primary"
        >
          <Terminal size={16} />
          <span className="hidden sm:inline">Founder</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-card border-2 border-primary shadow-glow">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <img 
              src={founderPixel} 
              alt="Founder" 
              className="w-20 h-20 object-contain pixelated-image"
            />
            <div>
              <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                THE ARCHITECT
              </h2>
              <p className="text-xs text-muted-foreground font-mono">
                Discover the mind behind HerCode
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="min-h-[200px]">
            {renderContent()}
          </div>

          {/* Back button */}
          {currentView !== "menu" && (
            <Button
              onClick={() => setCurrentView("menu")}
              variant="ghost"
              size="sm"
              className="w-full"
            >
              ← Back to Menu
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};