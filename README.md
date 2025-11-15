# COOforRent Website

A modern, minimalist website for COOforRent - Fractional COO Services.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/              # Next.js app router pages
├── components/       # React components
├── styles/          # Additional styles
├── utils/           # Utility functions
├── public/          # Static assets
└── .kiro/           # Kiro specs and configuration
```

## Design Philosophy

The website follows a minimalist black and white aesthetic inspired by Apple's design philosophy, emphasizing:

- Clean typography
- Generous whitespace
- Smooth animations
- Responsive design
- Performance optimization

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=contact@cooforrent.com

# Monitoring (Optional - for production)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_AUTH_TOKEN=your_sentry_auth_token
SENTRY_ORG=your_org_name
SENTRY_PROJECT=your_project_name

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
```

See `.env.example` for a complete list of environment variables.

## Deployment

The website is configured for deployment on Vercel. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables
4. Deploy

## Monitoring

The website includes comprehensive monitoring and error tracking:

- **Sentry**: Error tracking and performance monitoring
- **Vercel Analytics**: Core Web Vitals tracking
- **Google Analytics**: User behavior analytics (optional)

See [docs/MONITORING.md](docs/MONITORING.md) for setup instructions.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run analyze` - Analyze bundle size

## Documentation

- [Deployment Guide](docs/DEPLOYMENT.md)
- [Monitoring Guide](docs/MONITORING.md)
- [Accessibility & SEO](docs/ACCESSIBILITY_SEO.md)
- [Image Optimization](docs/IMAGE_OPTIMIZATION.md)
