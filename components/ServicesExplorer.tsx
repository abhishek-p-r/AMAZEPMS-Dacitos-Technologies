'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA, ServiceItem } from '@/lib/data';
import ServiceImage from './ServiceImage';
import {
  Sparkles,
  Wrench,
  ShieldCheck,
  Droplets,
  Trees,
  Bug,
  Headphones,
  Car,
  ArrowRight,
  CheckCircle2,
  X,
  Layers,
} from 'lucide-react';

const iconComponents: Record<string, any> = {
  Sparkles,
  Wrench,
  ShieldCheck,
  Droplets,
  Trees,
  Bug,
  Headphones,
  Car,
};

interface ServicesExplorerProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function ServicesExplorer({ onOpenQuoteModal }: ServicesExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hard' | 'soft' | 'specialized'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-24 bg-[#050811] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
            <Layers className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Comprehensive Facility Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Integrated Services <span className="gradient-text-cyan">Built In-House</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            From 24/7 technical MEP chillers to ex-military security guarding and ZLD sewage treatment plants—we own and manage 100% of our service delivery.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 max-w-xl mx-auto">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'hard', label: 'Hard Services (MEP)' },
              { id: 'soft', label: 'Soft Services' },
              { id: 'specialized', label: 'Specialized Solutions' },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = iconComponents[service.iconName] || Layers;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl glass-card overflow-hidden flex flex-col justify-between border border-white/10 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <ServiceImage
                    src={service.image}
                    alt={service.title}
                    iconName={service.iconName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* Icon Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-sky-400 shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Stat pill */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-sky-500/20 backdrop-blur-md border border-sky-500/40 text-[11px] font-bold text-sky-300">
                    {service.stats.value}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 rounded border border-white/10">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-sky-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <ul className="space-y-1.5 mb-4">
                      {service.highlights.slice(0, 2).map((item, i) => (
                        <li key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900/80 hover:bg-sky-500/20 text-slate-200 hover:text-sky-300 font-semibold text-xs border border-white/10 hover:border-sky-500/40 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Explore Service Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Details Drawer / Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0D1424] rounded-3xl overflow-hidden border border-sky-500/30 shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                  {iconComponents[selectedService.iconName] ? (
                    (() => {
                      const Icon = iconComponents[selectedService.iconName];
                      return <Icon className="w-6 h-6" />;
                    })()
                  ) : (
                    <Layers className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 rounded border border-sky-500/30">
                    {selectedService.category} Service Scope
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-950">
                <ServiceImage
                  src={selectedService.image}
                  alt={selectedService.title}
                  iconName={selectedService.iconName}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="mb-6 bg-slate-900/60 rounded-2xl p-4 border border-white/10">
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
                  Service Deliverables & SOP Checklist
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="text-xs text-slate-400">{selectedService.stats.label}</div>
                  <div className="text-xl font-bold text-white font-heading">
                    {selectedService.stats.value}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteModal(title);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 font-bold text-white text-xs sm:text-sm rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Proposal For {selectedService.title}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
