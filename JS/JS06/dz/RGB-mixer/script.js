let input1 = document.querySelector(".change-by");
let input2 = document.querySelector(".opacity");
let buttonRed1 = document.querySelector(".redplus");
let buttonRed2 = document.querySelector(".redminus");
let buttonGreen1 = document.querySelector(".greenplus");
let buttonGreen2 = document.querySelector(".greenminus");
let buttonBlue1 = document.querySelector(".blueplus");
let buttonBlue2 = document.querySelector(".blueminus");
let buttonRandomize = document.querySelector(".randomize");
let container2 = document.querySelector(".container-2");
let container1 = document.querySelector(".container-1");
let rgbBox = document.querySelector(".rgb-box");
let spanRed = document.querySelector(".span-red");
let spanGreen = document.querySelector(".span-green");
let spanBlue = document.querySelector(".span-blue");
let spanOpacity= document.querySelector(".span-opacity");
let red = 0;
let green = 0;
let blue = 0;
let opacity = 1;
spanOpacity.innerHTML=opacity;
window.addEventListener("load", init);
function init(e) {
  rgbBox.style.backgroundColor = `rgb(${red},${green},${blue},${opacity})`;
  e.preventDefault();
}
container1.addEventListener("click", colorPlus);
function colorPlus(e) {
  if (
    e.target.classList.contains("plus") &&
    e.target.classList.contains("red")
  ) {
    red += Number(input1.value);
    opacity+=Number(input2.value)
    if (red > 255) {
      red = 255;
    }
    else if (opacity > 1){
        opacity = 1
    }
    spanRed.innerHTML = red;
    spanOpacity.innerHTML = opacity;
    rgbBox.style.backgroundColor = `rgb(${red},${green},${blue},${opacity})`;
  } else if (
    e.target.classList.contains("plus") &&
    e.target.classList.contains("green")
  ) {
    green += Number(input1.value);
    opacity+=Number(input2.value)
    if (green > 255) {
      green = 255;
    }
    else if (opacity > 1){
        opacity = 1
    }
    console.log(green);
    spanGreen.innerHTML = green;
    spanOpacity.innerHTML = opacity;
    rgbBox.style.backgroundColor = `rgb(${red},${green},${blue},${opacity})`;
  } else if (
    e.target.classList.contains("plus") &&
    e.target.classList.contains("blue")
  ) {
    blue += Number(input1.value);
    opacity+=Number(input2.value)
    if (blue > 255) {
      blue = 255;
    }
    else if (opacity > 1){
        opacity = 1
    }
    spanBlue.innerHTML = blue;
    spanOpacity.innerHTML = opacity;
    rgbBox.style.backgroundColor = `rgb(${red},${green},${blue},${opacity})`;
  }
  e.preventDefault();
}
container1.addEventListener("click", colorMinus);
function colorMinus(e) {
  if (
    e.target.classList.contains("minus") &&
    e.target.classList.contains("red")
  ) {
    red -= Number(input1.value);
    opacity-=Number(input2.value)
    if (red < 0) {
      red = 0;
    }
    else if (opacity < 0){
        opacity = 0
    }
    spanRed.innerHTML = red;
    spanOpacity.innerHTML = opacity;
    rgbBox.style.backgroundColor = `rgb(${red},${green},${blue},${opacity})`;
  } else if (
    e.target.classList.contains("minus") &&
    e.target.classList.contains("green")
  ) {
    green -= Number(input1.value);
    opacity-=Number(input2.value)
    if (green < 0) {
      green = 0;
    }
    else if (opacity < 0){
        opacity = 0
    }
    spanGreen.innerHTML = green;
    spanOpacity.innerHTML = opacity;
    rgbBox.style.backgroundColor = `rgb(${red},${green},${blue},${opacity})`;
  } else if (
    e.target.classList.contains("minus") &&
    e.target.classList.contains("blue")
  ) {
    blue -= Number(input1.value);
    opacity-=Number(input2.value)
    if (blue < 0) {
      blue = 0;
    }
    else if (opacity < 0){
        opacity = 0
    }
    spanBlue.innerHTML = blue;
    spanOpacity.innerHTML = opacity;
    rgbBox.style.backgroundColor = `rgb(${red},${green},${blue},${opacity})`;
  }
  e.preventDefault();
}
buttonRandomize.addEventListener("click",randomColor)
function randomColor (e){
    red = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);
    opacity = Math.random().toFixed(1);
    spanRed.innerHTML=red;
    spanBlue.innerHTML=blue;
    spanGreen.innerHTML=green;
    spanOpacity.innerHTML = opacity;
    rgbBox.style.backgroundColor= `rgb(${red},${green},${blue},${opacity})`;
    e.preventDefault();
}
