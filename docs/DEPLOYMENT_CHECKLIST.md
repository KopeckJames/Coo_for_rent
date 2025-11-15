# Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

### Code Quality
- [ ] All tests passing (`npm run test`)
- [ ] No linting errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors

### Environment Variables
- [ ] `.env.local` configured for local development
- [ ] All required variables added to Vercel dashboard
- [ ] Sensitive keys not committed to repository
- [ ] `NEXT_PUBLIC_SITE_URL` set to production domain

### Content
- [ ] All placeholder content replaced with real content
- [ ] Images optimized and added to `/public`
- [ ] Contact email configured correctly
- [ ] Company information accurate

### SEO & Metadata
- [ ] Page titles and descriptions set
- [ ] Open Graph images created (1200x630px)
- [ ] Robots.txt configured
- [ ] Sitemap generated
- [ ] Structured data implemented

## Vercel Setup

### Repository Connection
- [ ] Repository connected to Vercel
- [ ] Correct branch selected for production
- [ ] Build settings verified

### Domain Configuration
- [ ] Custom domain added
- [ ] DNS records configured
- [ ] SSL certificate active
- [ ] `NEXT_PUBLIC_SITE_URL` updated to custom domain

### Environment Variables (Vercel)
Required:
- [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] `RESEND_API_KEY`
- [ ] `RESEND_FROM_EMAIL`
- [ ] `CONTACT_EMAIL`

Optional (Monitoring):
- [ ] `NEXT_PUBLIC_SENTRY_DSN`
- [ ] `SENTRY_AUTH_TOKEN`
- [ ] `SENTRY_ORG`
- [ ] `SENTRY_PROJECT`
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Monitoring Setup

### Sentry
- [ ] Sentry project created
- [ ] DSN added to environment variables
- [ ] Source maps uploading configured
- [ ] Error alerts configured
- [ ] Test error sent and received

### Analytics
- [ ] Google Analytics property created (if using)
- [ ] Measurement ID added to environment variables
- [ ] Analytics tracking verified

### Vercel Analytics
- [ ] Vercel Analytics enabled in project settings
- [ ] Core Web Vitals monitoring active

## Testing

### Functionality
- [ ] Homepage loads correctly
- [ ] Navigation works smoothly
- [ ] All sections render properly
- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] Success/error messages display

### Performance
- [ ] Lighthouse score > 90 for Performance
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Images loading optimized
- [ ] No console errors

### Responsive Design
- [ ] Mobile view (320px - 767px)
- [ ] Tablet view (768px - 1023px)
- [ ] Desktop view (1024px+)
- [ ] Touch interactions work on mobile
- [ ] Hamburger menu functions properly

### Cross-Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] ARIA labels present
- [ ] Focus indicators visible

## Post-Deployment

### Verification
- [ ] Production URL accessible
- [ ] All pages load without errors
- [ ] Contact form sends emails
- [ ] Analytics tracking data
- [ ] Error tracking working (test with intentional error)

### Monitoring
- [ ] Check Vercel deployment logs
- [ ] Verify Core Web Vitals in Vercel dashboard
- [ ] Check Sentry for any errors
- [ ] Monitor email delivery

### Documentation
- [ ] Update README with production URL
- [ ] Document any deployment-specific configurations
- [ ] Share access credentials with team (if applicable)

## Rollback Plan

If issues occur:
1. Go to Vercel dashboard
2. Navigate to Deployments
3. Find previous working deployment
4. Click "Promote to Production"

## Support Contacts

- Vercel Support: https://vercel.com/support
- Sentry Support: https://sentry.io/support
- Resend Support: https://resend.com/support

## Notes

- First deployment may take longer than subsequent deployments
- DNS propagation can take up to 48 hours
- Monitor error rates closely for first 24 hours after deployment
- Keep staging environment for testing future changes
