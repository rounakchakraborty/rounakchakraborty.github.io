function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

function showHome() {
  document.getElementById('homeSection').classList.remove('hidden');
  document.getElementById('aboutSection').classList.add('hidden');
  document.getElementById('contactSection').classList.add('hidden');
}

function openAbout() {
  document.getElementById('homeSection').classList.add('hidden');
  document.getElementById('aboutSection').classList.remove('hidden');
  document.getElementById('contactSection').classList.add('hidden');
}

function openContact() {
  document.getElementById('homeSection').classList.add('hidden');
  document.getElementById('aboutSection').classList.add('hidden');
  document.getElementById('contactSection').classList.remove('hidden');
}
