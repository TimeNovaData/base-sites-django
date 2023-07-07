export default function salebrandClientes(){
    const swiperClientes = new Swiper(".swiper-clientes:not(.linha-2)", {
      slidesPerView: 2,
      spaceBetween: 16,
      centeredSlides: true,
      centeredSlidesBounds: true,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1900: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      },
    });
  
    const swiperClientes2 = new Swiper(".swiper-clientes.linha-2", {
      slidesPerView: 2,
      spaceBetween: 16,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3.5,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1900: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
}