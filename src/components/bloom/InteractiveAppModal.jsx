import React, { useState } from 'react';
import { X, Check, Droplet, Sun, Bell, Sparkles, Smartphone, ShieldCheck, Heart } from 'lucide-react';

export function InteractiveAppModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("care");
  const [wateredMonstera, setWateredMonstera] = useState(false);
  const [wateredFiddle, setWateredFiddle] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E6DF] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-[#134E35]" />
            <h3 className="font-serif-display text-lg font-bold text-[#113827]">
              BlooM Mobile Companion Simulator
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive App Screen */}
        <div className="p-6 bg-[#0E2F20] text-white flex flex-col items-center">
          <div className="w-[300px] bg-slate-900 rounded-[36px] p-3 shadow-2xl border-4 border-slate-700/80">
            {/* Notch */}
            <div className="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-950"></div>
            </div>

            {/* Screen Content */}
            <div className="bg-[#FAF9F5] rounded-[26px] p-4 text-[#113827] min-h-[440px] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-serif-display font-bold text-base text-[#113827]">
                    BlooM
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#134E35] bg-[#EBF3EF] px-2 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    <span>AI Care Active</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-[#718277]">Welcome back,</div>
                  <div className="text-xs font-bold text-[#113827]">Your Garden is 94% Healthy 🌿</div>
                </div>

                {/* Monstera Task */}
                <div className="bg-white rounded-xl p-3 border border-[#E8E6DF] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=100&q=80"
                      alt="Monstera"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <h5 className="text-[11px] font-bold text-[#113827]">Monstera Deliciosa</h5>
                      <span className="text-[9px] text-amber-600 font-medium">
                        {wateredMonstera ? "Soil Moisture: Optimal (78%)" : "Watering due: 150ml"}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setWateredMonstera(!wateredMonstera)}
                    className={`w-full py-1.5 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 transition-colors ${
                      wateredMonstera
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-[#134E35] text-white hover:bg-[#0E3A27]'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{wateredMonstera ? "Watered Today ✓" : "Mark as Done"}</span>
                  </button>
                </div>

                {/* Fiddle Leaf Task */}
                <div className="bg-white rounded-xl p-3 border border-[#E8E6DF] shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=100&q=80"
                      alt="Fiddle Leaf"
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <h5 className="text-[11px] font-bold text-[#113827]">Fiddle Leaf Fig</h5>
                      <span className="text-[9px] text-[#718277]">
                        {wateredFiddle ? "Misting Complete" : "Mist leaves for humidity"}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setWateredFiddle(!wateredFiddle)}
                    className={`w-full py-1.5 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1 transition-colors ${
                      wateredFiddle
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-[#113827] text-white hover:bg-[#0B291C]'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{wateredFiddle ? "Misted Today ✓" : "Mist Leaves"}</span>
                  </button>
                </div>
              </div>

              {/* Bottom Nav Simulation */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-around text-[10px] text-[#718277] font-semibold">
                <span className="text-[#134E35] font-bold">Today</span>
                <span>My Plants</span>
                <span>Identify</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E8E6DF] flex items-center justify-between text-xs">
          <span className="text-[#718277]">Available for iOS & Android</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#113827] text-white font-semibold"
          >
            Close Simulator
          </button>
        </div>
      </div>
    </div>
  );
}
