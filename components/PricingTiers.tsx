'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PricingCard from './PricingCard';
import { PricingTier } from '@/types';
import {
  fadeIn,
  smoothTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface PricingTiersProps {
  tiers: PricingTier[];
}

export default function PricingTiers({ tiers }: PricingTiersProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="pricing"
      ref={ref}
      aria-labelledby="pricing-tiers-heading"
      className="bg-primary-white text-primary-black px-3 sm:px-6 lg:px-8 py-3 tablet:py-8 desktop:py-10"
    >
      <div className="max-w-7xl mx-auto w-full scale-[0.78]">
        <motion.h2
          id="pricing-tiers-heading"
          className="text-lg mobile:text-xl tablet:text-4xl font-bold mb-4 tablet:mb-12 text-center leading-tight uppercase tracking-wide"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          Flexible Packages
        </motion.h2>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 tablet:gap-8">
          {tiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
