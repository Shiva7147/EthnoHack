import React from 'react';
import { BookOpen, Layers, ShieldCheck, Download, Sparkles, HelpCircle, GitFork } from 'lucide-react';
import { SYSTEM_STATISTICS } from '../data/ethnopharmData';

export function Header({ activeTab, setActiveTab, onOpenExport, onOpenPitchGuide, demoMode, setDemoMode }) {
  return (
    <header className="border-b border-[#E2E8F0] bg-[#FFFFFF] sticky top-0 z-40 shadow-xs">
      {/* Top institution & track banner */}
      <div className="bg-[#2D4A3E] text-white text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 border-b border-[#1E3A2F]">
        <div className="flex items-center gap-3">
          <span className="font-semibold tracking-wide flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            EthnoHack 2026 · Horizon Europe ETHCSTWIN
          </span>
          <span className="hidden sm:inline text-white/50">|</span>
          <span className="hidden sm:inline text-white/80">
            NKUA Faculty of Pharmacy & Fraunhofer SCAI
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#1E3A2F] text-emerald-300 font-mono text-[11px] px-2 py-0.5 rounded border border-emerald-500/30">
            Track 1: Traditional Knowledge
          </span>
          <span className="hidden md:inline bg-[#1E3A2F] text-amber-200 font-mono text-[11px] px-2 py-0.5 rounded border border-amber-500/30">
            Track 2: Natural Products
          </span>
          <span className="hidden lg:inline bg-[#1E3A2F] text-blue-200 font-mono text-[11px] px-2 py-0.5 rounded border border-blue-500/30">
            Track 4: Digital Health
          </span>
        </div>
      </div>

      {/* Main scientific header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-[#2D4A3E] flex items-center justify-center text-white text-xl shadow-xs border border-[#1E3A2F]">
            🌿
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-[#0F172A] font-serif-scholarly">
                ByzMed-Graph
              </h1>
              <span className="bg-[#EBF3EF] text-[#2D4A3E] text-[11px] font-mono font-semibold px-2 py-0.5 rounded border border-[#2D4A3E]/20">
                v1.0.4 · Open Science
              </span>
            </div>
            <p className="text-xs text-[#64748B] tracking-tight">
              Bridging Premodern Mediterranean Ethnopharmacology to Modern Molecular Targets
            </p>
          </div>
        </div>

        {/* Action buttons & Stage Pitch Companion */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setDemoMode(!demoMode)}
            className={`text-xs px-2.5 py-1.5 rounded-md font-medium border flex items-center gap-1.5 transition-all ${
              demoMode
                ? 'bg-amber-50 border-amber-300 text-amber-800'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
            title="Toggle between deterministic verified ground-truth and live interactive parsing"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="font-mono text-[11px]">Judge Mode:</span>
            <span className="font-bold">{demoMode ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={onOpenExport}
            className="text-xs px-3 py-1.5 rounded-md font-medium bg-[#FFFFFF] border border-[#CBD5E1] text-[#0F172A] hover:bg-slate-50 flex items-center gap-1.5 shadow-2xs"
          >
            <Download className="w-3.5 h-3.5 text-[#2D4A3E]" />
            <span>FAIR Data Export</span>
          </button>

          <button
            onClick={onOpenPitchGuide}
            className="text-xs px-3 py-1.5 rounded-md font-semibold bg-[#2D4A3E] text-white hover:bg-[#1E3A2F] flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-300" />
            <span>Devpost Pitch & Slides</span>
          </button>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 overflow-x-auto border-t border-[#F1F5F9] pt-1">
        {[
          { id: 'workbench', label: '1. Plant Case Studies & Workbench', icon: BookOpen },
          { id: 'network', label: '2. Multi-Hop Knowledge Graph', icon: GitFork },
          { id: 'nlp', label: '3. Live Text NLP Extractor', icon: Layers },
          { id: 'safety', label: '4. Herb-Drug Safety & CYP450', icon: ShieldCheck },
          { id: 'uncertainty', label: '5. Scientific Uncertainty & Methodology', icon: HelpCircle }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2.5 text-xs font-medium border-b-2 whitespace-nowrap flex items-center gap-2 transition-colors ${
                isActive
                  ? 'border-[#2D4A3E] text-[#2D4A3E] font-semibold bg-[#F8F9FA]'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A] hover:border-slate-300'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#2D4A3E]' : 'text-[#94A3B8]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
