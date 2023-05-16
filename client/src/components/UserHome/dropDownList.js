const monthList = document.querySelector('#month-list');

window.onload = () => {
	monthListUpdate();
};

const monthNames = [
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

const monthListUpdate = () => {
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
