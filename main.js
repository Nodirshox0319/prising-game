let menu = document.getElementById('burgermenu'),
    leftPanel = document.querySelector('.left--panel');


menu.addEventListener('click', () => {
    leftPanel.classList.toggle('active');
})
