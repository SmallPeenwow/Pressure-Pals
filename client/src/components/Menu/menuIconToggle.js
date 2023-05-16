const menu = document.querySelector('#menu');
const menuItems = document.querySelector('#menu-items');

menu.addEventListener('click', (e) => {
	e.preventDefault();

	if (menuItems.className === 'hidden') {
		menuItems.classList.remove('hidden');
		menuItems.classList.add('show');
		menuItems.style.display = 'flex';
	} else {
		menuItems.classList.remove('show');
		menuItems.classList.add('hidden');
		menuItems.style.display = 'none';
	}
});
