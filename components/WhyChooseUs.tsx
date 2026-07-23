'use client';

import { motion } from 'framer-motion';
import { WHY_CHOOSE_POINTS } from '@/lib/data';
import { Building2, Users, ShieldAlert, Award, FileCheck, Zap, CheckCircle2, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, any> = {
  Building2,
  Users,
  ShieldAlert,
  Award,
  FileCheck,
  Zap,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#050811] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Operational Excellence & Trust
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Why Leading Enterprises Choose <span className="gradient-text-emerald">Amaze PMS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Founded in 2001 by an Indian Navy veteran, Amaze PMS sets the gold standard in Indian integrated facility management through 100% in-house workforce and staff welfare initiatives.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_POINTS.map((item, idx) => {
            const Icon = iconMap[item.icon] || FileCheck;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-8 rounded-3xl glass-card border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all shadow-lg shadow-emerald-500/10">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ISO 9001:2015 Standard Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Staff Welfare Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl p-8 sm:p-10 glass-card border border-sky-500/30 relative overflow-hidden bg-gradient-to-r from-slate-950 via-[#0D1424] to-slate-950 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Industry-Leading Staff Welfare Standards
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Empowered Workforce = Unmatched Service Quality
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                We believe exceptional facility management starts with employee dignity. Amaze PMS provides every staff member with ₹2 Lakh health insurance, family education scholarships up to ₹1 Lakh, festival rewards, and emergency funeral assistance.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
                <span className="text-2xl font-extrabold text-amber-400 font-heading block">₹2 Lakhs</span>
                <span className="text-[11px] text-slate-400">Insurance Cover</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
                <span className="text-2xl font-extrabold text-sky-400 font-heading block">₹1 Lakh</span>
                <span className="text-[11px] text-slate-400">Child Merit Award</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
