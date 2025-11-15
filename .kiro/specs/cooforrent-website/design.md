# Design Document - COOforRent Website

## Overview

The COOforRent website will be a modern, single-page application (SPA) with smooth scrolling between sections, built with a focus on minimalism and performance. The design follows Apple's design philosophy with a black and white color scheme, clean typography, and generous whitespace. The site will be fully responsive and optimized for all devices.

### Technology Stack

- **Frontend Framework**: React with Next.js for server-side rendering and optimal performance
- **Styling**: Tailwind CSS for utility-first styling with custom black/white theme
- **Animations**: Framer Motion for smooth, performant animations
- **Forms**: React Hook Form with validation
- **Deployment**: Vercel for seamless Next.js deployment

## Architecture

### High-Level Structure

```
┌─────────────────────────────────────┐
│         Navigation Bar              │
├─────────────────────────────────────┤
│         Hero Section                │
├─────────────────────────────────────┤
│         About Section               │
├─────────────────────────────────────┤
│         Services Section            │
├─────────────────────────────────────┤
│         Contact Section             │
├─────────────────────────────────────┤
│         Footer                      │
└─────────────────────────────────────┘
```

### Component Hierarchy

```
App
├── Layout
│   ├── Navigation
│   │   ├── Logo
│   │   ├── NavLinks (Desktop)
│   │   └── MobileMenu
│   └── Footer
└── HomePage
    ├── HeroSection
    ├── AboutSection
    ├── ServicesSection
    │   └── ServiceCard (multiple)
    └── ContactSection
        └── ContactForm
```

## Components and Interfaces

### 1. Navigation Component

**Purpose**: Provides site-wide navigation with smooth scrolling to sections

**Props Interface**:
```typescript
interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}
```

**Features**:
- Fixed position header that remains visible during scroll
- Smooth scroll behavior when clicking nav links
- Active section highlighting
- Mobile hamburger menu with slide-in animation
- Black background with white text
- Minimal border or shadow for subtle separation

### 2. HeroSection Component

**Purpose**: Creates immediate impact with company name and value proposition

