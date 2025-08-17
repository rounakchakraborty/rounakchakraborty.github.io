function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');

  // close mobile menu after click
  const nav = document.getElementById('navMenu');
  nav.classList.remove('show');
}

function submitForm(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
}

function downloadResume() {
  window.open('documents/Rounak_Chakraborty_Resume.pdf', '_blank');
}
