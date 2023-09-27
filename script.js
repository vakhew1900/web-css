const btnToggleTheme = document.querySelector('.btn-toggle-theme');
const body = document.querySelector('body');
btnToggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
});