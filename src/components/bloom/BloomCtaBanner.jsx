import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BloomCtaBanner({ onShopNow }) {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 sm:mb-20">
      <div className="relative rounded-3xl overflow-hidden bg-[#0C2A1C] text-white p-8 sm:p-12 lg:p-16 shadow-xl">
        {/* Background leaf texture glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Copy */}
          <div className="space-y-3 sm:space-y-4 max-w-xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A3E635] block">
              READY TO GREEN YOUR SPACE?
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Join Thousands of <br />
              Happy Plant Parents
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Shop plants, get expert tips, and be part of a growing community.
            </p>
          </div>

          {/* Right Action & Avatars */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              onClick={onShopNow}
              className="px-8 py-3.5 sm:py-4 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-[#0C2A1C] text-sm sm:text-base font-bold tracking-wide flex items-center gap-2.5 shadow-lg hover:shadow-xl transition-all group"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Overlapping Avatars & 10K+ Text */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3 overflow-hidden">
                {avatars.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Happy Plant Parent"
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-[#0C2A1C] object-cover"
                  />
                ))}
              </div>
              <div className="text-xs font-semibold text-white leading-tight">
                <span className="font-bold text-[#A3E635] block">10K+</span>
                Happy Plant Parents
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
