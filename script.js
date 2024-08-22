/* envolver tu código JavaScript en un evento */
document.addEventListener("DOMContentLoaded", function () {
    /* que funcion tiene esto */
    const themeToggleButton = document.getElementById('theme-toggle');

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Cambiar texto e icono según el modo
        if (document.body.classList.contains('dark-mode')) {
            this.querySelector('.text').textContent = 'Light Mode';
            this.querySelector('.icon').textContent = '☀️';
        } else {
            this.querySelector('.text').textContent = 'Dark Mode';
            this.querySelector('.icon').textContent = '🌙';
        }
    });

});
