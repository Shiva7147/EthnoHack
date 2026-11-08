import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function BloomHero({ onOpenShop, onWatchStory }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:py-16 lg:py-20 bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy, CTAs, Stats */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332]">
                GREENER SPACES. HAPPIER LIVES.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#113827] leading-[1.08]">
              Bring Life <br />
              <span className="italic font-normal">Indoors</span>
            </h1>

            {/* Subtitle description */}
            <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed max-w-lg">
              BlooM makes it easy to create a healthier, calmer home with beautiful plants, expert guidance, and everything you need to grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onOpenShop}
                className="px-6 py-3 sm:py-3.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-sm font-medium tracking-wide flex items-center gap-2 shadow-sm hover:shadow-md transition-all group"
              >
                <span>Shop Plants</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onWatchStory}
                className="flex items-center gap-3 group text-left cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-[#2D4A3E]/40 group-hover:border-[#113827] flex items-center justify-center bg-white/80 transition-colors shadow-2xs">
                  <Play className="w-3.5 h-3.5 fill-[#113827] text-[#113827] ml-0.5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#113827] leading-tight">
                    Watch Our Story
                  </div>
                  <div className="text-[11px] text-[#718277]">
                    1 min
                  </div>
                </div>
              </button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8 border-t border-[#E4E1D8] max-w-md">
              <div>
                <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#113827]">
                  10K+
                </div>
                <div className="text-[11px] sm:text-xs text-[#62746A] mt-0.5 leading-snug">
                  Happy Plant Parents
                </div>
              </div>

              <div>
                <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#113827]">
                  500+
                </div>
                <div className="text-[11px] sm:text-xs text-[#62746A] mt-0.5 leading-snug">
                  Plant Varieties
                </div>
              </div>

              <div>
                <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#113827]">
                  4.9/5
                </div>
                <div className="text-[11px] sm:text-xs text-[#62746A] mt-0.5 leading-snug">
                  Customer Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Composition with Script Tag */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/60 bg-white aspect-4/3 sm:aspect-16/11 lg:aspect-4/3">
              {/* Sunlit plant interior photo */}
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=85"
                alt="Lush sunlit indoor houseplants with ceramic planters and mid-century armchair"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
              />

              {/* Subtle natural lighting gradient vignette */}
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/10 pointer-events-none" />

              {/* Hand-lettered whimsical script in upper right */}
              <div className="absolute top-4 right-5 sm:top-6 sm:right-7 pointer-events-none text-right">
                <span className="font-script text-2xl sm:text-3xl text-[#113827] font-bold drop-shadow-xs block leading-tight">
                  A Greener <br />
                  Happier <br />
                  You
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
