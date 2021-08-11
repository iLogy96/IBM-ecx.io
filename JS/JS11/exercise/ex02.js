const box = document.querySelector(".box");
const buttonOne = document.querySelector(".one");
const buttonTwo = document.querySelector(".two");

buttonOne.addEventListener("click", (event) => {
  box.classList.toggle("red-js");
  box.classList.contains("red-js") ? buttonOne.innerHTML ='Remove style' : buttonOne.innerHTML ='Add style';
  event.preventDefault();
});
buttonTwo.addEventListener("click", (event) => {
  box.classList.toggle("border-js");
  box.classList.contains("border-js") ? buttonTwo.innerHTML = 'Remove class' : buttonTwo.innerHTML = 'Add class';
  event.preventDefault();
});
