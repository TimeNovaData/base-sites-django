/** @type {import('tailwindcss').Config} */

// CHEATSHEET
// https://tailwindcomponents.com/cheatsheet/

// DOCS
// https://tailwindcss.com/

const plugin = require('tailwindcss/plugin')
import typography from './static/src/js/utils/typography'

module.exports = {
	content: ['**/*.html', '!./node_modules/**/*'],
	safelist: ['flex', 'flex-wrap', 'breadcrumb-wrapper', 'errorlist'],

	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
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

		lineHeight: {
			100: '100%',
			140: '140%',
			150: '150%',
		},

		screens: {
			md: { max: '1180px' },
		},

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
		plugin(function ({ addUtilities }) {
			addUtilities(typography)
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
