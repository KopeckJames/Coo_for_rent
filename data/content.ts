import {
  HeroContent,
  AboutContent,
  ServicesContent,
  ContactContent,
  NavigationLink,
  ProblemsContent,
  FaqContent,
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
  { id: 'pricing', label: 'Pricing', href: '#pricing', order: 4 },
  { id: 'faq', label: 'FAQ', href: '#faq', order: 5 },
  { id: 'contact', label: 'Contact', href: '#contact', order: 6 },
];

// About Section Content
export const aboutContent: AboutContent = {
  heading: 'Fractional COO | Operations Fixer | Scale‑Up Partner',
  content: [
    'Business\' under $10 million do not need a full time COO. I help small and mid-sized businesses get their operations under control, build real systems, and scale without burning out their teams or torching their margins.',
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
        'If every decision, approval, fire-drill, and bottleneck has your name on it… you don\'t own a business - you work for it!',
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

// FAQ Section Content
export const faqContent: FaqContent = {
  heading: 'FAQs',
  faqs: [
    {
      id: 'what-is-fractional-coo',
      question: 'What is a Fractional COO?',
      answer:
        'A Fractional COO is a part-time Chief Operating Officer who provides executive-level operational leadership to businesses on a flexible basis. They bring 25+ years of experience without the cost of a full-time executive, helping companies scale operations, implement systems, and improve efficiency.',
      order: 1,
    },
    {
      id: 'cost',
      question: 'How much does a Fractional COO cost?',
      answer:
        'Fractional COO services typically cost 30-50% less than hiring a full-time COO. Pricing varies based on engagement type (90-day intensive, interim COO, or monthly retainer) and the scope of work. Most arrangements are flexible monthly retainers tailored to your business needs.',
      order: 2,
    },
    {
      id: 'when-to-hire',
      question: 'When should I hire a Fractional COO?',
      answer:
        'Consider hiring a Fractional COO when: everything runs through you as the owner, your team lacks accountability, you\'re scaling rapidly and operations are breaking, you need systems but don\'t know where to start, or you\'re experiencing operational bottlenecks that hurt growth.',
      order: 3,
    },
    {
      id: 'industries',
      question: 'What industries does COO for Rent serve?',
      answer:
        'COO for Rent specializes in service companies, multi-location operations, field service teams, construction companies, franchise systems, and dispatch-heavy workflows. We excel in regulated environments and businesses that grew too fast and have a need for operational structure.',
      order: 4,
    },
    {
      id: 'location',
      question: 'Where does COO for Rent provide services?',
      answer:
        'COO for Rent is based in Texas, helping small business thrive by serving the local communities with a focus on Cibolo, Schertz, Universal City, Austin, San Antonio, and surrounding areas. Remote help available for business\' outside of Texas.',
      order: 5,
    },
    {
      id: 'vs-consultant',
      question: 'What is the difference between a Fractional COO and a consultant?',
      answer:
        'A Fractional COO is embedded in your business as part of your leadership team, making decisions and driving execution. Consultants typically provide advice and recommendations but do not implement or lead teams. A fractional COO rolls up their sleeves and gets the work done.',
      order: 6,
    },
    {
      id: 'engagement-length',
      question: 'How long is a typical Fractional COO engagement?',
      answer:
        'Engagements vary by need: 90-day intensive engagement for crisis stabilization, 3-6 months for interim COO leadership, or ongoing monthly retainers for continuous operational guidance. Most clients start with a 90-day engagement and extend based on results.',
      order: 7,
    },
    {
      id: 'expected-results',
      question: 'What results can I expect from hiring a Fractional COO?',
      answer:
        'Typical results include reduced operational bottlenecks, improved profit margins through better resource planning, established accountability systems, streamlined workflows and processes, better team alignment, and the ability to scale without burning out your team.',
      order: 8,
    },
  ],
};

// Contact Section Content
export const contactContent: ContactContent = {
  heading: 'Get in Touch',
  linkedInUrl: 'https://www.linkedin.com/company/coo-for-rent/',
};
