'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroSlide } from '@/types';
import { useHeroSlider } from '../hooks/useHeroSlider';
import { cn } from '@/lib/utils';

interface HeroProps {
  slides: HeroSlide[];
}

export default function Hero({ slides }: HeroProps) {
  const { current, next, prev, goTo } = useHeroSlider(slides.length);

  return (
    <section className="relative w-full overflow-hidden rounded-xl aspect-[21/9] sm:aspect-[21/7]">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-xl">
            {slide.badge && (
              <span className="mb-3 inline-block w-fit rounded-full bg-accent-pink px-3 py-1 text-xs font-bold text-white">
                {slide.badge}
              </span>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {slide.subtitle}
            </p>
            <Link
              href={slide.ctaLink}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-soft active:scale-95 transition-all duration-200"
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm hover:bg-background/70 transition-colors"
        aria-label="Slide trước"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm hover:bg-background/70 transition-colors"
        aria-label="Slide tiếp"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              i === current ? 'w-6 bg-accent' : 'w-1.5 bg-foreground/40'
            )}
            aria-label={`Đi đến slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
