import React from 'react';
import { Leaf, Package, BookOpen, Truck, HeartHandshake } from 'lucide-react';

export function BloomFeatureStrip() {
  const features = [
    {
      icon: Leaf,
      title: "Curated Collection",
      desc: "Handpicked plants for every space."
    },
    {
      icon: Package,
      title: "Stylish Planters",
      desc: "Modern designs to suit your home."
    },
    {
      icon: BookOpen,
      title: "Expert Guidance",
      desc: "Simple tips for healthier plants."
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      desc: "Carefully packed, right to your door."
    },
    {
      icon: HeartHandshake,
      title: "A Greener Tomorrow",
      desc: "Together for a healthier planet."
    }
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-6 sm:-mt-8">
      <div className="bg-white rounded-2xl border border-[#E8E6DF] shadow-md p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center px-2 ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#EBF3EF] flex items-center justify-center text-[#113827] mb-3">
                  <Icon className="w-5 h-5 text-[#134E35]" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#113827] mb-1">
                  {feat.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#62746A] leading-snug">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
