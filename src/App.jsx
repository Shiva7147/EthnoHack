import React, { useState } from 'react';
import { ETHNO_CASE_STUDIES, SYSTEM_STATISTICS } from './data/ethnopharmData';
import { DashboardNavbar } from './components/dashboard/DashboardNavbar';
import { DashboardHero } from './components/dashboard/DashboardHero';
import { DashboardPillarBar } from './components/dashboard/DashboardPillarBar';
import { DashboardTaxaCards } from './components/dashboard/DashboardTaxaCards';
import { DashboardInFocusBanner } from './components/dashboard/DashboardInFocusBanner';
import { DashboardEditorialSplit } from './components/dashboard/DashboardEditorialSplit';
import { DashboardCommunityAndBlog } from './components/dashboard/DashboardCommunityAndBlog';

// Core Research Modules
import { ManuscriptExplorer } from './components/ManuscriptExplorer';
import { TaxonomicDisambiguation } from './components/TaxonomicDisambiguation';
import { PhytochemicalProfiler } from './components/PhytochemicalProfiler';
import { MolecularTargetBridge } from './components/MolecularTargetBridge';
import { KnowledgeGraphView } from './components/KnowledgeGraphView';
import { UncertaintyEngine } from './components/UncertaintyEngine';
import { HerbDrugInteraction } from './components/HerbDrugInteraction';
import { CustomPassageAnalyzer } from './components/CustomPassageAnalyzer';
import { FairExportModal } from './components/FairExportModal';
import { PitchGuideDrawer } from './components/PitchGuideDrawer';
import { SearchModal } from './components/bloom/SearchModal';
import { BlindEvaluationModal } from './components/dashboard/BlindEvaluationModal';
import { FailureCasesModal } from './components/dashboard/FailureCasesModal';

