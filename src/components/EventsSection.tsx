import { Users } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";
import { EventCard } from "./EventCard";

export const EventsSection = () => {

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Upcoming Events */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              Upcoming Events
            </h2>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground max-w-2xl mx-auto">
              Join us at our next events and be part of the change
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <div className="text-center mb-6 sm:mb-8 px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-2 bg-gradient-secondary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              Past Events
            </h3>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground">
              More events coming soon
            </p>
          </div>

          {pastEvents.length === 0 ? (
            <div className="text-center text-muted-foreground">
              <p>No past events yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-card p-6 border-l-4 border-primary animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{event.date}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-foreground">{event.participants}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.achievements}</p>
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
