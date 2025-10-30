import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles, Zap, Code } from "lucide-react";
import heroImage from "@/assets/hero-pixel.jpg";
import { GlitchText } from "@/components/GlitchText";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-16 md:pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-full h-px bg-white animate-scan" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Main Tagline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
                <GlitchText text="HerCode" />
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 max-w-3xl mx-auto">
                Empowering Women in Tech & Entrepreneurship
              </p>
              
              <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Code className="w-4 h-4 text-white" />
                  <span className="text-sm md:text-base text-white/90">Code</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Zap className="w-4 h-4 text-white" />
                  <span className="text-sm md:text-base text-white/90">Create</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm md:text-base text-white/90">Connect</span>
                </div>
              </div>
            </div>
            
            {/* Value Proposition */}
            <p className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed mx-auto">
              A hackathon and event series where young women explore, build, and grow.
            </p>
            
            {/* Upcoming Event Info */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all group">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-sm md:text-base text-white/90 font-medium">
                Next Event: Coming Soon
              </span>
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 shadow-lg text-base md:text-lg px-8 py-6 w-full sm:w-auto font-semibold transition-all hover:-translate-y-1"
                onClick={() => {
                  const element = document.getElementById('events');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join Our Events
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto text-base md:text-lg px-8 py-6 transition-all"
                onClick={() => {
                  const element = document.getElementById('mission');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Thin strip banner image */}
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden border-y-2 border-primary/30">
        <img
          src={heroImage}
          alt="Diverse young women coding together at HerCode hackathon"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};