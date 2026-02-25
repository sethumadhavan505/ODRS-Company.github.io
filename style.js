const authWrapper = document.querySelector('.auth-wrapper');
const loginTrigger = document.querySelector('.login-trigger');
const registerTrigger = document.querySelector('.register-trigger');

registerTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    authWrapper.classList.add('toggled');
});

loginTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    authWrapper.classList.remove('toggled');
});

/* ===== LOGIN REDIRECT ===== */
const loginForm = document.querySelector('.signin form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple validation (you can change later)
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    if(username !== "" && password !== ""){
        // Redirect to Home Page
        window.location.href = "home.html";
    } else {
        alert("Please enter username and password");
    }
});
