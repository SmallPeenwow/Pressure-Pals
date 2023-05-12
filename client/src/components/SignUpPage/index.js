import isEmptyOrWhitespace from '../isEmptyOrWhitespace.js';
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
	let serverResponse = ''; // Used to see if user was added
	let responseType;

	responseType = await signUpCheck(name, email, cellNumber, password, confirmPassword, snackBar);

	if (responseType) {
		let serverResponse = await submitUserDetails();
		console.log(serverResponse);

		// window.open('./adminHome.html', '_parent');
		//TODO make cookie for id
	}
});

const submitUserDetails = async () => {
	const dataSubmit = new FormData();
	// Might need to change to create-name
	dataSubmit.append('name', name.value);
	dataSubmit.append('surname', valueDefault(surname.value));
	dataSubmit.append('email', email.value);
	dataSubmit.append('cell-number', cellNumber.value);
	dataSubmit.append('password', password.value);
	dataSubmit.append('address', valueDefault(address.value));
	dataSubmit.append('suburb', valueDefault(suburb.value));

	return fetch('http://localhost:3000/server/index.php', {
		method: 'POST',
		body: dataSubmit,
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
};

const valueDefault = (value) => {
	if (isEmptyOrWhitespace(value)) {
		return 'null';
	}

	return value;
};
