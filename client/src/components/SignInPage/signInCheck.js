import makeSnackbarVisible from '../snackbar.js';
import isEmptyOrWhitespace from '../isEmptyOrWhitespace.js';
import inputBorderColorChange from '../inputBorderColorChange.js';

const snackbar = document.querySelector('#snack-bar');

const signInForm = document.querySelector('#signInForm');
const emailValue = document.querySelector('#email');
const passwordValue = document.querySelector('#password');

signInForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	let access_level = '';

	if (isEmptyOrWhitespace(emailValue.value)) {
		makeSnackbarVisible('Please enter in your Email.', snackbar);
		inputBorderColorChange(emailValue);
		return;
	} else if (isEmptyOrWhitespace(passwordValue.value)) {
		makeSnackbarVisible('Please enter in your Password.', snackbar);
		inputBorderColorChange(passwordValue);
	} else {
		access_level = await getServerResponse();

		if (access_level === 'admin') {
			window.open('./adminHome.html', '_parent');
		} else if (access_level === 'client') {
			window.open('./userHome.html', '_parent');
		} else {
			makeSnackbarVisible('Check that your Email and Password is correctly', snackbar);
		}
	}
});

const getServerResponse = async () => {
	const dataSubmit = new FormData();
	dataSubmit.append('email', emailValue.value);
	dataSubmit.append('password', passwordValue.value);

	return fetch('http://localhost:3000/server/index.php', {
		method: 'POST',
		body: dataSubmit,
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
			return data;
		})
		.catch((error) => console.log(error));
};

emailValue.addEventListener('change', (e) => {
	e.preventDefault();

	if (!isEmptyOrWhitespace(emailValue.value)) {
		emailValue.style.border = 'none';
	}
});

passwordValue.addEventListener('change', (e) => {
	e.preventDefault();

	if (!isEmptyOrWhitespace(passwordValue.value)) {
		passwordValue.style.border = 'none';
	}
});
