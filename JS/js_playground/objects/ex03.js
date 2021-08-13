//find nađe prvog i ispiše ga, filter ih uzme sve
let arrayFind = [
	{ name: 'wood', quantity: 20 },
	{ name: 'paper', quantity: 40 },
	{ name: 'plastic', quantity: 5 }
];
console.log(arrayFind.filter(elem => elem.name.startsWith('p')));
console.log(arrayFind.map(object => `we have ${object.name} in this quantity ${object.quantity}`));

arrayFind.forEach(elem =>{
    console.log(`Name:${elem.name} - ${elem.quantity}`)
});

//ex03
const arrayFilter2 = [
    { name: "Apple", quantity: 459 },
    { name: "Banana", quantity: 312 },
    { name: "Orange", quantity: 650 },
    { name: "Mango", quantity: 123 },
    { name: "Grapes", quantity: 412 },
    { name: "Blueberries", quantity: 1905 },
  ];
let input = document.querySelector('#fruit-search');
let div1 = document.querySelector('.js-fruit-list');
input.addEventListener('keydown',function fruitList() {
    const value = input.value;
    const newList = arrayFilter2.filter(fruit => fruit.name.toUpperCase().includes(value.toUpperCase()));
    renderFruitList(newList);
});

function renderFruitList(arrayFilter2){
    div1.innerHTML = arrayFilter2.map(fruit => `<div>${fruit.name} - ${fruit.quantity}</div>`)
}
  