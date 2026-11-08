# 🌿 ByzMed-Graph: Bridging Premodern Mediterranean Ethnopharmacology to Modern Molecular Targets

[![EthnoHack 2026](https://img.shields.io/badge/EthnoHack-2026-emerald.svg)](https://ethnohack2026.devpost.com/)
[![Track 1: Traditional Knowledge](https://img.shields.io/badge/Track%201-Traditional%20Knowledge-2D4A3E.svg)](#)
[![Horizon Europe ETHCSTWIN](https://img.shields.io/badge/Horizon%20Europe-ETHCSTWIN-blue.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![FAIR Data Compliant](https://img.shields.io/badge/Data-FAIR%20%2F%20JSON--LD-purple.svg)](#)

> **Hackathon Submission:** EthnoHack 2026 · Data Hackathon on Ethnopharmacology & Health  
> **Organized under:** ETHCSTWIN (Horizon Europe) · National and Kapodistrian University of Athens (NKUA) & Fraunhofer SCAI  
> **Selected Track:** **Track 1: Traditional Knowledge** *(Cross-cutting into Track 2: Natural Products & Drug Discovery and Track 4: Digital Health)*  
> **Primary Repository & Documentation Workspace:** `ByzMed-Graph / PhytoLink-AI`

---

## 📑 Executive Summary

Traditional medicine manuscripts from the Mediterranean basin—spanning **Dioscorides’ *De Materia Medica*** (1st c. CE), the **Galenic corpus** (2nd c. CE), and late Byzantine medical treatises such as those of **John Zacharias Aktouarios** (13th–14th c. CE)—contain thousands of empirical observations on plant bioactivity that yielded modern blockbuster drugs (from aspirin to artemisinin). 

However, this vast intellectual heritage remains computationally inaccessible to modern drug discovery due to **three historical friction points**:
1. **The Linguistic & Palaeographic Barrier:** Ancient and Byzantine medical Greek terms are locked in archaic dialects with no automated entity extraction pipelines.
2. **The Taxonomic Shifting Sand:** A single botanical entity may have shifted through five distinct common and folk names over 2,000 years before Linnaean taxonomy was codified in 1753.
3. **The Humoral-to-Molecular Semantic Gap:** Premodern therapeutic indications describe clinical states in pre-Cartesian humoral terms (*"dissolves cold humours"*, *"soothes inflamed liver heat"*, *"draws out venom"*) which have no direct standard mapping to modern disease ontologies (MeSH, ICD-11) or protein target classes (COX-2, TNF-$\alpha$, NF-$\kappa$B).

**ByzMed-Graph** is an open-science computational platform and interactive research workbench that solves this problem. It uses domain-adapted NLP to extract botanical entities from premodern Mediterranean texts, disambiguates historical synonyms to verified modern Linnaean taxonomy (Kew POWO / NCBI Taxonomy), maps ancient therapeutic indications to modern MeSH ontologies, and links the identified species to their verified constituent phytochemicals (PubChem/ChEMBL) and experimental human protein targets (UniProt/BindingDB).

Crucially, **ByzMed-Graph** explicitly rejects the "AI black-box" trap. It integrates a **three-tier uncertainty quantification engine** that strictly separates *historically attested usage*, *empirically validated in-vitro bioactivity*, and *computational binding predictions*—strictly upholding the hackathon's mandate on responsible scientific AI.

---

## 🔬 System Architecture

```
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                             1. INGESTION & NORMALIZATION                                              │
│   • Dioscorides (De Materia Medica)    • Galen (De Simplicibus)    • John Zacharias Aktouarios (Medical Treatises)     │
│   • Original Ancient/Byzantine Greek Texts + High-Fidelity English Scholarly Translations                              │
└───────────────────────────────────────────────────┬───────────────────────────────────────────────────────────────────┘
                                                    │
                                                    ▼
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                         2. DOMAIN-SPECIFIC NLP EXTRACTOR                                              │
│   • Premodern Botanical Named Entity Recognition (NER)                                                                │
│   • Historical Synonym Disambiguation Matrix across Eras (Classical Greek ➔ Byzantine ➔ Folk ➔ Modern Greek)         │
│   • Humoral & Empirical Symptom Extraction Engine                                                                     │
└───────────────────────────────────────────────────┬───────────────────────────────────────────────────────────────────┘
                                                    │
                                                    ▼
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                        3. TAXONOMIC & ONTOLOGY RESOLUTION                                             │
│   • Linnaean Taxonomic Normalization (Kew Gardens Plants of the World Online - POWO / NCBI Taxonomy)                 │
│   • Semantic Bridge: Humoral Indications ──► Modern Medical Subject Headings (MeSH) / Disease Ontology (DOID)        │
└───────────────────────────────────────────────────┬───────────────────────────────────────────────────────────────────┘
                                                    │
                                                    ▼
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                         4. MOLECULAR & PHARMACOLOGICAL LINK                                           │
│   • Phytochemical Metabolite Profiles (ChEMBL, PubChem, KNApSAcK)                                                     │
│   • Experimentally Verified Human Protein Targets (UniProt, BindingDB)                                                │
│   • European Medicines Agency (EMA) Herbal Monograph & PubMed Clinical Trials Linkage                                 │
└───────────────────────────────────────────────────┬───────────────────────────────────────────────────────────────────┘
                                                    │
                                                    ▼
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               5. SCIENTIFIC WORKBENCH & UNCERTAINTY INTERFACE                                         │
│   • Clean Editorial Scientific UI (Zero AI Clutter, Zero Dark Mode Neon)                                              │
│   • Interactive Manuscript Explorer (Side-by-Side Bilingual Ancient/Modern View)                                      │
│   • Phytochemical Profiler with RDKit 2D Structures & Lipinski Rule of 5 Descriptors                                  │
│   • 3-Tier Confidence Meter: [Historical Attestation] vs. [In-Vitro Proven] vs. [Computational Hypothesis]           │
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Benchmark Curated Taxa (Faculty of Pharmacy / NKUA Alignment)

| Taxon | Ancient Greek Name | Botanical Family | Kew POWO ID | Primary Metabolite | Human Target | Clinical Validation |
|---|---|---|---|---|---|---|
| ***Sideritis scardica* Griseb.** | Σιδηρῖτις ἡ ἐπιμήκης | Lamiaceae | `urn:lsid:ipni.org:names:459524-1` | Acteoside (Verbascoside) | PTGS2 (COX-2), TNF-$\alpha$ | EMA/HMPC/39453/2015 |
| ***Pistacia lentiscus* var. *chia*** | Σχῖνος / Μαστίχη | Anacardiaceae | `urn:lsid:ipni.org:names:69993-1` | Isomasticadienolic acid | *H. pylori* ATP-synthase | EMA/HMPC/688467/2013 |
| ***Crocus sativus* L.** | Κρόκος | Iridaceae | `urn:lsid:ipni.org:names:436531-1` | Crocin-1, Safranal | SLC6A4 (SERT), NMDA | Human RCTs vs. Fluoxetine |
| ***Hypericum perforatum* L.** | Ὑπερικόν | Hypericaceae | `urn:lsid:ipni.org:names:433658-1` | Hyperforin, Hypericin | NR1I2 (PXR) ➔ CYP3A4 / P-gp | EMA/HMPC/244315/2014 |

---

## ⚡ Quickstart & Local Development

```bash
# Clone the repository
git clone https://github.com/byzmed-graph/byzmed-graph.git
cd byzmed-graph

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## ⚖️ Epistemological Framework: The 3-Tier Uncertainty Model

To ensure absolute adherence to ethical and responsible AI guidelines in medicine:
* 🟢 **Tier 1 (Regulatory Gold Standard):** Backed by European Medicines Agency (EMA/HMPC) monographs and human randomized clinical trials (RCTs).
* 🟡 **Tier 2 (Preclinical In-Vitro Assays):** Documented enzyme binding ($IC_{50}, K_i$) in ChEMBL / BindingDB without human pharmacokinetic proof.
* ⚪ **Tier 3 (In-Silico Computational Hypothesis):** Exploratory predictions generated via molecular fingerprints or QSAR models.

---

## 📜 Devpost Video Recording Companion
An embedded **10-minute video presentation guide** is built directly into the UI under the **"Devpost Pitch & Slides"** button, offering a timestamped script matching the hackathon evaluation rubrics.
