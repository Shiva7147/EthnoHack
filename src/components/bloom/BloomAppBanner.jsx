import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Smartphone, Bell, Droplet, Sun } from 'lucide-react';

export function BloomAppBanner({ onOpenAppModal }) {
  const [monsteraWatered, setMonsteraWatered] = useState(false);

  return (
    <section id="app" className="py-16 sm:py-24 bg-[#0E2F20] text-white overflow-hidden relative">
      {/* Background organic leaf silhouettes overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A3E635_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & App Badges */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A3E635]">
                YOUR PLANT COMPANION
              </span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              The BlooM App
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
              Get personalized care reminders, identify plants, explore tips, and keep your green friends thriving — all in one place.
            </p>

            {/* Download CTA Button (Lime Green Pill) */}
            <div className="pt-2">
              <button
                onClick={onOpenAppModal}
                className="px-7 py-3.5 rounded-full bg-[#A3E635] hover:bg-[#84CC16] text-[#0E2F20] text-sm font-bold tracking-wide flex items-center gap-2 shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Download the App</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* App Store & Google Play Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              {/* App Store */}
              <button 
                onClick={onOpenAppModal}
                className="flex items-center gap-2.5 bg-black/40 hover:bg-black/60 border border-white/20 px-3.5 py-2 rounded-xl transition-all"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.67-.99 1.74-.86 2.76 1.01.08 2.05-.51 2.58-1.26z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-white/70 uppercase leading-none">Download on the</div>
                  <div className="text-xs font-semibold text-white leading-tight">App Store</div>
                </div>
              </button>

              {/* Google Play */}
              <button 
                onClick={onOpenAppModal}
                className="flex items-center gap-2.5 bg-black/40 hover:bg-black/60 border border-white/20 px-3.5 py-2 rounded-xl transition-all"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-.99V2.805c.023-.374.22-.718.609-.991zm11.233 11.233L17.7 15.9l-11.8 6.8c-.5.3-.9.2-1.2-.1l10.142-9.553zm0-2.094L4.7 1.4c.3-.3.7-.4 1.2-.1l11.8 6.8-2.858 2.853zm1.058 1.047l2.8 1.6c.9.5.9 1.3 0 1.8l-2.8 1.6-1.5-1.5 1.5-1.5z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-white/70 uppercase leading-none">GET IT ON</div>
                  <div className="text-xs font-semibold text-white leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with App Interface */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            {/* Whimsical script on the right side */}
            <div className="absolute -right-2 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none z-20 hidden sm:block text-right">
              <span className="font-script text-3xl sm:text-4xl text-[#A3E635] font-bold drop-shadow-sm block leading-tight">
                Care <br />
                Grow <br />
                Thrive
              </span>
            </div>

            {/* Phone Device Frame */}
            <div className="w-[280px] sm:w-[320px] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-4 border-slate-700/80 transform hover:-translate-y-1 transition-transform duration-300">
              {/* Speaker & camera notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950"></div>
              </div>

              {/* Screen Content */}
              <div className="bg-[#FAF9F5] rounded-[30px] p-4 text-[#113827] overflow-hidden space-y-4 shadow-inner min-h-[480px]">
                {/* App Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-serif-display font-bold text-lg text-[#113827]">
                    BlooM
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <Bell className="w-4 h-4 text-[#62746A]" />
                  </div>
                </div>

                {/* Greeting */}
                <div>
                  <div className="text-[11px] text-[#718277]">Good morning,</div>
                  <div className="text-sm font-bold text-[#113827]">Plant Lover! 🌿</div>
                </div>

                {/* Reminder Card */}
                <div className="bg-white rounded-2xl p-3.5 border border-[#E8E6DF] shadow-xs space-y-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=120&q=80"
                      alt="Monstera Deliciosa"
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#113827]">
                        Water your Monstera
                      </h4>
                      <p className="text-[10px] text-amber-600 font-medium flex items-center gap-1">
                        <Droplet className="w-3 h-3 fill-amber-500 text-amber-500" />
                        {monsteraWatered ? "Done for today!" : "Due today"}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setMonsteraWatered(!monsteraWatered)}
                    className={`w-full py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                      monsteraWatered
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-[#134E35] text-white hover:bg-[#0E3A27]'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{monsteraWatered ? "Watered today ✓" : "Mark as done"}</span>
                  </button>
                </div>

                {/* My Plants Gallery */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-[#113827]">My Plants</span>
                    <span className="text-[11px] text-[#134E35] font-semibold cursor-pointer">See all</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-xl p-2 border border-[#E8E6DF] flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=80&q=80"
                        alt="Fiddle Leaf Fig"
                        className="w-8 h-8 rounded-lg object-cover"
                      />
                      <div className="text-[10px] leading-tight">
                        <div className="font-semibold text-[#113827] truncate">Fiddle Leaf</div>
                        <div className="text-[#718277]">Healthy</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-2 border border-[#E8E6DF] flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=80&q=80"
                        alt="Succulent"
                        className="w-8 h-8 rounded-lg object-cover"
                      />
                      <div className="text-[10px] leading-tight">
                        <div className="font-semibold text-[#113827] truncate">Echeveria</div>
                        <div className="text-[#718277]">Hydrated</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Plant Care Tip */}
                <div className="bg-[#EBF3EF] p-2.5 rounded-xl text-[10px] text-[#134E35] flex items-start gap-2">
                  <Sun className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" />
                  <span>Bright filtered light brings out fenestrations in your Monstera leaves.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
