const form = document.querySelector('.login-form');
const { email, password } = form.elements;

email.addEventListener('focus', () => {
  email.placeholder = 'Type area';
});
password.addEventListener('focus', () => {
  password.placeholder = 'Type area';
});

email.addEventListener('blur', () => {
  email.placeholder = '';
});
password.addEventListener('blur', () => {
  password.placeholder = '';
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
});
