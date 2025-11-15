'use client';

import React from 'react';

interface ContactSectionProps {
  heading: string;
  children: React.ReactNode;
}

export default function ContactSection({ heading, children }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="min-h-screen bg-primary-white flex items-center justify-center py-16 tablet:py-20 desktop:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <h2 id="contact-heading" className="text-3xl mobile:text-4xl tablet:text-5xl desktop:text-6xl font-bold text-primary-black text-center mb-8 tablet:mb-12 leading-tight">
          {heading}
        </h2>
        {children}
      </div>
    </section>
  );
}
