import { Users } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";
import { EventCard } from "./EventCard";

export const EventsSection = () => {

  return (
    <section className="py-16 sm:py-20 bg-muted/20" id="events">
      <div className="container mx-auto px-4">
        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Upcoming Events
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Join us at our next events and be part of the change
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto animate-fade-in-delay">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="animate-fade-in-delay">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Past Events
            </h3>
            <p className="text-sm text-muted-foreground">
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
                  className="bg-card rounded-lg shadow-card p-6 border-l-2 border-primary"
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
