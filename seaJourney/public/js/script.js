const catalogList = document.querySelectorAll('.catalog__item');
const showMoreButton = document.querySelector('.catalog__load-more');
const cardPrice = document.querySelectorAll('.card__price--cur');

function showCard(list, number, acc) {
  list.forEach((i) => {
    const displayStyle = window.getComputedStyle(i).display;
    if (displayStyle === 'none' && acc < number) {
      i.style.display = 'block';
      acc += 1;
    };
  })
}

showMoreButton.addEventListener('click', function() {
  // let counterItem = 0;
  let counterNone = 0;
  const cardNumber = 2;
  // catalogList.forEach((i) => {
  //   const displayStyle = window.getComputedStyle(i).display;
  //   counterItem = displayStyle === 'block' ? counterItem += 1 : counterItem;
  // })
  // cardNumber = counterItem % 2 === 0 ? 2 : 3;
  showCard(catalogList, cardNumber, counterNone);
});
