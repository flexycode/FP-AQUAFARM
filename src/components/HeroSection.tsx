import React, { useState, useRef, useEffect } from 'react';
import { FPLogo } from './brand/FPLogo';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ArrowRight,
  HelpCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  UploadCloud,
  Sparkles,
  Camera,
  Film,
  CheckCircle2,
} from 'lucide-react';
import { FARM_STATS } from '../data/farmData';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onOpenVideoGuide: () => void;
}

export interface VideoChannel {
  id: string;
  name: string;
  category: 'aerial' | 'underwater' | 'shallows' | 'custom';
  description: string;
  url: string;
  poster: string;
}

export const VIDEO_CHANNELS: VideoChannel[] = [
  {
    id: 'custom-farm-video',
    name: 'Real Farm Video (farm-hero.mp4)',
    category: 'custom',
    description: 'Uploaded aquaculture farm drone & underwater footage (/videos/farm-hero.mp4).',
    url: '/videos/farm-hero.mp4',
    poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'golden-hour-aerial',
    name: 'Golden Hour Aerial & Ponds',
    category: 'aerial',
    description: 'Calm aerial coastal farm ponds reflecting warm golden sunlight and ocean tides.',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-clear-sea-water-waves-42993-large.mp4',
    poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'underwater-school',
    name: 'Underwater Fish Movement',
    category: 'underwater',
    description: 'School of fish swimming beneath crystal water with sun rays and gentle caustics.',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-underwater-view-of-sun-rays-in-the-sea-43093-large.mp4',
    poster: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'golden-ripples',
    name: 'Sunlit Shallows & Reflections',
    category: 'shallows',
    description: 'Warm light dancing across aquaculture tanks with smooth, slow water ripples.',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-water-surface-with-sun-reflections-42967-large.mp4',
    poster: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=80',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry, onOpenVideoGuide }) => {
  const { t } = useLanguage();
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [rotationInterval, setRotationInterval] = useState<number>(12); // seconds per category
  const [activeChannelId, setActiveChannelId] = useState<string>('custom-farm-video');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [showChannelPicker, setShowChannelPicker] = useState<boolean>(false);
  const [customFileLoaded, setCustomFileLoaded] = useState<boolean>(true);
  const [customVideoBlobUrl, setCustomVideoBlobUrl] = useState<string | null>(null);
  const [isFading, setIsFading] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const categoryChannels = VIDEO_CHANNELS.filter((c) => c.category !== 'custom');

  // Auto-rotate sequence across the 3 categories: Aerial -> Underwater -> Shallows
  useEffect(() => {
    if (!autoRotate || customFileLoaded) return;

    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveChannelId((prevId) => {
          const currentIndex = categoryChannels.findIndex((c) => c.id === prevId);
          const nextIndex = (currentIndex + 1) % categoryChannels.length;
          return categoryChannels[nextIndex].id;
        });
        setTimeout(() => setIsFading(false), 300);
      }, 400);
    }, rotationInterval * 1000);

    return () => clearInterval(timer);
  }, [autoRotate, customFileLoaded, rotationInterval, categoryChannels]);

  const activeChannel =
    VIDEO_CHANNELS.find((c) => c.id === activeChannelId) || VIDEO_CHANNELS[0];

  const currentVideoSrc =
    activeChannel.id === 'custom-farm-video' && customVideoBlobUrl
      ? customVideoBlobUrl
      : activeChannel.url;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleCustomFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomVideoBlobUrl(url);
      setCustomFileLoaded(true);
      setActiveChannelId('custom-farm-video');
      setVideoError(false);
      setIsPlaying(true);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      setCustomVideoBlobUrl(url);
      setCustomFileLoaded(true);
      setActiveChannelId('custom-farm-video');
      setVideoError(false);
      setIsPlaying(true);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Ensure video autoplays smoothly when channel changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay policies may catch, muted is set by default
          });
      }
    }
    setVideoError(false);
  }, [activeChannelId, customVideoBlobUrl]);

  return (
    <section
      id="hero"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A192F] text-white"
    >
      {/* Hidden File Input for direct video drop-in */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleCustomFileUpload}
        accept="video/mp4,video/webm,video/ogg"
        className="hidden"
      />

      {/* Background Video Layer with Fallback & Seamless Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          key={currentVideoSrc}
          onError={() => {
            if (activeChannel.id === 'custom-farm-video' && !customVideoBlobUrl) {
              setVideoError(true);
            }
          }}
          className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.12]"
          poster={activeChannel.poster}
        >
          <source src={currentVideoSrc} type="video/mp4" />
        </video>

        {/* Golden Hour / Deep Coastal Oceanic Gradient Overlay for Geometric Balance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E48]/90 via-[#0F285C]/75 to-[#0A192F]/95"></div>

        {/* Golden Hour Warm Ambient Accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-teal-500/10 pointer-events-none"></div>

        {/* Geometric Grid Texture Accent */}
        <div className="absolute inset-0 opacity-15 geometric-grid-dark pointer-events-none"></div>
      </div>

      {/* Video Control Bar & Channel Switcher (Top Right floating) */}
      <div className="absolute top-4 right-4 z-20 hidden md:flex items-center gap-2 bg-[#0A192F]/80 backdrop-blur-md border border-slate-700/80 p-1.5 rounded-sm shadow-xl">
        <button
          onClick={() => setShowChannelPicker(!showChannelPicker)}
          className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-sm transition-colors cursor-pointer border border-slate-600/50"
          title="Switch cinematic background angle"
        >
          <Film className="w-3 h-3 text-teal-400" />
          <span>{activeChannel.name.split(' ')[0]} {activeChannel.name.split(' ')[1]}</span>
          <Layers className="w-2.5 h-2.5 ml-0.5 text-slate-400" />
        </button>

        <button
          onClick={togglePlay}
          className="p-1.5 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-sm transition-colors cursor-pointer border border-slate-600/50"
          title={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-teal-400" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-1.5 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-sm transition-colors cursor-pointer border border-slate-600/50"
          title={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-3 h-3 text-slate-400" /> : <Volume2 className="w-3 h-3 text-teal-400" />}
        </button>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 hover:text-white bg-amber-950/40 hover:bg-amber-900/60 rounded-sm transition-colors cursor-pointer border border-amber-600/40"
          title="Drop in or upload custom video file"
        >
          <UploadCloud className="w-3 h-3 text-amber-400" />
          <span>Drop MP4</span>
        </button>
      </div>

      {/* Floating Channel Selector Dropdown */}
      {showChannelPicker && (
        <div className="absolute top-16 right-4 z-30 w-80 bg-[#0A192F] border border-blue-900/80 shadow-2xl p-3 rounded-sm text-left animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <span>Cinematic Ambient Angles</span>
            <span className="text-teal-400 font-mono">1080p 30fps</span>
          </div>

          <div className="space-y-1.5">
            {VIDEO_CHANNELS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChannelId(ch.id);
                  setShowChannelPicker(false);
                }}
                className={`w-full text-left p-2 rounded-sm text-xs transition-colors flex items-start gap-2.5 cursor-pointer ${
                  activeChannelId === ch.id
                    ? 'bg-blue-900/80 text-white border border-teal-500/50 font-bold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white border border-transparent'
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-[11px] uppercase tracking-wider">{ch.name}</div>
                  <div className="text-[10px] text-slate-400 font-normal mt-0.5 leading-snug">
                    {ch.description}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-teal-400 hover:underline flex items-center gap-1 font-bold uppercase tracking-wider"
            >
              <UploadCloud className="w-3 h-3" />
              <span>Upload Video File</span>
            </button>
            <button
              onClick={() => setShowChannelPicker(false)}
              className="text-slate-400 hover:text-white uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Farm Video Indicator & Angle Category Switcher Badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 max-w-2xl">
          {/* Active Status Badge with Auto-Loop Indicator */}
          <div className="inline-flex items-center gap-2 bg-[#0F285C]/90 text-blue-200 border border-blue-400/30 px-3 py-1 text-xs backdrop-blur-md rounded-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {autoRotate ? 'Auto-Cycling 3 Angles' : 'Angle Locked'}
            </span>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`text-[9px] px-1.5 py-0.5 uppercase tracking-wider rounded-none font-bold border transition-colors ${
                autoRotate
                  ? 'bg-teal-500/20 text-teal-300 border-teal-400/40 hover:bg-teal-500/30'
                  : 'bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600'
              }`}
              title="Toggle automatic cycling through the 3 video angles"
            >
              {autoRotate ? 'Loop On' : 'Loop Off'}
            </button>
          </div>

          {/* Video Selection Chips */}
          <div className="inline-flex items-center gap-1 bg-[#0A192F]/80 p-1 border border-slate-700/80 rounded-sm">
            {VIDEO_CHANNELS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChannelId(ch.id);
                  setAutoRotate(false);
                }}
                className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeChannelId === ch.id
                    ? ch.id === 'custom-farm-video'
                      ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400'
                      : 'bg-teal-600 text-white shadow-sm ring-1 ring-teal-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className="text-[8px] opacity-75 font-mono">{idx + 1}</span>
                <span>{ch.id === 'custom-farm-video' ? '★ Farm Hero MP4' : ch.category === 'aerial' ? 'Aerial' : ch.category === 'underwater' ? 'Underwater' : 'Shallows'}</span>
              </button>
            ))}
          </div>

          {/* Media Guide / Upload Helpers */}
          <div className="inline-flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-amber-300 hover:text-white font-bold text-[10px] uppercase tracking-wider bg-amber-950/40 border border-amber-500/30 px-2 py-1 rounded-sm flex items-center gap-1 cursor-pointer transition-colors"
            >
              <UploadCloud className="w-3 h-3" />
              <span>Drop MP4</span>
            </button>
            <button
              onClick={onOpenVideoGuide}
              className="text-teal-300 hover:text-white font-bold text-[10px] uppercase tracking-wider bg-blue-950/40 border border-blue-400/30 px-2 py-1 rounded-sm flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Guide</span>
              <HelpCircle className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Eyebrow */}
        <span className="text-teal-400 font-bold text-xs uppercase tracking-[0.3em] mb-3 block mt-8">
          {t('hero.tagline')}
        </span>

        {/* Wordmark & Main Tagline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-outfit uppercase max-w-4xl leading-[1.05] mb-8">
          {t('hero.title').split('. ').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}{i < arr.length - 1 ? '.' : ''}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        {/* Brand Circular Logo Emblem Overlay */}
        <div
          className="relative mb-7 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 650, behavior: 'smooth' })}
        >
          <div className="relative bg-white rounded-full p-2 sm:p-3 shadow-2xl border-2 border-blue-900 ring-4 ring-white/20 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <FPLogo className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40" />
          </div>
          {/* Subtle Geometric Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white text-[9px] sm:text-[10px] font-bold px-3 py-0.5 uppercase tracking-[0.2em] border border-teal-400/40 whitespace-nowrap shadow-sm">
            Est. Coastal Excellence
          </div>
        </div>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl leading-relaxed font-normal">
          {t('hero.desc')}
        </p>

        {/* Hero CTA Buttons with Geometric Precision */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-3.5 transition-colors rounded-sm shadow-sm"
          >
            <span>{t('hero.explore')}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-3.5 border border-white/80 transition-colors rounded-sm cursor-pointer"
          >
            <span>{t('nav.contact')}</span>
          </button>
        </div>

        {/* Trust Badges Strip with Geometric Balance Grid */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {FARM_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm p-4 border border-white/10 text-center hover:bg-white/10 transition-colors rounded-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-outfit">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-blue-200/70 mt-0.5 hidden sm:block">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Geometric Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-[#1E3A8A] to-teal-500"></div>
    </section>
  );
};

