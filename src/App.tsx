import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { DocumentsSection } from './components/DocumentsSection';
import { PresentationsSection } from './components/PresentationsSection';
import { MilestonesSection } from './components/MilestonesSection';
import { GallerySection } from './components/GallerySection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-[#0d1117] text-gray-200 min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <TechnologiesSection />
      <DocumentsSection />
      <PresentationsSection />
      <MilestonesSection />
      <GallerySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>;
}