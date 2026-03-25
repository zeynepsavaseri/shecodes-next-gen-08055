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
    title: "The Future of Health",
    subtitle: "Hack the Future of Healthcare.",
    date: "May 8, 2026",
    location: "ETH Zürich",
    participants: "Limited spots available",
    eventType: "hackathon",
    partner: {
      name: "HerCode",
      logo: "/hercode-logo.png",
      accentColor: "160 60% 45%"
    },
    description: {
      overview: "A public panel and 30-hour innovation sprint uniting leading minds from academia and industry to actively shape the next generation of health technology. Choose from three tracks — Genomics, Pharma, and Clinical — and build solutions to real health challenges.",
      whatToExpect: [
        "Public panel with leading health & tech experts",
        "30-hour hackathon across Genomics, Pharma & Clinical tracks",
        "Non-equity incubation for winning teams"
      ],
      whoCanJoin: "Open to students and professionals passionate about health innovation. All backgrounds welcome.",
      whyJoin: "Turn your ideas into real-world health solutions. Winning teams receive incubation support and continued mentorship."
    },
    registrationUrl: "https://luma.com/y0emjscy"
  },
];

export const pastEvents: Event[] = [
  {
    title: "EY Hackathon",
    subtitle: "Build. Network. Grow.",
    date: "March 21, 2026",
    location: "EY Office, Zürich",
    participants: "60 attendees",
    eventType: "hackathon",
    partner: {
      name: "EY",
      logo: "/EY Logo.png",
      accentColor: "48 96% 53%"
    },
    description: {
      overview: "A day of innovation, collaboration, and real-world problem-solving at EY Zürich. Participants teamed up to tackle an actual EY challenge — guided by experts working at the intersection of business and technology.",
      whatToExpect: [
        "1-year mentorship with EY professionals",
        "Exclusive dinner with EY mentors and team members",
        "Recognition and exposure within the EY innovation network"
      ],
      whoCanJoin: "Open to students of all backgrounds.",
      whyJoin: "Participants learned, built, and connected with a supportive community of women in tech."
    },
    achievements: "Real-world problem-solving with EY professionals",
    registrationUrl: "https://www.ey.com/en_ch/careers/ey-women-hackathon"
  },
  {
    title: "Vibe Coding Morning",
    subtitle: "Build. Connect. Create.",
    date: "March 8, 2026",
    location: "Rämistrasse 59, Zürich",
    participants: "30 attendees",
    eventType: "workshop",
    partner: {
      name: "Lovable",
      logo: "/lovable-logo.png",
      accentColor: "280 65% 60%"
    },
    description: {
      overview: "A Women's Day Coding Morning with Lovable. A hands-on, beginner-friendly session where participants discovered how easy it is to build real products without prior coding experience.",
      whatToExpect: [
        "Hands-on vibe coding session with Lovable",
        "Beginner-friendly — no coding experience needed",
        "Connect with inspiring women in tech"
      ],
      whoCanJoin: "Open to all women — no prior coding experience required.",
      whyJoin: "Celebrated International Women's Day by building something real with AI-powered tools."
    },
    achievements: "Hands-on coding experience in a supportive environment",
    registrationUrl: "https://luma.com/87ehec8x"
  },
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
