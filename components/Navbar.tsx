'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Phone, Menu, X, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['services', 'calculator', 'why-us', 'gallery', 'careers', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Calculator', href: '#calculator', id: 'calculator' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Careers', href: '#careers', id: 'careers' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-2xl shadow-sky-950/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all">
              <div className="w-full h-full bg-[#080C14] rounded-[11px] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                  AMAZE<span className="text-sky-400">PMS</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                  ISO Certified
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Facility & Property Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-sky-500/20 border border-sky-500/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919100694137"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-normal">24/7 Support</span>
                <span>+91 9100694137</span>
              </div>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-sm transition-all active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 rounded-xl group-hover:opacity-90 transition-opacity" />
              <span className="relative block px-5 py-2.5 bg-[#080C14] rounded-[11px] text-white flex items-center gap-2 group-hover:bg-opacity-80 transition-all">
                <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
                <span>Request Quote</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-lg"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900/80 rounded-xl border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-nav border-b border-white/10 px-4 pt-4 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-800/40 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-3">
                <a
                  href="tel:+919100694137"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200"
                >
                  <Phone className="w-5 h-5 text-sky-400" />
                  <div>
                    <span className="block text-xs text-slate-400">Call Us Anytime</span>
                    <span className="text-sm font-semibold">+91 9100694137</span>
                  </div>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 font-semibold text-white rounded-xl shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Customized Proposal</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
