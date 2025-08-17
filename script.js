// Show only one section at a time
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Contact form dummy
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks! Your message has been submitted.");
  });
});
