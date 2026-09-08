import React from 'react';
import { Product } from '../types';
import { FishIcon, CrabIcon, ShrimpIcon } from './brand/FPLogo';
import { X, CheckCircle2, Box, Flame, Sparkles, Scale, Send, ShieldCheck, Thermometer } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOrderInquiry: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOrderInquiry,
}) => {
  if (!product) return null;

  const getAnimalIcon = (category: string) => {
    switch (category) {
      case 'fish':
        return <FishIcon className="w-12 h-12" />;
      case 'crab':
        return <CrabIcon className="w-12 h-12" />;
      case 'shrimp':
        return <ShrimpIcon className="w-12 h-12" />;
      default:
        return <FishIcon className="w-12 h-12" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white dark:bg-slate-800 rounded-sm overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div
          className="px-6 sm:px-8 py-6 text-white relative overflow-hidden bg-blue-900 border-b border-blue-800"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-15">
            {getAnimalIcon(product.category)}
          </div>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-sm bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-sm bg-white dark:bg-slate-800 p-2 shadow-md flex items-center justify-center flex-shrink-0 border border-slate-200 dark:border-slate-700">
              {getAnimalIcon(product.category)}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                Official Farm Technical Spec Sheet
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-outfit text-white uppercase">
                {product.name}
              </h3>
              <p className="text-xs text-blue-200 italic mt-0.5 font-normal">
                {product.scientificName}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Description */}
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-outfit">
              Cultivation & Flavor Profile
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {/* Nutritional Highlights Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-sm border border-slate-200 dark:border-slate-700 text-center">
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Lean Protein</div>
              <div className="text-base sm:text-lg font-extrabold text-blue-900 dark:text-blue-200 font-outfit mt-0.5">
                {product.nutritionHighlights.protein}
              </div>
            </div>
            <div className="border-x border-slate-200 dark:border-slate-700">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Omega-3 Oils</div>
              <div className="text-base sm:text-lg font-extrabold text-teal-700 font-outfit mt-0.5">
                {product.nutritionHighlights.omega3}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Caloric Density</div>
              <div className="text-base sm:text-lg font-extrabold text-slate-800 dark:text-slate-200 font-outfit mt-0.5">
                {product.nutritionHighlights.calories}
              </div>
            </div>
          </div>

          {/* Graded Sizes Available */}
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-outfit">
              <Scale className="w-3.5 h-3.5 text-slate-500" />
              Standard Harvest Sizes & Grading
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.sizes.map((sz, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-teal-600"></span>
                  <span>{sz}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packaging Formats */}
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-outfit">
              <Box className="w-3.5 h-3.5 text-slate-500" />
              Packaging & Logistics Options
            </h4>
            <div className="space-y-1.5">
              {product.packaging.map((pkg, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-normal"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{pkg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio-Security & Traceability Note */}
          <div className="p-3.5 bg-blue-50/80 rounded-sm border border-blue-200/80 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-blue-900 dark:text-blue-200 flex-shrink-0" />
            <div className="font-normal">
              <strong className="text-blue-900 dark:text-blue-200">Lot Traceability:</strong> Every batch is issued an encrypted QR certificate detailing hatch date, pond biofloc readings, and sub-zero slurry timestamp.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-sm border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-800/80 font-bold text-[11px] uppercase tracking-widest transition-colors cursor-pointer"
          >
            Close Sheet
          </button>
          <button
            onClick={() => {
              onClose();
              onOrderInquiry(product.name);
            }}
            className="flex-1 py-2.5 px-4 rounded-sm bg-blue-900 hover:bg-blue-800 text-white font-bold text-[11px] uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Request Sample / Quote for {product.category.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
