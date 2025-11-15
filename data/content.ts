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
  subtitle: 'Fractional COO Services for Growing Businesses',
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
  heading: 'About COOforRent',
  content: [
    'COOforRent provides fractional Chief Operating Officer services to growing businesses that need executive-level operational expertise without the commitment of a full-time hire.',
    'Our experienced COOs work with your team to streamline operations, implement scalable processes, and drive sustainable growth. We bring decades of operational excellence to help you achieve your business goals.',
    'Whether you need strategic planning, process optimization, or operational leadership, our fractional COO model gives you access to top-tier talent on a flexible, cost-effective basis.',
  ],
};

// Services Section Content
export const servicesContent: ServicesContent = {
  heading: 'Our Services',
  services: [
    {
      id: 'strategic-planning',
      title: 'Strategic Planning',
      description:
        'Develop comprehensive operational strategies aligned with your business objectives. We help you create actionable roadmaps for sustainable growth.',
      order: 1,
    },
    {
      id: 'process-optimization',
      title: 'Process Optimization',
      description:
        'Streamline your operations and eliminate inefficiencies. We analyze your current processes and implement improvements that drive productivity.',
      order: 2,
    },
    {
      id: 'team-leadership',
      title: 'Team Leadership',
      description:
        'Provide operational leadership and mentorship to your team. We build high-performing operations teams and foster a culture of excellence.',
      order: 3,
    },
    {
      id: 'systems-implementation',
      title: 'Systems Implementation',
      description:
        'Deploy scalable systems and tools that support your growth. We select and implement the right technology solutions for your operations.',
      order: 4,
    },
    {
      id: 'performance-metrics',
      title: 'Performance Metrics',
      description:
        'Establish KPIs and dashboards to track operational performance. We help you measure what matters and make data-driven decisions.',
      order: 5,
    },
    {
      id: 'change-management',
      title: 'Change Management',
      description:
        'Navigate organizational transitions smoothly and effectively. We guide your team through change while maintaining operational continuity.',
      order: 6,
    },
  ],
};

// Contact Section Content
export const contactContent: ContactContent = {
  heading: 'Get in Touch',
};
