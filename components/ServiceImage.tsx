'use client';

import { useState } from 'react';
import { Sparkles, Wrench, ShieldCheck, Droplets, Trees, Bug, Headphones, Car, Layers, Building2 } from 'lucide-react';

const iconComponents: Record<string, any> = {
  Sparkles,
  Wrench,
  ShieldCheck,
  Droplets,
  Trees,
  Bug,
  Headphones,
  Car,
  Building2,
};

interface ServiceImageProps {
  src: string;
  alt: string;
  className?: string;
  iconName?: string;
}

export default function ServiceImage({ src, alt, className = '', iconName = 'Building2' }: ServiceImageProps) {
  const [hasError, setHasError] = useState(false);
  const Icon = iconComponents[iconName] || Layers;

  if (hasError) {
    return (
      <div className={`relative w-full h-full bg-gradient-to-br from-slate-900 via-[#0D1424] to-slate-950 flex flex-col items-center justify-center p-6 border-b border-white/10 overflow-hidden ${className}`}>
        {/* Ambient radial glow */}
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        
        {/* Subtle decorative grid */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{
            backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }} 
        />

        <div className="relative z-10 w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 mb-2 shadow-lg shadow-sky-500/20 animate-pulse">
          <Icon className="w-6 h-6" />
        </div>

        <span className="relative z-10 text-xs font-bold text-slate-200 font-heading text-center tracking-wide">
          {alt}
        </span>
        <span className="relative z-10 text-[10px] text-sky-400 uppercase tracking-widest mt-1">
          Amaze PMS Operations
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
