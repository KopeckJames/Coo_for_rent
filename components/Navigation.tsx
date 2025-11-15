'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { imageSizePresets } from '@/utils/imageOptimization';
import { throttle } from '@/utils/performance';
import { navigationLinks } from '@/data/content';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100; // Offset for fixed nav

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Throttle scroll handler to improve performance (max once per 100ms)
    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

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
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-black border-b border-neutral-gray800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 tablet:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-lg tablet:text-xl font-bold text-primary-white hover:text-neutral-gray200 transition-colors flex items-center"
            >
              <Image
                src="/logo.svg"
                alt="COOforRent Logo"
                width={120}
                height={40}
                priority
                sizes={imageSizePresets.logo}
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden tablet:block">
            <div className="flex items-center space-x-6 desktop:space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm desktop:text-base font-medium transition-colors min-h-[44px] flex items-center ${
                    activeSection === link.id
                      ? 'text-primary-white border-b-2 border-primary-white pb-1'
                      : 'text-neutral-gray200 hover:text-primary-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="tablet:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-primary-white hover:text-neutral-gray200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
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
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
}
