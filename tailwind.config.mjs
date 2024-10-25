import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blackk': '#101114',
        'durazno': '#ff9264',
        'rhino': {
          '50': '#f1f7fd',
          '100': '#e0eef9',
          '200': '#c9e1f4',
          '300': '#a3cfed',
          '400': '#78b3e2',
          '500': '#5898d9',
          '600': '#437ecd',
          '700': '#3a6bbb',
          '800': '#345899',
          '900': '#2b4570',
          '950': '#202f4b',
      },
      },
      borderRadius: {
        '4xl': '3rem',
      },
      letterSpacing: {
        separated: '0.35px',
      },
      padding: {
        '15': '60px'
      },
    },
  },
  plugins: [],
};
