import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  X, 
  Volume2, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen
} from 'lucide-react';

export const TOUR_STEPS = [
  {
    stepIndex: 1,
    pipelineStep: 1,
    viewMode: 'pipeline',
    plantId: 'sideritis-scardica',
    durationSec: 30,
    timestamp: "0:00 – 0:30",
    title: "1. The Hook & Greek NLP Extractor",
    readoutScript: "Judges: Premodern Mediterranean medical manuscripts hold empirical discoveries that yielded blockbuster drugs from aspirin to artemisinin. But archaic dialects lock them away. In Step 1, our engine ingests raw Greek—here, Dioscorides Book IV, Chapter 33 for Sideritis. Notice how our Unicode NFD normalizer strips polytonic accents, matches inflected grammatical cases, flags mineral homonyms, and anchors character spans directly into Max Wellmann's 1906 critical edition. When an unknown passage is entered, it gracefully triggers an Out-of-Vocabulary state instead of hallucinating."
  },
  {
    stepIndex: 2,
    pipelineStep: 2,
    viewMode: 'pipeline',
    plantId: 'sideritis-scardica',
    durationSec: 30,
    timestamp: "0:30 – 1:00",
    title: "2. 4-Era Taxonomic Disambiguation (Kew POWO)",
    readoutScript: "In Step 2, we tackle 2,000 years of taxonomic drift. Before Linnaeus codified binomials in 1753, folk names shifted wildly across Classical, Galenic, Byzantine, and Renaissance eras. ByzMed-Graph resolves historical synonyms—from Dioscorides' Sideritis epimekes to modern Greek Siderochorton—mapping them to Kew Plants of the World Online (POWO) and NCBI Taxonomy ID 316274 with verifiable confidence scoring."
  },
  {
    stepIndex: 3,
    pipelineStep: 3,
    viewMode: 'pipeline',
    plantId: 'sideritis-scardica',
    durationSec: 30,
    timestamp: "1:00 – 1:30",
    title: "3. Phytochemical Metabolomics & SMILES",
    readoutScript: "Step 3 bridges botany to chemistry. We pull verified secondary metabolites from ChEMBL 34 and PubChem. For Sideritis, we profile Acteoside and Apigenin-7-glucoside, complete with 2D chemical vector structures, canonical SMILES, and Lipinski Rule-of-Five drug-likeness filters for rapid cheminformatics screening."
  },
  {
    stepIndex: 4,
    pipelineStep: 4,
    viewMode: 'pipeline',
    plantId: 'sideritis-scardica',
    durationSec: 30,
    timestamp: "1:30 – 2:00",
    title: "4. Molecular Targets & Bioactivity Bridges",
    readoutScript: "In Step 4, we cross the humoral-to-molecular gap. Ancient texts describe Sideritis as 'healing wounds caused by iron' and 'cooling inflamed heat.' We map these claims to MeSH terms and modern human target assays in UniProtKB: PTGS2 (COX-2) and TNF-alpha downregulation, grounded in published binding kinetics."
  },
  {
    stepIndex: 5,
    pipelineStep: 5,
    viewMode: 'pipeline',
    plantId: 'hypericum-perforatum',
    durationSec: 35,
    timestamp: "2:00 – 2:35",
    title: "5. Pharmacovigilance, CYP3A4 & Epistemic Humility",
    readoutScript: "Step 5 is where our epistemic rigor shines. In February 2000, The Lancet reported acute heart transplant rejections when patients self-medicated with St. John's Wort. Its constituent hyperforin binds human PXR with an apparent inhibition constant Ki = 27 nM (Moore et al., PNAS 2000), inducing CYP3A4 and clearing life-saving cyclosporine. Our system flags this catastrophic drug interaction. Furthermore, we strictly separate Tier 1A clinical RCTs from Tier 1B EMA traditional-use monographs."
  },
  {
    stepIndex: 6,
    pipelineStep: 5,
    viewMode: 'graph',
    plantId: 'sideritis-scardica',
    durationSec: 25,
    timestamp: "2:35 – 3:00",
    title: "6. FAIR Knowledge Graph & 1-Click Export",
    readoutScript: "Finally, every relationship is connected in an interactive multi-modal Knowledge Graph. With one click, researchers can export the entire subgraph into W3C-standard JSON-LD (BioPAX / Schema.org) for automated docking in RDKit or AutoDock. Built for EthnoHack 2026 under Horizon Europe ETHCSTWIN with NKUA and Fraunhofer SCAI, ByzMed-Graph turns premodern parchment into reproducible molecular science. Thank you."
  }
];

