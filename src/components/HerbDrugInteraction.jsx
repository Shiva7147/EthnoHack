import React, { useState } from 'react';
import { ShieldAlert, AlertOctagon, CheckCircle2, Search, ArrowRight, Pill, Zap, BookOpen, AlertTriangle } from 'lucide-react';
import { ETHNO_CASE_STUDIES } from '../data/ethnopharmData';

const COMMON_DRUGS = [
  {
    name: "Cyclosporine / Tacrolimus",
    category: "Immunosuppressants (Organ Transplant)",
    metabolismPathway: "Substrate of CYP3A4 & P-glycoprotein (ABCB1)",
    hypericumInteraction: "🚨 CATASTROPHIC INTERACTION: Hyperforin binds the Pregnane X Receptor (PXR, EC50 = 27 nM; Wentworth et al., J Clin Invest 2000), causing 3.8–5.2 fold induction of hepatic CYP3A4 mRNA and intestinal P-gp. In kidney/heart transplant patients, blood cyclosporine trough levels plunged from ~180 ng/mL to <50 ng/mL, precipitating acute histologically proven organ graft rejection (Ruschitzka et al., The Lancet 2000; 355:548-549).",
    sideritisInteraction: "Safe: No detectable CYP3A4 induction at traditional infusion doses.",
    masticInteraction: "Safe: Negligible pharmacokinetic interaction.",
    saffronInteraction: "Low Risk: No significant clinical pharmacokinetic impact.",
    inulaInteraction: "Caution: Sesquiterpene lactones show weak in-vitro CYP inhibition; uncharacterized in humans.",
    ecballiumInteraction: "🚨 SEVERE TOXICITY: Additive nephrotoxicity risk with calcineurin inhibitors; violent cytotoxic purgative."
  },
  {
    name: "Warfarin (Coumadin)",
    category: "Oral Anticoagulant",
    metabolismPathway: "Metabolized primarily by CYP2C9 (S-warfarin) and CYP3A4 (R-warfarin)",
    hypericumInteraction: "🚨 SEVERE RISK: Accelerated CYP3A4/CYP2C9 clearance reduces International Normalized Ratio (INR) values by >40%, dramatically increasing the risk of fatal thromboembolism and stroke.",
    sideritisInteraction: "Safe: No interaction with warfarin metabolism documented in EMA monographs.",
    masticInteraction: "Safe: Compatible under routine coagulation monitoring.",
    saffronInteraction: "Moderate: High dietary or extract doses show mild platelet aggregation inhibition; monitor INR.",
    inulaInteraction: "Low-Moderate: Theoretical antiplatelet synergy; monitor coagulation.",
    ecballiumInteraction: "🚨 CONTRAINDICATED: Hemorrhagic mucosal ulceration risk with anticoagulants."
  },
  {
    name: "Oral Contraceptives (Ethinylestradiol / Progestins)",
    category: "Hormonal Contraceptive",
    metabolismPathway: "Aromatic hydroxylation via hepatic CYP3A4 and glucuronidation",
    hypericumInteraction: "🚨 CRITICAL RISK: Rapid CYP3A4 clearance reduces plasma ethinylestradiol concentrations by up to 50%, resulting in breakthrough intermenstrual bleeding and documented unplanned pregnancy failure.",
    sideritisInteraction: "Safe: No hormonal or CYP interference.",
    masticInteraction: "Safe: Completely compatible.",
    saffronInteraction: "Safe at standard dietary/therapeutic doses.",
    inulaInteraction: "Uncharacterized: Insufficient clinical data.",
    ecballiumInteraction: "🚨 CONTRAINDICATED: Cytotoxic and abortifacient historical warnings."
  },
  {
    name: "Sertraline / Fluoxetine (SSRIs)",
    category: "Antidepressants",
    metabolismPathway: "CYP2D6 & CYP2C19 substrate; serotonergic target",
    hypericumInteraction: "🚨 HIGH RISK: Pharmacodynamic synergy on central 5-HT reuptake can precipitate life-threatening Serotonin Syndrome (hyperthermia, clonus, autonomic instability).",
    sideritisInteraction: "Safe: Mild MAO-B modulation with wide therapeutic index.",
    masticInteraction: "Safe: No central neurochemical interactions.",
    saffronInteraction: "Monitor: Saffron bioactive crocins enhance central serotonergic transmission; concurrent SSRI use should be supervised.",
    inulaInteraction: "Safe: No central serotonergic interaction.",
    ecballiumInteraction: "Contraindicated due to systemic cytotoxicity."
  }
];

