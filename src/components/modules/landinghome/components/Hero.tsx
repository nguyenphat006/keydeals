'use client';

import Image from 'next/image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
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
      
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="orb-container">
          <div className="orb orb-cyan w-96 h-96 top-20 -left-48 animate-floating-orb opacity-30" />
          <div className="orb orb-pink w-80 h-80 top-40 right-20 animate-floating-orb-delayed opacity-25" />
          <div className="orb orb-purple w-64 h-64 bottom-10 left-1/3 animate-floating-orb opacity-20" />
        </div>
      </div>
      
      {/* 1. Main Carousel - 3 cols x 2 rows */}
      <div className="lg:col-span-3 lg:row-span-2 relative h-full rounded-xl overflow-hidden glass-card group">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {HERO_SLIDES.map((slide, index) => (
              <CarouselItem key={slide.id} className="relative h-full w-full">
                <div className="relative h-full w-full overflow-hidden">
                  {/* Ken Burns Effect */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
                  
                  {/* Animated Content */}
                  <motion.div 
                    className="absolute inset-0 flex flex-col justify-center px-6 lg:px-12 max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    key={slide.id}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {slide.badge && (
                        <span className="mb-3 inline-block w-fit rounded-full bg-accent-pink px-3 py-1 text-xs font-bold text-white shadow-[0_0_15px_rgba(255,51,204,0.5)] animate-pulse-glow">
                          {slide.badge}
                        </span>
                      )}
                    </motion.div>
                    
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                      className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl uppercase drop-shadow-lg"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="mt-2 text-sm text-foreground/80 sm:text-base max-w-[80%]"
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65, duration: 0.5 }}
                    >
                      <Button asChild className="mt-6 w-fit rounded-full px-8 py-6 font-bold shadow-lg shadow-accent/20 bg-accent text-accent-foreground hover:bg-accent-soft hover:scale-105 transition-all cyber-button">
                        <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/30">
            <motion.div 
              className="h-full bg-gradient-to-r from-accent to-accent-pink"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              style={{ originX: 0 }}
            />
          </div>
          <div className="absolute right-16 bottom-12 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <CarouselPrevious className="relative inset-auto translate-y-0 h-10 w-10 bg-background/50 hover:bg-background/80 border-surface-border text-foreground backdrop-blur-md" />
            <CarouselNext className="relative inset-auto translate-y-0 h-10 w-10 bg-background/50 hover:bg-background/80 border-surface-border text-foreground backdrop-blur-md" />
          </div>
        </Carousel>
      </div>

      {/* 2. Side Banners - Right Column */}
      <div className="hidden lg:flex flex-col gap-4 lg:col-span-1 lg:row-span-2 h-full">
        {HERO_SIDE_BANNERS.map((banner, index) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <Link href={banner.link} className="relative flex-1 rounded-xl overflow-hidden glass-card group block h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-full"
              >
                <Image 
                  src={banner.image} 
                  alt={banner.alt} 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
              {/* Soft dark overlay to ensure text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-5 left-4 right-4 text-center">
                <h3 className="font-bold text-foreground text-lg sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">
                  {banner.alt}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 3. Category Links - Bottom Row (4 cols) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:col-span-4 lg:row-span-1 h-full">
        {HERO_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <Link href={category.link} className="relative rounded-xl overflow-hidden glass-card group block flex items-end justify-center py-5 h-full">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={category.image} 
                  alt={category.title} 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/10" />
              <h3 className="relative font-bold text-foreground sm:text-lg text-center px-2 z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase leading-5">
                {category.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
