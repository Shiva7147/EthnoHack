/**
 * FAIR Data Exporter for ByzMed-Graph
 * Generates W3C-compliant JSON-LD (Schema.org / BioPAX vocabularies) and CSV
 */

export function generateJsonLd(caseStudy) {
  const jsonLd = {
    "@context": {
      "@vocab": "https://schema.org/",
      "obo": "http://purl.obolibrary.org/obo/",
      "mesh": "http://id.nlm.nih.gov/mesh/",
      "chembl": "http://rdf.ebi.ac.uk/resource/chembl/molecule/",
      "uniprot": "http://purl.uniprot.org/uniprot/",
      "kew": "http://ipni.org/urn:lsid:ipni.org:names:",
      "byzmed": "https://byzmed-graph.ethnohack.org/schema/"
    },
    "@type": "MedicalScholarlyArticle",
    "name": `Premodern Mediterranean Ethnopharmacology: ${caseStudy.acceptedBinomial}`,
    "about": {
      "@type": "BotanicalTaxon",
      "name": caseStudy.acceptedBinomial,
      "alternateName": [caseStudy.ancientNameGreek, caseStudy.ancientNameTranslit, caseStudy.commonName],
      "family": caseStudy.botanicalFamily,
      "sameAs": [
        `https://powo.science.kew.org/taxon/${caseStudy.kewPowoId}`,
        `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${caseStudy.ncbiTaxonId}`
      ],
      "disambiguationConfidence": caseStudy.disambiguationConfidence
    },
    "historicalSource": {
      "@type": "Manuscript",
      "author": caseStudy.manuscriptPassage.author,
      "work": caseStudy.manuscriptPassage.work,
      "citation": caseStudy.manuscriptPassage.bookChapter,
      "manuscriptReference": caseStudy.manuscriptPassage.manuscriptRef,
      "ancientGreekText": caseStudy.manuscriptPassage.originalGreek,
      "englishScholarlyTranslation": caseStudy.manuscriptPassage.englishTranslation
    },
    "humoralIndication": {
      "qualities": caseStudy.humoralProfile.qualities,
      "targetedHumours": caseStudy.humoralProfile.ancientTargetHumour,
      "meshMappedConditions": caseStudy.humoralProfile.modernSemanticBridge.map(b => ({
        "meshHeading": b.meshTerm,
        "meshId": b.meshId,
        "mechanisticHypothesis": b.targetMechanism
      }))
    },
    "phytochemicalConstituents": caseStudy.phytochemicals.map(c => ({
      "@type": "ChemicalSubstance",
      "name": c.name,
      "chemicalClass": c.chemicalClass,
      "chemblId": c.chemblId,
      "pubchemCid": c.pubchemCid,
      "chemicalFormula": c.formula,
      "smiles": c.smiles,
      "molecularWeight": c.molecularWeight,
      "logP": c.logP,
      "tpsa": c.tpsa,
      "lipinskiViolations": c.lipinskiViolations
    })),
    "experimentalMolecularTargets": caseStudy.molecularTargets.map(t => ({
      "@type": "Protein",
      "geneSymbol": t.geneSymbol,
      "proteinName": t.proteinName,
      "uniprotId": t.uniprotId,
      "targetClass": t.targetClass,
      "experimentalAffinity": t.bindingAffinity,
      "evidenceTier": t.evidenceTier,
      "tierLabel": t.tierLabel
    })),
    "regulatoryValidation": {
      "@type": "Monograph",
      "authority": caseStudy.clinicalStatus.regulatoryAuthority,
      "monographReference": caseStudy.clinicalStatus.monographId,
      "category": caseStudy.clinicalStatus.therapeuticCategory,
      "approvedIndications": caseStudy.clinicalStatus.approvedIndications,
      "evidenceTier": caseStudy.clinicalStatus.evidenceTier
    }
  };

  return JSON.stringify(jsonLd, null, 2);
}

export function generateCsv(caseStudies) {
  const headers = [
    "Plant ID",
    "Ancient Greek Name",
    "Accepted Linnaean Binomial",
    "Botanical Family",
    "Kew POWO ID",
    "NCBI Taxon ID",
    "Historical Passage Ref",
    "Humoral Qualities",
    "Primary Metabolite",
    "ChEMBL ID",
    "Molecular Weight",
    "LogP",
    "Target Gene",
    "Target UniProt",
    "Binding Affinity",
    "Evidence Tier",
    "EMA Monograph"
  ];

  const rows = [];
  caseStudies.forEach(cs => {
    cs.phytochemicals.forEach(pc => {
      cs.molecularTargets.forEach(tgt => {
        rows.push([
          `"${cs.id}"`,
          `"${cs.ancientNameGreek}"`,
          `"${cs.acceptedBinomial}"`,
          `"${cs.botanicalFamily}"`,
          `"${cs.kewPowoId}"`,
          `"${cs.ncbiTaxonId}"`,
          `"${cs.manuscriptPassage.bookChapter}"`,
          `"${cs.humoralProfile.qualities}"`,
          `"${pc.name}"`,
          `"${pc.chemblId}"`,
          pc.molecularWeight,
          pc.logP,
          `"${tgt.geneSymbol}"`,
          `"${tgt.uniprotId}"`,
          `"${tgt.bindingAffinity}"`,
          `"Tier ${tgt.evidenceTier}"`,
          `"${cs.clinicalStatus.monographId}"`
        ].join(","));
      });
    });
  });

  return [headers.join(","), ...rows].join("\n");
}
