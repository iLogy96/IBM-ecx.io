console.log('Exercise 03')
let input = document.querySelector('#input')
// input.addEventListener('keyup', (keyup) =>{
//     keyup.target.value++
//     console.log(keyup.target.value)
// });
input.addEventListener('keydown', (keydown) =>{
    if(keydown.key === '5'){
        keydown.preventDefault();
    }
    console.log(keydown)
});