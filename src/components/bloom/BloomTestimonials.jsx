import React from 'react';
import { BLOOM_COMMUNITY_REVIEWS } from '../../data/bloomData';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';

export function BloomTestimonials({ onViewAllReviews }) {
  return (
    <section id="reviews" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332]">
            REAL PEOPLE. REAL GREENER SPACES.
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827] tracking-tight">
            What Our Community Says
          </h2>
        </div>

        <div>
          <button
            onClick={onViewAllReviews}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#113827] hover:text-[#1B4332] group transition-colors"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 3 Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOOM_COMMUNITY_REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl border border-[#E8E6DF] p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            {/* Quote */}
            <p className="text-sm text-[#2C4134] leading-relaxed mb-6 font-normal">
              "{rev.quote}"
            </p>

            {/* Author info & 5 Stars */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#113827]">
                    {rev.author}
                  </h4>
                  <div className="text-[10px] text-[#718277] flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>{rev.role}</span>
                  </div>
                </div>
              </div>

              {/* 5 Yellow Stars */}
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
