function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function showHome() {
  document.getElementById("homeSection").classList.remove("hidden");
  document.getElementById("workSection").classList.add("hidden");
  document.getElementById("aboutSection").classList.add("hidden");
  document.getElementById("contactSection").classList.add("hidden");
}

function showWork() {
  document.getElementById("workSection").classList.remove("hidden");
  document.getElementById("homeSection").classList.add("hidden");
  document.getElementById("aboutSection").classList.add("hidden");
  document.getElementById("contactSection").classList.add("hidden");
}

function showAbout() {
  document.getElementById("aboutSection").classList.remove("hidden");
  document.getElementById("homeSection").classList.add("hidden");
  document.getElementById("workSection").classList.add("hidden");
  document.getElementById("contactSection").classList.add("hidden");
}

function showContact() {
  document.getElementById("contactSection").classList.remove("hidden");
  document.getElementById("homeSection").classList.add("hidden");
  document.getElementById("workSection").classList.add("hidden");
  document.getElementById("aboutSection").classList.add("hidden");
}

function downloadResume() {
  window.location.href = 'https://yourresumeurl.com'; // Update this link
}

function submitForm(event) {
  event.preventDefault();
  alert("Your message has been sent!");
}
