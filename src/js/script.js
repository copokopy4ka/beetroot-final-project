const tabsLinks = document.querySelectorAll('.about__tabs-link');
const contentArr = document.querySelectorAll('.about__content');

tabsLinks.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault()
    const contentsItemId = event.target.getAttribute('href');

    contentArr.forEach(function(item) {
      item.classList.remove('active');
    })
    tabsLinks.forEach(function(item) {
      item.classList.remove('active');
    })

    event.target.classList.add('active');
    document.querySelector(`${contentsItemId}`).classList.add('active');
  })
})
const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.header__burger');

burgerBtn.addEventListener('click', function() {
  if (header.classList.contains('active')) {
    header.classList.remove('active');
  } else {
    header.classList.add('active');
  }
});

document.addEventListener('click', function(event) {
  if (event.target !== burgerBtn && header.classList.contains('active')) {
    header.classList.remove('active');
  }
});
const tabsItems = document.querySelectorAll('.faq__tabs-title-holder');

tabsItems.forEach(item => {
  item.addEventListener('click', (event) => {
    const tabsItem = event.currentTarget;
    const tabsItemText = tabsItem.nextElementSibling;

    for (let elem of tabsItems) {
      if (elem.classList.contains('active') && elem !== tabsItem) {
        elem.classList.remove('active');
      }
    }

    if (tabsItem.classList.contains('active')) {
      tabsItem.classList.remove('active');
    } else {
      tabsItem.classList.add('active')
    }
  })
});
const introTitle = document.querySelector('.intro__title');
const introSubTitle = document.querySelector('.intro__subtitle');
const introBtn = document.querySelector('.intro__btn');
const introLink = document.querySelector('.intro__link');

function addClass(elem) {
  elem.classList.add('animated');
}

setTimeout(addClass, 500, introTitle);
setTimeout(addClass, 700, introSubTitle);
setTimeout(addClass, 1100, introBtn);
setTimeout(addClass, 1200, introLink);

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
const navLinks = document.querySelectorAll('.header__nav-link');
const sectionsId = document.querySelectorAll('section[id]');

document.addEventListener('scroll', (event) => {
  if(scrollY >= 300) {
    header.classList.add('fixed');
  }
  if (scrollY === 0) {
    header.classList.remove('fixed')
  }

  navLinks.forEach(elem => {
    const anchor = elem.getAttribute('href');
    const currentId = document.querySelector(anchor);

    if (scrollY + 100 >= currentId.offsetTop && scrollY < currentId.offsetTop + (currentId.scrollHeight / 1.5)) {
      elem.classList.add('current');
    } else {
      elem.classList.remove('current')
    }
  })
})
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