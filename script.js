// Toggle Menu (for future hamburger menu)
function toggleMenu() {
  const nav = document.querySelector("header nav");
  nav.classList.toggle("show");
}

// Mock contact form
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks! Your message has been submitted.");
});
