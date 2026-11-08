import React from 'react';
import { ArrowRight, Play, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { SYSTEM_STATISTICS } from '../../data/ethnopharmData';

export function DashboardHero({ activePlant, onExploreCaseStudy, onOpenPitchGuide }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:py-16 bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Narrative, CTAs, Stats */}
          <div className="lg:col-span-7 space-y-6 z-10">
            {/* Eyebrow in BlooM Style */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#134E35]"></span>
                MEDITERRANEAN ETHNOPHARMACOLOGY TO MOLECULAR TARGETS
              </span>
            </div>

            {/* Main Headline in Playfair Display */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#113827] leading-[1.08]">
              Bring Ancient Wisdom <br />
              <span className="italic font-normal">To Molecular Targets</span>
            </h1>

            {/* Narrative description */}
            <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed max-w-xl">
              ByzMed-Graph bridges 2,000 years of Mediterranean medicine—from <strong>Dioscorides’ *De Materia Medica*</strong> and <strong>Galen</strong> to <strong>John Zacharias Aktouarios</strong>—to Kew Gardens taxonomy, ChEMBL metabolites, and UniProt receptors.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onExploreCaseStudy}
                className="px-6 py-3.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-sm font-medium tracking-wide flex items-center gap-2 shadow-sm hover:shadow-md transition-all group"
              >
                <span>Inspect Active Flora ({activePlant.acceptedBinomial})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPitchGuide}
                className="flex items-center gap-3 group text-left cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-[#2D4A3E]/40 group-hover:border-[#113827] flex items-center justify-center bg-white/80 transition-colors shadow-2xs">
                  <Play className="w-3.5 h-3.5 fill-[#113827] text-[#113827] ml-0.5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#113827] leading-tight">
                    Pitch Video Script
                  </div>
                  <div className="text-[11px] text-[#718277]">
                    10 min Devpost guide
                  </div>
                </div>
              </button>
            </div>

            {/* KPI Statistics Row in BlooM Style */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E4E1D8]">
              <div>
                <div className="font-serif-display text-2xl font-bold text-[#113827]">
                  {SYSTEM_STATISTICS.ancientTaxaResolved}+
                </div>
                <div className="text-[11px] text-[#62746A] mt-0.5 leading-snug">
                  Kew POWO Taxa
                </div>
              </div>

              <div>
                <div className="font-serif-display text-2xl font-bold text-[#113827]">
                  {SYSTEM_STATISTICS.phytochemicalMetabolites}+
                </div>
                <div className="text-[11px] text-[#62746A] mt-0.5 leading-snug">
                  ChEMBL Compounds
                </div>
              </div>

              <div>
                <div className="font-serif-display text-2xl font-bold text-[#113827]">
                  {SYSTEM_STATISTICS.humanMolecularTargets}+
                </div>
                <div className="text-[11px] text-[#62746A] mt-0.5 leading-snug">
                  UniProt Targets
                </div>
              </div>

              <div>
                <div className="font-serif-display text-2xl font-bold text-[#113827]">
                  {SYSTEM_STATISTICS.emaMonographsLinked}
                </div>
                <div className="text-[11px] text-[#62746A] mt-0.5 leading-snug">
                  EMA Monographs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Script Note */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-white aspect-4/3 sm:aspect-16/11 lg:aspect-4/3">
              <img
                src={activePlant.image}
                alt={activePlant.commonName}
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20 pointer-events-none" />

              {/* Top Right Script Accent in Caveat */}
              <div className="absolute top-4 right-5 sm:top-6 sm:right-6 pointer-events-none text-right">
                <span className="font-script text-2xl sm:text-3xl text-white font-bold drop-shadow-md block leading-tight">
                  From Empiricism <br />
                  To Evidence
                </span>
              </div>

              {/* Bottom Botanical Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/40 shadow-md flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-greek font-bold text-sm text-[#113827]">{activePlant.ancientNameGreek}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#EBF3EF] text-[#134E35] font-semibold">{activePlant.botanicalFamily}</span>
                  </div>
                  <div className="font-serif-display italic text-xs text-[#4A5D52] font-semibold mt-0.5">{activePlant.acceptedBinomial}</div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-emerald-800 font-bold font-mono">Disambiguated</div>
                  <div className="text-xs font-bold text-[#113827] font-mono">{(activePlant.disambiguationConfidence * 100).toFixed(0)}% Certainty</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
