function signup() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  if (username === '' || email === '' || password === '') {
      message.textContent = 'All fields are required!';
      return;
  }

  // Save user data to localStorage
  const user = {
      username: username,
      email: email,
      password: password,
  };

  // Check if the email is already registered
  if (localStorage.getItem(email)) {
      message.textContent = 'User already exists with this email!';
      return;
  }

  window.location.href='../index.html';

  // Store user data in localStorage
  localStorage.setItem(email, JSON.stringify(user));
  message.style.color = 'green';
  message.textContent = 'Signup successful!';

  // Clear input fields
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}
