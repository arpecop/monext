/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.fs-0': {
          fontSize: '2.281rem',
          lineHeight: 1.1,
          '@media (min-width: 768px)': {
            fontSize: '3.583rem',
          },
        },
        '.fs-1': {
          fontSize: '1.802rem',

          '@media (min-width: 768px)': {
            fontSize: '2.488rem',
          },
        },
        '.fs-2': {
          fontSize: '1.424rem',

          '@media (min-width: 768px)': {
            fontSize: '1.728rem',
          },
        },
        '.fs-3': {
          fontSize: '1.266rem',

          '@media (min-width: 768px)': {
            fontSize: '1.44rem',
          },
        },
        '.fs-4': {
          fontSize: '1.125rem',

          '@media (min-width: 768px)': {
            fontSize: '1.2rem',
          },
        },
        '.fs-5': {
          fontSize: '1rem',
        },
      });
    }),
  ],
};
