export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'COOforRent',
    description: 'Fractional COO for hire. 25+ years in operations, field service, construction, and franchise systems.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com'}/logo.svg`,
    telephone: '+1-830-837-8060',
    email: 'Sonny@CooForRent.com',
    sameAs: [
      // Add social media profiles when available
      // 'https://www.linkedin.com/company/cooforrent',
      // 'https://twitter.com/cooforrent',
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    foundingDate: '2025',
    serviceType: 'Fractional COO Services',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fractional COO Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Chaos to Clarity',
            description: '90-day intensive engagement to stabilize operations and implement core systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interim COO',
            description: '3–6 month embedded leadership to build operational infrastructure',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'On-Call Retainer',
            description: 'Flexible monthly retainer for ongoing operational guidance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Operations Overhaul',
            description: 'Complete assessment and redesign of operational systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dispatch & Field Service Efficiency',
            description: 'Optimize scheduling, routing, and field operations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Margin & Profit Optimization',
            description: 'Identify profit leaks and optimize pricing strategies',
          },
        },
      ],
    },
    knowsAbout: [
      'Operations Management',
      'Field Service',
      'Construction Operations',
      'Franchise Systems',
      'Dispatch Operations',
      'Team Leadership',
      'Process Implementation',
      'Profit Optimization',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
