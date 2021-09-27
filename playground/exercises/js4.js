enterTask = () => {
  let myList = document.querySelector(".myUl");
  let myInputValue = document.querySelector(".js-input").value;
  if (myInputValue) {
    let myListItem = document.createElement("li");
    let myListItemContent = document.createTextNode(myInputValue);
    myListItem.appendChild(myListItemContent);
    myList.appendChild(myListItem);
  } else {
    alert("Nisi ništa unio");
  }
};

deleteTask = () => {
  if (document.querySelector("ul")) {
    document.querySelector("ul").innerHTML = "";
  } else {
    alert("Lista ne postoji");
  }
};

bindEventListeners = () => {
  document.querySelector(".js-enter-task").addEventListener("click", enterTask);
  document
    .querySelector(".js-delete-task")
    .addEventListener("click", deleteTask);
};

bindEventListeners();
