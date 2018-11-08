// JS goes here

const navButtons = document.querySelector('.hidden-menu');
const hamburger = document.querySelector('.hamburger');
const hamburgerOpen = document.querySelector('#open-hamburger');
const hamburgerClose = document.querySelector('#closed-hamburger');

hamburger.addEventListener('click', function() {
    navButtons.classList.toggle('hidden');
    hamburgerOpen.classList.toggle('hidden');
    hamburgerClose.classList.toggle('hidden');
})