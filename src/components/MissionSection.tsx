import { PixelIcon } from "@/components/PixelIcon";
import { Heart, Zap, Users, Brain } from "lucide-react";

export const MissionSection = () => {

  const values = [
    {
      icon: Heart,
      title: "Inclusion",
      description: "Everyone has a seat at the table. No gatekeeping, no exceptions.",
    },
    {
      icon: Zap,
      title: "Courage", 
      description: "Try things. Break things. Ship things. Confidence is built, not given.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We show up for each other — online, offline, and everywhere in between.",
    },
    {
      icon: Brain,
      title: "Well-Being",
      description: "You can't build great things if you're running on empty. Health comes first.",
    }
  ];


  return (
    <section className="relative -mt-8 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 overflow-hidden mb-4 sm:mb-12 md:mb-20 lg:mb-24">
      {/* Gradient overlay for smooth transition from stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" style={{ top: 0, height: '700px' }} />
      
      {/* Solid background for rest of section */}
      <div className="absolute inset-0 bg-background" style={{ top: '600px' }} />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Core Values Intro */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-delay px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground mb-2">
              WHAT WE <span className="bg-gradient-primary bg-clip-text text-transparent">STAND FOR</span>
            </h2>
          </div>

          {/* Core Values - Clean Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto animate-fade-in-delay px-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-card/40 backdrop-blur-sm rounded border border-border/40 p-3 sm:p-4 flex flex-col items-start text-left gap-2 sm:gap-3 hover-lift"
                style={{ 
                  minHeight: '160px'
                }}
              >
                {/* Pixelated Icon */}
                <PixelIcon icon={value.icon} size={22} className="text-primary" strokeWidth={2} />
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h4 className="text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground uppercase tracking-wide">
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
