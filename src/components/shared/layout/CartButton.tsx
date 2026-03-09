'use client';

import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useUIStore } from '@/store/useUIStore';

export default function CartButton() {
  const totalItems = useCartStore((s) => s.totalItems());
  const toggleCart = useUIStore((s) => s.toggleCart);

  return (
    <button
      onClick={toggleCart}
      className="relative flex items-center justify-center rounded-full p-2 text-foreground hover:text-accent transition-colors duration-200"
      aria-label="Giỏ hàng"
    >
      <ShoppingCart size={20} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
}
