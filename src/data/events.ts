export interface Event {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  participants: string;
  description: string;
  achievements?: string;
}

export const upcomingEvents: Event[] = [
  {
    title: "EY Hackathon",
    subtitle: "Build. Network. Win.",
    date: "February 28, 2026",
    location: "EY Office, Zürich",
    participants: "Only 60 spots available",
    description: "This isn't just a hackathon; it's a launchpad. Join us for an inspiring day at the EY office in Zürich, where you'll collaborate in teams to build a tech solution for a real-world challenge.\n\nWhat to expect:\n\n• Hands-on mentorship from EY experts and tech leaders\n• Network with recruiters and professionals from top companies\n• Prizes, food, and an amazing community of builders\n\nWhether you're a beginner or an experienced coder, this is your chance to learn, build, and connect. All skill levels are welcome!",
  },
];

export const pastEvents: Event[] = [];

export const getNextEvent = (): Event | null => {
  if (upcomingEvents.length === 0) return null;
  
  const now = new Date();
  const futureEvents = upcomingEvents
    .map(event => ({
      ...event,
      dateObj: new Date(event.date)
    }))
    .filter(event => event.dateObj >= now)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
  
  return futureEvents.length > 0 ? futureEvents[0] : upcomingEvents[0];
};
