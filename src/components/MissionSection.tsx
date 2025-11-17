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
    <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What is HerCode?
            </h2>
          </div>

          {/* Flowing Story */}
          <div className="text-center mb-16 px-4 animate-fade-in-delay">
            <div className="text-sm sm:text-base text-foreground/80 leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                HerCode started from a simple observation: too many talented women are missing from tech — not because they lack the skills or ambition, but because the space doesn't always feel like it's made for them.
              </p>
              <p>
                We're building a community where women feel encouraged to explore technology, learn by doing, and create fearlessly. HerCode is for the curious, the bold, and the ambitious — women who want to challenge themselves, support one another, and shape the future of tech on their own terms.
              </p>
            </div>
          </div>

          {/* Core Values Intro */}
          <div className="text-center mb-8 animate-fade-in-delay">
            <p className="text-base sm:text-lg text-foreground font-semibold">
              Everything we do is guided by our core values.
            </p>
          </div>

          {/* Core Values - Clean Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-delay">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card/40 backdrop-blur-sm rounded border border-border/40 p-4 flex flex-col items-center text-center gap-3 cursor-pointer hover-lift"
                style={{ 
                  minHeight: '180px'
                }}
              >
                {/* Subtle glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded transition-opacity duration-300" />
                
                {/* Icon with gradient and hover effects */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <value.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  {/* Subtle ring on hover */}
                  <div className="absolute inset-0 rounded-lg border-2 border-primary/30 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  <h4 className="text-xs sm:text-sm font-semibold mb-2 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
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
