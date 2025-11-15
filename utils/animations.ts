/**
 * Centralized animation configurations for consistent motion design
 * All animations follow Apple's design principles with smooth easing
 */

import { Variants, Transition } from 'framer-motion';

/**
 * Easing curves optimized for smooth, natural motion
 */
export const easings = {
  // Apple-style easing for smooth, natural motion
  smooth: [0.25, 0.1, 0.25, 1],
  // Slightly faster for quick interactions
  snappy: [0.4, 0, 0.2, 1],
  // Gentle easing for fade effects
  gentle: [0.33, 1, 0.68, 1],
} as const;

/**
 * Standard animation durations in seconds
 */
export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
} as const;

/**
 * Fade in animation with optional Y translation
 * Prevents layout shift by using transform instead of margin/padding
 */
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

/**
 * Fade in without Y translation for elements that shouldn't move
 */
export const fadeInStatic: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

/**
 * Scale animation for hover effects
 * Uses transform for GPU acceleration
 */
export const scaleOnHover = {
  scale: 1.02,
  transition: {
    duration: durations.fast,
    ease: easings.snappy,
  },
};

/**
 * Scale animation for tap/active states
 */
export const scaleOnTap = {
  scale: 0.98,
  transition: {
    duration: durations.fast,
    ease: easings.snappy,
  },
};

/**
 * Slide in from left animation
 */
export const slideInLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

/**
 * Standard transition configuration
 */
export const standardTransition: Transition = {
  duration: durations.normal,
  ease: easings.smooth,
};

/**
 * Smooth transition configuration
 */
export const smoothTransition: Transition = {
  duration: durations.slow,
  ease: easings.gentle,
};

/**
 * Fast transition for quick interactions
 */
export const fastTransition: Transition = {
  duration: durations.fast,
  ease: easings.snappy,
};

/**
 * Stagger configuration for animating lists
 */
export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Get transition with custom delay
 */
export const getDelayedTransition = (delay: number): Transition => ({
  ...smoothTransition,
  delay,
});

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation variants that respect reduced motion preference
 * Returns static variants if user prefers reduced motion
 */
export const getAccessibleVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    return fadeInStatic;
  }
  return variants;
};

/**
 * Get transition that respects reduced motion preference
 */
export const getAccessibleTransition = (transition: Transition): Transition => {
  if (prefersReducedMotion()) {
    return {
      duration: 0.01,
    };
  }
  return transition;
};
