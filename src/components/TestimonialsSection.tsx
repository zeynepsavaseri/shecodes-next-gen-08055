import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  // Empty placeholder testimonials
  const placeholders = [1, 2, 3];

  return (
    <section className="py-12 md:py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel mb-3 md:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
            What Our Participants Say
          </h2>
          <p className="text-sm font-mono text-muted-foreground max-w-2xl mx-auto px-4">
            Participant statements coming soon
          </p>
        </div>

        {/* Horizontal scrolling carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {placeholders.map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center"
              >
                <div className="bg-card/50 rounded-lg md:rounded-xl border-2 border-dashed border-primary/20 p-6 md:p-8 h-full min-h-[280px] flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/30 mb-4" />
                    <div className="space-y-3">
                      <div className="h-4 bg-muted/30 rounded w-3/4"></div>
                      <div className="h-4 bg-muted/30 rounded w-full"></div>
                      <div className="h-4 bg-muted/30 rounded w-5/6"></div>
                    </div>
                  </div>
                  <div className="border-t border-border/50 pt-4 mt-6">
                    <div className="h-4 bg-muted/30 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-muted/30 rounded w-2/3"></div>
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