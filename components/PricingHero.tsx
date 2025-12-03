'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  fadeIn,
  smoothTransition,
  getDelayedTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface PricingHeroProps {
  title: string;
  description: string[];
  benefits: string[];
}

export default function PricingHero({
  title,
  description,
  benefits,
}: PricingHeroProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="bg-primary-black text-primary-white px-3 sm:px-6 lg:px-8 pt-16 pb-12 tablet:pt-24 tablet:pb-20"
    >
      <div className="max-w-7xl mx-auto w-full scale-[0.78]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-2xl mobile:text-3xl tablet:text-5xl desktop:text-6xl font-bold mb-6 tablet:mb-8 leading-tight uppercase tracking-wide"
            variants={getAccessibleVariants(fadeIn)}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={getAccessibleTransition(smoothTransition)}
          >
            {title}
          </motion.h1>

          <div className="space-y-4 mb-8 tablet:mb-12">
            {description.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-base mobile:text-lg tablet:text-xl leading-relaxed text-neutral-gray100"
                variants={getAccessibleVariants(fadeIn)}
                initial="initial"
                animate={isInView ? 'animate' : 'initial'}
                transition={getAccessibleTransition(
                  getDelayedTransition((index + 1) * 0.1)
                )}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.ul
            className="space-y-3 text-left max-w-2xl mx-auto"
            variants={getAccessibleVariants(fadeIn)}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={getAccessibleTransition(getDelayedTransition(0.3))}
          >
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-base mobile:text-lg tablet:text-xl"
                variants={getAccessibleVariants(fadeIn)}
                initial="initial"
                animate={isInView ? 'animate' : 'initial'}
                transition={getAccessibleTransition(
                  getDelayedTransition(0.4 + index * 0.05)
                )}
              >
                <span className="text-primary-white font-bold mt-1">✓</span>
                <span className="text-neutral-gray100">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
