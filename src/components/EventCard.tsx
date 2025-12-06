import { useState } from "react";
import { Target, ArrowRight } from "lucide-react";
import { Event } from "@/data/events";
import pixelHand from "@/assets/pixel-hand.png";

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const accentColor = event.partner?.accentColor || "280 65% 60%";
  
  const capacityMatch = event.participants.match(/(\d+)/);
  const capacity = capacityMatch ? capacityMatch[1] : "∞";

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "hackathon": return "Hackathon";
      case "meetup": return "Meetup";
      case "workshop": return "Workshop";
      case "conference": return "Conference";
      default: return "Event";
    }
  };

  const handleTicketGrab = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsGrabbing(true);
    
    // Navigate after animation completes
    setTimeout(() => {
      if (event.registrationUrl) {
        window.open(event.registrationUrl, '_blank');
      }
      setIsGrabbing(false);
    }, 800);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg transition-all duration-300 animate-fade-in hover:-translate-y-2"
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Dark Background */}
        <div 
          className="relative flex-1 p-6 sm:p-8 md:p-10 bg-[#0f1729] text-white overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        >
          {/* Top Section */}
          <div className="flex items-start justify-end mb-8">
            <Target className="w-6 h-6 text-white/60" strokeWidth={1.5} />
          </div>

          {/* Title Section */}
          <div className="mb-12">
            {/* Event Type Tag */}
            <div 
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ 
                backgroundColor: `hsl(${accentColor} / 0.2)`,
                color: `hsl(${accentColor})`
              }}
            >
              {getEventTypeLabel(event.eventType)}
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white uppercase tracking-tight leading-none">
              {event.title}
            </h3>
            <p 
              className="text-lg sm:text-xl font-serif italic"
              style={{ color: `hsl(${accentColor})` }}
            >
              "{event.subtitle}"
            </p>
          </div>

          {/* Bottom Section - Coordinates & Timeline */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">
                Coordinates
              </div>
              <div className="text-base sm:text-lg font-medium">
                {event.location}
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">
                Timeline
              </div>
              <div className="text-base sm:text-lg font-medium">
                {event.date.split(',')[0]}
              </div>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 opacity-10"
            style={{
              background: `radial-gradient(circle at top right, hsl(${accentColor}), transparent 70%)`,
            }}
          />
        </div>

        {/* Right Section - Ticket Stub */}
        <div 
          className={`relative w-full md:w-64 bg-white text-black p-6 flex flex-col items-center justify-between rounded-b-lg md:rounded-r-lg md:rounded-bl-none border-l-2 border-dashed border-gray-300 group-hover:bg-gray-50 transition-all duration-300 ${
            isGrabbing ? 'animate-ticket-grab' : ''
          }`}
        >
          {/* Hand grabbing animation */}
          {isGrabbing && (
            <div className="absolute inset-0 flex items-start justify-center z-20 pointer-events-none pt-4">
              <img 
                src={pixelHand} 
                alt="Grabbing hand" 
                className="w-28 h-28 animate-hand-grab object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          )}
          {/* Top */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider">Sign Up</span>
              <div 
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: `hsl(${accentColor})` }}
              />
            </div>

            {/* Capacity Number */}
            <div className="text-center mb-4">
              <div className="text-5xl sm:text-6xl font-black leading-none" style={{ color: `hsl(${accentColor})` }}>
                {capacity}
              </div>
              <div className="border-t-2 border-black mt-4 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest">
                  {event.participants.includes("Limited") ? "Limited Spots" : "Capacity Limit"}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full">
            <button 
              onClick={handleTicketGrab}
              className="w-full py-3 px-4 rounded-md text-white font-bold text-sm uppercase tracking-wider text-center transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              style={{ backgroundColor: `hsl(${accentColor})` }}
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticket-grab {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          40% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
          }
        }
        
        @keyframes hand-grab {
          0% {
            transform: translateY(-80px) scale(0.8);
            opacity: 0;
          }
          30% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(10px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateY(200px) scale(1);
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
