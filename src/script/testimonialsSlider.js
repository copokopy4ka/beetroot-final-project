$(function(){
  $('.testimonials__slider').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    prevArrow: $('.testimonials__btn-prev'),
    nextArrow: $('.testimonials__btn-next'),
    speed: 500,
    fade: true,
  });
});