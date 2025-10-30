import { Card, CardContent } from "@/components/ui/card";

export const BenefitsSection = () => {
  const companyBenefits = [
    {
      emoji: "💼",
      title: "Talent & Engagement",
      description: "Connect with skilled women through collaborative events and experience their talent in action."
    },
    {
      emoji: "🎯",
      title: "Diversity & Inclusion",
      description: "Build a stronger, more inclusive team that reflects modern workplace values and fuels innovation."
    },
    {
      emoji: "🌐",
      title: "Brand Impact",
      description: "Demonstrate your commitment to diversity and equality while positioning your company as a forward-thinking industry leader."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel mb-4 bg-gradient-secondary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Benefits for Companies
          </h2>
          <p className="text-sm font-mono text-muted-foreground">
            Partner with us to strengthen your team and brand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {companyBenefits.map((benefit, index) => (
            <Card key={index} className="bg-card hover:shadow-pixel transition-all group hover:-translate-y-1">
              <CardContent className="p-6 relative">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {benefit.emoji}
                  </div>
                  <div>
                    <h3 className="text-base font-mono font-bold mb-2 text-foreground uppercase tracking-wide">{benefit.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
