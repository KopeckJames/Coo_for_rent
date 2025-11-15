'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { imageSizePresets, imageQualityPresets } from '@/utils/imageOptimization';
import {
  fadeIn,
  scaleOnHover,
  scaleOnTap,
  getDelayedTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  index: number;
  isInView: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index,
  isInView,
}: ServiceCardProps) {
  return (
    <motion.article
      className="border border-primary-white p-6 tablet:p-8 will-change-transform transition-colors duration-200 hover:bg-neutral-gray900 focus-within:bg-neutral-gray900"
      variants={getAccessibleVariants(fadeIn)}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={getAccessibleTransition(getDelayedTransition(index * 0.1))}
      whileHover={scaleOnHover}
      whileTap={scaleOnTap}
    >
      {icon && (
        <div className="mb-3 tablet:mb-4" aria-hidden="true">
          {icon.startsWith('/') || icon.startsWith('http') ? (
            <div className="relative w-12 h-12 tablet:w-16 tablet:h-16">
              <Image
                src={icon}
                alt=""
                fill
                sizes={imageSizePresets.serviceIcon}
                className="object-contain"
                loading="lazy"
                quality={imageQualityPresets.icon}
              />
            </div>
          ) : (
            <span className="text-xl tablet:text-2xl">{icon}</span>
          )}
        </div>
      )}
      <h3 className="text-xl mobile:text-2xl tablet:text-3xl font-bold mb-3 tablet:mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-sm mobile:text-base tablet:text-lg leading-relaxed text-neutral-gray200">
        {description}
      </p>
    </motion.article>
  );
}
