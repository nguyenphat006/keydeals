'use client';

import { Timer } from 'lucide-react';
import type { Product } from '@/types';
import { useCountdown } from '../hooks/useCountdown';
import { GameCard } from '@/components/shared/ProductCard';
import { AccountCard } from '@/components/shared/ProductCard';
import SectionHeader from './SectionHeader';

interface FlashSaleProps {
  products: Product[];
}

function CountdownTimer({ endTime }: { endTime: string }) {
  const { hours, minutes, seconds, isExpired } = useCountdown(endTime);

  if (isExpired) return <span className="text-xs text-destructive font-semibold">Đã kết thúc</span>;

  return (
    <div className="flex items-center gap-1.5">
      <Timer size={14} className="text-accent-pink" />
      <div className="flex items-center gap-1 font-mono text-sm tabular-nums">
        <span className="rounded bg-accent-pink/20 px-1.5 py-0.5 text-accent-pink font-bold">
          {String(hours).padStart(2, '0')}
        </span>
        <span className="text-muted-foreground">:</span>
        <span className="rounded bg-accent-pink/20 px-1.5 py-0.5 text-accent-pink font-bold">
          {String(minutes).padStart(2, '0')}
        </span>
        <span className="text-muted-foreground">:</span>
        <span className="rounded bg-accent-pink/20 px-1.5 py-0.5 text-accent-pink font-bold">
          {String(seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

export default function FlashSale({ products }: FlashSaleProps) {
  if (products.length === 0) return null;

  const nearestEnd = products
    .map((p) => p.flashSaleEndsAt)
    .filter(Boolean)
    .sort()[0];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            ⚡ Flash Sale
          </h2>
          {nearestEnd && <CountdownTimer endTime={nearestEnd} />}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) =>
          product.type === 'game-key' ? (
            <GameCard key={product.id} product={product} />
          ) : (
            <AccountCard key={product.id} product={product} />
          )
        )}
      </div>
    </section>
  );
}
