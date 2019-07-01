var box = document.querySelector('.box');
var currentClass = '';

function changeSide() {
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    box.classList.remove( currentClass );
  }
  box.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

