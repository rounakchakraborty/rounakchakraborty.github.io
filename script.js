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
    try { history.replaceState(null, '', '#' + id); } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return false;
}

// Intercept clicks ONLY for same-page hash links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href');

  // If it's a pure hash (e.g., "#work") on the SAME page, handle via JS.
  if (href && href.startsWith('#')) {
    const id = href.slice(1);
    e.preventDefault();
    showSection(id);
    closeMobile();
    return;
  }

  // If it's a full/relative URL with a hash that points to THIS page, also handle.
  try {
    const url = new URL(href, location.href);
    if (url.origin === location.origin && url.pathname === location.pathname && url.hash) {
      const id = url.hash.slice(1);
      e.preventDefault();
      showSection(id);
      closeMobile();
      return;
    }
  } catch {
    // bad URL -> let browser handle
  }
});

// Open the right section if a hash is present on load
document.addEventListener('DOMContentLoaded', () => {
  const initial = (location.hash || '#home').replace('#', '');
  const sec = document.getElementById(initial);
  if (sec) showSection(initial);
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
