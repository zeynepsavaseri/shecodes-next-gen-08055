import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { upcomingEvents, pastEvents } from "@/data/events";

export const EventsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Upcoming Events */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-pixel mb-6 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              Upcoming Events
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto font-medium">
              Join us at our next events and be part of the change
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-elevated p-10 hover:shadow-glow-intense transition-all duration-500 hover:-translate-y-2 animate-fade-in border border-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-mono font-bold mb-6 text-foreground uppercase tracking-wide">{event.title}</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-base text-foreground/80 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                      <Calendar className="w-5 h-5 text-primary" strokeWidth={2.5} />
                    </div>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-base text-foreground/80 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-primary" strokeWidth={2.5} />
                    </div>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-base text-foreground/80 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                      <Users className="w-5 h-5 text-primary" strokeWidth={2.5} />
                    </div>
                    <span>{event.participants}</span>
                  </div>
                </div>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed font-medium">{event.description}</p>
                <Button className="w-full group font-mono font-bold uppercase text-sm tracking-wider py-6 shadow-glow hover:shadow-glow-intense transition-all duration-300">
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-pixel mb-6 bg-gradient-secondary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              Past Events
            </h3>
            <p className="text-base text-muted-foreground font-medium">
              More events coming soon
            </p>
          </div>

          {pastEvents.length === 0 ? (
            <div className="text-center text-muted-foreground">
              <p className="text-lg font-medium">No past events yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-elevated p-8 border-l-4 border-primary animate-slide-up hover:shadow-glow-intense transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-mono font-bold mb-3 text-foreground uppercase tracking-wide">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 font-medium">{event.date}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Users className="w-5 h-5 mr-3 text-primary" strokeWidth={2.5} />
                      <span className="text-foreground font-medium">{event.participants}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{event.achievements}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
