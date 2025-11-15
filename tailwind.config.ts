import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          white: '#FFFFFF',
        },
        neutral: {
          gray100: '#F5F5F5',
          gray200: '#E5E5E5',
          gray800: '#1A1A1A',
          gray900: '#0A0A0A',
        },
        accent: {
          error: '#DC2626',
          success: '#16A34A',
        },
      },
      fontFamily: {
        primary: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        hero: '4rem',      // 64px
        h1: '3rem',        // 48px
        h2: '2.25rem',     // 36px
        h3: '1.875rem',    // 30px
        body: '1.125rem',  // 18px
        small: '0.875rem', // 14px
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
      },
      lineHeight: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.75',
      },
      spacing: {
        xs: '0.5rem',   // 8px
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem',     // 32px
        xl: '3rem',     // 48px
        '2xl': '4rem',  // 64px
        '3xl': '6rem',  // 96px
      },
      screens: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
