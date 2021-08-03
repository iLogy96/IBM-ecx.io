console.log('Exercise 04')
//button1
let buttonOne = document.querySelector('.button-1');
let h1 = document.querySelector('h1');
buttonOne.addEventListener('click', (e) =>{
    if(!h1.classList.contains('blue')){
        h1.classList.toggle('red')
    }
    e.preventDefault();
});
let buttonTwo = document.querySelector('.button-2');
buttonTwo.addEventListener('click',(e)=>{
    if(!h1.classList.contains('red')){
        h1.classList.toggle('blue')
    }
    e.preventDefault();
});
