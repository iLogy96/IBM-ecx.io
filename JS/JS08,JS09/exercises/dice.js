let dice = document.querySelector('.dice-div');
let buttonRoll = document.querySelector('.dice-roll');
buttonRoll.addEventListener("click",printDice);
function Dice(value){
    this.value = value;
    this.roll = function () {
        let dieValue = Math.floor(Math.random()*this.value)+1;
        return dieValue;
    }
}
function printDice(){
    let diceNumber = new Dice(6);
    dice.innerHTML=diceNumber.roll();
}
