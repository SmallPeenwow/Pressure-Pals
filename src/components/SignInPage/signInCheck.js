import makeSnackbarVisible from '../snackbar.js';

const snackbar = document.querySelector('#snack-bar');

const signInForm = document.querySelector('#signInForm');
const nameValue = document.querySelector('#name');

signInForm.addEventListener('submit', (e) => {
	e.preventDefault();

	if (isEmptyOrWhitespace(nameValue.value)) {
		makeSnackbarVisible('Please enter in your name.', snackbar);
		InputBorderColorChange(nameValue);
		return;
	}

	sendToHomePage();
});

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

nameValue.addEventListener('change', (e) => {
	e.preventDefault();

	if (!isEmptyOrWhitespace(nameValue.value)) {
		nameValue.style.border = 'none';
	}
});
