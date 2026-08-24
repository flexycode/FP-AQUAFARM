import React, { useState } from 'react';
import { FPLogo, FishIcon, CrabIcon, ShrimpIcon } from './brand/FPLogo';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, ShieldAlert } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  preselectedProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedProduct }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    inquiryType: 'wholesale',
    productsOfInterest: preselectedProduct ? [preselectedProduct] : ['Fish', 'Crab', 'Shrimp'],
    estimatedVolume: '100kg - 300kg / week',
    deliveryFrequency: 'Weekly scheduled cold-chain delivery',
    destinationCity: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleProduct = (prod: string) => {
    if (formData.productsOfInterest.includes(prod)) {
      setFormData({
        ...formData,
        productsOfInterest: formData.productsOfInterest.filter((p) => p !== prod),
      });
    } else {
      setFormData({
        ...formData,
        productsOfInterest: [...formData.productsOfInterest, prod],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 border border-teal-200">
            <MessageSquare className="w-3.5 h-3.5 text-teal-600" />
            Direct Farm Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 font-outfit tracking-tight uppercase">
            Connect with FP AQUAFARM
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Whether you are a chef seeking live seafood, a wholesale distributor, or an exporter, our farm team is ready to provide live pricing sheets and customized harvest schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Farm Location, Contact Channels & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-sm p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-blue-900 font-outfit uppercase">
                Farm Headquarters & Operations
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-blue-50 text-blue-900 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-900" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Farm & Packing Facility
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                      FP AQUAFARM
                    </div>
                    <div className="text-xs text-slate-600 font-normal">
                      Minanga Weste, Buguey, Cagayan
                    </div>
                    <a
                      href="https://maps.app.goo.gl/wAcXiRwjhGxEJjTE8"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-teal-600 hover:text-teal-700 font-bold mt-1 uppercase tracking-wider underline"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Hotline & Live WhatsApp
                    </div>
                    <a
                      href="tel:+18005552782"
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-900 block transition-colors"
                    >
                      +1 (800) 555-AQUA / (800) 555-2782
                    </a>
                    <div className="text-xs text-slate-600 font-normal">
                      WhatsApp Dispatch: +1 (555) 928-3474
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Email Communication
                    </div>
                    <a
                      href="mailto:orders@fpaquafarm.com"
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-900 block transition-colors"
                    >
                      orders@fpaquafarm.com
                    </a>
                    <div className="text-xs text-slate-600 font-normal mt-0.5 space-y-0.5">
                      <div>
                        Wholesale Inquiries:{' '}
                        <a
                          href="mailto:wholesale@fpaquafarm.com"
                          className="font-medium text-slate-800 hover:text-blue-900 underline"
                        >
                          wholesale@fpaquafarm.com
                        </a>
                      </div>
                      <div>
                        Direct Contact:{' '}
                        <a
                          href="mailto:ftpiano28@gmail.com"
                          className="font-medium text-slate-800 hover:text-blue-900 underline"
                        >
                          ftpiano28@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Harvest & Office Schedule
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      Night Harvest: 10:00 PM – 4:00 AM Daily
                    </div>
                    <div className="text-xs text-slate-600 font-normal">
                      Dispatch Office: Mon – Sat, 6:00 AM – 6:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Chef / Buyer Visit Biosecurity Notice */}
              <div className="p-3.5 bg-blue-50/70 rounded-sm border border-blue-200/60 text-xs text-slate-700 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-blue-900 flex-shrink-0 mt-0.5" />
                <span className="font-normal">
                  <strong className="text-blue-900">Biosecurity Notice:</strong> Farm visits require 24-hour advance reservation to maintain quarantine protocols.
                </span>
              </div>
            </div>

            {/* Location Map Embed */}
            <div className="bg-white rounded-sm overflow-hidden border border-slate-200 shadow-sm">
              <div className="relative h-60 bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                  alt="FP AQUAFARM Minanga Weste Buguey Cagayan Location"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-125 brightness-75"
                />
                
                {/* Map Grid overlay */}
                <div className="absolute inset-0 bg-[#0A192F]/40"></div>

                {/* Custom Map Pin at Farm location */}
                <a
                  href="https://maps.app.goo.gl/wAcXiRwjhGxEJjTE8"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full p-1.5 shadow-2xl border-2 border-blue-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FPLogo variant="colored" showText={false} className="w-full h-full" />
                    </div>
                    <span className="w-3 h-3 rounded-full bg-teal-400 absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-lg animate-ping"></span>
                  </div>
                  <div className="bg-blue-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-none shadow-lg mt-1 border border-white/40 whitespace-nowrap group-hover:bg-blue-800">
                    FP AQUAFARM Ponds
                  </div>
                  <div className="text-[9px] text-teal-300 font-semibold bg-slate-950/80 px-2 py-0.5 mt-0.5 rounded-none border border-slate-700">
                    Minanga Weste, Buguey, Cagayan
                  </div>
                </a>

                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm rounded-sm p-2 px-3 text-[10px] text-slate-800 flex justify-between items-center border border-slate-200">
                  <span className="font-semibold uppercase tracking-wider">📍 Minanga Weste, Buguey, Cagayan</span>
                  <a
                    href="https://maps.app.goo.gl/wAcXiRwjhGxEJjTE8"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-blue-900 hover:text-teal-600 flex items-center gap-1 uppercase tracking-wider underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Wholesale Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm p-6 sm:p-8 border border-slate-200 shadow-sm relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-in fade-in zoom-in-95">
                  <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-sm flex items-center justify-center mx-auto border border-teal-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-blue-900 font-outfit uppercase">
                    Inquiry Received by FP AQUAFARM
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-normal">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our farm logistics and harvest coordinator will review your request for{' '}
                    <strong className="text-blue-900">{formData.productsOfInterest.join(', ')}</strong> and email our current harvest price sheet within 2 business hours.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-sm border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1 font-normal">
                    <div><strong>Reference:</strong> #FP-INQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                    <div><strong>Contact Email:</strong> {formData.email}</div>
                    <div><strong>Estimated Volume:</strong> {formData.estimatedVolume}</div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        ...formData,
                        notes: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-sm bg-blue-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-extrabold text-blue-900 font-outfit uppercase">
                      Request Wholesale Pricing & Samples
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-normal">
                      Direct factory-to-kitchen and commercial distributor supply.
                    </p>
                  </div>

                  {/* Species Selection Badges */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-2">
                      Select Species / Products of Interest:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => toggleProduct('Fish')}
                        className={`p-3 rounded-sm border text-[11px] font-bold uppercase tracking-wider flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          formData.productsOfInterest.includes('Fish')
                            ? 'bg-teal-50 border-teal-600 text-teal-900 ring-1 ring-teal-500'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <FishIcon className="w-4 h-4 text-teal-600" />
                        <span>Fish Line</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleProduct('Crab')}
                        className={`p-3 rounded-sm border text-[11px] font-bold uppercase tracking-wider flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          formData.productsOfInterest.includes('Crab')
                            ? 'bg-orange-50 border-orange-600 text-orange-900 ring-1 ring-orange-500'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <CrabIcon className="w-4 h-4 text-orange-600" />
                        <span>Mud Crab</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleProduct('Shrimp')}
                        className={`p-3 rounded-sm border text-[11px] font-bold uppercase tracking-wider flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                          formData.productsOfInterest.includes('Shrimp')
                            ? 'bg-rose-50 border-rose-600 text-rose-900 ring-1 ring-rose-500'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <ShrimpIcon className="w-4 h-4 text-rose-600" />
                        <span>Tiger Prawn</span>
                      </button>
                    </div>
                  </div>

                  {/* Full Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Captain David Reyes"
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Company / Restaurant Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Harbor Cove Seafoods"
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@harborcove.com"
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type & Estimated Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Buyer Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-xs sm:text-sm outline-none bg-white transition-all"
                      >
                        <option value="wholesale">Commercial Wholesale / Distributor</option>
                        <option value="restaurant">Restaurant / Executive Chef</option>
                        <option value="supermarket">Supermarket / Grocery Chain</option>
                        <option value="export">International Exporter</option>
                        <option value="retail">Bulk Direct Retail</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Estimated Volume / Batch
                      </label>
                      <select
                        value={formData.estimatedVolume}
                        onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-xs sm:text-sm outline-none bg-white transition-all"
                      >
                        <option value="Sample Pack (10kg - 25kg)">Sample Pack (10kg - 25kg)</option>
                        <option value="50kg - 100kg / weekly">50kg - 100kg / weekly</option>
                        <option value="100kg - 300kg / week">100kg - 300kg / week</option>
                        <option value="500kg - 1 Ton / week">500kg - 1 Ton / week</option>
                        <option value="Commercial Multi-Ton / Container">Commercial Multi-Ton / Container</option>
                      </select>
                    </div>
                  </div>

                  {/* Destination City & Notes */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Delivery Destination & Special Cut/Grading Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Looking for live mud crabs (Class A) and skin-on Barramundi fillets for our seafood restaurant in Metro Bay..."
                      className="w-full px-3.5 py-2.5 rounded-sm border border-slate-300 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-xs sm:text-sm outline-none transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold text-[11px] uppercase tracking-widest py-3.5 px-6 rounded-sm shadow-none transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Transmitting to Harvest Logistics...
                      </span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Wholesale Inquiry & Request Price Sheet</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
