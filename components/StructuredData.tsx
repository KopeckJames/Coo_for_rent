export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'COO for Rent',
    alternateName: 'COOforRent',
    description: 'Fractional COO services in Texas. 25+ years experience in operations management, field service, construction, and franchise systems. Expert operational leadership for scaling businesses.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com'}/logo.png`,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com'}/sonny_headshot.jpg`,
    telephone: '+1-830-837-8060',
    email: 'Sonny@CooForRent.com',
    sameAs: [
      'https://www.linkedin.com/company/coo-for-rent/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'TX',
      addressCountry: 'US',
      addressLocality: 'Texas',
    },
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Sonny',
      jobTitle: 'Fractional COO',
      description: '25+ years experience in operations, field service, construction, and franchise systems. Led 50+ teams across 4 major cities.',
    },
    priceRange: '$$',
    serviceType: ['Fractional COO Services', 'Operations Consulting', 'Interim COO', 'Operations Management'],
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'State',
        name: 'Texas',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fractional COO Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Working Session',
            description: '90-minute working session to identify root causes of one priority operational challenge, with a prioritized action plan',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '30-Day Sprint',
            description: 'Identify root causes, implement practical solutions, and establish measurable performance standards within 30 days',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Month-to-Month Retainer',
            description: 'Ongoing operations and leadership coaching with up to 16 hours of consulting support per month',
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
