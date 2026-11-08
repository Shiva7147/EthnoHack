import React from 'react';
import { Wind, Heart, Home, ArrowRight } from 'lucide-react';

export function BloomLifestyleStory({ onOurStoryClick }) {
  return (
    <section id="lifestyle" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Styled Room Photography with Poster "Good Plants Brighter Days" */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8E6DF] aspect-4/3 sm:aspect-16/11 bg-white">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
              alt="Cozy sunlit living room with wooden credenza, thriving potted plants and wall art"
              className="w-full h-full object-cover object-center"
            />

            {/* Framed Poster Overlay mimicking the exact poster in the user's reference image */}
            <div className="absolute top-6 left-8 sm:top-10 sm:left-12 bg-[#F3EDE2] border-2 border-[#5C4D3C] p-3 sm:p-5 rounded shadow-md text-center max-w-[150px] sm:max-w-[180px]">
              <div className="border border-[#7A6953] p-2 sm:p-3">
                <span className="font-serif-display text-xs sm:text-sm font-bold text-[#3B2F21] uppercase tracking-wider block leading-tight">
                  Good <br />
                  Plants <br />
                  Brighter <br />
                  Days
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Copy, 3 Feature Bullets, Our Story CTA */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          <div className="inline-block">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1B4332]">
              MORE THAN PLANTS
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#113827] tracking-tight leading-[1.15]">
            A Healthier, <br className="hidden sm:inline" />
            Happier Home
          </h2>

          <p className="text-sm sm:text-base text-[#5E6D64] leading-relaxed max-w-lg">
            Plants do more than decorate — they purify the air, reduce stress, and make every space feel more alive.
          </p>

          {/* 3 Icon Features */}
          <div className="space-y-4 pt-2">
            {/* Cleaner Air */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EBF3EF] flex items-center justify-center shrink-0 text-[#134E35]">
                <Wind className="w-5 h-5 text-[#134E35]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#113827]">
                  Cleaner Air
                </h4>
                <p className="text-xs text-[#62746A] mt-0.5">
                  Breathe better every day.
                </p>
              </div>
            </div>

            {/* Less Stress */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EBF3EF] flex items-center justify-center shrink-0 text-[#134E35]">
                <Heart className="w-5 h-5 text-[#134E35]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#113827]">
                  Less Stress
                </h4>
                <p className="text-xs text-[#62746A] mt-0.5">
                  A calmer, happier you.
                </p>
              </div>
            </div>

            {/* More Joy */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#EBF3EF] flex items-center justify-center shrink-0 text-[#134E35]">
                <Home className="w-5 h-5 text-[#134E35]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#113827]">
                  More Joy
                </h4>
                <p className="text-xs text-[#62746A] mt-0.5">
                  Turn your house into a home.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story Button */}
          <div className="pt-2">
            <button
              onClick={onOurStoryClick}
              className="px-6 py-3 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 shadow-xs hover:shadow-sm transition-all group"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
