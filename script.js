function toggleMenu() {
  var menu = document.getElementById("navMenu");
  menu.classList.toggle("open");
}

function showHome() {
  document.getElementById("homeSection").scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.classList.remove('hidden');
  section.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function submitForm(event) {
  event.preventDefault();
  alert('Thank you for contacting me! I will get back to you soon.');
  document.getElementById('contactForm').reset();
}
