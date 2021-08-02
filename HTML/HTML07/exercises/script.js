//get elements
const textbox = document.querySelector("#comboboxInput");
const listbox = document.querySelector("#comboboxListbox");
const combobox = document.querySelector("#combobox");

const KEYCODES = {
  Tab: 9,
  Enter: 13,
  Escape: 27,
  Space: 32,
  ArrowUp: 38,
  ArrowDown: 40,
};
//bind events - ovo se koristi umjesto dodavanje scripte na kraju bodya
// document.addEventListener('DOMContentLoaded', () => {
// })
const showListbox = () => {
  listbox.classList.remove("hidden");
  combobox.setAttribute("aria-expanded", "true");
};
const hideListbox = () => {
  listbox.classList.add("hidden");
  combobox.setAttribute("aria-expanded", "false");
  const items = Array.from(listbox.querySelectorAll(".result"));
  //remove highlighted class when li is selected
  items.forEach((item) => {
    item.classList.remove("highlighted");
  });
  //remove active descendant
  textbox.setAttribute("aria-activedescendant", "");
};
const checkToHide = (event) => {
  //hide listbox if clicked in textbox or anywhere inside combobox
  if (event.target !== textbox && !combobox.contains(event.target)) {
    hideListbox();
  }
};
const selectItem = (item) => {
  //set the value to text field
  textbox.value = item.innerText;
  //remove active descendant
  textbox.setAttribute("aria-acrivedescendant", "");
  //when list item is selected, hide listbox
  hideListbox();
};
const checkIfListboxVisible = () => {
  if (listbox.classList.contains("hidden")) {
    showListbox();
  }
};
const clickItem = (event) => {
  //if clicked on list item, call selectItem method
  if (event.target && event.target.nodeName === "LI") {
    selectItem(event.target);
  }
};

const checkKey = (event) => {
  const key = event.which || event.keyCode;
  //prevent search on control keys (enter,escape,arrows)
  switch (key) {
    case KEYCODES.ArrowDown:
    case KEYCODES.ArrowUp:
    case KEYCODES.Escape:
    case KEYCODES.Enter:
      event.preventDefault();
    default:
      searchResults();
  }
};
const searchResults = () => {
  //get the value of text field
  const searchString = textbox.value.toLowerCase();
  const items = listbox.querySelectorAll(".result");
  //filter list items
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    //check if the item value starts with entered search string
    if (item.textContent.toLowerCase().trim().startsWith(searchString)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  }
};
const handleKeyboardInput = (event) => {
  const key = event.which || event.keyCode;
  //array.from je odličan jer uzme u htmlu stvari, u ovom slučaju list iteme i stavi ih u array
  const items = Array.from(listbox.querySelectorAll(".result:not(.hidden)"));
  const numOfResults = items.length;
  let newIndex = items.findIndex((item) => {
    return item.classList.contains("highlighted");
  });
  //if ESC or Tab, hide listbox
  //if ArrowDown or ArrowUp, "navigate" through list
  //if Enter, set the value to input field
  switch (key) {
    case KEYCODES.Escape:
    case KEYCODES.Tab:
      hideListbox();
      return;
    case KEYCODES.ArrowDown:
      checkIfListboxVisible();
      //calculate next item, if it is the last item, return to 0
      if (newIndex === numOfResults - 1) {
        newIndex = 0;
      } else {
        newIndex++;
      }
      break;
    case KEYCODES.ArrowUp:
      checkIfListboxVisible();
      if (newIndex <= 0) {
        newIndex = numOfResults - 1;
      } else {
        newIndex--;
      }
      break;
    case KEYCODES.Enter:
      if (newIndex !== -1) {
        event.preventDefault();
        selectItem(items[newIndex]);
      }
      return;
    default:
      return;
  }

  //highlighting logic
  //remove "highlighted" class for all
  items.forEach((item) => {
    item.classList.remove("highlighted");
  });
  //highlight the new item
  items[newIndex].classList.add("highlighted");
  textbox.setAttribute(
    "aria-acrivedescendant",
    items[newIndex].getAttribute("id")
  );
};
//bind events
textbox.addEventListener("focus", showListbox);
document.body.addEventListener("click", checkToHide);
listbox.addEventListener("click", clickItem);
textbox.addEventListener("input", checkKey);
textbox.addEventListener("keydown", handleKeyboardInput);
