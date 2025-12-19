import { Users, MapPin, ExternalLink } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";
import { EventCard } from "./EventCard";

export const EventsSection = () => {
  const parseDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
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
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto px-2">
              {pastEvents.map((event, index) => {
                const { month, day, year } = parseDate(event.date);
                const accentColor = event.partner?.accentColor || "280 65% 60%";
                
                return (
                  <div
                    key={index}
                    className="relative w-full sm:w-72"
                  >
                    {/* Stub ticket design */}
                    <div className="relative bg-gradient-to-b from-[#1a1f2e] to-[#0f1219] rounded-xl overflow-hidden border border-white/5">
                      
                      {/* Perforated top edge */}
                      <div className="absolute top-0 left-0 right-0 h-3 flex justify-between px-2">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-background -mt-0.5" />
                        ))}
                      </div>

                      {/* Content */}
                      <div className="pt-6 pb-4 px-5">
                        {/* Header with badge and partner */}
                        <div className="flex items-center justify-between mb-4">
                          <span 
                            className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider"
                            style={{ 
                              backgroundColor: `hsl(${accentColor} / 0.15)`,
                              color: `hsl(${accentColor})`
                            }}
                          >
                            {getEventTypeLabel(event.eventType)}
                          </span>
                          {event.partner && (
                            <div className="bg-white/90 rounded px-2 py-1">
                              <img 
                                src={event.partner.logo} 
                                alt={event.partner.name}
                                className="h-4 w-auto"
                              />
                            </div>
                          )}
                        </div>

                        {/* Event title */}
                        <h4 className="text-lg font-bold text-white/90 mb-1 leading-tight">
                          {event.title}
                        </h4>
                        <p className="text-xs text-white/40 italic mb-4">
                          {event.subtitle}
                        </p>

                        {/* Date display */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-2xl font-black text-white/70">{day}</span>
                          <span className="text-sm font-semibold text-white/50">{month}</span>
                          <span className="text-xs text-white/30">{year}</span>
                        </div>

                        {/* Location & participants */}
                        <div className="flex flex-col gap-1.5 text-xs text-white/40 mb-4">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="w-3 h-3" />
                            {event.participants}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-dashed border-white/10 my-4" />

                        {/* Footer with stamp and view link */}
                        <div className="flex items-center justify-between">
                          <div 
                            className="px-3 py-1 border border-dashed rounded text-[10px] font-bold uppercase tracking-wider rotate-[-3deg]"
                            style={{ 
                              borderColor: `hsl(${accentColor} / 0.4)`,
                              color: `hsl(${accentColor} / 0.5)`
                            }}
                          >
                            ✓ Attended
                          </div>
                          
                          {event.registrationUrl && (
                            <a
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-primary/70 hover:text-primary transition-colors"
                            >
                              View
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Subtle noise/grain overlay */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};