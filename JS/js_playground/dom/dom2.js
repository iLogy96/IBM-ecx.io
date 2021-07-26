let input1 = document.querySelector('.input');
let buttonAdd = document.querySelector('.add');
let buttonDisplay = document.querySelector('.display');
let div = document.querySelector('.array-wrapper');
let div1 = document.querySelector('.div');

buttonAdd.addEventListener("click",addElement)
buttonDisplay.addEventListener("click",displayElement)
let array = [];

function addElement(){
    array.push(input1.value);
    console.log(array);
}
function displayElement(){
    div1.innerHTML = ''
    for (let i = 0; i<array.length;i++){
        let span = document.createElement('div')
        let spanContent = document.createTextNode(`Element ${i}: ${array[i]}`);
        span.appendChild(spanContent);
        div1.appendChild(span);
    }
}
