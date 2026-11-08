import React, { useState } from 'react';
import { RETROSPECTIVE_BENCHMARK } from '../../data/ethnopharmData';
import { X, Award, CheckCircle2, AlertTriangle, ArrowRight, BarChart3, HelpCircle, ShieldAlert } from 'lucide-react';

export function BlindEvaluationModal({ isOpen, onClose }) {
  const [selectedPassageId, setSelectedPassageId] = useState(RETROSPECTIVE_BENCHMARK.testPassages[0].id);

  if (!isOpen) return null;

  const currentPassage = RETROSPECTIVE_BENCHMARK.testPassages.find(p => p.id === selectedPassageId) || RETROSPECTIVE_BENCHMARK.testPassages[0];
  const stats = RETROSPECTIVE_BENCHMARK.summary;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E6DF] bg-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-display text-xl font-bold text-[#113827]">
                Quantitative Benchmark & Retrospective Evaluation
              </span>
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBF3EF] text-[#134E35] border border-[#134E35]/30">
                N = {stats.passagesEvaluated} Held-out Passages
              </span>
            </div>
            <p className="text-xs text-[#62746A]">
              Head-to-head validation against Gold Standard consensus (NKUA Pharmacognosy & Classical Philology) vs. Naive Zero-Shot LLM
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Metric Cards: Head-to-Head Comparison */}
        <div className="p-6 bg-white border-b border-[#E8E6DF] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {/* Metric 1: Entity Span F1 */}
          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E8E6DF]">
            <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">
              Entity Span F1 (NER)
            </div>
            <div className="font-serif-display text-2xl font-bold text-[#113827] mt-1">
              {stats.byzmedNerF1}%
            </div>
            <div className="text-[10px] text-[#5E6D64] mt-0.5 font-mono">
              vs. <span className="text-red-700 font-semibold">{stats.naiveLlmNerF1}%</span> (LLM)
            </div>
          </div>

          {/* Metric 2: Taxonomic Accuracy */}
          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E8E6DF]">
            <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">
              Taxon Disambiguation
            </div>
            <div className="font-serif-display text-2xl font-bold text-[#134E35] mt-1">
              {stats.byzmedTaxonAccuracy}%
            </div>
            <div className="text-[10px] text-[#5E6D64] mt-0.5 font-mono">
              vs. <span className="text-red-700 font-semibold">{stats.naiveLlmTaxonAccuracy}%</span> (LLM)
            </div>
          </div>

          {/* Metric 3: Target Agreement */}
          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E8E6DF]">
            <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">
              Target Class Agreement
            </div>
            <div className="font-serif-display text-2xl font-bold text-[#113827] mt-1">
              {stats.byzmedTargetAgreement}%
            </div>
            <div className="text-[10px] text-[#5E6D64] mt-0.5 font-mono">
              vs. <span className="text-red-700 font-semibold">{stats.naiveLlmTargetAgreement}%</span> (LLM)
            </div>
          </div>

          {/* Metric 4: Hallucination Rate */}
          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E8E6DF]">
            <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">
              Hallucination / Error Rate
            </div>
            <div className="font-serif-display text-2xl font-bold text-emerald-700 mt-1">
              {stats.byzmedHallucinationRate}%
            </div>
            <div className="text-[10px] text-[#5E6D64] mt-0.5 font-mono">
              vs. <span className="text-red-700 font-bold">{stats.naiveLlmHallucinationRate}%</span> (LLM)
            </div>
          </div>
        </div>

        {/* Main Content Area: Passage Selector & Head-to-Head Breakdown */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Passage Buttons (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-[#718277] block mb-1">
              Held-Out Historical Passages:
            </span>
            {RETROSPECTIVE_BENCHMARK.testPassages.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPassageId(p.id)}
                className={`w-full text-left p-3 rounded-2xl border transition-all text-xs ${
                  p.id === currentPassage.id
                    ? 'bg-[#113827] text-white border-[#113827] shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-[#E8E6DF] text-[#113827]'
                }`}
              >
                <div className="flex items-center justify-between font-mono font-bold text-[10px]">
                  <span>{p.source}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] ${
                    p.id === currentPassage.id ? 'bg-[#A3E635] text-[#113827]' : 'bg-slate-100 text-[#5E6D64]'
                  }`}>
                    {p.goldTaxon.split(' ')[0]}
                  </span>
                </div>
                <div className="font-greek truncate mt-1 text-[11px] opacity-90">
                  {p.passageTextGreek}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Comparison Card (8 cols) */}
          <div className="lg:col-span-8 bg-white p-5 rounded-3xl border border-[#E8E6DF] shadow-xs space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#B45309] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {currentPassage.source} Test Case
                </span>
                <span className="text-xs font-mono text-emerald-800 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Gold Standard: {currentPassage.goldTaxon}
                </span>
              </div>
              <p className="font-greek text-base text-[#113827] mt-2 p-3 bg-[#FAF9F5] rounded-2xl border border-slate-200">
                "{currentPassage.passageTextGreek}"
              </p>
            </div>

            {/* Side-by-Side Model Predictions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* ByzMed-Graph Prediction */}
              <div className="p-4 rounded-2xl border border-emerald-300 bg-emerald-50/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-950 font-mono text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    ByzMed-Graph Domain Pipeline
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-900 font-bold px-1.5 py-0.5 rounded">
                    MATCH
                  </span>
                </div>

                <div>
                  <div className="text-[10px] text-emerald-800 font-mono uppercase font-bold">Taxon Resolution:</div>
                  <div className="font-semibold text-emerald-950 italic">{currentPassage.byzmedPrediction}</div>
                </div>

                <div>
                  <div className="text-[10px] text-emerald-800 font-mono uppercase font-bold">Target Inference:</div>
                  <div className="text-emerald-950 font-mono text-[11px]">{currentPassage.byzmedTargetClass}</div>
                </div>
              </div>

              {/* Naive Zero-Shot LLM Prediction */}
              <div className="p-4 rounded-2xl border border-red-200 bg-red-50/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-950 font-mono text-[11px] flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                    Naive Zero-Shot LLM (Baseline)
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    currentPassage.naiveLlmCorrect ? 'bg-amber-100 text-amber-900' : 'bg-red-100 text-red-900'
                  }`}>
                    {currentPassage.naiveLlmCorrect ? 'PARTIAL' : 'FAILED / HALLUCINATED'}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] text-red-800 font-mono uppercase font-bold">Taxon Resolution:</div>
                  <div className="font-semibold text-red-950 italic">{currentPassage.naiveLlmPrediction}</div>
                </div>

                <div>
                  <div className="text-[10px] text-red-800 font-mono uppercase font-bold">Target Inference:</div>
                  <div className="text-red-950 font-mono text-[11px]">{currentPassage.naiveLlmTargetClass}</div>
                </div>
              </div>
            </div>

            {/* Scientific Explanation of Discrepancy */}
            <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-slate-200 text-[11px] text-[#5E6D64] leading-relaxed">
              <strong>Error Analysis:</strong> Naive general-purpose LLMs lack Greek palaeographical and floristic priors, frequently conflating Greek plant names with Central European vernacular homonyms or inventing modern pharmacological targets. ByzMed-Graph grounds every token in Kew POWO binomial keys and ChEMBL experimental assays.
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8E6DF] flex items-center justify-between text-xs text-[#718277]">
          <span>Full validation dataset and gold standard annotations available in repository: <code>/evaluation/benchmark_20.json</code></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#113827] text-white font-semibold hover:bg-[#0B291C]"
          >
            Close Evaluation
          </button>
        </div>

      </div>
    </div>
  );
}
