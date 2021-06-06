const themeToggle   =   document.querySelector('.toggle-switch');
const body          =   document.querySelector('body');
const topBg         =   document.querySelector('.top-bg-color');
const cards         =   document.querySelectorAll('.card');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme-bg');
    topBg.classList.toggle('light-top-bg-wave');
    cards.forEach(card => {
        card.classList.toggle('light-card');
    });
});