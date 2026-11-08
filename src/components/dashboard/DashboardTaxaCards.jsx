import React from 'react';
import { ETHNO_CASE_STUDIES } from '../../data/ethnopharmData';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export function DashboardTaxaCards({ selectedId, onSelect }) {
  return (
    <section id="taxa-cards" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332] block">
            FACULTY OF PHARMACY / NKUA BENCHMARK TAXA
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827] tracking-tight">
            Curated Mediterranean Flora
          </h2>
        </div>

        <div className="max-w-md space-y-2">
          <p className="text-sm text-[#5E6D64] leading-relaxed">
            Four deeply researched benchmark plants with complete provenance linking classical manuscripts to EMA clinical monographs.
          </p>
          <div className="text-xs font-mono text-[#134E35] font-semibold">
            Select any taxon to inspect bilingual text, chemistry & targets ↓
          </div>
        </div>
      </div>

      {/* 4 Cards Grid in BlooM Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ETHNO_CASE_STUDIES.map((plant) => {
          const isSelected = plant.id === selectedId;
          return (
            <div
              key={plant.id}
              onClick={() => onSelect(plant.id)}
              className={`group cursor-pointer bg-white rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'border-[#113827] ring-2 ring-[#113827] shadow-xl'
                  : 'border-[#E8E6DF] hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {/* Botanical Photo with Floating Badges */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#F6F5F0]">
                <img
                  src={plant.image}
                  alt={plant.acceptedBinomial}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Family badge top-left */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#113827] text-[10px] font-bold font-mono px-2.5 py-1 rounded-full shadow-2xs">
                  {plant.botanicalFamily}
                </div>

                {/* Status badge top-right */}
                <div className="absolute top-3 right-3">
                  {plant.id === 'hypericum-perforatum' ? (
                    <span className="bg-red-500 text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <AlertTriangle className="w-2.5 h-2.5" />
                      CYP3A4 Risk
                    </span>
                  ) : (
                    <span className="bg-emerald-600 text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      EMA Validated
                    </span>
                  )}
                </div>

                {/* Ancient Greek overlay bottom-left */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-greek font-bold text-base leading-tight drop-shadow-sm">
                    {plant.ancientNameGreek}
                  </div>
                  <div className="text-[11px] text-white/80 font-serif-display italic">
                    {plant.manuscriptPassage.bookChapter}
                  </div>
                </div>
              </div>

              {/* Card Bottom: Binomial, Common, & Arrow */}
              <div className="p-5 flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-serif-display font-bold text-sm text-[#113827] group-hover:text-[#134E35] transition-colors leading-tight">
                    {plant.acceptedBinomial}
                  </h3>
                  <p className="text-xs text-[#718277]">
                    {plant.commonName.split('/')[0]}
                  </p>
                </div>

                <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  isSelected
                    ? 'border-[#113827] bg-[#113827] text-white'
                    : 'border-[#D5D3CA] group-hover:border-[#113827] group-hover:bg-[#113827] group-hover:text-white text-[#113827]'
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
