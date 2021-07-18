console.log('Exercise template 05');

// Find an object in an array by its name.

let arrayFind = [
	{ name: 'wood', quantity: 20 },
	{ name: 'paper', quantity: 40 },
	{ name: 'plastic', quantity: 5 }
];
console.log(arrayFind.find(element => element.name.startsWith('p') && element.quantity>20));

const array1=[5,12,8,130];
const isLargeNumber = (element) => element>13;

console.log(array1.indexOf(isLargeNumber));