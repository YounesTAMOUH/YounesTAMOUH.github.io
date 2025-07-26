document.addEventListener('DOMContentLoaded', function() {
    // Éléments du menu burger
    const burger = document.getElementById('burgerBtn');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;

    // Gestion du menu burger
    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            // Basculer les classes
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
            body.classList.toggle('no-scroll');
            
            // Mettre à jour aria-expanded
            const isExpanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', !isExpanded);
        });

        // Fermer le menu quand un lien est cliqué (sur mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    burger.classList.remove('active');
                    body.classList.remove('no-scroll');
                    burger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Animation d'apparition des sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observer toutes les sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Ajouter ici d'autres scripts au besoin...
});