'use client';

import React from 'react';
import Image from 'next/image';
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
      className="min-h-screen bg-primary-white text-primary-black flex items-center justify-center px-3 sm:px-6 lg:px-8 py-4"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          className="mb-3 tablet:mb-6"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate="animate"
          transition={getAccessibleTransition(smoothTransition)}
        >
          <Image
            src="/logo.png"
            alt="COOforRent"
            width={250}
            height={83}
            priority
            className="h-auto w-full max-w-[200px] tablet:max-w-[250px] mx-auto"
          />
        </motion.div>
        <motion.p
          className="text-base mobile:text-lg tablet:text-3xl mb-4 tablet:mb-8 text-neutral-gray800 leading-relaxed px-1"
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
          className="bg-primary-black text-primary-white px-8 py-4 text-base font-semibold transition-all duration-200 min-h-[44px] hover:bg-neutral-gray900 hover:shadow-lg active:bg-neutral-gray800 focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2 focus:ring-offset-primary-white touch-target"
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