**Props Interface**:
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}
```

**Design Details**:
- Full viewport height (100vh)
- Centered content with large typography
- Company name in bold, large font (4xl-6xl)
- Subtitle/tagline in lighter weight
- Single CTA button with hover animation
- Fade-in animation on page load
- Black background with white text

### 3. AboutSection Component

**Purpose**: Explains COOforRent's mission and fractional COO model

**Props Interface**:
```typescript
interface AboutSectionProps {
  heading: string;
  content: string[];
  imageUrl?: string;
}
```

**Design Details**:
- Two-column layout on desktop (text + optional image/graphic)
- Single column on mobile
- White background with black text for contrast
- Generous padding and line height for readability
- Fade-in on scroll animation

### 4. ServicesSection Component

**Purpose**: Showcases fractional COO service offerings

**Props Interface**:
```typescript
interface ServicesSectionProps {
  heading: string;
  services: Service[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
```

**Design Details**:
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- Black background with white text
- Each service card has subtle border
- Hover effect: slight scale and shadow
- Staggered fade-in animation on scroll

### 5. ServiceCard Component

**Purpose**: Displays individual service information

**Props Interface**:
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  index: number;
}
```

**Design Details**:
- Minimal card with border (1px white)
- Padding: 2rem
- Icon at top (if provided)
- Title in bold
- Description in regular weight
- Hover: transform scale(1.02) with transition
- Animation delay based on index for stagger effect

### 6. ContactSection Component

**Purpose**: Provides contact form for inquiries

**Props Interface**:
```typescript
interface ContactSectionProps {
  heading: string;
  onSubmit: (data: ContactFormData) => Promise<void>;
}
```

**Design Details**:
- Centered form with max-width constraint
- White background with black text
- Form fields with minimal styling (border-bottom only)
- Submit button with hover animation
- Success/error message display area

### 7. ContactForm Component

**Purpose**: Handles user input and validation for contact inquiries

**Props Interface**:
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
```

**Validation Rules**:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Message: Required, min 10 characters

**Design Details**:
- Minimal input styling with bottom border
- Focus state: border color change
- Error messages below fields in red accent
- Disabled state during submission
- Success message with fade-in animation

## Data Models

### Service Model

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
}
```

### ContactFormData Model

```typescript
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: Date;
}
```

### NavigationLink Model

```typescript
interface NavigationLink {
  id: string;
  label: string;
  href: string;
  order: number;
}
```

## Design System

### Color Palette

```typescript
const colors = {
  primary: {
    black: '#000000',
    white: '#FFFFFF',
  },
  neutral: {
    gray100: '#F5F5F5',
    gray200: '#E5E5E5',
    gray800: '#1A1A1A',
    gray900: '#0A0A0A',
  },
  accent: {
    error: '#DC2626',
    success: '#16A34A',
  }
}
```

### Typography

```typescript
const typography = {
  fontFamily: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSize: {
    hero: '4rem',      // 64px
    h1: '3rem',        // 48px
    h2: '2.25rem',     // 36px
    h3: '1.875rem',    // 30px
    body: '1.125rem',  // 18px
    small: '0.875rem', // 14px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  }
}
```

### Spacing Scale

```typescript
const spacing = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '6rem',  // 96px
}
```

### Animations

```typescript
const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  scaleOnHover: {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.2 }
  },
  slideIn: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.4 }
  }
}
```

## Error Handling

### Form Validation Errors

- Display inline error messages below form fields
- Use red accent color for error text
- Prevent form submission until all errors are resolved
- Clear errors when user corrects input

### Network Errors

- Display user-friendly error message if form submission fails
- Provide retry option
- Log errors to console for debugging
- Maintain form data so user doesn't lose input

### Loading States

- Show loading spinner on form submit button
- Disable form inputs during submission
- Provide visual feedback for all async operations

## Testing Strategy

### Unit Testing

- Test form validation logic
- Test utility functions (scroll behavior, animations)
- Test data transformation functions
- Use Jest and React Testing Library

### Component Testing

- Test component rendering with different props
- Test user interactions (clicks, form inputs)
- Test responsive behavior at different breakpoints
- Test accessibility features (keyboard navigation, ARIA labels)

### Integration Testing

- Test navigation flow between sections
- Test form submission end-to-end
- Test scroll animations and triggers
- Use Playwright for browser automation

### Visual Regression Testing

- Capture screenshots of key pages/sections
- Compare against baseline images
- Test across different browsers and devices
- Use Percy or Chromatic for visual testing

### Accessibility Testing

- Ensure WCAG 2.1 AA compliance
- Test keyboard navigation
- Test screen reader compatibility
- Validate color contrast ratios
- Use axe-core for automated accessibility testing

## Performance Optimization

### Image Optimization

- Use Next.js Image component for automatic optimization
- Implement lazy loading for below-fold images
- Use WebP format with fallbacks
- Serve responsive images based on device size

### Code Splitting

- Lazy load components not needed for initial render
- Split vendor bundles
- Use dynamic imports for heavy components

### Caching Strategy

- Implement service worker for offline support
- Cache static assets aggressively
- Use stale-while-revalidate for dynamic content

### Metrics to Monitor

- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.5s
- Cumulative Layout Shift (CLS) < 0.1

## Responsive Breakpoints

```typescript
const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
}
```

### Layout Adjustments

- **Mobile (< 768px)**: Single column, hamburger menu, stacked sections
- **Tablet (768px - 1023px)**: Two-column grids, expanded menu
- **Desktop (≥ 1024px)**: Three-column grids, full navigation, optimal spacing
- **Wide (≥ 1440px)**: Max-width container, increased spacing

## Deployment Considerations

### Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://cooforrent.com
CONTACT_FORM_ENDPOINT=/api/contact
EMAIL_SERVICE_API_KEY=<secret>
```

### Build Process

1. Run linting and type checking
2. Execute test suite
3. Build production bundle
4. Optimize assets
5. Deploy to Vercel

### Monitoring

- Set up error tracking (Sentry)
- Monitor Core Web Vitals
- Track form submission success rate
- Monitor API endpoint performance
