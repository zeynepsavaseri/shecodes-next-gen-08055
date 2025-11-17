import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "More testimonials coming soon from our upcoming events.",
      author: "HerCode Community",
      type: "participant",
      event: "Stay tuned"
    },
    {
      quote: "Join us to be part of the next success story.",
      author: "Future Participant",
      type: "partner",
      event: "Upcoming Events"
    },
    {
      quote: "We're building something special together.",
      author: "HerCode Team",
      type: "participant",
      event: "2025 and beyond"
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
    <section className="py-8 md:py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-2 md:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            From Our Participants & Partners
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-mono text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
            Feedback from women who joined our events and partners who collaborated with us.
          </p>
        </div>

        {/* Horizontal scrolling carousel */}
        <div className="relative max-w-6xl mx-auto -mx-3 sm:mx-0">
          <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-3 sm:px-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[360px] snap-center first:ml-0 last:mr-0"
              >
                <div 
                  className="group bg-background/40 backdrop-blur-sm rounded-lg border-2 p-5 sm:p-6 md:p-8 h-full min-h-[240px] sm:min-h-[280px] md:min-h-[300px] flex flex-col justify-between transition-all duration-300"
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
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-3 sm:mb-4 transition-all duration-300" 
                      style={{ color: `${getAccentColor(testimonial.type)}80` }}
                    />
                    <p className="text-sm sm:text-sm md:text-base font-mono text-foreground/90 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 space-y-1.5 sm:space-y-2" style={{ borderTop: `1px solid ${getAccentColor(testimonial.type)}30` }}>
                    <p 
                      className="text-xs md:text-sm font-mono font-semibold"
                      style={{ color: getAccentColor(testimonial.type) }}
                    >
                      — {testimonial.author}
                    </p>
                    <p className="text-[10px] sm:text-xs font-mono text-muted-foreground/70">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-4 sm:mt-6 italic px-4">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
};