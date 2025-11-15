'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { imageSizePresets, imageQualityPresets } from '@/utils/imageOptimization';

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
  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="border border-white p-6 tablet:p-8 transition-transform duration-200 active:scale-[0.98]"
      variants={fadeInVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && (
        <div className="mb-3 tablet:mb-4">
          {icon.startsWith('/') || icon.startsWith('http') ? (
            <div className="relative w-12 h-12 tablet:w-16 tablet:h-16">
              <Image
                src={icon}
                alt={`${title} icon`}
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
      <p className="text-sm mobile:text-base tablet:text-lg leading-relaxed text-gray-200">
        {description}
      </p>
    </motion.div>
  );
}
