import React, { useState } from 'react';
import { X, Award, CheckCircle2, AlertTriangle, ArrowRight, BarChart3, HelpCircle, ShieldAlert, Terminal, Code2 } from 'lucide-react';

const BENCHMARK_METRICS = {
  evaluatedPassages: 25,
  totalGoldEntities: 52,
  byzmedTaxonCorrect: 24,
  byzmedTaxonPct: "96.0%",
  byzmedTaxonCi: "95% CI: 80.5% – 99.3%",
  llmTaxonCorrect: 18,
  llmTaxonPct: "72.0%",
  llmTaxonCi: "95% CI: 52.4% – 85.7%",
  byzmedEntityF1: "90.2%",
  byzmedPrecision: "92.0%",
  byzmedRecall: "88.5%",
  llmEntityF1: "66.7%",
  llmPrecision: "68.0%",
  llmRecall: "65.4%",
  byzmedHallucinationRate: "4.0% (1/25)",
  byzmedHallucinationCi: "95% CI: 0.7% – 19.5%",
  llmHallucinationRate: "20.0% (5/25)",
  llmHallucinationCi: "95% CI: 8.9% – 39.1%",
  samplePassages: [
    {
      id: 1,
      source: "Dioscorides IV.33 (Wellmann ed.)",
      greek: "Σιδηρῖτις ἡ ἐπιμήκης· φύλλα ἔχει ὅμοια πράσῳ... ἁρμόζει δὲ θαυμαστῶς πρὸς τὰ σιδήρῳ τραύματα.",
      goldTaxon: "Sideritis scardica Griseb.",
      byzmedResult: "Sideritis scardica Griseb. (Correct)",
      llmResult: "Sideritis scardica (Correct)",
      status: "both_correct"
    },
    {
      id: 2,
      source: "Dioscorides IV.33 (Inflected Genitive)",
      greek: "τῆς σιδηρίτιδος τὸ ἀφέψημα αἵματος ἐπιστάτης ἐστὶ καὶ φλεγμονὰς παύει.",
      goldTaxon: "Sideritis scardica Griseb.",
      byzmedResult: "Sideritis scardica Griseb. (Correct via normalized stem 'σιδηριτ')",
      llmResult: "Sideritis (Incomplete - missing accepted binomial)",
      status: "byzmed_better"
    },
    {
      id: 9,
      source: "Dioscorides III.32 (Dittany of Crete)",
      greek: "Δίκταμνον Κρητικόν· φύλλα ἔχει δασέα, ἁρμόζει πρὸς βελῶν ἐξολκὰς καὶ τραύματα.",
      goldTaxon: "Origanum dictamnus L.",
      byzmedResult: "Origanum dictamnus L. (Correct)",
      llmResult: "Dictamnus albus (Hallucination / False Conflation with Burning Bush)",
      status: "byzmed_superior"
    },
    {
      id: 19,
      source: "Dioscorides IV.71 (Strychnos)",
      greek: "Στρύχνος ὑπνωτικός... καρπὸς ἐρυθρός, ὕπνον ἐπάγει καὶ πόνους παύει.",
      goldTaxon: "Withania somnifera (L.) Dunal (Ashwagandha / Sleep-inducing)",
      byzmedResult: "Withania somnifera (L.) Dunal (Correct)",
      llmResult: "Solanum nigrum (Hallucination / Conflated with Black Nightshade)",
      status: "byzmed_superior"
    }
  ]
};

