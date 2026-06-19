// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== SCROLL REVEAL (Intersection Observer) =====
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -20px 0px',
  }
);

reveals.forEach((section) => {
  revealObserver.observe(section);
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// ===== LAZY LOAD IMAGES WITH FADE-IN =====
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  images.forEach((img) => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
    
    // If image is already cached
    if (img.complete) {
      img.style.opacity = '1';
    }
  });
});

// ===== KEYBOARD ACCESSIBILITY FOR MENU =====
menuBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navLinks.classList.toggle('show');
  }
});

// ===== CLOSE MENU ON ESCAPE KEY =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
  }
});

console.log('🔥 GOATED BARBERS · Fresh Cuts loaded!');