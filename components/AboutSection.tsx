'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Award, Users, MapPin, Briefcase } from 'lucide-react';
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
      className="bg-primary-white text-primary-black px-4 sm:px-6 lg:px-8 py-8 tablet:py-10 desktop:py-12"
    >
      <div className="max-w-7xl mx-auto scale-[0.85]">
        <motion.div
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
          className="text-center mb-12 tablet:mb-16"
        >
          <h2 id="about-heading" className="text-2xl mobile:text-3xl tablet:text-4xl font-bold mb-6 leading-tight uppercase tracking-wide whitespace-nowrap">
            {heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:gap-12 desktop:gap-16 items-center">
          {imageUrl && (
            <motion.div
              className="flex items-center justify-center relative"
              variants={getAccessibleVariants(fadeIn)}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={getAccessibleTransition(getDelayedTransition(0.2))}
            >
              <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
                <Image
                  src={imageUrl}
                  alt="Sonny - Fractional COO with 25+ years of operations experience"
                  fill
                  sizes={imageSizePresets.aboutImage}
                  className="object-cover shadow-2xl"
                  quality={imageQualityPresets.high}
                  priority
                />
              </div>
            </motion.div>
          )}

          <motion.div
            className="space-y-6 scale-[0.90]"
            variants={getAccessibleVariants(fadeIn)}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={getAccessibleTransition(getDelayedTransition(0.4))}
          >
            {/* Content Card */}
            <div className="bg-neutral-gray100 p-6 tablet:p-8 shadow-lg border border-neutral-gray200">
              <div className="space-y-4">
                {content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base mobile:text-lg leading-relaxed text-neutral-gray800"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-gray100 p-6 shadow-lg border border-neutral-gray200 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-black text-primary-white flex items-center justify-center mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-primary-black mb-1">25+</div>
                <div className="text-sm text-neutral-gray800">Years Experience</div>
              </div>

              <div className="bg-neutral-gray100 p-6 shadow-lg border border-neutral-gray200 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-black text-primary-white flex items-center justify-center mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-primary-black mb-1">50+</div>
                <div className="text-sm text-neutral-gray800">Teams Led</div>
              </div>

              <div className="bg-neutral-gray100 p-6 shadow-lg border border-neutral-gray200 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-black text-primary-white flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-primary-black mb-1">4</div>
                <div className="text-sm text-neutral-gray800">Major Cities</div>
              </div>

              <div className="bg-neutral-gray100 p-6 shadow-lg border border-neutral-gray200 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-black text-primary-white flex items-center justify-center mb-3">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-primary-black mb-1">TX</div>
                <div className="text-sm text-neutral-gray800">Based in Texas</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
