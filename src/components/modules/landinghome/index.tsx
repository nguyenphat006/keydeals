'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { CategorySlug } from '@/types';
import { getFlashSaleProducts, getFeaturedProducts, getProductsByCategory } from '@/lib/mockData';
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
    <motion.div 
      className="space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* Trust Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
      >
        <TrustBar />
      </motion.div>

      {/* Flash Sale */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        <FlashSale products={flashSaleProducts} />
      </motion.div>

      {/* Featured Products */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeader
          title="Sản phẩm nổi bật"
          subtitle="Được lựa chọn nhiều nhất tuần này"
          action={{ label: 'Xem tất cả', href: '/search' }}
        />
        <ProductGrid products={featuredProducts} />
      </motion.section>

      {/* All Products with Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeader
          title="Danh mục sản phẩm"
          subtitle="Khám phá theo nhu cầu của bạn"
        />
        <Categories onCategoryChange={setActiveCategory} activeCategory={activeCategory} />
        <div className="mt-4">
          <ProductGrid products={filteredProducts} />
        </div>
      </motion.section>
    </motion.div>
  );
}
