const defaultFonts = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        codemancers: '#0356ff',
        gray: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
      },
      content: {
        quote: "'“'",
      },
      fontFamily: {
        sans: ["'Inter'", ...defaultFonts.fontFamily.sans],
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme('colors.gray.200'),
              '[class~="lead"]': {
                color: theme('colors.gray.200'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.300'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.500'),
              },
              hr: {
                borderColor: theme('colors.gray.100'),
              },
              blockquote: {
                color: theme('colors.gray.100'),
                borderLeftColor: theme('colors.gray.500'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.300'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.100'),
                backgroundColor: theme('colors.gray.700'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.300'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.500'),
              },
            },
          ],
        },
      }),
      keyframes: {
        music: {
          '10%': { transform: 'scaleY(0.3)' },
          '30%': { transform: 'scaleY(1)' },
          '60%': { transform: 'scaleY(0.5)' },
          '80%': { transform: 'scaleY(0.75)' },
          '100%': { transform: 'scaleY(0.6)' },
        },
      },
      animation: {
        'music-wave': 'music 2.2s ease infinite alternate',
      },
    },
  },
  variants: {
    extend: { typography: ['dark'] },
  },
  plugins: [require('@tailwindcss/typography')],
};
