import { useState } from "react";
import { MapPin, X } from "lucide-react";
import pawGrab from "@/assets/paw-grab.png";
import { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
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
    e.stopPropagation();
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
      className={`group relative animate-fade-in ${isGrabbing ? 'animate-card-grab' : ''}`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        perspective: '1000px',
      }}
    >
      {/* Paw grab overlay */}
      {isGrabbing && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <img src={pawGrab} alt="" className="w-24 h-24 animate-hand-grab" />
        </div>
      )}

      <div 
        className="relative w-full transition-transform duration-500 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of Card */}
        <div 
          className="ticket-card relative overflow-hidden border border-white/[0.08] bg-[#0c1321] shadow-xl hover:border-white/12 transition-all duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="flex-1 px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex items-center gap-3 mb-3">
                {/* Modern minimal badge */}
                <span 
                  className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider"
                  style={{ 
                    backgroundColor: `hsl(${accentColor})`,
                    color: 'white'
                  }}
                >
                  {getEventTypeLabel(event.eventType)}
                </span>
                <span className="text-white/35 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {event.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight">{event.title}</h3>
              <p className="text-sm italic text-white/40 mb-3">
                "{event.subtitle}"
              </p>

              <button
                onClick={() => setIsFlipped(true)}
                className="text-white/30 text-sm hover:text-white/60 transition-colors"
              >
                Learn more →
              </button>
            </div>

            {/* Separator with notches */}
            <div className="hidden md:flex flex-col items-center relative">
              {/* Top notch */}
              <div className="w-5 h-5 rounded-full bg-background -mt-2.5 border-b border-white/[0.08]" />
              <div className="flex-1 border-l border-dashed border-white/10 mx-auto" />
              {/* Bottom notch */}
              <div className="w-5 h-5 rounded-full bg-background -mb-2.5 border-t border-white/[0.08]" />
            </div>

            <div className="md:hidden flex items-center px-6">
              <div className="w-4 h-4 rounded-full bg-background border border-white/[0.08]" />
              <div className="flex-1 border-t border-dashed border-white/10" />
              <div className="w-4 h-4 rounded-full bg-background border border-white/[0.08]" />
            </div>

            {/* Right Section */}
            <div className="relative w-full md:w-48 px-6 py-5 sm:py-6 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/25 mb-1.5">
                Event Date
              </span>
              <span className="text-3xl font-black text-white tracking-tight">{month} {day}</span>
              <span className="text-white/25 text-xs mb-4">{year}</span>

              <button
                onClick={handleRegisterClick}
                className="w-full py-2.5 rounded-full bg-white text-[#0c1321] font-semibold text-xs tracking-wide hover:bg-white/90 transition-all duration-200 cursor-pointer"
              >
                Register Now
              </button>

              <div className="flex items-end justify-center gap-[1.5px] mt-4 h-5 opacity-15">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-[1px] bg-white rounded-full" style={{ height: `${8 + (i % 3) * 5}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="ticket-card absolute inset-0 overflow-hidden border border-white/[0.08] bg-[#0c1321] shadow-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="relative h-full px-6 py-5 sm:px-8 sm:py-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white tracking-tight">{event.title}</h3>
              <button
                onClick={() => setIsFlipped(false)}
                className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              {event.description.overview}
            </p>

            {/* Footer */}
            <div className="pt-3 border-t border-white/[0.05] text-white/25 text-xs">
              {event.location} • {month} {day}, {year}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ticket-card {
          border-radius: 16px;
        }
        @keyframes card-grab {
          0% { transform: translateX(0) rotate(0deg); opacity: 1; }
          30% { transform: translateX(10px) rotate(-2deg); opacity: 1; }
          100% { transform: translateX(120%) rotate(-10deg); opacity: 0; }
        }
        @keyframes hand-grab {
          0% { transform: translateX(-150px) rotate(0deg) scale(0.8); opacity: 0; }
          25% { transform: translateX(0) rotate(10deg) scale(1); opacity: 1; }
          45% { transform: translateX(0) rotate(-5deg) scale(1.1); opacity: 1; }
          100% { transform: translateX(120%) rotate(-10deg) scale(1); opacity: 0; }
        }
        .animate-card-grab { animation: card-grab 0.8s ease-in-out forwards; }
        .animate-hand-grab { animation: hand-grab 0.8s ease-in-out forwards; }
      `}</style>
    </div>
  );
};
