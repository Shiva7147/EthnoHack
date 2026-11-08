import React, { useState } from 'react';
import { ChemicalStructureSvg } from '../utils/chemicalRenderer';
import { Atom, Copy, Check, ExternalLink, ShieldCheck, AlertTriangle } from 'lucide-react';

export function PhytochemicalProfiler({ caseStudy }) {
  const [selectedMoleculeId, setSelectedMoleculeId] = useState(caseStudy.phytochemicals[0]?.id || "");
  const [copiedSmiles, setCopiedSmiles] = useState(false);

  // Make sure selected molecule is valid for this plant
  const currentMol = caseStudy.phytochemicals.find(m => m.id === selectedMoleculeId) || caseStudy.phytochemicals[0];

  const handleCopySmiles = (smiles) => {
    navigator.clipboard.writeText(smiles);
    setCopiedSmiles(true);
    setTimeout(() => setCopiedSmiles(false), 2000);
  };

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-3xl p-6 sm:p-7 shadow-xs">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-[#F1EFEA]">
        <div>
          <h2 className="font-serif-display text-lg font-bold text-[#113827] flex items-center gap-2">
            <Atom className="w-4 h-4 text-[#134E35]" />
            Phytochemical Metabolite Profiler & 2D Structures
          </h2>
          <p className="text-xs text-[#62746A]">
            Secondary metabolites isolated from {caseStudy.acceptedBinomial} with ChEMBL & PubChem cross-links
          </p>
        </div>

        {/* Tab pills for the metabolites */}
        <div className="flex flex-wrap items-center gap-2">
          {caseStudy.phytochemicals.map(mol => {
            const isSelected = mol.id === currentMol.id;
            return (
              <button
                key={mol.id}
                onClick={() => setSelectedMoleculeId(mol.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#113827] text-white shadow-2xs'
                    : 'bg-[#F1EFEA] text-[#5E6D64] hover:bg-[#E5E2D8]'
                }`}
              >
                {mol.name.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chemical Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: 2D Chemical Structure SVG (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-3 rounded-xl bg-[#FAFBFB] border border-[#E2E8F0]">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono font-semibold text-[#2D4A3E]">
              2D Structural Depiction (ACS 1996)
            </span>
            <span className="text-[10px] font-mono text-[#64748B] bg-white px-2 py-0.5 rounded border border-slate-200">
              {currentMol.chemicalClass}
            </span>
          </div>

          <div className="w-full flex items-center justify-center py-2">
            <ChemicalStructureSvg 
              type={currentMol.svgType || currentMol.id} 
              width="100%" 
              height={200}
              className="max-w-[340px] drop-shadow-2xs" 
            />
          </div>

          {/* Database Links */}
          <div className="w-full flex items-center justify-between gap-2 pt-2 border-t border-slate-200 text-xs font-mono">
            <a
              href={`https://www.ebi.ac.uk/chembl/compound_report_card/${currentMol.chemblId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D4A3E] hover:underline flex items-center gap-1"
            >
              <span>{currentMol.chemblId}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={`https://pubchem.ncbi.nlm.nih.gov/compound/${currentMol.pubchemCid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B45309] hover:underline flex items-center gap-1"
            >
              <span>PubChem CID: {currentMol.pubchemCid}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Physicochemical & Lipinski Descriptors (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#0F172A] font-serif-scholarly">
                {currentMol.name}
              </h3>
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                {currentMol.formula}
              </span>
            </div>
            <p className="text-xs text-[#475569] mt-1 leading-relaxed">
              {currentMol.mechanismSummary}
            </p>
          </div>

          {/* SMILES with 1-click copy */}
          <div className="bg-[#FAFBFB] border border-[#CBD5E1] rounded-lg p-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B]">
                Canonical SMILES String
              </span>
              <button
                onClick={() => handleCopySmiles(currentMol.smiles)}
                className="text-[11px] font-mono text-[#2D4A3E] hover:text-[#1E3A2F] flex items-center gap-1 font-semibold"
              >
                {copiedSmiles ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copiedSmiles ? 'Copied to Clipboard' : 'Copy SMILES'}
              </button>
            </div>
            <div className="font-mono-code text-[11px] text-[#0F172A] bg-white p-2 rounded border border-slate-200 break-all select-all">
              {currentMol.smiles}
            </div>
          </div>

          {/* Physicochemical Properties Table */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
            <div className="bg-[#FAFBFB] border border-slate-200 rounded p-2">
              <div className="text-[10px] font-mono text-[#64748B] uppercase">Mol. Wt.</div>
              <div className="text-xs font-mono font-bold text-[#0F172A] mt-0.5">{currentMol.molecularWeight}</div>
              <div className="text-[9px] text-[#94A3B8]">g/mol</div>
            </div>
            <div className="bg-[#FAFBFB] border border-slate-200 rounded p-2">
              <div className="text-[10px] font-mono text-[#64748B] uppercase">cLogP</div>
              <div className="text-xs font-mono font-bold text-[#0F172A] mt-0.5">{currentMol.logP}</div>
              <div className="text-[9px] text-[#94A3B8]">Octanol/water</div>
            </div>
            <div className="bg-[#FAFBFB] border border-slate-200 rounded p-2">
              <div className="text-[10px] font-mono text-[#64748B] uppercase">TPSA</div>
              <div className="text-xs font-mono font-bold text-[#0F172A] mt-0.5">{currentMol.tpsa}</div>
              <div className="text-[9px] text-[#94A3B8]">Å²</div>
            </div>
            <div className="bg-[#FAFBFB] border border-slate-200 rounded p-2">
              <div className="text-[10px] font-mono text-[#64748B] uppercase">HBD</div>
              <div className="text-xs font-mono font-bold text-[#0F172A] mt-0.5">{currentMol.hbd}</div>
              <div className="text-[9px] text-[#94A3B8]">Donors (≤5)</div>
            </div>
            <div className="bg-[#FAFBFB] border border-slate-200 rounded p-2">
              <div className="text-[10px] font-mono text-[#64748B] uppercase">HBA</div>
              <div className="text-xs font-mono font-bold text-[#0F172A] mt-0.5">{currentMol.hba}</div>
              <div className="text-[9px] text-[#94A3B8]">Acceptors (≤10)</div>
            </div>
            <div className="bg-[#FAFBFB] border border-slate-200 rounded p-2">
              <div className="text-[10px] font-mono text-[#64748B] uppercase">RotB</div>
              <div className="text-xs font-mono font-bold text-[#0F172A] mt-0.5">{currentMol.rotatableBonds}</div>
              <div className="text-[9px] text-[#94A3B8]">Rot. Bonds</div>
            </div>
          </div>

          {/* Lipinski Rule of 5 Card */}
          <div className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
            currentMol.lipinskiViolations === 0
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
              : 'bg-amber-50/70 border-amber-200 text-amber-950'
          }`}>
            {currentMol.lipinskiViolations === 0 ? (
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            )}
            <div>
              <div className="font-semibold font-mono">
                Lipinski Rule of 5: {currentMol.lipinskiViolations === 0 ? 'Compliant (0 Violations)' : `${currentMol.lipinskiViolations} Violation(s)`}
              </div>
              <p className="text-[11px] mt-0.5 opacity-90 leading-relaxed">
                {currentMol.lipinskiNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
