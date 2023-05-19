import getUserLocalStorage from '../getUserFromLocalStorage.js';
import createBookingValuesForCard from './createBookingValuesForCard.js';

const innerTableContainerUserBookedDates = document.querySelector('.inner-table-container-user-booking-dates');

let userId;

window.onload = async () => {
	userId = getUserLocalStorage()[0];

	let values = await getUserBookings();
	await createBookingValuesForCard(values, innerTableContainerUserBookedDates);
};

const getUserBookings = async () => {
	const dataSubmit = new FormData();
	dataSubmit.append('user-id-bookings-requests', userId);

	return fetch('http://localhost:3000/server/index.php', {
		method: 'POST',
		body: dataSubmit,
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => console.log(error));
};

export default getUserBookings;
