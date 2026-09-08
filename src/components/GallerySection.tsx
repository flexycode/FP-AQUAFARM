import React, { useState, useRef, useCallback } from 'react';
import { GALLERY_ITEMS, HARVEST_VIDEOS, POND_VIDEOS } from '../data/farmData';
import { GalleryItem, FarmVideo } from '../types';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon, HelpCircle, Video, Play, Pause, Clock } from 'lucide-react';

interface GallerySectionProps {
  onOpenVideoGuide: () => void;
}

/**
 * Individual video card with autoplay, muted loop, and play/pause toggle.
 * Handles video loading states gracefully when files aren't yet present.
 */
const FarmVideoCard: React.FC<{ video: FarmVideo }> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <div className="group relative h-72 sm:h-80 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200 dark:border-slate-700 bg-slate-900">
      {/* Video Element or Fallback */}
      {!hasError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      ) : (
        /* Elegant fallback when video file is not yet available */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-blue-950 to-slate-900 text-center px-6">
          <div className="w-16 h-16 rounded-full bg-blue-900/60 border border-blue-700/50 flex items-center justify-center mb-4">
            <Video className="w-7 h-7 text-teal-400" />
          </div>
          <p className="text-xs font-bold text-white uppercase tracking-wider font-outfit">{video.title}</p>
          <p className="text-[10px] text-slate-400 mt-2 leading-relaxed max-w-[240px]">
            Video coming soon — drop your MP4 file into <code className="text-teal-400 font-mono">{video.videoUrl}</code>
          </p>
        </div>
      )}

      {/* Loading skeleton pulse */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-950 to-slate-900 animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-blue-900/60 border border-blue-700/50 flex items-center justify-center">
            <Video className="w-5 h-5 text-teal-400 animate-pulse" />
          </div>
        </div>
      )}

      {/* Dark gradient overlay — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity pointer-events-none"></div>

      {/* Tag Badge — top left */}
      <div className="absolute top-3.5 left-3.5 z-10">
        <span className="bg-blue-950 text-teal-300 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border border-blue-800 shadow-xs">
          {video.tag}
        </span>
      </div>

      {/* Play/Pause Toggle — center, appears on hover */}
      {!hasError && isLoaded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className="w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-0.5" />
            )}
          </div>
        </button>
      )}

      {/* Title & Description — bottom overlay */}
      <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
        <h4 className="text-sm sm:text-base font-extrabold uppercase font-outfit group-hover:text-teal-300 transition-colors">
          {video.title}
        </h4>
        <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed font-normal">
          {video.description}
        </p>
      </div>
    </div>
  );
};

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
    <section id="gallery" className="py-24 bg-white dark:bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 border border-teal-200">
            <Camera className="w-3.5 h-3.5 text-teal-600" />
            Visual Tour
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 dark:text-blue-200 font-outfit tracking-tight uppercase">
            Inside FP AQUAFARM
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Take a look across our aerated bio-secure coastal ponds, clean indoor hatchery, and climate-controlled packing facilities.
          </p>

          {/* Filter Pills with Geometric Structure */}
          <div className="mt-8 flex flex-wrap justify-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-sm inline-flex">
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
                    ? 'bg-white dark:bg-slate-800 text-blue-900 dark:text-blue-200 shadow-sm border border-slate-200/80 font-extrabold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:text-blue-200'
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
              className="group relative h-72 sm:h-80 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80"
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
                <span className="bg-white dark:bg-slate-800 text-blue-900 dark:text-blue-200 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border border-slate-200 dark:border-slate-700 shadow-xs">
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

        {/* ─── Live Harvest Video Footage Section ─── */}
        {HARVEST_VIDEOS.length > 0 && (
          <div className="mt-16">
            {/* Section Sub-Header */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-teal-300 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 border border-blue-800">
                <Video className="w-3.5 h-3.5 text-teal-400" />
                Live Harvest Footage
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-900 dark:text-blue-200 font-outfit tracking-tight uppercase">
                Watch Our Harvest in Action
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-2xl mx-auto">
                Experience the precision and care of our harvesting operations — from night-time prawn sluicing to hand-grading live mud crabs.
                All videos play simultaneously for an immersive look inside FP AQUAFARM.
              </p>
            </div>

            {/* Video Cards Grid — 3 columns on desktop, stacks on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HARVEST_VIDEOS.map((video) => (
                <FarmVideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        )}

        {/* ─── Coastal Ponds Video Footage Section ─── */}
        {POND_VIDEOS.length > 0 && (
          <div className="mt-16">
            {/* Section Sub-Header */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-950 text-teal-300 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 border border-teal-800">
                <Video className="w-3.5 h-3.5 text-teal-400" />
                Coastal Ponds Overview
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-900 dark:text-blue-200 font-outfit tracking-tight uppercase">
                Explore Our Bio-Secure Ponds
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-2xl mx-auto">
                Get a glimpse of our pristine saltwater flow-through ponds where we cultivate premium seafood with zero antibiotics.
              </p>
            </div>

            {/* Video Cards Grid — 2 columns on desktop, stacks on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {POND_VIDEOS.map((video) => (
                <FarmVideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        )}

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
