import signUpCheck from './signUpCheck.js';

const signUpForm = document.querySelector('#sign-up');
const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const cellNumber = document.querySelector('#cell-number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const address = document.querySelector('#address');
const suburb = document.querySelector('#suburb');
const snackBar = document.querySelector('#snack-bar');

signUpForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	await signUpCheck(name, email, cellNumber, password, confirmPassword, snackBar);
});
