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
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0d1424] to-[#0a0f1a] shadow-2xl shadow-black/40 hover:border-white/15 hover:shadow-black/50 transition-all duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="relative flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="flex-1 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                {/* Glassy badge */}
                <span 
                  className="px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(${accentColor} / 0.9), hsl(${accentColor} / 0.7))`,
                    boxShadow: `0 4px 15px hsl(${accentColor} / 0.3), inset 0 1px 0 rgba(255,255,255,0.2)`,
                    color: 'white'
                  }}
                >
                  {getEventTypeLabel(event.eventType)}
                </span>
                <span className="text-white/40 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {event.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-[1.7rem] font-bold text-white mb-2 tracking-tight">{event.title}</h3>
              <p className="text-base italic text-white/50 mb-4" style={{ color: `hsl(${accentColor} / 0.8)` }}>
                "{event.subtitle}"
              </p>

              <button
                onClick={() => setIsFlipped(true)}
                className="text-white/40 text-sm hover:text-white/70 transition-colors"
              >
                Learn more →
              </button>
            </div>

            {/* Separator */}
            <div className="hidden md:flex flex-col items-center py-6">
              <div className="w-3 h-3 rounded-full bg-[#0a0f1a] border border-white/10 shadow-inner" />
              <div className="flex-1 border-l border-dashed border-white/10" />
              <div className="w-3 h-3 rounded-full bg-[#0a0f1a] border border-white/10 shadow-inner" />
            </div>

            <div className="md:hidden flex items-center px-6">
              <div className="w-3 h-3 rounded-full bg-[#0a0f1a] border border-white/10" />
              <div className="flex-1 border-t border-dashed border-white/10" />
              <div className="w-3 h-3 rounded-full bg-[#0a0f1a] border border-white/10" />
            </div>

            {/* Right Section */}
            <div className="relative w-full md:w-56 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 mb-2">
                Event Date
              </span>
              <span className="text-4xl font-black text-white tracking-tight mb-0.5">{month} {day}</span>
              <span className="text-white/30 text-sm mb-5">{year}</span>

              <button
                onClick={handleRegisterClick}
                className="w-full py-3 rounded-xl bg-white/[0.03] border border-white/20 text-white font-semibold text-sm tracking-wide hover:bg-white hover:text-[#0a0f1a] transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                Register Now
              </button>

              <div className="flex items-end justify-center gap-[2px] mt-5 h-7 opacity-15">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-[1.5px] bg-white rounded-full" style={{ height: `${12 + (i % 3) * 5}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0d1424] to-[#0a0f1a] shadow-2xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="relative h-full p-6 sm:p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white tracking-tight">{event.title}</h3>
              <button
                onClick={() => setIsFlipped(false)}
                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed flex-1">
              {event.description.overview}
            </p>

            {/* Footer */}
            <div className="pt-4 border-t border-white/[0.06] text-white/30 text-xs">
              {event.location} • {month} {day}, {year}
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
