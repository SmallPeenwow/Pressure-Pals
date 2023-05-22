import separateDateTimeDate from './separateDateTimeData.js';
import leftSideBookedDatesCard from './Card/leftSideBookedDatesCard.js';
import rightSideBookedDatesCard from './Card/rightSideBookedDatesCard.js';
import appointmentStatusCheck from './appointmentStatusCheck.js';

const createBookingDatesCard = async (dataBundle, parentDiv) => {
	dataBundle.map(async (array) => {
		let appointmentStatus = await appointmentStatusCheck(new Date(array[0]));

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

		parentDiv.appendChild(bookedDatesCard);

		// TODO: cell phone custom spacing
		let rightSideDetails = await rightSideBookedDatesCard(
			array[4],
			array[5] === 'null' ? 'No Surname' : array[5],
			array[6],
			array[3],
			appointmentStatus
		);

		bookedDatesCard.appendChild(rightSideDetails);
	});
};

export default createBookingDatesCard;
