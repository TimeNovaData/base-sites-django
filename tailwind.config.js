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
		},

		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			white: withOpacity('--white'),
			black: withOpacity('--black'),

			'neutral-10': withOpacity('--neutral-10'),
			'neutral-20': withOpacity('--neutral-20'),
			'neutral-30': withOpacity('--neutral-30'),
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
			'primary-pure-70': withOpacity('--primary-pure-70'),
			'primary-dark': withOpacity('--primary-dark'),

			// alerts
			'alert-error': withOpacity('--alert-error'),
			'alert-error-10': withOpacity('--alert-error-10'),

			'alert-warning': withOpacity('--alert-warning'),
			'alert-warning-10': withOpacity('--alert-warning-10'),

			'alert-success': withOpacity('--alert-success'),
			'alert-success-10': withOpacity('--alert-success-10'),
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
<<<<<<< HEAD
			xl: { max: '1920px' },
			lg: { max: '1440px' },
			lg2: { max: '1280px' },
			md: { max: '1024px' },
			sm: { max: '600px' },

=======
			xl: { max: '1920px' },
			lg: { max: '1440px' },
			lg2: { max: '1280px' },
			md: { max: '1024px' },
			md2: { max: '767px' },
			sm: { max: '600px' },
>>>>>>> 37437a6 (novas sections)
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
			addUtilities({
				'.text-display-1': { fontSize: '4rem', lineHeight: '125%', letterSpacing: '-0.08rem', fontFamily: theme('fontFamily.sans') },
				'.text-title-1': { fontSize: '3.5rem', lineHeight: '130%', letterSpacing: '-0.07rem', fontFamily: theme('fontFamily.sans') },
				'.text-title-2': { fontSize: '3rem', lineHeight: '130%', letterSpacing: '-0.06rem', fontFamily: theme('fontFamily.sans') },
				'.text-title-3': { fontSize: '2rem', lineHeight: '130%', letterSpacing: '-0.04rem', fontFamily: theme('fontFamily.sans') },
				'.text-title-4': { fontSize: '1.5rem', lineHeight: '125%', letterSpacing: '-0.03rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-1': { fontSize: '1.125rem', lineHeight: '144%', letterSpacing: '-0.0225rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-2': { fontSize: '1rem', lineHeight: '100%', letterSpacing: '-0.02rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-3': { fontSize: '0.875rem', lineHeight: '100%', letterSpacing: '-0.0175rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-4': { fontSize: '0.75rem', lineHeight: '100%', letterSpacing: '-0.015rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-5': { fontSize: '0.625rem', lineHeight: '100%', letterSpacing: '-0.0125rem', fontFamily: theme('fontFamily.sans') },
				'.text-caps-1': { fontSize: '1rem', lineHeight: '100%', letterSpacing: '0.04rem', fontFamily: theme('fontFamily.sans'), textTransform: 'uppercase' },
				'.text-caps-2': { fontSize: '0.875rem', lineHeight: '100%', letterSpacing: '0.035rem', fontFamily: theme('fontFamily.inter'), textTransform: 'uppercase' },
				'.text-caps-3': { fontSize: '0.75rem', lineHeight: '100%', letterSpacing: '0.03rem', fontFamily: theme('fontFamily.sans'), textTransform: 'uppercase' },
				'.text-caps-4': { fontSize: '0.625rem', lineHeight: '130%', letterSpacing: '0.025rem', fontFamily: theme('fontFamily.sans'), textTransform: 'uppercase' },
				'.text-paragraph-1': { fontSize: '1.125rem', lineHeight: '130%', letterSpacing: '-0.0225rem', fontFamily: theme('fontFamily.sans') },
				'.text-paragraph-2': { fontSize: '1rem', lineHeight: '130%', letterSpacing: '-0.02rem', fontFamily: theme('fontFamily.sans') },
				'.text-paragraph-3': { fontSize: '0.875rem', lineHeight: '130%', letterSpacing: '-0.0175rem', fontFamily: theme('fontFamily.sans') },
				'.text-paragraph-4': { fontSize: '0.75rem', lineHeight: '130%', letterSpacing: '-0.015rem', fontFamily: theme('fontFamily.sans') },
				'.text-paragraph-5': { fontSize: '0.675rem', lineHeight: '130%', letterSpacing: '-0.0125rem', fontFamily: theme('fontFamily.sans') }
			})
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
