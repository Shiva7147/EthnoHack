import React, { useState } from 'react';
import { ETHNO_CASE_STUDIES } from '../../data/ethnopharmData';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react';

export function DashboardTaxaCards({ selectedId, onSelect }) {
  const [filterMode, setFilterMode] = useState('all');

  const filteredPlants = ETHNO_CASE_STUDIES.filter(plant => {
    if (filterMode === 'benchmark') return !plant.noveltyScore || plant.noveltyScore < 0.7;
    if (filterMode === 'orphan') return plant.noveltyScore && plant.noveltyScore >= 0.7;
    return true;
  });

  return (
    <section id="taxa-cards" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header in BlooM "OUR COLLECTION: Plants for Every Space" Style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332] block">
            OUR CURATED HERBARIUM · 6 MEDITERRANEAN TAXA
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827] tracking-tight">
            Flora of the Mediterranean Pharmacopoeia
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Filter Pills in BlooM Style */}
          <div className="bg-[#EFECE3] p-1 rounded-full flex items-center gap-1 text-xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-[#113827] text-white shadow-2xs'
                  : 'text-[#5E6D64] hover:text-[#113827]'
              }`}
            >
              All Taxa ({ETHNO_CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setFilterMode('benchmark')}
              className={`px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                filterMode === 'benchmark'
                  ? 'bg-[#113827] text-white shadow-2xs'
                  : 'text-[#5E6D64] hover:text-[#113827]'
              }`}
            >
              Benchmarks (4)
            </button>
            <button
              onClick={() => setFilterMode('orphan')}
              className={`px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                filterMode === 'orphan'
                  ? 'bg-[#113827] text-white shadow-2xs'
                  : 'text-[#5E6D64] hover:text-[#113827]'
              }`}
            >
              Orphan Bioprospecting (2)
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Cards (BlooM collection style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => {
          const isSelected = plant.id === selectedId;
          const isOrphan = plant.noveltyScore && plant.noveltyScore >= 0.7;

          return (
            <div
              key={plant.id}
              onClick={() => onSelect(plant.id)}
              className={`group cursor-pointer bg-white rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'border-[#113827] ring-2 ring-[#113827] shadow-xl scale-[1.01]'
                  : 'border-[#E8E6DF] hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {/* Botanical Photo with Floating Badges */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#F6F5F0]">
                <img
                  src={plant.image}
                  alt={plant.acceptedBinomial}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

                {/* Family badge top-left */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#113827] text-[10px] font-bold font-mono px-2.5 py-1 rounded-full shadow-2xs">
                  {plant.botanicalFamily}
                </div>

                {/* Status badge top-right */}
                <div className="absolute top-3 right-3">
                  {isOrphan ? (
                    <span className="bg-[#113827] text-[#A3E635] text-[10px] font-bold font-mono px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#A3E635]/40 shadow-xs">
                      <Sparkles className="w-2.5 h-2.5" />
                      Novel Bioprospecting Lead
                    </span>
                  ) : plant.id === 'hypericum-perforatum' ? (
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
                  <div className="flex items-center justify-between">
                    <span className="font-greek font-bold text-lg leading-tight drop-shadow-sm text-emerald-100">
                      {plant.ancientNameGreek}
                    </span>
                    <span className="text-[10px] font-mono text-white/90 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {(plant.disambiguationConfidence * 100).toFixed(0)}% Kew Confidence
                    </span>
                  </div>
                  <div className="text-[11px] text-white/80 font-serif-display italic mt-0.5">
                    {plant.manuscriptPassage.bookChapter} · {plant.manuscriptPassage.manuscriptRef}
                  </div>
                </div>
              </div>

              {/* Card Bottom: Binomial, Common, Target, & BlooM Arrow Circle */}
              <div className="p-5 flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-serif-display font-bold text-base text-[#113827] group-hover:text-[#134E35] transition-colors leading-tight">
                    {plant.acceptedBinomial}
                  </h3>
                  <p className="text-xs text-[#718277]">
                    {plant.commonName.split('/')[0]} · <span className="font-mono text-[#134E35] font-semibold">{plant.molecularTargets[0]?.symbol || 'Target'}</span>
                  </p>
                </div>

                <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  isSelected
                    ? 'border-[#113827] bg-[#113827] text-white shadow-xs'
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
