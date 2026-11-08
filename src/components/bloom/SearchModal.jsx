import React, { useState } from 'react';
import { BLOOM_PLANTS_COLLECTION, BLOOM_BLOG_ARTICLES } from '../../data/bloomData';
import { Search, X, ArrowRight } from 'lucide-react';

export function SearchModal({ isOpen, onClose, onSelectItem }) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const allPlants = BLOOM_PLANTS_COLLECTION.flatMap(c => 
    c.featuredItems.map(i => ({ ...i, type: "Plant", subtitle: c.category }))
  );

  const allArticles = BLOOM_BLOG_ARTICLES.map(a => ({
    name: a.title,
    subtitle: a.category,
    image: a.image,
    price: a.readTime,
    type: "Guide"
  }));

  const allSearchables = [...allPlants, ...allArticles];

  const results = query.trim() === ""
    ? allSearchables.slice(0, 4)
    : allSearchables.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
      <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in duration-150">
        
        {/* Search input bar */}
        <div className="p-4 border-b border-[#E8E6DF] bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-[#134E35]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plants, care guides, planters (e.g. Monstera, Pothos, Repotting)..."
            className="w-full bg-transparent text-sm text-[#113827] placeholder:text-[#718277] focus:outline-hidden font-medium"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-[10px] font-mono uppercase font-bold text-[#718277] px-2 mb-1">
            {query.trim() === "" ? "Popular Suggestions" : `Search Results (${results.length})`}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#718277]">
              No matches found for "{query}". Try "Monstera", "Succulents", or "Planter".
            </div>
          ) : (
            results.map((res, i) => (
              <div
                key={i}
                onClick={() => {
                  onSelectItem(res);
                  onClose();
                }}
                className="p-2.5 rounded-xl bg-white hover:bg-[#EBF3EF] border border-[#E8E6DF] flex items-center justify-between gap-3 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-[#113827]">{res.name}</h5>
                    <span className="text-[10px] text-[#718277]">{res.subtitle} · {res.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#134E35]">{res.price}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick tags */}
        <div className="p-3 bg-white border-t border-[#E8E6DF] flex items-center gap-2 text-xs text-[#718277] overflow-x-auto">
          <span className="text-[11px] font-semibold">Quick search:</span>
          {["Monstera", "Succulents", "Low Light", "Watering", "Pet Safe"].map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-[#F1EFEA] hover:bg-[#E5E2D8] text-[11px] text-[#2C4134] whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
