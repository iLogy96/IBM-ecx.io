let startGame = document.querySelector("#btn");
let ball = document.querySelector("#target");
let counter = 0;
startGame.addEventListener("click", function start() {
  let timer = setInterval(startTheGame, 500);
  function startTheGame() {
    ball.style.margin = `${Math.floor(Math.random() * 600 + 1)}px ${Math.floor(
      Math.random() * 600 + 1
    )}px ${Math.floor(Math.random() * 600 + 1)}px ${Math.floor(
      Math.random() * 600 + 1
    )}px`;
    counter++;
    if (counter === 20) {
      clearInterval(timer);
      counter = 0;
    }
  }
  ball.addEventListener("mouseover", () => {
    ball.style.backgroundColor = 'green'
    clearInterval(timer);
    counter = 0;
  });
});
