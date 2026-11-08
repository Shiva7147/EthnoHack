import React from 'react';
import { GitCommit, ExternalLink, CheckCircle, AlertCircle, MapPin, Compass } from 'lucide-react';

export function TaxonomicDisambiguation({ caseStudy }) {
  return (
    <div className="bg-white border border-[#E8E6DF] rounded-3xl p-6 sm:p-7 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-[#F1EFEA]">
        <div>
          <h2 className="font-serif-display text-lg font-bold text-[#113827] flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-[#134E35]" />
            Historical Synonym Disambiguation Matrix (4 Eras)
          </h2>
          <p className="text-xs text-[#62746A]">
            Resolving archaic Greek botanical entities to Kew Royal Botanic Gardens (POWO) & NCBI Taxonomy
          </p>
        </div>

        {/* Confidence score badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-[#EBF3EF] border border-[#134E35]/20 px-3 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5 text-[#134E35]" />
            <span className="text-xs font-semibold text-[#113827] font-mono">
              Confidence: {(caseStudy.disambiguationConfidence * 100).toFixed(0)}%
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#718277] hidden sm:inline">
            NKUA Floristic Validated
          </span>
        </div>
      </div>

      {/* 4-Era Chronological Stepper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {caseStudy.historicalSynonyms.map((syn, idx) => (
          <div 
            key={idx} 
            className="p-4 rounded-2xl border border-[#E8E6DF] bg-[#FAF9F5] relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B45309]">
                Era {idx + 1}: {syn.era}
              </span>
            </div>
            
            <div className="font-greek text-base font-bold text-[#113827] mb-1">
              {syn.term}
            </div>

            <div className="text-[11px] font-medium text-[#134E35] font-serif-display italic mb-1.5">
              Source: {syn.source}
            </div>

            <p className="text-[11px] text-[#5E6D64] leading-relaxed">
              {syn.note}
            </p>
          </div>
        ))}
      </div>

      {/* Modern Linnaean Resolution Card & Taxonomic Authority Links */}
      <div className="bg-[#FAF9F5] border border-[#D5D3CA] rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase font-bold text-[#134E35] bg-[#EBF3EF] px-2.5 py-0.5 rounded-full border border-[#134E35]/30">
              Resolved Accepted Binomial
            </span>
            <span className="font-serif-display italic text-base font-bold text-[#113827]">
              {caseStudy.acceptedBinomial}
            </span>
            <span className="text-xs font-mono text-[#4A5D52]">
              ({caseStudy.botanicalFamily})
            </span>
          </div>

          <div className="text-xs text-[#5E6D64] flex flex-wrap items-center gap-4 pt-1">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
              <strong>Habitat:</strong> {caseStudy.geographicOrigin}
            </span>
            <span className="flex items-center gap-1 font-mono text-[11px] text-[#718277]">
              <Compass className="w-3.5 h-3.5 text-[#134E35]" />
              IUCN: {caseStudy.iucnStatus}
            </span>
          </div>

          <p className="text-[11px] text-[#62746A] pt-1 italic">
            <strong>Morphological Disambiguation:</strong> {caseStudy.morphologyNote}
          </p>
        </div>

        {/* Database Authority Links */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <a
            href={`https://powo.science.kew.org/taxon/${caseStudy.kewPowoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-3.5 py-2 rounded-full bg-white border border-[#D5D3CA] text-[#113827] hover:border-[#134E35] hover:text-[#134E35] flex items-center justify-between gap-2 shadow-2xs transition-colors"
          >
            <span>Kew POWO Taxon</span>
            <ExternalLink className="w-3 h-3 text-[#134E35]" />
          </a>

          <a
            href={`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${caseStudy.ncbiTaxonId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-3.5 py-2 rounded-full bg-white border border-[#D5D3CA] text-[#113827] hover:border-[#134E35] hover:text-[#134E35] flex items-center justify-between gap-2 shadow-2xs transition-colors"
          >
            <span>NCBI: {caseStudy.ncbiTaxonId}</span>
            <ExternalLink className="w-3 h-3 text-[#134E35]" />
          </a>
        </div>
      </div>

      {/* Disambiguation Ambiguity Guard / Uncertainty Note */}
      <div className="mt-3 bg-amber-50/60 border border-amber-200/80 rounded-md p-2.5 flex items-start gap-2.5 text-xs text-amber-900">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-semibold text-amber-950">Taxonomic Multiplicity Assessment: </span>
          {caseStudy.taxonomicAmbiguityNotes}
        </div>
      </div>
    </div>
  );
}
