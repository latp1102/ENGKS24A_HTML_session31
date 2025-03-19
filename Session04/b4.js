let btnOpen = document.getElementById('openModal');
let overlay = document.querySelector('.overlay');
let btnClose = document.querySelector('.close');

btnOpen.addEventListener('click', function () {
  overlay.style.display = 'block';
});

btnClose.addEventListener('click', function () {
  overlay.style.display = 'none';
});
