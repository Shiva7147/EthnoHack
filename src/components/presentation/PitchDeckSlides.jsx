import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  ExternalLink,
  BookOpen,
  Award,
  Play,
  RotateCcw
} from 'lucide-react';

export function PitchDeckSlides({ onLaunchWorkingDemo, onExit }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title & Vision
    {
      id: "title",
      badge: "ETHNOHACK 2026 · HORIZON EUROPE ETHCSTWIN",
      subtitle: "Track 1: Traditional Knowledge · NKUA & Fraunhofer SCAI",
      title: "ByzMed-Graph",
      headline: "Bridging 2,000 Years of Premodern Mediterranean Ethnopharmacology to Modern Molecular Targets",
      description: "An open-science computational platform that resolves ancient Greek medical texts into Kew POWO accepted taxa, ChEMBL secondary metabolites, and human receptor binding kinetics with rigorous pharmacovigilance.",
      keyPoints: [
        { label: "Critical Editions", val: "Wellmann (1906), Kühn, Ideler" },
        { label: "Taxonomy Standard", val: "Kew Plants of the World Online (POWO)" },
        { label: "Validation Suite", val: "N=25 Classical Passages (96.0% Acc.)" },
        { label: "Safety Standard", val: "CYP450 / PXR Drug Interaction Screen" }
      ],
      footerNote: "Use [ → ] or [ Space ] on your keyboard to navigate slides"
    },

    // Slide 2: The Core Problem Statement
    {
      id: "problem",
      badge: "THE 2,000-YEAR DISCONNECT",
      title: "Why Traditional Medicine Remains Locked",
      headline: "Three Historical Friction Points Lock Ancient Therapeutics Away from Modern Drug Discovery",
      description: "Empirical Mediterranean medical manuscripts from Dioscorides to Byzantine court physicians documented thousands of bioactive preparations, but three fundamental barriers prevent computation:",
      cards: [
        {
          num: "01",
          tag: "Palaeographic Dialect Barrier",
          color: "border-amber-300 bg-amber-50/50 text-amber-950",
          detail: "Ancient Greek medical terms are locked in archaic inflected dialects with polytonic accents. Standard NLP tokenizers fail completely."
        },
        {
          num: "02",
          tag: "2,000-Year Taxonomic Drift",
          color: "border-blue-300 bg-blue-50/50 text-blue-950",
          detail: "Single plants shifted through multiple folk names across Classical, Galenic, and Byzantine eras before Linnaeus (1753), causing cross-contamination."
        },
        {
          num: "03",
          tag: "Humoral-to-Molecular Gap",
          color: "border-emerald-300 bg-emerald-50/50 text-emerald-950",
          detail: "Claims like 'dissolving cold humours' or 'drawing venom' have no direct mapping to modern MeSH ontologies or protein target classes (COX-2, TNF-α)."
        }
      ],
      crisisCase: {
        title: "The 2000 Lancet Transplant Crisis Demonstrates the Risk of Blind Folklore",
        text: "In 2000, The Lancet reported acute cardiac transplant rejections caused by St. John's Wort. Its constituent hyperforin binds human PXR (Ki = 27 nM; Moore et al., PNAS 2000), inducing CYP3A4 by up to 5-fold and clearing life-saving cyclosporine. Naive AI chatbots ignore these fatal interactions."
      }
    },

    // Slide 3: The Solution — 5-Step Scientific Pipeline
    {
      id: "solution",
      badge: "THE ARCHITECTURE",
      title: "The 5-Step Deterministic Pipeline",
      headline: "An End-to-End Computational Bridge from Archaic Text to Receptor Kinetics",
      description: "ByzMed-Graph replaces generic hallucinating chatbots with an auditable, deterministic 5-step pipeline where every assertion carries provenance coordinates:",
      steps: [
        {
          step: "01",
          name: "Greek NLP Extractor",
          desc: "Unicode NFD deaccenting & stem matching; computes exact character offsets [startChar:endChar] into Wellmann critical editions with mineral homonym disambiguation."
        },
        {
          step: "02",
          name: "4-Era Taxonomy",
          desc: "Traces synonyms across Classical, Roman, Byzantine, and Linnaean eras; reconciles to Kew Plants of the World Online (POWO) and NCBI Taxonomy IDs."
        },
        {
          step: "03",
          name: "Phytochemistry",
          desc: "Queries ChEMBL 34 & PubChem for isolated secondary metabolites, rendering 2D vector structures, canonical SMILES, and Lipinski Rule-of-Five properties."
        },
        {
          step: "04",
          name: "Molecular Targets",
          desc: "Crosswalks ancient indications to MeSH terms and UniProtKB human protein targets, displaying validated binding affinities (Ki, IC50)."
        },
        {
          step: "05",
          name: "Pharmacovigilance",
          desc: "CYP3A4 / P-gp herb-drug interaction matrix; enforces a strict 4-Tier evidence framework separating Phase III RCTs from EMA traditional-use monographs."
        }
      ]
    },

    // Slide 4: Quantitative Validation & Epistemic Humility
    {
      id: "validation",
      badge: "RIGOR & TRANSPARENCY",
      title: "Scientific Validation & Epistemic Humility",
      headline: "Tested Against Classical Greek Critical Editions With Documented Failure Modes",
      description: "We do not present synthetic or unmeasured LLM baselines. We evaluated our deaccented stem matcher against an internal regression suite of 25 classical passages across 46 annotated entities:",
      metrics: [
        { label: "Passage Taxon Accuracy", val: "24 / 25 (96.0%)", sub: "Exact 95% Wilson CI: 80.5% – 99.3%" },
        { label: "Gold Token Precision", val: "46 / 46 (100.0%)", sub: "TP=46, FP=0 (NFD Deaccented Stems)" },
        { label: "Critical Edition Anchors", val: "100.0%", sub: "Character spans into Wellmann 1906 text" },
        { label: "FAIR Data Compliance", val: "W3C JSON-LD", sub: "BioPAX & Schema.org ontologies" }
      ],
      discrepancyBox: {
        title: "Documented Limitation Flagged Openly (Passage 10 · Dioscorides III.155):",
        text: "In Dioscorides III.155, Askyron is compared to Hyperikon ('ὅμοιόν ἐστι τῷ ὑπερικῷ'). Our stem matcher detected Hypericum alongside Askyron. Rather than hiding this comparative clause collision, our benchmark flags it openly—demonstrating real-world epistemic humility."
      }
    },

    // Slide 5: Transition to Working Live Demo
    {
      id: "demo",
      badge: "LIVE DEMONSTRATION",
      title: "Ready to Explore the Live Workbench",
      headline: "Let's Walk Through the Live 5-Step Pipeline",
      description: "Click the button below or press [ → ] to launch the interactive research workbench. We will examine Sideritis scardica and Hypericum perforatum in real time.",
      features: [
        "Interactive Greek text analysis with character-span highlighting",
        "Kew POWO 4-Era taxonomic reconciliation with confidence scores",
        "ChEMBL 34 phytochemical structures and Lipinski drug-likeness",
        "UniProtKB target binding affinities and MeSH disease mapping",
        "Live CYP3A4 herb-drug interaction matrix with Lancet 2000 audit",
        "Interactive Multi-Modal Knowledge Graph with 1-click JSON-LD export"
      ]
    }
  ];

  const slide = slides[currentSlide];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(prev => prev + 1);
        } else {
          onLaunchWorkingDemo();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 0) {
          setCurrentSlide(prev => prev - 1);
        }
      } else if (e.key === 'Escape') {
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  return (
    <div className="fixed inset-0 z-50 bg-[#F8F7F2] text-[#113827] flex flex-col justify-between overflow-hidden select-none animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <header className="px-6 sm:px-12 py-4 border-b border-[#E8E6DF] bg-white/80 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#113827] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
            🌿
          </div>
          <div>
            <span className="font-serif-display font-bold text-lg text-[#113827] tracking-tight">
              ByzMed-Graph
            </span>
            <span className="text-[10px] font-mono text-[#62746A] ml-2 hidden sm:inline">
              Pitch Deck · EthnoHack 2026
            </span>
          </div>
        </div>

        {/* Slide Counter & Switch to Working */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs font-bold text-[#134E35] bg-[#EBF3EF] px-3 py-1 rounded-full border border-[#134E35]/20">
            Slide {currentSlide + 1} of {slides.length}
          </span>

          <button
            onClick={onLaunchWorkingDemo}
            className="text-xs px-4 py-1.5 rounded-full font-bold bg-[#A3E635] hover:bg-[#8CD320] text-[#113827] flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
          >
            <span>Launch Live Working</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onExit}
            className="text-xs text-[#718277] hover:text-[#113827] cursor-pointer"
          >
            Exit
          </button>
        </div>
      </header>

      {/* Main Slide Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 sm:px-12 py-8 flex flex-col justify-center overflow-y-auto">
        
        {/* SLIDE 1: TITLE */}
        {slide.id === "title" && (
          <div className="space-y-6 max-w-4xl animate-in slide-in-from-bottom-4 duration-300">
            <span className="inline-block font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#EBF3EF] text-[#134E35] border border-[#134E35]/30">
              {slide.badge}
            </span>
            <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[#113827] leading-tight tracking-tight">
              {slide.title}
            </h1>
            <p className="font-serif-display text-xl sm:text-2xl text-[#134E35] font-semibold leading-relaxed">
              {slide.headline}
            </p>
            <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed max-w-3xl">
              {slide.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4">
              {slide.keyPoints.map((kp, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-[#E8E6DF] shadow-2xs">
                  <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">{kp.label}</div>
                  <div className="text-xs font-bold text-[#113827] mt-1">{kp.val}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 2: PROBLEM */}
        {slide.id === "problem" && (
          <div className="space-y-6 max-w-5xl animate-in slide-in-from-bottom-4 duration-300">
            <span className="inline-block font-mono text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-900 border border-red-200">
              {slide.badge}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827]">
              {slide.title}
            </h2>
            <p className="text-sm text-[#4A5D52] max-w-3xl leading-relaxed">
              {slide.description}
            </p>

            {/* 3 Friction Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {slide.cards.map((c, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${c.color} shadow-2xs space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/80">{c.num}</span>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Friction Point</span>
                  </div>
                  <h3 className="font-serif-display text-base font-bold">{c.tag}</h3>
                  <p className="text-xs leading-relaxed opacity-90">{c.detail}</p>
                </div>
              ))}
            </div>

            {/* Crisis Callout */}
            <div className="p-4 rounded-2xl bg-[#0E2F20] text-white space-y-1.5 shadow-md border border-[#A3E635]/30">
              <div className="flex items-center gap-2 text-xs font-bold text-[#A3E635]">
                <ShieldAlert className="w-4 h-4 text-[#A3E635]" />
                <span>{slide.crisisCase.title}</span>
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed font-sans">
                {slide.crisisCase.text}
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 3: SOLUTION (5-STEP PIPELINE) */}
        {slide.id === "solution" && (
          <div className="space-y-6 max-w-5xl animate-in slide-in-from-bottom-4 duration-300">
            <span className="inline-block font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#EBF3EF] text-[#134E35] border border-[#134E35]/30">
              {slide.badge}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827]">
              {slide.title}
            </h2>
            <p className="text-sm text-[#4A5D52] max-w-3xl leading-relaxed">
              {slide.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
              {slide.steps.map((st, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-[#E8E6DF] shadow-2xs space-y-2 hover:border-[#113827] transition-all">
                  <div className="w-7 h-7 rounded-lg bg-[#113827] text-[#A3E635] font-mono text-xs font-bold flex items-center justify-center">
                    {st.step}
                  </div>
                  <h3 className="font-serif-display text-sm font-bold text-[#113827] leading-tight">
                    {st.name}
                  </h3>
                  <p className="text-[11px] text-[#5E6D64] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 4: VALIDATION */}
        {slide.id === "validation" && (
          <div className="space-y-6 max-w-5xl animate-in slide-in-from-bottom-4 duration-300">
            <span className="inline-block font-mono text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300">
              {slide.badge}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827]">
              {slide.title}
            </h2>
            <p className="text-sm text-[#4A5D52] max-w-3xl leading-relaxed">
              {slide.description}
            </p>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {slide.metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-[#E8E6DF] shadow-2xs text-center space-y-1">
                  <div className="text-[10px] font-mono uppercase font-bold text-[#718277]">{m.label}</div>
                  <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#113827]">{m.val}</div>
                  <div className="text-[10px] text-[#5E6D64] font-mono">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Discrepancy Box */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300 space-y-1 text-xs">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>{slide.discrepancyBox.title}</span>
              </div>
              <p className="text-amber-900 leading-relaxed font-sans">
                {slide.discrepancyBox.text}
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 5: DEMO TRANSITION */}
        {slide.id === "demo" && (
          <div className="space-y-6 max-w-4xl text-center mx-auto animate-in zoom-in-95 duration-300">
            <span className="inline-block font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#EBF3EF] text-[#134E35] border border-[#134E35]/30">
              {slide.badge}
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#113827]">
              {slide.headline}
            </h2>
            <p className="text-sm sm:text-base text-[#4A5D52] max-w-2xl mx-auto leading-relaxed">
              {slide.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left py-2">
              {slide.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#2D4A3E] bg-white p-2.5 rounded-xl border border-[#E8E6DF]">
                  <CheckCircle2 className="w-4 h-4 text-[#134E35] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onLaunchWorkingDemo}
                className="px-8 py-4 rounded-full font-bold bg-[#113827] hover:bg-[#0B291C] text-[#A3E635] text-base shadow-xl hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Launch Interactive Workbench Now</span>
                <ArrowRight className="w-5 h-5 text-[#A3E635]" />
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Bottom Deck Navigation Controller */}
      <footer className="px-6 sm:px-12 py-4 border-t border-[#E8E6DF] bg-white/80 backdrop-blur-md flex items-center justify-between">
        
        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx
                  ? 'w-8 bg-[#113827]'
                  : 'w-2.5 bg-[#D5D3CA] hover:bg-[#718277]'
              }`}
              title={`Jump to Slide ${idx + 1}: ${s.title}`}
            />
          ))}
        </div>

        {/* Arrow Keyboard Tip */}
        <div className="text-[11px] font-mono text-[#718277] hidden sm:block">
          Use <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border text-slate-800">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border text-slate-800">→</kbd> arrow keys to slide
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className="p-2.5 rounded-xl border border-[#D5D3CA] hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent text-[#113827] transition-colors cursor-pointer"
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {currentSlide < slides.length - 1 ? (
            <button
              onClick={() => setCurrentSlide(prev => prev + 1)}
              className="px-4 py-2 rounded-xl bg-[#113827] hover:bg-[#0B291C] text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
              title="Next Slide (Right Arrow / Space)"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onLaunchWorkingDemo}
              className="px-4 py-2 rounded-xl bg-[#A3E635] hover:bg-[#8CD320] text-[#113827] font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <span>Go to Working</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </footer>

    </div>
  );
}
