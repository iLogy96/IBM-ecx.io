const width = document.querySelector(".width");
const height = document.querySelector(".height");
console.log(height, width);

function reportSize() {
  width.textContent = window.innerWidth;
  height.textContent = window.innerHeight;
}

window.onresize = reportSize;

//ex02
function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function saveInput() {
  console.log("Saving data");
}
const processChange = debounce(() => saveInput());

