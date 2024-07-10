document.getElementById('login-form_validation').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById('Email_error').style.display = 'none';
    document.getElementById('password_error').style.display = 'none';
  
    // Get form  input values
    const username = document.getElementById('Email_id').value;
    const password = document.getElementById('password').value;
  
    // Validation form fields
    let valid = true;
    
    if (!username || !ValidateEmail(username)) {
      document.getElementById('Email_error').textContent = 'Please enter a valid email.';
      document.getElementById('Email_error').style.display = 'block';
      valid = false;
    }
  
    if (!password || password.length < 6) {
      document.getElementById('password_error').textContent = 'Password must be at least 6 characters long.';
      document.getElementById('password_error').style.display = 'block';
      valid = false;
    }
    
  
    if (valid) {
      // Perform link API call
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        alert('Login successful!');
      })
      .catch(error => {
        alert('Login failed. Please try again.');
      });
    }
    
  });
  
  function ValidateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function togglePassword() {
    const passwordField = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show_password');
    if (showPasswordCheckbox.checked) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }