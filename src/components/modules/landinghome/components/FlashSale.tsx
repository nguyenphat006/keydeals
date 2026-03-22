'use client';

import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';
import type { Product } from '@/types';
import { useCountdown } from '../hooks/useCountdown';
import { GameCard } from '@/components/shared/ProductCard';
import { AccountCard } from '@/components/shared/ProductCard';
import SectionHeader from './SectionHeader';
import { useInView } from '@/hooks/useInView';

interface FlashSaleProps {
  products: Product[];
}

function CountdownTimer({ endTime }: { endTime: string }) {
  const { hours, minutes, seconds, isExpired } = useCountdown(endTime);
  const isUrgent = hours === 0 && minutes < 30;

  if (isExpired) return <span className="text-xs text-destructive font-semibold">Đã kết thúc</span>;

  return (
    <motion.div 
      className="flex items-center gap-1.5"
      animate={isUrgent ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <Timer size={14} className="text-accent-pink" />
      <div className="flex items-center gap-1 font-mono text-sm tabular-nums">
        <FlipDigit value={hours} isUrgent={isUrgent} />
        <span className="text-muted-foreground animate-pulse">:</span>
        <FlipDigit value={minutes} isUrgent={isUrgent} />
        <span className="text-muted-foreground animate-pulse">:</span>
        <FlipDigit value={seconds} isUrgent={isUrgent} />
      </div>
    </motion.div>
  );
}

function FlipDigit({ value, isUrgent }: { value: number; isUrgent: boolean }) {
  return (
    <motion.span 
      className={`rounded px-1.5 py-0.5 font-bold tabular-nums ${
        isUrgent ? 'bg-destructive/20 text-destructive' : 'bg-accent-pink/20 text-accent-pink'
      }`}
      key={value}
      initial={{ scale: 1.1, opacity: 0.7 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {String(value).padStart(2, '0')}
    </motion.span>
  );
}

export default function FlashSale({ products }: FlashSaleProps) {
  if (products.length === 0) return null;

  const nearestEnd = products
    .map((p) => p.flashSaleEndsAt)
    .filter(Boolean)
    .sort()[0];

  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true });

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <motion.h2 
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block mr-2"
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              ⚡
            </motion.span>
            Flash Sale
          </motion.h2>
          {nearestEnd && <CountdownTimer endTime={nearestEnd} />}
        </div>
      </div>
      
      {/* Pulsing Border Container */}
      <motion.div
        ref={ref}
        className="relative rounded-xl p-1"
        style={{
          background: "linear-gradient(90deg, hsl(320 100% 60%), hsl(180 100% 50%), hsl(320 100% 60%))",
          backgroundSize: "200% 100%",
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.95,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ 
          opacity: { duration: 0.6, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="bg-background rounded-lg p-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) =>
              product.type === 'game-key' ? (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <GameCard product={product} />
                </motion.div>
              ) : (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <AccountCard product={product} />
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
