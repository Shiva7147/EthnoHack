import React, { useState } from 'react';
import { BLOOM_PLANTS_COLLECTION } from '../../data/bloomData';
import { X, ShoppingBag, Plus, Check, Star, Filter } from 'lucide-react';

export function PlantShopModal({ isOpen, onClose, onAddToCart, cartItems = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!isOpen) return null;

  const allItems = BLOOM_PLANTS_COLLECTION.flatMap(c => 
    c.featuredItems.map(item => ({ ...item, category: c.category }))
  );

  const filteredItems = selectedCategory === "all" 
    ? allItems 
    : allItems.filter(i => i.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E6DF] bg-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif-display text-2xl font-bold text-[#113827]">
                Bloo<span className="text-[#134E35]">M</span> Shop
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#134E35]"></span>
            </div>
            <p className="text-xs text-[#718277]">
              Lush indoor greenery, modern planters & curated botanical bundles
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 py-3 border-b border-[#E8E6DF] bg-white flex items-center gap-2 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
              selectedCategory === "all"
                ? 'bg-[#113827] text-white font-semibold'
                : 'bg-[#F1EFEA] text-[#5E6D64] hover:bg-[#E5E2D8]'
            }`}
          >
            All Plants
          </button>
          {BLOOM_PLANTS_COLLECTION.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.category)}
              className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                selectedCategory === c.category
                  ? 'bg-[#113827] text-white font-semibold'
                  : 'bg-[#F1EFEA] text-[#5E6D64] hover:bg-[#E5E2D8]'
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* Plant Cards Grid */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => {
            const isAdded = cartItems.some(c => c.name === item.name);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E6DF] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#113827] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.care} Care
                  </span>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] text-[#718277] uppercase font-semibold">
                      {item.category}
                    </div>
                    <h4 className="text-sm font-bold text-[#113827]">
                      {item.name}
                    </h4>
                    <div className="text-xs text-[#5E6D64]">
                      Light: <span className="text-[#113827] font-medium">{item.light}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="font-serif-display text-base font-bold text-[#113827]">
                      {item.price}
                    </span>

                    <button
                      onClick={() => onAddToCart(item)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        isAdded
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-[#113827] hover:bg-[#0B291C] text-white'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isAdded ? 'Added' : 'Add to Cart'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 border-t border-[#E8E6DF] bg-white flex items-center justify-between text-xs text-[#718277]">
          <span>Free delivery on orders over $50 · 30-Day Happy Plant Guarantee</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-[#EBF3EF] text-[#134E35] font-semibold hover:bg-[#D5E8DD]"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
