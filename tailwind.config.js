const defaultFonts = require('tailwindcss/defaultTheme');
module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
