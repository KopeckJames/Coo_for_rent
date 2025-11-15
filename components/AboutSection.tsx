'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { imageSizePresets, imageQualityPresets } from '@/utils/imageOptimization';
import {
  fadeIn,
  smoothTransition,
  getDelayedTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface AboutSectionProps {
  heading: string;
  content: string[];
  imageUrl?: string;
}

export default function AboutSection({
  heading,
  content,
  imageUrl,
}: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      className="min-h-screen bg-primary-white text-primary-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 tablet:py-20 desktop:py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          <h2 id="about-heading" className="text-3xl mobile:text-4xl tablet:text-5xl desktop:text-6xl font-bold mb-8 tablet:mb-12 desktop:mb-16 leading-tight">
            {heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:gap-10 desktop:gap-16">
          <motion.div
            className="space-y-4 tablet:space-y-6"
            variants={getAccessibleVariants(fadeIn)}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={getAccessibleTransition(getDelayedTransition(0.2))}
          >
            {content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base mobile:text-lg tablet:text-xl leading-relaxed text-neutral-gray800"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {imageUrl && (
            <motion.div
              className="flex items-center justify-center relative"
              variants={getAccessibleVariants(fadeIn)}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={getAccessibleTransition(getDelayedTransition(0.4))}
            >
              <div className="relative w-full h-64 tablet:h-80 desktop:h-96">
                <Image
                  src={imageUrl}
                  alt="About COOforRent - Our mission and approach to fractional COO services"
                  fill
                  sizes={imageSizePresets.aboutImage}
                  className="object-cover"
                  loading="lazy"
                  quality={imageQualityPresets.standard}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
