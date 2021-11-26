const body = document.querySelector('body');
const loginBtn = document.querySelector('.header__btn_login');
const loginModal = document.querySelector('.login-modal');
const loginModalBtn = document.querySelector('.login-modal__btn');
const loginModalClose = document.querySelector('.login-modal__close');
const changeModal = document.querySelector('.change-modal');
const loginModalText = document.querySelector('.login-modal__text');
const loginModalTitile = document.querySelector('.login-modal__title');

loginBtn.addEventListener('click', () => {
  loginModal.classList.add('showed');
  body.classList.add('no-scroll');
  header.classList.add('modal-opened');
})

loginModalClose.addEventListener('click', () => {
  loginModal.classList.remove('showed');
  body.classList.remove('no-scroll');
  header.classList.remove('modal-opened');
})

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('no-scroll')) {
    loginModal.classList.remove('showed');
    body.classList.remove('no-scroll');
    header.classList.remove('modal-opened');
  }
})

changeModal.addEventListener('click', (event) => {
  loginModal.classList.add('change-modal');

  if(loginModalTitile.innerText === 'Log in') {
    setTimeout(() => {
      loginModalText.innerText = 'Already have an account?';
      changeModal.innerText = 'Log in';
      loginModalBtn.innerText = 'Sing up';
      loginModalTitile.innerText = 'Sing up';
    }, 400);
  } else {
    setTimeout(() => {
      loginModalText.innerText = 'Need an account?';
      changeModal.innerText = 'Sing up';
      loginModalBtn.innerText = 'Log in';
      loginModalTitile.innerText = 'Log in';
    }, 400);
  }

  

  setTimeout(() => {
    loginModal.classList.remove('change-modal');
  }, 850);
  
})