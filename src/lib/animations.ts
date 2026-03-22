import type { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const springBounce: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 17,
    } 
  },
};

export const springBounceHorizontal: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 17,
    } 
  },
};

export const elasticIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 10,
    } 
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const textRevealStagger: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.1,
      duration: 0.5, 
      ease: [0.4, 0, 0.2, 1] 
    } 
  }),
};

export const heroSlide: Variants = {
  enter: { opacity: 0, scale: 1.1 },
  center: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
};

export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 25 } 
  },
};

export const cardTilt: Variants = {
  rest: { rotateX: 0, rotateY: 0 },
  hover: { 
    rotateX: 2, 
    rotateY: 2,
    transition: { type: "spring", stiffness: 400, damping: 20 } 
  },
};

export const glowPulse: Variants = {
  initial: { boxShadow: "0 0 5px hsl(320 100% 60% / 0.3)" },
  pulse: { 
    boxShadow: "0 0 20px hsl(320 100% 60% / 0.6)",
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
  },
};

export const progressBar: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export const shimmer: Variants = {
  hidden: { backgroundPosition: "-200% 0" },
  visible: { 
    backgroundPosition: "200% 0",
    transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
  },
};

export const flipIn: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { 
    rotateX: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 400, damping: 20 } 
  },
};

export const bounceIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10,
    } 
  },
};

export const slideInFromLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const expandHeight: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "auto", 
    opacity: 1, 
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } 
  },
};

export const drawerSlideIn: Variants = {
  hidden: { x: "100%" },
  visible: { 
    x: 0, 
    transition: { type: "spring", stiffness: 300, damping: 30 } 
  },
  exit: { 
    x: "100%", 
    transition: { duration: 0.3, ease: "easeIn" } 
  },
};

export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
