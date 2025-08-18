// ---------- Section switching ----------
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  let found = false;

  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.add('active');
      sec.removeAttribute('hidden');
      sec.setAttribute('aria-hidden', 'false');
      found = true;
    } else {
      sec.classList.remove('active');
      sec.setAttribute('hidden', '');
      sec.setAttribute('aria-hidden', 'true');
    }
  });

  if (found) {
    // Keep URL hash in sync and scroll to top
    try { history.replaceState(null, '', '#' + id); } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return false;
}

// Handle clicks for ANY element that has data-section
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-section]');
  if (!link) return;

  const id = link.getAttribute('data-section');
  if (!id) return;

  e.preventDefault();
  showSection(id);
  closeMobile();
});

// Open the right section if a hash is present on load
document.addEventListener('DOMContentLoaded', () => {
  const initial = (location.hash || '#home').replace('#', '');
  showSection(initial);
});

// ---------- Mobile menu ----------
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

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

  document.addEventListener('click', (e) => {
    if (!mobileMenu.hidden && !mobileMenu.contains(e.target) && !navToggle.contains(e.target)) {
      closeMobile();
    }
  });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobile(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMobile(); });
}

// ---------- Contact form placeholder ----------
function handleContact(e) {
  e.preventDefault();
  alert('Thanks! Your message has been captured.');
}
