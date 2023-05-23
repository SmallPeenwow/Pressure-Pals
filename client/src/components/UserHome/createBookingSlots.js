import eventListenerDateSlot from './eventListenerDateSlot.js';

const createBookingSlots = (date, timeSlotArray, parentDiv) => {
	timeSlotArray.map((timeSlotId) => {
		let slotDiv = document.createElement('div');
		slotDiv.innerText = 'Available';

		slotDiv.setAttribute('id', date + ' ' + timeSlotId);
		slotDiv.addEventListener('click', eventListenerDateSlot);

		parentDiv.appendChild(slotDiv);
	});
};

export default createBookingSlots;
