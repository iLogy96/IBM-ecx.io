let winningNumber = Math.floor(Math.random() * 100 + 1);
let inputText = document.querySelector(".numInput");
let inputButton = document.querySelector(".guessButton");
let winningDiv = document.querySelector("#someId");
let numberOfGuesses = document.querySelector("#counter");
let moreOrLess = document.querySelector(".more-less");
let playAgain = document.querySelector(".playButton");
let guessCounter = 0;
console.log(winningNumber);
console.log(inputText.value);
inputButton.addEventListener("click", (event) => {
  if (Number(inputText.value) === winningNumber) {
    winningDiv.classList.remove("none");
  } else {
    guessCounter++;
    numberOfGuesses.innerHTML = guessCounter;
  }
  moreLess();
  gameOver();
  inputText.value = "";
  event.preventDefault();
});
//b zadatak
function moreLess() {
  moreOrLess.innerHTML = "";
  console.log(inputText.value);
  if (inputText.value < winningNumber) {
    let span = document.createElement("span");
    let spanContent = document.createTextNode("More");
    span.appendChild(spanContent);
    moreOrLess.appendChild(span);
  } else if (inputText.value > winningNumber) {
    let span = document.createElement("span");
    let spanContent = document.createTextNode("Less");
    span.appendChild(spanContent);
    moreOrLess.appendChild(span);
  }
}
//c zadatak
playAgain.addEventListener('click', event =>{
    location.reload();
    event.preventDefault();
});
function gameOver () {
    if (guessCounter >= 10 ){
        guessCounter = 9;
        moreOrLess.innerHTML = 'GAME OVER'
    }
};
//d zadatak
inputText.addEventListener("keydown", event =>{
    if (event.keyCode === 13) {
        event.preventDefault();
        inputButton.click()
    }
})
