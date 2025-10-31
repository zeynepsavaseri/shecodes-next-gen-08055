import { Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const TeamSection = () => {
  const founders = [
    {
      name: "[Your Name]",
      title: "Founder & Director",
      bio: "As a [Your Role, e.g., 'Software Engineer at Google' or 'Data Science student at ETH Zürich'], I saw a gap between ambitious women and the opportunities in tech. I founded {HerCode} to bridge that gap and create a supportive environment where women can build their skills and confidence.",
      image: "/placeholder.svg", // Replace with actual founder photo
    },
    {
      name: "[Co-founder's Name]",
      title: "Co-Founder & Head of Partnerships",
      bio: "[Her Role, e.g., 'A marketing strategist'] with a passion for diversity and inclusion. I manage our industry partnerships to ensure {HerCode} connects our members with real-world opportunities, mentors, and companies that share our values.",
      image: "/placeholder.svg", // Replace with actual founder photo
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-pixel mb-6 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Meet Our Founders
          </h2>
          <p className="text-base font-mono text-foreground max-w-3xl mx-auto leading-relaxed">
            We are a team of tech professionals, students, and advocates who believe in the power of community. 
            We started {'{HerCode}'} to build the space we wished we had when we started our own careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-pixel transition-all hover:-translate-y-1 animate-fade-in shadow-pixel-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-mono font-bold mb-1 text-foreground uppercase tracking-wide">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-mono text-primary mb-4 font-bold">
                    {founder.title}
                  </p>
                  <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
