console.log('Exercise 04');

// Add a list item to the ordered list with the text "Ordered List Item". The text should be bold by using the <strong>
// element
const e4UnorderedList = document.querySelector('ol');
const li = document.createElement('li');
li.innerHTML = '<strong>Ordered List Item</strong>';
e4UnorderedList.appendChild(li);

