import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Coming soon.",
      author: "Participant",
      type: "participant",
      event: "Upcoming Events"
    },
    {
      quote: "Coming soon.",
      author: "Partner",
      type: "partner",
      event: "Upcoming Events"
    },
    {
      quote: "Coming soon.",
      author: "Participant",
      type: "participant",
      event: "Upcoming Events"
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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide bg-gradient-primary bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
            Testimonials
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
                className="flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[340px] lg:w-[360px] snap-center first:ml-0 last:mr-0"
              >
                <div 
                  className="group bg-background/40 backdrop-blur-sm rounded-lg border-2 p-4 sm:p-5 md:p-6 lg:p-8 h-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] flex flex-col justify-between transition-all duration-300"
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
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-3 sm:mb-4 transition-all duration-300" 
                      style={{ color: `${getAccentColor(testimonial.type)}80` }}
                    />
                    <p className="text-xs sm:text-sm md:text-base font-mono text-foreground/90 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="pt-3 sm:pt-4 mt-4 sm:mt-5 md:mt-6 space-y-1.5 sm:space-y-2" style={{ borderTop: `1px solid ${getAccentColor(testimonial.type)}30` }}>
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

        <p className="text-center text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-4 sm:mt-5 md:mt-6 italic px-4">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
};