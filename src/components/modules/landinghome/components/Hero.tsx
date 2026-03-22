'use client';

import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { HERO_SLIDES, HERO_SIDE_BANNERS, HERO_CATEGORIES } from '../constants';

export default function Hero() {
  return (
    <section className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-[600px] lg:h-[600px]">
      
      {/* 1. Main Carousel - 3 cols x 2 rows */}
      <div className="lg:col-span-3 lg:row-span-2 relative h-full rounded-xl overflow-hidden glass-card group">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {HERO_SLIDES.map((slide) => (
              <CarouselItem key={slide.id} className="relative h-full w-full">
                <div className="relative h-full w-full">
                  {/* Aspect ratio is handled by absolute fill */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-12 max-w-xl">
                    {slide.badge && (
                      <span className="mb-3 inline-block w-fit rounded-full bg-accent-pink px-3 py-1 text-xs font-bold text-white shadow-[0_0_15px_rgba(255,51,204,0.5)]">
                         {slide.badge}
                      </span>
                    )}
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl uppercase drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="mt-2 text-sm text-foreground/80 sm:text-base max-w-[80%]">
                      {slide.subtitle}
                    </p>
                    <Button asChild className="mt-6 w-fit rounded-full px-8 py-6 font-bold shadow-lg shadow-accent/20 bg-accent text-accent-foreground hover:bg-accent-soft hover:scale-105 transition-all">
                      <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-16 bottom-12 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <CarouselPrevious className="relative inset-auto translate-y-0 h-10 w-10 bg-background/50 hover:bg-background/80 border-surface-border text-foreground backdrop-blur-md" />
            <CarouselNext className="relative inset-auto translate-y-0 h-10 w-10 bg-background/50 hover:bg-background/80 border-surface-border text-foreground backdrop-blur-md" />
          </div>
        </Carousel>
      </div>

      {/* 2. Side Banners - Right Column */}
      <div className="hidden lg:flex flex-col gap-4 lg:col-span-1 lg:row-span-2 h-full">
        {HERO_SIDE_BANNERS.map((banner) => (
          <Link key={banner.id} href={banner.link} className="relative flex-1 rounded-xl overflow-hidden glass-card group block">
            <Image 
              src={banner.image} 
              alt={banner.alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            {/* Soft dark overlay to ensure text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-5 left-4 right-4 text-center">
              <h3 className="font-bold text-foreground text-lg sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">
                {banner.alt}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* 3. Category Links - Bottom Row (4 cols) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:col-span-4 lg:row-span-1 h-full">
        {HERO_CATEGORIES.map((category) => (
          <Link key={category.id} href={category.link} className="relative rounded-xl overflow-hidden glass-card group block flex items-end justify-center py-5">
             <Image 
              src={category.image} 
              alt={category.title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/10" />
            <h3 className="relative font-bold text-foreground sm:text-lg text-center px-2 z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase leading-5">
              {category.title.replace(' ', '\n')} {/* Trick for aesthetic multiline if spaces exist, wait actually standard text wraps */}
            </h3>
          </Link>
        ))}
      </div>

    </section>
  );
}
