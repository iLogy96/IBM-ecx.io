console.log('Exercise template 08');

function whatIsThisDoing () {
	let type = 'person';
	let id = 1234;

	return type === 'person' || id === 4321 ? 'Yes' : 'No';
}

console.log(whatIsThisDoing());
// it returns Yes but should be No