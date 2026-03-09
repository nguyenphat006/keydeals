'use client';

import { useState } from 'react';
import type { CategorySlug } from '@/types';
import { HERO_SLIDES, getFlashSaleProducts, getFeaturedProducts, getProductsByCategory } from '@/lib/mockData';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FlashSale from './components/FlashSale';
import ProductGrid from './components/ProductGrid';
import TrustBar from './components/TrustBar';
import SectionHeader from './components/SectionHeader';

export default function LandingHome() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug>('all');
  const flashSaleProducts = getFlashSaleProducts();
  const featuredProducts = getFeaturedProducts();
  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <div className="space-y-10">
      {/* Hero Slider */}
      <Hero slides={HERO_SLIDES} />

      {/* Trust Bar */}
      <TrustBar />

      {/* Flash Sale */}
      <FlashSale products={flashSaleProducts} />

      {/* Featured Products */}
      <section>
        <SectionHeader
          title="Sản phẩm nổi bật"
          subtitle="Được lựa chọn nhiều nhất tuần này"
          action={{ label: 'Xem tất cả', href: '/search' }}
        />
        <ProductGrid products={featuredProducts} />
      </section>

      {/* All Products with Category Filter */}
      <section>
        <SectionHeader
          title="Danh mục sản phẩm"
          subtitle="Khám phá theo nhu cầu của bạn"
        />
        <Categories onCategoryChange={setActiveCategory} activeCategory={activeCategory} />
        <div className="mt-4">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </div>
  );
}
