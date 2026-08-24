import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'colored' | 'outline' | 'monochrome-white';
  showText?: boolean;
  size?: number | string;
}

export const FPLogo: React.FC<LogoProps> = ({
  className = 'w-32 h-32',
  variant = 'colored',
  showText = true,
}) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center select-none rounded-full overflow-hidden ${className}`}>
      <img
        src="/FP AQUAFARM COLORED.png"
        alt="FP Aquafarm Logo"
        className="w-full h-full aspect-square object-cover scale-[1.15] drop-shadow-sm transition-transform duration-300"
      />
    </div>
  );
};

export const FishIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#14B8A6',
}) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 15,45 C 30,20 70,20 88,40 C 78,55 78,65 88,80 C 70,80 30,80 15,55 Z"
      fill={color}
      fillOpacity="0.2"
      stroke="#1E3A8A"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M 85,45 Q 98,30 92,20 Q 80,35 75,40"
      fill={color}
      stroke="#1E3A8A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M 35,28 C 45,15 65,18 70,30"
      stroke="#1E3A8A"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="28" cy="45" r="3.5" fill="#1E3A8A" />
    <path d="M 40,40 C 45,50 45,60 40,70" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="45" r="2" fill="#1E3A8A" />
    <circle cx="60" cy="42" r="2.2" fill="#1E3A8A" />
    <circle cx="55" cy="55" r="2.2" fill="#1E3A8A" />
  </svg>
);

export const CrabIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#EA580C',
}) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse
      cx="50"
      cy="55"
      rx="24"
      ry="16"
      fill={color}
      fillOpacity="0.25"
      stroke="#1E3A8A"
      strokeWidth="4"
    />
    {/* Claws */}
    <path
      d="M 30,50 C 15,45 10,25 25,18 C 35,22 35,38 32,45"
      fill={color}
      fillOpacity="0.3"
      stroke="#1E3A8A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M 70,50 C 85,45 90,25 75,18 C 65,22 65,38 68,45"
      fill={color}
      fillOpacity="0.3"
      stroke="#1E3A8A"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    {/* Eyes */}
    <circle cx="43" cy="42" r="2.5" fill="#1E3A8A" />
    <circle cx="57" cy="42" r="2.5" fill="#1E3A8A" />
    {/* Legs */}
    <path d="M 28,62 Q 15,65 12,78 M 28,68 Q 18,78 16,88 M 72,62 Q 85,65 88,78 M 72,68 Q 82,78 84,88" stroke="#1E3A8A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const ShrimpIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#F43F5E',
}) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 35,30 C 65,20 85,40 85,65 C 85,85 65,85 50,75 C 40,65 45,50 35,45 C 20,40 12,42 8,40 C 15,55 30,55 38,50"
      fill={color}
      fillOpacity="0.25"
      stroke="#1E3A8A"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <circle cx="30" cy="42" r="2.5" fill="#1E3A8A" />
    <path d="M 60,32 C 68,42 70,52 68,62 M 52,40 C 58,48 58,58 55,68" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 25,35 Q 10,25 5,15 M 28,40 Q 15,38 8,30" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const WaveDivider: React.FC<{ className?: string; color?: string; inverted?: boolean }> = ({
  className = 'w-full h-12',
  color = '#F8FAFC',
  inverted = false,
}) => (
  <div className={`w-full overflow-hidden leading-none ${className} ${inverted ? 'rotate-180' : ''}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-full"
    >
      <path
        d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
        fill={color}
      />
    </svg>
  </div>
);
