import { useState } from "react";
import { MapPin, RotateCcw } from "lucide-react";
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
          className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c1222] hover:border-white/20 transition-all duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="flex-1 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span 
                  className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: `hsl(${accentColor})`, color: 'white' }}
                >
                  {getEventTypeLabel(event.eventType)}
                </span>
                <span className="text-white/50 text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {event.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
              <p className="text-base italic mb-3" style={{ color: `hsl(${accentColor})` }}>
                "{event.subtitle}"
              </p>

              <button
                onClick={() => setIsFlipped(true)}
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                Learn more →
              </button>
            </div>

            {/* Separator */}
            <div className="hidden md:flex flex-col items-center py-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0c1222] border-2 border-white/20" />
              <div className="flex-1 border-l-2 border-dashed border-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#0c1222] border-2 border-white/20" />
            </div>

            <div className="md:hidden flex items-center px-6">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0c1222] border-2 border-white/20" />
              <div className="flex-1 border-t-2 border-dashed border-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#0c1222] border-2 border-white/20" />
            </div>

            {/* Right Section */}
            <div className="relative w-full md:w-52 p-6 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2">
                Event Date
              </span>
              <span className="text-3xl font-black text-white mb-0.5">{month} {day}</span>
              <span className="text-white/40 text-xs mb-4">{year}</span>

              <button
                onClick={handleRegisterClick}
                className="w-full py-2.5 rounded-lg border-2 border-white text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#0c1222] transition-all cursor-pointer"
              >
                Register Now
              </button>

              <div className="flex items-end justify-center gap-[2px] mt-4 h-6 opacity-20">
                {[...Array(18)].map((_, i) => (
                  <div key={i} className="w-[1.5px] bg-white" style={{ height: `${10 + (i % 3) * 6}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-[#0c1222]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full p-6 sm:p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{event.title}</h3>
              <button
                onClick={() => setIsFlipped(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed flex-1">
              {event.description.overview}
            </p>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10 text-white/40 text-xs">
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
