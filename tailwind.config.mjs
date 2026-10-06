/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: '#080808',
        surface: '#121212',
        charcoal: '#181818',
        studio: '#F5F5F5',
        hairline: '#2E2E2E',
        hairlineBright: '#404040',
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          'Helvetica',
          '"Neue Haas Grotesk Text Pro"',
          'Arial',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          '"Roboto Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        ultra: '0.3em',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
