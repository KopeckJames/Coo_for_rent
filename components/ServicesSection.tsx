'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '@/types';
import {
  fadeIn,
  smoothTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface ServicesSectionProps {
  heading: string;
  services: Service[];
}

export default function ServicesSection({
  heading,
  services,
}: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      aria-labelledby="services-heading"
      className="min-h-screen bg-primary-black text-primary-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 tablet:py-20 desktop:py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          id="services-heading"
          className="text-3xl mobile:text-4xl tablet:text-5xl desktop:text-6xl font-bold mb-8 tablet:mb-12 desktop:mb-16 text-center leading-tight"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 tablet:gap-6 desktop:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
