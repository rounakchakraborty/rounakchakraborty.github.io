function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function hideAll() {
  const sections = ['homeSection','workSection','aboutSection','blogSection','contactSection','resumeSection'];
  sections.forEach(id => document.getElementById(id).classList.add('hidden'));
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

function showBlog() {
  hideAll();
  document.getElementById('blogSection').classList.remove('hidden');
}

function showContact() {
  hideAll();
  document.getElementById('contactSection').classList.remove('hidden');
}

function showResume() {
  hideAll();
  document.getElementById('resumeSection').classList.remove('hidden');
}

function submitForm(event) {
  event.preventDefault();
  alert('Thank you for contacting me!');
}
