import React from 'react';
import { X, AlertOctagon, HelpCircle, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

export function FailureCasesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const failureCases = [
    {
      title: "Failure Case 1: Polysemy in Late Medieval Latin Translations ('Herba Sideritis')",
      category: "Taxonomic Multiplicity Boundary",
      description: "When Dioscorides wrote of 'Σιδηρῖτις', he described three distinct taxa. Late medieval Latin translators routinely translated all three as 'Herba Sideritis' and indiscriminately substituted Central European *Stachys recta* L. or *Glechoma hederacea*.",
      howSystemHandles: "ByzMed-Graph detects multi-taxon polysemy, flags an Ambiguity Warning (68% vs 94%), and outputs the alternative species hypotheses rather than making an authoritative single guess."
    },
    {
      title: "Failure Case 2: The Saffron vs. Safflower Commercial Adulteration",
      category: "Adulteration & False Positive Risk",
      description: "Classical and Byzantine texts frequently note that expensive *Crocus sativus* (Κρόκος) was adulterated with *Carthamus tinctorius* (Κνῆκος / Safflower). A naive NLP pipeline matching 'yellow dye' or 'cardiac herb' can misassign crocins to safflower.",
      howSystemHandles: "Our dictionary enforces anatomical organ specificity: only stigmas resolve to *Crocus sativus*, while seed/floret descriptions map to *Carthamus* or flag an adulteration alert."
    },
    {
      title: "Failure Case 3: In-Vitro Potency vs. Oral Pharmacokinetic Cleavage (Acteoside)",
      category: "Pharmacokinetic / ADME Translation Limit",
      description: "In cell-free bioassays, Acteoside shows potent COX-2 and iNOS inhibition (IC50 = 12.4 μM). However, human oral bioavailability of intact phenylethanoid glycosides is <1% due to rapid gut microbiome deglycosylation.",
      howSystemHandles: "ByzMed-Graph strictly tags this under Tier 2 (Preclinical In-Vitro), explicitly annotating that clinical efficacy depends on metabolites (hydroxytyrosol, caffeic acid) rather than systemic circulating intact acteoside."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E6DF] bg-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-display text-xl font-bold text-[#113827]">
                Scientific Failure Cases, Edge Conditions & Limitations
              </span>
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                Epistemic Humility
              </span>
            </div>
            <p className="text-xs text-[#62746A]">
              Transparently documenting where historical ethnopharmacology and automated NLP encounter genuine limits
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">Why We Highlight Our Failure Modes:</strong>
              A reliable scientific research platform must clearly identify where computational ambiguity arises. In accordance with the Horizon Europe ETHCSTWIN guidelines, ByzMed-Graph explicitly surfaces ambiguity ratios rather than producing false certainty.
            </div>
          </div>

          <div className="space-y-4">
            {failureCases.map((fc, i) => (
              <div key={i} className="bg-white p-5 rounded-3xl border border-[#E8E6DF] shadow-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-display text-base font-bold text-[#113827]">{fc.title}</h4>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#B45309] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {fc.category}
                  </span>
                </div>

                <div className="text-xs text-[#5E6D64] leading-relaxed">
                  <strong>The Challenge:</strong> {fc.description}
                </div>

                <div className="p-3 bg-[#EBF3EF] rounded-2xl border border-[#134E35]/20 text-xs text-[#113827] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#134E35] shrink-0 mt-0.5" />
                  <div>
                    <strong>How ByzMed-Graph Handles It:</strong> {fc.howSystemHandles}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8E6DF] flex items-center justify-between text-xs text-[#718277]">
          <span>Documented in full under <code>/docs/LIMITATIONS_AND_UNCERTAINTY.md</code></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#113827] text-white font-semibold hover:bg-[#0B291C]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
