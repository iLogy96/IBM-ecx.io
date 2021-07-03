console.log('Exercise 02');

// select all list elements
const e2ListItems = document.querySelectorAll('li');
console.log(e2ListItems);

const isOrderedList = listItem => listItem.parentNode.nodeName === 'OL'; // your condition here
const isUnorderedList = listItem => listItem.parentNode.nodeName === 'UL'; // your condition here


e2ListItems.forEach(element => {
  if (isUnorderedList(element)) {
    console.log('Unordered list');
  } else if (isOrderedList(element)) {
    console.log('Ordered list');
  }
});
