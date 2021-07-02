//funkcija koja izvlači random brojeve i stavlja ih u prazan array
function getRandomNumber(){
    return Math.floor(Math.random()*100);
}
const numbers = [];
let number;
function draw(){
    

do{
    number = getRandomNumber();
}
while(numbers.includes(number)){
    numbers.push(number);
}
}
for (let i = 0;i<10;i++){
    draw()
    console.log('Dodao sam '+number+' u array')
}
console.log(numbers)