import refreshButtonDisableTimer from '../refreshButtonDisableTimer.js';

const refreshButton = document.querySelector('#refresh-action');

refreshButton.addEventListener('click', async () => {
	refreshButtonDisableTimer(refreshButton);
});
