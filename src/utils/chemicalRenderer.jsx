/**
 * 2D Chemical Structure Vector Depiction Utility
 * Generates publication-grade ACS 1996 style SVG representations of natural product metabolites
 */

import React from 'react';

export function ChemicalStructureSvg({ type, width = 280, height = 180, className = "" }) {
  switch (type) {
    case 'acteoside':
      return (
        <svg viewBox="0 0 320 200" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Background subtle grid/frame */}
          <rect width="320" height="200" fill="#FCFCFB" rx="6" stroke="#E2E8F0" strokeWidth="1" />
          
          {/* Caffeic Acid Moiety (Left-center) */}
          <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Catechol ring 1 */}
            <polygon points="50,60 75,45 100,60 100,90 75,105 50,90" />
            <line x1="75" y1="52" x2="95" y2="64" />
            <line x1="95" y1="86" x2="75" y2="98" />
            <line x1="56" y1="87" x2="56" y2="63" />
            {/* OH groups */}
            <line x1="50" y1="60" x2="30" y2="48" stroke="#DC2626" />
            <line x1="50" y1="90" x2="30" y2="102" stroke="#DC2626" />
            {/* Acrylic double bond */}
            <polyline points="100,75 125,75 140,60 160,70" />
            <line x1="128" y1="71" x2="138" y2="62" />
            {/* Carbonyl C=O */}
            <line x1="140" y1="60" x2="140" y2="40" stroke="#DC2626" />
            <line x1="144" y1="60" x2="144" y2="40" stroke="#DC2626" />
            {/* Ester Oxygen to Central Glucose */}
            <line x1="160" y1="70" x2="175" y2="62" stroke="#2563EB" />
            <line x1="175" y1="62" x2="190" y2="70" />
          </g>

          {/* Central Glucopyranose ring */}
          <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <polygon points="190,70 215,60 235,75 235,105 210,115 190,100" />
            <circle cx="215" cy="60" r="3" fill="#2563EB" stroke="#2563EB" />
            {/* Hydroxy decorations */}
            <line x1="235" y1="75" x2="252" y2="68" stroke="#DC2626" />
            <line x1="235" y1="105" x2="252" y2="112" stroke="#DC2626" />
            <line x1="210" y1="115" x2="210" y2="132" stroke="#DC2626" />
            {/* Branch to Rhamnose */}
            <line x1="190" y1="100" x2="175" y2="115" stroke="#2563EB" />
          </g>

          {/* Alpha-L-Rhamnose branch (Lower left) */}
          <g stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <polygon points="175,115 160,135 170,155 195,155 205,135 195,118" />
            <line x1="160" y1="135" x2="142" y2="140" stroke="#DC2626" />
            <line x1="170" y1="155" x2="165" y2="172" stroke="#DC2626" />
            <line x1="195" y1="155" x2="210" y2="170" />
          </g>

          {/* Phenylethanoid Aglycone (Right side) */}
          <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <line x1="215" y1="60" x2="225" y2="38" />
            <line x1="225" y1="38" x2="245" y2="38" stroke="#2563EB" />
            <line x1="245" y1="38" x2="260" y2="50" />
            <line x1="260" y1="50" x2="275" y2="42" />
            {/* Catechol ring 2 */}
            <polygon points="275,42 295,30 310,42 310,65 295,78 275,65" />
            <line x1="295" y1="36" x2="306" y2="44" />
            <line x1="306" y1="61" x2="295" y2="72" />
            {/* OH groups on 2nd catechol */}
            <line x1="310" y1="42" x2="318" y2="38" stroke="#DC2626" />
            <line x1="310" y1="65" x2="318" y2="70" stroke="#DC2626" />
          </g>

          {/* Labels */}
          <text x="14" y="48" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="14" y="112" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="135" y="32" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="255" y="70" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="206" y="145" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="12" y="185" fill="#64748B" fontSize="9.5" fontFamily="JetBrains Mono">C29H36O15 · Acteoside (MW 624.59)</text>
          <text x="215" y="185" fill="#2D4A3E" fontSize="9" fontFamily="Inter" fontWeight="600">ChEMBL447180</text>
        </svg>
      );

    case 'apigenin_glc':
      return (
        <svg viewBox="0 0 320 200" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" fill="#FCFCFB" rx="6" stroke="#E2E8F0" strokeWidth="1" />
          
          {/* Flavone Chromone Core (A & C rings) */}
          <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Ring A */}
            <polygon points="90,70 115,55 140,70 140,100 115,115 90,100" />
            <line x1="115" y1="62" x2="135" y2="74" />
            <line x1="135" y1="96" x2="115" y2="108" />
            <line x1="96" y1="97" x2="96" y2="73" />
            
            {/* Ring C */}
            <polygon points="140,70 165,55 190,70 190,100 165,115 140,100" />
            <circle cx="165" cy="55" r="3" fill="#2563EB" stroke="#2563EB" />
            <line x1="185" y1="74" x2="185" y2="96" />
            {/* Carbonyl C=O at pos 4 */}
            <line x1="165" y1="115" x2="165" y2="135" stroke="#DC2626" />
            <line x1="168" y1="115" x2="168" y2="135" stroke="#DC2626" />
            {/* OH at pos 5 */}
            <line x1="115" y1="115" x2="115" y2="135" stroke="#DC2626" />

            {/* Ring B (Phenyl) attached at pos 2 */}
            <line x1="190" y1="70" x2="215" y2="55" />
            <polygon points="215,55 240,40 265,55 265,85 240,100 215,85" />
            <line x1="240" y1="47" x2="260" y2="59" />
            <line x1="260" y1="81" x2="240" y2="93" />
            <line x1="221" y1="82" x2="221" y2="58" />
            {/* 4'-OH on ring B */}
            <line x1="265" y1="70" x2="285" y2="70" stroke="#DC2626" />
          </g>

          {/* 7-O-Glucosyl group (Left) */}
          <g stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <line x1="90" y1="100" x2="70" y2="112" stroke="#2563EB" />
            <line x1="70" y1="112" x2="52" y2="105" />
            <polygon points="52,105 35,115 20,102 20,78 37,68 52,78" />
            <circle cx="37" cy="68" r="2.5" fill="#2563EB" stroke="#2563EB" />
            <line x1="20" y1="78" x2="10" y2="72" stroke="#DC2626" />
            <line x1="20" y1="102" x2="10" y2="108" stroke="#DC2626" />
            <line x1="35" y1="115" x2="35" y2="130" stroke="#DC2626" />
          </g>

          <text x="290" y="74" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="160" y="148" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="110" y="148" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="12" y="185" fill="#64748B" fontSize="9.5" fontFamily="JetBrains Mono">C21H20O10 · Apigenin-7-O-glucoside (MW 432.38)</text>
          <text x="215" y="185" fill="#2D4A3E" fontSize="9" fontFamily="Inter" fontWeight="600">ChEMBL252994</text>
        </svg>
      );

    case 'triterpene':
    case 'isomasticadienolic':
      return (
        <svg viewBox="0 0 320 200" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" fill="#FCFCFB" rx="6" stroke="#E2E8F0" strokeWidth="1" />
          {/* Tetracyclic Triterpene (Steroid-like A-B-C-D core) */}
          <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Ring A */}
            <polygon points="45,115 65,100 85,115 85,145 65,160 45,145" />
            <line x1="45" y1="145" x2="25" y2="155" stroke="#DC2626" />
            <line x1="65" y1="160" x2="65" y2="175" />
            <line x1="65" y1="160" x2="52" y2="175" />
            
            {/* Ring B */}
            <polygon points="85,115 110,100 130,115 130,145 110,160 85,145" />
            <line x1="85" y1="115" x2="85" y2="95" strokeWidth="3" />
            
            {/* Ring C */}
            <polygon points="130,115 155,100 175,115 175,145 155,160 130,145" />
            {/* Double bond C8=C9 / C7=C8 */}
            <line x1="135" y1="120" x2="150" y2="110" />
            
            {/* Ring D (5-membered ring) */}
            <polygon points="175,115 200,105 210,128 195,148 175,145" />
            <line x1="175" y1="115" x2="175" y2="95" strokeWidth="3" />
            
            {/* Side chain tail with carboxylic acid */}
            <polyline points="200,105 225,95 245,110 265,95 285,105" />
            <line x1="245" y1="110" x2="245" y2="128" />
            {/* Double bond in side chain */}
            <line x1="267" y1="92" x2="283" y2="100" />
            {/* Terminal Carboxylic acid */}
            <line x1="285" y1="105" x2="305" y2="95" stroke="#DC2626" />
            <line x1="285" y1="105" x2="285" y2="125" stroke="#DC2626" />
            <line x1="288" y1="105" x2="288" y2="125" stroke="#DC2626" />
          </g>

          <text x="8" y="162" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">HO</text>
          <text x="306" y="98" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="280" y="138" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="12" y="32" fill="#2D4A3E" fontSize="10" fontFamily="Inter" fontWeight="700">Triterpenoid Oleoresin Scaffold</text>
          <text x="12" y="185" fill="#64748B" fontSize="9.5" fontFamily="JetBrains Mono">C30H48O3 · Isomasticadienolic Acid (MW 456.71)</text>
          <text x="215" y="185" fill="#2D4A3E" fontSize="9" fontFamily="Inter" fontWeight="600">ChEMBL481512</text>
        </svg>
      );

    case 'hyperforin':
      return (
        <svg viewBox="0 0 320 200" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" fill="#FCFCFB" rx="6" stroke="#E2E8F0" strokeWidth="1" />
          
          {/* Bicyclic Polyketide / Prenylated Phloroglucinol Core */}
          <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Central bicyclo[3.3.1]nonane-2,4,9-trione core */}
            <polygon points="120,80 150,65 180,80 180,120 150,135 120,120" />
            {/* Bridgehead bridge */}
            <line x1="150" y1="65" x2="150" y2="105" strokeWidth="2.5" />
            <line x1="150" y1="105" x2="180" y2="120" />

            {/* Tri-ketone / Enol oxygens */}
            <line x1="120" y1="80" x2="102" y2="70" stroke="#DC2626" />
            <line x1="180" y1="80" x2="198" y2="70" stroke="#DC2626" />
            <line x1="150" y1="135" x2="150" y2="155" stroke="#DC2626" />
            <line x1="153" y1="135" x2="153" y2="155" stroke="#DC2626" />

            {/* Prenyl Side Chain 1 (Top left) */}
            <polyline points="120,80 100,95 80,85 60,95" />
            <line x1="60" y1="95" x2="45" y2="85" />
            <line x1="60" y1="95" x2="55" y2="115" />
            <line x1="81" y1="82" x2="63" y2="91" />

            {/* Prenyl Side Chain 2 (Bottom right) */}
            <polyline points="180,120 205,125 225,115 245,125" />
            <line x1="245" y1="125" x2="260" y2="115" />
            <line x1="245" y1="125" x2="255" y2="145" />

            {/* Prenyl Side Chain 3 (Top right) */}
            <polyline points="180,80 205,75 225,85 245,75" />
            <line x1="245" y1="75" x2="265" y2="75" />
            <line x1="245" y1="75" x2="250" y2="55" />

            {/* 2-Methylpropanoyl group */}
            <polyline points="120,120 100,135 80,125 65,140" />
            <line x1="100" y1="135" x2="100" y2="155" stroke="#DC2626" />
            <line x1="97" y1="135" x2="97" y2="155" stroke="#DC2626" />
          </g>

          <text x="88" y="70" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">HO</text>
          <text x="200" y="70" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="145" y="168" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="94" y="168" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="12" y="32" fill="#B45309" fontSize="10" fontFamily="Inter" fontWeight="700">Prenylated Acylphloroglucinol (PXR Agonist)</text>
          <text x="12" y="185" fill="#64748B" fontSize="9.5" fontFamily="JetBrains Mono">C35H52O4 · Hyperforin (MW 536.79)</text>
          <text x="215" y="185" fill="#2D4A3E" fontSize="9" fontFamily="Inter" fontWeight="600">ChEMBL288334</text>
        </svg>
      );

    case 'hypericin':
      return (
        <svg viewBox="0 0 320 200" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" fill="#FCFCFB" rx="6" stroke="#E2E8F0" strokeWidth="1" />
          
          {/* Condensed Polycyclic Naphthodianthrone System */}
          <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Top Anthrone half */}
            <polygon points="90,75 110,65 130,75 130,95 110,105 90,95" />
            <polygon points="130,75 150,65 170,75 170,95 150,105 130,95" />
            <polygon points="170,75 190,65 210,75 210,95 190,105 170,95" />
            
            {/* Bottom Anthrone half */}
            <polygon points="90,95 110,105 130,95 130,115 110,125 90,115" />
            <polygon points="130,95 150,105 170,95 170,115 150,125 130,115" />
            <polygon points="170,95 190,105 210,95 210,115 190,125 170,115" />

            {/* Fused aromatic double bonds */}
            <line x1="95" y1="78" x2="105" y2="72" />
            <line x1="125" y1="78" x2="125" y2="92" />
            <line x1="175" y1="78" x2="175" y2="92" />
            <line x1="205" y1="78" x2="195" y2="72" />
            <line x1="95" y1="112" x2="105" y2="118" />
            <line x1="205" y1="112" x2="195" y2="118" />

            {/* Quinone and Phenolic OH groups */}
            <line x1="150" y1="65" x2="150" y2="48" stroke="#DC2626" />
            <line x1="150" y1="125" x2="150" y2="142" stroke="#DC2626" />
            <line x1="90" y1="75" x2="72" y2="65" stroke="#DC2626" />
            <line x1="210" y1="75" x2="228" y2="65" stroke="#DC2626" />
            <line x1="90" y1="115" x2="72" y2="125" stroke="#DC2626" />
            <line x1="210" y1="115" x2="228" y2="125" stroke="#DC2626" />

            {/* Methyl groups */}
            <line x1="110" y1="65" x2="110" y2="48" />
            <line x1="190" y1="125" x2="190" y2="142" />
          </g>

          <text x="145" y="42" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="145" y="155" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="56" y="65" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">HO</text>
          <text x="232" y="65" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="56" y="132" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">HO</text>
          <text x="232" y="132" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">OH</text>
          <text x="12" y="32" fill="#DC2626" fontSize="10" fontFamily="Inter" fontWeight="700">Extended Planar Dianthrone (Photosensitizer)</text>
          <text x="12" y="185" fill="#64748B" fontSize="9.5" fontFamily="JetBrains Mono">C30H16O8 · Hypericin (MW 504.45)</text>
          <text x="215" y="185" fill="#2D4A3E" fontSize="9" fontFamily="Inter" fontWeight="600">ChEMBL407769</text>
        </svg>
      );

    case 'crocin':
    default:
      return (
        <svg viewBox="0 0 320 200" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="200" fill="#FCFCFB" rx="6" stroke="#E2E8F0" strokeWidth="1" />
          
          {/* Extended Polyene Carotenoid Backbone (Crocetin Core) */}
          <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <polyline points="75,90 95,80 115,90 135,80 155,90 175,80 195,90 215,80 235,90" />
            {/* Conjugated double bonds */}
            <line x1="97" y1="84" x2="113" y2="92" />
            <line x1="137" y1="84" x2="153" y2="92" />
            <line x1="177" y1="84" x2="193" y2="92" />
            <line x1="217" y1="84" x2="233" y2="92" />
            {/* Methyl branches on conjugated chain */}
            <line x1="115" y1="90" x2="115" y2="108" />
            <line x1="155" y1="90" x2="155" y2="108" />
            <line x1="195" y1="90" x2="195" y2="108" />

            {/* Left Ester Linkage & Gentiobiose Terminal */}
            <polyline points="75,90 60,80 45,90" />
            <line x1="60" y1="80" x2="60" y2="62" stroke="#DC2626" />
            <line x1="63" y1="80" x2="63" y2="62" stroke="#DC2626" />
            <circle cx="45" cy="90" r="14" fill="#EBF3EF" stroke="#2D4A3E" strokeWidth="1.5" />
            
            {/* Right Ester Linkage & Gentiobiose Terminal */}
            <polyline points="235,90 250,80 265,90" />
            <line x1="250" y1="80" x2="250" y2="62" stroke="#DC2626" />
            <line x1="253" y1="80" x2="253" y2="62" stroke="#DC2626" />
            <circle cx="275" cy="90" r="14" fill="#EBF3EF" stroke="#2D4A3E" strokeWidth="1.5" />
          </g>

          <text x="45" y="93" fill="#2D4A3E" fontSize="7.5" fontFamily="Inter" fontWeight="700" textAnchor="middle">GENTIOBIOSE</text>
          <text x="275" y="93" fill="#2D4A3E" fontSize="7.5" fontFamily="Inter" fontWeight="700" textAnchor="middle">GENTIOBIOSE</text>
          <text x="56" y="56" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="246" y="56" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">O</text>
          <text x="12" y="32" fill="#B45309" fontSize="10" fontFamily="Inter" fontWeight="700">Conjugated Polyene Carotenoid Digentiobioside</text>
          <text x="12" y="185" fill="#64748B" fontSize="9.5" fontFamily="JetBrains Mono">C44H64O24 · Crocin-1 (MW 976.96)</text>
          <text x="215" y="185" fill="#2D4A3E" fontSize="9" fontFamily="Inter" fontWeight="600">PubChem 5281233</text>
        </svg>
      );
  }
}
