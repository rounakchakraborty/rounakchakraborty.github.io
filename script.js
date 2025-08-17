// ----------------------
// Navigation Menu Toggle
// ----------------------
function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

// ----------------------
// Form submission (mocked)
// ----------------------
function submitForm(event) {
  event.preventDefault();
  alert('Form Submitted!');
}

// ----------------------
// Resume download
// ----------------------
function downloadResume() {
  const resumeLink = 'path_to_resume.pdf'; // Update with actual resume file path
  window.location.href = resumeLink;
}

// ----------------------
// Header & Footer Hover Effect
// ----------------------
document.querySelectorAll("header, footer").forEach(section => {
  section.addEventListener("mousemove", e => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    section.style.setProperty("--x", x + "px");
    section.style.setProperty("--y", y + "px");
  });

  section.addEventListener("mouseleave", () => {
    // Reset effect when mouse leaves
    section.style.setProperty("--x", "50%");
    section.style.setProperty("--y", "50%");
  });
});
