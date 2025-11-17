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
    <section className="relative py-16 sm:py-20 bg-background overflow-hidden">
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
              <p className="text-foreground font-semibold">
                Everything we do is guided by our core values.
              </p>
            </div>
          </div>

          {/* Core Values - Clean Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-delay">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative bg-card/40 backdrop-blur-sm rounded border border-border/40 p-4 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:bg-card/60 hover:border-primary/40"
                style={{ 
                  minHeight: '180px'
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
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
