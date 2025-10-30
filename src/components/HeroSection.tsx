import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Code2, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-pixel.jpg";
import { PixelDecoration } from "@/components/PixelDecoration";
import { GlitchText } from "@/components/GlitchText";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-16 md:pt-20">
      {/* Pixel decorations scattered throughout */}
      <PixelDecoration variant="small" color="secondary" animation="drift" position={{ top: '10%', left: '5%' }} />
      <PixelDecoration variant="medium" color="accent" animation="pulse" position={{ top: '20%', right: '10%' }} />
      <PixelDecoration variant="small" color="primary" animation="float" position={{ bottom: '30%', left: '15%' }} />
      <PixelDecoration variant="large" color="secondary" animation="pop" position={{ top: '40%', right: '5%' }} />
      <PixelDecoration variant="medium" color="accent" animation="drift" position={{ bottom: '20%', right: '20%' }} />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-full h-px bg-white animate-scan" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Main Tagline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Code2 className="w-5 h-5 text-primary-glow animate-pulse-glow" />
                <span className="text-sm text-white/80 font-mono tracking-wider">HACKATHON · COMMUNITY · INNOVATION</span>
                <Sparkles className="w-4 h-4 text-accent animate-pulse-glow" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white pixel-border inline-block px-8 py-4 bg-white/5 backdrop-blur-sm">
                <GlitchText text="HerCode" />
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 font-mono">
                Empowering Women in Tech & Entrepreneurship
              </p>
            </div>
            
            {/* Value Proposition */}
            <p className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed mx-auto">
              A hackathon and event series where young women explore, build, and grow.
            </p>
            
            {/* Upcoming Event Info */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all hover:shadow-glow group">
              <Calendar className="w-4 h-4 text-white animate-pulse-glow" />
              <span className="text-sm md:text-base text-white/90 font-medium font-mono">
                Next Event: Coming Soon
              </span>
              <div className="w-2 h-2 rounded-full bg-primary-glow shine-dot" />
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 shadow-pixel text-base md:text-lg px-8 py-6 w-full sm:w-auto font-semibold font-mono hover:shadow-pixel-lg transition-all hover:-translate-y-1"
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
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto text-base md:text-lg px-8 py-6 font-mono hover:shadow-glow transition-all"
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
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden border-y-4 border-primary pixel-border relative">
        <img
          src={heroImage}
          alt="Diverse young women coding together at HerCode hackathon"
          className="w-full h-full object-cover object-center pixelated-image"
        />
        {/* Corner pixel accents */}
        <div className="absolute top-2 left-2 w-4 h-4 bg-primary animate-pixel-pop" />
        <div className="absolute top-2 right-2 w-4 h-4 bg-secondary animate-pixel-drift" />
        <div className="absolute bottom-2 left-2 w-4 h-4 bg-accent animate-pulse-glow" />
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary-glow animate-pixel-pop" />
      </div>
    </section>
  );
};