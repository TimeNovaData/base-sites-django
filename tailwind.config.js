/** @type {import('tailwindcss').Config} */

// CHEATSHEET
// https://tailwindcomponents.com/cheatsheet/

// DOCS
// https://tailwindcss.com/

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		"**/*.html",
		"!./node_modules/**/*",
	],
	safelist: ["flex", "flex-wrap", "breadcrumb-wrapper", "errorlist"],

	theme: {
		fontFamily: {
			sans: ["Space Grotesk", "sans-serif"],
		},

		colors: {

			transparent: "transparent",
			current: "currentColor",
			white: withOpacity("--white"),
			black: withOpacity("--black"),

			"neutral-10": withOpacity("--neutral-10"),
			"neutral-20": withOpacity("--neutral-20"),
			"neutral-30": withOpacity("--neutral-30"),
			"neutral-60": withOpacity("--neutral-60"),
			"neutral-70": withOpacity("--neutral-70"),
			"neutral-100": withOpacity("--neutral-100"),
			//primary
			"primary-light": withOpacity("--primary-light"),
			"primary-light-30": withOpacity("--primary-light-30"),
			"primary-pure-10": withOpacity("--primary-pure-10"),
			"primary-pure": withOpacity("--primary-pure"),
			"primary-pure-70": withOpacity("--primary-pure-70"),
			"primary-dark": withOpacity("--primary-dark"),
			// alerts
			"alert-error": withOpacity("var(--alert-error)"),
			"alert-error-10": withOpacity("var(--alert-error-10) "),

			"alert-warning": withOpacity("var(--alert-warning)"),
			"alert-warning-10": withOpacity("var(--alert-warning-10) "),

			"alert-success": withOpacity("var(--alert-success)"),
			"alert-success-10": withOpacity("var(--alert-success-10) "),


		},

		spacing: {
			0: "0",
			1: "1px",
			2: "0.125rem",
			4: "0.25rem",
			6: "0.375rem",
			8: "0.5rem",
			10: ".625rem",
			12: "0.75rem",
			14: "0.875rem",
			16: "1rem",
			20: "1.25rem",
			24: "1.5rem",
			28: "1.75rem",
			32: "2rem",
			40: "2.5rem",
			48: "3rem",
			56: "3.5rem",
			64: "4rem",
			72: "4.5rem",
			80: "5rem",
			96: "6rem",
			120: "7.5rem",
			160: "10rem",
		},

		lineHeight: {
			100: "100%",
			140: "140%",
			150: "150%",
		},

		screens: {
			min2xl: { min: "1441px" },
			// => @media (max-width: 1535px) { ... }
			"2xl": { max: "1441px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1367px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1281px" },
			// => @media (max-width: 1023px) { ... }

			md2: { max: "1180px" },
			// => @media (max-width: 767px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},

		// Extendss 
		extend: {
			letterSpacing: {},
			gridTemplateColumns: {},
			borderRadius: {},
			fontSize: {},
			boxShadow: {},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, theme }) {
			// prettier-ignore
			addUtilities({
				'.text-display': { fontSize: '4rem', lineHeight: '5rem', 'letterSpacing': '-0.08rem', fontFamily: theme('fontFamily.sans') },

				'.text-title-1': { fontSize: '3.5rem', lineHeight: '4rem', 'letterSpacing': '-0.07rem', fontFamily: theme('fontFamily.sans') },
				'.text-title-2': { fontSize: '3rem', lineHeight: '4rem', 'letterSpacing': '-0.06rem', fontFamily: theme('fontFamily.sans') },
				'.text-title-3': { fontSize: '2rem', lineHeight: '2.125rem', 'letterSpacing': '-0.04rem', fontFamily: theme('fontFamily.sans') },
				'.text-title-4': { fontSize: '1.5rem', lineHeight: '2rem', 'letterSpacing': '-0.03rem', fontFamily: theme('fontFamily.sans') },

				'.text-headline-1': { fontSize: '1.125rem', lineHeight: '1.625rem', 'letterSpacing': '-0.02rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-2': { fontSize: '1rem', lineHeight: '1.5rem', 'letterSpacing': '-0.02rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-3': { fontSize: '0.875rem', lineHeight: '1.375rem', 'letterSpacing': '-0.18rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-4': { fontSize: '0.75rem', lineHeight: '1.25rem', 'letterSpacing': '-0.15rem', fontFamily: theme('fontFamily.sans') },
				'.text-headline-5': { fontSize: '0.625rem', lineHeight: '1.25rem', 'letterSpacing': '-0.13rem', fontFamily: theme('fontFamily.sans') },

				'.text-caps-1': { fontSize: '1rem', lineHeight: '1.375rem', 'letterSpacing': '-0.04rem', fontFamily: theme('fontFamily.sans') },
				'.text-caps-2': { fontSize: '0.875rem', lineHeight: '1.375rem', 'letterSpacing': '-0.035rem', fontFamily: theme('fontFamily.sans') },
				'.text-caps-3': { fontSize: '0.75rem', lineHeight: '1rem', 'letterSpacing': '-0.03rem', fontFamily: theme('fontFamily.sans') },
				'.text-caps-4': { fontSize: '0.625rem', lineHeight: '1rem', 'letterSpacing': '-0.025rem', fontFamily: theme('fontFamily.sans') },


			})
		}),
	],

};

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgb(var(${variableName}))`
	}
}

