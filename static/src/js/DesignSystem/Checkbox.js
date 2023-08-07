import { find, findAll } from "../utils/dom";

export default function () {
	const els = findAll('[js-checkbox]');



	function render(wrapper) {
		const span = document.createElement('span')
		span.innerHTML = `
			<div class="mask">
				<i class="icon-check">
					<span>
						<div class="line1"></div>
						<div class="line2"></div>
					</span>
				</i>
			</div>
		`
		const input = find('input', wrapper)
		span.classList.add('Checkbox')
		input.insertAdjacentElement('afterend', span)

	}


	function init() {
		els?.forEach(render)
		return this
	}


	return { init, els }

}