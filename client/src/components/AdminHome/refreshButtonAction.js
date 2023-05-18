import getPendingRequests from './onloadFetchPendingRequest.js';

const refreshAction = document.querySelector('#refresh-action');

refreshAction.addEventListener('click', async () => {
	let value = await getPendingRequests();

	console.log('work', value);
});
