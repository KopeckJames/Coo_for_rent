import {
  HeroContent,
  AboutContent,
  ServicesContent,
  ContactContent,
  NavigationLink,
  ProblemsContent,
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
  { id: 'problems', label: 'Sound Familiar?', href: '#problems', order: 3 },
  { id: 'services', label: 'Services', href: '#services', order: 4 },
  { id: 'contact', label: 'Contact', href: '#contact', order: 5 },
];

// About Section Content
export const aboutContent: AboutContent = {
  heading: 'Fractional COO | Operations Fixer | Scale-Up Partner',
  content: [
    'I help small and mid-sized businesses get their operations under control, build real systems, and scale without burning out their teams or torching their margins.',
    'What I Do',
    'Build processes that actually get followed',
    'Clean up workflows, tech stacks, and reporting',
    'Improve margins through smarter scheduling & resource planning',
    'Create accountability without killing culture',
    'Get teams aligned — fast',
    'Where I Shine',
    'Service companies, multi-location operations, field teams, regulated environments, dispatch-heavy workflows, and any business that grew too fast and now needs structure.',
    'How It Works',
    'Flexible monthly retainer — part-time, interim, or project-based. I step in, fix the bottlenecks, build the systems, and leave you with a team that runs smoother than ever.',
    'Ready to Talk?',
    'Let\'s sit down for a no-BS strategy call and see what\'s possible.',
  ],
  imageUrl: '/sonnytransparent.png',
};

// Problems Section Content
export const problemsContent: ProblemsContent = {
  heading: 'Does any of this sound familiar?',
  problems: [
    {
      id: 'bottleneck',
      title: 'Everything has to run through you',
      description:
        'If every decision, approval, fire-drill, and bottleneck has your name on it… you don\'t own a business - you work for it.',
      order: 1,
    },
    {
      id: 'blame-culture',
      title: 'When something goes wrong, you immediately look for who to blame',
      description:
        'That\'s burnout talking. When systems are weak, blame becomes the default. When systems are strong, problems get fixed before they ever reach your desk.',
      order: 2,
    },
    {
      id: 'babysitting',
      title: 'You know every employee\'s weaknesses and still hope they "straighten out"',
      description:
        'But that\'s not how companies grow. You scale faster when you stop babysitting weaknesses and start building a structure that plays to people\'s strengths.',
      order: 3,
    },
    {
      id: 'external-blame',
      title: 'When you miss a sales target, you immediately blame the market, the customer, or the economy',
      description:
        'But let\'s be real - growth doesn\'t come from pointing fingers outward. The companies that win are the ones that pause, look in the mirror, adjust fast, and attack the next month with a tighter plan and a sharper edge.',
      order: 4,
    },
  ],
};

// Services Section Content
export const servicesContent: ServicesContent = {
  heading: 'Flexible Packages',
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

  ],
};

// Contact Section Content
export const contactContent: ContactContent = {
  heading: 'Get in Touch',
  linkedInUrl: 'https://www.linkedin.com/company/coo-for-rent/',
};
