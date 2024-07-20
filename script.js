document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        if (username && email && password) {
            feedback.textContent = 'Registration successful!';
            feedback.style.color = '#4CAF50';
            feedback.style.backgroundColor = '#d4edda';
        } else {
            feedback.textContent = 'Please fill out all fields.';
            feedback.style.color = '#d8000c';
            feedback.style.backgroundColor = '#ffbaba';
        }

        feedback.style.display = 'block';
    });
});
