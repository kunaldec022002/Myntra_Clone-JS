document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create an object to store the contact details
  const contactDetails = {
      name: name,
      email: email,
      message: message
  };

  // Save to local storage
  localStorage.setItem('contactDetails', JSON.stringify(contactDetails));

  // Display response message
  document.getElementById('responseMessage').innerText = 'Your message has been submitted!';

  // Clear the form
  document.getElementById('contactForm').reset();
});