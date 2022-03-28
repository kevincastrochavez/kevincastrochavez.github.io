const rectangle = document.querySelector('.rectangle');
const loginText = document.querySelector('.login');
const signInText = document.querySelector('.signin');
const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.signUp-form');
const accountLink = document.querySelector('.account-link');

function addRemoveClass(adding, removing) {
  adding.classList.add('hidden');
  removing.classList.remove('hidden');
}

signInText.addEventListener('click', function () {
  rectangle.style.top = '40%';
  loginText.style.color = 'white';
  signInText.style.color = 'gray';

  addRemoveClass(loginForm, signUpForm);
});

loginText.addEventListener('click', function () {
  rectangle.style.top = '30%';
  loginText.style.color = 'gray';
  signInText.style.color = 'white';

  addRemoveClass(signUpForm, loginForm);
});

accountLink.addEventListener('click', function () {
  addRemoveClass(signUpForm, loginForm);

  rectangle.style.top = '30%';
  loginText.style.color = 'gray';
  signInText.style.color = 'white';
});
