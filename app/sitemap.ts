import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com';
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Add future blog posts and pages here as you create them
    // Example:
    // {
    //   url: `${baseUrl}/blog/signs-you-need-fractional-coo`,
    //   lastModified: new Date('2025-01-15'),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
