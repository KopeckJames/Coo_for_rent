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
      className="bg-primary-white text-primary-black px-4 sm:px-6 lg:px-8 py-12 tablet:py-14 desktop:py-16"
    >
      <div className="max-w-7xl mx-auto w-full scale-[0.78]">
        <motion.h2
          id="services-heading"
          className="text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-4 text-center leading-tight uppercase tracking-wide"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          {heading}
        </motion.h2>

        <motion.p
          className="text-center text-lg text-neutral-gray800 mb-12 tablet:mb-16 max-w-3xl mx-auto"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          Find the Right Type of Engagement For Your Business
        </motion.p>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 tablet:gap-8">
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
