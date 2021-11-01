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
