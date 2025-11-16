'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

interface ContactSectionProps {
  heading: string;
  children: React.ReactNode;
  linkedInUrl?: string;
}

export default function ContactSection({ heading, children, linkedInUrl }: ContactSectionProps) {
  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading" 
      className="min-h-screen flex items-center justify-center py-12 tablet:py-14 desktop:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-gray100 relative overflow-hidden"
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="w-full max-w-6xl relative z-10">
        <h2 id="contact-heading" className="text-3xl mobile:text-4xl tablet:text-5xl font-bold text-primary-black text-center mb-8 tablet:mb-12 leading-tight uppercase tracking-wide">
          {heading}
        </h2>
        
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center scale-[0.90]">
          {/* Image on the left */}
          <div className="hidden tablet:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="/sonny_contact.jpg"
                alt="Sonny - COO for Rent"
                fill
                className="object-cover shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Form on the right */}
          <div className="flex flex-col">
            <div className="bg-primary-white p-8 tablet:p-10 shadow-2xl border border-neutral-gray200">
              <p className="text-center text-neutral-gray800 mb-8 text-lg">
                Ready to transform your operations? Let&apos;s talk.
              </p>
              {children}
            </div>

            {/* LinkedIn Button */}
            {linkedInUrl && (
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-[#0A66C2] text-white px-6 py-4 flex items-center justify-center gap-3 shadow-lg border border-[#0A66C2] hover:bg-[#004182] transition-all duration-200 min-h-[44px] touch-target hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Connect with me on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-semibold text-base">Connect with me on LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
