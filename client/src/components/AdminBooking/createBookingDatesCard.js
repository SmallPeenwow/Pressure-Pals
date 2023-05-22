import separateDateTimeDate from './separateDateTimeData.js';
import leftSideBookedDatesCard from './Card/leftSideBookedDatesCard.js';
import rightSideBookedDatesCard from './Card/rightSideBookedDatesCard.js';
import appointmentStatusCheck from './appointmentStatusCheck.js';

const createBookingDatesCard = async (dataBundle, parentDiv) => {
	let inProgressDate = [];

	dataBundle.map(async (array, index) => {
		let appointmentStatus = await appointmentStatusCheck(new Date(array[0]));

		//if (appointmentStatus !== 'In Progress...') {
		let bookedDatesCardClassValue =
			appointmentStatus === 'Completed'
				? 'completed'
				: appointmentStatus === 'Not Completed'
				? 'not-completed'
				: 'in-progress';

		const bookedDatesCard = document.createElement('div');
		bookedDatesCard.setAttribute('id', 'booked-dates-card');
		bookedDatesCard.setAttribute('class', bookedDatesCardClassValue);

		let dateArray = await separateDateTimeDate(array[0]);
		let leftSideDetails = await leftSideBookedDatesCard(dateArray[0], dateArray[1], array[1], array[2]);

		bookedDatesCard.appendChild(leftSideDetails);

		// TODO: cell phone custom spacing
		let rightSideDetails = await rightSideBookedDatesCard(
			array[4],
			array[5] === 'null' ? 'No Surname' : array[5],
			array[6],
			array[3],
			appointmentStatus
		);

		bookedDatesCard.appendChild(rightSideDetails);

		if (appointmentStatus !== 'In Progress...') {
			parentDiv.appendChild(bookedDatesCard);
		} else {
			parentDiv.prepend(bookedDatesCard);
		}
		//} else {
		//	inProgressDate = array;
		//}

		// if (dataBundle.length === index + 1) {
		// 	const bookedDatesCard = document.createElement('div');
		// 	bookedDatesCard.setAttribute('id', 'booked-dates-card');
		// 	bookedDatesCard.setAttribute('class', 'in-progress');

		// 	let dateArray = await separateDateTimeDate(inProgressDate[0]);
		// 	let leftSideDetails = await leftSideBookedDatesCard(
		// 		dateArray[0],
		// 		dateArray[1],
		// 		inProgressDate[1],
		// 		inProgressDate[2]
		// 	);

		// 	bookedDatesCard.appendChild(leftSideDetails);

		// 	// TODO: cell phone custom spacing
		// 	let rightSideDetails = await rightSideBookedDatesCard(
		// 		inProgressDate[4],
		// 		inProgressDate[5] === 'null' ? 'No Surname' : inProgressDate[5],
		// 		inProgressDate[6],
		// 		inProgressDate[3],
		// 		appointmentStatus
		// 	);

		// 	bookedDatesCard.appendChild(rightSideDetails);

		// 	parentDiv.prepend(bookedDatesCard);
		// }
	});
};

export default createBookingDatesCard;
