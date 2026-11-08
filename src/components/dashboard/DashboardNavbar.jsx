import React from 'react';
import { Search, Download, BookOpen, Sparkles, Filter, Leaf, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { SYSTEM_STATISTICS } from '../../data/ethnopharmData';

export function DashboardNavbar({ 
  activeTab, 
  setActiveTab, 
  onOpenExport, 
  onOpenPitchGuide, 
  onOpenSearch, 
  onOpenEvaluation, 
  onOpenFailureCases, 
  demoMode, 
  setDemoMode 
}) {
  return (
    <nav className="sticky top-0 z-50 bg-[#F8F7F2]/95 backdrop-blur-md border-b border-[#E8E6DF] transition-all">
      {/* Top Horizon Europe & Track Ribbon (BlooM Dark Forest Green) */}
      <div className="bg-[#0E2F20] text-white text-[11px] px-4 sm:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2 border-b border-[#0A2418]">
        <div className="flex items-center gap-3">
          <span className="font-semibold tracking-wide flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#A3E635] animate-pulse"></span>
            EthnoHack 2026 · Horizon Europe ETHCSTWIN
          </span>
          <span className="text-white/40 hidden sm:inline">|</span>
          <span className="text-white/80 hidden sm:inline">
            NKUA Faculty of Pharmacy & Fraunhofer SCAI
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-[#134E35] text-[#A3E635] font-mono text-[10px] px-2 py-0.5 rounded-full border border-[#A3E635]/30">
            Track 1: Traditional Knowledge
          </span>
          <span className="hidden md:inline bg-[#134E35] text-white/90 font-mono text-[10px] px-2 py-0.5 rounded-full">
            Track 2: Natural Products
          </span>
          <span className="hidden lg:inline bg-[#134E35] text-white/90 font-mono text-[10px] px-2 py-0.5 rounded-full">
            Track 4: Digital Health
          </span>
        </div>
      </div>

      {/* Main Scientific Brand & Global Actions Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo in BlooM Playfair Display */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#113827] flex items-center justify-center text-white text-xl shadow-xs group-hover:scale-105 transition-transform">
            🌿
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif-display text-2xl font-bold tracking-tight text-[#113827]">
                ByzMed<span className="text-[#134E35] italic">-Graph</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#134E35] mb-2"></span>
              <span className="ml-2 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EBF3EF] text-[#134E35] border border-[#134E35]/20">
                Research Workbench
              </span>
            </div>
            <p className="text-[11px] text-[#62746A] tracking-tight">
              Premodern Mediterranean Ethnopharmacology to Molecular Targets
            </p>
          </div>
        </div>

        {/* Global Dashboard Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            onClick={onOpenEvaluation}
            className="text-xs px-3 py-1.5 rounded-full font-semibold bg-[#EBF3EF] border border-[#134E35]/30 hover:bg-[#D8E9E0] text-[#113827] flex items-center gap-1.5 shadow-2xs transition-colors"
            title="Inspect quantitative accuracy on held-out retrospective benchmark"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Benchmark (N=20)</span>
          </button>

          <button
            onClick={onOpenFailureCases}
            className="text-xs px-3 py-1.5 rounded-full font-semibold bg-amber-50 border border-amber-300 hover:bg-amber-100 text-amber-900 flex items-center gap-1.5 shadow-2xs transition-colors"
            title="Inspect transparent edge failure conditions and limitations"
          >
            <span>Failure Cases</span>
          </button>

          <button
            onClick={onOpenExport}
            className="text-xs px-3 py-1.5 rounded-full font-semibold bg-white border border-[#D5D3CA] hover:border-[#113827] text-[#113827] hover:bg-[#F6F5F0] flex items-center gap-1.5 shadow-2xs transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#134E35]" />
            <span>FAIR Export</span>
          </button>

          <button
            onClick={onOpenPitchGuide}
            className="text-xs px-3.5 py-1.5 rounded-full font-semibold bg-[#113827] hover:bg-[#0B291C] text-white flex items-center gap-1.5 shadow-xs hover:shadow-sm transition-all"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>Pitch Script & Q&A</span>
          </button>
        </div>
      </div>

      {/* Nav Tabs Bar (BlooM Editorial Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto border-t border-[#E8E6DF] py-2 text-xs font-medium">
        {[
          { id: 'overview', label: '1. Flora & Manuscript Workbench', icon: Leaf },
          { id: 'network', label: '2. Multi-Hop Knowledge Network', icon: ArrowRight },
          { id: 'nlp', label: '3. Premodern Greek NLP Extractor', icon: Cpu },
          { id: 'safety', label: '4. Herb-Drug Safety (CYP450)', icon: ShieldAlert },
          { id: 'uncertainty', label: '5. Scientific Uncertainty & Methodology', icon: Sparkles }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 transition-all ${
                isActive
                  ? 'bg-[#113827] text-white font-semibold shadow-2xs'
                  : 'bg-transparent text-[#5E6D64] hover:text-[#113827] hover:bg-[#EFECE3]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#A3E635]' : 'text-[#718277]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
