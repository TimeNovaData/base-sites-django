import { find, findAll } from "utils/dom";

export default function mostraSenha() {
	const attr = "[js-password]";
	const els = findAll(`${attr}`);

	if (!els.length) return;

	function handleEvent(div) {
		return function () {
			let input = find("[js-input-password]");
			if (!input) return;

			input.type = input.type == "text" ? "password" : "text";
			find(".on", div)?.classList.toggle("hidden");
			find(".off", div)?.classList.toggle("hidden");


		};
	}
	els.forEach((div) => {
		const buttonPass = find("[js-button-password]");
		buttonPass.addEventListener("click", handleEvent(div));
	});
}
