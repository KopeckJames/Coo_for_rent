'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProblemsContent } from '@/types';
import {
  fadeIn,
  scaleOnHover,
  scaleOnTap,
  smoothTransition,
  getDelayedTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface ProblemsSectionProps {
  content: ProblemsContent;
}

export default function ProblemsSection({ content }: ProblemsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="problems"
      ref={ref}
      aria-labelledby="problems-heading"
      className="bg-primary-white text-primary-black px-4 sm:px-6 lg:px-8 py-8 tablet:py-10 desktop:py-12"
    >
      <div className="max-w-7xl mx-auto w-full scale-[0.78]">
        <motion.h2
          id="problems-heading"
          className="text-2xl mobile:text-3xl tablet:text-4xl font-bold mb-12 tablet:mb-16 text-center leading-tight uppercase tracking-wide"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          {content.heading}
        </motion.h2>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:gap-8">
          {content.problems.map((problem, index) => (
            <motion.article
              key={problem.id}
              className="bg-neutral-gray100 border border-neutral-gray200 p-8 shadow-lg will-change-transform transition-all duration-200 hover:shadow-2xl hover:border-primary-black focus-within:shadow-2xl focus-within:border-primary-black group h-full flex flex-col"
              variants={getAccessibleVariants(fadeIn)}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={getAccessibleTransition(getDelayedTransition(index * 0.1))}
              whileHover={scaleOnHover}
              whileTap={scaleOnTap}
            >
              <h3 className="text-2xl font-bold mb-4 leading-tight text-primary-black">
                • {problem.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-gray800 flex-grow">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
