import React, { useState } from 'react';
import { FARM_PRODUCTS } from '../data/farmData';
import { Product } from '../types';
import { FishIcon, CrabIcon, ShrimpIcon } from './brand/FPLogo';
import { Check, ArrowUpRight, Sparkles, Scale, Box, Calendar, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onQuickInquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onQuickInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fish' | 'crab' | 'shrimp'>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? FARM_PRODUCTS
      : FARM_PRODUCTS.filter((p) => p.category === activeCategory);

  const getAnimalIcon = (category: string, className = 'w-10 h-10') => {
    switch (category) {
      case 'fish':
        return <FishIcon className={className} />;
      case 'crab':
        return <CrabIcon className={className} />;
      case 'shrimp':
        return <ShrimpIcon className={className} />;
      default:
        return <FishIcon className={className} />;
    }
  };

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-200 text-teal-700 text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Our Farm Harvest
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 font-outfit tracking-tight uppercase">
            Premium Coastal Aquaculture
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Raised in oxygenated, bio-secure coastal ponds with zero chemicals. Hand-graded to meet the exacting standards of premier kitchens and seafood markets.
          </p>

          {/* Product Filter Tabs with Geometric Structure */}
          <div className="mt-8 inline-flex p-1 bg-slate-100 border border-slate-200 rounded-sm">
            {[
              { id: 'all', label: 'All Harvest', icon: null },
              { id: 'fish', label: 'Fish', icon: <FishIcon className="w-3.5 h-3.5" /> },
              { id: 'crab', label: 'Crab', icon: <CrabIcon className="w-3.5 h-3.5" /> },
              { id: 'shrimp', label: 'Shrimp / Prawn', icon: <ShrimpIcon className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer rounded-sm ${
                  activeCategory === tab.id
                    ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3 Main Product Showcase Cards with Geometric Balance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white rounded-sm p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: product.accentColor }}
              ></div>

              <div>
                {/* Header with Hand-Drawn Animal Icon & Category Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-14 h-14 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center p-2.5 transition-transform duration-200 group-hover:scale-105">
                    {getAnimalIcon(product.category, 'w-full h-full')}
                  </div>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 border ${product.badgeBg}`}
                  >
                    {product.category.toUpperCase()} LINE
                  </span>
                </div>

                {/* Product Name & Scientific Classification */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-900 font-outfit uppercase group-hover:text-blue-800 transition-colors">
                  {product.name}
                </h3>
                <p className="text-[11px] font-medium text-slate-500 italic mt-0.5 mb-3">
                  {product.scientificName}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  {product.tagline}
                </p>

                {/* Product Image Thumbnail Preview */}
                <div className="relative h-44 rounded-sm overflow-hidden mb-5 border border-slate-200">
                  <img
                    src={product.imagePlaceholder}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white flex justify-between items-center text-[10px] uppercase tracking-wider font-bold">
                    <span className="bg-black/70 px-2 py-0.5 rounded-none">
                      {product.availability}
                    </span>
                    <span className="text-teal-300">Bio-Secure Raised</span>
                  </div>
                </div>

                {/* Species Offered */}
                <div className="mb-4">
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Scale className="w-3 h-3 text-slate-400" />
                    Species & Varieties:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.species.map((sp, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-50 text-slate-700 font-medium px-2 py-0.5 border border-slate-200 rounded-none"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sizes & Grading */}
                <div className="mb-4">
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <Box className="w-3 h-3 text-slate-400" />
                    Graded Sizes:
                  </div>
                  <div className="space-y-1 text-xs text-slate-600">
                    {product.sizes.map((sz, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-blue-900"></span>
                        <span>{sz}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Quality Highlights */}
                <div className="mb-6 pt-3 border-t border-slate-200">
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-2">
                    Quality Guarantee:
                  </div>
                  <ul className="space-y-1.5">
                    {product.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons with Geometric Balance */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="flex-1 text-[10px] font-bold uppercase tracking-widest text-blue-900 hover:bg-slate-50 bg-white border border-slate-300 py-2.5 px-3 transition-colors flex items-center justify-center gap-1 cursor-pointer rounded-sm"
                >
                  <span>Full Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onQuickInquiry(product.name)}
                  className="flex-1 text-[10px] font-bold uppercase tracking-widest text-white bg-teal-600 hover:bg-teal-700 py-2.5 px-3 transition-colors shadow-none flex items-center justify-center gap-1 cursor-pointer rounded-sm"
                >
                  <span>Inquire Price</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Wholesale / Bulk Request Banner */}
        <div className="mt-14 bg-[#0F285C] border border-blue-900 rounded-sm p-8 sm:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit uppercase tracking-tight">
              Custom Grading, Filleting & Live Tank Deliveries
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
              We supply specialized custom orders for supermarket distributors, restaurant groups, and exporters. Let us know your size specifications and delivery schedule.
            </p>
          </div>
          <button
            onClick={() => onQuickInquiry('Custom Bulk Order')}
            className="whitespace-nowrap bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] uppercase tracking-widest px-6 py-3.5 transition-colors cursor-pointer flex-shrink-0 rounded-sm shadow-sm"
          >
            Request Wholesale Price Sheet
          </button>
        </div>

      </div>
    </section>
  );
};
