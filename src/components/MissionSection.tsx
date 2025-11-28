import { Heart, Zap, Users, Brain } from "lucide-react";

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
      {/* Gradient overlay for smooth transition from stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" style={{ top: 0, height: '700px' }} />
      
      {/* Solid background for rest of section */}
      <div className="absolute inset-0 bg-background" style={{ top: '600px' }} />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid opacity-5" style={{ top: '500px' }} />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Core Values Intro */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-delay px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide bg-gradient-primary bg-clip-text text-transparent mb-2">
              Our Values
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 font-medium mt-3">
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
