// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

// Resume download
function downloadResume() {
  window.open('documents/Rounak_Chakraborty_Resume.pdf', '_blank');
}

// Mock contact form submission
function submitForm(event) {
  event.preventDefault();
  alert('Thank you! Your message has been sent.');
}
