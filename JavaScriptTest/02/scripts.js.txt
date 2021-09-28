const bindEventListeners = () => {
  document.querySelector("button").addEventListener("click", startTheGame);
};

let roundNumber = 0;
const diceOneArray = Array.from(document.querySelectorAll(".dice-one"));
const diceTwoArray = Array.from(document.querySelectorAll(".dice-two"));
let playerOneScore = 0;
let playerTwoScore = 0;
let sum = [];

const addRoundNumber = () => {
  roundNumber += 1;
  document.querySelector(".round-number").innerHTML = roundNumber;
};

const renderDiceNumbers = () => {
  diceOneArray[0].innerHTML = Math.floor(Math.random() * 6) + 1;
  diceOneArray[1].innerHTML = Math.floor(Math.random() * 6) + 1;
  diceTwoArray[0].innerHTML = Math.floor(Math.random() * 6) + 1;
  diceTwoArray[1].innerHTML = Math.floor(Math.random() * 6) + 1;
  let sumDieOne =
    Number(diceOneArray[0].innerHTML) + Number(diceTwoArray[0].innerHTML);
  let sumDieTwo =
    Number(diceOneArray[1].innerHTML) + Number(diceTwoArray[1].innerHTML);
  if (sum.length === 0) {
    sum.push(sumDieOne, sumDieTwo);
  } else {
    sum.splice(0, sum.length);
    sum.push(sumDieOne, sumDieTwo);
  }
};

const checkHighestNumber = () => {
  if (sum[0] > sum[1]) {
    console.log("treba playeru 1 dodati +1 zbog veće sume brojeva");
    playerOneScore += 1;
    console.log(sum[0], sum[1]);
  } else if (sum[0] < sum[1]) {
    console.log("treba playeru 2 dodati +1 zbog veće sume brojeva");
    playerTwoScore += 1;
    console.log(sum[0], sum[1]);
  }
};

const checkSameNumberPlayer = () => {
  if (sum[0] === 2) {
    console.log("treba playeru 1 oduzeti -1 zbog dve 1");

    playerOneScore -= 1;
  } else if (
    Number(diceOneArray[0].innerHTML) === Number(diceTwoArray[0].innerHTML)
  ) {
    console.log("treba playeru 1 dodati +1 zbog istih brojki");
    playerOneScore += 1;
  } else if (sum[0] === 12) {
    console.log("treba playeru 1 dodati +2 zbog dve 6");
    playerOneScore += 2;
  }
};

const checkSameNumberComputer = () => {
  if (sum[1] === 2) {
    console.log("treba playeru 2 oduzeti 1 zbog dve 1");
    playerTwoScore -= 1;
  } else if (
    Number(diceOneArray[1].innerHTML) === Number(diceTwoArray[1].innerHTML)
  ) {
    console.log("treba playeru 2 dodati +1 zbog istih brojki");
    playerTwoScore += 1;
  } else if (sum[1] === 12) {
    console.log("treba playeru 2 dodati +2 zbog dve 6");
    playerTwoScore += 2;
  }
};

const checkSameNumber = () => {
  if (sum[0] === sum[1]) {
    console.log("treba obojici dati +1 jer su iste sume");
    playerOneScore += 1;
    playerTwoScore += 1;
  } else if (sum[0] === 12 && sum[1] === 12) {
    console.log("treba obojici dati +1 jer su iste sume");
    playerOneScore += 1;
    playerTwoScore += 1;
  }
};

const gameWinner = () => {
  if (playerOneScore >= 10) {
    alert(
      `Winner is player One, The Score is ${playerOneScore} - ${playerTwoScore}`
    );
    document.querySelector("button").disabled = true;
  } else if (playerTwoScore >= 10) {
    alert(
      `Winner is player One, The Score is ${playerOneScore} - ${playerTwoScore}`
    );
    document.querySelector("button").disabled = true;
  } else if (playerOneScore === 10 && playerTwoScore === 10) {
    console.log("Bonus round");
    if (sum[0] > sum[1]) {
      alert(
        `Winner is player One, The Score is ${playerOneScore} - ${playerTwoScore}`
      );
    } else {
      alert(
        `Winner is player One, The Score is ${playerOneScore} - ${playerTwoScore}`
      );
    }
  }
};

const startTheGame = () => {
  renderDiceNumbers();
  addRoundNumber();
  checkHighestNumber();
  checkSameNumberPlayer();
  checkSameNumberComputer();
  checkSameNumber();
  setTimeout(gameWinner, 200);
  document.querySelector(".player-one-score").innerHTML = playerOneScore;
  document.querySelector(".player-two-score").innerHTML = playerTwoScore;
};

bindEventListeners();
