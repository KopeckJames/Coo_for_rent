# Deployment Guide

This guide covers deploying the COOforRent website to Vercel.

## Prerequisites

- GitHub repository with the project code
- Vercel account (sign up at https://vercel.com)
- Environment variables configured

## Vercel Deployment Steps

### 1. Connect Repository to Vercel

1. Log in to your Vercel account at https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Select the repository containing the COOforRent website

### 2. Configure Project Settings

Vercel will automatically detect Next.js and configure most settings. Verify:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. Set Up Environment Variables

In the Vercel project settings, add the following environment variables:

#### Required Variables

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=re_your_actual_api_key
RESEND_FROM_EMAIL=noreply@your-domain.com
CONTACT_EMAIL=contact@cooforrent.com
```

#### Optional Variables (for monitoring)

```
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_AUTH_TOKEN=your_sentry_auth_token
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

**Note**: Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Keep sensitive keys without this prefix.

### 4. Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., cooforrent.com)
3. Follow Vercel's instructions to configure DNS records
4. Update `NEXT_PUBLIC_SITE_URL` to match your custom domain

### 5. Deploy

1. Click "Deploy" to start the initial deployment
2. Vercel will build and deploy your site
3. You'll receive a deployment URL (e.g., your-project.vercel.app)

## Automatic Deployments

Vercel automatically deploys:

- **Production**: Commits to the `main` branch
- **Preview**: Pull requests and other branches

## Build Configuration

The project includes a `vercel.json` file with:

- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Cache headers for static assets
- Regional deployment configuration

## Environment-Specific Builds

### Production
```bash
npm run build
npm run start
```

### Development
```bash
npm run dev
```

## Monitoring Deployment

### Build Logs
- View build logs in the Vercel dashboard
- Check for any build errors or warnings

### Performance
- Vercel automatically monitors Core Web Vitals
- View analytics in the Vercel dashboard under "Analytics"

### Error Tracking
- Errors are tracked via Sentry (if configured)
- View error reports in your Sentry dashboard

## Rollback

If a deployment has issues:

1. Go to the Vercel dashboard
2. Navigate to Deployments
3. Find a previous working deployment
4. Click "Promote to Production"

## Troubleshooting

### Build Failures

**Issue**: Build fails with dependency errors
**Solution**: Ensure `package-lock.json` is committed and up to date

**Issue**: Environment variables not working
**Solution**: Verify variables are set in Vercel dashboard and prefixed correctly

### Performance Issues

**Issue**: Slow page loads
**Solution**: 
- Check image optimization settings
- Review bundle size with `npm run analyze`
- Verify caching headers are applied

### Email Sending Issues

**Issue**: Contact form not sending emails
**Solution**:
- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for API errors
- Ensure sender email is verified in Resend

## Security Checklist

- [ ] All environment variables are set in Vercel (not in code)
- [ ] Sensitive keys are not prefixed with `NEXT_PUBLIC_`
- [ ] Custom domain has SSL/TLS enabled (automatic with Vercel)
- [ ] Security headers are configured in `vercel.json`
- [ ] API routes validate input data

## Post-Deployment Verification

After deployment, verify:

1. Site loads correctly at production URL
2. All sections render properly
3. Navigation works smoothly
4. Contact form submits successfully
5. Images load and are optimized
6. Mobile responsiveness works
7. No console errors in browser
8. Core Web Vitals are within acceptable ranges

## Continuous Integration

The project is configured for CI/CD:

- Automatic builds on push to main
- Preview deployments for pull requests
- Automatic rollback on build failures

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs
