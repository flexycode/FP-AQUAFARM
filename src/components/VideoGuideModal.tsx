import React from 'react';
import { X, Film, Image as ImageIcon, FolderCheck, CheckCircle2, Code2, Copy, Sparkles } from 'lucide-react';
import { FPLogo } from './brand/FPLogo';

interface VideoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoGuideModal: React.FC<VideoGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-slate-900 text-white rounded-sm overflow-hidden shadow-2xl border border-slate-800 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#0F285C] border-b border-blue-900/60 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-sm bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-teal-300 uppercase tracking-[0.2em]">
                Farm Owner & Developer Integration Guide
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold font-outfit text-white uppercase">
                How to Drop in Your Real Farm Video & Photos
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-sm text-slate-300">
          
          {/* Step 1: Hero Background Video */}
          <div className="bg-slate-800/80 rounded-sm p-5 border border-slate-700 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider font-outfit">
              <Film className="w-4 h-4 text-teal-400" />
              <span>1. Inserting Your Real Hero Background Video</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              The hero section is configured to automatically play your local video file if present. Place your drone footage or water aerator video here:
            </p>
            
            <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 font-mono text-xs text-teal-300 flex items-center justify-between">
              <span>/public/videos/farm-hero.mp4</span>
              <span className="text-[10px] text-slate-500 font-sans uppercase tracking-wider">Required file path</span>
            </div>

            <div className="text-xs text-slate-400 space-y-1 font-normal">
              <div>• <strong>Recommended format:</strong> MP4 (H.264 video codec, AAC or no audio)</div>
              <div>• <strong>Ideal resolution:</strong> 1080p (1920x1080) at 24fps or 30fps for smooth loop</div>
              <div>• <strong>Target file size:</strong> Under 15MB for fast mobile loading</div>
            </div>
          </div>

          {/* Step 2: Farm Photography & Gallery */}
          <div className="bg-slate-800/80 rounded-sm p-5 border border-slate-700 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider font-outfit">
              <ImageIcon className="w-4 h-4 text-orange-400" />
              <span>2. Replacing Farm Photos & Video Stills</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              To replace the curated photography with real shots of your ponds, nurseries, and harvest boxes:
            </p>

            <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 font-mono text-xs text-orange-300">
              src/data/farmData.ts → GALLERY_ITEMS
            </div>

            <p className="text-xs text-slate-400 font-normal">
              Simply drop your image files into <code className="text-teal-300 font-mono">/public/images/</code> and update the <code className="text-teal-300 font-mono">imageUrl</code> property for each gallery card.
            </p>
          </div>

          {/* Step 3: Brand Assets Note */}
          <div className="bg-slate-800/80 rounded-sm p-5 border border-slate-700 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider font-outfit">
              <FolderCheck className="w-4 h-4 text-rose-400" />
              <span>3. Provided Brand Logos Status</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-sm p-1 shadow border border-slate-200">
                <FPLogo variant="colored" showText={false} className="w-full h-full" />
              </div>
              <p className="text-xs text-slate-300 font-normal">
                Both your <strong className="text-white">Primary Colored Emblem</strong> and the <strong className="text-white">Navy Line-Art Secondary Logo</strong> have been converted into scalable vector components and embedded in the Navbar, Hero overlay, Product cards, Map, and Footer.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-sm bg-blue-900 hover:bg-blue-800 text-white font-bold text-[11px] uppercase tracking-widest transition-colors cursor-pointer"
          >
            Got It, Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
