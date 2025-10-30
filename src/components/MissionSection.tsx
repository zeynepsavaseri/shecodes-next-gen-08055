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
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* What is HerCode */}
        <div className="relative mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-pixel mb-6 text-transparent bg-clip-text bg-gradient-primary uppercase" style={{ letterSpacing: '0.1em' }}>
              What is HerCode?
            </h2>
            <div className="space-y-6 text-sm md:text-base font-mono text-foreground/80 leading-relaxed">
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
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-pixel mb-6 text-transparent bg-clip-text bg-gradient-primary uppercase" style={{ letterSpacing: '0.1em' }}>
              Our Mission
            </h3>
            <p className="text-sm md:text-base font-mono text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Empowering women to explore, create, and lead confidently.<br />
              Everything we do is guided by three core principles that drive real impact:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-xl shadow-card p-4 md:p-8 hover:shadow-glow transition-all hover:-translate-y-2 animate-fade-in border border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative inline-block mb-3 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow-intense transition-all shadow-glow border border-primary/20">
                    <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                  </div>
                  {/* Glowing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-sm md:text-lg font-mono font-bold mb-2 md:mb-4 text-foreground uppercase tracking-wide">{value.title}</h4>
                <p className="text-xs md:text-sm font-mono text-muted-foreground leading-relaxed">
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
