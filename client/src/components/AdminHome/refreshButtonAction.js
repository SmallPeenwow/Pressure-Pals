import getPendingRequests from './onloadFetchPendingRequest.js';
import separateFetchedValues from './separateFetchedValues.js';
const innerTableContainerRequestCards = document.querySelector('.inner-table-container-request-cards');

const refreshAction = document.querySelector('#refresh-action');

refreshAction.addEventListener('click', async () => {
	let value = await getPendingRequests();

	await removeChildrenDiv(innerTableContainerRequestCards);
	await separateFetchedValues(value, innerTableContainerRequestCards);
});

const removeChildrenDiv = async (parent) => {
	while (parent.hasChildNodes()) {
		parent.removeChild(parent.firstChild);
	}
};
