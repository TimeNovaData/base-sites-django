/**
 * https://github.com/postcss/postcss/blob/main/docs/plugins.md
 */
module.exports = () => ({
	parser: require('postcss-comment'),

	plugins: {
		"postcss-import": {},
		"tailwindcss/nesting": {},
		"tailwindcss": {},
		"postcss-nested": {},
		"postcss-mixins": {},
		"postcss-simple-vars": {},
		"postcss-custom-media": {}
	}


});