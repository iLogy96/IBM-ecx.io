let rgbMixer = document.querySelector(".rgb-mixer");
let buttonRedPlus = document.querySelector(".plus red");
let buttonRedMinus = document.querySelector(".minus red");
let buttonBluePlus = document.querySelector(".plus blue");
let buttonBlueMinus = document.querySelector(".minus blue");
let buttonGreenPlus = document.querySelector(".plus green");
let buttonGreenMinus = document.querySelector(".minus green");
let inputRed = document.getElementById("red");
let inputBlue = document.getElementById("blue");
let inputGreen = document.getElementById("green");
let inputs = document.querySelector(".inputs");
let spanRed = document.querySelector(".span-red");
let spanBlue = document.querySelector(".span-blue");
let spanGreen = document.querySelector(".span-green");
let red = 0;
let green = 0;
let blue = 0;
window.addEventListener("load", init);
function init(e) {
  rgbMixer.style.backgroundColor = `rgb(${red},${green},${blue})`;
  e.preventDefault();
}

inputs.addEventListener("click", colorPlus);
function colorPlus(e) {
  if (
    e.target.classList.contains("red") &&
    e.target.classList.contains("plus")
  ) {
    red += Number(inputRed.value);
    if (red > 255) {
      red = 255;
    }
  }
  spanRed.innerHTML = red;
  rgbMixer.style.backgroundColor = `rgb(${red},${green},${blue})`;
  if (
    e.target.classList.contains("blue") &&
    e.target.classList.contains("plus")
  ) {
    blue += Number(inputBlue.value);
    if (blue > 255) {
      blue = 255;
    }
  }
  spanBlue.innerHTML = blue;
  rgbMixer.style.backgroundColor = `rgb(${red},${green},${blue})`;
  if (
    e.target.classList.contains("green") &&
    e.target.classList.contains("plus")
  ) {
    green += Number(inputRed.value);
    if (green > 255) {
      green = 255;
    }
  }
  spanGreen.innerHTML = green;
  rgbMixer.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
inputs.addEventListener("click", colorMinus);
function colorMinus(e) {
  if (
    e.target.classList.contains("red") &&
    e.target.classList.contains("minus")
  ) {
    red -= Number(inputRed.value);
    if (red < 0) {
      red = 0;
    }
  }
  spanRed.innerHTML = red;
  rgbMixer.style.backgroundColor = `rgb(${red},${green},${blue})`;
  if (
    e.target.classList.contains("blue") &&
    e.target.classList.contains("minus")
  ) {
    blue -= Number(inputBlue.value);
    if (blue < 0) {
      blue = 0;
    }
  }
  spanBlue.innerHTML = blue;
  rgbMixer.style.backgroundColor = `rgb(${red},${green},${blue})`;
  if (
    e.target.classList.contains("green") &&
    e.target.classList.contains("minus")
  ) {
    green -= Number(inputGreen.value);
    if (green < 0) {
      green = 0;
    }
  }
  spanGreen.innerHTML = green;
  rgbMixer.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
