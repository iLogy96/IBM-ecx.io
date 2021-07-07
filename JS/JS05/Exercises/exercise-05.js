console.log('Exercise template 05');

function countriesUpperCase () {
	let countries = ['Germany', 'Austria', 'Croatia', 'Hungary'];
	for (let i = 0; i <= countries.length; i++) {
		countries[i] = countries[i].toUpperCase();
	}

	return countries;
}

console.log(countriesUpperCase());