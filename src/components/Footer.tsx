import React, { useState } from 'react';
import { FPLogo, FishIcon, CrabIcon, ShrimpIcon } from './brand/FPLogo';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 relative overflow-hidden border-t border-slate-800">
      
      {/* Decorative Wave Divider on Top */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-slate-50 fill-current rotate-180"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Emblem & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full p-1 shadow-md flex-shrink-0 border border-slate-200 dark:border-slate-700">
                <FPLogo variant="colored" showText={false} className="w-full h-full" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-wider text-white font-outfit uppercase">
                  FP AQUAFARM
                </span>
                <div className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
                  Sustainable Fish, Crab & Shrimp
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4 font-normal">
              Pristine coastal water circulation, bio-secure ponds, zero antibiotics, and humane sub-zero night harvesting. Supplying restaurant chefs and seafood markets with unparalleled freshness.
            </p>

            <div className="pt-1 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Santa+Teresita,+Cagayan"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline"
                >
                  Santa Teresita, Cagayan
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                <a href="mailto:orders@fpaquafarm.com" className="hover:text-white">
                  orders@fpaquafarm.com
                </a>
                <span className="text-slate-600 dark:text-slate-400">|</span>
                <a href="mailto:ftpiano28@gmail.com" className="hover:text-white">
                  ftpiano28@gmail.com
                </a>
              </div>
            </div>

            {/* Animal Tri-Badge */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-teal-300 font-bold bg-slate-800 px-2.5 py-1 rounded-sm border border-slate-700">
                <FishIcon className="w-3.5 h-3.5" />
                <span>Fish</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-orange-300 font-bold bg-slate-800 px-2.5 py-1 rounded-sm border border-slate-700">
                <CrabIcon className="w-3.5 h-3.5" />
                <span>Crab</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-rose-300 font-bold bg-slate-800 px-2.5 py-1 rounded-sm border border-slate-700">
                <ShrimpIcon className="w-3.5 h-3.5" />
                <span>Shrimp</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] font-outfit">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-[11px] font-medium">
                  Our Story & Mission
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-[11px] font-medium">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-[11px] font-medium">
                  Aquaculture Process
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-[11px] font-medium">
                  Sustainability & Mangroves
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-[11px] font-medium">
                  Farm Photo Tour
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors uppercase tracking-wider text-[11px] font-medium">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] font-outfit">
              Harvest Lines
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#products" className="hover:text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <span className="w-1.5 h-1.5 bg-teal-400"></span>
                  Asian Seabass / Barramundi
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <span className="w-1.5 h-1.5 bg-teal-400"></span>
                  Tiger & Orange Grouper
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <span className="w-1.5 h-1.5 bg-orange-400"></span>
                  Pond-Fattened Mud Crabs (Class A)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <span className="w-1.5 h-1.5 bg-orange-400"></span>
                  Soft-Shell Molt Crabs (IQF)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <span className="w-1.5 h-1.5 bg-rose-400"></span>
                  Giant Black Tiger Prawns (U-10)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <span className="w-1.5 h-1.5 bg-rose-400"></span>
                  Pacific White Shrimp (Vannamei)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Harvest Alert Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] font-outfit">
              Seasonal Harvest Alerts
            </h4>
            <p className="text-xs text-slate-400 font-normal">
              Receive weekly batch harvest schedules, spot market rates, and new species availability alerts.
            </p>

            {subscribed ? (
              <div className="p-3 bg-teal-900/50 border border-teal-500/50 rounded-sm text-xs text-teal-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Subscribed! You'll receive our weekly harvest bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter business email..."
                    className="w-full px-3 py-2 rounded-sm bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-sm bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-[10px] uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Subscribe to Market Sheet</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-[10px] text-slate-500 flex items-center gap-1.5 uppercase font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Zero spam. Direct farm announcements only.</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Certification Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">FP AQUAFARM</strong>. All rights reserved. Registered Sustainable Aquaculture Enterprise.
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400">GAP Certified</span>
            <span>•</span>
            <span className="hover:text-slate-400">HACCP Compliant</span>
            <span>•</span>
            <span className="hover:text-slate-400">Antibiotic-Free Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
