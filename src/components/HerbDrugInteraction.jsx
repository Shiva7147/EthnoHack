import React, { useState } from 'react';
import { ShieldAlert, AlertOctagon, CheckCircle2, Search, ArrowRight, Pill, Zap } from 'lucide-react';
import { ETHNO_CASE_STUDIES } from '../data/ethnopharmData';

const COMMON_DRUGS = [
  {
    name: "Cyclosporine / Tacrolimus",
    category: "Immunosuppressants (Organ Transplant)",
    metabolismPathway: "Substrate of CYP3A4 & P-glycoprotein (ABCB1)",
    hypericumInteraction: "🚨 CATASTROPHIC RISK: Hyperforin induces CYP3A4 & P-gp, decreasing blood cyclosporine levels by up to 50%, resulting in acute organ transplant rejection.",
    sideritisInteraction: "Safe: No detectable CYP3A4 induction.",
    masticInteraction: "Safe: Negligible interaction.",
    saffronInteraction: "Low Risk: No significant pharmacokinetic impact."
  },
  {
    name: "Warfarin (Coumadin)",
    category: "Oral Anticoagulant",
    metabolismPathway: "Metabolized primarily by CYP2C9 and CYP3A4",
    hypericumInteraction: "🚨 SEVERE RISK: Accelerated clearance reduces INR values, dramatically increasing fatal thromboembolism and stroke risk.",
    sideritisInteraction: "Safe: No interaction with warfarin metabolism.",
    masticInteraction: "Safe: Compatible under routine monitoring.",
    saffronInteraction: "Moderate: High doses may exert mild anti-platelet synergy; monitor INR."
  },
  {
    name: "Oral Contraceptives (Ethinylestradiol)",
    category: "Hormonal Contraceptive",
    metabolismPathway: "Hydroxylation via CYP3A4 and glucuronidation",
    hypericumInteraction: "🚨 CRITICAL RISK: Rapid CYP3A4 clearance leads to breakthrough bleeding and unintended pregnancy failure.",
    sideritisInteraction: "Safe: No hormonal or CYP interference.",
    masticInteraction: "Safe: Completely compatible.",
    saffronInteraction: "Safe at standard dietary/therapeutic doses."
  },
  {
    name: "Sertraline / Fluoxetine (SSRIs)",
    category: "Antidepressants",
    metabolismPathway: "CYP2D6 & CYP2C19 substrate; serotonergic target",
    hypericumInteraction: "🚨 HIGH RISK: Pharmacodynamic synergy on 5-HT reuptake can trigger potentially life-threatening Serotonin Syndrome.",
    sideritisInteraction: "Safe: Mild MAO-B modulation with high safety margin.",
    masticInteraction: "Safe: No central neurochemical interactions.",
    saffronInteraction: "Monitor: Both enhance serotonergic neurotransmission; co-administration should be supervised."
  }
];

