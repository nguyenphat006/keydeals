'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, CreditCard, Headphones } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const TRUST_ITEMS = [
  { icon: Shield, label: 'Bảo hành 100%', desc: 'Đổi key nếu lỗi' },
  { icon: Clock, label: 'Giao hàng tức thì', desc: 'Key gửi qua email' },
  { icon: CreditCard, label: 'Thanh toán an toàn', desc: 'Bảo mật SSL 256-bit' },
  { icon: Headphones, label: 'Hỗ trợ 24/7', desc: 'Chat & Hotline' },
];

export default function TrustBar() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  return (
    <motion.section 
      ref={ref}
      className="glass-card rounded-xl p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {TRUST_ITEMS.map(({ icon: Icon, label, desc }, index) => (
          <motion.div 
            key={label} 
            className="flex items-center gap-3 group cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5, 
              ease: "easeOut" 
            }}
          >
            <motion.div 
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 relative overflow-hidden"
              whileHover={{ 
                backgroundColor: "hsl(180 100% 50% / 0.2)",
                boxShadow: "0 0 20px hsl(180 100% 50% / 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <Icon 
                size={20} 
                className="text-accent relative z-10 group-hover:text-neon-cyan transition-all" 
              />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
