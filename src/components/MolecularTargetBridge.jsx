import React from 'react';
import { Target, Award, ExternalLink, ArrowRight, Activity, CheckCircle2, FileText } from 'lucide-react';

export function MolecularTargetBridge({ caseStudy }) {
  const humoral = caseStudy.humoralProfile;
  const targets = caseStudy.molecularTargets;
  const clinical = caseStudy.clinicalStatus;

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
      {/* 1. Humoral-to-Molecular Semantic Translation Bridge */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-2 border-b border-[#F1EFEA]">
          <div>
            <h2 className="font-serif-display text-lg font-bold text-[#113827] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#B45309]" />
              Humoral-to-Molecular Semantic Translation Bridge
            </h2>
            <p className="text-xs text-[#62746A]">
              Mapping pre-Cartesian Galenic humoral indications to Medical Subject Headings (MeSH) and modern signaling pathways
            </p>
          </div>

          <div className="text-xs font-mono bg-amber-50 text-amber-950 border border-amber-200 px-3 py-1 rounded-full font-medium">
            <strong>Galenic Qualities:</strong> {humoral.qualities}
          </div>
        </div>

        {/* Semantic Bridge Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border border-[#E2E8F0] rounded-lg overflow-hidden">
            <thead className="bg-[#FAFBFB] text-[#475569] font-mono uppercase text-[10px] border-b border-[#E2E8F0]">
              <tr>
                <th className="py-2.5 px-3">Ancient Humoral Indication</th>
                <th className="py-2.5 px-3">Modern MeSH Heading & ID</th>
                <th className="py-2.5 px-3">Proposed Molecular Mechanism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] bg-white">
              {humoral.modernSemanticBridge.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 px-3 font-serif-scholarly italic text-[#0F172A]">
                    "{item.ancientDesc}"
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="font-semibold text-[#2D4A3E]">{item.meshTerm}</span>
                    <a
                      href={`https://meshb.nlm.nih.gov/record/ui?ui=${item.meshId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-[#64748B] ml-2 hover:underline"
                    >
                      [{item.meshId}]
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </td>
                  <td className="py-2.5 px-3 font-mono text-[11px] text-[#334155]">
                    {item.targetMechanism}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Experimentally Verified Human Protein Targets (UniProt / BindingDB) */}
      <div>
        <div className="mb-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
            <Target className="w-4 h-4 text-[#2D4A3E]" />
            Experimentally Verified Human Protein Targets
          </h2>
          <p className="text-xs text-[#64748B]">
            Screened against UniProtKB and BindingDB bioassays with documented inhibition kinetics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {targets.map((tgt, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-lg border border-[#E2E8F0] bg-[#FAFBFB] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="font-mono text-sm font-bold text-[#0F172A] bg-white px-2 py-0.5 rounded border border-slate-200">
                    {tgt.geneSymbol}
                  </span>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                    tgt.evidenceTier === 1
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}>
                    {tgt.evidenceTier === 1 ? 'Tier 1 Clinical' : 'Tier 2 In-Vitro'}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#1E3A2F] mb-1">
                  {tgt.proteinName}
                </div>

                <div className="text-[11px] font-mono text-[#64748B] mb-2">
                  UniProt:{' '}
                  <a
                    href={`https://www.uniprot.org/uniprotkb/${tgt.uniprotId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2D4A3E] font-semibold hover:underline inline-flex items-center gap-0.5"
                  >
                    {tgt.uniprotId}
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <span className="ml-2 text-slate-400">·</span>
                  <span className="ml-1 text-slate-600">{tgt.targetClass}</span>
                </div>

                <div className="bg-white p-2 rounded border border-slate-200 font-mono text-[11px] text-[#0F172A] mb-2">
                  <span className="text-[#64748B] text-[10px] block uppercase">Experimental Kinetics</span>
                  <strong>{tgt.bindingAffinity}</strong>
                </div>

                <p className="text-[11px] text-[#475569] leading-relaxed mb-2">
                  {tgt.notes}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[10px] font-mono text-[#64748B]">
                Pathway: <span className="text-[#0F172A]">{tgt.pathway}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. European Medicines Agency (EMA) Herbal Monograph Gold Standard */}
      <div className="bg-[#FAF9F5] border border-emerald-300 rounded-2xl p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
              EU
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 block">
                European Medicines Agency (EMA) · Committee on Herbal Medicinal Products (HMPC)
              </span>
              <span className="text-[11px] font-mono text-emerald-800">
                Official Regulatory Monograph: {clinical.monographId}
              </span>
            </div>
          </div>

          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
            {clinical.tierBadge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
          <div>
            <span className="font-mono text-[11px] text-emerald-900 font-semibold block mb-1">
              Approved Therapeutic Indications (Community Herbal Monograph)
            </span>
            <ul className="space-y-1">
              {clinical.approvedIndications.map((ind, i) => (
                <li key={i} className="flex items-start gap-1.5 text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#64748B] block">Clinical Safety Assessment</span>
              <p className="text-slate-800 text-[11px] leading-relaxed">{clinical.safetyAssessment}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-[#64748B] block">Contraindications & Precautions</span>
              <p className="text-slate-800 text-[11px] leading-relaxed">{clinical.contraindications}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
