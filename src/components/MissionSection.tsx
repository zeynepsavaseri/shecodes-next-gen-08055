import { Target, Users, Lightbulb, TrendingUp, Heart, Sparkles } from "lucide-react";

export const MissionSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Inclusion",
      description: "Creating a welcoming space where every woman feels empowered to step into tech and stay."
    },
    {
      icon: Lightbulb,
      title: "Curiosity", 
      description: "Encouraging learning, exploration, and the confidence to try something new."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive network where women lift each other up and grow together."
    }
  ];

  const whyItMatters = [
    {
      icon: TrendingUp,
      title: "Close the Gender Gap",
      description: "Women remain underrepresented in tech. We're here to change that by creating pathways and opportunities."
    },
    {
      icon: Sparkles,
      title: "Foster Collaboration",
      description: "Innovation thrives when diverse minds come together. We create spaces for meaningful connections and teamwork."
    },
    {
      icon: Heart,
      title: "Build a Support Network",
      description: "Success is easier with the right support. Our community provides mentorship, guidance, and lasting friendships."
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
              HerCode started from a simple observation: women are vastly underrepresented in the tech and entrepreneurial space, yet their potential is limitless.
              </p>
              <p>
                Many talented women hesitate to join these environments. Not because of a lack of ability, but because they often don't see themselves represented or encouraged. HerCode was created to change that.
              </p>
              <p>
                We're building a space where women feel welcome to explore technology, experiment fearlessly, and grow their confidence through hands-on learning. HerCode connects ambitious, curious women who want to challenge themselves, support one another, and step boldly into the world of tech.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-mono font-bold mb-3 text-foreground uppercase tracking-wider">
              Our Core Values
            </h3>
            <p className="text-sm font-mono text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-xl shadow-card p-8 hover:shadow-glow transition-all hover:-translate-y-2 animate-fade-in border border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow-intense transition-all shadow-glow">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Glowing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <h4 className="text-lg font-mono font-bold mb-4 text-foreground uppercase tracking-wide">{value.title}</h4>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Why It Matters
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The impact we're working to create
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyItMatters.map((item, index) => (
              <div
                key={index}
                className="relative glass-effect rounded-xl p-8 border border-primary/30 animate-fade-in hover:border-accent/50 transition-all group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative mb-4">
                  <item.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h4 className="relative text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                <p className="relative text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
