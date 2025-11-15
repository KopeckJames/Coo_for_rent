/**
 * Image optimization utilities for Next.js Image component
 */

/**
 * Generate responsive image sizes string based on breakpoints
 * @param sizes - Object with breakpoint keys and size values
 * @returns Formatted sizes string for Next.js Image component
 */
export function generateImageSizes(sizes: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  default: string;
}): string {
  const sizeArray: string[] = [];

  if (sizes.mobile) {
    sizeArray.push(`(max-width: 768px) ${sizes.mobile}`);
  }
  if (sizes.tablet) {
    sizeArray.push(`(max-width: 1024px) ${sizes.tablet}`);
  }
  if (sizes.desktop) {
    sizeArray.push(`(max-width: 1440px) ${sizes.desktop}`);
  }
  sizeArray.push(sizes.default);

  return sizeArray.join(', ');
}

/**
 * Common image size configurations for different use cases
 */
export const imageSizePresets = {
  hero: generateImageSizes({
    mobile: '100vw',
    tablet: '100vw',
    desktop: '100vw',
    default: '1920px',
  }),
  aboutImage: generateImageSizes({
    mobile: '100vw',
    tablet: '50vw',
    default: '600px',
  }),
  serviceIcon: generateImageSizes({
    mobile: '48px',
    tablet: '64px',
    default: '64px',
  }),
  logo: generateImageSizes({
    default: '120px',
  }),
};

/**
 * Image quality settings based on image type
 */
export const imageQualityPresets = {
  high: 90,
  standard: 85,
  low: 75,
  icon: 100,
};
