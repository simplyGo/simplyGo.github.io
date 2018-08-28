const formGuestShow = document.getElementById('select-guests-show');
const formGuestSelect = document.getElementById('select-guests-select');

console.log(`index = ${formGuestSelect.selectedIndex}`);
console.log(`text = ${formGuestSelect[formGuestSelect.selectedIndex].text}`);
console.log(`placeholde = ${formGuestShow.getAttribute('placeholder')}`);

formGuestSelect.addEventListener('click', function() {
  const value = formGuestSelect[formGuestSelect.selectedIndex].text;
  console.log(`text = ${value}`);
  formGuestShow.setAttribute('value', value);
});
