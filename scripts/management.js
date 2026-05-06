const VALID_USERNAME = "admin";
const VALID_PASSWORD = "bsdp";

document.getElementById('passwordInput').addEventListener('keydown', e => {
if (e.key === 'Enter') attemptLogin();
});

function attemptLogin() {
const user = document.getElementById('usernameInput').value.trim();
const pass = document.getElementById('passwordInput').value;
const err = document.getElementById('errorMsg');

if (user === VALID_USERNAME && pass === VALID_PASSWORD) {
document.getElementById('loginOverlay').style.display = 'none';
document.getElementById('mainContent').style.display = 'block';
err.classList.remove('visible');
} else {
err.classList.add('visible');
document.getElementById('passwordInput').value = '';
document.getElementById('passwordInput').focus();
}
}