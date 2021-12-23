const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        codemancers: '#0356ff',
      },
      content: {
        quote: "'“'",
      },
      fontFamily: {
        sans: ["'Inter'", ...fontFamily.sans],
      },
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
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
