import { Quote, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const TestimonialsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );
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
            Real feedback from women who joined our hackathons and partners, who collaborated with us.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Floating message icon */}
          <div className="absolute -top-8 right-4 md:right-8 z-10 animate-float-slow">
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-primary/60" />
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group bg-background/40 backdrop-blur-sm rounded-lg md:rounded-xl border-2 p-6 md:p-8 h-full min-h-[300px] flex flex-col justify-between transition-all duration-500 ease-out"
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 border-primary/30 hover:bg-primary/20" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 border-primary/30 hover:bg-primary/20" />
          </Carousel>
        </div>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-8 italic">
          Swipe or wait for auto-slide • Pauses on hover
        </p>
      </div>
    </section>
  );
};