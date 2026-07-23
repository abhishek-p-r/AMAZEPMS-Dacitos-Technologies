'use client';

import { CLIENTS_MARQUEE } from '@/lib/data';
import { ShieldCheck, Award } from 'lucide-react';

export default function ClientMarquee() {
  // Duplicate for seamless loop
  const marqueeItems = [...CLIENTS_MARQUEE, ...CLIENTS_MARQUEE, ...CLIENTS_MARQUEE];

  return (
    <section className="py-10 bg-slate-950/80 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold text-sky-400 tracking-widest uppercase flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-sky-400" />
          Trusted by 200+ Valued Partners Across Commercial Real Estate & Tech Parks
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Fades on Left & Right Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050811] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050811] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 py-2">
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900/60 border border-white/10 hover:border-sky-500/40 hover:bg-slate-800/60 transition-all flex-shrink-0 group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
              </div>
              <div>
                <span className="block font-bold text-sm text-slate-200 group-hover:text-white font-heading tracking-wide">
                  {client.logoText}
                </span>
                <span className="block text-[11px] text-slate-500 group-hover:text-sky-400 transition-colors">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
