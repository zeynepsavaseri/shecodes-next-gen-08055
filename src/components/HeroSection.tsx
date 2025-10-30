import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles, Code2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-pixel-coding.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-16 md:pt-20">
      {/* Hero image as background */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={heroImage}
          alt="Women coding at HerCode hackathon"
          className="w-full h-full object-cover pixelated-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
      </div>
      
      {/* Animated tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-glow/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "4s" }} />

      <div className="container relative mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Main Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Main Headline */}
            <div className="space-y-4 animate-slide-in">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-white" style={{ 
                  textShadow: '0 0 30px rgba(290, 85, 75, 0.8), 0 0 60px rgba(290, 85, 75, 0.6), 0 4px 20px rgba(0, 0, 0, 0.5)',
                  WebkitTextStroke: '2px rgba(290, 85, 75, 0.3)'
                }}>
                  HerCode
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white" style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.9), 0 4px 10px rgba(0, 0, 0, 0.7)' }}>
                Empowering Women in Tech
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white" style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.9), 0 4px 10px rgba(0, 0, 0, 0.7)' }}>
                & Entrepreneurship
              </p>
            </div>
            
            {/* Value Proposition */}
            <p className="text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed animate-slide-in" style={{ 
              animationDelay: "0.2s",
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)'
            }}>
              A hackathon and event series where young women explore, build, and grow in the world of technology.
            </p>
            
            {/* Tech Icons Row */}
            <div className="flex gap-4 justify-center animate-slide-in" style={{ animationDelay: "0.3s" }}>
              <div className="glass-effect p-3 rounded-lg hover:bg-white/10 transition-all">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <div className="glass-effect p-3 rounded-lg hover:bg-white/10 transition-all">
                <Zap className="w-6 h-6 text-primary-glow" />
              </div>
              <div className="glass-effect p-3 rounded-lg hover:bg-white/10 transition-all">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-accent/50 animate-slide-in" style={{ 
              animationDelay: "0.4s",
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 30px rgba(290, 85, 75, 0.4)'
            }}>
              <Calendar className="w-5 h-5 text-accent animate-glow-pulse" />
              <span className="text-sm md:text-base text-white font-medium" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
                Next Event: Coming Soon
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-in" style={{ animationDelay: "0.5s" }}>
              <Button 
                size="lg" 
                className="group relative border-2 border-white/40 text-white hover:bg-white hover:text-primary text-base md:text-lg px-8 py-6 overflow-hidden transition-all duration-300"
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
                <span className="relative z-10 flex items-center gap-2">
                  Join Our Events
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/40 text-white hover:bg-white/20 hover:border-accent text-base md:text-lg px-8 py-6 transition-all duration-300"
                style={{ 
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                }}
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
    </section>
  );
};
