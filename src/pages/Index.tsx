import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Header />
      <HeroSection />
      <section id="mission"><MissionSection /></section>
      <section id="events"><EventsSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="sponsors"><SponsorsSection /></section>
      <section id="cta"><CTASection /></section>
      <Footer />
    </main>
  );
};

export default Index;
