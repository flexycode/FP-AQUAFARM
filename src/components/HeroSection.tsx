import React, { useRef, useEffect, useState } from 'react';
import { FPLogo } from './brand/FPLogo';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { FARM_STATS } from '../data/farmData';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onOpenVideoGuide?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Ensure video autoplays smoothly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policies may catch unmuted video autoplay without interaction
        });
      }
    }
  }, [isMuted]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A192F] text-white"
    >
      {/* Background Video Layer with Fallback & Seamless Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.12]"
          poster="/images/farm-hero-poster.jpg"
        >
          <source src="/videos/farm-hero.mp4" type="video/mp4" />
        </video>

        {/* Golden Hour / Deep Coastal Oceanic Gradient Overlay for Geometric Balance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E48]/90 via-[#0F285C]/75 to-[#0A192F]/95"></div>

        {/* Golden Hour Warm Ambient Accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-teal-500/10 pointer-events-none"></div>

        {/* Geometric Grid Texture Accent */}
        <div className="absolute inset-0 opacity-15 geometric-grid-dark pointer-events-none"></div>
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-30 p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-colors text-white shadow-xl cursor-pointer"
        aria-label="Toggle sound"
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-teal-400" />}
      </button>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <span className="text-teal-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block mt-8">
          {t('hero.tagline')}
        </span>

        {/* Wordmark & Main Tagline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-outfit uppercase max-w-4xl leading-[1.05] mb-8">
          {t('hero.title').split('. ').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}{i < arr.length - 1 ? '.' : ''}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        {/* Brand Circular Logo Emblem Overlay */}
        <div
          className="relative mb-7 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 650, behavior: 'smooth' })}
        >
          <div className="relative bg-white rounded-full p-2 sm:p-3 shadow-2xl border-2 border-blue-900 ring-4 ring-white/20 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <FPLogo className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40" />
          </div>
          {/* Subtle Geometric Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white text-[9px] sm:text-[10px] font-bold px-3 py-0.5 uppercase tracking-[0.2em] border border-teal-400/40 whitespace-nowrap shadow-sm">
            Est. Coastal Excellence
          </div>
        </div>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl leading-relaxed font-normal">
          {t('hero.desc')}
        </p>

        {/* Hero CTA Buttons with Geometric Precision */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-3.5 transition-colors rounded-sm shadow-sm"
          >
            <span>{t('hero.explore')}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-3.5 border border-white/80 transition-colors rounded-sm cursor-pointer"
          >
            <span>{t('nav.contact')}</span>
          </button>
        </div>

        {/* Trust Badges Strip with Geometric Balance Grid */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {FARM_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm p-4 border border-white/10 text-center hover:bg-white/10 transition-colors rounded-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-outfit">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-blue-200/70 mt-0.5 hidden sm:block">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Geometric Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-[#1E3A8A] to-teal-500"></div>
    </section>
  );
};
