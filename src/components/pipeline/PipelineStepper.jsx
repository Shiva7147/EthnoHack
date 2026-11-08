import React from 'react';
import { BookOpen, GitCommit, Atom, Target, ShieldAlert, Check } from 'lucide-react';

export function PipelineStepper({ currentStep, onSelectStep, completedSteps = [] }) {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Greek NLP Extractor",
      shortDesc: "Palaeographic Text & Spans",
      icon: BookOpen
    },
    {
      id: 2,
      number: "02",
      title: "4-Era Taxonomy",
      shortDesc: "Kew POWO Disambiguation",
      icon: GitCommit
    },
    {
      id: 3,
      number: "03",
      title: "Phytochemistry",
      shortDesc: "ChEMBL 34 Metabolomics",
      icon: Atom
    },
    {
      id: 4,
      number: "04",
      title: "Molecular Targets",
      shortDesc: "UniProt & Bioactivity",
      icon: Target
    },
    {
      id: 5,
      number: "05",
      title: "Pharmacovigilance",
      shortDesc: "CYP450 Safety & Epistemic Audit",
      icon: ShieldAlert
    }
  ];

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-2xl p-2.5 sm:p-3 shadow-xs">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
        {steps.map((s) => {
          const Icon = s.icon;
          const isActive = currentStep === s.id;
          const isDone = completedSteps.includes(s.id) || currentStep > s.id;

          return (
            <button
              key={s.id}
              onClick={() => onSelectStep(s.id)}
              className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#113827] text-white shadow-sm ring-1 ring-[#113827]'
                  : isDone
                  ? 'bg-[#F2F7F4] hover:bg-[#E5EFE9] text-[#113827]'
                  : 'bg-[#FAF9F5] hover:bg-[#F2EFE9] text-[#718277]'
              }`}
            >
              {/* Step Number / Icon Badge */}
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                  isActive
                    ? 'bg-[#A3E635] text-[#113827]'
                    : isDone
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white border border-[#D5D3CA] text-[#718277]'
                }`}
              >
                {isDone && !isActive ? <Check className="w-4 h-4 stroke-[3]" /> : s.number}
              </div>

              {/* Title & Desc */}
              <div className="min-w-0">
                <div
                  className={`text-xs font-bold leading-tight truncate ${
                    isActive ? 'text-white' : 'text-[#113827]'
                  }`}
                >
                  {s.title}
                </div>
                <div
                  className={`text-[10px] leading-tight truncate ${
                    isActive ? 'text-emerald-200' : 'text-[#718277]'
                  }`}
                >
                  {s.shortDesc}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
