import React, { useState } from 'react';
import { GitFork, Filter, Info, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { ETHNO_CASE_STUDIES } from '../data/ethnopharmData';

export function KnowledgeGraphView({ selectedCaseStudyId }) {
  const [activeTierFilter, setActiveTierFilter] = useState('ALL');
  const [selectedNode, setSelectedNode] = useState(null);
  const [currentPlantId, setCurrentPlantId] = useState(selectedCaseStudyId || "sideritis-scardica");

  const plant = ETHNO_CASE_STUDIES.find(p => p.id === currentPlantId) || ETHNO_CASE_STUDIES[0];

  // Graph layer definitions for this plant
  const layers = [
    {
      id: "corpus",
      title: "1. Historical Manuscript",
      color: "border-amber-400 bg-amber-50 text-amber-950",
      node: {
        id: "node-text",
        label: `${plant.manuscriptPassage.author.split('(')[0]}`,
        sub: `${plant.manuscriptPassage.work} ${plant.manuscriptPassage.bookChapter}`,
        type: "Historical Corpus",
        desc: `Original witness: ${plant.manuscriptPassage.manuscriptRef}. Recording empirical bioactivity in Greek antiquity.`
      }
    },
    {
      id: "taxon",
      title: "2. Disambiguated Taxon",
      color: "border-emerald-500 bg-emerald-50 text-emerald-950",
      node: {
        id: "node-taxon",
        label: plant.acceptedBinomial,
        sub: `${plant.botanicalFamily} · Kew POWO`,
        type: "Botanical Taxon",
        desc: `Archaic ${plant.ancientNameGreek} disambiguated to accepted binomial. Confidence: ${(plant.disambiguationConfidence * 100)}%.`
      }
    },
    {
      id: "metabolite",
      title: "3. Phytochemicals",
      color: "border-blue-400 bg-blue-50 text-blue-950",
      nodes: plant.phytochemicals.map(pc => ({
        id: `node-mol-${pc.id}`,
        label: pc.name,
        sub: `${pc.chemicalClass} · MW ${pc.molecularWeight}`,
        chemblId: pc.chemblId,
        type: "Secondary Metabolite",
        desc: `${pc.mechanismSummary} SMILES: ${pc.smiles.slice(0, 35)}...`
      }))
    },
    {
      id: "targets",
      title: "4. Molecular Targets",
      color: "border-indigo-500 bg-indigo-50 text-indigo-950",
      nodes: plant.molecularTargets.map(tgt => ({
        id: `node-tgt-${tgt.geneSymbol}`,
        label: `${tgt.geneSymbol} (${tgt.proteinName})`,
        sub: `UniProt ${tgt.uniprotId} · ${tgt.targetClass}`,
        tier: tgt.evidenceTier,
        affinity: tgt.bindingAffinity,
        type: "Human Target Protein",
        desc: `Experimental affinity: ${tgt.bindingAffinity}. Pathway: ${tgt.pathway}. Evidence: ${tgt.tierLabel}`
      }))
    },
    {
      id: "clinical",
      title: "5. EMA / Clinical Validation",
      color: "border-teal-500 bg-teal-50 text-teal-950",
      node: {
        id: "node-ema",
        label: plant.clinicalStatus.monographId,
        sub: plant.clinicalStatus.therapeuticCategory,
        tier: 1,
        type: "Regulatory Monograph",
        desc: `Approved indications: ${plant.clinicalStatus.approvedIndications.join("; ")}.`
      }
    }
  ];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
      {/* Visualizer Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#F1EFEA]">
        <div>
          <h2 className="font-serif-display text-lg font-bold text-[#113827] flex items-center gap-2">
            <GitFork className="w-4 h-4 text-[#134E35]" />
            Multi-Hop Knowledge Graph Visualizer: Ancient Text ➔ Molecular Target
          </h2>
          <p className="text-xs text-[#62746A]">
            Trace end-to-end provenance across philology, taxonomy, metabolomics, biochemistry, and regulatory pharmacology
          </p>
        </div>

        {/* Plant Switcher for Graph */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#718277] hidden sm:inline">Active Flora:</span>
          <select
            value={currentPlantId}
            onChange={(e) => {
              setCurrentPlantId(e.target.value);
              setSelectedNode(null);
            }}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D5D3CA] text-[#113827] font-serif-display italic"
          >
            {ETHNO_CASE_STUDIES.map(p => (
              <option key={p.id} value={p.id}>
                {p.acceptedBinomial} ({p.commonName.split('/')[0]})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tier Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-[#FAFBFB] rounded-lg border border-[#E2E8F0]">
        <div className="flex items-center gap-2 text-xs">
          <Filter className="w-3.5 h-3.5 text-[#64748B]" />
          <span className="font-mono font-semibold text-[#475569] text-[11px] uppercase">
            Filter Graph by Scientific Evidence Tier:
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {[
            { id: 'ALL', label: 'All Layers' },
            { id: 'TIER1', label: '🟢 Tier 1: Clinical Gold Standard' },
            { id: 'TIER2', label: '🟡 Tier 2: Preclinical In-Vitro' },
            { id: 'TIER3', label: '⚪ Tier 3: Computational Hypothesis' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveTierFilter(f.id)}
              className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors ${
                activeTierFilter === f.id
                  ? 'bg-[#2D4A3E] text-white font-semibold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive 5-Column Pipeline Knowledge Network */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
        {/* Layer 1: Manuscript */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B45309] bg-amber-50 px-2 py-1 rounded border border-amber-200">
            {layers[0].title}
          </div>
          <div
            onClick={() => setSelectedNode(layers[0].node)}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              selectedNode?.id === layers[0].node.id
                ? 'border-[#B45309] ring-2 ring-amber-300 bg-amber-50/60 shadow-xs'
                : 'border-[#E2E8F0] bg-white hover:border-amber-400 hover:bg-amber-50/30'
            }`}
          >
            <div className="text-xs font-bold text-[#0F172A]">{layers[0].node.label}</div>
            <div className="text-[11px] text-[#64748B] italic">{layers[0].node.sub}</div>
            <div className="mt-2 text-[10px] font-mono text-[#B45309] flex items-center gap-1">
              <span>Inspect Passages</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Layer 2: Taxon */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#EBF3EF] px-2 py-1 rounded border border-[#2D4A3E]/30">
            {layers[1].title}
          </div>
          <div
            onClick={() => setSelectedNode(layers[1].node)}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              selectedNode?.id === layers[1].node.id
                ? 'border-[#2D4A3E] ring-2 ring-emerald-300 bg-emerald-50/60 shadow-xs'
                : 'border-[#E2E8F0] bg-white hover:border-emerald-400 hover:bg-emerald-50/30'
            }`}
          >
            <div className="text-xs font-bold font-serif-scholarly italic text-[#0F172A]">{layers[1].node.label}</div>
            <div className="text-[11px] text-[#64748B]">{layers[1].node.sub}</div>
            <div className="mt-2 text-[10px] font-mono text-emerald-800 flex items-center gap-1">
              <span>Kew POWO Verified</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Layer 3: Phytochemicals */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2 py-1 rounded border border-blue-200">
            {layers[2].title}
          </div>
          {layers[2].nodes.map(pc => (
            <div
              key={pc.id}
              onClick={() => setSelectedNode(pc)}
              className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                selectedNode?.id === pc.id
                  ? 'border-blue-500 ring-2 ring-blue-300 bg-blue-50/60 shadow-xs'
                  : 'border-[#E2E8F0] bg-white hover:border-blue-400 hover:bg-blue-50/30'
              }`}
            >
              <div className="text-xs font-bold text-[#0F172A]">{pc.label}</div>
              <div className="text-[10px] text-[#64748B] font-mono">{pc.chemblId}</div>
              <div className="mt-1 text-[10px] text-blue-800 flex items-center gap-1 font-mono">
                <span>View Structure</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Layer 4: Targets */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-2 py-1 rounded border border-indigo-200">
            {layers[3].title}
          </div>
          {layers[3].nodes
            .filter(t => {
              if (activeTierFilter === 'TIER1') return t.tier === 1;
              if (activeTierFilter === 'TIER2') return t.tier === 2;
              if (activeTierFilter === 'TIER3') return t.tier === 3;
              return true;
            })
            .map(tgt => (
              <div
                key={tgt.id}
                onClick={() => setSelectedNode(tgt)}
                className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                  selectedNode?.id === tgt.id
                    ? 'border-indigo-500 ring-2 ring-indigo-300 bg-indigo-50/60 shadow-xs'
                    : 'border-[#E2E8F0] bg-white hover:border-indigo-400 hover:bg-indigo-50/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#0F172A]">{tgt.label.split(' ')[0]}</span>
                  <span className={`text-[9px] font-mono px-1 rounded ${
                    tgt.tier === 1 ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                  }`}>
                    T{tgt.tier}
                  </span>
                </div>
                <div className="text-[10px] text-[#64748B] truncate">{tgt.affinity}</div>
                <div className="mt-1 text-[10px] text-indigo-800 flex items-center gap-1 font-mono">
                  <span>Assay Details</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
        </div>

        {/* Layer 5: EMA Monograph */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-900 bg-teal-50 px-2 py-1 rounded border border-teal-200">
            {layers[4].title}
          </div>
          <div
            onClick={() => setSelectedNode(layers[4].node)}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              selectedNode?.id === layers[4].node.id
                ? 'border-teal-500 ring-2 ring-teal-300 bg-teal-50/60 shadow-xs'
                : 'border-[#E2E8F0] bg-white hover:border-teal-400 hover:bg-teal-50/30'
            }`}
          >
            <div className="text-xs font-bold font-mono text-emerald-900">{layers[4].node.label}</div>
            <div className="text-[10px] text-[#475569]">{layers[4].node.sub}</div>
            <div className="mt-2 text-[10px] font-mono text-teal-800 flex items-center gap-1">
              <span>EMA HMPC Monograph</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Selected Node Inspector Drawer */}
      {selectedNode && (
        <div className="bg-[#FAFBFB] border border-[#CBD5E1] rounded-lg p-4 mt-3 flex flex-wrap items-start justify-between gap-3 animate-in fade-in duration-150">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#2D4A3E] text-white">
                {selectedNode.type}
              </span>
              <span className="text-sm font-bold text-[#0F172A]">
                {selectedNode.label}
              </span>
              {selectedNode.sub && (
                <span className="text-xs text-[#64748B] font-mono">
                  ({selectedNode.sub})
                </span>
              )}
            </div>

            <p className="text-xs text-[#334155] leading-relaxed max-w-4xl">
              {selectedNode.desc}
            </p>
          </div>

          <button
            onClick={() => setSelectedNode(null)}
            className="text-xs font-mono text-slate-500 hover:text-slate-900 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200"
          >
            Close ✕
          </button>
        </div>
      )}
    </div>
  );
}
