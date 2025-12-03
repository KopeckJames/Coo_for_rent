// Core data models for COOforRent website

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
}

export interface NavigationLink {
  id: string;
  label: string;
  href: string;
  order: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: Date;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface AboutContent {
  heading: string;
  content: string[];
  imageUrl?: string;
}

export interface ServicesContent {
  heading: string;
  services: Service[];
}

export interface ContactContent {
  heading: string;
  linkedInUrl?: string;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface ProblemsContent {
  heading: string;
  problems: Problem[];
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface FaqContent {
  heading: string;
  faqs: Faq[];
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  savings?: string;
  featured?: boolean;
  sessions: {
    total: string;
    breakdown: string[];
  };
  features: string[];
  subscribeUrl: string;
  order: number;
}

export interface PricingContent {
  hero: {
    title: string;
    description: string[];
    benefits: string[];
  };
  tiers: PricingTier[];
  faqs: Faq[];
}
