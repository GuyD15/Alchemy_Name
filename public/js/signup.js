const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementsByClassName('email1').value.trim();
  const name = document.getElementsByClassName('name1').value.trim();
  const password = document.getElementsByClassName('password1').value.trim();
  const confirmPass = document.getElementsByClassName('email1').value.trim();
  

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, confirmPass}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/sign-up');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', loginFormHandler);