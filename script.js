// Show a section
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile menu logic
const navToggle   = document.getElementById('navToggle');
const mobileMenu  = document.getElementById('mobileMenu');

function closeMobile() {
  if (!mobileMenu) return;
  mobileMenu.hidden = true;
  navToggle?.setAttribute('aria-expanded', 'false');
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.hidden = expanded;
  });

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!mobileMenu.hidden && !mobileMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMobile();
    }
  });

  // Escape to close
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobile(); });

  // If the user resizes to desktop width, ensure drawer is closed
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobile();
  });
}

// Contact form placeholder
function handleContact(e) {
  e.preventDefault();
  alert('Thanks! Your message has been captured.');
}

