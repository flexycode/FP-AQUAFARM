import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/farmData';
import { ShieldCheck, Droplets, Activity, Moon, Truck, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProcessSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const getStepIcon = (iconName: string, active: boolean) => {
    const props = { className: `w-6 h-6 ${active ? 'text-white' : 'text-[#1E3A8A]'}` };
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Droplets':
        return <Droplets {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Moon':
        return <Moon {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      default:
        return <Droplets {...props} />;
    }
  };

  const current = PROCESS_STEPS[selectedStep];

  return (
    <section id="process" className="py-24 bg-[#0A192F] text-white relative overflow-hidden">
      {/* Background Deep Ocean Grid Accents */}
      <div className="absolute inset-0 opacity-15 geometric-grid-dark pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-950/90 text-teal-300 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 border border-teal-500/30">
            <Activity className="w-3.5 h-3.5 text-teal-400" />
            Pond-to-Plate Stewardship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit tracking-tight text-white uppercase">
            How Our Aquaculture Operates
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            From SPF disease-free nursery fingerlings to midnight ice-slurry harvests, every phase is engineered for clean water purity, low density, and humane care.
          </p>
        </div>

        {/* Step Navigation Pill Bar (Desktop & Mobile Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-sm text-left transition-all duration-200 flex flex-col justify-between border cursor-pointer ${
                  isSelected
                    ? 'bg-[#1E3A8A] border-teal-400 shadow-md ring-1 ring-teal-400/40'
                    : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-7 h-7 rounded-sm flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-teal-400 text-slate-900 font-extrabold' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    0{step.step}
                  </span>
                  <div className={`p-1.5 rounded-sm ${isSelected ? 'bg-white/15' : 'bg-slate-700/50'}`}>
                    {getStepIcon(step.iconName, isSelected)}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-teal-300">Phase 0{step.step}</div>
                  <div className="text-xs sm:text-sm font-bold text-white line-clamp-1 mt-0.5 uppercase">
                    {step.title.split('&')[0]}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Step Deep-Dive Display Card with Geometric Balance */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/90 rounded-sm p-6 sm:p-8 border border-slate-700 shadow-lg"
            >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Overview & Key Protocols */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-teal-500/20 text-teal-300 text-[10px] font-bold uppercase tracking-widest border border-teal-500/40">
                <span>Standard: {current.standards}</span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  STEP 0{current.step} OF 05
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-white uppercase mt-1">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-teal-300 font-bold uppercase tracking-wide mt-1">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Protocol Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Operational Safeguards:
                </div>
                {current.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-3 flex items-center gap-3">
                <button
                  disabled={selectedStep === 0}
                  onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-slate-700 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Previous Step
                </button>
                <button
                  disabled={selectedStep === PROCESS_STEPS.length - 1}
                  onClick={() => setSelectedStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right: Technical Infographic Diagram Block with Geometric Layout */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-sm p-5 border border-slate-700/80">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    Pond Telemetry Snapshot
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Live Bio-Sensors
                  </span>
                </div>

                <div className="space-y-3.5 my-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span className="text-[11px]">Dissolved Oxygen (DO)</span>
                      <span className="font-mono text-teal-300 font-bold text-[11px]">7.2 mg/L (Optimal)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-none overflow-hidden">
                      <div className="h-full bg-teal-400 w-[90%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span className="text-[11px]">Natural Salinity</span>
                      <span className="font-mono text-blue-300 font-bold text-[11px]">28 - 32 ppt (Oceanic)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-none overflow-hidden">
                      <div className="h-full bg-blue-500 w-[85%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span className="text-[11px]">Water pH Stability</span>
                      <span className="font-mono text-orange-300 font-bold text-[11px]">7.8 - 8.2 (Balanced)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-none overflow-hidden">
                      <div className="h-full bg-amber-500 w-[80%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span className="text-[11px]">Antibiotic & Chemical Residue</span>
                      <span className="font-mono text-emerald-400 font-bold text-[11px]">0.00% (Non-Detectable)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-none overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[0%]"></div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/80 border border-slate-700 text-xs text-slate-300 rounded-sm">
                  💡 <strong className="text-white">FP Assurance:</strong> Real-time alerts dispatch automated paddlewheels and water sluice adjustments whenever parameters deviate.
                </div>
              </div>
            </div>

          </div>
        </motion.div>
        </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
