import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Star, Heart, Laptop } from "lucide-react";
import heroImage from "@/assets/hero-pixel-coding.png";
import { TypewriterText } from "@/components/TypewriterText";
import { GlitchText } from "@/components/GlitchText";
import { getNextEvent } from "@/data/events";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { SectionTransition } from "@/components/SectionTransition";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-14 sm:pt-16 md:pt-20">
      {/* Galaxy background */}
      <GalaxyBackground />
      
      {/* Cool transition to next section */}
      <SectionTransition />

      <div className="container relative mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <div className="relative inline-block">
                  <span className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mr-2">{"{"}</span>
                  <GlitchText 
                    text="HerCode" 
                    className="text-transparent bg-clip-text bg-gradient-primary" 
                  />
                  <span className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-2">{"}"}</span>
                </div>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl text-foreground/90 min-h-[2.5rem] sm:min-h-[3rem]">
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
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay px-4">
              A hackathon and event series where young women explore, build, and grow in the world of technology.
            </p>
            
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-primary/30 bg-card/40 backdrop-blur-sm animate-fade-in-delay shadow-lg shadow-primary/10">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">
                {nextEvent ? `Next Event: ${nextEvent.date}` : 'Next Event: Coming Soon'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
