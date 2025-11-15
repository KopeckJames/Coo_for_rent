# Image Optimization Guide

This document explains the image optimization implementation for the COOforRent website.

## Overview

The website uses Next.js Image component for automatic image optimization, including:
- Modern image formats (AVIF, WebP)
- Responsive image sizing
- Lazy loading for below-the-fold images
- Optimized caching

## Configuration

### Next.js Config (`next.config.js`)

```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

- **formats**: Serves AVIF first (best compression), falls back to WebP, then original format
- **deviceSizes**: Breakpoints for responsive images
- **imageSizes**: Sizes for smaller images (icons, thumbnails)
- **minimumCacheTTL**: Cache images for at least 60 seconds

## Image Utility Functions

The `utils/imageOptimization.ts` file provides:

### Size Presets

```typescript
imageSizePresets.hero        // Full viewport images
imageSizePresets.aboutImage  // About section image (responsive)
imageSizePresets.serviceIcon // Service card icons
imageSizePresets.logo        // Navigation logo
```

### Quality Presets

```typescript
imageQualityPresets.high      // 90 - High quality images
imageQualityPresets.standard  // 85 - Standard quality (default)
imageQualityPresets.low       // 75 - Lower quality for large images
imageQualityPresets.icon      // 100 - Icons and logos
```

## Usage Examples

### About Section Image (Lazy Loaded)

```tsx
<Image
  src={imageUrl}
  alt="About COOforRent"
  fill
  sizes={imageSizePresets.aboutImage}
  className="object-cover"
  loading="lazy"
  quality={imageQualityPresets.standard}
/>
```

### Logo (Priority Loading)

```tsx
<Image
  src="/logo.svg"
  alt="COOforRent Logo"
  width={120}
  height={40}
  priority
  sizes={imageSizePresets.logo}
  className="h-8 w-auto"
/>
```

### Service Icons (Conditional)

```tsx
{icon.startsWith('/') || icon.startsWith('http') ? (
  <Image
    src={icon}
    alt={`${title} icon`}
    fill
    sizes={imageSizePresets.serviceIcon}
    className="object-contain"
    loading="lazy"
    quality={imageQualityPresets.icon}
  />
) : (
  <span>{icon}</span>
)}
```

## Loading Strategies

### Priority Loading
Used for above-the-fold images (logo, hero images):
```tsx
<Image priority ... />
```

### Lazy Loading
Used for below-the-fold images (about section, service icons):
```tsx
<Image loading="lazy" ... />
```

## Image Placement

Place images in the `public/` directory:
- `/public/logo.svg` - Navigation logo
- `/public/about-placeholder.svg` - About section image
- `/public/icons/` - Service icons (if needed)

## Performance Benefits

1. **Automatic Format Selection**: Serves AVIF/WebP to supported browsers
2. **Responsive Images**: Serves appropriately sized images per device
3. **Lazy Loading**: Defers loading of below-fold images
4. **Optimized Caching**: Reduces server load and improves load times
5. **Quality Optimization**: Balances file size and visual quality

## Best Practices

1. Always specify `alt` text for accessibility
2. Use `priority` for above-the-fold images
3. Use `loading="lazy"` for below-the-fold images
4. Specify appropriate `sizes` for responsive images
5. Use `fill` for images with unknown dimensions
6. Provide `width` and `height` when dimensions are known
7. Use appropriate quality settings based on image type

## Adding New Images

1. Place image in `/public/` directory
2. Import Image component: `import Image from 'next/image'`
3. Use appropriate size preset from `imageSizePresets`
4. Set quality from `imageQualityPresets`
5. Choose loading strategy (`priority` or `lazy`)

Example:
```tsx
import Image from 'next/image';
import { imageSizePresets, imageQualityPresets } from '@/utils/imageOptimization';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  sizes={imageSizePresets.aboutImage}
  loading="lazy"
  quality={imageQualityPresets.standard}
/>
```
