import { Heart, Zap, Users, Brain } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const MissionSection = () => {

  const values = [
    {
      icon: Heart,
      title: "Inclusion",
      description: "A space where every woman feels welcome and empowered to thrive in tech.",
      microLine: "ETH roots. EU network."
    },
    {
      icon: Zap,
      title: "Courage", 
      description: "Bold ideas and fearless experimentation drive everything we create.",
      microLine: "Ideas → prototypes. Fast."
    },
    {
      icon: Users,
      title: "Community",
      description: "Women supporting women, learning and growing together.",
      microLine: "Build together, grow together."
    },
    {
      icon: Brain,
      title: "Well-Being",
      description: "A clear mind and balanced energy fuel creativity and innovation.",
      microLine: "Clarity fuels creativity."
    }
  ];


  return (
    <section className="relative -mt-8 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-8 sm:mb-12 animate-fade-in mt-0 sm:mt-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-2">
              What is HerCode?
            </h2>
          </div>

          {/* Flowing Story */}
          <div className="text-center mb-12 sm:mb-16 px-3 sm:px-4 animate-fade-in-delay">
            <div className="text-sm sm:text-base text-foreground/80 leading-relaxed space-y-3 sm:space-y-4 max-w-3xl mx-auto">
              <p>
                HerCode began with a simple insight: many talented women stay out of tech not because of ability, but because the spaces around them often don't feel built for them.
                In entrepreneurial environments, I often saw women feel less encouraged to enter or "just start," even when they had strong ideas. And at hackathons, there were barely any women at all — and the few who joined were often spoken over before they even had the chance to contribute.
              </p>
              <p>
                HerCode fills that gap by creating a space where women can explore tech comfortably, build meaningful connections, and grow with confidence
              </p>
            </div>
          </div>

          {/* Core Values Intro */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-delay px-2">
            <p className="text-sm sm:text-base md:text-lg text-foreground font-semibold">
              Everything we do is guided by our core values.
            </p>
          </div>

          {/* Core Values - Clean Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto animate-fade-in-delay px-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card/40 backdrop-blur-sm rounded border border-border/40 p-3 sm:p-4 flex flex-col items-center text-center gap-2 sm:gap-3 cursor-pointer hover-lift"
                style={{ 
                  minHeight: '160px'
                }}
              >
                {/* Subtle glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300" />
                
                {/* Icon with gradient and hover effects */}
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-glow">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  <h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
