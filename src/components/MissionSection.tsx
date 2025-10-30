import { Code2, Zap, Sparkles } from "lucide-react";

export const MissionSection = () => {
  const values = [
    {
      icon: Code2,
      title: "Inclusion",
      description: "A space where every woman feels welcome in tech and empowered to thrive."
    },
    {
      icon: Zap,
      title: "Courage", 
      description: "Curiosity and bold ideas drive us to learn, build, and create fearlessly."
    },
    {
      icon: Sparkles,
      title: "Community",
      description: "Women supporting women, growing together through connection and collaboration."
    }
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-15" />
      
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="container relative mx-auto px-4">
        {/* What is HerCode */}
        <div className="relative mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-8 text-transparent bg-clip-text bg-gradient-primary uppercase" style={{ letterSpacing: '0.1em' }}>
              What is HerCode?
            </h2>
            <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed font-medium">
              <p>
                HerCode grew out of a simple observation: too many women are missing from tech and entrepreneurship, and it's certainly not because they lack the talent or drive to belong there.
              </p>
              <p>
                We're creating a space where women feel encouraged to explore technology, build confidently, and learn through hands-on experience. HerCode brings together ambitious, curious women who want to challenge themselves, support one another, and make their mark in the world of tech.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-pixel mb-8 text-transparent bg-clip-text bg-gradient-primary uppercase" style={{ letterSpacing: '0.1em' }}>
              Our Mission
            </h3>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Empowering women to explore, create, and lead confidently.<br />
              Everything we do is guided by three core principles that drive real impact:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl shadow-elevated p-6 md:p-10 hover:shadow-glow-intense transition-all duration-500 hover:-translate-y-2 animate-fade-in border border-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl" />
                
                <div className="relative inline-block mb-6 md:mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow-intense transition-all shadow-glow border border-primary/20">
                    <value.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                  </div>
                  {/* Glowing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-base md:text-lg font-mono font-bold mb-3 md:mb-4 text-foreground uppercase tracking-wide">{value.title}</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
