'use client';

import { useState } from 'react';
import type { CategorySlug } from '@/types';
import { CATEGORIES_DATA } from '@/lib/mockData';
import { cn } from '@/lib/utils';

interface CategoriesProps {
  onCategoryChange: (slug: CategorySlug) => void;
  activeCategory: CategorySlug;
}

export default function Categories({ onCategoryChange, activeCategory }: CategoriesProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES_DATA.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onCategoryChange(cat.slug)}
          className={cn(
            'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
            activeCategory === cat.slug
              ? 'bg-accent text-accent-foreground'
              : 'glass-card text-muted-foreground hover:text-foreground'
          )}
        >
          {cat.label}
          <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
        </button>
      ))}
    </div>
  );
}
