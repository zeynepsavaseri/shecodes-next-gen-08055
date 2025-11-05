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
      <section id="mission" className="animate-fade-in" style={{ animationDelay: "0.1s" }}><MissionSection /></section>
      <section id="events" className="animate-fade-in" style={{ animationDelay: "0.2s" }}><EventsSection /></section>
      <section id="testimonials" className="animate-fade-in" style={{ animationDelay: "0.3s" }}><TestimonialsSection /></section>
      <section id="sponsors" className="animate-fade-in" style={{ animationDelay: "0.4s" }}><SponsorsSection /></section>
      <section id="cta" className="animate-fade-in" style={{ animationDelay: "0.5s" }}><CTASection /></section>
      <Footer />
    </main>
  );
};

export default Index;
