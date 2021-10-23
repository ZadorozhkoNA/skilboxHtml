//Ф-ия для ТОЛЬКО цифр
function selectKey( event ) {
  if ( !event.code ) return;
  if ( event.repeat ) event.preventDefault();
  const keyArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const keySuperArray = ['Enter', 'Delete', 'Backspace', 'Tab', 'Shift'];

  let control = false;
  for ( const key of keyArray ) {
    if ( event.code === `Digit${key}` || event.code === `Numpad${key}` ) {
      control = true;
      break;
    }
  }
  for ( const key of keySuperArray ) {
    if ( event.code === key ) {
      control = true;
      break;
    }
  }

  // if ( event.key === '.' || event.key === ',' ) control = true;

  if ( control === false ) {
    event.preventDefault();
  }
}

document.querySelectorAll('.price__input').forEach(item => {
  item.addEventListener('keydown', selectKey);
});





