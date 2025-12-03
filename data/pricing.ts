import { PricingContent } from '@/types';

export const pricingContent: PricingContent = {
  hero: {
    title: 'Transparent pricing & flexible plans',
    description: [
      'COO for Rent is an operations-as-a-service solution. Designed for small and mid-sized businesses that need operational leadership without the cost of a full-time executive.',
      'Get access to 25+ years of operational expertise that has scaled businesses before.',
    ],
    benefits: [
      'Avoid expensive learning curve',
      'Improve operational efficiency',
      'Scale past bottlenecks',
      'Build systems that last',
      'Exit with strong operations',
    ],
  },
  tiers: [
    {
      id: 'chaos-to-clarity',
      name: 'Chaos to Clarity Lvl 1',
      description:
        'No more missed weekly 1:1s, lack of expert guidance for the staff, and lack of executive department updates.',
      price: '$3,500/mo',
      sessions: {
        total: '10 x 1 hour sessions',
        breakdown: [
          '4 x 1:1 Leadership & advisory sessions',
          '4 x Strategy sessions',
          '2 x Leadership update meetings',
        ],
      },
      features: [
        '1:1 sessions can be used to manage multiple people in a department',
        'Sessions can be mixed & matched',
        'Subscribe for execs for 1+ depts. Scale up/down anytime',
        'Initial 3 month commitment is required, then month to month.',
      ],
      subscribeUrl: '#contact',
      order: 1,
    },
    {
      id: 'interim-coo',
      name: 'Chaos to Clarity Lvl 2',
      description:
        'No more missed weekly 1:1s, infrequent expert guidance for the staff, and lack of executive department updates.',
      price: '$6,500/mo',
      featured: true,
      sessions: {
        total: '20 x 1 hour sessions',
        breakdown: [
          '8 x 1:1 Leadership & advisory sessions',
          '8 x Strategy sessions',
          '4 x Leadership update meetings',
        ],
      },
      features: [
        '1:1 sessions can be used to manage multiple people in a department',
        'Sessions can be mixed & matched',
        'Subscribe for execs for 1+ depts. Scale up/down anytime',
        'Initial 3 month commitment is required, then month to month.',
      ],
      subscribeUrl: '#contact',
      order: 2,
    },
    {
      id: 'on-call-retainer',
      name: 'Chaos to Clarity Lvl 3',
      description:
        'No more missed weekly 1:1s, infrequent expert guidance for the staff, and lack of executive department updates.',
      price: '$9,000/mo',
      sessions: {
        total: '30 x 1 hour sessions',
        breakdown: [
          '8 x 1:1 Leadership & advisory sessions',
          '16x 1 hrs Strategy sessions',
          '4 x Leadership update meetings',
        ],
      },
      features: [
        '1:1 sessions can be used to manage multiple people in a department',
        'Sessions can be mixed & matched',
        'Subscribe for execs for 1+ depts. Scale up/down anytime',
        'Initial 3 month commitment is required, then month to month.',
      ],
      subscribeUrl: '#contact',
      order: 3,
    },
  ],
  faqs: [
    {
      id: 'what-is-fractional-coo',
      question: 'What is a fractional COO?',
      answer:
        'A fractional COO is a part-time Chief Operating Officer who provides executive-level operational leadership to businesses on a flexible basis. They bring 25+ years of experience without the cost of a full-time executive, helping companies scale operations, implement systems, and improve efficiency.',
      order: 1,
    },
    {
      id: 'cost',
      question: 'How much does a fractional COO cost?',
      answer:
        'Fractional COO services typically cost 30-50% less than hiring a full-time COO. Pricing varies based on engagement type (90-day intensive, interim COO, or monthly retainer) and the scope of work. Most arrangements are flexible monthly retainers tailored to your business needs.',
      order: 2,
    },
    {
      id: 'when-to-hire',
      question: 'When should I hire a fractional COO?',
      answer:
        'Consider hiring a fractional COO when: everything runs through you as the owner, your team lacks accountability, you\'re scaling rapidly and operations are breaking, you need systems but don\'t know where to start, or you\'re experiencing operational bottlenecks that hurt growth.',
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
        'COO for Rent is based in Texas, helping small business thrive by serving the local communities with a focus on Cibolo, Schertz, Universal City, Austin, San Antonio, and surrounding areas.',
      order: 5,
    },
    {
      id: 'vs-consultant',
      question: 'What is the difference between a fractional COO and a consultant?',
      answer:
        'A fractional COO is embedded in your business as part of your leadership team, making decisions and driving execution. Consultants typically provide advice and recommendations but do not implement or lead teams. A fractional COO rolls up their sleeves and gets the work done.',
      order: 6,
    },
    {
      id: 'engagement-length',
      question: 'How long is a typical fractional COO engagement?',
      answer:
        'Engagements vary by need: 90-day intensive engagement for crisis stabilization, 3-6 months for interim COO leadership, or ongoing monthly retainers for continuous operational guidance. Most clients start with a 90-day engagement and extend based on results.',
      order: 7,
    },
    {
      id: 'expected-results',
      question: 'What results can I expect from hiring a fractional COO?',
      answer:
        'Typical results include reduced operational bottlenecks, improved profit margins through better resource planning, established accountability systems, streamlined workflows and processes, better team alignment, and the ability to scale without burning out your team.',
      order: 8,
    },
    {
      id: 'how-to-start',
      question: 'How do we get started?',
      answer:
        '1) Schedule a no-BS strategy call to discuss your operational challenges. 2) We assess your current operations and identify bottlenecks. 3) Receive a custom proposal with recommended engagement type. 4) Get matched with the right operational expertise. 5) Start building systems and fixing what\'s broken.',
      order: 9,
    },
  ],
};
