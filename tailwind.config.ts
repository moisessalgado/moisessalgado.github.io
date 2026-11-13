import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta preto e branco: poucos tons de cinza neutro.
        ink: {
          DEFAULT: '#0A0A0A',
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#BDBDBD',
          300: '#8A8A8A',
          400: '#5F5F5F',
          500: '#0A0A0A',
          600: '#111111',
          700: '#171717',
          800: '#1F1F1F',
          900: '#000000',
        },
        paper: {
          DEFAULT: '#E5E5E5',
          light: '#F5F5F5',
          dark: '#BDBDBD',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
