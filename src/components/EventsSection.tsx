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
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-card p-4 sm:p-6 border-l-2 border-primary"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{event.date}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs sm:text-sm">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-foreground">{event.participants}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{event.achievements}</p>
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
