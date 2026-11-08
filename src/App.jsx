import React, { useState } from 'react';
import { ETHNO_CASE_STUDIES, SYSTEM_STATISTICS } from './data/ethnopharmData';

// Pipeline Components
import { PipelineStepper } from './components/pipeline/PipelineStepper';
import { ProblemStatementBanner } from './components/pipeline/ProblemStatementBanner';
import { CustomPassageAnalyzer } from './components/CustomPassageAnalyzer';
import { ManuscriptExplorer } from './components/ManuscriptExplorer';
import { TaxonomicDisambiguation } from './components/TaxonomicDisambiguation';
import { PhytochemicalProfiler } from './components/PhytochemicalProfiler';
import { MolecularTargetBridge } from './components/MolecularTargetBridge';
import { HerbDrugInteraction } from './components/HerbDrugInteraction';
import { UncertaintyEngine } from './components/UncertaintyEngine';
import { KnowledgeGraphView } from './components/KnowledgeGraphView';

// Modals & Drawers
import { FairExportModal } from './components/FairExportModal';
import { PitchGuideDrawer } from './components/PitchGuideDrawer';
import { BlindEvaluationModal } from './components/dashboard/BlindEvaluationModal';
import { FailureCasesModal } from './components/dashboard/FailureCasesModal';
import { AutoTourPlayer } from './components/presentation/AutoTourPlayer';
import { PitchDeckSlides } from './components/presentation/PitchDeckSlides';