import { Sparkles, ArrowRight, ShieldCheck, Download, ExternalLink, Globe, BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(ETHNO_CASE_STUDIES[0].id);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isPitchGuideOpen, setIsPitchGuideOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEvaluationOpen, setIsEvaluationOpen] = useState(false);
  const [isFailureCasesOpen, setIsFailureCasesOpen] = useState(false);
  const [demoMode, setDemoMode] = useState(true);

  const activePlant = ETHNO_CASE_STUDIES.find(cs => cs.id === selectedCaseStudyId) || ETHNO_CASE_STUDIES[0];

  const handleSelectCaseStudyFromNlp = (plantKey) => {
    setSelectedCaseStudyId(plantKey);
    setActiveTab('overview');
    const el = document.getElementById('workbench-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJumpToSection = (sectionId) => {
    setActiveTab('overview');
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPillar = (pillarId) => {
    if (pillarId === 'nlp') setActiveTab('nlp');
    else if (pillarId === 'taxonomy') handleJumpToSection('taxonomy');
    else if (pillarId === 'chemistry') handleJumpToSection('chemistry');
    else if (pillarId === 'targets') handleJumpToSection('targets');
    else if (pillarId === 'safety') setActiveTab('safety');
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#1A2E22] flex flex-col font-body selection:bg-[#134E35]/15 selection:text-[#134E35]">
      
      {/* 1. Dashboard Top Navigation (BlooM Aesthetic) */}
      <DashboardNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenPitchGuide={() => setIsPitchGuideOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenEvaluation={() => setIsEvaluationOpen(true)}
        onOpenFailureCases={() => setIsFailureCasesOpen(true)}
        demoMode={demoMode}
        setDemoMode={setDemoMode}
      />

      <main className="flex-1 space-y-10 sm:space-y-14">
        {/* 2. Executive Hero Banner */}
        <DashboardHero
          activePlant={activePlant}
          onExploreCaseStudy={() => handleJumpToSection('workbench-section')}
          onOpenPitchGuide={() => setIsPitchGuideOpen(true)}
        />

        {/* 3. 5-Pillar Research Foundation Bar (BlooM 5-Pillar Bar Style) */}
        <DashboardPillarBar
          onSelectPillar={handleSelectPillar}
        />

        {/* 4. Curated Flora Cards (BlooM 4-Card Collection Grid) */}
        <DashboardTaxaCards
          selectedId={selectedCaseStudyId}
          onSelect={(id) => {
            setSelectedCaseStudyId(id);
            handleJumpToSection('workbench-section');
          }}
        />

        {/* 5. Deep Forest Green In-Focus Showcase Card (BlooM App Showcase Style) */}
        <DashboardInFocusBanner
          activePlant={activePlant}
          onJumpToSection={handleJumpToSection}
        />

        {/* 6. Main Dynamic Workbench Container */}
        <div id="workbench-section" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 pb-12">
          
          {/* TAB 1: OVERVIEW & PLANT WORKBENCH */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Manuscript Explorer */}
              <div id="manuscript" className="scroll-mt-28">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#113827]"></span>
                    <h3 className="font-serif-display text-xl font-bold text-[#113827]">
                      Bilingual Critical Manuscript Reading Room
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#718277]">
                    Click highlighted Greek tokens to inspect modern entities
                  </span>
                </div>
                <ManuscriptExplorer
                  caseStudy={activePlant}
                  onEntitySelect={() => {}}
                />
              </div>

              {/* Taxonomic Disambiguation Matrix */}
              <div id="taxonomy" className="scroll-mt-28">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1B4332]"></span>
                    <h3 className="font-serif-display text-xl font-bold text-[#113827]">
                      4-Era Historical Synonym Disambiguation Matrix
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#718277]">
                    Kew POWO & NCBI Taxonomy Authority Mapping
                  </span>
                </div>
                <TaxonomicDisambiguation
                  caseStudy={activePlant}
                />
              </div>

              {/* Phytochemical Profiler & 2D Structures */}
              <div id="chemistry" className="scroll-mt-28">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#134E35]"></span>
                    <h3 className="font-serif-display text-xl font-bold text-[#113827]">
                      Phytochemical Metabolomics & 2D Chemical Structures
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#718277]">
                    ChEMBL 34 & Lipinski Rule of 5 Evaluation
                  </span>
                </div>
                <PhytochemicalProfiler
                  caseStudy={activePlant}
                />
              </div>

              {/* Molecular Target & EMA Bridge */}
              <div id="targets" className="scroll-mt-28">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                    <h3 className="font-serif-display text-xl font-bold text-[#113827]">
                      Molecular Targets & EMA Regulatory Clinical Monograph
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#718277]">
                    UniProtKB Binding Kinetics & European Herbal Monographs
                  </span>
                </div>
                <MolecularTargetBridge
                  caseStudy={activePlant}
                />
              </div>
            </div>
          )}

          {/* TAB 2: MULTI-HOP KNOWLEDGE NETWORK */}
          {activeTab === 'network' && (
            <div className="space-y-4">
              <KnowledgeGraphView
                selectedCaseStudyId={selectedCaseStudyId}
              />
            </div>
          )}

          {/* TAB 3: LIVE PREMODERN GREEK NLP EXTRACTOR */}
          {activeTab === 'nlp' && (
            <div className="space-y-4">
              <CustomPassageAnalyzer
                onSelectCaseStudy={handleSelectCaseStudyFromNlp}
              />
            </div>
          )}

          {/* TAB 4: PHARMACOVIGILANCE & DRUG SAFETY */}
          {activeTab === 'safety' && (
            <div className="space-y-4">
              <HerbDrugInteraction />
            </div>
          )}

          {/* TAB 5: SCIENTIFIC UNCERTAINTY & METHODOLOGY */}
          {activeTab === 'uncertainty' && (
            <div className="space-y-4">
              <UncertaintyEngine />
            </div>
          )}

        </div>

        {/* 7. BlooM Editorial Split Section ("More Than Folk Medicine") */}
        {activeTab === 'overview' && (
          <DashboardEditorialSplit
            onExploreSafety={() => {
              setActiveTab('safety');
              window.scrollTo({ top: 400, behavior: 'smooth' });
            }}
            onOpenPitchGuide={() => setIsPitchGuideOpen(true)}
          />
        )}

        {/* 8. BlooM Community Testimonials, Research Blog Dispatches & Pre-Footer Banner */}
        {activeTab === 'overview' && (
          <DashboardCommunityAndBlog
            onOpenEvaluation={() => setIsEvaluationOpen(true)}
            onSelectCaseStudy={(id) => {
              setSelectedCaseStudyId(id);
              setActiveTab('overview');
              handleJumpToSection('workbench-section');
            }}
            onLaunchNlp={() => {
              setActiveTab('nlp');
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            onOpenPitchGuide={() => setIsPitchGuideOpen(true)}
          />
        )}
      </main>

      {/* 7. Editorial Scientific Dashboard Footer in BlooM Style */}
      <footer className="border-t border-[#E8E6DF] bg-[#F6F5F0] pt-14 pb-12 text-[#2C4134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand column */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#113827] text-white flex items-center justify-center font-bold text-sm">
                  🌿
                </div>
                <span className="font-serif-display text-2xl font-bold tracking-tight text-[#113827]">
                  ByzMed<span className="text-[#134E35] italic">-Graph</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#134E35] mb-2"></span>
              </div>
              <p className="text-xs sm:text-sm text-[#62746A] leading-relaxed max-w-sm">
                Open-science computational platform bridging premodern Mediterranean ethnopharmacology to modern molecular targets.
              </p>
              <div className="text-[11px] font-mono text-[#718277]">
                Developed for EthnoHack 2026 under Horizon Europe ETHCSTWIN.
              </div>
            </div>

            {/* Curated Taxa Links */}
            <div className="md:col-span-2 space-y-2.5">
              <h4 className="text-xs font-bold text-[#113827] uppercase tracking-wider">
                Benchmark Flora
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5E6D64]">
                <li><button onClick={() => { setSelectedCaseStudyId('sideritis-scardica'); handleJumpToSection('workbench-section'); }} className="hover:text-[#113827] transition-colors italic">Sideritis scardica</button></li>
                <li><button onClick={() => { setSelectedCaseStudyId('pistacia-lentiscus'); handleJumpToSection('workbench-section'); }} className="hover:text-[#113827] transition-colors italic">Pistacia lentiscus</button></li>
                <li><button onClick={() => { setSelectedCaseStudyId('crocus-sativus'); handleJumpToSection('workbench-section'); }} className="hover:text-[#113827] transition-colors italic">Crocus sativus</button></li>
                <li><button onClick={() => { setSelectedCaseStudyId('hypericum-perforatum'); handleJumpToSection('workbench-section'); }} className="hover:text-[#113827] transition-colors italic">Hypericum perforatum</button></li>
              </ul>
            </div>

            {/* Scientific Repositories */}
            <div className="md:col-span-2 space-y-2.5">
              <h4 className="text-xs font-bold text-[#113827] uppercase tracking-wider">
                Authority Links
              </h4>
              <ul className="space-y-1.5 text-xs text-[#5E6D64]">
                <li><a href="https://powo.science.kew.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors">Kew POWO Plants</a></li>
                <li><a href="https://www.ebi.ac.uk/chembl" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors">ChEMBL 34 Database</a></li>
                <li><a href="https://www.uniprot.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors">UniProtKB Targets</a></li>
                <li><a href="https://www.ema.europa.eu" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors">EMA Herbal Monographs</a></li>
              </ul>
            </div>

            {/* Open Science & FAIR */}
            <div className="md:col-span-3 space-y-2.5">
              <h4 className="text-xs font-bold text-[#113827] uppercase tracking-wider">
                Open Science
              </h4>
              <p className="text-xs text-[#5E6D64] leading-relaxed">
                All extracted assertions are FAIR-compliant and exported in W3C JSON-LD (BioPAX/Schema.org) for automated cheminformatics pipelines.
              </p>
              <div className="pt-1 flex items-center gap-3">
                <button
                  onClick={() => setIsExportOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#134E35] bg-[#EBF3EF] hover:bg-[#D8E9E0] px-3 py-1.5 rounded-full font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download JSON-LD</span>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Track Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E8E6DF] text-xs text-[#718277]">
            <div className="flex items-center gap-2">
              <span>National and Kapodistrian University of Athens (NKUA) & Fraunhofer SCAI</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline font-mono">MIT License</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <button onClick={() => setIsPitchGuideOpen(true)} className="text-[#134E35] font-semibold hover:underline">
                Devpost Video Guide
              </button>
              <span>·</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FAIR Data Export Modal */}
      <FairExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        currentCaseStudy={activePlant}
      />

      {/* 10-Minute Devpost Pitch Video Presenter Guide */}
      <PitchGuideDrawer
        isOpen={isPitchGuideOpen}
        onClose={() => setIsPitchGuideOpen(false)}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectItem={(item) => {
          if (item.id) setSelectedCaseStudyId(item.id);
          handleJumpToSection('workbench-section');
        }}
      />

      {/* Retrospective Blind Evaluation Modal */}
      <BlindEvaluationModal
        isOpen={isEvaluationOpen}
        onClose={() => setIsEvaluationOpen(false)}
      />

      {/* Epistemic Humility & Failure Cases Modal */}
      <FailureCasesModal
        isOpen={isFailureCasesOpen}
        onClose={() => setIsFailureCasesOpen(false)}
      />

    </div>
  );
}
