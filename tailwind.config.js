/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'max-500': { max: '500px' },
    },
    colors: {
      'neon-green': '#D5FF3F',
      black: {
        DEFAULT: '#000',
        secondary: '#131313',
        trinary: '#161B22',
      },
      grey: '#8B949E',
      white: '#fff',
      blue: {
        dark: '#242938',
      },
    },
    extend: {
      fontFamily: {
        dmSans: ['var(--font-dm-sans)'],
        humane: ['var(--font-humane)'],
        bebasNeue: ['var(--font-bebas-neue)'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 100s linear infinite',
        'infinite-scroll-reverse':
          'infinite-scroll-reverse 100s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '2rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
