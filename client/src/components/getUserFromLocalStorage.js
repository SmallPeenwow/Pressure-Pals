const getUserLocalStorage = () => {
	let id = localStorage.getItem('pressure-pals-user');
	let array = id.split(',');

	return array;
};

export default getUserLocalStorage;
