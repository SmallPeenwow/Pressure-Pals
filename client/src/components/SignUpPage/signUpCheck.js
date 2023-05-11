import isEmptyOrWhitespace from '../isEmptyOrWhitespace.js';
import makeSnackbarVisible from '../snackbar.js';
import inputBorderColorChange from '../inputBorderColorChange.js';

const signUpCheck = async (name, email, cellNumber, password, confirmPassword, snackbar) => {
	if (
		isEmptyOrWhitespace(name.value) &&
		isEmptyOrWhitespace(email.value) &&
		isEmptyOrWhitespace(password.value) &&
		isEmptyOrWhitespace(confirmPassword.value) &&
		isEmptyOrWhitespace(cellNumber.value)
	) {
		makeSnackbarVisible('Please fill in the required fields', snackbar);
		inputBorderColorChange(name);
		inputBorderColorChange(email);
		inputBorderColorChange(cellNumber);
		inputBorderColorChange(password);
		inputBorderColorChange(confirmPassword);
	} else if (isEmptyOrWhitespace(name.value)) {
		makeSnackbarVisible('Please enter in your Name.', snackbar);
		inputBorderColorChange(name);
	} else if (isEmptyOrWhitespace(email.value)) {
		makeSnackbarVisible('Please enter in your Email.', snackbar);
		inputBorderColorChange(email);
	} else if (isEmptyOrWhitespace(cellNumber.value)) {
		makeSnackbarVisible('Please enter in your Cell Number.', snackbar);
		inputBorderColorChange(cellNumber);
	} else if (isEmptyOrWhitespace(password.value)) {
		makeSnackbarVisible('Please enter in your Password.', snackbar);
		inputBorderColorChange(password);
	} else if (isEmptyOrWhitespace(confirmPassword.value)) {
		makeSnackbarVisible('Please enter in your Confirm Password.', snackbar);
		inputBorderColorChange(confirmPassword);
	}
};

export default signUpCheck;
