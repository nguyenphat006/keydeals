'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { SectionHeaderProps } from '../types';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3, once: true });

  return (
    <motion.div 
      ref={ref}
      className="flex items-end justify-between mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <motion.h2 
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl relative"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {title}
          {/* Animated underline */}
          <motion.span 
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-pink"
            initial={{ width: 0 }}
            animate={isInView ? { width: "60%" } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />
        </motion.h2>
        {subtitle && (
          <motion.p 
            className="mt-1 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {action && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href={action.href}
            className="hidden items-center gap-1 text-sm text-accent hover:text-accent-soft transition-colors duration-200 sm:flex group"
          >
            {action.label}
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
