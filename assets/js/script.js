// Menu burger pour mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Animation pour les éléments lorsqu'ils apparaissent à l'écran
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    burger.addEventListener('click', function() {
        // Basculer la classe active sur les liens de navigation
        navLinks.classList.toggle('active');
        
        // Basculer la classe menu-open sur le body
        body.classList.toggle('menu-open');
        
        // Animation du burger
        burger.classList.toggle('toggle');
    });

    // Fermer le menu lorsqu'un lien est cliqué (sur mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            burger.classList.remove('toggle');
        });
    });
});