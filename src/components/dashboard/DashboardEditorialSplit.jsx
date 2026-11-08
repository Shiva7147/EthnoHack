import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Atom, Target, Award, HeartPulse, CheckCircle2 } from 'lucide-react';

export function DashboardEditorialSplit({ onExploreSafety, onOpenPitchGuide }) {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#E8E6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Classical-Meets-Modern Visual in BlooM Interior Photo Style */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8E6DF] bg-[#F8F7F2]">
              {/* Botanical Specimen & Archival Plate Composite Image */}
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80"
                alt="Botanical research workspace with herbarium specimens"
                className="w-full aspect-4/5 object-cover object-center transform hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Framed Botanical Motto Badge (Matches the "Good Plants Brighter Days" poster in BlooM) */}
              <div className="absolute top-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/60 shadow-lg text-center">
                <span className="font-script text-2xl sm:text-3xl text-[#113827] font-bold block leading-tight">
                  Ancient Wisdom, Molecular Evidence
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#718277] block mt-1">
                  Vienna Dioscorides (Codex Med. Gr. 1, 512 CE)
                </span>
              </div>

              {/* Floating Bottom Metric Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0E2F20]/90 backdrop-blur-md p-4 rounded-2xl border border-[#A3E635]/30 text-white flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#A3E635] uppercase font-semibold">
                    Taxonomic Concordance
                  </div>
                  <div className="text-base font-bold font-serif-display">
                    94.2% Linnaean Accuracy
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#134E35] flex items-center justify-center text-[#A3E635] text-xs font-mono font-bold">
                  ✓
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & 3 Key Value Props (Exact BlooM "A Healthier, Happier Home" Style) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow in BlooM tracked caps */}
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#134E35]"></span>
                MORE THAN FOLK MEDICINE · EMPIRICISM TO PHARMACOLOGY
              </span>
            </div>

            {/* Editorial Serif Title */}
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#113827] leading-[1.12]">
              From Humoral Heat <br />
              <span className="italic font-normal">To Receptor Kinetics</span>
            </h2>

            {/* Narrative description */}
            <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed max-w-xl">
              Classical physicians like Dioscorides and Galen did not know of cyclooxygenase-2 or the pregnane X receptor, but their millennia of clinical observation isolated plants with potent, reproducible human bioactivities that standard blind library screening fails to capture.
            </p>

            {/* 3 Icon Feature Callouts (Exact BlooM Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3">
              
              {/* Feature 1 */}
              <div className="space-y-2 p-4 rounded-2xl bg-[#F8F7F2] border border-[#E8E6DF]/60">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3EF] text-[#134E35] flex items-center justify-center shadow-2xs">
                  <Atom className="w-5 h-5 text-[#134E35]" />
                </div>
                <h4 className="font-serif-display font-bold text-sm text-[#113827]">
                  Targeted Bioactivity
                </h4>
                <p className="text-[11px] text-[#62746A] leading-relaxed">
                  Over 120 verified metabolites mapped to UniProt human kinase and receptor bioassays.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2 p-4 rounded-2xl bg-[#F8F7F2] border border-[#E8E6DF]/60">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3EF] text-[#134E35] flex items-center justify-center shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#134E35]" />
                </div>
                <h4 className="font-serif-display font-bold text-sm text-[#113827]">
                  CYP450 Safety
                </h4>
                <p className="text-[11px] text-[#62746A] leading-relaxed">
                  Proactive screening of dangerous herb-drug interactions (e.g. Hypericum with Cyclosporine).
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-2 p-4 rounded-2xl bg-[#F8F7F2] border border-[#E8E6DF]/60">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3EF] text-[#134E35] flex items-center justify-center shadow-2xs">
                  <Award className="w-5 h-5 text-[#134E35]" />
                </div>
                <h4 className="font-serif-display font-bold text-sm text-[#113827]">
                  EMA Provenance
                </h4>
                <p className="text-[11px] text-[#62746A] leading-relaxed">
                  Explicit separation of clinical RCTs (Tier 1A) from traditional use monographs (Tier 1B).
                </p>
              </div>

            </div>

            {/* CTA Button in BlooM Forest Green Pill Style */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreSafety}
                className="px-7 py-3.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-sm font-medium tracking-wide flex items-center gap-2 shadow-sm hover:shadow-md transition-all group"
              >
                <span>Inspect Herb-Drug Interactions (CYP3A4)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPitchGuide}
                className="px-6 py-3.5 rounded-full border border-[#D5D3CA] hover:border-[#113827] bg-white text-[#113827] text-sm font-medium hover:bg-[#F8F7F2] transition-colors"
              >
                Our 10-Minute Scientific Pitch
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
