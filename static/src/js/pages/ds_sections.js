import Swiper from "swiper"
import { find } from "utils/dom"

export default function () {
	const Sections = find("[js-page='ds-sections']")
	if (!Sections) return
	console.log("Page DS Sections");

	const swiper5 = new Swiper('.swiper-about5', {
		slidesPerView: 'auto',
		
		navigation: {
			nextEl: '.swiper-about5-next',
			prevEl: '.swiper-about5-prev',
		},

		pagination: {
			el: '.swiper-pagination-about5',
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 3,
			type: "fraction"
		}
	});

	const swiper9 = new Swiper('.swiper-about9', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-about9-next',
			prevEl: '.swiper-about9-prev',
		},

		pagination: {
			el: '.swiper-pagination-about9',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		},
		breakpoints:{
			600:{
				spaceBetween:32,
			}
		}
	});
	
	const swiper13 = new Swiper('.swiper-about13', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-about13-next',
			prevEl: '.swiper-about13-prev',
		},

		pagination: {
			el: '.swiper-pagination-about13',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog1 = new Swiper('.swiper-blog1', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog1-next',
			prevEl: '.swiper-blog1-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog1',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog2 = new Swiper('.swiper-blog2', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog2-next',
			prevEl: '.swiper-blog2-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog2',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog3 = new Swiper('.swiper-blog3', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog3-next',
			prevEl: '.swiper-blog3-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog3',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog4 = new Swiper('.swiper-blog4', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog4-next',
			prevEl: '.swiper-blog4-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog4',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog5 = new Swiper('.swiper-blog5', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog5-next',
			prevEl: '.swiper-blog5-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog5',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog6 = new Swiper('.swiper-blog6', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog6-next',
			prevEl: '.swiper-blog6-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog6',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog7 = new Swiper('.swiper-blog7', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog7-next',
			prevEl: '.swiper-blog7-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog7',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog8 = new Swiper('.swiper-blog8', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog8-next',
			prevEl: '.swiper-blog8-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog8',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperBlog9 = new Swiper('.swiper-blog9', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-blog9-next',
			prevEl: '.swiper-blog9-prev',
		},

		pagination: {
			el: '.swiper-pagination-blog9',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});
}