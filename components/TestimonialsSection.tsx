'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { TestimonialsContent } from '@/types';
import {
  fadeIn,
  smoothTransition,
  getDelayedTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface TestimonialsSectionProps {
  content: TestimonialsContent;
}

function initials(name: string) {
  return name
    .split(' ')
    .filter((part) => /^[A-Za-z]/.test(part) && !part.endsWith('.'))
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

export default function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const testimonials = [...content.testimonials].sort((a, b) => a.order - b.order);

  return (
    <section
      id="testimonials"
      ref={ref}
      aria-labelledby="testimonials-heading"
      className="bg-neutral-gray100 text-primary-black px-3 sm:px-6 lg:px-8 py-6 tablet:py-12 desktop:py-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-6 tablet:mb-12"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          <h2
            id="testimonials-heading"
            className="text-lg mobile:text-xl tablet:text-4xl font-bold mb-3 leading-tight uppercase tracking-wide"
          >
            {content.heading}
          </h2>
          {content.subheading && (
            <p className="text-sm mobile:text-base tablet:text-lg text-neutral-gray800">
              {content.subheading}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:gap-8">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.id}
              className={`bg-primary-white border-2 border-neutral-gray200 shadow-lg p-6 tablet:p-8 flex flex-col ${
                t.featured ? 'tablet:col-span-2' : ''
              }`}
              variants={getAccessibleVariants(fadeIn)}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={getAccessibleTransition(getDelayedTransition(index * 0.08))}
            >
              <span
                aria-hidden="true"
                className="text-5xl tablet:text-6xl font-bold leading-none text-primary-black mb-2 font-spectral"
              >
                &ldquo;
              </span>
              <blockquote className="space-y-3 flex-grow">
                {t.quote.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm mobile:text-base tablet:text-lg leading-relaxed text-neutral-gray800"
                  >
                    {paragraph}
                  </p>
                ))}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-neutral-gray200 flex items-center gap-4">
                {t.imageUrl ? (
                  <Image
                    src={t.imageUrl}
                    alt=""
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="w-14 h-14 rounded-full bg-primary-black text-primary-white flex items-center justify-center font-bold flex-shrink-0"
                  >
                    {initials(t.name)}
                  </span>
                )}
                <div>
                  <p className="font-bold text-primary-black">{t.name}</p>
                  <p className="text-sm text-neutral-gray800">{t.title}</p>
                  <p className="text-xs uppercase tracking-wide text-neutral-gray800 mt-1">
                    {t.relationship}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