import { 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  BookOpen, 
  Network, 
  CheckCircle2, 
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Play
} from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([1]);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(ETHNO_CASE_STUDIES[0].id);
  const [viewMode, setViewMode] = useState('pipeline'); // 'pipeline' | 'graph'

  // Modals state
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isPitchGuideOpen, setIsPitchGuideOpen] = useState(false);
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);
  const [isFailureCasesOpen, setIsFailureCasesOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const activePlant = ETHNO_CASE_STUDIES.find(cs => cs.id === selectedCaseStudyId) || ETHNO_CASE_STUDIES[0];

  const handleStepChange = (newStep) => {
    setCurrentStep(newStep);
    if (!completedSteps.includes(newStep)) {
      setCompletedSteps(prev => [...prev, newStep]);
    }
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleSelectPlant = (plantId) => {
    setSelectedCaseStudyId(plantId);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#1A2E22] flex flex-col font-body selection:bg-[#134E35]/15 selection:text-[#134E35]">
      
      {/* 1. TOP HEADER (Scientific & BlooM Palette) */}
      <header className="sticky top-0 z-40 bg-[#F8F7F2]/95 backdrop-blur-md border-b border-[#E8E6DF]">
        {/* Institutional Track Ribbon */}
        <div className="bg-[#0E2F20] text-white text-[11px] px-4 sm:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2 border-b border-[#0A2418]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse"></span>
            <span className="font-semibold tracking-wide">
              EthnoHack 2026 · Horizon Europe ETHCSTWIN
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-white/80 hidden sm:inline">
              National & Kapodistrian University of Athens (NKUA) & Fraunhofer SCAI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-[#134E35] text-[#A3E635] font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-[#A3E635]/30">
              Track 1: Traditional Knowledge
            </span>
            <span className="hidden md:inline bg-[#134E35] text-white/80 font-mono text-[10px] px-2 py-0.5 rounded-full">
              Track 2: Natural Products
            </span>
            <span className="hidden lg:inline bg-[#134E35] text-white/80 font-mono text-[10px] px-2 py-0.5 rounded-full">
              Track 4: Digital Health
            </span>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          
          {/* Brand */}
          <div 
            onClick={() => { setViewMode('pipeline'); handleStepChange(1); }}
            className="cursor-pointer flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#113827] flex items-center justify-center text-white text-lg shadow-2xs group-hover:scale-105 transition-transform">
              🌿
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#113827]">
                  ByzMed<span className="text-[#134E35] italic">-Graph</span>
                </span>
                <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#EBF3EF] text-[#134E35] border border-[#134E35]/20">
                  5-Step Pipeline
                </span>
              </div>
              <p className="text-[11px] text-[#62746A] tracking-tight hidden sm:block">
                Premodern Mediterranean Ethnopharmacology to Molecular Targets
              </p>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setViewMode('deck')}
              className={`text-xs px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer ${
                viewMode === 'deck'
                  ? 'bg-[#113827] text-[#A3E635] ring-2 ring-[#A3E635]'
                  : 'bg-white border border-[#113827]/30 text-[#113827] hover:bg-[#FAF9F5]'
              }`}
              title="Open full-screen 5-slide presentation deck before launching the live demo"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#113827]" />
              <span>Pitch Deck (5 Slides)</span>
            </button>

            <button
              onClick={() => setIsTourOpen(!isTourOpen)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer ${
                isTourOpen
                  ? 'bg-[#A3E635] text-[#113827] ring-2 ring-[#113827]'
                  : 'bg-[#A3E635] hover:bg-[#8CD320] text-[#113827]'
              }`}
              title="Start guided recording tour with synchronized live script"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isTourOpen ? 'Active Tour' : 'Auto-Tour'}</span>
            </button>

            <button
              onClick={() => setIsEvaluationOpen(true)}
              className="text-xs px-3 py-1.5 rounded-full font-semibold bg-[#EBF3EF] border border-[#134E35]/30 hover:bg-[#D8E9E0] text-[#113827] flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
              title="Inspect quantitative accuracy on held-out retrospective benchmark"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>Validation Suite (N=25)</span>
            </button>

            <button
              onClick={() => setIsFailureCasesOpen(true)}
              className="text-xs px-3 py-1.5 rounded-full font-semibold bg-amber-50 border border-amber-300 hover:bg-amber-100 text-amber-900 flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
              title="Inspect transparent edge failure conditions and limitations"
            >
              <span>Known Limitations</span>
            </button>

            <button
              onClick={() => setIsPitchGuideOpen(true)}
              className="text-xs px-3.5 py-1.5 rounded-full font-semibold bg-[#113827] hover:bg-[#0B291C] text-white flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#A3E635]" />
              <span className="hidden sm:inline">Pitch & Q&A Defense</span>
              <span className="sm:hidden">Defense</span>
            </button>

            <button
              onClick={() => setIsExportOpen(true)}
              className="text-xs px-3 py-1.5 rounded-full font-semibold bg-white border border-[#D5D3CA] hover:border-[#113827] text-[#113827] hover:bg-[#FAF9F5] flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#134E35]" />
              <span className="hidden md:inline">FAIR JSON-LD</span>
            </button>
          </div>
        </div>

        {/* Specimen Quick-Switch Pill Bar & Mode Toggle */}
        <div className="bg-[#F1EFEA] border-t border-[#E8E6DF] px-4 sm:px-8 py-2">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="font-mono text-[10px] uppercase font-bold text-[#718277] shrink-0">
                Active Flora:
              </span>
              {ETHNO_CASE_STUDIES.map(plant => {
                const isSelected = plant.id === selectedCaseStudyId;
                const isOrphan = plant.noveltyScore && plant.noveltyScore >= 0.7;
                return (
                  <button
                    key={plant.id}
                    onClick={() => handleSelectPlant(plant.id)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#113827] text-white shadow-2xs'
                        : 'bg-white hover:bg-[#FAF9F5] text-[#4A5D52] border border-[#E8E6DF]'
                    }`}
                  >
                    <span className="italic">{plant.acceptedBinomial.split(' ')[0]} {plant.acceptedBinomial.split(' ')[1]}</span>
                    {isOrphan && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-950 font-mono font-bold">
                        Lead
                      </span>
                    )}
                    {plant.id === 'hypericum-perforatum' && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-red-200 text-red-950 font-mono font-bold">
                        CYP3A4
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Pipeline vs Knowledge Graph Mode Toggle */}
            <div className="flex items-center gap-1 self-end sm:self-auto shrink-0 bg-white p-0.5 rounded-full border border-[#D5D3CA]">
              <button
                onClick={() => setViewMode('deck')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                  viewMode === 'deck'
                    ? 'bg-[#113827] text-white shadow-2xs'
                    : 'text-[#5E6D64] hover:text-[#113827]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#A3E635]" />
                <span>Pitch Deck (5 Slides)</span>
              </button>
              <button
                onClick={() => setViewMode('pipeline')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'pipeline'
                    ? 'bg-[#113827] text-white shadow-2xs'
                    : 'text-[#5E6D64] hover:text-[#113827]'
                }`}
              >
                5-Step Pipeline
              </button>
              <button
                onClick={() => setViewMode('graph')}
                className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                  viewMode === 'graph'
                    ? 'bg-[#113827] text-white shadow-2xs'
                    : 'text-[#5E6D64] hover:text-[#113827]'
                }`}
              >
                <Network className="w-3 h-3" />
                <span>Multi-Hop Graph</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN APPLICATION CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6 w-full">
        
        {/* VIEW MODE 1: 5-STEP GUIDED SCIENTIFIC PIPELINE */}
        {viewMode === 'pipeline' && (
          <div className="space-y-6">
            
            {/* Problem Statement & Architecture Banner */}
            <ProblemStatementBanner />

            {/* Stepper Navigation Bar */}
            <PipelineStepper
              currentStep={currentStep}
              onSelectStep={handleStepChange}
              completedSteps={completedSteps}
            />

            {/* STEP 1: GREEK NLP EXTRACTION */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <CustomPassageAnalyzer
                  onSelectCaseStudy={handleSelectPlant}
                  onProceedToStep2={(plantKey) => {
                    if (plantKey) handleSelectPlant(plantKey);
                    handleStepChange(2);
                  }}
                />
              </div>
            )}

            {/* STEP 2: 4-ERA TAXONOMIC DISAMBIGUATION */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Step Subheader */}
                <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#134E35] font-bold">
                      STEP 2 OF 5 · TAXONOMIC DISAMBIGUATION MATRIX
                    </span>
                    <h3 className="font-serif-display text-lg font-bold text-[#113827]">
                      Reconciling {activePlant.ancientNameGreek} Across 4 Historical Eras
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#EBF3EF] text-[#113827] border border-[#134E35]/20 font-bold">
                      {(activePlant.disambiguationConfidence * 100).toFixed(0)}% Kew POWO Certainty
                    </span>
                  </div>
                </div>

                {/* Critical Manuscript Explorer */}
                <ManuscriptExplorer
                  caseStudy={activePlant}
                  onEntitySelect={() => {}}
                />

                {/* 4-Era Taxonomic Resolver */}
                <TaxonomicDisambiguation
                  caseStudy={activePlant}
                />

                {/* Step Navigation Controls */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => handleStepChange(1)}
                    className="px-5 py-2.5 rounded-full border border-[#D5D3CA] hover:border-[#113827] bg-white text-xs font-semibold text-[#113827] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Step 1: Greek NLP</span>
                  </button>

                  <button
                    onClick={() => handleStepChange(3)}
                    className="px-6 py-2.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                  >
                    <span>Proceed to Step 3: Phytochemistry</span>
                    <ArrowRight className="w-4 h-4 text-[#A3E635]" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PHYTOCHEMICAL METABOLOMICS */}
            {currentStep === 3 && (
              <div className="space-y-6">
                {/* Step Subheader */}
                <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#134E35] font-bold">
                      STEP 3 OF 5 · METABOLOMIC CHEMICAL PROFILING
                    </span>
                    <h3 className="font-serif-display text-lg font-bold text-[#113827]">
                      Bioactive Metabolites Isolated from {activePlant.acceptedBinomial}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-[#5E6D64]">
                    Cross-referenced with ChEMBL 34 & PubChem
                  </div>
                </div>

                {/* Phytochemical Profiler & 2D Structures */}
                <PhytochemicalProfiler
                  caseStudy={activePlant}
                />

                {/* Step Navigation Controls */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => handleStepChange(2)}
                    className="px-5 py-2.5 rounded-full border border-[#D5D3CA] hover:border-[#113827] bg-white text-xs font-semibold text-[#113827] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Step 2: Taxonomy</span>
                  </button>

                  <button
                    onClick={() => handleStepChange(4)}
                    className="px-6 py-2.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                  >
                    <span>Proceed to Step 4: Molecular Targets</span>
                    <ArrowRight className="w-4 h-4 text-[#A3E635]" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: MOLECULAR TARGET & BIOACTIVITY BRIDGE */}
            {currentStep === 4 && (
              <div className="space-y-6">
                {/* Step Subheader */}
                <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#134E35] font-bold">
                      STEP 4 OF 5 · HUMORAL-TO-MOLECULAR RECEPTOR BRIDGE
                    </span>
                    <h3 className="font-serif-display text-lg font-bold text-[#113827]">
                      Receptor Kinetics & Evidence Tiers for {activePlant.acceptedBinomial}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-[#5E6D64]">
                    Mapped to UniProtKB & EMA Community Monographs
                  </div>
                </div>

                {/* Target & Semantic Bridge Module */}
                <MolecularTargetBridge
                  caseStudy={activePlant}
                />

                {/* Step Navigation Controls */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => handleStepChange(3)}
                    className="px-5 py-2.5 rounded-full border border-[#D5D3CA] hover:border-[#113827] bg-white text-xs font-semibold text-[#113827] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Step 3: Phytochemistry</span>
                  </button>

                  <button
                    onClick={() => handleStepChange(5)}
                    className="px-6 py-2.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                  >
                    <span>Proceed to Step 5: Pharmacovigilance & Safety</span>
                    <ArrowRight className="w-4 h-4 text-[#A3E635]" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: PHARMACOVIGILANCE & SCIENTIFIC RIGOR */}
            {currentStep === 5 && (
              <div className="space-y-6">
                {/* Step Subheader */}
                <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#134E35] font-bold">
                      STEP 5 OF 5 · PHARMACOVIGILANCE & EPISTEMIC RIGOR
                    </span>
                    <h3 className="font-serif-display text-lg font-bold text-[#113827]">
                      Herb-Drug Interactions & 4-Tier Uncertainty Quantification
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsExportOpen(true)}
                      className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#113827] text-white flex items-center gap-1.5 shadow-2xs cursor-pointer hover:bg-[#0B291C]"
                    >
                      <Download className="w-3.5 h-3.5 text-[#A3E635]" />
                      <span>Download FAIR Package</span>
                    </button>
                  </div>
                </div>

                {/* Herb Drug Interaction Safety Engine */}
                <HerbDrugInteraction />

                {/* 4-Tier Epistemic Uncertainty Breakdown */}
                <UncertaintyEngine />

                {/* Pipeline Completion Controls */}
                <div className="p-6 rounded-2xl bg-[#EBF3EF] border border-[#134E35]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#113827] uppercase">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>End-to-End Pipeline Traversal Complete</span>
                    </div>
                    <p className="text-xs text-[#4A5D52]">
                      You have verified {activePlant.acceptedBinomial} from its archaic Greek text in Dioscorides to its validated human targets and CYP3A4 safety profile.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => handleStepChange(1)}
                      className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF9F5] text-xs font-semibold text-[#113827] border border-[#D5D3CA] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#718277]" />
                      <span>Test Another Passage</span>
                    </button>

                    <button
                      onClick={() => setViewMode('graph')}
                      className="px-6 py-2.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                    >
                      <Network className="w-3.5 h-3.5 text-[#A3E635]" />
                      <span>View Knowledge Graph</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* VIEW MODE 2: MULTI-HOP KNOWLEDGE GRAPH VIEW */}
        {viewMode === 'graph' && (
          <div className="space-y-4">
            <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#134E35] font-bold">
                  KNOWLEDGE GRAPH VIEW
                </span>
                <h3 className="font-serif-display text-lg font-bold text-[#113827]">
                  Multi-Hop Assertions for {activePlant.acceptedBinomial}
                </h3>
              </div>

              <button
                onClick={() => setViewMode('pipeline')}
                className="px-4 py-2 rounded-full bg-[#113827] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-[#0B291C]"
              >
                <span>Return to 5-Step Pipeline</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A3E635]" />
              </button>
            </div>

            <KnowledgeGraphView
              selectedCaseStudyId={selectedCaseStudyId}
            />
          </div>
        )}

      </main>

      {/* 3. SCIENTIFIC FOOTER */}
      <footer className="border-t border-[#E8E6DF] bg-[#F1EFEA] py-8 text-xs text-[#5E6D64]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-bold text-[#113827]">
              ByzMed-Graph · EthnoHack 2026
            </div>
            <p className="text-[11px] text-[#718277]">
              Developed under Horizon Europe ETHCSTWIN. National & Kapodistrian University of Athens (NKUA) & Fraunhofer SCAI.
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <button onClick={() => setIsTourOpen(true)} className="hover:text-[#113827] text-emerald-800 font-bold underline">
              ▶ Guided Tour
            </button>
            <span>·</span>
            <button onClick={() => setIsEvaluationOpen(true)} className="hover:text-[#113827] underline">
              Validation Suite (N=25)
            </button>
            <span>·</span>
            <button onClick={() => setIsFailureCasesOpen(true)} className="hover:text-[#113827] underline">
              Limitations
            </button>
            <span>·</span>
            <button onClick={() => setIsPitchGuideOpen(true)} className="hover:text-[#113827] underline">
              Pitch Guide
            </button>
            <span>·</span>
            <span className="text-slate-400">MIT Open Science</span>
          </div>
        </div>
      </footer>

      {/* MODALS & FULL-SCREEN PRESENTATION DECK */}
      {viewMode === 'deck' && (
        <PitchDeckSlides
          onLaunchWorkingDemo={() => {
            setViewMode('pipeline');
            handleStepChange(1);
          }}
          onExit={() => setViewMode('pipeline')}
        />
      )}

      <AutoTourPlayer
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onTriggerStep={(step) => handleStepChange(step)}
        onTriggerPlant={(plantId) => handleSelectPlant(plantId)}
        onTriggerViewMode={(mode) => setViewMode(mode)}
      />

      <FairExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        currentCaseStudy={activePlant}
      />

      <PitchGuideDrawer
        isOpen={isPitchGuideOpen}
        onClose={() => setIsPitchGuideOpen(false)}
      />

      <BlindEvaluationModal
        isOpen={isEvaluationOpen}
        onClose={() => setIsEvaluationOpen(false)}
      />

      <FailureCasesModal
        isOpen={isFailureCasesOpen}
        onClose={() => setIsFailureCasesOpen(false)}
      />

    </div>
  );
}
