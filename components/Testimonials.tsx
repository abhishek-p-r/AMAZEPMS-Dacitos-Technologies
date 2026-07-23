'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/data';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#080C16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
            <Quote className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Client Testimonials & Feedback
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Trusted by Leaders in <span className="gradient-text-cyan">Commercial Real Estate</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Hear from Vice Presidents of Infrastructure and Directors of Real Estate across India's premiere tech parks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-card border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold font-heading">
                    {t.metric}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero_building.png'; }}
                  className="w-full h-full rounded-full object-cover border border-sky-400/40"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-sm font-bold font-heading text-white">{t.name}</h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                  <div className="text-[11px] text-sky-400">{t.company} • {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
