/**
 * Performance optimization utilities
 */

/**
 * Debounce function to limit how often a function can be called
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to ensure a function is called at most once per specified time period
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Request animation frame wrapper for smooth animations
 * @param callback - Function to call on next frame
 * @returns Request ID
 */
export function rafThrottle<T extends (...args: any[]) => any>(
  callback: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;

  return function executedFunction(...args: Parameters<T>) {
    if (rafId !== null) {
      return;
    }

    rafId = requestAnimationFrame(() => {
      callback(...args);
      rafId = null;
    });
  };
}
