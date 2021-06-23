let fruits = ['banana', 'lan', 'mleko'];
console.log(fruits)
console.log(fruits.length);
const object1 = {banana: 'voće', lan: 'žitarice' ,mleko:'piće'}
console.log(object1.banana,object1.lan,object1.mleko)
let kontakti = new Map();
kontakti.set('Ivan', {phone: '091-9210 675',adress:'Oboj 14'})
kontakti.set('Petra', {phone: '091 666 858', adress:'Dobriše Cesarića 12'})
kontakti.set('Hilarry', {phone:'213-555-1234',adress:'123 N 1st Avenue'})
console.log(kontakti.has('Ivan'))
console.log(kontakti.has('Petra'))
console.log(kontakti.has('Filip')) 
let brojevi = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5];
console.log(brojevi);
let numbers = new Set(brojevi);
console.log(numbers) 
console.log('mango' && 'mango' && 'Banana');
console.log('Banana' || 'Banana' || 'Mango');
console.log('Apple' && 'Mango' || 'Banana');
