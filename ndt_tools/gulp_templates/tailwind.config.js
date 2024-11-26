/** @type {import('tailwindcss').Config} */

// CHEATSHEET
// https://tailwindcomponents.com/cheatsheet/

// DOCS
// https://tailwindcss.com/

module.exports = {
	content: ['**/*.html', '!./node_modules/**/*'],
	safelist: ['flex', 'flex-wrap', 'breadcrumb-wrapper', 'errorlist'],

	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},

		screens: {
			md: { max: '1180px' },
		},
	},
}
