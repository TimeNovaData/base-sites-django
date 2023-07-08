export default function salebrandSobre(){
    const swiperServicosSobre = new Swiper(".swiper-servicos-sobre", {
        slidesPerView: 2.5,
        spaceBetween: 16,
        loop: true,
        speed: 5000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        pagination: {
          el: "#sobre .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
        640: {
            slidesPerView: 4.2,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 5.2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 16,
        },
        },
    });
}