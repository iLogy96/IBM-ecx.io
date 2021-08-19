document.addEventListener("DOMContentLoaded", function () {
	init();
});

const init = () => {
	fetchUsers().then(data => {
		renderCards(data);
		openModalBySearchParam(data);
	});
	bindClickListener();
}

const fetchUsers = () => {
	return fetch('https://jsonplaceholder.typicode.com/users')
	.then(data => {
		return data.json();
	})
	.catch(err => console.error("ERROR: Can't fetch users", err));
}

const renderCards = (data) => {
	const container = document.querySelector('.js-container');
	const source = document.querySelector('#cardTemplate').innerHTML;
	const template = Handlebars.compile(source);

	container.innerHTML = template({ data });
}

const openModalBySearchParam = (data) => {
	const cardId = getSearchParam('cardid');
	if (cardId) {
		const cardData = data.find(d => d.id == cardId);
		openModal(cardData);
	}
}

const openModal = (data) => {
	const modal = modalTemplate({ obj: data });
	document.body.innerHTML += modal;
}

const bindClickListener = () => {
	document.body.addEventListener('click', handleBodyClick);
	document.querySelector('#sorting').addEventListener('change', handleSorting);
	// we have a delay here of 500ms to prevent overload of the server if we would do a request on every keyup
	// after the user stops typing for 500ms we are calling handleSearch function
	document.querySelector('#search').addEventListener('keyup', debounce(handleSearch, 500));
}

const handleSorting = (e) => {
	const option = e.target.value;
	if (option === 'company') {
		fetchUsers().then(data => {
			data.sort((a, b) => sortAlphabetic(a.company.name, b.company.name));
			renderCards(data);
		});
	} else if (option === 'name') {
		fetchUsers().then(data => {
			data.sort((a, b) => sortAlphabetic(a.name, b.name));
			renderCards(data);
		});
	}
}

const handleSearch = () => {
	const value = document.querySelector('#search').value;
	fetchUsers().then(data => {
		const filteredData = data.filter(user => user.name.toUpperCase().includes(value.toUpperCase()));
		renderCards(filteredData);
	});
}

const sortAlphabetic = (a, b) => {
	const nameA = a.toUpperCase();
	const nameB = b.toUpperCase();
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	return 0;
}


const handleBodyClick = (e) => {
	const card = e.target.closest('.js-card');
	const modalClose = e.target.closest('.modal-exit');
	if (card) {
		const id = card.dataset.id;

		fetchUser(id).then(data => openModal(data));
		addSearchParam('cardid', id);
	} else if (modalClose) {
		modalClose.closest('.modal').remove();
	}
}

const fetchUser = (id) => {
	return fetch('https://jsonplaceholder.typicode.com/users/' + id)
	.then(response => response.json());
}

const addSearchParam = (key, value) => {
	let currentUrl = new URL(window.location);
	currentUrl.searchParams.set(key, value);
	window.history.pushState({}, '', currentUrl);
}

const getSearchParam = (key) => {
	const currentUrl = new URL(window.location);
	return currentUrl.searchParams.get(key);
}

// Template using template literals
const modalTemplate = ({ obj }) => {
	return `<div class="modal" id="modal-one">
  <div class="modal-bg modal-exit"></div>
  <div class="modal-container">
    <h1>${obj.company.name}</h1>
    <h2>${obj.company.catchPhrase} ${obj.company.bs}</h2>
    <a class="location-button" href="https://www.google.com/maps/dir/?api=1&destination=${obj.address.geo.lat},${obj.address.geo.lng}&travelmode=driving">Location</a>
    <button class="modal-close modal-exit">X</button>
  </div>
</div>`
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce = (func, wait) => {
	let timeout;

	return function executedFunction (...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

