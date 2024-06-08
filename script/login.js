

function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // In a real-world scenario, you should validate the credentials on the server.
  // For simplicity, we'll use a hardcoded check here.
  if (!username === username && password ===password) {
    // Store the username in local storage.
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

     

    // Redirect to another page or perform any other actions after successful login.
    alert('Login successful! Redirecting...');
    window.location.href='../index.html';
    // Add your redirection logic here.
  } else {
    alert('Invalid username or password');
  }
}