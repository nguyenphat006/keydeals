'use client';

import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/lib/utils';

export default function CartSummary() {
  const totalPrice = useCartStore((s) => s.totalPrice());

  return (
    <div className="border-t border-border p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Tổng cộng</span>
        <span className="text-lg font-bold font-mono tabular-nums text-accent">
          {formatPrice(totalPrice)}
        </span>
      </div>
      <button className="w-full rounded-full bg-accent py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-soft active:scale-[0.98] transition-all duration-200">
        Thanh toán
      </button>
    </div>
  );
}
