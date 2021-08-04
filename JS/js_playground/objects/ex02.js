console.log('EX02 - second script');
const button = document.querySelector('.roll');
const div = document.querySelector('.number');
button.addEventListener('click',rollTheDice);
function Dice(value){
    this.value = value;
    this.roll = function(){
        let dieValue = Math.floor(Math.random()*this.value+1);
        return dieValue
    }
}

function rollTheDice() {
    let diceNumber = new Dice(6);
    div.innerHTML = diceNumber.roll();
}
//uzimanje data kroz konstruktor funkciju
function data (name,surname,dish){
    this.name = name;
    this.surname = surname;
    this.dish = dish;
}
data.prototype.person = function(){
    return (`I am ${this.name} ${this.surname} and my favourite dish is ${this.dish}`);
}
function start(){
    let personData = new data('Ivan','Logožar','Žganci');
    // personData.name = 'Ivan'
    // personData.surname = 'Logožar'
    // personData.dish = 'Žganci'
    console.log("Data: "+personData.person())
}
start()
// random exercise
function band (name,decade){
    this.name = name;
    this.decade = decade;
}
band.prototype.yourBand = function (){
    return (`Your favorite band ${this.name} was active in the ${this.decade}`);
}
function start2 () {
        let bandData = new band();
        bandData.name = 'random';
        bandData.decade = '80s';
        console.log(bandData.yourBand());
}
start2();
//create table in js
// let table = document.createElement('table');
// let inputRow = prompt('Unesi rows');
// let inputCol = prompt('Unesi cols: ');
// let rowContent = prompt('Unesi row content: ')
// let colContent = prompt('Unesi col content: ')
// let body = document.querySelector('body');
// body.appendChild(table);
// console.log(inputRow);

// function createTable () {
//     for (let i = 0;i<inputRow;i++){
//         let rows = document.createElement('tr');
//         let rowsValue = document.createTextNode(rowContent)
//         rows.appendChild(rowsValue);
//         rows.style.border = '2px solid black';
//         for (let j = 0;j<inputCol;j++){
//             let cols = document.createElement('td');
//             let colsContent = document.createTextNode(colContent)
//             cols.appendChild(colsContent);
//             cols.style.border = '1px solid black';
//             rows.appendChild(cols);
//         }
//     table.appendChild(rows);
//     }
// }
// createTable();
//library exercise objects
let library1 = [
    { author: 'Marija Jurić Zagorka', title: 'The Wich Of Grich', libraryID: 1254},
    { author: 'Antun Gustav Matoš', title: 'Tired Tale', libraryID: 4264},
    { author: 'Mousy Blacksmith', title: 'Blacksmith Of His Own Luck', libraryID: 3245}
];
function Data (author,title,id) {
    this.author = author;
    this.title = title;
    this.id = id;
}
let newBook = new Data('Dušan Bućan','Random knjiga',5);
library1.push(newBook)
console.log(library1.sort((a,b)=>a.title.localeCompare(b.title)));