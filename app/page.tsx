'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientMarquee from '@/components/ClientMarquee';
import StatsCounter from '@/components/StatsCounter';
import ServicesExplorer from '@/components/ServicesExplorer';
import FacilityCalculator from '@/components/FacilityCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import OperationalGallery from '@/components/OperationalGallery';
import Testimonials from '@/components/Testimonials';
import CareersSection from '@/components/CareersSection';
import ContactQuoteModal from '@/components/ContactQuoteModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialNote, setQuoteInitialNote] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (note?: string) => {
    setQuoteInitialNote(note);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteInitialNote(undefined);
  };

  return (
    <main className="min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white relative">
      {/* Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Client Logo Marquee */}
      <ClientMarquee />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Services Explorer with Filters & Detail Drawers */}
      <ServicesExplorer onOpenQuoteModal={(serviceName) => handleOpenQuoteModal(`Inquiry regarding ${serviceName}`)} />

      {/* Interactive Manpower & ROI Facility Calculator */}
      <FacilityCalculator onOpenQuoteModal={(calcSummary) => handleOpenQuoteModal(calcSummary)} />

      {/* Why Choose Us & Staff Welfare */}
      <WhyChooseUs />

      {/* Operational Gallery */}
      <OperationalGallery />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Careers & Recruitment */}
      <CareersSection />

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Multi-step Quote Request Modal */}
      <ContactQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialNote={quoteInitialNote}
      />
    </main>
  );
}
