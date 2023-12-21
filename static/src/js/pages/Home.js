import Swiper from "swiper"
import { find } from "utils/dom"

export default function () {
	const Home = find("[js-page='home']")
	if (!Home) return



	/** Swiper Inovação | Comunicação | Crescimento */
	const SwiperInovacaoComunicaoCrescimento = new Swiper(".Swiper-Inovacao-Comunicacao-Crescimento", {
		slidesPerView: 5,
		spaceBetween: 0,

	})

	const SwiperInovacao = new Swiper(".SwiperInovacao", {
		slidesPerView: 2.5,
		spaceBetween: 0,
		direction: "vertical",
		centeredSlides: true,
		speed: 700,
		loop: true,
		autoplay: {
			delay: 3000,
		}

	});

	const SwiperComunicacao = new Swiper(".SwiperComunicacao", {
		slidesPerView: "auto",
		spaceBetween: 0,
		direction: "vertical",
		centeredSlides: true,
		speed: 700,
		loop: true,
		autoplay: {
			delay: 3000,
		}

	});
}