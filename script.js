function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function openAbout() {
  document.getElementById("aboutSection").style.display = "block";
  document.getElementById("home").style.display = "none";
}

// Function to open home section
function openHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("aboutSection").style.display = "none";
}
