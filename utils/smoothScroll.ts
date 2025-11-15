/**
 * Smooth scroll utilities for consistent cross-browser behavior
 * Respects user's reduced motion preferences
 */

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Easing function for smooth scroll animation
 * Uses cubic bezier curve for natural motion
 */
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Smooth scroll to a target element or position
 * Falls back to instant scroll if user prefers reduced motion
 */
export const smoothScrollTo = (
  target: HTMLElement | number,
  options: {
    offset?: number;
    duration?: number;
    callback?: () => void;
  } = {}
): void => {
  const { offset = 0, duration = 800, callback } = options;

  // Get target position
  const targetPosition =
    typeof target === 'number'
      ? target
      : target.getBoundingClientRect().top + window.pageYOffset;

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - offset;

  // If user prefers reduced motion, scroll instantly
  if (prefersReducedMotion()) {
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'auto',
    });
    callback?.();
    return;
  }

  // Use native smooth scroll if supported and distance is small
  if ('scrollBehavior' in document.documentElement.style && Math.abs(distance) < 2000) {
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
    
    // Estimate when scroll completes for callback
    if (callback) {
      setTimeout(callback, duration);
    }
    return;
  }

  // Custom smooth scroll animation for better control
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    } else {
      callback?.();
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Smooth scroll to an element by ID
 */
export const smoothScrollToId = (
  elementId: string,
  options?: {
    offset?: number;
    duration?: number;
    callback?: () => void;
  }
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    smoothScrollTo(element, options);
  }
};

/**
 * Smooth scroll to top of page
 */
export const smoothScrollToTop = (
  options?: {
    duration?: number;
    callback?: () => void;
  }
): void => {
  smoothScrollTo(0, options);
};

/**
 * Get the currently visible section based on scroll position
 * Useful for updating navigation active states
 */
export const getCurrentSection = (sectionIds: string[], offset: number = 100): string | null => {
  const scrollPosition = window.pageYOffset + offset;

  // Find the section that contains the current scroll position
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const element = document.getElementById(sectionIds[i]);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return sectionIds[i];
      }
    }
  }

  // Default to first section if at top of page
  if (scrollPosition < 100) {
    return sectionIds[0];
  }

  return null;
};

/**
 * Debounce function for scroll event handlers
 * Improves performance by limiting how often a function is called
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
