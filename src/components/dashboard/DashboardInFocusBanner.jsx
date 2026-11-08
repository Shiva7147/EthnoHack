import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Atom, Target, FileText, Sparkles } from 'lucide-react';

export function DashboardInFocusBanner({ activePlant, onJumpToSection }) {
  const primaryMetabolite = activePlant.phytochemicals[0];
  const primaryTarget = activePlant.molecularTargets[0];

  return (
    <section className="py-12 sm:py-16 bg-[#0E2F20] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A3E635_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Specimen Overview & Provenance */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A3E635] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse"></span>
                ACTIVE BENCHMARK SPECIMEN · END-TO-END PROVENANCE
              </span>
            </div>

            <div>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                {activePlant.acceptedBinomial}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="font-greek text-lg text-emerald-300 font-semibold">{activePlant.ancientNameGreek}</span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-white/80 font-mono">{activePlant.manuscriptPassage.bookChapter}</span>
                <span className="text-white/40">·</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#134E35] text-[#A3E635] font-semibold border border-[#A3E635]/30">
                  Kew POWO Disambiguated ({(activePlant.disambiguationConfidence * 100).toFixed(0)}%)
                </span>
              </div>
            </div>

            {/* Classical Passage Quote */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-2">
              <p className="font-serif-display italic text-sm sm:text-base text-white/90 leading-relaxed">
                "{activePlant.manuscriptPassage.englishTranslation}"
              </p>
              <div className="text-[11px] font-mono text-[#A3E635] flex items-center gap-1.5 pt-1 border-t border-white/10">
                <span>Codex: {activePlant.manuscriptPassage.manuscriptRef}</span>
              </div>
            </div>

            {/* Quick Action Navigation Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onJumpToSection('manuscript')}
                className="px-5 py-2.5 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-[#0E2F20] text-xs font-bold tracking-wide flex items-center gap-2 shadow-md transition-all"
              >
                <span>Read Bilingual Manuscript</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onJumpToSection('chemistry')}
                className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 border border-white/20 transition-all"
              >
                <Atom className="w-3.5 h-3.5 text-emerald-300" />
                <span>Inspect 2D Structure</span>
              </button>

              <button
                onClick={() => onJumpToSection('targets')}
                className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 border border-white/20 transition-all"
              >
                <Target className="w-3.5 h-3.5 text-amber-300" />
                <span>UniProt Binding Data</span>
              </button>
            </div>
          </div>

          {/* Right Column: Digital Research Tablet Showcase with Script Note */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Whimsical script on side */}
            <div className="absolute -right-2 top-0 pointer-events-none z-20 hidden sm:block text-right">
              <span className="font-script text-3xl sm:text-4xl text-[#A3E635] font-bold drop-shadow-sm block leading-tight">
                Ancient Text <br />
                ➔ Receptors
              </span>
            </div>

            {/* Digital Device Card Frame in BlooM Style */}
            <div className="w-full max-w-[340px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-700/80">
              <div className="w-20 h-3 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-950"></div>
              </div>

              <div className="bg-[#FAF9F5] rounded-[26px] p-4 text-[#113827] space-y-3.5 shadow-inner">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-serif-display font-bold text-sm text-[#113827]">
                    ByzMed Clinical Audit
                  </span>
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    🟢 Tier 1 Gold
                  </span>
                </div>

                {/* Primary Metabolite Card */}
                <div className="bg-white rounded-2xl p-3 border border-[#E8E6DF] shadow-xs space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-[#718277] font-bold">
                    Primary Metabolite (ChEMBL)
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#113827]">{primaryMetabolite.name}</span>
                    <span className="text-[10px] font-mono text-[#134E35] font-semibold">{primaryMetabolite.chemblId}</span>
                  </div>
                  <div className="text-[10px] text-[#5E6D64] leading-tight">
                    {primaryMetabolite.formula} · MW {primaryMetabolite.molecularWeight} · cLogP {primaryMetabolite.logP}
                  </div>
                </div>

                {/* Human Target Receptor Card */}
                <div className="bg-white rounded-2xl p-3 border border-[#E8E6DF] shadow-xs space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-[#718277] font-bold">
                    Target Receptor (UniProt)
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#113827]">{primaryTarget.geneSymbol}</span>
                    <span className="text-[10px] font-mono text-[#B45309] font-semibold">{primaryTarget.uniprotId}</span>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-slate-800">
                    {primaryTarget.bindingAffinity}
                  </div>
                </div>

                {/* EMA Monograph Badge */}
                <div className="bg-[#EBF3EF] p-2.5 rounded-xl text-[10px] text-[#134E35] space-y-1">
                  <div className="font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>EMA Herbal Monograph:</span>
                  </div>
                  <div className="font-mono text-[9px] font-semibold text-emerald-900">
                    {activePlant.clinicalStatus.monographId}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
