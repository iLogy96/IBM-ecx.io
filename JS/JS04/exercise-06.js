console.log('Exercise 06');

// Dodati button u HTML

// querySelect button i spremiti u varijablu

// na varijablu btn dodati event listner za click

// deklarirati varijablu za brojač (inicijalno je 0) - let

// napisati eventHandler koji povećava brojač za 1 te log-a vrijednost

let button = document.querySelector('.button');
button.addEventListener('click',eventHandler);
let counter = 0;
function eventHandler() {
    counter+=1
    console.log(counter)
}
let resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click',reset);
function reset() {
    counter = 0
    console.log('brojač je na: '+counter);
}

