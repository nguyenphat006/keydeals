'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CategorySlug } from '@/types';
import { CATEGORIES_DATA } from '@/lib/mockData';
import { cn } from '@/lib/utils';

interface CategoriesProps {
  onCategoryChange: (slug: CategorySlug) => void;
  activeCategory: CategorySlug;
}

export default function Categories({ onCategoryChange, activeCategory }: CategoriesProps) {
  const [selectedIndex, setSelectedIndex] = useState(
    CATEGORIES_DATA.findIndex(c => c.slug === activeCategory)
  );

  const handleCategoryChange = (slug: CategorySlug, index: number) => {
    setSelectedIndex(index);
    onCategoryChange(slug);
  };

  return (
    <div className="relative">
      {/* Background Indicator */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          className="absolute inset-0 rounded-full bg-accent"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </AnimatePresence>
      
      <div className="relative flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES_DATA.map((cat, index) => (
          <motion.button
            key={cat.slug}
            onClick={() => handleCategoryChange(cat.slug, index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 relative z-10',
              activeCategory === cat.slug
                ? 'text-accent-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
