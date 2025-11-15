export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black border-t border-neutral-gray800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 tablet:py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm tablet:text-base text-neutral-gray200">
            © {currentYear} COOforRent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
