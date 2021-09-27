const popup = document.querySelector(".dimensions");
const overlay = document.querySelector(".body__wrapper");
const furnitureSummary = document.querySelector(".furniture__summary");
const body = document.querySelector("body");
const accordion = document.querySelector(".dimensions__summary--more");
const shoppingCart = document.querySelector(".popup");
const btnAddToCart = document.querySelector(".btn-wrapper-aside__button--blue");
const btnCloseCart = document.querySelector(".popup--button")


document.addEventListener("DOMContentLoaded", () => {
  bindEventListenersAll();
});

const toggleDimensionsPopup = (event) => {
  const btnOpen = event.target.closest(".button--productInfo--active");
  if (btnOpen && btnOpen === furnitureSummary.querySelectorAll("button")[0] || btnOpen === furnitureSummary.querySelectorAll("button")[1] || btnOpen === furnitureSummary.querySelectorAll("button")[2]) {
    overlay.classList.toggle("overlay");
    popup.classList.toggle("js--dimensions--active");
  }
};

const closeDimensionsPopup = (event) => {
  const btnClose = event.target.closest(".dimensions--button--close");
  if (btnClose && btnClose === popup.querySelectorAll("button")[0]) {
    overlay.classList.toggle("overlay");
    popup.classList.toggle("js--dimensions--active");
  }
};

const summaryExpand = (event) => {
  const btnExpand = event.target.closest(".btn--expand");
  if (btnExpand && btnExpand === popup.querySelectorAll("button")[3]) {
    accordion.classList.toggle("js--display--more");
    btnExpand.classList.toggle("rotate--button");
  }
};

const expandCart = () => {
  shoppingCart.classList.toggle("js--popup--active");
  overlay.classList.toggle("overlay");
};


const bindEventListenersAll = () => {
  furnitureSummary.addEventListener("click", toggleDimensionsPopup);
  popup.addEventListener("click", closeDimensionsPopup);
  popup.addEventListener("click", summaryExpand);
  btnAddToCart.addEventListener("click", expandCart);
  btnCloseCart.addEventListener("click", expandCart)  
};
