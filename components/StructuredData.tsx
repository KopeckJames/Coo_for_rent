export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'COOforRent',
    description: 'Professional fractional COO services for growing businesses',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com'}/logo.svg`,
    sameAs: [
      // Add social media profiles when available
      // 'https://www.linkedin.com/company/cooforrent',
      // 'https://twitter.com/cooforrent',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    serviceType: 'Fractional COO Services',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fractional COO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Strategic Planning',
            description: 'Develop and execute comprehensive operational strategies aligned with business goals',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Optimization',
            description: 'Streamline operations and improve efficiency across all business functions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Team Leadership',
            description: 'Build and mentor high-performing operational teams',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
