import { Quote } from "lucide-react";

export const TestimonialsSection = () => {

  const testimonials = [
    {
      quote: "Her-Circles is a great networking event to meet other women from different fields and backgrounds. The location, ambience and women were inspiring and I can only recommend!",
      author: "Letitia",
      type: "participant",
      event: "Her Circles Meetup",
      date: "December 2025",
      eventDetails: "Her Circles Meetup",
      eventUrl: "https://lu.ma/lvnhywjv",
      linkedIn: "https://www.linkedin.com/in/letitia-kan-632a29220/"
    },
    {
      quote: "Coming soon.",
      author: "Partner",
      type: "partner",
      event: "Upcoming Events",
      date: null,
      eventDetails: null
    },
    {
      quote: "Coming soon.",
      author: "Participant",
      type: "participant",
      event: "Upcoming Events",
      date: null,
      eventDetails: null
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
    <section className="py-6 sm:py-8 md:py-10 bg-background mb-8 sm:mb-12 md:mb-16" id="testimonials">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight bg-gradient-primary bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
            VOICES
          </h2>
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
                    {testimonial.linkedIn ? (
                      <a
                        href={testimonial.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm font-mono font-semibold hover:underline transition-opacity hover:opacity-80"
                        style={{ color: getAccentColor(testimonial.type) }}
                      >
                        — {testimonial.author}
                      </a>
                    ) : (
                      <p 
                        className="text-xs md:text-sm font-mono font-semibold"
                        style={{ color: getAccentColor(testimonial.type) }}
                      >
                        — {testimonial.author}
                      </p>
                    )}
                    {testimonial.date ? (
                      <div className="flex flex-col gap-1">
                        <p className="text-[10px] sm:text-xs font-mono text-muted-foreground/70">
                          {testimonial.date}
                        </p>
                        {testimonial.eventUrl && (
                          <a
                            href={testimonial.eventUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] sm:text-xs font-mono hover:text-foreground transition-colors underline decoration-dotted underline-offset-2"
                            style={{ color: getAccentColor(testimonial.type) }}
                          >
                            {testimonial.eventDetails} →
                          </a>
                        )}
                      </div>
                    ) : (
                      <p className="text-[10px] sm:text-xs font-mono text-muted-foreground/70">
                        {testimonial.event}
                      </p>
                    )}
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