'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-400 mb-8">
          We apologize for the inconvenience. Our team has been notified and is working on a fix.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
