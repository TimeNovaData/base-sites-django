import { gsap } from "gsap";
import { findAll } from "../utils/dom.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import animateFrom from "./animateFrom.js";


export default function animaAoScroll() {
	const start = "top bottom+=100px"

	findAll("[js-anima]")
		.forEach(function (elem) {

			ScrollTrigger.create({
				trigger: elem,
				once: true,
				start: start,
				refreshPriority: 10,
				//markers: true,
				onEnter: function () {
					animateFrom(elem)

				},
				// onEnterBack: function () {
				// 	animateFrom(elem, -1)
				// },
				// onLeave: function () {
				// 	hide(elem)
				// } // assure that the element is hidden when scrolled into view


			});
		});


}