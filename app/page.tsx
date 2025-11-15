'use client';

import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import { ContactFormData } from '@/types';
import {
  heroContent,
  aboutContent,
  servicesContent,
  contactContent,
} from '@/data/content';

// Dynamic imports for components with animations to reduce initial bundle size
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  ssr: true,
});

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  ssr: true,
});

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  ssr: true,
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  ssr: true,
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: true,
});

export default function Home() {
  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = async (data: ContactFormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message');
    }

    return result;
  };

  return (
    <Layout>
      <HeroSection
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        ctaText={heroContent.ctaText}
        onCtaClick={handleCtaClick}
      />

      <AboutSection
        heading={aboutContent.heading}
        content={aboutContent.content}
        imageUrl={aboutContent.imageUrl}
      />

      <ServicesSection
        heading={servicesContent.heading}
        services={servicesContent.services}
      />

      <ContactSection heading={contactContent.heading}>
        <ContactForm onSubmit={handleContactSubmit} />
      </ContactSection>
    </Layout>
  );
}
