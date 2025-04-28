function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function submitForm(event) {
  event.preventDefault();
  alert('Thank you for contacting me!');
}

function showHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
