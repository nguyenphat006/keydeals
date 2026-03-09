'use client';

import { X } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';
import { useCartStore } from '@/store/useCartStore';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

export default function CartDrawer() {
  const isOpen = useUIStore((s) => s.isCartOpen);
  const close = useUIStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-modal)]">
      <div className="absolute inset-0 bg-black/60" onClick={close} />
      <aside className="glass-elevated absolute right-0 top-0 bottom-0 flex w-full max-w-md flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-bold">Giỏ hàng ({items.length})</h2>
          <button
            onClick={close}
            className="rounded-full p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm py-12">
              Giỏ hàng trống
            </p>
          ) : (
            items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))
          )}
        </div>

        {/* Summary */}
        {items.length > 0 && <CartSummary />}
      </aside>
    </div>
  );
}
