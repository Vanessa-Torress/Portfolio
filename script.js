// Reveal elements on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Initial check

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });
}

// Certificate Modal Logic
const modal = document.getElementById("imageModal");
const expandedImg = document.getElementById("imgExpanded");
const closeBtn = document.querySelector(".close-modal");
const backdrop = document.querySelector(".modal-backdrop");

document.querySelectorAll('.cert-img-container').forEach(container => {
    container.onclick = function () {
        const img = this.querySelector('.cert-img');
        modal.style.display = "block";
        expandedImg.src = img.src;
        // Prevenir scroll do body
        document.body.style.overflow = 'hidden';
    }
});

// Close functions
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}

closeBtn.onclick = closeModal;
backdrop.onclick = closeModal;

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === "block") {
        closeModal();
    }
});
