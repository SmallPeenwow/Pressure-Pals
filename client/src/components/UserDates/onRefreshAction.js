import getUserLocalStorage from '../getUserFromLocalStorage.js';
import createBookingValuesForCard from './createBookingValuesForCard.js';
import getUserBookings from './onloadFetchUserBookings.js';

const refreshButton = document.querySelector('#refresh-button');
const innerTableContainerUserBookedDates = document.querySelector('.inner-table-container-user-booking-dates');

refreshButton.addEventListener('click', async () => {
	disableRefreshButton();
	startTimer();

	let userId = getUserLocalStorage()[0];

	let values = await getUserBookings(userId);
	await removeChildrenDiv(innerTableContainerUserBookedDates);
	await createBookingValuesForCard(values, innerTableContainerUserBookedDates);
});

const removeChildrenDiv = async (parent) => {
	while (parent.hasChildNodes()) {
		parent.removeChild(parent.firstChild);
	}
};

// Will Need to add put something in snackbar to make this known to user
const startTimer = () => {
	setTimeout(canUserRefreshButton, 10000);
};

const disableRefreshButton = () => {
	refreshButton.disabled = true;
};

const canUserRefreshButton = () => {
	refreshButton.disabled = false;
};
