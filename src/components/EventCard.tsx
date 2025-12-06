import { Calendar, MapPin, Users, ArrowRight, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Event } from "@/data/events";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => {
  const accentColor = event.partner?.accentColor || "280 65% 60%"; // default purple
  
  // Extract capacity number from participants string
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

  return (
    <a
      href={event.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-lg transition-all duration-300 animate-fade-in hover:-translate-y-2 cursor-pointer"
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
            {/* Crosshair Icon */}
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
        <div className="w-full md:w-64 bg-white text-black p-6 flex flex-col items-center justify-between rounded-b-lg md:rounded-r-lg md:rounded-bl-none border-l-2 border-dashed border-gray-300 group-hover:bg-gray-50 transition-colors">
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
          <div className="w-full space-y-3">
            <div 
              className="w-full py-3 px-4 rounded-md text-white font-bold text-sm uppercase tracking-wider text-center transition-all group-hover:scale-105 group-hover:shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: `hsl(${accentColor})` }}
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <p className="text-[10px] font-mono text-center text-gray-500 uppercase tracking-wider">
              Click anywhere to sign up
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
