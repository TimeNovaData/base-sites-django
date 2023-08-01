import tippy from "tippy.js";
import { find, findAll } from "utils/dom";

import ripple from "../modules/ripple";
// 	https://atomiks.github.io/tippyjs/

export default function () {
	const menus = findAll('[js-dropdown]')
		?.map(dropdown => {
			const content = dropdown.getAttribute('id-dropdown')
			const menu = find(content)

			if (!content || !menu) return

			const attr = menu.getAttribute('js-props')
			const props = attr ? JSON.parse(attr) : {}

			const instance = tippy(dropdown, {
				content: menu,
				allowHTML: true,
				trigger: "mouseenter click",
				interactive: true,
				interactiveBorder: 10,
				maxWidth: 'none',
				theme: 'Menu',
				role: 'menu',
				placement: "bottom",
				hideOnClick: true,
				arrow: false,
				offset: [0, 4],
				animation: 'shift-away-subtle',
				appendTo: () => document.body,


				...props,
				onCreate: (instance) => addEventHide(instance),
				onShown: () => ripple()

			})

			function addEventHide(instance) {
				findAll('[js-hide]', menu)
					?.forEach(i => i.addEventListener('click', () => instance.hide()))
			}

			menu && (menu.instance = instance)
			return instance
		})

	return menus;

}


/* 
 // default
	placement: 'top',

	// full list:
	placement: 'top-start',
	placement: 'top-end',

	placement: 'right',
	placement: 'right-start',
	placement: 'right-end',

	placement: 'bottom',
	placement: 'bottom-start',
	placement: 'bottom-end',

	placement: 'left',
	placement: 'left-start',
	placement: 'left-end',

	// choose the side with most space
	placement: 'auto',
	placement: 'auto-start',
	placement: 'auto-end',
*/