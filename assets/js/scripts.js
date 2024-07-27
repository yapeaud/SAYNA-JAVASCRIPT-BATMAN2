document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});