import { Users, Diamond } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";
import { EventCard } from "./EventCard";

export const EventsSection = () => {

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-muted/20 mb-8 sm:mb-12 md:mb-16" id="events">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Upcoming Events */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight bg-gradient-primary bg-clip-text text-transparent mb-3 sm:mb-4">
              EVENTS
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-4 sm:gap-6 max-w-3xl mx-auto animate-fade-in-delay px-2">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="animate-fade-in-delay">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Past Events
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              More events coming soon
            </p>
          </div>

          {pastEvents.length === 0 ? (
            <div className="text-center text-muted-foreground px-2">
              <p className="text-sm">No past events yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-2">
              {pastEvents.map((event, index) => (
                <a
                  key={index}
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-1 rounded">
                      {event.eventType}
                    </span>
                    {event.partner && (
                      <img 
                        src={event.partner.logo} 
                        alt={event.partner.name}
                        className="h-6 w-auto opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{event.subtitle}</p>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <p>{event.date} • {event.location}</p>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-primary" />
                      <span>{event.participants}</span>
                    </div>
                    {event.achievements && (
                      <p className="text-primary/70 italic">{event.achievements}</p>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/30">
                    <span className="text-xs font-mono text-primary group-hover:underline">View Event →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
