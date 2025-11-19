'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Briefcase, Phone, Settings, Truck, TrendingUp } from 'lucide-react';
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  briefcase: Briefcase,
  phone: Phone,
  settings: Settings,
  truck: Truck,
  'trending-up': TrendingUp,
};

export default function ServiceCard({
  title,
  description,
  icon,
  index,
  isInView,
}: ServiceCardProps) {
  const IconComponent = icon && iconMap[icon];

  return (
    <motion.article
      className="bg-neutral-gray100 border border-neutral-gray200 p-4 tablet:p-8 shadow-lg will-change-transform transition-all duration-200 hover:shadow-2xl hover:border-primary-black focus-within:shadow-2xl focus-within:border-primary-black group h-full flex flex-col"
      variants={getAccessibleVariants(fadeIn)}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={getAccessibleTransition(getDelayedTransition(index * 0.1))}
      whileHover={scaleOnHover}
      whileTap={scaleOnTap}
    >
      {IconComponent && (
        <div className="mb-4 tablet:mb-6 inline-flex items-center justify-center w-12 h-12 tablet:w-16 tablet:h-16 bg-primary-black text-primary-white group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
          <IconComponent className="w-6 h-6 tablet:w-8 tablet:h-8" />
        </div>
      )}
      {!IconComponent && icon && (icon.startsWith('/') || icon.startsWith('http')) && (
        <div className="mb-4 tablet:mb-6" aria-hidden="true">
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
        </div>
      )}
      <h3 className="text-lg mobile:text-xl tablet:text-2xl font-bold mb-3 tablet:mb-4 leading-tight text-primary-black">
        {title}
      </h3>
      <p className="text-sm mobile:text-base leading-relaxed text-neutral-gray800 flex-grow">
        {description}
      </p>
    </motion.article>
  );
}
