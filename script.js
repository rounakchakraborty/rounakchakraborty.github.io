// Simple section switcher
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  // Scroll to top of content (beneath sticky header)
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile nav handling
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobile() {
  mobileMenu.hidden = true;
  navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.hidden = expanded; // toggle hidden
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!mobileMenu.hidden && !mobileMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMobile();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobile();
  });
}

// Contact form (prevent page reload for now)
function handleContact(e) {
  e.preventDefault();
  alert('Thanks! Your message has been captured.');
}
