'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, Wrench, Users, Sparkles, Play, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#050811]">
      {/* Dynamic Glow & Particle Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-80" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-badge mb-6"
            >
              <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs font-semibold tracking-wide uppercase">
                Action Group Subsidiary • Founded 2001
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.15]"
            >
              Next-Gen <span className="gradient-text-cyan">Integrated Facility</span> & Property Solutions
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Empowering <strong className="text-white font-semibold">20 Million+ Sq.Ft</strong> across India with a <strong className="text-sky-400 font-semibold">15,000+ strong in-house workforce</strong>. Ex-military led security, 24/7 technical MEP operations, automated housekeeping, and ZLD water treatment.
            </motion.p>

            {/* Quick Feature Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                '⚡ 99.98% MEP Uptime',
                '🛡️ 100% Direct In-House Staff',
                '🌿 ISO & PCB Compliant STPs',
                '🏆 200+ Enterprise Clients',
              ].map((chip, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  {chip}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 text-white font-bold rounded-xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-base"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-7 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl border border-white/10 hover:border-sky-500/40 transition-all flex items-center justify-center gap-2.5 text-base"
              >
                <Wrench className="w-4 h-4 text-sky-400" />
                <span>Estimate Manpower Cost</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase & Floating Feature Cards */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Main Visual Glass Container */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-white/15 shadow-2xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/images/hero_building.png"
                    alt="Amaze PMS Real Estate Property Operations"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero_building.png'; }}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-90" />

                  {/* Play Video Modal Trigger */}
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-sky-500/30 backdrop-blur-md border border-sky-400/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500/50 transition-all shadow-xl shadow-sky-500/30">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </button>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                      <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Live Operations Command Center
                      </span>
                      <span className="bg-sky-500/20 text-sky-400 px-2.5 py-1 rounded-md border border-sky-500/30">
                        Cyberabad HQ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 glass-card rounded-2xl border border-sky-500/30 shadow-2xl animate-float"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white font-heading">20M+ Sq.Ft</div>
                  <div className="text-xs text-slate-400">Real Estate Managed</div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 glass-card rounded-2xl border border-emerald-500/30 shadow-2xl animate-float-delayed"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white font-heading">15,000+</div>
                  <div className="text-xs text-slate-400">In-House Staff Workforce</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 px-3 py-1 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-slate-700"
            >
              Close
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/be0ULYyOGdE?autoplay=1"
                title="Amaze Property Management Solutions Corporate Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
