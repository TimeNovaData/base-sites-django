import { css, findAll, offset } from "../utils/dom";

function createRipple(e) {
	const
		x = e.clientX - offset(this).left,
		y = e.clientY - offset(this).top,
		w = this.offsetWidth,
		ripple = document.createElement('span');
	// debugger
	ripple.className = 'ripple';
	css(ripple, { left: x + 'px', top: y + 'px' })
	ripple.style.setProperty('--scale', w);
	this.appendChild(ripple);
	setTimeout(() => ripple.parentNode.removeChild(ripple), 500);
}

/** material ripples onClick */
export default function () {
	const els = findAll('[js-ripple]');
	els?.forEach(el => el.addEventListener('mousedown', createRipple))


}