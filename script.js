// Toggle navigation menu on mobile
function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

// Form submission (mocked)
function submitForm(event) {
  event.preventDefault();
  alert('Form Submitted!');
}

// Resume download
function downloadResume() {
  const resumeLink = 'path_to_resume.pdf'; // Update with actual resume file path
  window.location.href = resumeLink;
}