export function AutoTourPlayer({
  isOpen,
  onClose,
  onTriggerStep,
  onTriggerPlant,
  onTriggerViewMode
}) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(TOUR_STEPS[0].durationSec);
  const [isExpanded, setIsExpanded] = useState(true);

  const step = TOUR_STEPS[currentStepIdx];
  const timerRef = useRef(null);

  // Apply step actions whenever stepIndex changes
  const applyStepAction = (idx) => {
    const target = TOUR_STEPS[idx];
    if (!target) return;

    if (target.plantId) {
      onTriggerPlant(target.plantId);
    }
    if (target.viewMode) {
      onTriggerViewMode(target.viewMode);
    }
    if (target.pipelineStep && target.viewMode === 'pipeline') {
      onTriggerStep(target.pipelineStep);
    }

    setSecondsRemaining(target.durationSec);

    // Smooth scroll down to main content area
    setTimeout(() => {
      window.scrollTo({ top: 160, behavior: 'smooth' });
    }, 100);
  };

  // Start / pause handler
  const handleTogglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const handleNext = () => {
    if (currentStepIdx < TOUR_STEPS.length - 1) {
      const nextIdx = currentStepIdx + 1;
      setCurrentStepIdx(nextIdx);
      applyStepAction(nextIdx);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      const prevIdx = currentStepIdx - 1;
      setCurrentStepIdx(prevIdx);
      applyStepAction(prevIdx);
    }
  };

  // Auto-advance timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            handleNext();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentStepIdx]);

  // When tour opens, initialize step 0
  useEffect(() => {
    if (isOpen) {
      setCurrentStepIdx(0);
      setIsPlaying(true);
      applyStepAction(0);
    } else {
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const progressPercent = ((step.durationSec - secondsRemaining) / step.durationSec) * 100;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#113827] text-white rounded-3xl shadow-2xl border border-[#A3E635]/40 overflow-hidden backdrop-blur-md">
        
        {/* Progress Bar Header */}
        <div className="w-full bg-[#0B291C] h-1.5 overflow-hidden">
          <div 
            className="bg-[#A3E635] h-full transition-all duration-1000 ease-linear"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Main Controls Row */}
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            
            {/* Left: Step Badge & Title */}
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="bg-[#A3E635] text-[#113827] font-mono text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0">
                Step {currentStepIdx + 1}/{TOUR_STEPS.length}
              </span>
              <span className="font-mono text-xs text-[#A3E635] hidden sm:inline shrink-0">
                [{step.timestamp}]
              </span>
              <h4 className="font-serif-display text-sm sm:text-base font-bold text-white truncate">
                {step.title}
              </h4>
            </div>

            {/* Right: Media Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Prev */}
              <button
                onClick={handlePrev}
                disabled={currentStepIdx === 0}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white transition-colors cursor-pointer"
                title="Previous Step"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              {/* Play / Pause */}
              <button
                onClick={handleTogglePlay}
                className="px-3.5 py-2 rounded-xl bg-[#A3E635] hover:bg-[#8CD320] text-[#113827] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span className="font-mono">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span className="font-mono">Auto-Play</span>
                  </>
                )}
                <span className="font-mono text-[11px] bg-[#113827]/20 px-1.5 py-0.2 rounded text-[#113827]">
                  {secondsRemaining}s
                </span>
              </button>

              {/* Next */}
              <button
                onClick={handleNext}
                disabled={currentStepIdx === TOUR_STEPS.length - 1}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white transition-colors cursor-pointer"
                title="Next Step"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              {/* Expand / Minimize */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title={isExpanded ? "Collapse Script" : "Expand Script"}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Close */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 transition-colors cursor-pointer"
                title="Exit Tour Mode"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Teleprompter Script Card (Expandable) */}
          {isExpanded && (
            <div className="bg-[#0B291C]/90 border border-[#A3E635]/20 rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed font-sans text-white/95 shadow-inner">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#A3E635] mb-1.5">
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span>Read Out Loud Now ({secondsRemaining}s remaining on this screen):</span>
              </div>
              <p className="font-medium text-emerald-50 select-all">
                "{step.readoutScript}"
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
