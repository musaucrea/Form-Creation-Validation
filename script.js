document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        if (username && email && password) {
            feedback.textContent = 'Registration successful!';
            feedback.style.color = '#4CAF50';
            feedback.style.backgroundColor = '#d4edda';
        } else {
            feedback.textContent = 'Please fill out all fields.';
            feedback.style.color = '#d8000c';
            feedback.style.backgroundColor = '#ffbaba';
        }

        let isValid = true;
        const messages = [];

        // Perform validation
        if (!username) {
            isValid = false;
            messages.push('Username is required.');
        }

        if (!email) {
            isValid = false;
            messages.push('Email is required.');
        }

        if (!password) {
            isValid = false;
            messages.push('Password is required.');
        }

        // Display feedback
        if (isValid) {
            feedback.textContent = 'Registration successful!';
            feedback.style.color = '#4CAF50';
            feedback.style.backgroundColor = '#d4edda';
        } else {
            feedback.textContent = messages.join(' ');
            feedback.style.color = '#d8000c';
            feedback.style.backgroundColor = '#ffbaba';
        }

        feedback.style.display = 'block';
    });
});
