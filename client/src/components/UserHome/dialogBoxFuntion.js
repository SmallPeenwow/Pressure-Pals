const cancelButton = document.querySelector('#dialog-box-button-cancel');
const dialogBox = document.querySelector('.dialog-box');
const dialogBoxContainer = document.querySelector('.dialog-box-container');
const dialogButtonCancel = document.querySelector('#dialog-box-button-cancel');
const dialogButtonAccept = document.querySelector('#dialog-box-button-accept');

dialogButtonCancel.addEventListener('click', (e) => {
	e.preventDefault();

	dialogBox.style.display = 'none';
});

document.addEventListener('click', (e) => {
	if (e.target.className === dialogBox.className) {
		dialogBox.style.display = 'none';
	}
});

dialogButtonAccept.addEventListener('click', (e) => {
	e.preventDefault();

	console.log('work');
});
