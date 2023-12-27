/** @type {import('tailwindcss').Config} */

// CHEATSHEET
// https://tailwindcomponents.com/cheatsheet/

// DOCS
// https://tailwindcss.com/

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['**/*.html', '!./node_modules/**/*'],
	safelist: ['flex', 'flex-wrap', 'breadcrumb-wrapper', 'errorlist'],

	theme: {
		fontFamily: {
			sans: ['Space Grotesk', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
			lato: ['Lato', 'sans-serif'],
		},

		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			white: withOpacity('--white'),
			black: withOpacity('--black'),

			'neutral-10': withOpacity('--neutral-10'),
			'neutral-20': withOpacity('--neutral-20'),
			'neutral-30': withOpacity('--neutral-30'),
			'neutral-40-op': withOpacity('----neutral-40-op'),
			'neutral-10-op': withOpacity('--neutral-10-op'),
			'neutral-05-op': withOpacity('--neutral-05-op'),
			'neutral-40': withOpacity('--neutral-40'),
			'neutral-60': withOpacity('--neutral-60'),
			'neutral-70': withOpacity('--neutral-70'),
			'neutral-100': withOpacity('--neutral-100'),

			//primary
			'primary-dark': withOpacity('--primary-dark'),
			'primary-light': withOpacity('--primary-light'),
			'primary-light-10': withOpacity('--primary-light-10'),
			'primary-light-30': withOpacity('--primary-light-30'),
			'primary-dark': withOpacity('--primary-dark'),

			'primary-pure-10': withOpacity('--primary-pure-10'),
			'primary-pure-70': withOpacity('--primary-pure-70'),
			'primary-pure': withOpacity('--primary-pure'),
			'primary-pure-10-op': withOpacity('--primary-pure-10-op'),

			//secundary
			'secondary-100': withOpacity('--secondary-100'),
			'secondary-80': withOpacity('--secondary-80'),
			'secondary-60': withOpacity('--secondary-60'),

			//generics
			'generics-white': withOpacity('--generics-white'),
			'generics-black': withOpacity('--generics-black'),
			'generics-black-50-op': withOpacity('--generics-black-50-op'),
			'generics-white-70-op': withOpacity('--generics-white-70-op'),
			'generics-white-40-op': withOpacity('--generics-white-40-op'),
			'generics-white-20-op': withOpacity('--generics-white-20-op'),
			'generics-white-10-op': withOpacity('--generics-white-10-op'),
			'generics-white-05-op': withOpacity('--generics-white-05-op'),
		},

		spacing: {
			0: '0',
			1: '1px',
			2: '0.125rem',
			4: '0.25rem',
			6: '0.375rem',
			8: '0.5rem',
			10: '.625rem',
			12: '0.75rem',
			14: '0.875rem',
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			28: '1.75rem',
			32: '2rem',
			40: '2.5rem',
			48: '3rem',
			56: '3.5rem',
			64: '4rem',
			72: '4.5rem',
			80: '5rem',
			96: '6rem',
			120: '7.5rem',
			160: '10rem',
		},

		lineHeight: {
			100: '100%',
			140: '140%',
			150: '150%',
		},

		screens: {
			/*
			min2xl: { min: '1441px' },
			'2xl': { max: '1441px' },
			xl: { max: '1460px' },
			lg: { max: '1281px' },
			md2: { max: '1180px' },
			md3: { max: '1024px' },
			md: { max: '767px' },
			sm: { max: '639px' },
			*/
			xl: { max: '1920px' },
			lg: { max: '1440px' },
			lg2: { max: '1280px' },
			md: { max: '1024px' },
			md2: { max: '767px' },
			sm: { max: '600px' },
		},

		// xs     599.99px
		// sm    600px
		// md    1024px
		// lg    1440px
		// xl    1920px

		// Extendss
		extend: {
			letterSpacing: {},
			gridTemplateColumns: {},
			borderRadius: {},
			fontSize: {},
			boxShadow: {
				'md-3': '2px 8px 32px 0px rgba(0, 0, 0, 0.04)',
				'lg-3': '2px 24px 64px -20px rgba(0, 0, 0, 0.06)',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, theme }) {
			// prettier-ignore
			addUtilities(typografy)
		}),
	],
}
	
function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}
