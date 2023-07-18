import { gsap } from "gsap";
import { height } from "../utils/dom";

export default function animateFrom(elem, direction) {

	direction = direction | 1;
	let delay = 0

	let x = 0,
		y = 0,
		scale = 1,
		skewYY = 0,
		ease = "power3",
		opacity = 1

	let duration = 1
	const att = elem.getAttribute('data-anima')
	const valorTransicao = elem.getAttribute("data-value")


	//direção
	if (att === "left") {
		x = valorTransicao || -100;
		y = 0;
	} else if (att === "right") {
		x = valorTransicao || 100;
		y = 0;
	} else if (att === "down") {
		y = valorTransicao || height(elem);

	} else if (att === "up") {
		y = - (valorTransicao || height(elem));

	}
	else if (att === "scale") {
		scale = 0.6;

	}
	else if (att === "opacity") {
		opacity = 0;

	}

	if (elem.hasAttribute('skewy')) {
		skewYY = 5
	}
	//delay
	if (elem.dataset.delay) {
		delay = elem.dataset.delay.includes('.') ? `${elem.dataset.delay}` : `.${elem.dataset.delay}`
	}
	if (elem.dataset.duration) {
		duration = `${elem.dataset.duration}`
	}
	if (elem.dataset.ease) {
		ease = `${elem.dataset.ease}`
	}



	gsap.timeline()
		.fromTo(elem, {
			x: x,
			y: y,
			scale: scale,
			skewY: skewYY,
			autoAlpha: opacity

		}, {
			// ease: CustomEase.get("easeSuave"),
			ease: ease,
			duration: duration,
			x: 0,
			y: 0,
			autoAlpha: 1,
			delay: delay,
			scale: 1,
			overwrite: "auto",
			skewY: 0,

			onComplete: () => elem.classList.add("animou"),
			// onStart: () => elem.closest('section').classList.add("animate-enter")
		}).timeScale(1)

}