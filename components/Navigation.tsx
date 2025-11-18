'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { throttle } from '@/utils/performance';
import { navigationLinks } from '@/data/content';
import { smoothScrollToId, getCurrentSection } from '@/utils/smoothScroll';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showConsultDropdown, setShowConsultDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map(link => link.id);
      const currentSection = getCurrentSection(sections, 100);
      
      if (currentSection) {
        setActiveSection(currentSection);
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
    
    // Use smooth scroll utility with navigation offset
    smoothScrollToId(targetId, {
      offset: 64, // Height of fixed navigation
      duration: 800,
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-white border-b border-neutral-gray200 shadow-sm" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 tablet:h-20 w-full">
          {/* Desktop Navigation */}
          <div className="hidden tablet:block">
            <ul className="flex items-center space-x-6 desktop:space-x-8">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                    className={`text-sm desktop:text-base font-medium transition-colors min-h-[44px] flex items-center ${
                      activeSection === link.id
                        ? 'text-primary-black border-b-2 border-primary-black pb-1'
                        : 'text-neutral-gray800 hover:text-primary-black'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              
              {/* Free Consultation Button with Dropdown */}
              <li className="relative">
                <button
                  onMouseEnter={() => setShowConsultDropdown(true)}
                  onMouseLeave={() => setShowConsultDropdown(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(e, '#contact');
                  }}
                  className="bg-primary-black text-primary-white px-6 py-2 text-sm desktop:text-base font-semibold hover:bg-neutral-gray900 transition-colors min-h-[44px] flex items-center"
                >
                  Free Consultation
                </button>
                
                {/* Dropdown with Infographic */}
                {showConsultDropdown && (
                  <div
                    className="absolute top-full right-0 mt-2 w-[400px] bg-white shadow-2xl border-2 border-primary-black z-50"
                    onMouseEnter={() => setShowConsultDropdown(true)}
                    onMouseLeave={() => setShowConsultDropdown(false)}
                  >
                    <div className="relative w-full h-[500px]">
                      <Image
                        src="/recs/consult.png"
                        alt="Free Consultation Information"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="tablet:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-primary-black hover:text-neutral-gray800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-black p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
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
