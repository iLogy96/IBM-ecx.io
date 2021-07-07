console.log('Exercise template 06');

function fruitsHider (fruits) {
	const fruitsArray = fruits.split(',');
	let allFruits = '';
	for (let i = fruitsArray.length; i >= 0; i--) {
		let hideLength = Math.ceil(fruitsArray[i].length / 2);
		let hiddenFruit = fruitsArray[i].slice(0, hideLength) + '...';
		allFruits += hiddenFruit;
	}

	return allFruits;
}

console.log(fruitsHider('apple, banana, orange, blueberry'));