import { Users, MapPin } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";
import { EventCard } from "./EventCard";

export const EventsSection = () => {
  const parseDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return { month, day, year };
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "hackathon": return "HACKATHON";
      case "meetup": return "MEETUP";
      case "workshop": return "WORKSHOP";
      case "conference": return "CONFERENCE";
      default: return "EVENT";
    }
  };

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
          </div>

          {pastEvents.length === 0 ? (
            <div className="text-center text-muted-foreground px-2">
              <p className="text-sm">No past events yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-2">
              {pastEvents.map((event, index) => {
                const { month, day, year } = parseDate(event.date);
                const accentColor = event.partner?.accentColor || "280 65% 60%";
                
                return (
                  <a
                    key={index}
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    {/* Used ticket card */}
                    <div className="used-ticket relative overflow-hidden border border-white/[0.05] bg-[#0c1321]/70 opacity-75 hover:opacity-100 transition-all duration-300 hover:border-white/10">
                      {/* ATTENDED stamp */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] pointer-events-none z-10">
                        <div 
                          className="px-4 py-1.5 border-2 rounded-sm text-xs font-black uppercase tracking-widest opacity-30"
                          style={{ 
                            borderColor: `hsl(${accentColor})`,
                            color: `hsl(${accentColor})`
                          }}
                        >
                          Attended
                        </div>
                      </div>

                      <div className="relative flex flex-col">
                        {/* Main content */}
                        <div className="px-5 py-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span 
                              className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider opacity-60"
                              style={{ 
                                backgroundColor: `hsl(${accentColor})`,
                                color: 'white'
                              }}
                            >
                              {getEventTypeLabel(event.eventType)}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-white/80 mb-0.5 tracking-tight group-hover:text-white transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-[11px] italic text-white/30 mb-2">
                            "{event.subtitle}"
                          </p>

                          <div className="flex items-center gap-3 text-[10px] text-white/30">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-2.5 h-2.5" />
                              {event.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-2.5 h-2.5" />
                              {event.participants}
                            </span>
                          </div>
                        </div>

                        {/* Separator with notches */}
                        <div className="flex items-center px-0">
                          <div className="w-3 h-3 rounded-full bg-background -ml-1.5 border-r border-white/[0.05]" />
                          <div className="flex-1 border-t border-dashed border-white/[0.06]" />
                          <div className="w-3 h-3 rounded-full bg-background -mr-1.5 border-l border-white/[0.05]" />
                        </div>

                        {/* Bottom section with date */}
                        <div className="px-5 py-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-black text-white/50">{month} {day}</span>
                            <span className="text-white/20 text-[10px]">{year}</span>
                          </div>
                          
                          <span className="text-[10px] font-mono text-primary/60 group-hover:text-primary transition-colors">
                            View →
                          </span>
                        </div>

                        {/* Barcode */}
                        <div className="flex items-end justify-center gap-[1px] pb-3 h-4 opacity-10">
                          {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-[1px] bg-white rounded-full" style={{ height: `${6 + (i % 3) * 3}px` }} />
                          ))}
                        </div>
                      </div>

                      {/* Subtle worn texture overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.01] to-transparent pointer-events-none" />
                    </div>

                    <style>{`
                      .used-ticket {
                        border-radius: 12px;
                        filter: saturate(0.7);
                      }
                      .used-ticket:hover {
                        filter: saturate(0.9);
                      }
                    `}</style>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};