import React, { useState, useEffect } from 'react';
import { FPLogo } from './brand/FPLogo';
import { Menu, X, Phone, Mail, ChevronRight, Sparkles, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onOpenInquiry: (product?: string) => void;
  onOpenVideoGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenVideoGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'products', 'process', 'sustainability', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.products'), href: '#products' },
    { name: t('nav.process'), href: '#process' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Gallery', href: '#gallery' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      {/* Top micro bar for phone / contact info */}
      <div className="bg-[#0B1E48] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-blue-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-medium tracking-wide">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2 text-blue-200 uppercase tracking-wider text-[10px] font-bold">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Live Night Harvest Dispatch Available Daily
            </span>
            <span className="text-blue-400/40">|</span>
            <a
              href="tel:+18005552782"
              className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Farm Hotline: +1 (800) 555-AQUA</span>
            </a>
            <a
              href="mailto:orders@fpaquafarm.com"
              className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>orders@fpaquafarm.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">

            <span className="text-teal-300 font-bold uppercase tracking-widest text-[10px]">GAP & HACCP Certified</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/98 dark:bg-slate-900/98 backdrop-blur-md shadow-sm py-3 border-b border-slate-200 dark:border-slate-800'
            : 'bg-white dark:bg-slate-900 py-4 border-b border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-1 focus:ring-blue-900 rounded p-1"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 relative flex-shrink-0 border-2 border-blue-900 rounded-full p-0.5 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <FPLogo variant="colored" showText={false} className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-widest text-blue-900 dark:text-white font-outfit uppercase leading-tight group-hover:text-blue-800 transition-colors">
                FP AQUAFARM
              </span>
              <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400 tracking-wider uppercase">
                Sustainable Maritime Cultivation
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] font-bold uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`py-2 transition-colors relative ${
                    isActive
                      ? 'text-blue-900 dark:text-teal-400 font-extrabold'
                      : 'text-blue-900/60 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Toggles */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2 text-slate-600 hover:text-blue-900 dark:text-slate-300 dark:hover:text-white flex items-center gap-1 text-[10px] font-bold uppercase transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'EN' : 'TL'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 hover:text-blue-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <a
              href="#products"
              className="text-[11px] font-bold uppercase tracking-widest text-blue-900 dark:text-blue-200 hover:text-blue-800 dark:hover:text-white px-4 py-2.5 border border-slate-200 dark:border-slate-700 hover:border-blue-900 dark:hover:border-blue-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all rounded-sm"
            >
              Our Products
            </a>
            <button
              onClick={() => onOpenInquiry()}
              className="text-[11px] font-bold uppercase tracking-widest text-white bg-teal-600 hover:bg-teal-700 px-5 py-2.5 shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer rounded-sm"
            >
              <span>Wholesale Inquiry</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button & Toggles */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 text-slate-600 dark:text-slate-300 flex items-center gap-1 text-[10px] font-bold uppercase"
            >
              <span>{language === 'en' ? 'EN' : 'TL'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onOpenInquiry()}
              className="text-[10px] font-bold uppercase tracking-wider text-white bg-teal-600 px-3 py-2 rounded-sm sm:hidden"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 pt-4 pb-6 space-y-3 shadow-lg">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 border border-blue-900 rounded-full p-0.5">
                <FPLogo variant="colored" showText={false} className="w-full h-full" />
              </div>
              <div>
                <div className="font-extrabold text-blue-900 text-sm uppercase tracking-wider">FP AQUAFARM</div>
                <div className="text-[10px] text-blue-700 uppercase tracking-tight font-semibold">Sustainable Maritime Cultivation</div>
              </div>
            </div>

            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 hover:text-blue-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full text-center text-xs font-bold uppercase tracking-widest text-white bg-teal-600 py-3 rounded-sm shadow-sm hover:bg-teal-700"
              >
                Request Price Sheet & Samples
              </button>

            </div>
          </div>
        )}
      </header>
    </>
  );
};
