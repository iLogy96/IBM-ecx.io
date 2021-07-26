//funkcija koja provjerava je li input array, ako je vraća True, inače, False
let isArray = (input) => Array.isArray(input);
console.log(isArray("w3resource"));
console.log(isArray([1, 2, 3, 4]));
//funkcija koja klonira array
let cloneArray = (input) => {
  return [...input];
};
console.log(cloneArray([1, 2, 4, 3]));
//funkcija koja vraća n elemenata arraya
let firstElement = (array, n) => {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
};
console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([7, 9, 0, -2], 3));
console.log(firstElement([7, 9, 0, -2], 6));
console.log(firstElement([7, 9, 0, -2], -3));
//funkcija koja vraća zadnji element ili n zadnjih elemenata, reverse redoslijedom
let lastElement = (array, n) => {
  if (n === undefined) {
    return array.slice(-1);
  } else {
    return array.slice(-n).reverse();
  }
};
console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([7, 9, 0, -2], 3));
console.log(lastElement([7, 9, 0, -2], 6));
//funkcija koja vraća elemente arraya u string
let myColor = ["Red", "Green", "White", "Black"];
const arrayToString = (array) => array.join(",");
console.log(arrayToString(myColor));
//funkcija koja accepta number as input i inserta - između svaka dva parna broja
let dashedNumber = (number) => {
  let num = number.toString().trim().split("");
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {
      result.push("-", num[i]);
    } else {
      result.push(num[i]);
    }
  }
  return result.join("");
};
console.log(dashedNumber(234466));
//funkcija koja sortira array iteme unutar arraya
const arraySort = (array) => array.sort();
console.log(arraySort([3, 8, 7, 6, 5, -4, -3, 2, 1]));
//funkcija koja ispisuje najviše ponavljanju stvar u arrayu i ispisuje ju
const arrayFrequency = (array) => {
  let counter = 0;
  let counter2 = 1;
  let checker;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        counter++;
      }
      if (counter2 < counter) {
        counter2 = counter;
        checker = array[i];
      }
    }
    counter = 0;
  }
  return `${checker} se ponavlja u arrayu ${counter2} puta`;
};
console.log(
  arrayFrequency([3, "a", 4, 5, 6, 7, "a", "a", "a", 2, 5, 6, "a", 7])
);
//funkcija koja uzima string i mijenja svako drugo slovo u uppercase
const stringSetter = (myString) => {
  let transformed = "";
  for (let i = 0; i < myString.length; i++) {
    if (i % 2) {
      transformed += myString[i].toLowerCase();
    } else {
      transformed += myString[i].toUpperCase();
    }
  }
  return transformed;
};
console.log(stringSetter("The Quick Brown Fox"));
//funkcija koja printa elemente iz nested arraya
let array1 = [
  [1, 2, [1, 2, 3], 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
const printArrays = (array) => {
  for (let i in array) {
    console.log("row " + i);
    for (let j in array[i]) {
      console.log(" " + array[i][j]);
    }
  }
};
console.log(printArrays(array1));
console.log(array1.flat(2));
//sum of two arrays
let array3 = [];
let ctr = 0;
let x = 0;
const sumArrays = (arr1, arr2) => {
  while (ctr < arr1.length && ctr < arr2.length) {
    array3.push(arr1[ctr] + arr2[ctr]);
    ctr++;
  }
  if (ctr === arr1.length) {
    for (ctr = x; x < arr2.length; x++) {
      array3.push(arr2[x]);
    }
  } else {
    for (x = ctr; x < arr2.length; x++) {
      array3.push(arr1[x]);
    }
  }
  return array3;
};
console.log(sumArrays([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
//find duplicates in array and push in new array
function find_duplicate_in_array(arra1) {
  var object = {};
  var result = [];

  arra1.forEach(function (item) {
    if (!object[item]) 
    object[item] = 0;
    object[item] += 1;
  });

  for (var prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }
  console.log(object)
  return result;
}
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
//remove null,0,false and undefined from array
let arrayOne = []
function removeIt (arr) {
  arr.forEach((item) => {
    if (typeof item === 'number'){
      arrayOne.push(item)
    }
  })
  return arrayOne
}
console.log(removeIt([0, 15, false, -22, '',undefined, 47, null]))
//sort objects by title value
let library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];
console.log(library.sort((a,b) => a.title.localeCompare(b.title)));
// console.log(library.sort((a,b) => a.title.localeCompare(b.title)));
