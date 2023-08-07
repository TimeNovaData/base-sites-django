
/** 
 * @param {String} selector  
 * @param {HTMLElement} parent 
 * @returns {HTMLElement | undefined}
 * */
export const find = (selector, parent = document) => parent.querySelector(selector)

/** 
 * @param {String} selector 
 * @param {HTMLElement} parent
 * @returns {Array}
 * */
export const findAll = (selector, parent = document) => [...parent.querySelectorAll(selector)]


export function offset(el) {
	if (el === window) {
		return { top: 0, left: 0 }
	}
	const { top, left } = el.getBoundingClientRect()

	return { top, left }
}

export function style(el, property) {
	return window.getComputedStyle(el).getPropertyValue(property)
}

export function height(el) {
	return el === window
		? window.innerHeight
		: el.getBoundingClientRect().height
}

export function width(el) {
	return el === window
		? window.innerWidth
		: el.getBoundingClientRect().width
}

export function css(element, css) {
	const style = element.style

	for (const prop in css) {
		style[prop] = css[prop]
	}
}

export function cssBatch(elements, style) {
	elements.forEach(el => css(el, style))
}

