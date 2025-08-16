
const swiperHeroAdvantages = new Swiper(".hero-facts__swiper", {
  speed: 700,
  loop: true,
  autoHeight: true,
  grabCursor: true,
  spaceBetween: 15,
  autoplay: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
