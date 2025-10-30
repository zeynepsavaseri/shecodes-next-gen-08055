export interface Event {
  title: string;
  date: string;
  location: string;
  participants: string;
  description: string;
  achievements?: string;
}

export const upcomingEvents: Event[] = [
  {
    title: "EY Hackathon",
    date: "February 28, 2026",
    location: "EY Office, Zürich",
    participants: "60 participants",
    description: "Join us for an exciting hackathon at the EY office in Zürich",
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
