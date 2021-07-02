console.log('Exercise template 01');

const e1Paragraph = document.querySelector('p');

console.log('Paragraph', e1Paragraph);

const e1ListItems = document.querySelectorAll('li');

console.log('List Items', e1ListItems);

console.log('Element looping');

e1ListItems.forEach(element => {
  console.log(element);
});
