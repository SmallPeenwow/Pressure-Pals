const basicClearStorageAndSendHomePage = async () => {
	localStorage.clear('pressure-pals-user');
	window.open('/client/landingPage.html', '_parent');
};

export default basicClearStorageAndSendHomePage;
