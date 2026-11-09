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
      id: 'working-session',
      name: 'Working Session',
      description: [
        "Help service business owners identify the root causes of operational challenges and develop a practical plan to address them. Clients leave with a clear understanding of what's holding their business back, two or three prioritized recommendations, and actionable next steps to improve performance, accountability, and efficiency.",
      ],
      price: '$550',
      priceLabel: 'Investment',
      includedHeading: 'Deliverables',
      included: [
        "Pre-session questionnaire to identify the owner's primary operational challenges",
        '90-minute one-on-one working session via video conference',
        'Review of one priority business issue, such as employee accountability, productivity, leadership, or operational inefficiencies',
        'Written summary identifying key findings and root causes',
        'Prioritized action plan with 2–3 recommendations and suggested next steps, delivered within three business days',
      ],
      subscribeUrl: '#contact',
      order: 1,
    },
    {
      id: '30-day-sprint',
      name: '30-Day Sprint',
      description: [
        "Help established service businesses address a critical operational challenge within 30 days. Whether it's employee accountability, inconsistent productivity, ineffective management, or inefficient processes, we'll identify the root causes, implement practical solutions, and establish measurable performance standards.",
        'The goal is to move beyond recommendations and put improvements into action, giving owners better visibility, stronger management accountability, and greater control over daily operations.',
      ],
      price: '$3,850',
      priceLabel: 'Investment',
      includedHeading: 'Deliverables',
      included: [
        'Initial operational assessment focused on one priority business challenge',
        'Review of relevant KPIs, processes, and management responsibilities',
        'Identification of operational bottlenecks and root causes',
        'Customized 30-day improvement plan with measurable objectives',
        'Weekly leadership coaching and implementation sessions',
        'Development of accountability measures and performance tracking',
        'Implementation support for agreed-upon operational improvements',
        'Final progress review with results, recommendations, and a 60-day follow-up roadmap',
      ],
      subscribeUrl: '#contact',
      order: 2,
    },
    {
      id: 'month-to-month-retainer',
      name: 'Month-to-Month Retainer',
      description: [
        "Growing a service business shouldn't require the owner to manage every decision, employee issue, and operational problem.",
        'This ongoing consulting engagement helps business owners strengthen their operations, develop capable managers, improve accountability, and establish systems that consistently deliver results.',
        'I work directly with owners and their leadership teams to identify performance gaps, establish measurable expectations, coach managers, and implement practical operational improvements.',
        'Rather than providing recommendations and walking away, I stay involved to help turn plans into action.',
        "The goal: A more efficient, accountable, and profitable business that relies less on the owner's daily involvement.",
      ],
      price: '$4,400',
      priceLabel: 'Monthly Investment',
      includedHeading: 'Deliverables',
      included: [
        'Weekly operations and leadership coaching session',
        'Monthly review of key performance indicators and business results',
        'Development and monitoring of management accountability plans',
        'Ongoing guidance on staffing, productivity, and operational efficiency',
        'Support implementing process improvements and performance standards',
        'Monthly owner strategy and progress review',
        'Prioritized action items with assigned responsibilities and deadlines',
        'Up to 4 days (approximately 16 hours) of consulting support per month, primarily remote',
      ],
      subscribeUrl: '#contact',
      order: 3,
    },
    {
      id: 'free-consult',
      name: 'Book Free Consult',
      description: [
        'Schedule a free 30-minute consultation to discuss your needs and see if we\'re a good fit.',
      ],
      price: 'Free',
      priceLabel: 'Investment',
      includedHeading: "What's Included",
      included: [
        '30-minute video call',
        'Needs assessment',
        'Q&A session',
        'Strategic recommendations',
      ],
      ctaLabel: 'Book Free Consult',
      subscribeUrl: '#contact',
      order: 4,
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
        'Fractional COO services typically cost 30-50% less than hiring a full-time COO. Engagements range from a $550 Working Session and a $3,850 30-Day Sprint to a $4,400 Month-to-Month Retainer, so you can start with the level of support your business needs. Every engagement starts with a free 30-minute consultation.',
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
        'COO for Rent is based in Texas, helping small business thrive by serving the local communities with a focus on Cibolo, Schertz, Universal City, Austin, San Antonio, and surrounding areas. Remote help available for business\' outside of Texas.',
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
        'Engagements vary by need: a 90-minute Working Session to diagnose one priority issue, a 30-Day Sprint to fix a critical operational challenge, or an ongoing Month-to-Month Retainer for continuous operational and leadership support.',
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
