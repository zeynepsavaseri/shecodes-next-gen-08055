import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Star, Heart, Laptop } from "lucide-react";
import heroImage from "@/assets/hero-pixel-coding.png";
import { TypewriterText } from "@/components/TypewriterText";
import { GlitchText } from "@/components/GlitchText";
import { getNextEvent } from "@/data/events";

export const HeroSection = () => {
  const nextEvent = getNextEvent();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-14 sm:pt-16 md:pt-20">
      {/* Hero image as background */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={heroImage}
          alt="Women coding at HerCode hackathon"
          className="w-full h-full object-cover pixelated-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/95" />
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s", animationDuration: '7s' }} />

      <div className="container relative mx-auto px-3 sm:px-4 py-6 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 animate-slide-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <div className="relative inline-block">
                  <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl mr-1 sm:mr-2">{"{"}</span>
                  <GlitchText 
                    text="HerCode" 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-glow" 
                  />
                  <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-1 sm:ml-2">{"}"}</span>
                </div>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl text-foreground/90 min-h-[2.5rem] sm:min-h-[3rem]">
                <TypewriterText 
                  texts={[
                    "Empowering Women in Tech",
                    "Building Future Leaders",
                    "Creating Innovation Together",
                    "Shaping Tomorrow's Technology"
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2500}
                />
              </div>
            </div>
            
            {/* Value Proposition */}
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-slide-in px-2 sm:px-4" style={{ 
              animationDelay: "0.2s"
            }}>
              A hackathon and event series where young women explore, build, and grow in the world of technology.
            </p>
            
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm animate-slide-in" style={{ 
              animationDelay: "0.4s"
            }}>
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70" />
              <span className="text-xs sm:text-sm text-foreground/80 font-medium">
                {nextEvent ? `Next Event: ${nextEvent.date}` : 'Next Event: Coming Soon'}
              </span>
            </div>
            
            {/* CTA Buttons - Pixel Sticker Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-3xl mx-auto pt-6 animate-slide-in px-2 sm:px-4" style={{ animationDelay: "0.5s" }}>
              {/* Join Events - Purple Sticker */}
              <div 
                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                style={{
                  animation: "wobble 2s ease-in-out infinite"
                }}
                onClick={() => {
                  const element = document.getElementById('events');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div 
                  className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 border-4 border-white shadow-lg overflow-hidden"
                  style={{
                    boxShadow: "0 8px 32px rgba(195, 166, 255, 0.5), 0 0 0 4px white, 0 0 40px rgba(195, 166, 255, 0.3)",
                  }}
                >
                  {/* Glossy highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl" />
                  
                  {/* Pixel decoration */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 pixelated-image" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/40 pixelated-image" />
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-3 text-center min-w-[200px]">
                    <div className="relative">
                      <Heart className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-8 left-1/2 -translate-x-1/2 group-hover:animate-bounce pixelated-image" />
                      <span className="text-xl sm:text-2xl font-bold text-white font-mono tracking-wide drop-shadow-lg">
                        Join Our Events
                      </span>
                    </div>
                    <p className="text-xs text-white/90 font-mono">
                      ✨ Experience innovation
                    </p>
                    <div className="mt-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Become Partner - Blue Sticker */}
              <div 
                className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                style={{
                  animation: "wobble 2s ease-in-out infinite 0.5s"
                }}
                onClick={() => {
                  const element = document.getElementById('sponsors');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div 
                  className="relative bg-gradient-to-br from-primary-glow to-accent rounded-2xl p-6 sm:p-8 border-4 border-white shadow-lg overflow-hidden"
                  style={{
                    boxShadow: "0 8px 32px rgba(122, 224, 255, 0.5), 0 0 0 4px white, 0 0 40px rgba(122, 224, 255, 0.3)",
                  }}
                >
                  {/* Glossy highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl" />
                  
                  {/* Pixel decoration */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 pixelated-image" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/40 pixelated-image" />
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-3 text-center min-w-[200px]">
                    <div className="relative">
                      <Star className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-8 left-1/2 -translate-x-1/2 group-hover:animate-bounce pixelated-image" />
                      <span className="text-xl sm:text-2xl font-bold text-white font-mono tracking-wide drop-shadow-lg">
                        Become a Partner
                      </span>
                    </div>
                    <p className="text-xs text-white/90 font-mono">
                      💜 Shape the future
                    </p>
                    <div className="mt-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
