'use client';

import { useEffect } from 'react';

interface NavigationLink {
  id: string;
  label: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-primary-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 mobile:w-72 bg-primary-black z-50 transform transition-transform duration-300 ease-in-out tablet:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="text-primary-white hover:text-neutral-gray200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`transform transition-all duration-300 ${
                    isOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-lg mobile:text-xl font-medium text-primary-white hover:text-neutral-gray200 transition-colors py-3 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
