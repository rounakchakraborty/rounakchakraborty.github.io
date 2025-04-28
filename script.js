\function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function hideAll() {
  ['homeSection','workSection','aboutSection','contactSection']
    .forEach(id => document.getElementById(id).classList.add('hidden'));
}

function showHome() {
  hideAll();
  document.getElementById('homeSection').classList.remove('hidden');
}

function showWork() {
  hideAll();
  document.getElementById('workSection').classList.remove('hidden');
}

function showAbout() {
  hideAll();
  document.getElementById('aboutSection').classList.remove('hidden');
}

function showContact() {
  hideAll();
  document.getElementById('contactSection').classList.remove('hidden');
}

// called when user clicks Download Resume button
function downloadResume() {
  window.location.href = 'Rounak_Chakraborty_Resume.pdf';
}

function submitForm(event) {
  event.preventDefault();
  alert('Thank you for contacting me!');
}

// initialize with Home visible
document.addEventListener('DOMContentLoaded', showHome);
