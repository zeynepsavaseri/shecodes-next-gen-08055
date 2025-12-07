import { useState } from "react";
import { MapPin, ArrowLeft, Sparkles, Users, Heart } from "lucide-react";
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
      className="group relative animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Front of Card */}
      <div 
        className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#0c1222] hover:border-white/20 hover:shadow-xl hover:shadow-black/20 transition-all duration-500 ${
          isFlipped ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'
        }`}
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

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {event.title}
            </h3>
            <p 
              className="text-lg font-medium italic mb-4"
              style={{ color: `hsl(${accentColor})` }}
            >
              "{event.subtitle}"
            </p>

            {/* Learn More Button */}
            <button
              onClick={() => setIsFlipped(true)}
              className="text-white/60 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group/btn"
            >
              <span className="border-b border-white/30 group-hover/btn:border-white/60 transition-colors">
                Learn more
              </span>
              <span className="text-xs">→</span>
            </button>
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

          {/* Right Section - Date & Register */}
          <div 
            className={`relative w-full md:w-60 p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${
              isGrabbing ? 'animate-ticket-grab' : ''
            }`}
          >
            {isGrabbing && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <img src={pawGrab} alt="" className="w-20 h-20 animate-hand-grab" />
              </div>
            )}

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">
              Event Date
            </span>

            <div className="mb-1">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {month} {day}
              </span>
            </div>
            <span className="text-white/40 text-sm font-medium mb-6">
              {year}
            </span>

            <button
              onClick={handleRegisterClick}
              className="w-full px-6 py-3.5 rounded-lg border-2 border-white text-white font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#0c1222] transition-all duration-300 cursor-pointer"
            >
              Register Now
            </button>

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
      </div>

      {/* Back of Card */}
      <div 
        className={`overflow-hidden rounded-xl border border-white/10 bg-[#0c1222] transition-all duration-500 ${
          isFlipped ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none scale-95'
        }`}
      >
        {/* Decorative gradient background */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, hsl(${accentColor}), transparent 70%)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-48 h-48 opacity-10 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, hsl(${accentColor}), transparent 70%)` }}
        />

        <div className="relative p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setIsFlipped(false)}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group/back"
            >
              <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back</span>
            </button>
            
            <span 
              className="px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider"
              style={{ 
                backgroundColor: `hsl(${accentColor} / 0.2)`,
                color: `hsl(${accentColor})`
              }}
            >
              {getEventTypeLabel(event.eventType)}
            </span>
          </div>

          {/* Title with sparkle */}
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5" style={{ color: `hsl(${accentColor})` }} />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {event.title}
            </h3>
          </div>
          
          <p 
            className="text-base font-medium italic mb-6 pl-8"
            style={{ color: `hsl(${accentColor})` }}
          >
            "{event.subtitle}"
          </p>

          {/* Overview Card */}
          <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              {event.description.overview}
            </p>
          </div>

          {/* What to Expect */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-4 h-4" style={{ color: `hsl(${accentColor})` }} />
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/70">
                What to Expect
              </h4>
            </div>
            <div className="grid gap-3">
              {event.description.whatToExpect.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-white/5"
                >
                  <span 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ 
                      backgroundColor: `hsl(${accentColor} / 0.2)`,
                      color: `hsl(${accentColor})`
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Join */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4" style={{ color: `hsl(${accentColor})` }} />
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/70">
                Who Can Join
              </h4>
            </div>
            <p className="text-white/60 text-sm leading-relaxed pl-6">
              {event.description.whoCanJoin}
            </p>
          </div>

          {/* Footer with CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
              <span className="text-white/30">•</span>
              <span>{month} {day}, {year}</span>
            </div>
            
            <button
              onClick={handleRegisterClick}
              className="px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer text-white hover:scale-105 hover:shadow-lg"
              style={{ 
                backgroundColor: `hsl(${accentColor})`,
                boxShadow: `0 4px 20px hsl(${accentColor} / 0.3)`
              }}
            >
              Register Now ✨
            </button>
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
