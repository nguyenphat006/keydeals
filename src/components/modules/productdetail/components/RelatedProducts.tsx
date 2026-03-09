import type { Product } from '@/types';
import { GameCard } from '@/components/shared/ProductCard';
import { AccountCard } from '@/components/shared/ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
        Sản phẩm liên quan
      </h2>
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
