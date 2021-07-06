let button = document.querySelector(".submit");
let button1 = document.querySelector(".delete-all");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
button.addEventListener("click", addListItem);
function addListItem() {
    if (input.value.length === 0) {
    alert("Nisi ništa unio");
  } else {
    let listItem = document.createElement("LI");
    let textContent = document.createTextNode(input.value);
    let span = document.createElement("span");
    let spanContent = document.createTextNode("X");
    span.classList.add('delete');
    listItem.classList.add('list-item')
    span.appendChild(spanContent);
    listItem.appendChild(textContent);
    listItem.appendChild(span);
    ul.appendChild(listItem);
  }
};
ul.addEventListener("click",deleteoneItem);
function deleteoneItem(e){
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    e.preventDefault; 
}
button1.addEventListener("click", deleteAll);
function deleteAll() {
    ul.innerHTML = '';
}

