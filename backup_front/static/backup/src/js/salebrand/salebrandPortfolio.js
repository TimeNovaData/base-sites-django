export default function(){
    const breakpoint = window.matchMedia("(min-width:1024px)");
    let swiperPortfolio;

    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
        if (swiperPortfolio !== undefined) swiperPortfolio.destroy(true, true);

        return;
        } else if (breakpoint.matches === false) {
        return enableSwiper();
        }
    };

    const enableSwiper = function () {
        swiperPortfolio = new Swiper(".swiper-portfolio", {
            slidesPerView: 1.2,
            spaceBetween: 8,
            loop: true,
            speed: 10000,
            autoplay: {
            delay: 0,
            disableOnInteraction: false,
            },
            pagination: {
            el: "#portfolio .swiper-pagination",
            clickable: true,
            },
            breakpoints: {
            768: {
                slidesPerView: 2.2,
                spaceBetween: 8,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
            },
        });
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
}