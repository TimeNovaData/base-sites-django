import { find } from "utils/utils.js"

export default function (props) {

	// Defaults
	const opts = {
		reduceHeight: true,
		selector: '[js-header]',
		fixedOnScrool: false,
		animateOnFixed: true,
		reduce: true,
		topReduce: 200,
		...props
	}


	const header = find(opts.selector)


	function onScroll() {
		window.addEventListener('scroll', (e) => {
			const point = window.scrollY > opts.topReduce
			
			if (opts.fixedOnScrool) fixed(point, opts.animateOnFixed)
			if (opts.reduce) reduce(point)

		})

	}

	/*** @param {boolean} value */
	function fixed(value, animate = false) {
		header.setAttribute('js-header-fixed', value)
		animate && header.setAttribute('js-header-animate', value)

	}

	/*** @param {boolean} value */
	function reduce(value) {
		header.setAttribute('js-header-reduce', value)

	}

	function init() {
		if (header) {
			onScroll()
		}
		return this
	}


	return {
		init, header, opts, fixed, reduce
	}
}