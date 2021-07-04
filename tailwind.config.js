const defaultFonts = require('tailwindcss/defaultTheme');
module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["'Barlow'", ...defaultFonts.fontFamily.sans],
			},
			fontSize: ['hover'],
			animation: {
				'gradient-x': 'gradient-x 3s ease infinite',
			},
			keyframes: {
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
			textColor: {
				tailwind: '#06B6D4',
				redux: '#764abc',
				html: '#E65100',
				css: '#0277BD',
				react: '#61dafb',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
