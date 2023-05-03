import makeSnackbarVisible from '../snackbar.js';

const snackbar = document.querySelector('#snack-bar');

const signInForm = document.querySelector('#signInForm');
const nameValue = document.querySelector('#name');

signInForm.addEventListener('submit', (e) => {
	e.preventDefault();

	if (isEmptyOrWhitespace(nameValue.value)) {
		makeSnackbarVisible('Please enter your name.', snackbar);
		InputBorderColorChange(nameValue);
	}
});

function isEmptyOrWhitespace(stringValue) {
	return !stringValue || stringValue.trim().length === 0;
}

const InputBorderColorChange = (inputTag) => {
	inputTag.style.border = '1px solid red';
};

nameValue.addEventListener('change', (e) => {
	e.preventDefault();

	if (!isEmptyOrWhitespace(nameValue.value)) {
		nameValue.style.border = 'none';
	}
});