export function HerbDrugInteraction() {
  const [selectedDrug, setSelectedDrug] = useState(COMMON_DRUGS[0]);
  const [selectedHerbId, setSelectedHerbId] = useState("hypericum-perforatum");

  const currentHerb = ETHNO_CASE_STUDIES.find(h => h.id === selectedHerbId) || ETHNO_CASE_STUDIES[3];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#F1EFEA]">
        <div>
          <h2 className="font-serif-display text-lg font-bold text-[#113827] flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            Herb-Drug Pharmacovigilance & CYP450 Interaction Engine
          </h2>
          <p className="text-xs text-[#62746A]">
            Automated safety evaluation for clinical co-administration protocols
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 font-semibold flex items-center gap-1.5">
          <AlertOctagon className="w-3.5 h-3.5 text-red-600" />
          Clinical Contraindication Detection
        </span>
      </div>

      {/* Selector controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Select Prescription Drug */}
        <div className="p-4 rounded-lg bg-[#FAFBFB] border border-[#E2E8F0]">
          <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#475569] block mb-1.5 flex items-center gap-1">
            <Pill className="w-3.5 h-3.5 text-[#2D4A3E]" />
            1. Select Prescription Medication:
          </label>
          <select
            value={selectedDrug.name}
            onChange={(e) => {
              const drug = COMMON_DRUGS.find(d => d.name === e.target.value);
              if (drug) setSelectedDrug(drug);
            }}
            className="w-full text-xs font-semibold p-2.5 rounded bg-white border border-[#CBD5E1] text-[#0F172A]"
          >
            {COMMON_DRUGS.map(d => (
              <option key={d.name} value={d.name}>
                {d.name} ({d.category})
              </option>
            ))}
          </select>
          <div className="text-[11px] font-mono text-[#64748B] mt-2">
            Metabolism: <span className="text-slate-800">{selectedDrug.metabolismPathway}</span>
          </div>
        </div>

        {/* Select Traditional Botanical */}
        <div className="p-4 rounded-lg bg-[#FAFBFB] border border-[#E2E8F0]">
          <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#475569] block mb-1.5 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-[#B45309]" />
            2. Select Traditional Botanical:
          </label>
          <select
            value={selectedHerbId}
            onChange={(e) => setSelectedHerbId(e.target.value)}
            className="w-full text-xs font-semibold p-2.5 rounded bg-white border border-[#CBD5E1] text-[#0F172A]"
          >
            {ETHNO_CASE_STUDIES.map(h => (
              <option key={h.id} value={h.id}>
                {h.acceptedBinomial} ({h.ancientNameGreek} / {h.commonName.split('/')[0]})
              </option>
            ))}
          </select>
          <div className="text-[11px] font-mono text-[#64748B] mt-2">
            CYP Profile: <span className="text-slate-800 font-semibold">{currentHerb.pharmacovigilance.clinicalRiskVerdict}</span>
          </div>
        </div>
      </div>

      {/* Interaction Result Display Box */}
      <div className={`p-5 rounded-xl border ${
        selectedHerbId === 'hypericum-perforatum'
          ? 'bg-red-50/50 border-red-300'
          : 'bg-emerald-50/40 border-emerald-300'
      }`}>
        <div className="flex items-center gap-2.5 mb-2">
          {selectedHerbId === 'hypericum-perforatum' ? (
            <AlertOctagon className="w-5 h-5 text-red-600 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          )}
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
            Interaction Analysis: {currentHerb.acceptedBinomial} + {selectedDrug.name}
          </h3>
        </div>

        <div className="text-xs leading-relaxed text-[#1E293B] mb-3">
          {selectedHerbId === 'hypericum-perforatum' && selectedDrug.hypericumInteraction}
          {selectedHerbId === 'sideritis-scardica' && selectedDrug.sideritisInteraction}
          {selectedHerbId === 'pistacia-lentiscus' && selectedDrug.masticInteraction}
          {selectedHerbId === 'crocus-sativus' && selectedDrug.saffronInteraction}
        </div>

        {/* Detailed Enzyme Table */}
        <div className="bg-white p-3 rounded-lg border border-slate-200 mt-2">
          <span className="text-[10px] font-mono uppercase font-bold text-[#64748B] block mb-2">
            Isoenzyme Interaction Breakdown for {currentHerb.acceptedBinomial}:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {currentHerb.pharmacovigilance.cypInteractions.map((cyp, idx) => (
              <div key={idx} className="p-2 rounded bg-[#FAFBFB] border border-slate-100 text-xs">
                <div className="font-mono font-bold text-[#0F172A]">{cyp.enzyme}</div>
                <div className="text-[10px] text-[#64748B] mt-0.5">{cyp.effect}</div>
                <span className={`inline-block text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold mt-1.5 ${
                  cyp.riskLevel.includes('Critical') || cyp.riskLevel.includes('High')
                    ? 'bg-red-100 text-red-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {cyp.riskLevel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
