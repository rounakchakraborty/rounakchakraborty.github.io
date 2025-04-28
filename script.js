// script.js
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "flex";
}
