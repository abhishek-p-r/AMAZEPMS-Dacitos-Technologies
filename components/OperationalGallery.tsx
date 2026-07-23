'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES, GalleryItem } from '@/lib/data';
import { Camera, MapPin, Maximize2, X } from 'lucide-react';

export default function OperationalGallery() {
  const [filter, setFilter] = useState<'all' | 'mep' | 'security' | 'housekeeping' | 'landscape'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  return (
    <section id="gallery" className="py-24 bg-[#080C16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
            <Camera className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              On-Ground Operations Showcase
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Real Impact Across <span className="gradient-text-cyan">India Real Estate</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Explore authentic photographs of our technical engineers, security drills, mechanized housekeeping, and Zero Liquid Discharge STP facilities.
          </p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'mep', label: 'MEP & Technical' },
              { id: 'security', label: 'Security Command' },
              { id: 'housekeeping', label: 'Housekeeping' },
              { id: 'landscape', label: 'Landscaping' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  filter === f.id
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveImage(img)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-sky-500/50 shadow-xl"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero_building.png'; }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1 text-[11px] text-sky-400 font-semibold mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{img.location}</span>
                </div>
                <h3 className="text-base font-bold font-heading text-white group-hover:text-sky-300 transition-colors">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-[#0D1424] rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-4 sm:p-6"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 text-slate-300 hover:text-white bg-slate-900 rounded-full border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black mb-4">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero_building.png'; }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-sky-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeImage.location}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {activeImage.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">{activeImage.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
