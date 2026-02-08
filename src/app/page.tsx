'use client';

import { Header } from '@/src/components/header';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ClientsSection,
  ProjectsSection,
  ContactSection,
} from '@/src/sections';
import { Footer } from '@/src/components/footer';
import { BackToTopButton } from '@/src/components/back-to-top-button';
import { useReveal } from '@/src/hooks/use-reveal';

export default function Home() {
  useReveal();
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BackToTopButton threshold={300} />
    </main>
  );
}
