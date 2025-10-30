import { Calendar, MapPin, Users, ArrowRight, Code, Cpu } from "lucide-react";
import { Button } from "./ui/button";

const upcomingEvents = [
  {
    title: "EY Hackathon",
    date: "February 28, 2026",
    location: "EY Office, Zürich",
    participants: "60 participants",
    description: "Join us for an exciting hackathon at the EY office in Zürich",
  },
];

const pastEvents: any[] = [];

export const EventsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12 scanline">
            <div className="inline-flex items-center gap-2 mb-4 text-primary">
              <Cpu className="w-6 h-6 animate-pulse-glow" />
              <span className="terminal-text text-sm tracking-wider">UPCOMING_EVENTS.init()</span>
              <Code className="w-6 h-6 animate-pulse-glow" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us at our next events and be part of the change
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border-2 border-primary/20 p-8 hover:border-primary/50 hover:shadow-pixel-lg transition-all hover:-translate-y-1 animate-fade-in relative overflow-hidden scanline"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
                <h3 className="text-2xl font-bold mb-4 text-foreground terminal-text">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                <p className="text-foreground mb-6">{event.description}</p>
                <Button className="w-full group shadow-pixel hover:shadow-pixel-lg terminal-text">
                  <Code className="mr-2 w-4 h-4" />
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-secondary bg-clip-text text-transparent">
              Past Events
            </h3>
            <p className="text-sm text-muted-foreground">
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
