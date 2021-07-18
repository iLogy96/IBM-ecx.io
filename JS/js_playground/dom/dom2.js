let input1 = document.querySelector('.input');
let buttonAdd = document.querySelector('.add');
let buttonDisplay = document.querySelector('.display');
let div = document.querySelector('.array-wrapper');

buttonAdd.addEventListener("click",addElement)
buttonDisplay.addEventListener("click",displayElement)
counter = 0;
array = Array(0);

function addElement(){
    array[counter]=input1.value;
    console.log(array);
    counter++
}
function displayElement(){
    for (let i = 0; i<array.length;i++){
        let span = document.createElement('div');
        let spanContent = document.createTextNode(`Element ${i}: ${array[i]}`);
        span.appendChild(spanContent);
        div.appendChild(span);
    }
}
