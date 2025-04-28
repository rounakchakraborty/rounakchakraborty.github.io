// Toggle navigation menu
function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('show');
}

// Show relevant section
function showSection(section) {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.add('hidden'));

  const activeSection = document.getElementById(`${section}Section`);
  activeSection.classList.remove('hidden');
}

// Resume Download (Placeholder)
function downloadResume() {
  window.location.href = 'path_to_your_resume.pdf';
}

// Submit contact form (Placeholder)
function submitForm(event) {
  event.preventDefault();
  alert('Thank you for reaching out!');
}
