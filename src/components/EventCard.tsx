import { MapPin } from "lucide-react";
import { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  const accentColor = event.partner?.accentColor || "280 65% 60%";
  
  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "hackathon": return "HACKATHON";
      case "meetup": return "MEETUP";
      case "workshop": return "WORKSHOP";
      case "conference": return "CONFERENCE";
      default: return "EVENT";
    }
  };

  const getInitial = () => {
    return event.title.charAt(0).toUpperCase();
  };

  // Parse date to get formatted parts
  const parseDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return { month, day, year };
  };

  const { month, day, year } = parseDate(event.date);

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0c1222] transition-all duration-300 animate-fade-in hover:border-white/20"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Event Info */}
        <div className="flex-1 p-6 sm:p-8">
          <div className="flex items-start gap-5">
            {/* Icon */}
            <div 
              className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold"
              style={{ 
                background: `linear-gradient(135deg, hsl(${accentColor}), hsl(${accentColor} / 0.6))`,
              }}
            >
              {getInitial()}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Tags */}
              <div className="flex items-center gap-3 mb-3">
                <span 
                  className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider"
                  style={{ 
                    backgroundColor: `hsl(${accentColor})`,
                    color: 'white'
                  }}
                >
                  {getEventTypeLabel(event.eventType)}
                </span>
                <span className="text-white/50 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {event.location}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm sm:text-base line-clamp-2">
                {event.description.overview}
              </p>
            </div>
          </div>
        </div>

        {/* Dashed Separator with Dots */}
        <div className="hidden md:flex flex-col items-center py-6 relative">
          {/* Top dot */}
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20 -mt-3" />
          
          {/* Dashed line */}
          <div className="flex-1 border-l-2 border-dashed border-white/20" />
          
          {/* Middle dot */}
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20 my-2" />
          
          {/* Dashed line */}
          <div className="flex-1 border-l-2 border-dashed border-white/20" />
          
          {/* Bottom dot */}
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20 -mb-3" />
        </div>

        {/* Mobile separator */}
        <div className="md:hidden flex items-center px-6">
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20" />
          <div className="flex-1 border-t-2 border-dashed border-white/20" />
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20" />
        </div>

        {/* Right Section - Date & Register */}
        <div className="w-full md:w-56 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
          {/* Event Date Label */}
          <span className="text-xs font-medium uppercase tracking-widest text-white/40 mb-2">
            Event Date
          </span>

          {/* Date */}
          <div className="mb-1">
            <span className="text-3xl sm:text-4xl font-bold text-white">
              {month} {day}
            </span>
          </div>
          <span className="text-white/50 text-sm mb-5">
            {year}
          </span>

          {/* Register Button */}
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3 rounded-lg border-2 border-white/80 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-[#0c1222] transition-all duration-300"
          >
            Register Now
          </a>

          {/* Barcode decoration */}
          <div className="flex items-end justify-center gap-[2px] mt-5 h-8 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="w-[2px] bg-white"
                style={{ height: `${12 + Math.random() * 16}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
