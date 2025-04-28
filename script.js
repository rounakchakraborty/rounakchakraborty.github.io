function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu.classList.contains('show')) {
    navMenu.classList.remove('show');
    navMenu.classList.add('hidden');
  } else {
    navMenu.classList.remove('hidden');
    navMenu.classList.add('show');
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    toggleMenu();
  }
}

function openAbout() {
  const aboutSection = document.getElementById('aboutSection');
  aboutSection.classList.remove('hidden');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}
