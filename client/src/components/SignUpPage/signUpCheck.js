import isEmptyOrWhitespace from '../isEmptyOrWhitespace.js';
import makeSnackbarVisible from '../snackbar.js';
import inputBorderColorChangeRed from '../inputBorderColorChangeRed.js';
import passwordGreaterCheck from './passwordGreaterCheck.js';
import emailValidation from './emailValidation.js';
import passwordMatch from './passwordMatch.js';

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
		console.log('1');
		return false;
	} else if (isEmptyOrWhitespace(name.value)) {
		makeSnackbarVisible('Please enter in your Name.', snackbar);
		inputBorderColorChangeRed(name);

		console.log('2');
		return false;
	} else if (isEmptyOrWhitespace(email.value)) {
		makeSnackbarVisible('Please enter in your Email.', snackbar);
		inputBorderColorChangeRed(email);

		console.log('3');
		return false;
	} else if (!emailValidation(email.value)) {
		makeSnackbarVisible('Enter in Email correctly. Eg: example@example.com', snackbar);
		inputBorderColorChangeRed(email);

		console.log('4');
		return false;
	} else if (isEmptyOrWhitespace(cellNumber.value)) {
		makeSnackbarVisible('Please enter in your Cell Number.', snackbar);
		inputBorderColorChangeRed(cellNumber);

		console.log('5');
		return false;
	} else if (isEmptyOrWhitespace(password.value)) {
		makeSnackbarVisible('Please enter in your Password.', snackbar);
		inputBorderColorChangeRed(password);

		console.log('6');
		return false;
	} else if (isEmptyOrWhitespace(confirmPassword.value)) {
		makeSnackbarVisible('Please enter in your Confirm Password.', snackbar);
		inputBorderColorChangeRed(confirmPassword);

		console.log('7');
		return false;
	} else if (!passwordMatch(password, confirmPassword)) {
		passwordGreaterCheck(password, confirmPassword, snackbar);

		console.log('8');
		return false;
	}

	console.log('9');
	return true;
};

export default signUpCheck;
