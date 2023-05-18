import getWeekendDates from './getDatesWeekend.js';
import createDateDiv from './populateDateHolder.js';
import removeDivDateHolders from './removeDivDateHolders.js';

const monthList = document.querySelector('#month-list');
const dateHolderParent = document.querySelector('#date-holders-parent');

export const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

let weekendDays = [];
let previousMonth;

window.onload = async () => {
	await monthListUpdate();
	let currentMonth = monthList.value;
	previousMonth = monthList.value;

	weekendDays = await getWeekendDates(currentMonth, monthNames);

	for (let i = 0; i < weekendDays.length; i++) {
		createDateDiv(weekendDays[i], i, dateHolderParent);
	}
};

monthList.addEventListener('click', async (e) => {
	e.preventDefault();

	if (previousMonth !== monthList.options[monthList.selectedIndex].value) {
		previousMonth = monthList.options[monthList.selectedIndex].value;
		await removePreviousDays();

		weekendDays = await getWeekendDates(monthList.options[monthList.selectedIndex].value, monthNames);

		for (let i = 0; i < weekendDays.length; i++) {
			createDateDiv(weekendDays[i], i, dateHolderParent);
		}
	}
});

const monthListUpdate = async () => {
	for (let i = 0; i < monthNames.length; i++) {
		const option = document.createElement('option');
		option.innerText = monthNames[i];
		option.value = monthNames[i];
		monthList.appendChild(option);

		if (i === new Date().getMonth()) {
			option.selected = true;
		}
	}
};

const removePreviousDays = async () => {
	for (let i = 0; i < weekendDays.length; i++) {
		removeDivDateHolders(weekendDays[i] + '-' + i, dateHolderParent);
	}
};
