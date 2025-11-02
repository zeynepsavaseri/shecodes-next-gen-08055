import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I never thought I'd feel confident building something tech-related — HerCode changed that.",
      author: "Participant"
    },
    {
      quote: "The creativity and energy these women bring is inspiring.",
      author: "Partner Company"
    },
    {
      quote: "HerCode made coding feel fun, collaborative, and human.",
      author: "Student Participant"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel mb-3 md:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            Voices from our community
          </h2>
        </div>

        {/* Horizontal scrolling carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center"
              >
                <div className="group bg-background/40 backdrop-blur-sm rounded-lg md:rounded-xl border-2 border-primary/30 p-6 md:p-8 h-full min-h-[280px] flex flex-col justify-between transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <div>
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/50 mb-4 transition-colors duration-300 group-hover:text-primary" />
                    <p className="text-sm md:text-base font-mono text-foreground/90 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="border-t border-primary/20 pt-4 mt-6">
                    <p className="text-xs md:text-sm font-mono text-primary">
                      — {testimonial.author}
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