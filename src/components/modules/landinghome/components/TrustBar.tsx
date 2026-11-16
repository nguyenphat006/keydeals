'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
import { TRUST_CATEGORIES } from '../constants';

export default function TrustBar() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  return (
    <motion.section 
      ref={ref}
      className="glass-card rounded-xl p-4 sm:p-6 shadow-lg border-surface-border/50"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-wrap justify-between gap-4 items-center">
        {TRUST_CATEGORIES.map(({ id, label, iconClass, link }, index) => (
          <motion.div 
            key={id} 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex-1 min-w-[140px]"
          >
            <Link href={link} className="flex flex-col sm:flex-row items-center justify-center gap-3 group px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 relative overflow-hidden group-hover:bg-accent/20 transition-all">
                {/* Mocking icon via standard classes or Image, we use the passed icon string */}
                <span className={`text-2xl text-accent group-hover:text-white transition-colors drop-shadow-md`}>
                  {iconClass}
                </span>
              </div>
              <p className="text-sm font-bold text-foreground group-hover:text-accent transition-colors duration-200 text-center sm:text-left">
                {label}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
