'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { prefersReducedMotion } from '@/utils/animations';
import { navigationLinks } from '@/data/content';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Import smoothScrollToId dynamically to avoid SSR issues
    import('@/utils/smoothScroll').then(({ smoothScrollToId }) => {
      smoothScrollToId(targetId, {
        offset: 64, // Height of fixed navigation
        duration: 800,
        callback: onClose,
      });
    });
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const panelVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  };

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const animationDuration = reducedMotion ? 0.01 : 0.3;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-primary-black bg-opacity-50 z-40 tablet:hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: animationDuration }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-64 mobile:w-72 bg-primary-white z-50 tablet:hidden will-change-transform shadow-2xl"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: animationDuration,
              ease: [0.4, 0, 0.2, 1],
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={onClose}
                  className="text-primary-black hover:text-neutral-gray800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-black p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close mobile menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6" aria-label="Mobile navigation">
                <ul className="space-y-2">
                  {navigationLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        duration: animationDuration,
                        delay: reducedMotion ? 0 : index * 0.05,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block text-lg mobile:text-xl font-medium text-primary-black hover:text-neutral-gray800 transition-colors py-3 min-h-[44px] flex items-center"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
