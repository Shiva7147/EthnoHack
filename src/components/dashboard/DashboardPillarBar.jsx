import React from 'react';
import { BookOpen, GitCommit, Atom, Target, ShieldCheck } from 'lucide-react';

export function DashboardPillarBar({ onSelectPillar }) {
  const pillars = [
    {
      id: "nlp",
      icon: BookOpen,
      title: "Palaeographic NLP",
      desc: "Extracts entities from ancient Greek recensions."
    },
    {
      id: "taxonomy",
      icon: GitCommit,
      title: "4-Era Taxonomy",
      desc: "Resolves historical synonyms to Kew POWO."
    },
    {
      id: "chemistry",
      icon: Atom,
      title: "Phytochemistry",
      desc: "ChEMBL metabolites & Lipinski Rule of 5."
    },
    {
      id: "targets",
      icon: Target,
      title: "Molecular Targets",
      desc: "UniProt binding assays & EMA monographs."
    },
    {
      id: "safety",
      icon: ShieldCheck,
      title: "Responsible AI",
      desc: "3-tier uncertainty & CYP450 safety checks."
    }
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-6 sm:-mt-8">
      <div className="bg-white rounded-3xl border border-[#E8E6DF] shadow-md p-6 sm:p-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div 
                key={pil.id} 
                onClick={() => onSelectPillar(pil.id)}
                className={`flex flex-col items-center text-center px-2 cursor-pointer group ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-2xl bg-[#EBF3EF] group-hover:bg-[#113827] flex items-center justify-center text-[#134E35] group-hover:text-white transition-colors mb-3">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#113827] group-hover:text-[#134E35] transition-colors mb-1">
                  {pil.title}
                </h4>
                <p className="text-[11px] text-[#62746A] leading-snug">
                  {pil.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
