const refreshButtonDisableTimer = (button) => {
	disableRefreshButton(button);

	// Will Need to add put something in snackbar to make this known to user
	setTimeout(() => {
		button.disabled = false;
	}, 10000);
};

const disableRefreshButton = (button) => {
	button.disabled = true;
};

export default refreshButtonDisableTimer;
