import React, { useState } from 'react';
import { Scroll, Info, ExternalLink, Bookmark, CheckCircle2, Search } from 'lucide-react';

export function ManuscriptExplorer({ caseStudy, onEntitySelect }) {
  const [selectedToken, setSelectedToken] = useState(null);

  const passage = caseStudy.manuscriptPassage;

  return (
    <div className="bg-white border border-[#E8E6DF] rounded-3xl shadow-sm overflow-hidden">
      {/* Manuscript citation banner */}
      <div className="bg-[#FAF9F5] px-6 py-4 border-b border-[#E8E6DF] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Scroll className="w-4 h-4 text-[#B45309]" />
          <div>
            <span className="font-serif-display text-sm font-bold text-[#113827] uppercase tracking-wide">
              {passage.author}
            </span>
            <span className="text-xs text-[#62746A] ml-2">
              · {passage.work} ({passage.bookChapter})
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono text-[11px] bg-amber-50 text-amber-900 border border-amber-200/80 px-3 py-1 rounded-full flex items-center gap-1.5 font-medium shadow-2xs">
            <Bookmark className="w-3 h-3 text-amber-700" />
            {passage.manuscriptRef}
          </span>
        </div>
      </div>

      {/* Side-by-side bilingual reading room */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E8E6DF]">
        {/* Left Column: Ancient Greek text */}
        <div className="p-6 sm:p-7 bg-[#FCFCFA]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#113827] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#134E35]"></span>
              Original Byzantine / Ancient Greek Text
            </span>
            <span className="text-[11px] font-mono text-[#718277]">
              Codex Vindobonensis med. gr. 1
            </span>
          </div>

          <div className="font-greek text-lg leading-relaxed text-[#113827] p-5 rounded-2xl bg-white border border-[#E8E6DF] shadow-2xs">
            {/* Highlighted Greek Text Passage */}
            <span 
              onClick={() => setSelectedToken({
                type: 'botanical',
                termGreek: caseStudy.ancientNameGreek,
                termEn: caseStudy.commonName,
                modernTaxon: caseStudy.acceptedBinomial,
                kewId: caseStudy.kewPowoId,
                explanation: `Dioscorides IV.33 identifies this taxon from the Greek word 'sideros' (iron), recording its specific efficacy on wounds inflicted by iron weapons. Disambiguated through 4 eras to ${caseStudy.acceptedBinomial}.`
              })}
              className="bg-emerald-100/70 hover:bg-emerald-200 text-emerald-950 px-1.5 py-0.5 rounded cursor-pointer border border-emerald-300 font-semibold transition-colors"
              title="Click to inspect botanical entity resolution"
            >
              {caseStudy.ancientNameGreek}
            </span>
            {caseStudy.id === 'sideritis-scardica' && (
              <>
                <span>· φύλλα ἔχει ὅμοια πράσῳ, τραχύτερα δὲ καὶ ἐρυθρώτερα, μῆκος πηχυαῖον, ῥάβδους λεπτάς. ἁρμόζει δὲ θαυμαστῶς </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'πρὸς τὰ σιδήρῳ τραύματα',
                    termEn: 'sword / iron wounds',
                    modernTaxon: 'Wound Healing (MeSH D014945)',
                    explanation: 'Historical indication for traumatic tissue lacerations. Matches modern in-vitro assays showing enhanced fibroblast migration and wound closure acceleration.'
                  })}
                  className="bg-amber-100/80 hover:bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded cursor-pointer border border-amber-300 transition-colors"
                >
                  πρὸς τὰ σιδήρῳ τραύματα
                </span>
                <span>, </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'αἵματος ἐπιστάτης οὖσα',
                    termEn: 'staunching blood / hemostatic',
                    modernTaxon: 'Platelet Adhesion Co-factor',
                    explanation: 'Astringent property due to polyphenol and phenylethanoid cross-linking with plasma proteins.'
                  })}
                  className="bg-blue-100/80 hover:bg-blue-200 text-blue-950 px-1.5 py-0.5 rounded cursor-pointer border border-blue-300 transition-colors"
                >
                  αἵματος ἐπιστάτης οὖσα
                </span>
                <span> καὶ </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'φλεγμονὰς καταπαύουσα',
                    termEn: 'calming inflammation',
                    modernTaxon: 'PTGS2 (COX-2) & TNF-alpha downregulation',
                    explanation: 'Empirical anti-inflammatory action verified by Acteoside IC50 = 12.4 μM against COX-2 and NF-kB suppression.'
                  })}
                  className="bg-rose-100/80 hover:bg-rose-200 text-rose-950 px-1.5 py-0.5 rounded cursor-pointer border border-rose-300 font-medium transition-colors"
                >
                  φλεγμονὰς καταπαύουσα
                </span>
                <span>, </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'βηχὸς δὲ καὶ ῥευματισμοῦ θώρακος ἴαμα',
                    termEn: 'cure for cough and chest catarrh',
                    modernTaxon: 'EMA Monograph EMA/HMPC/39453/2015',
                    explanation: 'Official therapeutic indication approved by the European Medicines Agency for relief of cough associated with cold.'
                  })}
                  className="bg-purple-100/80 hover:bg-purple-200 text-purple-950 px-1.5 py-0.5 rounded cursor-pointer border border-purple-300 transition-colors"
                >
                  βηχὸς δὲ καὶ ῥευματισμοῦ θώρακος ἴαμα
                </span>
                <span> μετὰ μέλιτος ἑψηθεῖσα.</span>
              </>
            )}

            {caseStudy.id === 'pistacia-lentiscus' && (
              <>
                <span>... τὸ δὲ ἐξ αὐτῆς δάκρυον </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'botanical',
                    termGreek: 'Μαστίχη',
                    termEn: 'Chios Mastic resin tears',
                    modernTaxon: 'Pistacia lentiscus var. chia',
                    explanation: 'Resinous triterpene exudate harvested from trunk bark scarification. Protected PDO endemic to southern Chios.'
                  })}
                  className="bg-emerald-100/70 hover:bg-emerald-200 text-emerald-950 px-1.5 py-0.5 rounded cursor-pointer border border-emerald-300 font-semibold"
                >
                  Μαστίχη
                </span>
                <span> καλεῖται, κρατίστη δὲ ἡ Χία. ἁρμόζει δὲ </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'πρὸς στομάχου ἀλγήματα',
                    termEn: 'stomach pains & gnawing',
                    modernTaxon: 'Peptic Ulcer (MeSH D010437) & Helicobacter pylori',
                    explanation: 'Antimicrobial triterpenic acids (isomasticadienolic acid) inhibit H. pylori ATP synthase with MIC = 0.06-0.25 mg/mL.'
                  })}
                  className="bg-amber-100/80 hover:bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded cursor-pointer border border-amber-300"
                >
                  πρὸς στομάχου ἀλγήματα
                </span>
                <span>, διαφθείρει δὲ καὶ </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'τὰ ἐν στόματι ἕλκη καὶ τὰς οὐλὰς ὠφελεῖ',
                    termEn: 'mouth ulcers and gum healing',
                    modernTaxon: 'Periodontitis & Gingivitis (MeSH D005891)',
                    explanation: 'Suppresses oral anaerobic biofilms and matrix metalloproteinases MMP-1/MMP-9.'
                  })}
                  className="bg-purple-100/80 hover:bg-purple-200 text-purple-950 px-1.5 py-0.5 rounded cursor-pointer border border-purple-300"
                >
                  τὰ ἐν στόματι ἕλκη καὶ τὰς οὐλὰς ὠφελεῖ
                </span>
                <span>, καὶ αἱμοπτυϊκοῖς καὶ βηχικοῖς ἁρμόζει.</span>
              </>
            )}

            {caseStudy.id === 'crocus-sativus' && (
              <>
                <span>... εὐώδης, ἐπιδάκνων τῇ γεύσει. εὐστομαχεῖ δὲ καὶ πέψιν κινεῖ, καὶ </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'πρὸς τὰς ὀφθαλμικὰς διαθέσεις',
                    termEn: 'ophthalmic disorders',
                    modernTaxon: 'Macular Degeneration (MeSH D008268)',
                    explanation: 'Crocin-1 protects retinal microvascular circulation and prevents photoreceptor apoptosis.'
                  })}
                  className="bg-blue-100/80 hover:bg-blue-200 text-blue-950 px-1.5 py-0.5 rounded cursor-pointer border border-blue-300"
                >
                  πρὸς τὰς ὀφθαλμικὰς διαθέσεις ἁρμόζει
                </span>
                <span> μετὰ γάλακτος, </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'θυμὸν ἐγείρει καὶ εὐθυμίαν παρασκευάζει',
                    termEn: 'awakens the spirit and induces cheerfulness',
                    modernTaxon: 'Depressive Disorder (MeSH D003866)',
                    explanation: 'Safranal and Crocin inhibit Serotonin Transporter (SERT / SLC6A4). Verified in randomized clinical trials.'
                  })}
                  className="bg-amber-100/80 hover:bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded cursor-pointer border border-amber-300 font-semibold"
                >
                  θυμὸν ἐγείρει καὶ εὐθυμίαν παρασκευάζει
                </span>
                <span>, ἀλυπίαν τε τοῖς πιοῦσι φέρει.</span>
              </>
            )}

            {caseStudy.id === 'hypericum-perforatum' && (
              <>
                <span>... σπόρος δὲ αὐτοῦ πιόμενος μετὰ μελικράτου </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'ἰσχιάδας ὠφελεῖ',
                    termEn: 'relieves sciatica and nerve pain',
                    modernTaxon: 'Sciatica / Neuropathic Pain (MeSH D012585)',
                    explanation: 'Modulates substance P and transient receptor potentials (TRPC6) in dorsal root ganglion nociceptors.'
                  })}
                  className="bg-blue-100/80 hover:bg-blue-200 text-blue-950 px-1.5 py-0.5 rounded cursor-pointer border border-blue-300"
                >
                  ἰσχιάδας ὠφελεῖ
                </span>
                <span>, καὶ πυρετοὺς τεταρταίους καὶ </span>
                <span 
                  onClick={() => setSelectedToken({
                    type: 'indication',
                    termGreek: 'μελαγχολικὰ πάθη παύει',
                    termEn: 'dispels melancholic disorders',
                    modernTaxon: 'Major Depressive Disorder (MeSH D003865)',
                    explanation: 'Broad-spectrum monoamine reuptake inhibitor (5-HT, NE, DA). European Medicines Agency Well-Established Use monograph.'
                  })}
                  className="bg-amber-100/80 hover:bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded cursor-pointer border border-amber-300 font-semibold"
                >
                  μελαγχολικὰ πάθη παύει
                </span>
                <span>· αἵματος ἐπιστάτης ἐστὶ καὶ ἐμπλάστροις μίγνυται πρὸς πυρίκαυτα ἕλκη.</span>
              </>
            )}
          </div>

          {/* Byzantine Supplement: John Zacharias Aktouarios */}
          <div className="mt-4 pt-3 border-t border-slate-200">
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#B45309] block mb-1">
              Late Byzantine Clinical Complement (John Zacharias Aktouarios, 14th c.)
            </span>
            <p className="font-greek text-sm text-[#334155] italic bg-amber-50/50 p-2.5 rounded border border-amber-200/60">
              "{passage.aktouariosComplementGreek}"
            </p>
          </div>
        </div>

        {/* Right Column: English Scholarly Translation */}
        <div className="p-6 bg-[#FFFFFF]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#0F172A] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0F172A]"></span>
              Peer-Reviewed Scholarly English Translation
            </span>
            <span className="text-[11px] font-mono text-[#94A3B8]">
              Standard Critical Edition
            </span>
          </div>

          <div className="font-serif-scholarly text-base leading-relaxed text-[#1E293B] p-4 rounded-lg bg-[#FAFBFB] border border-[#E2E8F0]">
            "{passage.englishTranslation}"
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200">
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#B45309] block mb-1">
              Aktouarios Translation (Medical Treatises on Diagnostics)
            </span>
            <p className="font-serif-scholarly text-sm text-[#475569] italic bg-amber-50/50 p-2.5 rounded border border-amber-200/60">
              "{passage.aktouariosComplementEnglish}"
            </p>
          </div>

          {/* Legend for interactive tokens */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] pt-3 border-t border-slate-100">
            <span className="text-[#64748B] font-mono">Entity Key:</span>
            <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded border border-emerald-300 font-medium">
              Botanical Taxon
            </span>
            <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-medium">
              Ancient Indication
            </span>
            <span className="bg-rose-100 text-rose-900 px-2 py-0.5 rounded border border-rose-300 font-medium">
              Inflammation Target
            </span>
            <span className="bg-purple-100 text-purple-900 px-2 py-0.5 rounded border border-purple-300 font-medium">
              EMA Monograph Link
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Entity Token Inspector Drawer / Banner */}
      {selectedToken && (
        <div className="bg-[#0E2F20] text-white p-5 border-t border-[#092217] flex flex-wrap items-start justify-between gap-4 animate-in fade-in duration-150">
          <div className="max-w-3xl space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#134E35] text-[#A3E635] border border-[#A3E635]/30">
                NLP Extracted Entity: {selectedToken.type.toUpperCase()}
              </span>
              <span className="font-greek font-bold text-amber-200 text-base">
                {selectedToken.termGreek}
              </span>
              <span className="text-white/60 text-xs font-mono">
                → {selectedToken.termEn}
              </span>
            </div>

            <p className="text-xs text-white/90 leading-relaxed">
              {selectedToken.explanation}
            </p>

            <div className="flex items-center gap-3 text-xs text-emerald-300 pt-1">
              <span className="flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#A3E635]" />
                Resolved Modern Concept: <strong className="text-white">{selectedToken.modernTaxon}</strong>
              </span>
            </div>
          </div>

          <button
            onClick={() => setSelectedToken(null)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Close Inspector ✕
          </button>
        </div>
      )}
    </div>
  );
}
