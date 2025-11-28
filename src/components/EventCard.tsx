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
  const capacity = capacityMatch ? capacityMatch[1] : "60";

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
          <div className="flex items-start justify-between mb-8">
            {/* Event Code Badge */}
            <div className="px-3 py-1.5 rounded border border-white/20 font-mono text-xs tracking-wider">
              {event.partner?.name.toUpperCase().replace(/\s/g, '_')}_2026
            </div>
            
            {/* Crosshair Icon */}
            <Target className="w-6 h-6 text-white/60" strokeWidth={1.5} />
          </div>

          {/* Title Section */}
          <div className="mb-12">
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
        <div className="w-full md:w-64 bg-white text-black p-6 flex flex-col items-center justify-between rounded-b-lg md:rounded-r-lg md:rounded-bl-none border-l-2 border-dashed border-gray-300">
          {/* Top */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold uppercase tracking-wider">Admit One</span>
              <div className="w-3 h-3 rounded-full bg-black" />
            </div>

            {/* Capacity Number */}
            <div className="text-center mb-4">
              <div className="text-7xl sm:text-8xl font-black leading-none">
                {capacity}
              </div>
              <div className="border-t-2 border-black mt-4 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest">Capacity Limit</span>
              </div>
            </div>
          </div>

          {/* Bottom - Barcode & Details */}
          <div className="w-full">
            <div className="flex justify-center gap-1 mb-3">
              {[2, 2, 2, 4, 2, 4, 2, 2, 2, 4].map((height, i) => (
                <div 
                  key={i} 
                  className="bg-black"
                  style={{ width: '3px', height: `${height * 3}px` }}
                />
              ))}
            </div>
            <p className="text-[10px] font-mono text-center text-gray-500 uppercase tracking-wider">
              Non-transferable • ID req
            </p>
          </div>
        </div>
      </div>

      {/* Expandable Details Section */}
      <div className="bg-card border-t border-border/40 p-6">
        {/* Partner Badge */}
        {event.partner && (
          <div className="text-center mb-4 pb-3 border-b border-border/40">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              In collaboration with{" "}
            </span>
            <span 
              className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-1 rounded border"
              style={{
                color: `hsl(${accentColor})`,
                borderColor: `hsla(${accentColor} / 0.5)`,
              }}
            >
              {event.partner.name}
            </span>
          </div>
        )}

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="mb-4">
          <AccordionItem value="overview" className="border-b border-border/40">
            <AccordionTrigger className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wide hover:no-underline py-3">
              Overview
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm font-mono text-muted-foreground pb-3">
              {event.description.overview}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="what-to-expect" className="border-b border-border/40">
            <AccordionTrigger className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wide hover:no-underline py-3">
              Prizes & Opportunities
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm font-mono text-muted-foreground pb-3">
              <ul className="space-y-2">
                {event.description.whatToExpect.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span style={{ color: `hsl(${accentColor})` }} className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="who-can-join" className="border-b-0">
            <AccordionTrigger className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wide hover:no-underline py-3">
              Who Can Join
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm font-mono text-muted-foreground pb-3">
              {event.description.whoCanJoin}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Urgency Line */}
        <div className="mb-3 text-center">
          <p className="text-xs sm:text-sm font-mono text-foreground">
            <span className="font-bold" style={{ color: `hsl(${accentColor})` }}>
              {capacity} spots
            </span> — applications open now
          </p>
        </div>

        {/* CTA Button */}
        {event.registrationUrl ? (
          <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
            <Button 
              className="w-full group/btn font-mono font-bold uppercase text-xs tracking-wider min-h-[44px] relative overflow-hidden transition-all duration-300"
              style={{
                boxShadow: `0 0 0 hsla(${accentColor} / 0)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px hsla(${accentColor} / 0.5)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 hsla(${accentColor} / 0)`;
              }}
            >
              <span className="relative z-10">Register Now</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
              <div 
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, hsl(${accentColor}) 0%, hsla(${accentColor} / 0.8) 100%)`,
                }}
              />
            </Button>
          </a>
        ) : (
          <Link to="/partner">
            <Button 
              className="w-full group/btn font-mono font-bold uppercase text-xs tracking-wider min-h-[44px] relative overflow-hidden transition-all duration-300"
              style={{
                boxShadow: `0 0 0 hsla(${accentColor} / 0)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px hsla(${accentColor} / 0.5)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 hsla(${accentColor} / 0)`;
              }}
            >
              <span className="relative z-10">Register Now</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
              <div 
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, hsl(${accentColor}) 0%, hsla(${accentColor} / 0.8) 100%)`,
                }}
              />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
