const form = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const popup = document.getElementById('popup');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = passwordInput.value;
    if (password === 'username') {
        openPopup();
    } else {
        alert('Incorrect password. Please try again.');
    }
});

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}
