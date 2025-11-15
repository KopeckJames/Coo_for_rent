import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';
import Navigation from './Navigation';
import Footer from './Footer';

expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('HeroSection should have no accessibility violations', async () => {
    const { container } = render(
      <HeroSection
        title="Test Title"
        subtitle="Test Subtitle"
        ctaText="Get Started"
        onCtaClick={() => {}}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('AboutSection should have no accessibility violations', async () => {
    const { container } = render(
      <AboutSection
        heading="About Us"
        content={['Test paragraph 1', 'Test paragraph 2']}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ServicesSection should have no accessibility violations', async () => {
    const { container } = render(
      <ServicesSection
        heading="Our Services"
        services={[
          {
            id: '1',
            title: 'Service 1',
            description: 'Description 1',
            order: 1,
          },
          {
            id: '2',
            title: 'Service 2',
            description: 'Description 2',
            order: 2,
          },
        ]}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('ContactSection with ContactForm should have no accessibility violations', async () => {
    const { container } = render(
      <ContactSection heading="Contact Us">
        <ContactForm onSubmit={async () => {}} />
      </ContactSection>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Navigation should have no accessibility violations', async () => {
    const { container } = render(<Navigation />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Footer should have no accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
