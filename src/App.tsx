import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ProcessSection } from './components/ProcessSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { VideoGuideModal } from './components/VideoGuideModal';
import { WholesaleInquiryModal } from './components/WholesaleInquiryModal';
import { Product } from './types';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryDefaultProduct, setInquiryDefaultProduct] = useState<string>('Mixed Harvest');
  const [videoGuideOpen, setVideoGuideOpen] = useState(false);

  const handleOpenInquiry = (productName?: string) => {
    if (productName) {
      setInquiryDefaultProduct(productName);
    }
    setInquiryModalOpen(true);
  };

  const handleScrollToContact = (productName?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenInquiry(productName);
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-[#1E3A8A] selection:text-white transition-colors duration-300">
          {/* Navigation Bar */}
          <Navbar
            onOpenInquiry={handleOpenInquiry}
            onOpenVideoGuide={() => setVideoGuideOpen(true)}
          />

          {/* Main Sections */}
          <main className="flex-grow">
            {/* 1. Hero Section */}
            <HeroSection
              onOpenInquiry={() => handleOpenInquiry()}
              onOpenVideoGuide={() => setVideoGuideOpen(true)}
            />

            {/* 2. About Section */}
            <AboutSection />

            {/* 3. Our Products Section */}
            <ProductsSection
              onSelectProduct={(product) => setSelectedProductForModal(product)}
              onQuickInquiry={(productName) => handleOpenInquiry(productName)}
            />

            {/* 4. Our Process Section */}
            <ProcessSection />

            {/* 5. Sustainability & Certifications Section */}
            <SustainabilitySection />

            {/* 6. Photo & Video Stills Gallery */}
            <GallerySection onOpenVideoGuide={() => setVideoGuideOpen(true)} />

            {/* 7. Contact & Wholesale Inquiry Section */}
            <ContactSection preselectedProduct={inquiryDefaultProduct} />
          </main>

          {/* 8. Footer */}
          <Footer />

          {/* Interactive Overlays */}
          <ProductModal
            product={selectedProductForModal}
            onClose={() => setSelectedProductForModal(null)}
            onOrderInquiry={(productName) => handleOpenInquiry(productName)}
          />
          <VideoGuideModal
            isOpen={videoGuideOpen}
            onClose={() => setVideoGuideOpen(false)}
          />
          <WholesaleInquiryModal
            isOpen={inquiryModalOpen}
            onClose={() => setInquiryModalOpen(false)}
            defaultProduct={inquiryDefaultProduct}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
