'use client';

import React from 'react';

interface ContactSectionProps {
  heading: string;
  children: React.ReactNode;
}

export default function ContactSection({ heading, children }: ContactSectionProps) {
  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading" 
      className="min-h-screen flex items-center justify-center py-16 tablet:py-20 desktop:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-gray100 relative overflow-hidden"
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="w-full max-w-2xl relative z-10">
        <h2 id="contact-heading" className="text-3xl mobile:text-4xl tablet:text-5xl font-bold text-primary-black text-center mb-8 tablet:mb-12 leading-tight uppercase tracking-wide">
          {heading}
        </h2>
        <div className="bg-primary-white p-8 tablet:p-10 shadow-2xl border border-neutral-gray200">
          <p className="text-center text-neutral-gray800 mb-8 text-lg">
            Ready to transform your operations? Let&apos;s talk.
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
