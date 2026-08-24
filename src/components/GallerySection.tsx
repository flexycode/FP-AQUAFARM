import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/farmData';
import { GalleryItem } from '../types';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon, HelpCircle } from 'lucide-react';

interface GallerySectionProps {
  onOpenVideoGuide: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenVideoGuide }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ponds' | 'harvest' | 'nursery' | 'processing'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 border border-teal-200">
            <Camera className="w-3.5 h-3.5 text-teal-600" />
            Visual Tour
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 font-outfit tracking-tight uppercase">
            Inside FP AQUAFARM
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Take a look across our aerated bio-secure coastal ponds, clean indoor hatchery, and climate-controlled packing facilities.
          </p>

          {/* Filter Pills with Geometric Structure */}
          <div className="mt-8 flex flex-wrap justify-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-sm inline-flex">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'ponds', label: 'Coastal Ponds' },
              { id: 'harvest', label: 'Live Harvest' },
              { id: 'nursery', label: 'Nursery & Hatchery' },
              { id: 'processing', label: 'Cold-Chain Packing' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-white text-blue-900 shadow-sm border border-slate-200/80 font-extrabold'
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photography Grid with Geometric Rectangles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-72 sm:h-80 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-slate-200 bg-slate-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Dark Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Tag Pill on Top */}
              <div className="absolute top-3.5 left-3.5">
                <span className="bg-white text-blue-900 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border border-slate-200 shadow-xs">
                  {item.tag}
                </span>
              </div>

              {/* Caption & Title on Bottom */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <h4 className="text-sm sm:text-base font-extrabold uppercase font-outfit group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed font-normal">
                  {item.caption}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-teal-300 group-hover:underline">
                  <Eye className="w-3 h-3" />
                  <span>View Full Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions banner for replacing gallery photos */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-sm p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 uppercase">
                Farm Owner Note: Ready to insert your own farm photos?
              </div>
              <div className="text-xs text-slate-500 font-normal">
                You can easily add your high-res drone shots and pond photography.
              </div>
            </div>
          </div>
          <button
            onClick={onOpenVideoGuide}
            className="text-[10px] font-bold uppercase tracking-widest text-blue-900 hover:bg-slate-100 bg-white border border-slate-300 px-4 py-2.5 rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0"
          >
            <span>Media Replacement Guide</span>
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-sm overflow-hidden border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-sm bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Photo Preview */}
            <div className="relative h-80 sm:h-[460px] bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-sm bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-sm bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Information & Caption */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">
                  {selectedPhoto.tag}
                </span>
                <h3 className="text-lg font-bold font-outfit uppercase text-white mt-0.5">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl font-normal">
                  {selectedPhoto.caption}
                </p>
              </div>
              <div className="text-[10px] text-slate-400 bg-slate-800 px-2.5 py-1 rounded-none border border-slate-700 uppercase font-mono">
                FP Bio-Secure Record
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
