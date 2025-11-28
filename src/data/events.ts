export interface Event {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  participants: string;
  partner?: {
    name: string;
    logo: string;
    accentColor: string; // HSL color for gradient
  };
  description: {
    overview: string;
    whatToExpect: string[];
    whoCanJoin: string;
    whyJoin: string;
  };
  achievements?: string;
  registrationUrl?: string;
}

export const upcomingEvents: Event[] = [];

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
