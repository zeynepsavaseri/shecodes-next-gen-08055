import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Target, Globe } from "lucide-react";

export const BenefitsSection = () => {
  const companyBenefits = [
    {
      icon: Briefcase,
      title: "Talent & Engagement",
      description: "Meet skilled women building real projects — not just résumés. See their work firsthand at our events."
    },
    {
      icon: Target,
      title: "Diversity & Inclusion",
      description: "Build teams that actually reflect the world. Diverse perspectives make better products."
    },
    {
      icon: Globe,
      title: "Brand Impact",
      description: "Actions speak louder than mission statements. Show up where it matters."
    }
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-muted/20 mb-8 sm:mb-12 md:mb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Benefits for Companies
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Why companies partner with us
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto animate-fade-in-delay px-2">
          {companyBenefits.map((benefit, index) => (
            <Card key={index} className="group bg-card hover-lift">
              <CardContent className="p-4 sm:p-6 relative overflow-hidden">
                <div className="relative flex flex-col gap-3 sm:gap-4">
                  {/* Icon — simple with border */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-primary/30 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 sm:w-5 sm:h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
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
