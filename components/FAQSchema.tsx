export default function FAQSchema() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a fractional COO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fractional COO is a part-time Chief Operating Officer who provides executive-level operational leadership to businesses on a flexible basis. They bring 25+ years of experience without the cost of a full-time executive, helping companies scale operations, implement systems, and improve efficiency.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a fractional COO cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fractional COO services typically cost 30-50% less than hiring a full-time COO. Pricing varies based on engagement type (90-day intensive, interim COO, or monthly retainer) and the scope of work. Most arrangements are flexible monthly retainers tailored to your business needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I hire a fractional COO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Consider hiring a fractional COO when: everything runs through you as the owner, your team lacks accountability, you\'re scaling rapidly and operations are breaking, you need systems but don\'t know where to start, or you\'re experiencing operational bottlenecks that hurt growth.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries does COO for Rent serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'COO for Rent specializes in service companies, multi-location operations, field service teams, construction companies, franchise systems, and dispatch-heavy workflows. We excel in regulated environments and businesses that grew too fast and need operational structure.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where does COO for Rent provide services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'COO for Rent is based in Texas and serves businesses throughout the United States, with a focus on Dallas, Houston, Austin, San Antonio, and surrounding areas. Remote and hybrid engagements are available for clients nationwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a fractional COO and a consultant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fractional COO is embedded in your business as part of your leadership team, making decisions and driving execution. Consultants typically provide advice and recommendations but don\'t implement or lead teams. A fractional COO rolls up their sleeves and gets the work done.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is a typical fractional COO engagement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Engagements vary by need: 90-day intensive for crisis stabilization, 3-6 months for interim COO leadership, or ongoing monthly retainers for continuous operational guidance. Most clients start with a 90-day engagement and extend based on results.',
        },
      },
      {
        '@type': 'Question',
        name: 'What results can I expect from hiring a fractional COO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical results include: reduced operational bottlenecks, improved profit margins through better resource planning, established accountability systems, streamlined workflows and processes, better team alignment, and the ability to scale without burning out your team.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
