// Handle the login form submission.
const loginHandler = async (event) => {
  event.preventDefault();
  // Do we need name for login??
  const name = document.querySelector('#name-login');
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //If login is successful, redirect to the home page.
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

//Select form and listen for form submission.
document.querySelector('.login-form').addEventListener('submit', loginHandler);
