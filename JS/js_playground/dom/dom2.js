let input1 = document.querySelector('.input');
let buttonAdd = document.querySelector('.add');
let buttonDisplay = document.querySelector('.display');
let div = document.querySelector('.array-wrapper');

buttonAdd.addEventListener("click",addElement)
buttonDisplay.addEventListener("click",displayElement)
// counter = 0;
let array = [];

function addElement(){
    array.push(input1.value);
    console.log(array);
}
function displayElement(){
    span = '';
    for (let i = 0; i<array.length;i++){
        let span = document.createElement('div');
        let spanContent = document.createTextNode(`Element ${i}: ${array[i]}`);
        span.appendChild(spanContent);
        div.appendChild(span);
    }
}
