'use client';

import { motion } from 'framer-motion';
import type { Product } from '@/types';
import { GameCard } from '@/components/shared/ProductCard';
import { AccountCard } from '@/components/shared/ProductCard';
import { useInView } from '@/hooks/useInView';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true });

  if (products.length === 0) {
    return (
      <motion.p 
        className="text-center text-muted-foreground text-sm py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Không có sản phẩm nào.
      </motion.p>
    );
  }

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            delay: index * 0.05,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {product.type === 'game-key' ? (
            <GameCard product={product} />
          ) : (
            <AccountCard product={product} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
