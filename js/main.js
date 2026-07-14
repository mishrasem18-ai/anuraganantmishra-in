// Mobile Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');
if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Fade-in Animation
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.fade').forEach(el => observer.observe(el));
  document.querySelectorAll('.fade').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
} else {
  document.querySelectorAll('.fade').forEach(el => el.classList.add('visible'));
}
