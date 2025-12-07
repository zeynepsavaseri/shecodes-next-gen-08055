import { useState } from "react";
import { MapPin } from "lucide-react";
import pawGrab from "@/assets/paw-grab.png";
import { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);
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

  // Parse date to get formatted parts
  const parseDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return { month, day, year };
  };

  const { month, day, year } = parseDate(event.date);

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsGrabbing(true);
    
    setTimeout(() => {
      if (event.registrationUrl) {
        window.open(event.registrationUrl, '_blank');
      }
      setIsGrabbing(false);
    }, 800);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0c1222] transition-all duration-300 animate-fade-in hover:border-white/20 hover:shadow-xl hover:shadow-black/20"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Event Info */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10">
          {/* Tags */}
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider"
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
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl">
            {event.description.overview}
          </p>
        </div>

        {/* Dashed Separator with Dots */}
        <div className="hidden md:flex flex-col items-center py-6 relative">
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20 -mt-3" />
          <div className="flex-1 border-l-2 border-dashed border-white/20" />
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20 my-2" />
          <div className="flex-1 border-l-2 border-dashed border-white/20" />
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20 -mb-3" />
        </div>

        {/* Mobile separator */}
        <div className="md:hidden flex items-center px-6">
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20" />
          <div className="flex-1 border-t-2 border-dashed border-white/20" />
          <div className="w-3 h-3 rounded-full bg-[#0c1222] border-2 border-white/20" />
        </div>

        {/* Right Section - Date & Register (Ticket Stub) */}
        <div 
          className={`relative w-full md:w-60 p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${
            isGrabbing ? 'animate-ticket-grab' : ''
          }`}
        >
          {/* Hand grabbing animation */}
          {isGrabbing && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <img src={pawGrab} alt="" className="w-20 h-20 animate-hand-grab" />
            </div>
          )}

          {/* Event Date Label */}
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">
            Event Date
          </span>

          {/* Date */}
          <div className="mb-1">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {month} {day}
            </span>
          </div>
          <span className="text-white/40 text-sm font-medium mb-6">
            {year}
          </span>

          {/* Register Button */}
          <button
            onClick={handleRegisterClick}
            className="w-full px-6 py-3.5 rounded-lg border-2 border-white text-white font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#0c1222] transition-all duration-300 cursor-pointer"
          >
            Register Now
          </button>

          {/* Barcode decoration */}
          <div className="flex items-end justify-center gap-[2px] mt-6 h-10 opacity-25">
            {[...Array(24)].map((_, i) => (
              <div 
                key={i} 
                className="w-[2px] bg-white rounded-full"
                style={{ height: `${14 + (i % 3) * 8 + Math.sin(i) * 4}px` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticket-grab {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateX(20px) rotate(-5deg);
            opacity: 1;
          }
          100% {
            transform: translateX(150%) rotate(-15deg);
            opacity: 0;
          }
        }
        
        @keyframes hand-grab {
          0% {
            transform: translateX(-100px) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          30% {
            transform: translateX(0) rotate(10deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(0) rotate(-5deg) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateX(150px) rotate(-15deg) scale(1);
            opacity: 0;
          }
        }
        
        .animate-ticket-grab {
          animation: ticket-grab 0.8s ease-in-out forwards;
        }
        
        .animate-hand-grab {
          animation: hand-grab 0.8s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};
