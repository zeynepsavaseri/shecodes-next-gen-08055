import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I never thought I'd feel confident building something tech-related — HerCode changed that.",
      author: "Participant",
      type: "participant",
      event: "EY Hackathon, Spring 2024"
    },
    {
      quote: "The creativity and energy these women bring is inspiring.",
      author: "Partner Company",
      type: "partner",
      event: "Corporate Partnership Program"
    },
    {
      quote: "HerCode made coding feel fun, collaborative, and human.",
      author: "Student Participant",
      type: "participant",
      event: "University Workshop Series, 2024"
    }
  ];

  const getAccentColor = (type: string) => {
    return type === "participant" ? "#C3A6FF" : "#7AE0FF";
  };

  const getGlowColor = (type: string) => {
    return type === "participant" 
      ? "rgba(195, 166, 255, 0.4)" 
      : "rgba(122, 224, 255, 0.4)";
  };

  return (
    <section className="py-12 md:py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel mb-3 md:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            From Our Participants & Partners
          </h2>
          <p className="text-sm md:text-base font-mono text-muted-foreground max-w-3xl mx-auto px-4">
            Real feedback from women who joined our hackathons and partners who built with us.
          </p>
        </div>

        {/* Horizontal scrolling carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center"
              >
                <div 
                  className="group bg-background/40 backdrop-blur-sm rounded-lg md:rounded-xl border-2 p-6 md:p-8 h-full min-h-[300px] flex flex-col justify-between transition-all duration-300"
                  style={{
                    borderColor: `${getAccentColor(testimonial.type)}50`,
                    boxShadow: `0 0 0 ${getGlowColor(testimonial.type)}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = getAccentColor(testimonial.type);
                    e.currentTarget.style.boxShadow = `0 0 20px ${getGlowColor(testimonial.type)}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${getAccentColor(testimonial.type)}50`;
                    e.currentTarget.style.boxShadow = `0 0 0 ${getGlowColor(testimonial.type)}`;
                  }}
                >
                  <div>
                    <Quote 
                      className="w-8 h-8 md:w-10 md:h-10 mb-4 transition-all duration-300" 
                      style={{ color: `${getAccentColor(testimonial.type)}80` }}
                    />
                    <p className="text-sm md:text-base font-mono text-foreground/90 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="pt-4 mt-6 space-y-2" style={{ borderTop: `1px solid ${getAccentColor(testimonial.type)}30` }}>
                    <p 
                      className="text-xs md:text-sm font-mono font-semibold"
                      style={{ color: getAccentColor(testimonial.type) }}
                    >
                      — {testimonial.author}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground/70">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 italic">
          Swipe to see more testimonials (coming soon)
        </p>
      </div>
    </section>
  );
};