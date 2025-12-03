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
      className="bg-primary-white text-primary-black px-3 sm:px-6 lg:px-8 pt-3 pb-0 tablet:pt-8 tablet:pb-0 desktop:pt-10 desktop:pb-0"
    >
      <div className="max-w-7xl mx-auto scale-[0.85]">
        <motion.div
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
          className="text-center mb-4 tablet:mb-12"
        >
          <h2 id="about-heading" className="text-lg mobile:text-xl tablet:text-4xl font-bold mb-3 tablet:mb-6 leading-tight uppercase tracking-wide tablet:whitespace-nowrap">
            {heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3 tablet:gap-12 desktop:gap-16 items-start">
          {imageUrl && (
            <motion.div
              className="space-y-3 tablet:space-y-6"
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
              
              {/* Intro Card under photo */}
              <div className="bg-neutral-gray100 p-4 tablet:p-8 shadow-lg border border-neutral-gray200 max-w-md mx-auto">
                <p className="text-sm mobile:text-base tablet:text-lg leading-relaxed text-neutral-gray800">
                  {content[0]}
                </p>
              </div>
            </motion.div>
          )}

          <motion.div
            className="space-y-3 tablet:space-y-6 scale-[0.90]"
            variants={getAccessibleVariants(fadeIn)}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={getAccessibleTransition(getDelayedTransition(0.4))}
          >
            {/* Content Card */}
            <div className="bg-neutral-gray100 p-4 tablet:p-8 shadow-lg border border-neutral-gray200">
              <div className="space-y-2 tablet:space-y-3">
                {content.slice(1).map((paragraph, index) => {
                  const isBoldHeader = ['What I Do', 'Where I Shine', 'How It Works', 'Ready to Talk?'].includes(paragraph);
                  
                  return (
                    <p
                      key={index}
                      className={`text-sm mobile:text-base tablet:text-lg leading-relaxed text-neutral-gray800 ${
                        isBoldHeader ? 'font-bold mt-3 tablet:mt-4 first:mt-0' : ''
                      }`}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Key Stats Cards */}
            <div className="grid grid-cols-2 gap-3 tablet:gap-4">
              <div className="bg-neutral-gray100 p-3 tablet:p-6 shadow-lg border border-neutral-gray200 flex flex-col items-center text-center">
                <div className="w-10 h-10 tablet:w-12 tablet:h-12 bg-primary-black text-primary-white flex items-center justify-center mb-2 tablet:mb-3">
                  <Award className="w-5 h-5 tablet:w-6 tablet:h-6" />
                </div>
                <div className="text-2xl tablet:text-3xl font-bold text-primary-black mb-1">25+</div>
                <div className="text-xs tablet:text-sm text-neutral-gray800">Years Experience</div>
              </div>

              <div className="bg-neutral-gray100 p-3 tablet:p-6 shadow-lg border border-neutral-gray200 flex flex-col items-center text-center">
                <div className="w-10 h-10 tablet:w-12 tablet:h-12 bg-primary-black text-primary-white flex items-center justify-center mb-2 tablet:mb-3">
                  <Users className="w-5 h-5 tablet:w-6 tablet:h-6" />
                </div>
                <div className="text-2xl tablet:text-3xl font-bold text-primary-black mb-1">50+</div>
                <div className="text-xs tablet:text-sm text-neutral-gray800">Teams Led</div>
              </div>

              <div className="bg-neutral-gray100 p-3 tablet:p-6 shadow-lg border border-neutral-gray200 flex flex-col items-center text-center">
                <div className="w-10 h-10 tablet:w-12 tablet:h-12 bg-primary-black text-primary-white flex items-center justify-center mb-2 tablet:mb-3">
                  <MapPin className="w-5 h-5 tablet:w-6 tablet:h-6" />
                </div>
                <div className="text-2xl tablet:text-3xl font-bold text-primary-black mb-1">4</div>
                <div className="text-xs tablet:text-sm text-neutral-gray800">Major Cities</div>
              </div>

              <div className="bg-neutral-gray100 p-3 tablet:p-6 shadow-lg border border-neutral-gray200 flex flex-col items-center text-center">
                <div className="w-10 h-10 tablet:w-12 tablet:h-12 bg-primary-black text-primary-white flex items-center justify-center mb-2 tablet:mb-3">
                  <Briefcase className="w-5 h-5 tablet:w-6 tablet:h-6" />
                </div>
                <div className="text-2xl tablet:text-3xl font-bold text-primary-black mb-1">TX</div>
                <div className="text-xs tablet:text-sm text-neutral-gray800">Based in Texas</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
