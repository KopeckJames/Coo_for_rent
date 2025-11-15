'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  fadeIn,
  smoothTransition,
  getDelayedTransition,
  scaleOnHover,
  scaleOnTap,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="min-h-screen bg-primary-black text-primary-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl mobile:text-5xl tablet:text-6xl desktop:text-7xl font-bold mb-4 tablet:mb-6 leading-tight"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate="animate"
          transition={getAccessibleTransition(smoothTransition)}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg mobile:text-xl tablet:text-2xl desktop:text-3xl font-light mb-8 tablet:mb-12 text-neutral-gray200 leading-relaxed"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate="animate"
          transition={getAccessibleTransition(getDelayedTransition(0.2))}
        >
          {subtitle}
        </motion.p>
        <motion.button
          onClick={onCtaClick}
          aria-label="Get in touch with us"
          className="bg-primary-white text-primary-black px-6 py-3 tablet:px-8 tablet:py-4 text-base tablet:text-lg font-medium transition-colors duration-200 min-h-[44px] min-w-[44px] hover:bg-neutral-gray100 active:bg-neutral-gray200 focus:outline-none focus:ring-2 focus:ring-primary-white focus:ring-offset-2 focus:ring-offset-primary-black touch-target"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate="animate"
          transition={getAccessibleTransition(getDelayedTransition(0.4))}
          whileHover={scaleOnHover}
          whileTap={scaleOnTap}
        >
          {ctaText}
        </motion.button>
      </div>
    </section>
  );
}
