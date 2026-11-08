import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export function ProblemStatementBanner({ onJumpToStep }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-2xl p-5 sm:p-6 shadow-2xs">
      {/* Top compact row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#113827]"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#134E35]">
              ETHNOHACK 2026 · RESEARCH MOTIVATION
            </span>
          </div>
          <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#113827]">
            The 2,000-Year Disconnect: Premodern Medicine to Molecular Targets
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5D52] max-w-3xl leading-relaxed">
            Byzantine and Greek medical treatises (Dioscorides, Galen, Aktouarios) contain 2,000 years of clinical observations that yielded modern blockbusters (aspirin, artemisinin), but remain inaccessible due to three fundamental scientific friction points.
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start sm:self-center px-3.5 py-1.5 rounded-full border border-[#D5D3CA] hover:border-[#113827] bg-white text-xs font-semibold text-[#113827] flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
        >
          <span>{isExpanded ? 'Hide Technical Context' : 'How We Stand Out'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* 3 Friction Points vs 5-Step Pipeline (Always Visible Summary) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-4 mt-4 border-t border-[#E8E6DF]">
        {/* Friction Point 1 */}
        <div className="p-3.5 rounded-xl bg-white border border-[#E8E6DF]/80 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-[#113827]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              1. Palaeographic Dialects
            </span>
            <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              Step 1 Solves
            </span>
          </div>
          <p className="text-[11px] text-[#62746A] leading-relaxed">
            Ancient Greek medical terms are locked in archaic inflected dialects with zero standard NLP tokenizers or character-span models.
          </p>
        </div>

        {/* Friction Point 2 */}
        <div className="p-3.5 rounded-xl bg-white border border-[#E8E6DF]/80 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-[#113827]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              2. 2,000-Yr Taxonomic Drift
            </span>
            <span className="text-[10px] font-mono text-blue-800 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
              Step 2 Solves
            </span>
          </div>
          <p className="text-[11px] text-[#62746A] leading-relaxed">
            Folk names shifted across 4 historical eras before Linnaeus (1753), causing automated pipelines to cross-contaminate chemical profiles.
          </p>
        </div>

        {/* Friction Point 3 */}
        <div className="p-3.5 rounded-xl bg-white border border-[#E8E6DF]/80 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-[#113827]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              3. Humoral-to-Molecular Gap
            </span>
            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Steps 3-5 Solve
            </span>
          </div>
          <p className="text-[11px] text-[#62746A] leading-relaxed">
            "Cooling burning liver heat" has no direct mapping to modern protein kinases (COX-2, TNF-α) without grounded bioactivity bridges.
          </p>
        </div>
      </div>

      {/* Expanded Technical Comparison: Why ByzMed-Graph Wins Over Naive LLMs */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-[#E8E6DF] space-y-3 bg-[#EBF3EF]/60 p-4 rounded-xl border border-[#134E35]/20">
          <div className="flex items-center gap-2 text-xs font-bold text-[#113827] uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-[#134E35]" />
            <span>Why This System Wins Against Typical Hackathon LLM Wrappers</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-3 rounded-lg border border-red-200 space-y-1">
              <div className="font-bold text-red-900 flex items-center gap-1.5">
                <span>❌ Naive ChatGPT / LLM Prompting:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#62746A] text-[11px] leading-relaxed">
                <li>Hallucinates non-existent Latin binomials for archaic Greek terms.</li>
                <li>Conflates traditional use with clinical RCTs (discredited by pharmacy judges).</li>
                <li>Lacks character-offset spans—cannot verify if an assertion came from folio 294r or training drift.</li>
              </ul>
            </div>

            <div className="bg-white p-3 rounded-lg border border-emerald-200 space-y-1">
              <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                <span>✓ ByzMed-Graph Deterministic Pipeline:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#4A5D52] text-[11px] leading-relaxed">
                <li>Exact character offset spans <code className="bg-[#EBF3EF] px-1 py-0.5 rounded text-[10px]">[startChar, endChar]</code> linked to manuscript codices.</li>
                <li>4-Era Kew POWO / NCBI taxonomy resolution with candidate ranking.</li>
                <li>Honest 4-Tier evidence quantification separating RCTs (Tier 1A) from EMA monographs (Tier 1B).</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
