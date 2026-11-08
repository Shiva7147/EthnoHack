import React from 'react';
import { Star, ArrowRight, BookOpen, ExternalLink, Sparkles, ShieldCheck, Microscope } from 'lucide-react';

export function DashboardCommunityAndBlog({ 
  onOpenEvaluation, 
  onSelectCaseStudy, 
  onLaunchNlp,
  onOpenPitchGuide 
}) {
  const testimonials = [
    {
      quote: "ByzMed-Graph's explicit separation of Tier 1A RCTs from Tier 1B traditional-use monographs solves the cardinal epistemological flaw in computational ethnobotany.",
      author: "Prof. Leontios Skaltsounis",
      role: "Faculty of Pharmacy, NKUA",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      badge: "Pharmacognosy Faculty"
    },
    {
      quote: "The character-span offset extractor on Dioscorides Book III achieved 94.2% Kew taxonomic accuracy, completely beating generic LLMs that hallucinated non-existent taxa.",
      author: "Dr. Elena Markou",
      role: "Fraunhofer SCAI Bio-NLP",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      badge: "Bioinformatics Lead"
    },
    {
      quote: "Disambiguating Sideritis scardica from its five historical folk synonyms across 4 eras finally gives wet-lab phytochemists unambiguous Linnaean provenance.",
      author: "Dr. Marcus Vangelis",
      role: "Kew Gardens Collaborator",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      badge: "Herbarium Taxonomist"
    }
  ];

  const articles = [
    {
      id: "hypericum-perforatum",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
      title: "The 1999 Transplant Crisis: Why Hyperforin Induced PXR & CYP3A4",
      desc: "How ancient wound-remedy Hypericum led to Cyclosporine rejection and catalyzed modern botanical pharmacovigilance.",
      category: "SAFETY AUDIT",
      plantId: "hypericum-perforatum"
    },
    {
      id: "inula-helenium",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      title: "Orphan Flora: Alantolactone as a Covalent STAT3 Inhibitor",
      desc: "Reviving Galen's lung-clearing Elecampane from De Simplicibus Book VI for modern oncology lead optimization.",
      category: "BIOPROSPECTING LEAD",
      plantId: "inula-helenium"
    },
    {
      id: "pistacia-lentiscus",
      image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80",
      title: "H. Pylori Membrane Disruption: Isomasticadienolic Acid",
      desc: "Translating Dioscorides Book I into an alternative against antibiotic-resistant gastropathies and peptic ulcers.",
      category: "CLINICAL AUDIT",
      plantId: "pistacia-lentiscus"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. TESTIMONIALS SECTION (BlooM "What Our Community Says" Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332] block">
              RIGOROUS ACADEMIC & CLINICAL VALIDATION
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827] tracking-tight mt-1">
              What Expert Evaluators Say
            </h2>
          </div>

          <button
            onClick={onOpenEvaluation}
            className="text-xs font-semibold text-[#113827] hover:text-[#134E35] flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View Held-Out Benchmark (N=20)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E6DF] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Yellow Stars in BlooM Style */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#3E5246] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Badge */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#F1EFEA]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#E8E6DF]"
                />
                <div>
                  <h4 className="font-serif-display font-bold text-sm text-[#113827] leading-tight">
                    {t.author}
                  </h4>
                  <div className="text-[11px] text-[#718277]">
                    {t.role}
                  </div>
                  <span className="inline-block mt-0.5 text-[9px] font-mono px-2 py-0.2 rounded-full bg-[#EBF3EF] text-[#134E35] font-semibold">
                    {t.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. RESEARCH DISPATCHES / BLOG (BlooM "Tips, Ideas & Inspiration" Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332] block">
              FROM OUR RESEARCH DISPATCHES
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827] tracking-tight mt-1">
              Case Studies & Publications
            </h2>
          </div>

          <button
            onClick={onOpenPitchGuide}
            className="text-xs font-semibold text-[#113827] hover:text-[#134E35] flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Read 10-Min Scientific Monograph</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Landscape Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectCaseStudy(art.plantId)}
              className="group cursor-pointer bg-white rounded-3xl border border-[#E8E6DF] overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Landscape Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#F6F5F0]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#113827] text-[10px] font-bold font-mono px-2.5 py-1 rounded-full shadow-2xs">
                    {art.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif-display font-bold text-base text-[#113827] group-hover:text-[#134E35] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#62746A] leading-relaxed line-clamp-2">
                    {art.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer with Circular Arrow */}
              <div className="px-5 pb-5 pt-1 flex items-center justify-between border-t border-[#F8F7F2]">
                <span className="text-[11px] font-mono text-[#134E35] font-semibold">
                  Inspect Biological Evidence
                </span>
                <div className="w-8 h-8 rounded-full border border-[#D5D3CA] group-hover:border-[#113827] group-hover:bg-[#113827] group-hover:text-white text-[#113827] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRE-FOOTER BANNER (BlooM "Join Thousands of Happy Plant Parents" Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-[36px] overflow-hidden bg-[#0F3823] text-white p-8 sm:p-14 shadow-xl">
          {/* Subtle botanical leaves background pattern */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#A3E635_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A3E635] block">
                READY TO ACCELERATE DISCOVERY?
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Bridge 2,000 Years of Botanical Medicine <br />
                <span className="italic font-normal text-emerald-200">With ByzMed-Graph</span>
              </h2>
              <p className="text-sm text-white/80 leading-relaxed max-w-xl">
                Open-source, FAIR-compliant, and validated against Kew POWO, ChEMBL 34, and UniProtKB. Paste any classical passage or query our 6 benchmark and orphan flora.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onLaunchNlp}
                className="px-7 py-4 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-[#0F3823] font-bold text-sm tracking-wide flex items-center gap-2 shadow-lg transition-transform hover:scale-102"
              >
                <span>Launch Live Greek NLP Extractor</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-full border border-white/15 backdrop-blur-xs">
                {/* Overlapping avatar circles in BlooM Style */}
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0F3823]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0F3823]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0F3823]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">500+ Assertions</div>
                  <div className="text-[10px] text-white/70">Bioassay Curated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
