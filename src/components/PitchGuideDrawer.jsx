import React, { useState } from 'react';
import { Presentation, Clock, CheckCircle2, FileText, X, Sparkles, Award, HelpCircle, ShieldAlert, Zap, Timer } from 'lucide-react';

const SHORT_PITCH_3_MIN = [
  {
    step: "Minute 0:00 – 0:45",
    title: "1. The Hook (The 2000 Lancet Hypericum Transplant Crisis)",
    script: "Judges: In February 2000, The Lancet published a landmark report by Ruschitzka et al. describing two cardiac-transplant patients who suffered acute organ rejection. Their blood cyclosporine levels had plunged from the therapeutic window (~150 ng/mL) down to 61 ng/mL and <50 ng/mL. The culprit was self-medication with St. John's Wort—a plant prescribed since Dioscorides. Hyperforin binds the human PXR receptor with nanomolar affinity (apparent inhibition constant Ki = 27 nM; Moore et al., PNAS 2000; Wentworth et al., J Endocrinol 2000), upregulating CYP3A4 and clearing the life-saving immunosuppressant. This demonstrates why ethnopharmacology cannot rely on blind chatbots or romantic folklore—it demands rigorous, deterministic pharmacovigilance."
  },
  {
    step: "Minute 0:45 – 1:45",
    title: "2. The 5-Step Pipeline (Live Demo on Step 1)",
    script: "ByzMed-Graph bridges 2,000 years of Mediterranean medicine in five verifiable steps:\n1. Ingestion & NLP: We deaccent and stem-match Greek medical text, computing exact character-span offsets into Max Wellmann's 1906 critical editions.\n2. 4-Era Taxonomy: We resolve historical denominations across Classical, Galenic, Byzantine, and Linnaean eras to Kew Plants of the World Online (POWO) accepted binomials.\n3. Phytochemistry: We profile constituent secondary metabolites from ChEMBL 34 and PubChem with 2D structures and Lipinski properties.\n4. Molecular Targets: We crosswalk ancient humoral terms ('cooling burning fever') to MeSH and human protein binding assays in UniProt.\n5. Epistemic Rigor: We separate Tier 1A double-blind RCTs from Tier 1B EMA traditional-use monographs, flagging CYP3A4 drug-herb interactions."
  },
  {
    step: "Minute 1:45 – 2:30",
    title: "3. Internal Regression Suite & Epistemic Humility",
    script: "We do not overclaim. On an internal development and regression set of 25 classical passages across 46 annotated entities, our deterministic pipeline achieved 96.0% taxonomic accuracy (24/25, 95% CI: 80.5%–99.3%). We report zero unverified LLM baselines. Crucially, our benchmark flags its own failure: in Dioscorides III.155, when Askyron is compared to Hyperikon ('ὅμοιόν ἐστι τῷ ὑπερικῷ'), our stem matcher flags the comparative clause collision. We surface this transparently rather than hiding it. And on cytotoxic flora like Ecballium elaterium, our graph surfaces JAK2 inhibition alongside Dioscorides' ancient warning that it is potentially lethal in overdose."
  },
  {
    step: "Minute 2:30 – 3:00",
    title: "4. Open Science & FAIR Consortium Alignment",
    script: "Every assertion in ByzMed-Graph exports in 1-click to W3C JSON-LD (BioPAX/Schema.org) for automated virtual screening in RDKit and AutoDock. Built for EthnoHack 2026 under Horizon Europe ETHCSTWIN with NKUA and Fraunhofer SCAI, ByzMed-Graph turns premodern Mediterranean parchment into reproducible molecular science. Thank you."
  }
];

const HARD_QA_DEFENSE = [
  {
    q: "Is Step 1 just a dictionary lookup in client-side JavaScript?",
    a: "It is a curated 60-entry gazetteer equipped with morphological deaccenting (Unicode NFD diacritic stripping) and root stem matching (e.g., 'σιδηριτ' matching nominative Σιδηρῖτις and genitive σιδηρίτιδος). De Materia Medica contains over 800 chapters; our 60 entries represent a functional proof-of-concept. For the remaining ~90% of plants or non-botanical Greek text, the engine deliberately triggers an 'Out-of-Vocabulary / Unresolved' state rather than hallucinating. It also performs mineral homonym disambiguation to avoid confusing the herb σιδηρῖτις with the mineral σιδηρίτης λίθος (magnetite)."
  },
  {
    q: "How were the 25 benchmark passages chosen and who labelled gold answers?",
    a: "To be completely candid: this is an internal development and regression suite of 25 representative passages, not an independent double-blind evaluation. The gold identifications were derived from Max Wellmann's critical edition index (Weidmann, 1906–1914) and Berendes (1902), verified against Kew Plants of the World Online (POWO). We report zero synthetic LLM baselines. Crucially, our benchmark flags its own limitation: Passage 10 (Dioscorides III.155) compares Askyron to Hyperikon ('ὅμοιόν ἐστι τῷ ὑπερικῷ'), causing our stem matcher to flag a multi-entity comparative collision. We display this error openly rather than tuning it out."
  },
  {
    q: "What did your system find that a PubMed search wouldn't?",
    a: "PubMed requires modern Linnaean binomials and MeSH terms. If a researcher reads a Byzantine codex referencing 'Σιδηρόχορτον' for 'chilled phlegmatic lungs', PubMed returns zero hits. ByzMed-Graph resolves the historical synonym to Sideritis scardica Griseb. on Kew POWO, connects its metabolite Acteoside to ChEMBL447180, and bridges the humoral claim to COX-2 / TNF-alpha downregulation."
  },
  {
    q: "Why did you highlight Inula and Ecballium when Cucurbitacins have a failed, highly toxic development history?",
    a: "That is precisely why we chose them! Ethnopharmacology is not just about discovering panaceas; it is about toxicity containment. Cucurbitacin B from Ecballium elaterium is indeed a potent in-vitro JAK2/STAT3 inhibitor, but it is notoriously cytotoxic with a narrow therapeutic index—matching Dioscorides' explicit warning that it is 'θανατηφόρος' (lethal). Our system flags this toxicity rather than naively promoting it."
  },
  {
    q: "Where do your character offsets point to? Are they linked to the Vienna Dioscurides codex?",
    a: "To be completely rigorous: the character offsets point into the digital text of Max Wellmann's critical edition (1906–1914) derived from the Thesaurus Linguae Graecae (TLG), accompanied by folio cross-references to the illuminated 6th-century Codex Vindobonensis med. gr. 1. Offsets reflect the digital critical edition string."
  },
  {
    q: "Why do you explicitly separate Tier 1A from Tier 1B?",
    a: "Because EMA Traditional Herbal Medicinal Product (THMP) monographs under Directive 2004/24/EC are granted on documented 30-year safe traditional use (e.g. Sideritis for cough), NOT on Phase III randomized clinical trial efficacy. Conflating traditional-use regulatory monographs with double-blind RCTs is scientifically invalid."
  },
  {
    q: "What happens if a user pastes non-botanical Greek or an uncatalogued plant?",
    a: "The engine detects that confidence is below the 0.70 acceptance threshold and triggers an explicit 'Out-of-Vocabulary / Unresolved' state. It refuses to invent Linnaean binomials, maintaining epistemic humility."
  }
];

