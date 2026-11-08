import React from 'react';
import { Globe, Sparkles } from 'lucide-react';

export function BloomFooter({ onOpenEthnoMode }) {
  return (
    <footer className="border-t border-[#E8E6DF] bg-[#F6F5F0] pt-16 pb-12 text-[#2C4134]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Top Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-1">
              <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#113827]">
                Bloo<span className="text-[#134E35]">M</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#134E35] mb-2"></span>
            </div>
            <p className="text-xs sm:text-sm text-[#62746A]">
              Growing a brighter tomorrow.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEthnoMode}
                className="inline-flex items-center gap-1.5 text-xs text-[#134E35] bg-[#EBF3EF] hover:bg-[#D8E9E0] px-3 py-1.5 rounded-full font-medium transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#134E35]" />
                <span>Switch to ByzMed-Graph Science View</span>
              </button>
            </div>
          </div>

          {/* Shop Column (2-3 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#113827] uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2 text-xs text-[#5E6D64]">
              <li><a href="#collection" className="hover:text-[#113827] transition-colors">All Plants</a></li>
              <li><a href="#collection" className="hover:text-[#113827] transition-colors">Planters</a></li>
              <li><a href="#collection" className="hover:text-[#113827] transition-colors">Accessories</a></li>
              <li><a href="#collection" className="hover:text-[#113827] transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Learn Column (2-3 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#113827] uppercase tracking-wider">
              Learn
            </h4>
            <ul className="space-y-2 text-xs text-[#5E6D64]">
              <li><a href="#app" className="hover:text-[#113827] transition-colors">Plant Care Guides</a></li>
              <li><a href="#blog" className="hover:text-[#113827] transition-colors">Blog</a></li>
              <li><a href="#collection" className="hover:text-[#113827] transition-colors">Plant Library</a></li>
              <li><a href="#faq" className="hover:text-[#113827] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Company Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#113827] uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#5E6D64]">
              <li><a href="#lifestyle" className="hover:text-[#113827] transition-colors">About Us</a></li>
              <li><a href="#lifestyle" className="hover:text-[#113827] transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#113827] transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-[#113827] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E8E6DF] text-xs text-[#718277]">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#2C4134]">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors" title="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Pinterest */}
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors" title="Pinterest">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.256-.402.155-1.499-.696-2.435-2.885-2.435-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors" title="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#113827] transition-colors" title="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-right">
            <span>© 2026 BlooM. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <a href="#privacy" className="hover:text-[#113827] transition-colors">Privacy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-[#113827] transition-colors">Terms</a>
            <span>|</span>
            <a href="#cookies" className="hover:text-[#113827] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
