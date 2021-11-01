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
    setTimeout(function() {
      document.querySelector(`${contentsItemId}`).classList.add('active');
    }, 100)
  })
})