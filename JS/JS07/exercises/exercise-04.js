console.log("Exercise template 04");

// Filter array items based on search criteria.

const arrayFilter2 = [
  { name: "Apple", quantity: 459 },
  { name: "Banana", quantity: 312 },
  { name: "Orange", quantity: 650 },
  { name: "Mango", quantity: 123 },
  { name: "Grapes", quantity: 412 },
  { name: "Blueberries", quantity: 1905 },
];

const fruitSearchInput = document.querySelector("#fruitSearch");
fruitSearchInput.addEventListener("keyup", (event) => {
  const value = event.target.value;
  const newList = arrayFilter2.filter(fruit => fruit.name.toUpperCase().includes(value.toUpperCase()));
  renderFruitList(newList);
});

renderFruitList(arrayFilter2);

function renderFruitList(arrayFilter2) {
  const fruitListElement = document.querySelector(".js-fruit-list");
  fruitListElement.innerHTML =  arrayFilter2.map(fruit =>`<div>${fruit.name} - ${fruit.quantity}</div>`).join('');
  ;
}
  // arrayFilter2.forEach((fruit) => {
  //   rendered += `<div>${fruit.name} - ${fruit.quantity}</div>`;
  // }); - mapa zamjenjuje forEach

// Template literals
// `<div class="container">Example</div>`
// `<div>${customVariable}</div>`

