import React from 'react';
import { Search, ShoppingBag, ArrowRight } from 'lucide-react';

export function BloomNavbar({ onOpenShop, onOpenCart, cartCount = 0, onSearchClick, activeSection, scrollToSection }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#F6F5F0]/90 backdrop-blur-md border-b border-[#E8E6DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-1 group"
        >
          <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#113827]">
            Bloo<span className="text-[#134E35]">M</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#134E35] mb-2 group-hover:scale-125 transition-transform"></span>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#2C4134] tracking-wide">
          <button 
            onClick={() => scrollToSection('collection')}
            className="hover:text-[#113827] transition-colors"
          >
            Plants
          </button>
          <button 
            onClick={() => scrollToSection('planters')}
            className="hover:text-[#113827] transition-colors"
          >
            Planters
          </button>
          <button 
            onClick={() => scrollToSection('app')}
            className="hover:text-[#113827] transition-colors"
          >
            Care Guides
          </button>
          <button 
            onClick={() => scrollToSection('lifestyle')}
            className="hover:text-[#113827] transition-colors"
          >
            Inspiration
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="hover:text-[#113827] transition-colors"
          >
            About
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button 
            onClick={onSearchClick}
            className="text-[#2C4134] hover:text-[#113827] p-1.5 transition-colors"
            title="Search plants, care guides and planters"
          >
            <Search className="w-4 h-4" />
          </button>

          <button 
            onClick={onOpenCart}
            className="relative text-[#2C4134] hover:text-[#113827] p-1.5 transition-colors"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#134E35] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => alert('Welcome to BlooM! Member sign-in modal.')}
            className="hidden sm:inline text-[13px] font-medium text-[#2C4134] hover:text-[#113827] transition-colors"
          >
            Log in
          </button>

          <button
            onClick={onOpenShop}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-[12px] sm:text-[13px] font-medium tracking-wide flex items-center gap-1.5 shadow-xs hover:shadow-sm transition-all"
          >
            <span>Shop Plants</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
