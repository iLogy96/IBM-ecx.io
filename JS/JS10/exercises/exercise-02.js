console.log('Exercise 02');

document.querySelectorAll('button').forEach(button => {
  button.dataset.clickcount = 0;
  // let clickCounter = 0;
  button.addEventListener('click', function() {
    // clickCounter++;
    console.log(`Button: ${button.dataset.id}, Clicks: ${++button.dataset.clickcount}`)
  });
});
