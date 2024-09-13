import Swiper from "swiper"
import { find } from "utils/dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function () {
	const Sections = find("[js-page='ds-sections']")
	if (!Sections) return
	console.log("Page DS Sections");

	/* Todos os swippers do DS sections about e blog*/

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

	const swiperStage6 = new Swiper('.swiper-stage6', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-stage6-next',
			prevEl: '.swiper-stage6-prev',
		}
	});

	/* Time line acompanhando o scroll 
		Ver exemplo em section stage 8
	*/
	function timeline(){
		const tl = gsap.timeline({
			scrollTrigger: {
			  trigger: '.our-story-pinss',
				 scrub: 1,
				start: "top 50%",
				end: "bottom 50%",      
			  }
		  })
		  tl.to('.back', { height: '100%'})
	  
		  gsap.from('.our-story-pinss .our-story-1', {
			opacity: 0,
			y: 20,
			scrollTrigger: {
			  trigger: '.our-story-pinss .our-story-1',
				start: "top 60%",      
			  }
	  
		  })

		  gsap.from('.our-story-pinss .our-story-2', {
			opacity: 0,
			y: 20,
			scrollTrigger: {
			  trigger: '.our-story-pinss .our-story-2',       
				start: "top 60%",   
			  }
	  
		  })
	}
  
	timeline()

	/* Todos os swippers do DS sections Gallery */
	const swiperGallery1 = new Swiper('.swiper-gallery1', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-gallery1-next',
			prevEl: '.swiper-gallery1-prev',
		},

		pagination: {
			el: '.swiper-pagination-gallery1',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperGallery2 = new Swiper('.swiper-gallery2', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-gallery2-next',
			prevEl: '.swiper-gallery2-prev',
		},

		pagination: {
			el: '.swiper-pagination-gallery2',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperGallery3 = new Swiper('.swiper-gallery3', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-gallery3-next',
			prevEl: '.swiper-gallery3-prev',
		},

		pagination: {
			el: '.swiper-pagination-gallery3',
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

	const swiperGallery4 = new Swiper('.swiper-gallery4', {
		slidesPerView: 'auto',
		spaceBetween:16,
		
		navigation: {
			nextEl: '.swiper-gallery4-next',
			prevEl: '.swiper-gallery4-prev',
		},

		pagination: {
			el: '.swiper-pagination-gallery4',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		},
		breakpoints:{
			600:{
				spaceBetween:32,
			},

			1024:{
				slidesPerView:4,
			}
		},
		// Configurações do Swiper
		on: {
			slideChange: function () {
			const activeSlide = swiperGallery4.slides[swiperGallery4.activeIndex];
			const divWrap = activeSlide.querySelector('.item-slide-gallery')
			const divWrapAll = document.querySelectorAll('.item-slide-gallery')
			divWrapAll.forEach(i=> i.classList.remove('active'))
			divWrap.classList.add('active')
			console.log("slide active", activeSlide);
			}
		}
		
	});

	const swiperGallery6 = new Swiper('.swiper-gallery6', {
		slidesPerView: 'auto',
		spaceBetween:16,
		loop:true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		  },
	});

	const swiperGallery6Bottom = new Swiper('.swiper-gallery6-bottom', {
		slidesPerView: 'auto',
		spaceBetween:16,
		loop:true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		  },
	});

	setInterval(() => {
		swiperGallery6Bottom.slidePrev(); // Mover para o slide anterior
	  }, 1000); 

	  /**
	    Animation gallery 7
	   */
	 function scrollGsapImg() {
		if (window.matchMedia("(max-width: 1100px)").matches) return
	
		const cardsWrapper = document.querySelector("#gallery_7 .cards-wrapper");
			if (!cardsWrapper) return
			const col1 = cardsWrapper.querySelector(".col-1"),
			col2 = cardsWrapper.querySelector(".col-2"),
			col3 = cardsWrapper.querySelector(".col-3"),
			col4 = cardsWrapper.querySelector(".col-4"),
			col5 = cardsWrapper.querySelector(".col-5");
			// col6 = cardsWrapper.querySelector(".col-6");
	
		const value = 200, duration = 40;
	
		gsap.set(col1, {
			y: - value
		}, "juntas")
		gsap.set(col2, {
			y: value
		}, "juntas")
		gsap.set(col3, {
			y: - value
		}, "juntas")
		gsap.set(col4, {
			y: value
		}, "juntas")
		gsap.set(col5, {
			y: - value
		}, "juntas")
		// gsap.set(col6, {
		// 	y: value
		// }, "juntas")
	
		const tl =
			gsap
				.timeline({ paused: true, delay: 0, ease: "linear", repeat: -1, yoyo: true, yoyoEase: false })
				.to(col1, {
					duration: duration,
					y: value
				}, "juntas")
				.to(col2, {
					duration: duration,
					y: - value
				}, "juntas")
				.to(col3, {
					duration: duration,
					y: value
				}, "juntas")
				.to(col4, {
					duration: duration,
					y: - value
				}, "juntas")
				.to(col5, {
					duration: duration,
					y: value
				}, "juntas")
				// .to(col6, {
				// 	duration: duration,
				// 	y: - value
				// }, "juntas")
	
		window.tl = tl
	
	
		ScrollTrigger.create({
			trigger: cardsWrapper,
			once: false,
			start: 'top-=100px',
			refreshPriority: 10,
			//markers: true,
			onEnter: function () {
				tl.play()
	
			},
		});
	}

	scrollGsapImg()

	/* Todos os swippers do DS sections Gallery */
	const swiperInstagram1 = new Swiper('.swiper-instagram1', {
		slidesPerView: 'auto',
		spaceBetween:8
	});

	const swiperInstagram2 = new Swiper('.swiper-instagram2', {
		slidesPerView: 'auto',
		spaceBetween:8
	});

	const swiperInstagram4 = new Swiper('.swiper-instagram-4', {
		slidesPerView: 'auto',
		spaceBetween:16,
		
		breakpoints:{
			1024:{
				slidesPerView:4,
			}
		},
		// Configurações do Swiper
		on: {
			slideChange: function () {
			const activeSlide = swiperInstagram4.slides[swiperInstagram4.activeIndex];
			const divWrap = activeSlide.querySelector('.item-slide-instagram')
			const divWrapAll = document.querySelectorAll('.item-slide-instagram')
			divWrapAll.forEach(i=> i.classList.remove('active'))
			divWrap.classList.add('active')
			console.log("slide active", activeSlide);
			}
		}
		
	});
	/* END */

	/* Todos os swippers do DS sections partners */

	const swiperPartner1 = new Swiper('.swiper-partner-1', {
		slidesPerView: 'auto',
		spaceBetween:16,
		loop:true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		  },
	});

	const swiperPartner1Center = new Swiper('.swiper-partner-1-center', {
		slidesPerView: 'auto',
		spaceBetween:16,
		loop:true,
		autoplay: {
			delay: 1400,
			disableOnInteraction: false,
		  },
	});

	const swiperPartner1Bottom = new Swiper('.swiper-partner-1-bottom', {
		slidesPerView: 'auto',
		spaceBetween:16,
		loop:true,
		autoplay: {
			delay: 1800,
			disableOnInteraction: false,
		  },
	});

	const swiperPartner2 = new Swiper('.swiper-partner-2', {
		slidesPerView: 'auto',
		spaceBetween:16,
		loop:true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		  },

		pagination: {
			el: '.pagination-swiper-partner-2',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});

	const swiperPartner3 = new Swiper('.swiper-partner-3', {
		slidesPerView: 'auto',
		spaceBetween:16,
		loop:true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},

		breakpoints:{
			1024:{
				spaceBetween:8,
			}
		},

		pagination: {
			el: '.pagination-swiper-partner-3',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		}
	});
	/* END */

	/* Todos os swippers do DS sections pricing */

	const swiperPricing3 = new Swiper('.swiper-pricing-3', {
		slidesPerView: 'auto',
		spaceBetween:16,
	});

	const swiperPricing5 = new Swiper('.swiper-pricing-5', {
		slidesPerView: 'auto',
		spaceBetween:0,
	});
	/* END */

	/* Todos os swippers do DS sections Testimonials */

	const swiperDepoimentos1 = new Swiper('.swiper-depoimentos-1', {
		slidesPerView: 'auto',
		spaceBetween:16,
		centeredSlides:true,
		navigation: {
			nextEl: '.swiper-depoimentos-1-next',
			prevEl: '.swiper-depoimentos-1-prev',
		},

		pagination: {
			el: '.swiper-pagination-depoimentos-1',
			clickable: true,
			dynamicBullets: false,
			dynamicMainBullets: 3,
		},
		breakpoints:{
			600:{
				spaceBetween:0,
			}
		}
	});

	const swiperDepoimentos2 = new Swiper('.swiper-depoimentos-2', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-depoimentos-2-next',
			prevEl: '.swiper-depoimentos-2-prev',
		},

		pagination: {
			el: '.swiper-pagination-depoimentos-2',
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

	const swiperDepoimentos3 = new Swiper('.swiper-depoimentos-3', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-depoimentos-3-next',
			prevEl: '.swiper-depoimentos-3-prev',
		},

		pagination: {
			el: '.swiper-pagination-depoimentos-3',
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

	const swiperDepoimentos4 = new Swiper('.swiper-depoimentos-4', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-depoimentos-4-next',
			prevEl: '.swiper-depoimentos-4-prev',
		},

		pagination: {
			el: '.swiper-pagination-depoimentos-4',
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

	const swiperDepoimentos5 = new Swiper('.swiper-depoimentos-5', {
		slidesPerView: 'auto',
		spaceBetween:16,
		navigation: {
			nextEl: '.swiper-depoimentos-5-next',
			prevEl: '.swiper-depoimentos-5-prev',
		},

		pagination: {
			el: '.swiper-pagination-depoimentos-5',
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
}