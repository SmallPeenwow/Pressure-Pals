import makeSnackbarVisible from '../snackbar.js';

// NOTE: if can fetch without using server side change things and also change files paths because of fook up

const snackbar = document.querySelector('#snack-bar');

const signInForm = document.querySelector('#signInForm');
const emailValue = document.querySelector('#email');
const passwordValue = document.querySelector('#password');

// let es = new EventSource('http://localhost:3000/client/src/php/signIn.php');
// let listener = function (event) {
// 	if (typeof event.data !== 'undefined') {
// 		console.log(event.data);
// 	}
// };

// es.addEventListener('open', listener);
// es.addEventListener('message', listener);
// es.addEventListener('error', listener);

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

	//getApi();

	// const formData = new FormData(signInForm);

	// fetch('http://localhost:3000/client/src/php/signIn.php', {
	// 	method: 'POST',
	// 	mode: 'no-cors',
	// 	body: formData,
	// })
	// 	.then(function (response) {
	// 		return response.text();
	// 	})
	// 	.then(function (text) {
	// 		console.log(text);
	// 	})
	// 	.catch(function (error) {
	// 		console.error(error);
	// 	});

	let user = {
		email: emailValue.value,
		password: passwordValue.value,
	};

	fetch('http://localhost:3000/client/src/php/signIn.php', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(user),
	})
		.then(function (response) {
			console.log(response);
			return response.json();
		})
		.then(function (data) {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});

	// fetch('http://localhost:3000/client/src/php/signIn.php')
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		console.log((data));
	// 		// if (data.status === 1) {
	// 		// 	// console.log(data);
	// 		// 	sendToHomePage();
	// 		// } else {
	// 		// 	console.error('Error fetching data');
	// 		// }
	// 	})
	// 	.catch((error) => console.error(error));

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

async function getApi() {
	const dataSubmit = new FormData();
	dataSubmit.append('action', 'loginCheck');

	fetch('http://localhost:3000/client/src/php/signIn.php', {
		method: 'POST',
		body: dataSubmit,
	})
		.then((response) => response.text())
		.then((data) => {
			console.log(data);
			if (data.status === 1) {
				console.log(data.data);
			} else {
				console.error('Error fetching data');
			}
		})
		.catch((error) => {
			console.error('Error fetching data: ', error);
		});
	// .then((response) => response.json())
	// .then((result) => console.log(result))
	// .catch((error) => console.error(error));

	// const response = await fetch(url);

	// let data = await response.json();
	// console.log(data);
}

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
