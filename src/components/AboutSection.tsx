import React, { useState } from 'react';
import { FPLogo, FishIcon, CrabIcon, ShrimpIcon } from './brand/FPLogo';
import { ShieldCheck, HeartHandshake, Leaf, Droplets, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'values'>('story');

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Geometric Grid */}
      <div className="absolute inset-0 opacity-40 geometric-grid pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200 text-teal-700 text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
            <Droplets className="w-3.5 h-3.5 text-teal-600" />
            Our Coastal Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 font-outfit tracking-tight uppercase">
            Cultivating Seafood in Harmony with Nature
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            At FP AQUAFARM, we merge generational aquaculture knowledge with precision bio-secure water circulation to raise the highest standard of fish, crab, and shrimp.
          </p>
        </div>

        {/* Story Grid & Brand Mark Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden shadow-md border border-slate-200 bg-white rounded-sm">
              {/* Farm Picture */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
                  alt="FP Aquafarm Coastal Ponds"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E48]/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <a
                    href="https://maps.app.goo.gl/wAcXiRwjhGxEJjTE8"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold text-teal-300 hover:text-white uppercase tracking-widest block transition-colors underline"
                  >
                    Location: Minanga Weste, Buguey, Cagayan ↗
                  </a>
                  <div className="text-base sm:text-lg font-bold font-outfit uppercase">120+ Hectares of Bio-Secure Ponds</div>
                </div>
              </div>

              {/* Emblem Badge Overlay */}
              <div className="p-5 bg-white flex items-center gap-4 border-t border-slate-100">
                <div className="w-14 h-14 flex-shrink-0 border border-blue-900 rounded-full p-1">
                  <FPLogo variant="colored" showText={false} className="w-full h-full" />
                </div>
                <div>
                  <h4 className="font-extrabold text-blue-900 text-sm uppercase tracking-wide">
                    FP AQUAFARM Quality Guarantee
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Every batch inspected, graded, and harvested on ice for maximum freshness.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Animal Badges with Geometric Balance */}
            <div className="absolute -bottom-3 -right-3 bg-white shadow-md border border-slate-200 p-2.5 flex items-center gap-3 hidden sm:flex rounded-sm">
              <div className="flex -space-x-1.5">
                <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center border border-teal-200">
                  <FishIcon className="w-4 h-4" />
                </div>
                <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center border border-orange-200">
                  <CrabIcon className="w-4 h-4" />
                </div>
                <div className="w-7 h-7 rounded-full bg-rose-50 flex items-center justify-center border border-rose-200">
                  <ShrimpIcon className="w-4 h-4" />
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900">Tri-Species Ecosystem</span>
            </div>
          </div>

          {/* Right Column: Interactive Story & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Tabs */}
            <div className="flex border-b border-slate-200 gap-8">
              {[
                { id: 'story', label: 'The Farm Story' },
                { id: 'mission', label: 'Our Mission' },
                { id: 'values', label: 'Core Commitments' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 text-xs font-bold uppercase tracking-widest transition-all relative cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-blue-900 border-b-2 border-blue-900'
                      : 'text-slate-500 hover:text-blue-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            {activeTab === 'story' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-xl font-bold text-blue-900 font-outfit uppercase">
                  Built on a Passion for Pure Waters & Wholesome Seafood
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  FP AQUAFARM began with a straightforward conviction: seafood should taste like the wild ocean, clean and naturally sweet, raised without stress, antibiotics, or destructive industrial methods.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Situated along a pristine coastal basin where ocean tides bring clean, oxygen-rich seawater twice a day, our farm operates a closed-loop biofloc and mangrove wetland filtration system that protects both the seafood and the surrounding coastline.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-xl font-bold text-blue-900 font-outfit uppercase">
                  Mission: Sustainable Abundance Without Compromise
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  To be the region's most trusted producer of premium fish, crab, and shrimp by championing ecological balance, full supply-chain transparency, and humane handling protocols.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    Deliver restaurant-grade live and iced seafood within hours of harvest.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    Protect and restore native mangrove buffer zones along our coastline.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    100% trace every catch back to its nursery lineage and feed logs.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-xl font-bold text-blue-900 font-outfit uppercase">
                  What Sets FP AQUAFARM Apart
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-white border border-slate-200 rounded-sm">
                    <div className="font-bold text-[11px] text-blue-900 uppercase tracking-wider">Zero Antibiotics</div>
                    <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Cultivating beneficial probiotics to build natural immunity.
                    </div>
                  </div>
                  <div className="p-3.5 bg-white border border-slate-200 rounded-sm">
                    <div className="font-bold text-[11px] text-teal-700 uppercase tracking-wider">Sub-Zero Slurry</div>
                    <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Humane instant stun locking cell structure and sweetness.
                    </div>
                  </div>
                  <div className="p-3.5 bg-white border border-slate-200 rounded-sm">
                    <div className="font-bold text-[11px] text-orange-700 uppercase tracking-wider">Hand-Graded Quality</div>
                    <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Every crab, prawn batch, and fish individually verified.
                    </div>
                  </div>
                  <div className="p-3.5 bg-white border border-slate-200 rounded-sm">
                    <div className="font-bold text-[11px] text-rose-700 uppercase tracking-wider">Mangrove Stewardship</div>
                    <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Constructed wetlands that purify pond effluent naturally.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Feature Highlights Bento Grid with Geometric Balance */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 bg-white border border-teal-200/80 rounded-sm hover:border-teal-500 transition-colors">
                <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-wider">
                  <FishIcon className="w-4 h-4 text-teal-600" />
                  Saltwater Fish
                </div>
                <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Active swimming currents for firm, lean fillets with zero muddy flavor.
                </div>
              </div>

              <div className="p-4 bg-white border border-orange-200/80 rounded-sm hover:border-orange-500 transition-colors">
                <div className="flex items-center gap-2 text-orange-900 font-bold text-xs uppercase tracking-wider">
                  <CrabIcon className="w-4 h-4 text-orange-600" />
                  Mud Crab
                </div>
                <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Pond-fattened in private shelters for 90%+ meat fullness and rich coral roe.
                </div>
              </div>

              <div className="p-4 bg-white border border-rose-200/80 rounded-sm hover:border-rose-500 transition-colors">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider">
                  <ShrimpIcon className="w-4 h-4 text-rose-600" />
                  Tiger Shrimp
                </div>
                <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Night-harvested in biofloc ponds for crisp texture and sweet ocean snap.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