export function HerbDrugInteraction() {
  const [selectedDrug, setSelectedDrug] = useState(COMMON_DRUGS[0]);
  const [selectedHerbId, setSelectedHerbId] = useState("hypericum-perforatum");

  const currentHerb = ETHNO_CASE_STUDIES.find(h => h.id === selectedHerbId) || ETHNO_CASE_STUDIES[3];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      
      {/* Research Use Only Persistent Disclaimer */}
      <div className="bg-amber-50/90 border border-amber-300 p-3.5 rounded-2xl flex items-start gap-3 text-xs text-amber-950 font-mono">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <div className="font-bold uppercase tracking-wider text-amber-900">
            Research Tool Only · Not Clinical / Medical Advice
          </div>
          <p className="text-[11px] text-amber-800 leading-relaxed font-sans">
            This interaction table models documented pharmacokinetic (CYP450 / P-gp) and pharmacodynamic pathways for academic research. 
            It is curated and non-exhaustive. Never alter prescription regimens based on computational predictions.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#F1EFEA]">
        <div>
          <h2 className="font-serif-display text-lg font-bold text-[#113827] flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            Herb-Drug Pharmacovigilance & CYP450 Interaction Engine
          </h2>
          <p className="text-xs text-[#62746A]">
            Curated pharmacokinetic interaction checker linking historical flora to cytochrome P450 isoenzymes
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
        <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E6DF]">
          <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#113827] block mb-1.5 flex items-center gap-1.5">
            <Pill className="w-3.5 h-3.5 text-[#134E35]" />
            1. Select Prescription Medication:
          </label>
          <select
            value={selectedDrug.name}
            onChange={(e) => {
              const drug = COMMON_DRUGS.find(d => d.name === e.target.value);
              if (drug) setSelectedDrug(drug);
            }}
            className="w-full text-xs font-semibold p-2.5 rounded-xl bg-white border border-[#D5D3CA] text-[#113827] focus:ring-1 focus:ring-[#113827]"
          >
            {COMMON_DRUGS.map(d => (
              <option key={d.name} value={d.name}>
                {d.name} ({d.category})
              </option>
            ))}
          </select>
          <div className="text-[11px] font-mono text-[#718277] mt-2">
            Metabolism: <span className="text-[#113827]">{selectedDrug.metabolismPathway}</span>
          </div>
        </div>

        {/* Select Traditional Botanical */}
        <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E8E6DF]">
          <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#113827] block mb-1.5 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#B45309]" />
            2. Select Traditional Botanical:
          </label>
          <select
            value={selectedHerbId}
            onChange={(e) => setSelectedHerbId(e.target.value)}
            className="w-full text-xs font-semibold p-2.5 rounded-xl bg-white border border-[#D5D3CA] text-[#113827] focus:ring-1 focus:ring-[#113827]"
          >
            {ETHNO_CASE_STUDIES.map(h => (
              <option key={h.id} value={h.id}>
                {h.acceptedBinomial} ({h.ancientNameGreek} / {h.commonName.split('/')[0]})
              </option>
            ))}
          </select>
          <div className="text-[11px] font-mono text-[#718277] mt-2">
            CYP Profile: <span className="text-[#113827] font-semibold">{currentHerb.pharmacovigilance.clinicalRiskVerdict}</span>
          </div>
        </div>
      </div>

      {/* Interaction Result Display Box */}
      <div className={`p-5 rounded-2xl border ${
        selectedHerbId === 'hypericum-perforatum' || selectedHerbId === 'ecballium-elaterium'
          ? 'bg-red-50/60 border-red-300'
          : 'bg-emerald-50/50 border-emerald-300'
      }`}>
        <div className="flex items-center gap-2.5 mb-2">
          {selectedHerbId === 'hypericum-perforatum' || selectedHerbId === 'ecballium-elaterium' ? (
            <AlertOctagon className="w-5 h-5 text-red-600 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          )}
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#113827]">
            Interaction Analysis: {currentHerb.acceptedBinomial} + {selectedDrug.name}
          </h3>
        </div>

        <div className="text-xs leading-relaxed text-[#2C4134] mb-3">
          {selectedHerbId === 'hypericum-perforatum' && selectedDrug.hypericumInteraction}
          {selectedHerbId === 'sideritis-scardica' && selectedDrug.sideritisInteraction}
          {selectedHerbId === 'pistacia-lentiscus' && selectedDrug.masticInteraction}
          {selectedHerbId === 'crocus-sativus' && selectedDrug.saffronInteraction}
          {selectedHerbId === 'inula-helenium' && selectedDrug.inulaInteraction}
          {selectedHerbId === 'ecballium-elaterium' && selectedDrug.ecballiumInteraction}
        </div>

        {/* Primary Case Citation for Hypericum */}
        {selectedHerbId === 'hypericum-perforatum' && selectedDrug.name.includes("Cyclosporine") && (
          <div className="bg-white p-3 rounded-xl border border-red-200 mt-2 space-y-1 text-xs">
            <span className="font-mono text-[10px] font-bold uppercase text-red-900 block flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-red-700" />
              Seminal Peer-Reviewed Evidence:
            </span>
            <div className="text-[11px] text-[#4A5D52]">
              • <strong>Ruschitzka F, et al.</strong> <em>Acute heart transplant rejection due to Saint John's wort.</em> <strong>The Lancet</strong> 2000; 355(9203): 548–549.
            </div>
            <div className="text-[11px] text-[#4A5D52]">
              • <strong>Wentworth JM, et al.</strong> <em>St John's wort, an inhibitor of the pregnane X receptor, induces CYP3A4.</em> <strong>J Clin Invest</strong> 2000; 105(8): 1151–1158. (Hyperforin activates human PXR with EC50 = 27 nM; 3.8 to 5.2-fold CYP3A4 mRNA induction in primary human hepatocytes at 1 μM).
            </div>
          </div>
        )}

        {/* Detailed Enzyme Table */}
        <div className="bg-white p-4 rounded-xl border border-[#E8E6DF] mt-3">
          <span className="text-[10px] font-mono uppercase font-bold text-[#718277] block mb-2">
            Documented Isoenzyme Interactions for {currentHerb.acceptedBinomial}:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {currentHerb.pharmacovigilance.cypInteractions.map((cyp, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E8E6DF] text-xs">
                <div className="font-mono font-bold text-[#113827]">{cyp.enzyme}</div>
                <div className="text-[10px] text-[#62746A] mt-0.5">{cyp.effect}</div>
                <span className={`inline-block text-[9px] font-mono px-2 py-0.5 rounded-full font-semibold mt-1.5 ${
                  cyp.riskLevel.includes('Critical') || cyp.riskLevel.includes('High') || cyp.riskLevel.includes('Severe')
                    ? 'bg-red-100 text-red-900 border border-red-300'
                    : 'bg-[#EBF3EF] text-[#134E35] border border-[#134E35]/20'
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
