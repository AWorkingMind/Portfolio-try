const darkModeToggle = document.getElementById('darkModeToggle');
const bodybg = document.querySelector('.bodybg');

darkModeToggle.addEventListener('click', () => {
    bodybg.classList.toggle('dark-mode');
});