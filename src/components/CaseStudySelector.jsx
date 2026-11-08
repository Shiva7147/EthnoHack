import React from 'react';
import { ETHNO_CASE_STUDIES } from '../data/ethnopharmData';
import { Leaf, Award, AlertTriangle, ShieldCheck } from 'lucide-react';

export function CaseStudySelector({ selectedId, onSelect }) {
  return (
    <div className="bg-[#FFFFFF] border-b border-[#E2E8F0] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5 text-[#2D4A3E]" />
            Core Curated Case Studies (Faculty of Pharmacy / NKUA Benchmark Taxa)
          </span>
          <span className="text-xs text-[#94A3B8] font-mono hidden sm:inline">
            Click to load bilingual text, taxonomy, chemistry & targets
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ETHNO_CASE_STUDIES.map(cs => {
            const isSelected = cs.id === selectedId;
            return (
              <button
                key={cs.id}
                onClick={() => onSelect(cs.id)}
                className={`text-left p-3.5 rounded-lg border transition-all relative ${
                  isSelected
                    ? 'border-[#2D4A3E] bg-[#EBF3EF]/40 shadow-xs ring-1 ring-[#2D4A3E]'
                    : 'border-[#E2E8F0] bg-[#FFFFFF] hover:border-slate-300 hover:bg-[#FBFBFA]'
                }`}
              >
                {/* Ancient greek badge */}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="font-greek text-sm font-semibold text-[#0F172A] tracking-wide">
                    {cs.ancientNameGreek}
                  </span>
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-[#475569] border border-slate-200">
                    {cs.botanicalFamily}
                  </span>
                </div>

                {/* Accepted Linnaean Binomial */}
                <div className="text-xs font-serif-scholarly italic font-medium text-[#1E3A2F] mb-1">
                  {cs.acceptedBinomial}
                </div>

                {/* Common folk name */}
                <div className="text-xs text-[#64748B] mb-2 font-sans truncate">
                  {cs.commonName}
                </div>

                {/* Status pill tags */}
                <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-100 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-emerald-800 font-medium">
                    <Award className="w-3 h-3 text-emerald-600" />
                    EMA Monograph
                  </span>
                  {cs.id === 'hypericum-perforatum' ? (
                    <span className="inline-flex items-center gap-1 text-red-700 font-mono ml-auto font-medium">
                      <AlertTriangle className="w-3 h-3 text-red-600" />
                      CYP3A4 Risk
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-slate-500 font-mono ml-auto">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Tier 1 Gold
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
