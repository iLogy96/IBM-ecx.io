console.log('Exercise 07');

// const div = document.querySelector('.ex7');
// for (let elem of document.querySelector('.ex7')){
//     elem.addEventListener("click",console.log('Kliknuo si: '+elem.button1));
//     elem.addEventListener("click",console.log('Kliknuo si: '+elem.button2));
//     elem.addEventListener("click",console.log('Kliknuo si: '+elem.button3));
//     elem.addEventListener("click",console.log('Kliknuo si: '+elem.button4));

// }
const div = document.querySelector('.ex7');
div.addEventListener('click',eventHandler)
function eventHandler(event){
    console.log(event.target.textContent);
}