export function PitchGuideDrawer({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('3min'); // '3min' | 'qa'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-end">
      <div className="bg-[#FAF9F5] w-full max-w-2xl h-full shadow-2xl flex flex-col border-l border-[#E8E6DF] animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8E6DF] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-2xl bg-[#113827] text-white flex items-center justify-center">
              <Presentation className="w-4 h-4 text-[#A3E635]" />
            </div>
            <div>
              <h3 className="font-serif-display text-lg font-bold text-[#113827]">
                Presenter Pitch Companion & Judge Q&A Defense
              </h3>
              <p className="text-xs text-[#62746A]">
                Focused 3-minute stage pitch & rigorous faculty defense answers
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle: 3-Min Pitch vs Hard Q&A */}
        <div className="px-6 py-2.5 border-b border-[#E8E6DF] bg-white flex items-center gap-3 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('3min')}
            className={`pb-1 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === '3min'
                ? 'border-[#113827] text-[#113827] font-bold'
                : 'border-transparent text-[#718277] hover:text-[#113827]'
            }`}
          >
            <Timer className="w-3.5 h-3.5 text-[#134E35]" />
            <span>3-Minute Live Stage Pitch Script</span>
          </button>

          <button
            onClick={() => setActiveTab('qa')}
            className={`pb-1 border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'qa'
                ? 'border-[#113827] text-[#113827] font-bold'
                : 'border-transparent text-[#718277] hover:text-[#113827]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>7 Hard Judge Q&A Rebuttals</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* TAB 1: 3-MINUTE STAGE PITCH */}
          {activeTab === '3min' && (
            <div className="space-y-4">
              <div className="bg-[#EBF3EF] p-3.5 rounded-xl border border-[#134E35]/20 text-xs text-[#113827] space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#134E35]" />
                  Stage Rule: Deliver in 180 seconds flat
                </span>
                <p className="text-[11px] text-[#4A5D52]">
                  Lead with the 2000 Lancet Hypericum transplant crisis hook. Move immediately to the live Greek NLP demo in Step 1, highlight the 4-tier evidence split, and close with the N=25 benchmark.
                </p>
              </div>

              {SHORT_PITCH_3_MIN.map((sec, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-[#E8E6DF] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#134E35] bg-[#EBF3EF] px-2 py-0.5 rounded-full">
                      {sec.step}
                    </span>
                    <h4 className="text-xs font-bold text-[#113827]">
                      {sec.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#2C4134] leading-relaxed whitespace-pre-line bg-[#FAF9F5] p-3 rounded-xl border border-[#E8E6DF]/60 font-sans italic">
                    "{sec.script}"
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: HARD Q&A DEFENSE */}
          {activeTab === 'qa' && (
            <div className="space-y-3">
              <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-300 text-xs text-amber-950 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  Pharmacy Faculty & Bioinformatician Defense
                </span>
                <p className="text-[11px] text-amber-900 leading-relaxed">
                  Never bluster or guess. Acknowledge dictionary bounds and cytotoxicity openly. Epistemic honesty wins skeptical evaluators.
                </p>
              </div>

              {HARD_QA_DEFENSE.map((qa, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-[#E8E6DF] space-y-2">
                  <div className="text-xs font-bold text-red-900 flex items-start gap-2">
                    <span className="font-mono text-[10px] bg-red-100 px-1.5 py-0.5 rounded text-red-950 shrink-0 mt-0.5">Q{idx+1}</span>
                    <span>"{qa.q}"</span>
                  </div>
                  <div className="text-xs text-[#2C4134] leading-relaxed pl-6 border-l-2 border-emerald-600 bg-[#FAF9F5] p-2.5 rounded-r-xl">
                    <strong className="text-[#113827]">Defensive Answer:</strong> {qa.a}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
