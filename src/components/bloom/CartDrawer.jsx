import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

export function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => {
    const val = parseFloat(item.price.replace('$', '')) || 0;
    return acc + val;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-end">
      <div className="bg-[#FAF9F5] w-full max-w-md h-full shadow-2xl flex flex-col border-l border-[#E8E6DF] animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8E6DF] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#134E35]" />
            <h3 className="font-serif-display text-lg font-bold text-[#113827]">
              Your Green Bag ({cartItems.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#EBF3EF] flex items-center justify-center mx-auto text-[#134E35]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif-display text-lg font-bold text-[#113827]">
                Your bag is empty
              </h4>
              <p className="text-xs text-[#718277] max-w-xs mx-auto">
                Discover easy-care indoor greens, succulents, and ceramic planters to bring life indoors.
              </p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-3.5 border border-[#E8E6DF] shadow-xs flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-[#113827]">
                      {item.name}
                    </h5>
                    <div className="text-[10px] text-[#718277]">
                      {item.category} · {item.light}
                    </div>
                    <div className="font-serif-display text-xs font-bold text-[#134E35] mt-1">
                      {item.price}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(idx)}
                  className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Subtotal & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#E8E6DF] bg-white space-y-3">
            <div className="flex items-center justify-between text-xs text-[#5E6D64]">
              <span>Subtotal</span>
              <span className="font-bold text-[#113827] text-sm">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[#5E6D64]">
              <span>Delivery</span>
              <span className="text-emerald-700 font-semibold">FREE (30-day guarantee)</span>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between font-bold text-sm text-[#113827]">
              <span>Estimated Total</span>
              <span className="font-serif-display text-lg">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 rounded-full bg-[#113827] hover:bg-[#0B291C] text-white text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[10px] text-center text-[#718277] flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Safe Delivery & 30-Day Happy Plant Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
