function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

function openAbout() {
  document.getElementById('aboutSection').classList.remove('hidden');
  document.getElementById('contactSection').classList.add('hidden');
}

function openContact() {
  document.getElementById('aboutSection').classList.add('hidden');
  document.getElementById('contactSection').classList.remove('hidden');
}
