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