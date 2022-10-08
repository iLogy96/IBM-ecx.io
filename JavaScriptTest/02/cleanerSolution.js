/****************
GLOBAL VARIABLES
****************/

let dices = Array.from(document.querySelectorAll(".dice"));
let gameStartButton = document.querySelector(".roll");
let gameResetButton = document.querySelector(".reset");
let playerOneScore = 0;
let playerTwoScore = 0;
let roundNumber = 0;

/*************
GAME CLASS 
*************/

class Game {
	constructor() {}

	get dices() {
		return this.renderDiceNumbers();
	}

	get sumPlayerOne() {
		return Number(dices[0].innerHTML) + Number(dices[1].innerHTML);
	}

	get sumPlayerTwo() {
		return Number(dices[2].innerHTML) + Number(dices[3].innerHTML);
	}

	renderDiceNumbers() {
		dices.forEach((dice) => {
			dice.innerHTML = Math.floor(Math.random() * 6) + 1;
		});
	}

	addRoundNumber() {
		roundNumber += 1;
	}

	checkHighestNumber() {
		if (this.sumPlayerOne > this.sumPlayerTwo) {
			playerOneScore++;
		} else if (this.sumPlayerOne < this.sumPlayerTwo) {
			playerTwoScore++;
		}
	}

	checkSameNumber() {
		if (dices[0] === dices[1]) {
			playerOneScore--;
		}
		if (dices[2] === dices[3]) {
			playerTwoScore--;
		}
		if (this.sumPlayerOne === this.sumPlayerTwo) {
			playerOneScore++;
			playerTwoScore++;
		}
		switch (this.sumPlayerOne) {
			case 2:
				playerOneScore--;
				break;
			case 12:
				playerOneScore += 2;
				break;
		}
		switch (this.sumPlayerTwo) {
			case 2:
				playerTwoScore--;
				break;
			case 12:
				playerTwoScore += 2;
				break;
		}
	}

	declareGameWinner() {
		if (playerOneScore >= 10) {
			alert(
				`Winner is player One, The Score is ${playerOneScore} - ${playerTwoScore}`
			);
			gameStartButton.disabled = true;
			gameResetButton.disabled = false;
		} else if (playerTwoScore >= 10) {
			alert(
				`Winner is player One, The Score is ${playerOneScore} - ${playerTwoScore}`
			);
			gameStartButton.disabled = true;
			gameResetButton.disabled = false;
		}
	}

	restartTheGame() {
		playerOneScore = 0;
		playerTwoScore = 0;
		roundNumber = 0;
		dices.forEach((dice) => {
			dice.innerHTML = 0;
		});
		document.querySelector(".player-one-score").innerHTML = playerOneScore;
		document.querySelector(".player-two-score").innerHTML = playerTwoScore;
		document.querySelector(".round-number").innerHTML = roundNumber;
		gameStartButton.disabled = false;
		gameResetButton.disabled = true;
	}

	startTheGame() {
		let myGame = new Game();
		myGame.renderDiceNumbers();
		myGame.addRoundNumber();
		myGame.checkHighestNumber();
		myGame.checkSameNumber();
		myGame.declareGameWinner();
		document.querySelector(".player-one-score").innerHTML = playerOneScore;
		document.querySelector(".player-two-score").innerHTML = playerTwoScore;
		document.querySelector(".round-number").innerHTML = roundNumber;
	}
}
/*******************
 STARTING THE GAME
******************/
gameResetButton.disabled = true;
let game = new Game();

gameStartButton.addEventListener("click", game.startTheGame);
gameResetButton.addEventListener("click", game.restartTheGame);
