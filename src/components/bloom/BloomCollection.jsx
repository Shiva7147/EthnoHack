import React from 'react';
import { BLOOM_PLANTS_COLLECTION } from '../../data/bloomData';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function BloomCollection({ onSelectCategory, onViewAll }) {
  return (
    <section id="collection" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332]">
            OUR COLLECTION
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#113827] tracking-tight">
            Plants for <br className="hidden sm:inline" />
            Every Space
          </h2>
        </div>

        <div className="max-w-md space-y-3">
          <p className="text-sm text-[#5E6D64] leading-relaxed">
            From easy-care greens to statement plants, explore our collections and find the perfect match for your home.
          </p>
          <div>
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#113827] hover:text-[#1B4332] group transition-colors"
            >
              <span>View All Plants</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BLOOM_PLANTS_COLLECTION.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectCategory(item)}
            className="group cursor-pointer bg-white rounded-2xl border border-[#E8E6DF] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Plant Photography */}
            <div className="relative aspect-4/5 overflow-hidden bg-[#F6F5F0]">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Card Content & Circular Arrow */}
            <div className="p-5 flex items-center justify-between gap-3 flex-1">
              <div>
                <h3 className="font-semibold text-base text-[#113827] group-hover:text-[#134E35] transition-colors">
                  {item.category}
                </h3>
                <p className="text-xs text-[#718277] mt-0.5">
                  {item.tagline}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-[#D5D3CA] group-hover:border-[#113827] group-hover:bg-[#113827] group-hover:text-white text-[#113827] flex items-center justify-center shrink-0 transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
