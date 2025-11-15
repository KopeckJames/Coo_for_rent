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
}
