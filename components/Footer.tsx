'use client';

import { Building2, Phone, Mail, MapPin, Send, ShieldCheck, Heart } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#03050B] text-slate-400 border-t border-white/10 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-radial-glow pointer-events-none opacity-40 blur-3xl" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 p-[1px]">
                <div className="w-full h-full bg-[#080C14] rounded-[11px] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                  AMAZE<span className="text-sky-400">PMS</span>
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Action Group Subsidiary
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Amaze Property Management Solutions Pvt. Ltd. (AMAZE) is a solely owned subsidiary of Action Group, founded in 2001 by Navy Veteran Mr. Subhani Abdul. Providing global-standard integrated facility solutions across India with 15,000+ certified professionals.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3.5 py-2 rounded-xl border border-emerald-500/20 inline-flex">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001:2015 & OHSAS Certified Operations</span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">
              Core Service Verticals
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  MEP & Technical Maintenance (HVAC, HT Switchgears)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Ex-Military Physical & Guarding Security
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Institutional Housekeeping & Deep Sanitation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  STP & WTP Zero Liquid Discharge Operations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Horticulture & Landscape Garden Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Helpdesk Management & Concierge Reception
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & HQ Details */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">
              Corporate Headquarters
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>
                  Cyberabad, Telangana - INDIA<br />
                  PAN-India Operational Footprint
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+919100694137" className="hover:text-white font-semibold">
                  +91 9100694137
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@amazepms.com" className="hover:text-white">
                  info@amazepms.com
                </a>
              </li>
            </ul>

            <button
              onClick={onOpenQuoteModal}
              className="mt-5 px-4 py-2.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 rounded-xl text-xs font-semibold transition-all w-full text-center"
            >
              Get Custom Audit & Proposal
            </button>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to facility management insights and compliance updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="your@company.com"
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:border-sky-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Amaze Property Management Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-slate-300 transition-colors">ISO Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
