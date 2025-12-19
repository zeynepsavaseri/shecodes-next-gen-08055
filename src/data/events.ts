export type EventType = "hackathon" | "meetup" | "workshop" | "conference";

export interface Event {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  participants: string;
  eventType: EventType;
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

export const upcomingEvents: Event[] = [
  {
    title: "EY Hackathon",
    subtitle: "Build. Network. Grow.",
    date: "March 7, 2026",
    location: "EY Office, Zürich",
    participants: "Only 60 spots available",
    eventType: "hackathon",
    partner: {
      name: "EY",
      logo: "/EY Logo.png",
      accentColor: "48 96% 53%" // EY yellow
    },
    description: {
      overview: "Join us at EY Zürich for a day of innovation, collaboration, and real-world problem-solving. You'll team up with driven students to tackle an actual EY challenge — guided by experts working at the intersection of business and technology. This is your chance to get inside one of the world's leading firms, turn ideas into solutions, and make connections that can shape your future.",
      whatToExpect: [
        "1-year mentorship with EY professionals",
        "Exclusive dinner with EY mentors and team members",
        "Recognition and exposure within the EY innovation network"
      ],
      whoCanJoin: "Open to students of all backgrounds : From first-time coders to experienced builders. Curiosity and creativity are all you need.",
      whyJoin: "This is your chance to learn, build, and connect with a supportive community of women in tech. Make meaningful connections and gain real-world experience."
    },
    registrationUrl: "https://www.ey.com/en_ch"
  },
];

export const pastEvents: Event[] = [
  {
    title: "Her Circles",
    subtitle: "A Space for Honest Connection.",
    date: "December 18, 2025",
    location: "Ruby Mimi, Zürich",
    participants: "25 attendees",
    eventType: "meetup",
    partner: {
      name: "HerCode",
      logo: "/hercode-logo.png",
      accentColor: "340 70% 55%"
    },
    description: {
      overview: "An intimate meetup designed for meaningful conversations. Join ambitious women for curated circles and real connection at Ruby Mimi in Zürich.",
      whatToExpect: [
        "Curated conversation circles",
        "Meaningful networking opportunities",
        "A welcoming, cringe-free environment"
      ],
      whoCanJoin: "Women-only event. Open to ambitious women looking for real connections and meaningful conversations.",
      whyJoin: "Skip the awkward small talk and dive into conversations that matter. Connect with like-minded women in a curated, intimate setting."
    },
    achievements: "Meaningful connections made in an intimate setting",
    registrationUrl: "https://lu.ma/lvnhywjv"
  }
];

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
