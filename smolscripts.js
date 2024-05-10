function showMessage() {
    alert("Free was too lazy to implement this, so go bother him until he updates yours");
}
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const nav = document.querySelector('nav.navbar');
    // Toggle between bg-dark and bg-light based on the presence of dark-mode class
    nav.classList.toggle('bg-dark', body.classList.contains('dark-mode'));
    nav.classList.toggle('bg-light', !body.classList.contains('dark-mode'));
    const container = document.getElementById('container');
    container.className = document.body.classList.contains('dark-mode') ? 'highcharts-dark' : 'highcharts-light';
}
    

document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
        const body = document.body;
        body.classList.toggle('dark-mode');
        const nav = document.querySelector('nav.navbar');
        nav.className = 'navbar navbar-expand-lg bg-dark';
    }
    
});
