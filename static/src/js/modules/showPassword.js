export default function () {

	const attr = "[js-password]"
	const els = document.querySelectorAll(`${attr}`);

	if (!els.length) return

	function handleEvent(div) {
		return function (event) {
			let input = div.querySelector("[js-input-password]")
			let item = event.currentTarget
			input.type = input.type == 'text' ? 'password' : 'text';

			if (input.type == 'text') {
				item.classList.add("show")

			} else {
				item.classList.remove("show");

			}
		}
	}
	els.forEach(div => {
		const buttonPass = div.querySelector('.password')
		buttonPass.addEventListener('click', handleEvent(div))
	})

}
