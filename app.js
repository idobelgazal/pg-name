
function showSection(id) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleMode() {
  document.body.classList.toggle('light-mode');
}
