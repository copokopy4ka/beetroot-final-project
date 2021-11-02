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
