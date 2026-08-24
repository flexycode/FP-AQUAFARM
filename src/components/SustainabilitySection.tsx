import React from 'react';
import { SUSTAINABILITY_METRICS, CERTIFICATIONS } from '../data/farmData';
import { Leaf, Recycle, Trees, HeartHandshake, SunMedium, Award, ShieldCheck, QrCode } from 'lucide-react';
import { FPLogo } from './brand/FPLogo';

export const SustainabilitySection: React.FC = () => {
  const getMetricIcon = (icon: string) => {
    const props = { className: 'w-6 h-6 text-teal-600' };
    switch (icon) {
      case 'Recycle':
        return <Recycle {...props} />;
      case 'Trees':
        return <Trees {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'SunMedium':
        return <SunMedium {...props} />;
      default:
        return <Leaf {...props} />;
    }
  };

  return (
    <section id="sustainability" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 border border-emerald-200">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            Ecological Responsibility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 font-outfit tracking-tight uppercase">
            Sustainability by Design
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Aquaculture must protect the waterways that nourish it. We operate closed-loop bio-filtration and protect native mangrove shorelines to preserve coastal biodiversity for generations.
          </p>
        </div>

        {/* 4 Core Impact Metrics with Geometric Balance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {SUSTAINABILITY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-sm p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-sm bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                  {getMetricIcon(metric.icon)}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-900 font-outfit uppercase">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 uppercase tracking-wide">
                  {metric.title}
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Quality Assurance Showcase */}
        <div className="bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-2">
                <Award className="w-3.5 h-3.5 text-teal-600" />
                Verified Standards & Traceability
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-outfit uppercase">
                Independently Audited & Certified
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-normal">
                Our farm protocols adhere to strict international food safety, biosecurity, and environmental stewardship standards.
              </p>
            </div>

            <div className="flex items-center gap-3.5 bg-slate-50 p-3.5 rounded-sm border border-slate-200">
              <div className="w-11 h-11">
                <FPLogo variant="colored" showText={false} className="w-full h-full" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">FP Traceability QR</div>
                <div className="text-[10px] text-slate-500">Encrypted batch identifier on every crate</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-sm bg-slate-50 border border-slate-200 hover:border-blue-900/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[9px] font-mono font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded-none uppercase">
                    {cert.code}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                </div>
                <div className="font-bold text-blue-900 text-xs uppercase tracking-wide">{cert.name}</div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
