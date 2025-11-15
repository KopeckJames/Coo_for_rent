import {
  HeroContent,
  AboutContent,
  ServicesContent,
  ContactContent,
  NavigationLink,
} from '@/types';

// Hero Section Content
export const heroContent: HeroContent = {
  title: 'COOforRent',
  subtitle: 'You built something great — now it\'s breaking under its own weight.',
  ctaText: 'Get Started',
};

// Navigation Links
export const navigationLinks: NavigationLink[] = [
  { id: 'hero', label: 'Home', href: '#hero', order: 1 },
  { id: 'about', label: 'About', href: '#about', order: 2 },
  { id: 'services', label: 'Services', href: '#services', order: 3 },
  { id: 'contact', label: 'Contact', href: '#contact', order: 4 },
];

// About Section Content
export const aboutContent: AboutContent = {
  heading: 'Fractional COO for Hire',
  content: [
    'Based in Texas, I work with founders, trades, service companies, and restaurant groups who are scaling fast, but losing control. I build systems, people, and processes that hold up — even when your business is moving fast.',
    '25+ years\' experience in operations, field service, construction, and franchise systems. I\'ve led 50+ teams across 4 major cities.',
    'I roll up my sleeves — no fluff, no buzzwords. Just systems that work.',
  ],
  imageUrl: '/sonnytransparent.png',
};

// Services Section Content
export const servicesContent: ServicesContent = {
  heading: 'Packages',
  services: [
    {
      id: 'chaos-to-clarity',
      title: 'Chaos to Clarity',
      description:
        '90-day intensive engagement to stabilize operations, implement core systems, and establish accountability frameworks. Perfect for businesses in rapid growth or crisis mode.',
      icon: 'target',
      order: 1,
    },
    {
      id: 'interim-coo',
      title: 'Interim COO',
      description:
        '3–6 month embedded leadership to build operational infrastructure, lead teams, and drive strategic initiatives. Full operational oversight during transitions or scaling phases.',
      icon: 'briefcase',
      order: 2,
    },
    {
      id: 'on-call-retainer',
      title: 'On-Call Retainer',
      description:
        'Flexible monthly retainer for ongoing operational guidance, strategic planning, and problem-solving. Access to COO-level expertise when you need it.',
      icon: 'phone',
      order: 3,
    },
    {
      id: 'operations-overhaul',
      title: 'Operations Overhaul',
      description:
        'Complete assessment and redesign of operational systems, workflows, and processes. Eliminate bottlenecks and build scalable infrastructure.',
      icon: 'settings',
      order: 4,
    },
    {
      id: 'dispatch-field-service',
      title: 'Dispatch & Field Service Efficiency',
      description:
        'Optimize scheduling, routing, and field operations. Improve response times, reduce costs, and increase customer satisfaction for service-based businesses.',
      icon: 'truck',
      order: 5,
    },
    {
      id: 'margin-profit-optimization',
      title: 'Margin & Profit Optimization',
      description:
        'Identify profit leaks, optimize pricing strategies, and improve operational margins. Data-driven approach to maximize profitability without sacrificing quality.',
      icon: 'trending-up',
      order: 6,
    },
  ],
};

// Contact Section Content
export const contactContent: ContactContent = {
  heading: 'Get in Touch',
};
