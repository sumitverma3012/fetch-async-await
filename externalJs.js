const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6ef9ae7';
const API_USER_URL = 'https://reqres.in/api/users?page=2';
const API_SINGLE_USER = 'https://reqres.in/api/users/';

function getUserList() {
	fetch(API_USER_URL)
		.then(data => data.json())
		.then(response => populateData(response.data))
		.catch(error => console.log(error));
}


async function getUser(id) {
	try {
		let response = await fetch(API_SINGLE_USER + id);
		return response
	} catch (error) {
		console.log('inside', error);
		return error;
	}
}

function getUserDetails() {
	getUser('23')
		.then(response => {
			if (response.status != 200) {
				throw new Error('An error occured')
			} else {
				return response.json();
			}
		})
		.then(data => console.log(data))
		.catch(error => console.log(error));
}

function populateData(data) {
	let elem = document.getElementById('list');

	for (let i = 0; i < data.length; i++) {
		let newElement = document.createElement('div');

		let newImage = document.createElement('img');
		newImage.src = data[i].avatar;
		newElement.appendChild(newImage);


		elem.appendChild(newElement);
	}
}

getUserList();
getUserDetails();