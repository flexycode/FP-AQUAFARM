import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { FPLogo, FishIcon, CrabIcon, ShrimpIcon } from './brand/FPLogo';

interface WholesaleInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const WholesaleInquiryModal: React.FC<WholesaleInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct || 'Mixed Harvest');
  const [volume, setVolume] = useState('100kg - 300kg / weekly');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-sm overflow-hidden shadow-2xl border border-slate-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-blue-900 text-white p-6 sm:p-7 relative border-b border-blue-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-white rounded-sm p-1 shadow-md border border-slate-200">
              <FPLogo variant="colored" showText={false} className="w-full h-full" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                Direct Farm Logistics
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-outfit text-white uppercase">
                Request Wholesale Price Sheet
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Form or Confirmation */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 bg-teal-100 text-teal-700 rounded-sm flex items-center justify-center mx-auto border border-teal-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-blue-900 font-outfit uppercase">
                Quote Request Submitted
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal">
                Thank you, <strong>{name}</strong>. Our harvest manager will contact you at{' '}
                <strong>{email}</strong> or <strong>{phone}</strong> with the current live pond pricing for{' '}
                <strong className="text-blue-900">{selectedProduct}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-sm bg-blue-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Santos"
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                    Business / Restaurant
                  </label>
                  <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="e.g. Blue Fin Eatery"
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                  Product Line
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white"
                >
                  <option value="Mixed Harvest">All Harvest (Fish, Crab & Shrimp)</option>
                  <option value="Premium Coastal Fish">Premium Coastal Fish (Barramundi / Grouper)</option>
                  <option value="Pond-Fattened Mud Crab">Pond-Fattened Mud Crab (Class A / King)</option>
                  <option value="Tiger Prawn & White Shrimp">Tiger Prawn & Pacific White Shrimp</option>
                  <option value="Custom Bulk Order">Custom Commercial Volume</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1">
                  Estimated Weekly Volume
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full px-3 py-2 rounded-sm border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white"
                >
                  <option value="Sample Pack (10kg - 25kg)">Sample Pack (10kg - 25kg)</option>
                  <option value="50kg - 100kg / weekly">50kg - 100kg / weekly</option>
                  <option value="100kg - 300kg / weekly">100kg - 300kg / weekly</option>
                  <option value="500kg - 1 Ton / weekly">500kg - 1 Ton / weekly</option>
                  <option value="Container Export Scale">Container Export Scale</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-sm bg-blue-900 hover:bg-blue-800 text-white font-bold text-[11px] uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Wholesale Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1 uppercase font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Immediate response during farm dispatch hours (6AM–6PM)</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
