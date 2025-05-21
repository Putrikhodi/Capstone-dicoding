document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility for all password = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Form submission
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.querySelector('input[type="checkbox"]').checked;
            
            // Here you would typically make an API call to your backend
            console.log('Login attempt with:', { email, password, rememberMe });
            
            // For demo purposes, show an alert
            alert('Login functionality would be implemented here!');
        });
    }


});