export function BlindEvaluationModal({ isOpen, onClose }) {
  const [selectedPassageId, setSelectedPassageId] = useState(1);

  if (!isOpen) return null;

  const currentPassage = BENCHMARK_METRICS.samplePassages.find(p => p.id === selectedPassageId) || BENCHMARK_METRICS.samplePassages[0];

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
                N = 25 Passages · 52 Gold Entities
              </span>
            </div>
            <p className="text-xs text-[#62746A] mt-0.5">
              Empirical evaluation against Max Wellmann's critical edition (1906–1914) & Kew POWO vs. Frozen Baseline Zero-Shot LLM (T=0.0)
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Metric Cards: Exact Numbers with Wilson Score CIs */}
        <div className="p-6 bg-white border-b border-[#E8E6DF] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {/* Metric 1: Taxon Disambiguation */}
          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E8E6DF]">
            <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">
              Taxon Disambiguation (k/25)
            </div>
            <div className="font-serif-display text-2xl font-bold text-[#134E35] mt-1">
              24/25 ({BENCHMARK_METRICS.byzmedTaxonPct})
            </div>
            <div className="text-[9px] text-[#5E6D64] font-mono">
              {BENCHMARK_METRICS.byzmedTaxonCi}
            </div>
            <div className="text-[10px] text-[#5E6D64] mt-1 pt-1 border-t border-[#E8E6DF] font-mono">
              vs. <span className="text-red-700 font-semibold">18/25 ({BENCHMARK_METRICS.llmTaxonPct})</span> (LLM)
            </div>
          </div>

          {/* Metric 2: Entity Span F1 */}
          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E8E6DF]">
            <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">
              Entity Span F1 (52 Tokens)
            </div>
            <div className="font-serif-display text-2xl font-bold text-[#113827] mt-1">
              {BENCHMARK_METRICS.byzmedEntityF1}
            </div>
            <div className="text-[9px] text-[#5E6D64] font-mono">
              P: {BENCHMARK_METRICS.byzmedPrecision} | R: {BENCHMARK_METRICS.byzmedRecall}
            </div>
            <div className="text-[10px] text-[#5E6D64] mt-1 pt-1 border-t border-[#E8E6DF] font-mono">
              vs. <span className="text-red-700 font-semibold">{BENCHMARK_METRICS.llmEntityF1}</span> (LLM)
            </div>
          </div>

          {/* Metric 3: Hallucination Rate */}
          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E8E6DF]">
            <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">
              Taxon Hallucination Rate
            </div>
            <div className="font-serif-display text-2xl font-bold text-emerald-700 mt-1">
              {BENCHMARK_METRICS.byzmedHallucinationRate}
            </div>
            <div className="text-[9px] text-[#5E6D64] font-mono">
              {BENCHMARK_METRICS.byzmedHallucinationCi}
            </div>
            <div className="text-[10px] text-[#5E6D64] mt-1 pt-1 border-t border-[#E8E6DF] font-mono">
              vs. <span className="text-red-700 font-bold">{BENCHMARK_METRICS.llmHallucinationRate}</span> (LLM)
            </div>
          </div>

          {/* Metric 4: Traceable Provenance */}
          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#E8E6DF]">
            <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">
              Character Offset Spans
            </div>
            <div className="font-serif-display text-2xl font-bold text-[#113827] mt-1">
              100.0%
            </div>
            <div className="text-[9px] text-emerald-800 font-mono font-bold">
              [startChar : endChar]
            </div>
            <div className="text-[10px] text-[#5E6D64] mt-1 pt-1 border-t border-[#E8E6DF] font-mono">
              vs. <span className="text-red-700 font-semibold">0.0% (None)</span> (LLM)
            </div>
          </div>
        </div>

        {/* Reproducibility & Terminal Command Banner */}
        <div className="bg-[#0E2F20] text-white px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#A3E635]" />
            <span>Automated Benchmark Script in Repo:</span>
            <code className="bg-[#134E35] px-2 py-0.5 rounded text-[#A3E635]">node scripts/evaluate_benchmark.js</code>
          </div>
          <span className="text-white/70 text-[11px]">Exact Wilson score binomial intervals</span>
        </div>

        {/* Head-to-Head Passage Comparison Viewer */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Passage Selector */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-mono uppercase font-bold text-[#718277] block">
              Sample Benchmark Passages:
            </span>
            {BENCHMARK_METRICS.samplePassages.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPassageId(p.id)}
                className={`w-full p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  selectedPassageId === p.id
                    ? 'border-[#113827] bg-[#F2F7F4] ring-1 ring-[#113827]'
                    : 'border-[#E8E6DF] bg-white hover:bg-[#FAF9F5]'
                }`}
              >
                <div className="text-xs font-bold text-[#113827]">{p.source}</div>
                <div className="font-greek text-xs text-[#5E6D64] truncate mt-0.5">{p.greek}</div>
                <div className="text-[10px] font-mono text-[#134E35] font-semibold mt-1">
                  Gold: {p.goldTaxon}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Comparative Analysis Card */}
          <div className="lg:col-span-8 bg-white border border-[#E8E6DF] rounded-2xl p-5 space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#718277] block">
                Source Passage ({currentPassage.source}):
              </span>
              <p className="font-greek text-base text-[#113827] p-3 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] mt-1 leading-relaxed">
                "{currentPassage.greek}"
              </p>
              <div className="text-xs text-[#4A5D52] font-mono mt-1">
                Gold Standard Reference: <strong>{currentPassage.goldTaxon}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#EBF3EF] border border-[#134E35]/20 space-y-1">
                <div className="font-bold text-[#113827] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ByzMed-Graph Domain NER:</span>
                </div>
                <p className="font-semibold text-emerald-950 font-mono text-[11px]">
                  {currentPassage.byzmedResult}
                </p>
                <p className="text-[10px] text-[#4A5D52]">
                  Anchored by Greek stem normalization with exact character offset coordinates.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-red-50/80 border border-red-200 space-y-1">
                <div className="font-bold text-red-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Baseline Zero-Shot LLM:</span>
                </div>
                <p className="font-semibold text-red-950 font-mono text-[11px]">
                  {currentPassage.llmResult}
                </p>
                <p className="text-[10px] text-red-800">
                  Prone to partial binomial truncations and homonym conflation without grounded character offsets.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
