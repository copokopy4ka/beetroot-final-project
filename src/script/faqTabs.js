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