import { Heart, Zap, Users } from "lucide-react";

export const MissionSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Inclusion",
      description: "A space where every woman feels welcome and empowered to thrive in tech."
    },
    {
      icon: Zap,
      title: "Courage", 
      description: "Bold ideas and fearless experimentation drive everything we create."
    },
    {
      icon: Users,
      title: "Community",
      description: "Women supporting women, learning and growing together."
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />

      <div className="container relative mx-auto px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              What is HerCode?
            </h2>
          </div>

          {/* Flowing Story */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2">
            <div className="text-xs sm:text-sm md:text-base font-mono text-foreground/90 leading-relaxed space-y-4 sm:space-y-5 max-w-3xl mx-auto">
              <p>
                HerCode started from a simple observation: too many talented women are missing from tech — not because they lack the skills or ambition, but because the space doesn't always feel like it's made for them.
              </p>
              <p>
                We're building a community where women feel encouraged to explore technology, learn by doing, and create fearlessly. HerCode is for the curious, the bold, and the ambitious — women who want to challenge themselves, support one another, and shape the future of tech on their own terms.
              </p>
              <p className="text-foreground font-semibold">
                Everything we do is guided by our three core values.
              </p>
            </div>
          </div>

          {/* Core Values - Compact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card/60 backdrop-blur-sm rounded-lg shadow-card p-5 sm:p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-1 border border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                <div className="relative flex flex-col items-center text-center gap-3">
                  {/* Icon */}
                  <div className="relative inline-block">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-500 shadow-glow">
                      <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                    </div>
                    {/* Glowing ring effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-primary/30 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h4 className="text-sm sm:text-base font-mono font-bold mb-2 text-foreground uppercase tracking-wider">
                      {value.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
