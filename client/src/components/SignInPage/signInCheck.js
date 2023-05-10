import makeSnackbarVisible from '../snackbar.js';

const snackbar = document.querySelector('#snack-bar');

const signInForm = document.querySelector('#signInForm');
const emailValue = document.querySelector('#email');

let es = new EventSource('http://localhost:3000/client/src/php/signIn.php');
let listener = function (event) {
	if (typeof event.data !== 'undefined') {
		console.log(event.data);
	}
};

es.addEventListener('open', listener);
es.addEventListener('message', listener);
es.addEventListener('error', listener);

// $.ajax({
// 	url: '../../php/signIn.php',
// 	dataType: 'json',
// 	success: function (data) {
// 		if (!data.success) {
// 			alert(data.error);
// 		}
// 	},
// 	error: function (error) {
// 		console.log(error);
// 	},
// });

// fetch('http://localhost:3000/client/src/php/signIn.php')
// 	.then((response) => response.json())
// 	.then((data) => {
// 		if (data.status === 1) {
// 			console.log(data.data);
// 		} else {
// 			console.error('Error fetching data');
// 		}
// 	})
// 	.catch((error) => {
// 		console.error('Error fetching data: ', error);
// 	});

signInForm.addEventListener('submit', (e) => {
	e.preventDefault();

	fetch('http://localhost:3000/client/src/php/signIn.php')
		.then((response) => response.json())
		.then((data) => {
			if (data.status === 1) {
				console.log(data.data);
			} else {
				console.error('Error fetching data');
			}
		})
		.catch((error) => {
			console.error('Error fetching data: ', error);
		});

	// let email = emailValue.value;

	// $.ajax({
	// 	type: 'GET',
	// 	url: '../../php/signIn.php',
	// 	dataType: 'json',
	// 	data: { email: email },
	// 	success: function (data) {
	// 		if (data.status == 'ok') {
	// 			alert(date.result.email);
	// 		}
	// 	},
	// });

	// if (isEmptyOrWhitespace(nameValue.value)) {
	// 	makeSnackbarVisible('Please enter in your Email.', snackbar);
	// 	InputBorderColorChange(nameValue);
	// 	return;
	// }

	// sendToHomePage();
});

const signInFunctionCheck = (isValid, responseType) => {
	if (!isValid) {
		InputBorderColorChange(emailValue);
		makeSnackbarVisible(responseType, snackbar);
	}
};

const isEmptyOrWhitespace = (stringValue) => {
	return !stringValue || stringValue.trim().length === 0;
};

const InputBorderColorChange = (inputTag) => {
	inputTag.style.border = '1px solid red';
};

// Will be removed and replaced with php server side check validation
const sendToHomePage = () => {
	window.open('../../../pages/userHome.html', '_parent');
};

emailValue.addEventListener('change', (e) => {
	e.preventDefault();

	if (!isEmptyOrWhitespace(emailValue.value)) {
		emailValue.style.border = 'none';
	}
});
