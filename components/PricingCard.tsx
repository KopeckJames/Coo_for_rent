'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PricingTier } from '@/types';
import {
  fadeIn,
  scaleOnHover,
  scaleOnTap,
  getDelayedTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface PricingCardProps {
  tier: PricingTier;
  index: number;
  isInView: boolean;
}

export default function PricingCard({ tier, index, isInView }: PricingCardProps) {
  const handleCtaClick = () => {
    if (tier.subscribeUrl.startsWith('#')) {
      import('@/utils/smoothScroll').then(({ smoothScrollToId }) => {
        smoothScrollToId(tier.subscribeUrl.substring(1), {
          offset: 64,
          duration: 800,
        });
      });
    } else {
      window.open(tier.subscribeUrl, '_blank');
    }
  };

  return (
    <motion.article
      className={`relative bg-neutral-gray100 border-2 ${
        tier.featured
          ? 'border-primary-black shadow-2xl'
          : 'border-neutral-gray200 shadow-lg'
      } p-6 tablet:p-8 will-change-transform transition-all duration-200 hover:shadow-2xl hover:border-primary-black focus-within:shadow-2xl focus-within:border-primary-black h-full flex flex-col`}
      variants={getAccessibleVariants(fadeIn)}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={getAccessibleTransition(getDelayedTransition(index * 0.15))}
      whileHover={scaleOnHover}
      whileTap={scaleOnTap}
    >
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-black text-primary-white px-4 py-1 text-sm font-bold uppercase tracking-wide">
          Top Choice
        </div>
      )}

      <div className="flex-grow">
        <h3 className="text-xl mobile:text-2xl tablet:text-3xl font-bold mb-4 text-primary-black uppercase tracking-wide leading-tight text-center">
          {tier.name}
        </h3>

        <div className="space-y-3 mb-6">
          {tier.description.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-sm mobile:text-base tablet:text-lg leading-relaxed text-neutral-gray800"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-6 pb-6 border-b border-neutral-gray300">
          {tier.priceLabel && (
            <p className="text-sm mobile:text-base font-semibold uppercase tracking-wide text-neutral-gray700 mb-1">
              {tier.priceLabel}
            </p>
          )}
          <p className="text-2xl mobile:text-3xl tablet:text-4xl font-bold text-primary-black">
            {tier.price}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg mobile:text-xl font-bold text-primary-black mb-3 uppercase">
            {tier.includedHeading}
          </h4>
          <ul className="space-y-2">
            {tier.included.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm mobile:text-base text-neutral-gray800"
              >
                <span className="text-primary-black font-bold mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            import('@/utils/smoothScroll').then(({ smoothScrollToId }) => {
              smoothScrollToId('contact', {
                offset: 64,
                duration: 800,
              });
            });
          }}
          className="block w-full text-center border-2 border-primary-black text-primary-black px-6 py-3 font-bold uppercase tracking-wide hover:bg-primary-black hover:text-primary-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2"
        >
          {tier.ctaLabel ?? 'Book a Meeting'}
        </a>
      </div>
    </motion.article>
  );
}
