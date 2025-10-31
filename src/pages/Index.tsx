import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { FloatingGeometry } from "@/components/FloatingGeometry";
import { ScanLines } from "@/components/ScanLines";
import { TechGrid } from "@/components/TechGrid";
import { FloatingIcons } from "@/components/FloatingIcons";
import { HexagonPattern } from "@/components/HexagonPattern";
import { DataStream } from "@/components/DataStream";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <FloatingGeometry />
      <HexagonPattern />
      <TechGrid />
      <FloatingIcons />
      <DataStream />
      <ScanLines />
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
