/* =========================================================
   Aymane Saissi — Portfolio interactions
   ========================================================= */
document.addEventListener('DOMContentLoaded', function () {

    /* ---- Mobile nav toggle ---- */
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', function () {
            links.classList.toggle('open');
        });
        links.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { links.classList.remove('open'); });
        });
    }

    /* ---- Expandable project cards ---- */
    document.querySelectorAll('.project').forEach(function (card) {
        var head = card.querySelector('.project-head');
        var body = card.querySelector('.project-body');
        var toggleBtn = card.querySelector('.project-toggle');
        if (!head || !body) return;

        head.addEventListener('click', function () {
            var isOpen = card.classList.toggle('open');
            if (isOpen) {
                body.style.maxHeight = body.scrollHeight + 'px';
                if (toggleBtn) toggleBtn.textContent = '\u2013'; // en dash
            } else {
                body.style.maxHeight = '0px';
                if (toggleBtn) toggleBtn.textContent = '+';
            }
        });

        // Recalculate height when media loads while the card is open
        body.querySelectorAll('img, video').forEach(function (el) {
            el.addEventListener('load', recalc);
            el.addEventListener('loadedmetadata', recalc);
        });
        function recalc() {
            if (card.classList.contains('open')) {
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        }
    });

    /* ---- Scroll reveal ---- */
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        reveals.forEach(function (el, i) {
            el.style.transitionDelay = Math.min(i * 70, 280) + 'ms';
            io.observe(el);
        });
    } else {
        reveals.forEach(function (el) { el.classList.add('in'); });
    }
});
