import gsap from 'gsap'
import { find, findAll } from 'utils/dom';


export default function Accordion() {
	const containerAccordions = findAll("[js-accordion-container]");

	function onClick(e, container) {
		const
			target = e.target,
			title = target.classList.contains("[js-accordion-title]") || target.closest("[js-accordion-title]")

		if (!title) return

		const
			item = title.closest("[js-accordion-item]"),
			ID = title.getAttribute("js-accordion-title"),
			content = find(`[js-accordion-content="${ID}"]`, container),
			height = content.scrollHeight,
			parentAttr = item.getAttribute(`js-accordion-parent`)

		if (parentAttr) {
			findAll(`[js-accordion-item][js-accordion-parent="${parentAttr}"]`) // parents 
				.forEach((i) => {
					if (i.classList.contains("active") && i !== item)
						find('[js-accordion-title]', i)?.click();
				});
		}

		item.classList.toggle("active");

		if (item.classList.contains("active")) {
			gsap.fromTo(content, { height: 0 }, { height: height, duration: 0.3 });
		} else {
			gsap.fromTo(content, { height: height }, { height: 0, duration: 0.3 });
		}
	}


	function init() {
		if (containerAccordions.length) {
			containerAccordions
				.forEach((container) => container.addEventListener("click", (e) => onClick(e, container)));
		}
		return this
	}

	return {
		init,
		containerAccordions
	}

}