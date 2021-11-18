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