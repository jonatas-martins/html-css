var button = document.querySelector('#menu-b');
button.addEventListener('click', menu);

function menu() {
  var status = document.querySelector('.menu-hidden');

  if (status.style.display === 'block') {
    status.style.display = 'none';
  } else {
    status.style.display = 'block';
  }
}
