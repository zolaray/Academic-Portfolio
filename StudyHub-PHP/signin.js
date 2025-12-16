window.onload = function() {
    const signInTab = document.querySelector('.form-toggle button:first-child');
    const signUpTab = document.querySelector('.form-toggle button:last-child');
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');

    signInTab.onclick = function() {
        signInTab.classList.add('active');
        signUpTab.classList.remove('active');
        signInForm.classList.add('active-form');
        signUpForm.classList.remove('active-form');
    };

    signUpTab.onclick = function() {
        signUpTab.classList.add('active');
        signInTab.classList.remove('active');
        signUpForm.classList.add('active-form');
        signInForm.classList.remove('active-form');
    };

  window.onload = function () {
    const signInForm = document.getElementById('signin-form');

    signInForm.onsubmit = function (e) {
        // Don't prevent submission here
        const email = signInForm.querySelector('input[name="email"]').value;
        const password = signInForm.querySelector('input[name="password"]').value;

        if (!email || !password) {
            e.preventDefault(); // only block if fields are empty
            alert("Please fill in all fields.");
            return false;
        }

        // ✅ Let PHP handle the rest on server
        // Optionally show a message after redirect in PHP instead
    };
};


    signUpForm.onsubmit = function(e) {
        const password = document.querySelector('#signup-form input[name="password"]');
        const confirmPassword = document.querySelector('#signup-form input[name="confirm_password"]');

        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            alert("Passwords don't match!");
            return false;
        }
        // No e.preventDefault here — allows form to submit normally if passwords match
    };
};
