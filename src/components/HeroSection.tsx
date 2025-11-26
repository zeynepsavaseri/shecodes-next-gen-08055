import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Star, Heart, Laptop } from "lucide-react";
import heroImage from "@/assets/hero-pixel-coding.png";
import { TypewriterText } from "@/components/TypewriterText";
import { GlitchText } from "@/components/GlitchText";
import { getNextEvent } from "@/data/events";
import { GalaxyBackground } from "@/components/GalaxyBackground";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-14 sm:pt-16 md:pt-20">
      {/* Galaxy background - extends below hero */}
      <GalaxyBackground />

      <div className="container relative mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-16 lg:py-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2">
                <div className="relative inline-block">
                  <span className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mr-1 sm:mr-2">{"{"}</span>
                  <GlitchText 
                    text="HerCode" 
                    className="text-transparent bg-clip-text bg-gradient-primary" 
                  />
                  <span className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ml-1 sm:ml-2">{"}"}</span>
                </div>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] px-2">
                <TypewriterText 
                  texts={[
                    "Empowering Women in Tech",
                    "Building Future Leaders",
                    "Creating Innovation Together"
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2500}
                />
              </div>
            </div>
            
            {/* Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay px-4">
              A hackathon and event series where young women explore, build, and grow in the world of technology.
            </p>
            
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-primary/30 bg-card/40 backdrop-blur-sm animate-fade-in-delay shadow-lg shadow-primary/10 mx-2">
              <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-foreground/80">
                {nextEvent ? `Next Event: ${nextEvent.date}` : 'Next Event: Coming Soon'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
