import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-pixel-coding.png";
import { GlitchText } from "@/components/GlitchText";
import { getNextEvent } from "@/data/events";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-14 sm:pt-16 md:pt-20">
      {/* Hero image as background */}
      <div className="absolute inset-0 opacity-35">
        <img
          src={heroImage}
          alt="Women coding at HerCode hackathon"
          className="w-full h-full object-cover pixelated-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background/95" />
      </div>
      
      {/* Animated tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating orbs with scale animation */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-slow animate-scale-in" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-slow animate-scale-in" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-glow/15 rounded-full blur-3xl animate-float-slow animate-scale-in" style={{ animationDelay: "4s" }} />

      <div className="container relative mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-12">
          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 animate-fade-in animate-scale-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight tracking-wider">
                <div className="relative inline-block">
                  <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl mr-1 sm:mr-2">{"{"}</span>
                  <GlitchText 
                    text="HerCode" 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-glow" 
                  />
                  <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-1 sm:ml-2">{"}"}</span>
                  <div className="absolute inset-0 blur-2xl opacity-40">
                    <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl mr-1 sm:mr-2">{"{"}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-glow">HerCode</span>
                    <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-1 sm:ml-2">{"}"}</span>
                  </div>
                </div>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-white uppercase tracking-wider" style={{ textShadow: '3px 3px 0px rgba(0, 0, 0, 0.8), 0 0 20px rgba(290, 85, 75, 0.4)' }}>
                Empowering Women in Tech
              </p>
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold text-white uppercase tracking-wider" style={{ textShadow: '3px 3px 0px rgba(0, 0, 0, 0.8), 0 0 20px rgba(290, 85, 75, 0.4)' }}>
                & Entrepreneurship
              </p>
            </div>
            
            {/* Value Proposition */}
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-mono text-white max-w-2xl mx-auto leading-relaxed animate-fade-in tracking-wide px-2 sm:px-4" style={{ 
              animationDelay: "0.3s",
              textShadow: '2px 2px 0px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)'
            }}>
              A hackathon and event series where young women explore, build, and grow in the world of technology.
            </p>
            
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border-2 border-accent/50 animate-fade-in animate-scale-in" style={{ 
              animationDelay: "0.5s",
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 30px rgba(290, 85, 75, 0.4)'
            }}>
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-glow-pulse" />
              <span className="text-[11px] sm:text-xs md:text-sm text-white font-mono font-bold uppercase tracking-wider" style={{ textShadow: '2px 2px 0px rgba(0, 0, 0, 0.8)' }}>
                {nextEvent ? `Next Event: ${nextEvent.date}` : 'Next Event: Coming Soon'}
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in px-2 sm:px-4" style={{ animationDelay: "0.7s" }}>
              <Button 
                size="lg" 
                className="group relative border-2 border-white/40 text-white hover:bg-white hover:text-primary text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 overflow-hidden transition-all duration-300 w-full sm:w-auto min-h-[48px] hover-scale"
                style={{ 
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 0 40px rgba(290, 85, 75, 0.5), 0 4px 20px rgba(0, 0, 0, 0.6)',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                }}
                onClick={() => {
                  const element = document.getElementById('events');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base">
                  Join Our Events
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                size="lg" 
                className="group relative border-2 border-white/40 text-white hover:bg-white hover:text-primary text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 overflow-hidden transition-all duration-300 w-full sm:w-auto min-h-[48px] hover-scale"
                style={{ 
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 0 40px rgba(290, 85, 75, 0.5), 0 4px 20px rgba(0, 0, 0, 0.6)',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                }}
                onClick={() => {
                  const element = document.getElementById('sponsors');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wider text-xs sm:text-sm md:text-base">
                  Become a Partner
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
