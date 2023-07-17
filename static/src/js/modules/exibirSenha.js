export default function () {
	const passwordAttr = '[js-password]'
	const containers = document.querySelectorAll(`.show-password${passwordAttr}`)
	if (!containers.length) return

	function handleEvent(div) {
		return function (event) {
			let input = div.querySelector('[js-input-password]')
			let item = event.currentTarget
			input.type = input.type == 'text' ? 'password' : 'text'

			if (input.type == 'text') {
				item.classList.add('mostra')
			} else {
				item.classList.remove('mostra')
			}
		}
	}

	containers.forEach((container) => {
		const button = container.querySelector('.password')
		button.addEventListener('click', handleEvent(container))
	})
}
