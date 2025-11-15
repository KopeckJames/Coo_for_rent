'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';
import { reportWebVitals } from '@/utils/monitoring';

/**
 * Web Vitals reporting component
 * This component captures and reports Core Web Vitals metrics
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    reportWebVitals(metric);
  });

  return null;
}
