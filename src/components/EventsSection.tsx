import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { upcomingEvents, pastEvents } from "@/data/events";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const EventsSection = () => {

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Upcoming Events */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              Upcoming Events
            </h2>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground max-w-2xl mx-auto">
              Join us at our next events and be part of the change
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card p-5 sm:p-6 md:p-8 hover:shadow-pixel transition-all hover:-translate-y-1 animate-fade-in shadow-pixel-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold mb-2 text-foreground uppercase tracking-wide">{event.title}</h3>
                <p className="text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-5">{event.subtitle}</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm font-mono text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                
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
                            <span className="text-primary mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button className="flex-1 group font-mono font-bold uppercase text-[10px] sm:text-xs tracking-wider min-h-[44px]">
                    Register Now
                    <ArrowRight className="ml-1 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <div className="text-center mb-6 sm:mb-8 px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-pixel mb-2 bg-gradient-secondary bg-clip-text text-transparent uppercase" style={{ letterSpacing: '0.1em' }}>
              Past Events
            </h3>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground">
              More events coming soon
            </p>
          </div>

          {pastEvents.length === 0 ? (
            <div className="text-center text-muted-foreground">
              <p>No past events yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-card p-6 border-l-4 border-primary animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{event.date}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-foreground">{event.participants}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.achievements}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
