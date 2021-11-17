$(function(){
  $('.products__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    prevArrow: `<div class="products__arrow arrow-left"><i class="icon-left" aria-hidden="true"></i></div>`,
    nextArrow: `<div class="products__arrow arrow-right"><i class="icon-right" aria-hidden="true"></i></div>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});