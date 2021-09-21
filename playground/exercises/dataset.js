const myList = document.querySelector(".list");
const myListItem = Array.from(document.querySelectorAll(".list__item")); //može i nemora bit array
console.log(myListItem);

myListItem.forEach((item) => {
  if (item.dataset.show === "true") {
    item.style.display = "block";
  }
  else {
      item.style.visibility = "hidden"
  }
});
