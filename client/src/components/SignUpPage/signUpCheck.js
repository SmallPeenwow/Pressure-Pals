import isEmptyOrWhitespace from '../isEmptyOrWhitespace.js';
import makeSnackbarVisible from '../snackbar.js';
import inputBorderColorChangeRed from '../inputBorderColorChangeRed.js';
import passwordGreaterCheck from './passwordGreaterCheck.js';

const signUpCheck = async (name, email, cellNumber, password, confirmPassword, snackbar) => {
	if (
		isEmptyOrWhitespace(name.value) &&
		isEmptyOrWhitespace(email.value) &&
		isEmptyOrWhitespace(password.value) &&
		isEmptyOrWhitespace(confirmPassword.value) &&
		isEmptyOrWhitespace(cellNumber.value)
	) {
		makeSnackbarVisible('Please fill in the required fields', snackbar);
		inputBorderColorChangeRed(name);
		inputBorderColorChangeRed(email);
		inputBorderColorChangeRed(cellNumber);
		inputBorderColorChangeRed(password);
		inputBorderColorChangeRed(confirmPassword);
	} else if (isEmptyOrWhitespace(name.value)) {
		makeSnackbarVisible('Please enter in your Name.', snackbar);
		inputBorderColorChangeRed(name);
	} else if (isEmptyOrWhitespace(email.value)) {
		makeSnackbarVisible('Please enter in your Email.', snackbar);
		inputBorderColorChangeRed(email);
	} else if (isEmptyOrWhitespace(cellNumber.value)) {
		makeSnackbarVisible('Please enter in your Cell Number.', snackbar);
		inputBorderColorChangeRed(cellNumber);
	} else if (isEmptyOrWhitespace(password.value)) {
		makeSnackbarVisible('Please enter in your Password.', snackbar);
		inputBorderColorChangeRed(password);
	} else if (isEmptyOrWhitespace(confirmPassword.value)) {
		makeSnackbarVisible('Please enter in your Confirm Password.', snackbar);
		inputBorderColorChangeRed(confirmPassword);
	} else {
		passwordGreaterCheck(password, confirmPassword, snackbar);
	}

	// return 0;
};

export default signUpCheck;
