let button = document.querySelector('.submit');
let button2= document.querySelector('.delete-all');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
button.addEventListener('click',eventHandler);
function eventHandler (e) {
    if (input.value.length === 0){
        alert('Nisi ništa unio')
    }
    else{
        let list = document.createElement("LI");
        let textContent = document.createTextNode(input.value);
        let span = document.createElement("span");
        let spanContent = document.createTextNode("X");
        span.classList.add('delete');
        span.appendChild(spanContent);
        list.appendChild(textContent);
        list.appendChild(span);
        ul.appendChild(list);    
    }
    e.preventDefault();
}
ul.addEventListener('click',deleteItem); //uvijek za radnju sa DOM dodati event listener
function deleteItem (e){
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    e.preventDefault;
}
button2.addEventListener('click',deleteAll);
function deleteAll (e){
    ul.innerHTML = '';
    e.preventDefault();
}
