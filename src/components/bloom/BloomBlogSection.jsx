import React from 'react';
import { BLOOM_BLOG_ARTICLES } from '../../data/bloomData';
import { ArrowRight } from 'lucide-react';

export function BloomBlogSection({ onSelectArticle, onReadAll }) {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332]">
            FROM OUR BLOG
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#113827] tracking-tight">
            Tips, Ideas & Inspiration
          </h2>
        </div>

        <div>
          <button
            onClick={onReadAll}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#113827] hover:text-[#1B4332] group transition-colors"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 3 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOOM_BLOG_ARTICLES.map((art) => (
          <div
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="group cursor-pointer bg-white rounded-2xl border border-[#E8E6DF] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Article Image */}
            <div className="aspect-16/10 overflow-hidden bg-[#F6F5F0]">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content & Arrow Button */}
            <div className="p-5 flex items-end justify-between gap-3 flex-1">
              <div>
                <h3 className="font-semibold text-base text-[#113827] group-hover:text-[#134E35] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-[#718277] mt-1 leading-relaxed">
                  {art.excerpt}
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
