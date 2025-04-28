// script.js

// Toggle navigation menu on mobile
function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

// Smoothly show only the targeted section
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navMenu');
  const links = nav.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section');

  links.forEach(link => {
    link.addEventListener('click', e => {
      // allow external links (like buymeacoffee) to work normally
      if (!link.getAttribute('href').startsWith('#')) return;
      e.preventDefault();

      // hide all sections
      sections.forEach(sec => sec.classList.add('hidden'));

      // show the one we clicked
      const targetID = link.getAttribute('href');
      const targetSection = document.querySelector(targetID);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }

      // collapse mobile menu if open
      if (nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });
});

// Form submission (mocked)
function submitForm(event) {
  event.preventDefault();
  alert('Form Submitted!');
}

// Resume download
function downloadResume() {
  // Make sure you have "resume.pdf" in your repo root
  window.location.href = 'resume.pdf';
}
