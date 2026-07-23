'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { formatNumber } from '@/lib/utils';
import { Calculator, Building2, Users, Zap, ShieldCheck, CheckSquare, Sparkles, ArrowRight, DollarSign } from 'lucide-react';

interface FacilityCalculatorProps {
  onOpenQuoteModal: (customNote?: string) => void;
}

export default function FacilityCalculator({ onOpenQuoteModal }: FacilityCalculatorProps) {
  const [propertyType, setPropertyType] = useState<'it-park' | 'commercial' | 'residential' | 'healthcare' | 'industrial'>('it-park');
  const [sqft, setSqft] = useState<number>(150000);
  const [shifts, setShifts] = useState<number>(3);

  const [selectedServices, setSelectedServices] = useState<{
    mep: boolean;
    housekeeping: boolean;
    security: boolean;
    stp: boolean;
    landscape: boolean;
    helpdesk: boolean;
  }>({
    mep: true,
    housekeeping: true,
    security: true,
    stp: true,
    landscape: false,
    helpdesk: true,
  });

  const propertyMultiplier = useMemo(() => {
    switch (propertyType) {
      case 'it-park': return 1.2;
      case 'commercial': return 1.1;
      case 'healthcare': return 1.5;
      case 'industrial': return 1.3;
      case 'residential': return 0.9;
      default: return 1.0;
    }
  }, [propertyType]);

  const calculations = useMemo(() => {
    let housekeeperCount = selectedServices.housekeeping ? Math.ceil((sqft / 12000) * propertyMultiplier) : 0;
    let securityCount = selectedServices.security ? Math.ceil((sqft / 25000) * shifts * (propertyType === 'healthcare' ? 1.4 : 1)) : 0;
    let mepEngineerCount = selectedServices.mep ? Math.ceil((sqft / 50000) * (shifts > 1 ? 2 : 1)) : 0;
    let stpTechnicianCount = selectedServices.stp ? 2 : 0;
    let landscapeCount = selectedServices.landscape ? Math.ceil(sqft / 80000) : 0;
    let helpdeskCount = selectedServices.helpdesk ? 2 : 0;

    const totalStaff = housekeeperCount + securityCount + mepEngineerCount + stpTechnicianCount + landscapeCount + helpdeskCount;
    
    // Cost estimations in INR Lakhs per month (approx range)
    const estMonthlyBudgetMin = Math.round((totalStaff * 24000) / 100000);
    const estMonthlyBudgetMax = Math.round((totalStaff * 29000) / 100000);

    // Energy & Manpower optimization savings estimate
    const estAnnualSavingsLakhs = Math.round((sqft / 100000) * 4.5 * propertyMultiplier);

    return {
      housekeeperCount,
      securityCount,
      mepEngineerCount,
      stpTechnicianCount,
      landscapeCount,
      helpdeskCount,
      totalStaff,
      estMonthlyBudgetMin,
      estMonthlyBudgetMax,
      estAnnualSavingsLakhs,
    };
  }, [sqft, propertyType, selectedServices, shifts, propertyMultiplier]);

  const toggleService = (key: keyof typeof selectedServices) => {
    setSelectedServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCustomQuote = () => {
    const summary = `Estimated Scope: ${formatNumber(sqft)} Sq.Ft (${propertyType.toUpperCase()}), ${shifts} Shifts. Required Staff: ~${calculations.totalStaff} Headcount. Services: ${Object.entries(selectedServices).filter(([_, v]) => v).map(([k]) => k.toUpperCase()).join(', ')}`;
    onOpenQuoteModal(summary);
  };

  return (
    <section id="calculator" className="py-24 bg-[#080C16] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4">
            <Calculator className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Interactive ROI & Manpower Estimator
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Calculate Your <span className="gradient-text-emerald">Facility Requirements</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Tailor your real estate area size, shift coverage, and service modules to calculate instant recommended headcount, SLAs, and energy optimization savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
            
            {/* 1. Property Type */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
                1. Select Property Vertical
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'it-park', label: 'Commercial IT Park', icon: '🏢' },
                  { id: 'commercial', label: 'Office Tower', icon: '🏬' },
                  { id: 'healthcare', label: 'Hospital Campus', icon: '🏥' },
                  { id: 'residential', label: 'Gated Township', icon: '🏡' },
                  { id: 'industrial', label: 'Factory / Logistics', icon: '🏭' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      propertyType === type.id
                        ? 'bg-sky-500/20 border-sky-500/60 text-white shadow-lg shadow-sky-500/10'
                        : 'bg-slate-900/60 border-white/10 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xl block mb-1">{type.icon}</span>
                    <span className="text-xs font-semibold font-heading block">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Square Footage Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  2. Built-Up Area (Sq.Ft)
                </label>
                <span suppressHydrationWarning className="px-3 py-1 bg-slate-900 rounded-lg border border-white/10 text-sm font-extrabold text-sky-400 font-heading">
                  {formatNumber(sqft)} Sq.Ft
                </span>
              </div>
              <input
                type="range"
                min={20000}
                max={1500000}
                step={10000}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-2">
                <span>20,000 Sq.Ft</span>
                <span>500,000 Sq.Ft</span>
                <span>1,500,000 Sq.Ft</span>
              </div>
            </div>

            {/* 3. Shifts */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
                3. Operations Coverage Shifts
              </label>
              <div className="flex gap-3">
                {[
                  { shifts: 1, label: 'Single Shift (8 Hours)' },
                  { shifts: 2, label: '2 Shifts (16 Hours)' },
                  { shifts: 3, label: '24/7 Coverage (3 Shifts)' },
                ].map((s) => (
                  <button
                    key={s.shifts}
                    onClick={() => setShifts(s.shifts)}
                    className={`flex-1 py-2.5 px-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                      shifts === s.shifts
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 border-sky-400 text-white shadow-lg'
                        : 'bg-slate-900/60 border-white/10 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Service Modules Checklist */}
            <div>
              <label className="block text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
                4. Select Required Service Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'mep', label: 'MEP & Technical Operations', desc: 'HVAC, HT Panels, DG Backup' },
                  { key: 'housekeeping', label: 'Housekeeping & Sanitation', desc: 'Mechanized Floor Scrubbing' },
                  { key: 'security', label: 'Physical Security Guarding', desc: 'Ex-Military Supervision' },
                  { key: 'stp', label: 'STP & WTP Plant Ops', desc: 'Zero Liquid Discharge' },
                  { key: 'landscape', label: 'Horticulture & Landscape', desc: 'Lawn & Indoor Green Walls' },
                  { key: 'helpdesk', label: 'Digital Helpdesk Kiosk', desc: 'Visitor & SLA Management' },
                ].map((svc) => {
                  const isChecked = selectedServices[svc.key as keyof typeof selectedServices];
                  return (
                    <button
                      key={svc.key}
                      onClick={() => toggleService(svc.key as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-slate-800/90 border-sky-500/50 text-white'
                          : 'bg-slate-900/40 border-white/10 text-slate-400 opacity-70'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 border transition-all ${
                          isChecked ? 'bg-sky-500 border-sky-400 text-white' : 'border-slate-600'
                        }`}
                      >
                        {isChecked && <CheckSquare className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-heading">{svc.label}</div>
                        <div className="text-[10px] text-slate-400">{svc.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Results Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sky-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0D1424] to-[#080C16]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                    Calculated Proposal Breakdown
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-white">
                    Estimated Staff & SLA
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              {/* Headcount Breakdown */}
              <div className="py-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">Housekeeping Executives</span>
                  <span className="text-sm font-bold text-white font-heading">{calculations.housekeeperCount} Staff</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">Security Personnel (Ex-Military)</span>
                  <span className="text-sm font-bold text-white font-heading">{calculations.securityCount} Staff</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">MEP Engineers & Technicians</span>
                  <span className="text-sm font-bold text-white font-heading">{calculations.mepEngineerCount} Staff</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">STP/WTP Plant Operators</span>
                  <span className="text-sm font-bold text-white font-heading">{calculations.stpTechnicianCount} Staff</span>
                </div>
                {calculations.landscapeCount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Horticulture Staff</span>
                    <span className="text-sm font-bold text-white font-heading">{calculations.landscapeCount} Staff</span>
                  </div>
                )}
                {calculations.helpdeskCount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Front Desk & Helpdesk Desk</span>
                    <span className="text-sm font-bold text-white font-heading">{calculations.helpdeskCount} Staff</span>
                  </div>
                )}
              </div>

              {/* Total Headcount Highlight */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-sky-500/40 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                    Total Recommended Workforce
                  </span>
                  <span className="text-3xl font-extrabold font-heading text-white">
                    {calculations.totalStaff} <span className="text-sky-400 text-lg">Professionals</span>
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                  100% In-House
                </div>
              </div>

              {/* Savings & Monthly Cost Estimate */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                  <span className="text-[10px] text-slate-400 block uppercase">Est. Monthly Retainer</span>
                  <span className="text-lg font-bold text-emerald-400 font-heading">
                    ₹{calculations.estMonthlyBudgetMin}-{calculations.estMonthlyBudgetMax} L
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                  <span className="text-[10px] text-slate-400 block uppercase">Est. Energy Savings</span>
                  <span className="text-lg font-bold text-amber-400 font-heading">
                    ₹{calculations.estAnnualSavingsLakhs} L / Yr
                  </span>
                </div>
              </div>

              {/* Call to action */}
              <button
                onClick={handleCustomQuote}
                className="w-full py-4 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 font-bold text-white text-sm rounded-xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Lock In Proposal & Request Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
