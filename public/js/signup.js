//Handle the signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const confirmPass = document.querySelector('#confirmpass').value.trim();

  if (password == confirmPass) {
    signup();
  } else {
    alert('Please check your password and try again.')
  };
  
  async function signup() {
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
 }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);


