'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2, Building2, Phone, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote?: string;
}

export default function ContactQuoteModal({ isOpen, onClose, initialNote }: ContactQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: 'IT Park / Tech Tower',
    areaSqFt: '100,000+',
    city: 'Hyderabad',
    servicesNeeded: ['MEP Operations', 'Housekeeping', 'Security'],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialNote) {
      setFormData((prev) => ({ ...prev, notes: initialNote }));
    }
  }, [initialNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const toggleServiceNeeded = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(svc);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== svc)
          : [...prev.servicesNeeded, svc],
      };
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0D1424] rounded-3xl overflow-hidden border border-sky-500/40 shadow-2xl p-6 sm:p-8 my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-500/40 shadow-xl shadow-emerald-500/20 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-white">Proposal Request Received!</h3>
                <p className="text-base text-slate-300 max-w-md mx-auto mt-3">
                  Thank you for reaching out to Amaze PMS. Our Senior Facility Consultant will review your specs and send a customized proposal within 24 hours.
                </p>
                <div className="mt-6 text-xs text-sky-400 font-semibold">
                  For immediate assistance call: +91 9100694137
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    Instant Facility Proposal Inquiry
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-6">
                  Transform Your Real Estate Operations
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Subhani Abdul"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Corporate / Building Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Cyber Towers Campus"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Official Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vp.infra@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9100694137"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Property Vertical
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      >
                        <option>IT Park / Tech Tower</option>
                        <option>Commercial Office</option>
                        <option>Gated Residential Township</option>
                        <option>Hospital Campus</option>
                        <option>Industrial Plant</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Hyderabad / Bengaluru / Pan-India"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Select Required Services
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'MEP Operations',
                        'Housekeeping',
                        'Security Guarding',
                        'STP / WTP Care',
                        'Landscaping',
                        'Helpdesk Kiosks',
                      ].map((svc) => {
                        const active = formData.servicesNeeded.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleServiceNeeded(svc)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                              active
                                ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                                : 'bg-slate-900 border-white/10 text-slate-400'
                            }`}
                          >
                            {active ? '✓ ' : '+ '}{svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Notes / Estimated Sq.Ft Scope
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Add details about property size, shifts, or specific SLAs needed..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 font-bold text-white text-sm rounded-xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Request Custom Proposal</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
