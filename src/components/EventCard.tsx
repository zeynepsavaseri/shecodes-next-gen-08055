import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
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

  return (
    <div
      className="group bg-card rounded-lg shadow-card p-5 sm:p-6 md:p-8 transition-all duration-300 animate-fade-in shadow-pixel-sm hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden"
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Hover glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, hsla(${accentColor} / 0.15), transparent 70%)`,
          boxShadow: `0 0 40px hsla(${accentColor} / 0.3)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Partner Badge */}
        {event.partner && (
          <div className="flex items-center justify-center gap-2 mb-4 pb-3 border-b border-border/40">
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-wider">
              In collaboration with
            </span>
            <div 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105"
              style={{
                borderColor: `hsla(${accentColor} / 0.3)`,
              }}
            >
              <img src={event.partner.logo} alt={event.partner.name} className="h-4 sm:h-5 w-auto object-contain" />
            </div>
          </div>
        )}

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold mb-2 text-foreground uppercase tracking-wide transition-colors duration-300">
          {event.title}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-5">
          {event.subtitle}
        </p>

        {/* Event Info */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm font-mono text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: `hsl(${accentColor})` }} />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: `hsl(${accentColor})` }} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 flex-shrink-0" style={{ color: `hsl(${accentColor})` }} />
            <span>{event.participants}</span>
          </div>
        </div>

        {/* Accordion Sections */}
        <Accordion type="single" collapsible className="mb-4 sm:mb-6">
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
              What to Expect
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
          
          <AccordionItem value="who-can-join" className="border-b border-border/40">
            <AccordionTrigger className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wide hover:no-underline py-3">
              Who Can Join
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm font-mono text-muted-foreground pb-3">
              {event.description.whoCanJoin}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="why-join" className="border-b-0">
            <AccordionTrigger className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wide hover:no-underline py-3">
              Why Join
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm font-mono text-muted-foreground pb-3">
              {event.description.whyJoin}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Urgency Line */}
        <div className="mb-3 text-center">
          <p className="text-xs sm:text-sm font-mono text-foreground">
            <span className="font-bold" style={{ color: `hsl(${accentColor})` }}>
              {event.participants.split(' ')[1]} spots
            </span> — applications open now
          </p>
        </div>

        {/* CTA Button */}
        {event.registrationUrl ? (
          <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
            <Button 
              className="w-full group/btn font-mono font-bold uppercase text-[10px] sm:text-xs tracking-wider min-h-[44px] relative overflow-hidden transition-all duration-300"
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
              <ArrowRight className="ml-1 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
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
              className="w-full group/btn font-mono font-bold uppercase text-[10px] sm:text-xs tracking-wider min-h-[44px] relative overflow-hidden transition-all duration-300"
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
              <ArrowRight className="ml-1 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
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
