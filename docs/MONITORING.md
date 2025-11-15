# Monitoring and Error Tracking Guide

This guide covers the monitoring and error tracking setup for the COOforRent website.

## Overview

The website uses multiple monitoring solutions:

1. **Sentry** - Error tracking and performance monitoring
2. **Vercel Analytics** - Core Web Vitals and performance metrics
3. **Google Analytics** (Optional) - User behavior and traffic analytics

## Sentry Setup

### 1. Create Sentry Account

1. Sign up at https://sentry.io
2. Create a new project for Next.js
3. Copy your DSN (Data Source Name)

### 2. Configure Environment Variables

Add these variables to your `.env.local` file and Vercel:

```bash
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your_auth_token
SENTRY_ORG=your-org-name
SENTRY_PROJECT=your-project-name
```

### 3. Sentry Features

The integration includes:

- **Error Tracking**: Automatic capture of JavaScript errors
- **Performance Monitoring**: Transaction tracking with 10% sample rate in production
- **Session Replay**: 10% of sessions, 100% of error sessions
- **Source Maps**: Automatic upload for better error debugging
- **Release Tracking**: Automatic release detection

### 4. Viewing Errors

1. Log in to Sentry dashboard
2. Navigate to Issues to see errors
3. Click on an issue to see:
   - Stack trace
   - User context
   - Breadcrumbs (user actions leading to error)
   - Device and browser information

### 5. Error Filtering

The configuration filters out:
- Browser extension errors
- Network errors (Failed to fetch)
- Common non-critical errors

## Core Web Vitals Monitoring

### Metrics Tracked

The website automatically tracks these Core Web Vitals:

1. **LCP (Largest Contentful Paint)**: Loading performance
   - Good: < 2.5s
   - Needs Improvement: 2.5s - 4.0s
   - Poor: > 4.0s

2. **FID (First Input Delay)**: Interactivity
   - Good: < 100ms
   - Needs Improvement: 100ms - 300ms
   - Poor: > 300ms

3. **CLS (Cumulative Layout Shift)**: Visual stability
   - Good: < 0.1
   - Needs Improvement: 0.1 - 0.25
   - Poor: > 0.25

4. **FCP (First Contentful Paint)**: Initial load
   - Good: < 1.8s
   - Needs Improvement: 1.8s - 3.0s
   - Poor: > 3.0s

5. **TTFB (Time to First Byte)**: Server response
   - Good: < 800ms
   - Needs Improvement: 800ms - 1800ms
   - Poor: > 1800ms

6. **INP (Interaction to Next Paint)**: Responsiveness
   - Good: < 200ms
   - Needs Improvement: 200ms - 500ms
   - Poor: > 500ms

### Viewing Web Vitals

#### Vercel Analytics

1. Go to your Vercel project dashboard
2. Click on "Analytics" tab
3. View real-time Core Web Vitals data
4. See performance trends over time

#### Google Analytics (Optional)

Web Vitals are automatically sent to Google Analytics if configured:

1. Set up Google Analytics 4 property
2. Add measurement ID to environment variables:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. View Web Vitals in GA4 under Events

## Custom Event Tracking

### Track Custom Events

Use the monitoring utilities to track custom events:

```typescript
import { trackEvent } from '@/utils/monitoring';

// Track form submission
trackEvent('submit', 'Contact Form', 'Homepage');

// Track button click
trackEvent('click', 'CTA Button', 'Hero Section');

// Track with value
trackEvent('purchase', 'Service', 'Premium Plan', 999);
```

### Track Page Views

Page views are automatically tracked, but you can manually track:

```typescript
import { trackPageView } from '@/utils/monitoring';

trackPageView('/custom-page');
```

## Performance Monitoring

### Monitoring Performance in Production

1. **Vercel Dashboard**
   - View deployment performance
   - Check build times
   - Monitor function execution times

2. **Sentry Performance**
   - View transaction traces
   - Identify slow API calls
   - Monitor database queries

3. **Browser DevTools**
   - Use Lighthouse for audits
   - Check Network tab for slow resources
   - Use Performance tab for profiling

### Performance Thresholds

The website aims for:
- Initial page load: < 3 seconds
- Time to Interactive: < 3.5 seconds
- API response time: < 500ms
- Image load time: < 2 seconds

## Error Handling Best Practices

### Client-Side Errors

Errors are automatically captured by Sentry. For custom error handling:

```typescript
import * as Sentry from '@sentry/nextjs';

try {
  // Your code
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      section: 'contact-form',
    },
    extra: {
      formData: data,
    },
  });
}
```

### Server-Side Errors

API routes automatically report errors to Sentry:

```typescript
import * as Sentry from '@sentry/nextjs';

export async function POST(request: Request) {
  try {
    // Your code
  } catch (error) {
    Sentry.captureException(error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Alerts and Notifications

### Sentry Alerts

Configure alerts in Sentry dashboard:

1. Go to Alerts → Create Alert Rule
2. Set conditions (e.g., error rate > 10/minute)
3. Choose notification channels (email, Slack, etc.)

### Recommended Alerts

- Error rate exceeds threshold
- New error types detected
- Performance degradation (LCP > 4s)
- High error volume on specific pages

## Privacy and GDPR Compliance

### Data Collection

The monitoring setup respects user privacy:

- No personally identifiable information (PII) is collected
- IP addresses are anonymized
- Users can opt-out of analytics
- Session replays exclude sensitive form data

### Cookie Consent

If required by your jurisdiction, implement cookie consent:

```typescript
// Only initialize analytics after consent
if (userConsent) {
  initGA(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!);
}
```

## Troubleshooting

### Sentry Not Reporting Errors

**Issue**: Errors not appearing in Sentry
**Solutions**:
- Verify `NEXT_PUBLIC_SENTRY_DSN` is set correctly
- Check Sentry project settings
- Ensure errors aren't filtered by `ignoreErrors` config
- Check browser console for Sentry initialization errors

### Web Vitals Not Tracked

**Issue**: No Web Vitals data in analytics
**Solutions**:
- Verify analytics is configured correctly
- Check browser console for errors
- Ensure `WebVitals` component is rendered
- Test in production environment (some metrics only work in production)

### High Error Rate

**Issue**: Sudden spike in errors
**Solutions**:
- Check recent deployments
- Review Sentry issues for patterns
- Check external service status (APIs, CDNs)
- Review server logs in Vercel

## Monitoring Checklist

Before going to production:

- [ ] Sentry DSN configured in environment variables
- [ ] Source maps uploading correctly
- [ ] Web Vitals tracking verified
- [ ] Error alerts configured
- [ ] Performance thresholds set
- [ ] Privacy policy updated
- [ ] Cookie consent implemented (if required)
- [ ] Test error reporting in staging
- [ ] Verify analytics tracking

## Resources

- [Sentry Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Web Vitals](https://web.dev/vitals/)
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Google Analytics 4](https://support.google.com/analytics/answer/10089681)
- [Next.js Monitoring](https://nextjs.org/docs/advanced-features/measuring-performance)

## Support

For monitoring issues:
- Sentry Support: https://sentry.io/support/
- Vercel Support: https://vercel.com/support
- Web Vitals Issues: https://github.com/GoogleChrome/web-vitals
