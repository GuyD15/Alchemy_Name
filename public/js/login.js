const loginHandler = async (event) => {
  event.preventDefault();

<<<<<<< HEAD
  const name = document.querySelector('#name-login');
=======
  const name = document.querySelector('#name-login')
>>>>>>> 8ead3d4ba3ca83a3ee9a1c7588c917bdcbf9e7a2
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
