function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function openAbout() {
  // Hide the home section and show the about section
  document.getElementById("home").classList.add("hidden");
  document.getElementById("aboutSection").classList.remove("hidden");
}

// Function to open home section
function openHome() {
  // Hide the about section and show the home section
  document.getElementById("aboutSection").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}
function toggleMenu() {
  var nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}

function openAbout() {
  var aboutSection = document.getElementById("aboutSection");
  aboutSection.classList.toggle("hidden");
}
