import inputPasswordBorderColorGreen from '../inputPasswordBorderColorGreen.js';
import inputBorderColorChangeRed from '../inputBorderColorChangeRed.js';
import isEmptyOrWhitespace from '../isEmptyOrWhitespace.js';

const passwordMatch = (password, confirmPassword) => {
	if (password.value.length >= 7 && confirmPassword.value.length >= 7) {
		if (
			password.value === confirmPassword.value &&
			!isEmptyOrWhitespace(password.value) &&
			!isEmptyOrWhitespace(confirmPassword.value)
		) {
			inputPasswordBorderColorGreen(password);
			inputPasswordBorderColorGreen(confirmPassword);
		} else {
			inputBorderColorChangeRed(password);
			inputBorderColorChangeRed(confirmPassword);
		}
	}
};

export default passwordMatch;
