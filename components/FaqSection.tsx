'use client';

import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { FaqContent } from '@/types';
import {
  fadeIn,
  smoothTransition,
  getDelayedTransition,
  getAccessibleVariants,
  getAccessibleTransition,
} from '@/utils/animations';

interface FaqSectionProps {
  content: FaqContent;
}

export default function FaqSection({ content }: FaqSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      aria-labelledby="faq-heading"
      className="bg-primary-white text-primary-black px-3 sm:px-6 lg:px-8 pt-3 pb-3 tablet:pt-8 tablet:pb-8 desktop:pt-10 desktop:pb-10"
    >
      <div className="max-w-7xl mx-auto w-full scale-[0.78]">
        <motion.h2
          id="faq-heading"
          className="text-lg mobile:text-xl tablet:text-4xl font-bold mb-4 tablet:mb-12 text-center leading-tight uppercase tracking-wide"
          variants={getAccessibleVariants(fadeIn)}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={getAccessibleTransition(smoothTransition)}
        >
          {content.heading}
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-3 tablet:space-y-4">
          {content.faqs.map((faq, index) => (
            <motion.article
              key={faq.id}
              className="bg-neutral-gray100 border border-neutral-gray200 shadow-lg overflow-hidden"
              variants={getAccessibleVariants(fadeIn)}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={getAccessibleTransition(getDelayedTransition(index * 0.05))}
            >
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full text-left p-4 tablet:p-6 flex justify-between items-center gap-4 hover:bg-neutral-gray200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-inset"
              >
                <h3 className="text-base mobile:text-lg tablet:text-xl font-bold text-primary-black pr-4">
                  {faq.question}
                </h3>
                <span
                  className="flex-shrink-0 text-2xl tablet:text-3xl font-bold text-primary-black transition-transform duration-200"
                  style={{
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-4 pb-4 tablet:px-6 tablet:pb-6 pt-0">
                      <p className="text-base mobile:text-lg tablet:text-xl leading-relaxed text-neutral-gray800">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
