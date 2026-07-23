'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JOB_OPENINGS, JobOpening } from '@/lib/data';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CareersSection() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applied, setApplied] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => {
      setApplied(false);
      setSelectedJob(null);
    }, 2500);
  };

  return (
    <section id="careers" className="py-24 bg-[#050811] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
            <Briefcase className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Join Our 15,000+ Strong Team
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Careers & <span className="gradient-text-cyan">Recruitment Hub</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Build your career with Action Group's facility management division. We offer competitive salaries, PF/ESI, ₹2L insurance, merit scholarships for kids, and clear promotion pathways.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JOB_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-3xl glass-card border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 rounded-md border border-sky-500/30">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-2">
                  {job.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>Exp: {job.experience}</span>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed line-clamp-3">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-[10px] bg-slate-900 text-slate-300 rounded border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-sky-500/20 text-slate-200 hover:text-sky-300 font-semibold text-xs rounded-xl border border-white/10 hover:border-sky-500/40 transition-all flex items-center justify-center gap-2"
              >
                <span>Quick Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Drawer Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#0D1424] rounded-3xl overflow-hidden border border-sky-500/30 shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {applied ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">Application Received!</h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Our HR recruitment desk at Cyberabad HQ will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply}>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
                    Apply for Position
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mb-4">
                    {selectedJob.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Subhani Rao"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Total Experience</label>
                        <input
                          type="text"
                          placeholder="e.g. 5 Years"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Brief Note / Skills</label>
                      <textarea
                        rows={2}
                        placeholder="Mention relevant certifications, ex-navy status, or experience..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 font-bold text-white text-sm rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
