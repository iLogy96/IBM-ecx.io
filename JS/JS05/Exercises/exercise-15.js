console.log('Exercise template 15');

let numbers = '';
for (let i = 0; i < 6; i += 2) {
	for (let j = i; j < 6; j++) {
		numbers += j;
	}
	numbers += ' ';
}

console.log(numbers);