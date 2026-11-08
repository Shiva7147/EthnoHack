import React from 'react';
import { ShieldAlert, CheckCircle2, AlertTriangle, HelpCircle, FileCheck, Scale, Award, BookOpen } from 'lucide-react';

export function UncertaintyEngine() {
  return (
    <div className="bg-white border border-[#E8E6DF] rounded-3xl p-6 sm:p-8 shadow-xs space-y-8">
      {/* Title */}
      <div className="border-b border-[#F1EFEA] pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Scale className="w-5 h-5 text-[#134E35]" />
          <h2 className="font-serif-display text-xl font-bold text-[#113827]">
            Responsible AI & 4-Tier Epistemological Uncertainty Engine
          </h2>
        </div>
        <p className="text-xs text-[#62746A] leading-relaxed max-w-4xl">
          ByzMed-Graph strictly rejects the "AI black-box" trap. To prevent dangerous computational hallucinations in natural product medicine, every assertion across the platform is audited under a formal four-tier evidence hierarchy.
        </p>
      </div>

      {/* 4-Tier Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Tier 1A */}
        <div className="p-4 rounded-2xl border border-emerald-300 bg-emerald-50/40 relative flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-950">
                Tier 1A: Clinical RCT Efficacy
              </span>
            </div>

            <div className="text-xs font-bold text-[#113827] mb-1.5 font-serif-display">
              Human Double-Blind RCTs
            </div>

            <p className="text-xs text-[#334155] leading-relaxed mb-3">
              Established through randomized controlled human trials (e.g. Cochrane Review on <em>Hypericum</em>, Linde et al. 2008, 29 RCTs, N=5,489).
            </p>
          </div>

          <div className="bg-white/90 p-2 rounded-xl border border-emerald-200 text-[10px] font-mono text-emerald-900 space-y-0.5">
            <div>• Quantified sample size & power</div>
            <div>• Human bioavailability verified</div>
            <div>• Measured clinical endpoints</div>
          </div>
        </div>

        {/* Tier 1B */}
        <div className="p-4 rounded-2xl border border-teal-300 bg-teal-50/40 relative flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shrink-0"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-950">
                Tier 1B: Regulatory Traditional Use
              </span>
            </div>

            <div className="text-xs font-bold text-teal-950 mb-1.5 font-serif-display">
              EMA / HMPC Community Monograph
            </div>

            <p className="text-xs text-[#334155] leading-relaxed mb-3">
              Recognized under EU Directive 2004/24/EC based on ≥30 years documented safe human use (e.g. <em>Sideritis</em>, <em>Pistacia lentiscus</em>). <strong>NOT equivalent to Phase III trial proof.</strong>
            </p>
          </div>

          <div className="bg-white/90 p-2 rounded-xl border border-teal-200 text-[10px] font-mono text-teal-900 space-y-0.5">
            <div>• European regulatory recognition</div>
            <div>• Well-documented safety history</div>
            <div>• Lacks formal efficacy trials</div>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="p-4 rounded-2xl border border-amber-300 bg-amber-50/40 relative flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-950">
                Tier 2: Preclinical In-Vitro
              </span>
            </div>

            <div className="text-xs font-bold text-amber-950 mb-1.5 font-serif-display">
              ChEMBL & BindingDB Bioassays
            </div>

            <p className="text-xs text-[#334155] leading-relaxed mb-3">
              Demonstrated biochemical enzyme inhibition ($IC_{50}, K_i$) or cell-line assays. Mechanistically plausible, but unverified in human pharmacokinetics.
            </p>
          </div>

          <div className="bg-white/90 p-2 rounded-xl border border-amber-200 text-[10px] font-mono text-amber-900 space-y-0.5">
            <div>• Purified receptor affinity</div>
            <div>• Cell culture mRNA downregulation</div>
            <div>• ADME / oral bioavailability unverified</div>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="p-4 rounded-2xl border border-slate-300 bg-slate-50/60 relative flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800">
                Tier 3: In-Silico Lead
              </span>
            </div>

            <div className="text-xs font-bold text-slate-900 mb-1.5 font-serif-display">
              Machine Learning & QSAR Leads
            </div>

            <p className="text-xs text-[#334155] leading-relaxed mb-3">
              Novel bioprospecting candidate hypotheses (e.g. <em>Inula helenium</em> alantolactone targeting STAT3; <em>Ecballium</em> cucurbitacins targeting JAK2).
            </p>
          </div>

          <div className="bg-white/90 p-2 rounded-xl border border-slate-200 text-[10px] font-mono text-slate-700 space-y-0.5">
            <div>• Exploratory screening candidate</div>
            <div>• Unvalidated in animal/human assays</div>
            <div>• Explicit toxicity bound warnings</div>
          </div>
        </div>
      </div>

      {/* Health Economics & Precise Academic Citations */}
      <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-2xl p-5 space-y-3">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#113827]">
          Health Economics & Pipeline Attrition Benchmarks (Peer-Reviewed Evidence)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#5E6D64] leading-relaxed">
          <div className="space-y-1">
            <div className="font-semibold text-[#113827]">
              • Capitalized Drug R&D Expenditure:
            </div>
            <p>
              DiMasi, Grabowski & Hansen (<em>J Health Econ</em> 2016; 47:20-33) estimate the capitalized cost per approved new molecular entity at <strong>\$2.558 Billion</strong> (2013 dollars), accounting for pipeline failures and post-approval R&D.
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-semibold text-[#113827]">
              • Ethnopharmacological Hit Enrichment:
            </div>
            <p>
              Newman & Cragg (<em>J Nat Prod</em> 2020) and Fabricant & Farnsworth (<em>Environ Health Perspect</em> 2001) demonstrate that ethnopharmacological leads yield an empirical hit rate of <strong>1.5% to 4.0%</strong> compared to <strong>~0.1%</strong> for blind synthetic chemical libraries—representing a validated <strong>5- to 15-fold enrichment factor</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Mandatory Medical Disclaimer Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-2xl flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 leading-relaxed">
          <strong className="font-bold uppercase tracking-wider block mb-0.5">
            EthnoHack 2026 Formal Scientific Disclaimer & Boundary
          </strong>
          ByzMed-Graph is an academic computational research workbench designed exclusively for ethnopharmacological bioprospecting, historical philology, and molecular hypothesis generation. It is <strong>NOT</strong> a clinical prescribing guide or substitute for licensed medical care. Traditional Mediterranean remedies must never be ingested or substituted for medical therapies without regulatory guidance and clinical supervision.
        </div>
      </div>
    </div>
  );
}
