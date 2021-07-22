let span = document.querySelector(".numbers");
let button = document.querySelector(".button");
button.addEventListener("click", randomGenerate);
let array = [];
let randNumber1 = 0;
let randNumber2 = 0;
let randNumber3 = 0;
function randomGenerate() {
  array = []
  randNumber1 = Math.floor(Math.random() * 3) + 1;
  randNumber2 = Math.floor(Math.random() * 3) + 1;
  randNumber3 = Math.floor(Math.random() * 3) + 1;
  array.push(randNumber1, randNumber2, randNumber3);
  span.innerHTML = array;
}

//ne sljaka
