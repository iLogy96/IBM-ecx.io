//concat()
let arrayOne = [1, "1", 5];
let arrayTwo = [[2, 3], false];
let finalArray = arrayOne.concat(arrayTwo);
//mapa, slicno kao array, ali kreira automatski array iz funkcije
console.log(finalArray);
let arrayMap = [2, 4, 5, 7, 9];
const map1 = arrayMap.map((x) => Math.pow(x, 3));
console.log(map1);
//find()
function condition(human) {
  return human.age >= 18;
}
const arr = [
  {
    name: "Silvio",
    age: 19,
  },
  {
    name: "Zvonimir",
    age: 17,
  },
  {
    name: "Mario",
    age: 20,
  },
];
console.log(arr.find((x) => x.age < 19));
console.log(arr[0].age);
console.log(arr.find(condition));
//reduce()
const array2 = [5, 4, 66, 12, 33, 45, 90];
const reducer = (accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else return accumulator;
};
console.log(array2.reduce(reducer));
//[...] kloniranje polja
let a = [1, 2, 3, 4, 5];
let b = [...a];
console.log(b); //ako je a state koji se ne smije mijenjati, onda se radi kopija njega pod b.
//također moze spremat value jednog arraya u drugi, ali ne kao array
// Bond arrays contained in an array of objects using the spread operator and initial value.

let arrayReduce2 = [
  {
    name: "Junior",
    employees: ["John", "Doe", "Jane", "Doe"],
  },
  {
    name: "Senior",
    employees: ["Matija", "Daniel", "Mario", "Mateja"],
  },
];
let initial = ["Silvio"];
// expected output: ["Silvio", "John", "Doe", "Jane", "Doe", "Matija", "Daniel", "Mario", "Mateja"]

arrayReduce2.reduce((acc, value) => [...acc, ...value.employees], ["Silvio"]);
//slice()
let arraySlice = ['one', 'two', 'three', 'four', 'five', 'six'];
console.log(arraySlice.slice(-2)) //ide unazad i vraca zadnja dva
//sort()
console.log('Exercise template 13');
// Sort array of objects by name, ascending.
let arraySort = [
	{ name: 'Zagreb', postalCode: 10000, type: 1 },
	{ name: 'Varazdin', postalCode: 42000, type: 2 },
	{ name: 'Split', postalCode: 21000, type: 2 },
	{ name: 'Rijeka', postalCode: 51000, type: 3 },
	{ name: 'Osijek', postalCode: 31000 },
	{ name: 'Zadar', postalCode: 23000 }
];
// ako ovdje oću descending onda zamijenim brojeve...
const sortByName = (a, b) => {
	if (a.name < b.name) { return -1; }
	if (a.name > b.name) { return 1; }
	return 0;
}
const sortByName2 = (a,b) => a.name.localeCompare(b.name);
// console.log(arraySort.sort(sortByName));
console.log(arraySort.sort(sortByName2));
// expected output:
// [
//     { name: "Osijek", postalCode: 31000 }
//     { name: "Rijeka", postalCode: 51000, type: 3 }
//     { name: "Split", postalCode: 21000, type: 2 }
//     { name: "Varazdin", postalCode: 42000, type: 2 }
//     { name: "Zadar", postalCode: 23000 }
//     { name: "Zagreb", postalCode: 10000, type: 1 }
// ]

