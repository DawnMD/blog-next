const defaultFonts = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
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
			typography: (theme) => ({
				light: {
					css: [
						{
							color: theme('colors.gray.400'),
							'[class~="lead"]': {
								color: theme('colors.gray.300'),
							},
							a: {
								color: theme('colors.white'),
							},
							strong: {
								color: theme('colors.white'),
							},
							'ol > li::before': {
								color: theme('colors.gray.400'),
							},
							'ul > li::before': {
								backgroundColor: theme('colors.gray.600'),
							},
							hr: {
								borderColor: theme('colors.gray.200'),
							},
							blockquote: {
								color: theme('colors.gray.200'),
								borderLeftColor: theme('colors.gray.600'),
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
								color: theme('colors.gray.400'),
							},
							code: {
								color: theme('colors.white'),
							},
							'a code': {
								color: theme('colors.white'),
							},
							pre: {
								color: theme('colors.gray.200'),
								backgroundColor: theme('colors.gray.800'),
							},
							thead: {
								color: theme('colors.white'),
								borderBottomColor: theme('colors.gray.400'),
							},
							'tbody tr': {
								borderBottomColor: theme('colors.gray.600'),
							},
						},
					],
				},
			}),
		},
	},
	variants: {
		extend: { typography: ['dark'], animation: ['hover'] },
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
