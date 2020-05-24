document.getElementById('demo').innerHTML = 'Changed heading';

let clicked = false;

function displayDate() {
  clicked = !clicked;

  if (clicked) {
    document.getElementById('date').innerHTML = Date();
  } else {
    document.getElementById('date').innerHTML = 'Back to button';
  }
}
