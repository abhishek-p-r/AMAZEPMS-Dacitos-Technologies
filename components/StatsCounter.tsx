'use client';

import { motion } from 'framer-motion';
import { COMPANY_STATS } from '@/lib/data';
import { formatNumber } from '@/lib/utils';
import { Users, Building, ShieldCheck, Calendar } from 'lucide-react';

const iconsMap: Record<string, any> = {
  workforce: Users,
  area: Building,
  clients: ShieldCheck,
  years: Calendar,
};

export default function StatsCounter() {
  return (
    <section className="py-16 bg-[#080C16] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_STATS.map((stat, idx) => {
            const Icon = iconsMap[stat.id] || Users;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl glass-card border border-white/10 hover:border-sky-500/30 group transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Metrics #0{idx + 1}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight flex items-baseline gap-1">
                  <span suppressHydrationWarning>{formatNumber(stat.value)}</span>
                  <span className="text-sky-400 text-2xl sm:text-3xl">{stat.suffix}</span>
                </div>

                <h3 className="mt-2 text-sm font-bold text-slate-200 uppercase tracking-wide">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
