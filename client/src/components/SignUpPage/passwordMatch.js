import inputPasswordBorder from '../inputPasswordBorder.js';
import inputBorderColorChange from '../inputBorderColorChange.js';
import isEmptyOrWhitespace from '../isEmptyOrWhitespace.js';

const passwordMatch = (password, confirmPassword) => {
	if (
		password.value === confirmPassword.value &&
		!isEmptyOrWhitespace(password.value) &&
		!isEmptyOrWhitespace(confirmPassword.value)
	) {
		inputPasswordBorder(password);
		inputPasswordBorder(confirmPassword);
	} else {
		inputBorderColorChange(password);
		inputBorderColorChange(confirmPassword);
	}
};

export default passwordMatch;
