import getUserLocalStorage from '../getUserFromLocalStorage.js';
import createBookingValuesForCard from './createBookingValuesForCard.js';
import getUserBookings from './onloadFetchUserBookings.js';
import refreshButtonDisableTimer from '../refreshButtonDisableTimer.js';

const refreshButton = document.querySelector('#refresh-button');
const innerTableContainerUserBookedDates = document.querySelector('.inner-table-container-user-booking-dates');

refreshButton.addEventListener('click', async () => {
	refreshButtonDisableTimer(refreshButton);

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
