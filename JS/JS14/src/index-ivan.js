document.addEventListener("DOMContentLoaded", function () {
	init();
});

const SELECTOR_CARD_CONTAINER = '.container';
const SELECTOR_TABLE_CONTAINER = '.table';
const TEMPLATE_USER_TABLE = '#usersTemplate';
const TEMPLATE_USER_CARD = '#cardTemplate';
const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

const init = () => {
	fetchUsers().then(data => {
		renderTemplateData(data, SELECTOR_CARD_CONTAINER, TEMPLATE_USER_CARD);
		renderTemplateData(data, SELECTOR_TABLE_CONTAINER, TEMPLATE_USER_TABLE);
	});
}

const renderTemplateData = (data, selector, template) => {
	const container = document.querySelector(selector);
	if (container) {
		const source = document.querySelector(template).innerHTML;
		const compiled = Handlebars.compile(source);

		container.innerHTML = compiled({ data });
	}
}

const fetchUsers = () => {
	return fetch(USERS_API_URL)
	.then(response => response.json())
	.catch(error => console.log(error));
}
