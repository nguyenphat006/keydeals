'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES, HERO_CATEGORIES } from '../constants';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[75vh] flex flex-col items-center justify-center pt-8 pb-32 lg:px-4 overflow-hidden rounded-3xl mt-4">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-[150px] mix-blend-screen opacity-40 animate-floating-orb" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6">
        
        {/* Left Column: Typography & Actions */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1 pt-8 lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-start"
            >
              {slide.badge && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-white/10 mb-6">
                  <Sparkles className="w-4 h-4 text-accent-pink animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-accent-pink uppercase shadow-md">
                    {slide.badge}
                  </span>
                </div>
              )}

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={i === slide.title.split(' ').length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-pink" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 font-medium leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-base font-bold bg-accent text-accent-foreground hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_hsl(180_100%_50%/0.4)] hover:shadow-[0_0_30px_hsl(180_100%_50%/0.6)] group"
                >
                  <Link href={slide.ctaLink}>
                    {slide.ctaText}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <div className="flex items-center gap-3 ml-2">
                  {/* Dots indicator for slider context */}
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        idx === currentSlide ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/50"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Floating 3D Visual */}
        <div className="flex justify-center items-center order-1 lg:order-2 relative h-[350px] sm:h-[450px] lg:h-[600px] w-full [perspective:1000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 15, rotateX: -10 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[4/5] sm:aspect-square flex justify-center items-center"
            >
              <motion.div 
                className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10"
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              >
                {/* Visual Glass Reflection Overlay */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent z-20 pointer-events-none skew-y-12 translate-y-[-50%]" />
                
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover scale-105"
                  priority
                />
                
                {/* Vignette Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-10" />
              </motion.div>
              
              {/* Fake 3D Shadow below the floating card */}
              <motion.div 
                className="absolute -bottom-8 w-3/4 h-8 bg-black/40 blur-xl rounded-full"
                animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Bottom Pill Navigation for Categories */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center z-20">
        <div className="flex items-center gap-2 sm:gap-6 p-2 rounded-full bg-background-elevated/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-x-auto custom-scrollbar max-w-full">
          {HERO_CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.link}
              className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap group relative overflow-hidden"
            >
              {/* Active hover shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine" />
              
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
                <Image src={cat.image} alt={cat.title} fill className="object-cover" />
              </div>
              <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                {cat.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
