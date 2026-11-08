import React from 'react';
import { X, Play, Heart, Sprout, ShieldCheck } from 'lucide-react';

export function VideoStoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E6DF] bg-white flex items-center justify-between">
          <div>
            <h3 className="font-serif-display text-lg font-bold text-[#113827]">
              Our Story · Growing Greener Spaces
            </h3>
            <span className="text-xs text-[#718277]">1-Minute Cinematic Journey</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Presentation */}
        <div className="relative aspect-16/9 bg-slate-950 overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=80"
            alt="BlooM Story Background"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A3E635]">
              Mission & Sustainable Philosophy
            </span>
            <h4 className="font-serif-display text-2xl font-bold leading-tight">
              Bringing Nature Back Into Modern Urban Living
            </h4>
            <p className="text-xs text-white/80 leading-relaxed max-w-lg">
              We started BlooM with a simple belief: when we surround ourselves with living green plants, our homes become sanctuaries of calm, health, and creativity.
            </p>
          </div>

          {/* Central Play Pulse Indicator */}
          <div className="absolute w-16 h-16 rounded-full bg-[#134E35]/90 border-2 border-[#A3E635] flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-white ml-1 text-white" />
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-white border-t border-[#E8E6DF] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5E6D64]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium text-[#113827]">
              <Sprout className="w-3.5 h-3.5 text-[#134E35]" />
              Eco-Friendly Packaging
            </span>
            <span className="flex items-center gap-1 font-medium text-[#113827]">
              <Heart className="w-3.5 h-3.5 text-rose-600" />
              1 Plant Planted per Order
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#113827] text-white font-semibold hover:bg-[#0B291C]"
          >
            Close Story
          </button>
        </div>

      </div>
    </div>
  );
}
