import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-white focus:text-primary-black focus:font-medium focus:outline-none focus:ring-2 focus:ring-primary-black"
      >
        Skip to main content
      </a>
      <Navigation />
      <div className="flex-1 pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}
