import React, { useState } from 'react';
import { generateJsonLd, generateCsv } from '../utils/fairExporter';
import { ETHNO_CASE_STUDIES } from '../data/ethnopharmData';
import { Download, Copy, Check, FileJson, FileSpreadsheet, X } from 'lucide-react';

export function FairExportModal({ isOpen, onClose, currentCaseStudy }) {
  const [exportFormat, setExportFormat] = useState('jsonld');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const content = exportFormat === 'jsonld' 
    ? generateJsonLd(currentCaseStudy)
    : generateCsv(ETHNO_CASE_STUDIES);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = exportFormat === 'jsonld' 
      ? `byzmed-${currentCaseStudy.id}.jsonld`
      : `byzmed-ethnopharm-all.csv`;
    const mime = exportFormat === 'jsonld' ? 'application/ld+json' : 'text/csv';
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between bg-[#FAFBFB]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#2D4A3E] text-white flex items-center justify-center font-bold text-sm">
              FAIR
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                FAIR Scientific Data Export
              </h3>
              <p className="text-xs text-[#64748B]">
                Findable, Accessible, Interoperable, and Reusable open data package
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Format Selector Bar */}
        <div className="px-6 py-3 border-b border-[#E2E8F0] bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExportFormat('jsonld')}
              className={`px-3 py-1.5 rounded text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors ${
                exportFormat === 'jsonld'
                  ? 'bg-[#2D4A3E] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileJson className="w-3.5 h-3.5" />
              <span>JSON-LD (BioPAX / Schema.org)</span>
            </button>

            <button
              onClick={() => setExportFormat('csv')}
              className={`px-3 py-1.5 rounded text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors ${
                exportFormat === 'csv'
                  ? 'bg-[#2D4A3E] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>CSV (All 4 Plant Taxa & Assays)</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="text-xs font-mono px-3 py-1.5 rounded bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="text-xs font-mono px-3 py-1.5 rounded bg-[#2D4A3E] text-white font-semibold hover:bg-[#1E3A2F] flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-300" />
              <span>Download {exportFormat.toUpperCase()}</span>
            </button>
          </div>
        </div>

        {/* Code / Content Box */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#F8F9FA]">
          <pre className="font-mono-code text-[11px] leading-relaxed text-[#0F172A] bg-white p-4 rounded-lg border border-[#CBD5E1] overflow-x-auto select-all">
            {content}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#E2E8F0] bg-[#FAFBFB] flex items-center justify-between text-xs text-[#64748B]">
          <span className="font-mono text-[11px]">
            Compatible with ChEMBL, UniProt SPARQL endpoints, and RDKit Python bindings.
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
