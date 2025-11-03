import { useState } from "react";
import { Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyPartnerSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      title: "TALENT & ENGAGEMENT",
      front: "Connect with exceptional women in tech through hackathons and workshops.",
      expanded: "Gain direct access to top talent from ETH and leading European universities. Experience creativity in action and meet future leaders ready to make impact."
    },
    {
      icon: Target,
      title: "DIVERSITY & INCLUSION",
      front: "Move your D&I goals from a statement to action.",
      expanded: "Partnering with HerCode helps you build an inclusive, future-ready tech ecosystem. Work with ambitious female innovators who fuel creativity and growth."
    },
    {
      icon: Award,
      title: "BRAND IMPACT",
      front: "Position your company as a catalyst for innovation and equality.",
      expanded: "Be featured alongside Europe's most forward-thinking partners. Strengthen your reputation as a brand investing in the next generation of women shaping technology."
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-background/95 to-muted/30 overflow-hidden">
      {/* Animated tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pixel mb-6 bg-gradient-secondary bg-clip-text text-transparent uppercase tracking-wider">
            Why Partner with HerCode
          </h2>
          <p className="text-sm font-mono text-muted-foreground max-w-2xl mx-auto">
            Join forward-thinking companies investing in the future of tech diversity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              onClick={() => toggleCard(index)}
              className={`
                group relative bg-card/80 backdrop-blur-sm cursor-pointer
                transition-all duration-500 ease-out
                hover:shadow-glow hover:-translate-y-2
                border border-primary/20
                ${expandedCard === index ? 'md:col-span-1 shadow-glow scale-105' : ''}
              `}
            >
              <CardContent className="p-8 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                {/* Neon glow effect on active card */}
                {expandedCard === index && (
                  <div className="absolute inset-0 bg-gradient-primary opacity-5 animate-pulse" />
                )}

                <div className="relative flex flex-col items-center text-center gap-6">
                  {/* Icon with glow */}
                  <div className="relative">
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-primary 
                      flex items-center justify-center
                      shadow-glow
                      transition-all duration-500
                      ${expandedCard === index ? 'scale-110 shadow-glow-intense' : 'group-hover:scale-110'}
                    `}>
                      <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    {/* Rotating ring */}
                    <div className={`
                      absolute inset-0 rounded-2xl border-2 border-primary/30 
                      transition-transform duration-700
                      ${expandedCard === index ? 'scale-125 opacity-0' : 'group-hover:scale-110'}
                    `} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-mono font-bold mb-4 text-foreground uppercase tracking-wider">
                      {benefit.title}
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-4">
                      {benefit.front}
                    </p>
                    
                    {/* Expanded content */}
                    <div className={`
                      overflow-hidden transition-all duration-500 ease-out
                      ${expandedCard === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="pt-4 border-t border-primary/20">
                        <p className="text-sm font-mono text-foreground/90 leading-relaxed">
                          {benefit.expanded}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className={`
                    absolute bottom-4 right-4
                    text-xs font-mono text-primary/60
                    transition-all duration-300
                    ${expandedCard === index ? 'rotate-180' : 'group-hover:text-primary'}
                  `}>
                    {expandedCard === index ? '▲' : '▼'}
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
