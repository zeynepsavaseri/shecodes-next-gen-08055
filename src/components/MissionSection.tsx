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
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* What is HerCode */}
        <div className="relative mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              What is HerCode?
            </h2>
            <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
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
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Our Core Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg shadow-card p-8 hover:shadow-lg transition-all hover:-translate-y-2 animate-fade-in border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center transition-transform group-hover:scale-110">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
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
                className="bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-8 border border-primary/20 animate-fade-in hover:border-primary/40 transition-all hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
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
