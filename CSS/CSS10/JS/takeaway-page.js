const takeawayGrid = document.querySelector(".takeaway");
const deliveryChoiceSection = document.querySelector(".takeaway__choice");
const takeawayNumberArray = Array.from(
  document.querySelectorAll(".takeaway__number")
);
const form = document.querySelector(".form");
const email = document.querySelector(".form__input--email");
const allAlternativeTitles = Array.from(
  document.querySelectorAll(".js-title--alternative")
);
let creditCard = document.querySelector("#cardnumber");
let creditCardValue = creditCard.value;

//bindanje svih evenata
const bindEventListeners = () => {
  deliveryChoiceSection.addEventListener("click", deliveryOption);
  takeawayGrid.addEventListener("click", storeAndChangeInfo);
  takeawayGrid.addEventListener("click", openNextSection);
  email.addEventListener("keyup", emailValidation);
  form.addEventListener("change", allInputsEntered);
  document
    .querySelector(".form__button")
    .addEventListener("click", openLastSection);
  document
    .querySelector(".takeaway__accepted__link")
    .addEventListener("click", openLastSection);
  document
    .querySelector(".checkbox__input")
    .addEventListener("click", priceWithPDV);
};

//rješavanje košarice i local storagea

const cartProducts = JSON.parse(localStorage.getItem("product") || []);
const cartProductsID = cartProducts.map((product) => product.id);

const fetchData = () => {
  return fetch(`./JS/data/products_all.json`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`Message ${err.message}`);
    });
};

const handlebars = (product) => {
  const source = document.querySelector("#asideTemplate").innerHTML;
  const productContainer = document.querySelector(".takeaway__aside__images");
  const template = Handlebars.compile(source);
  const output = template({ data: product });
  productContainer.innerHTML += output;
};

const renderProducts = () => {
  fetchData()
    .then((data) => data.moreProducts.productWindow)
    .then((data) => {
      data.forEach((product) => {
        if (cartProductsID.includes(product.itemNo)) {
          handlebars(product);
        }
      });
      updatePrice();
      bindEventListeners();
    });
};

renderProducts();

//funkcija za opciju dostave ili preuzimanja
const deliveryOption = (e) => {
  const btnDelivery = e.target.closest(".takeaway__choice__delivery--btn");
  const btnTakeaway = e.target.closest(".takeaway__choice__takeaway--btn");
  const title = document.querySelector(".js--title");
  const price = document.querySelector(".js--price");
  const para = document.querySelector(".js--para");
  const description = document.querySelector(".js--description");
  if (
    btnDelivery &&
    btnDelivery === deliveryChoiceSection.querySelectorAll("button")[0]
  ) {
    title.innerHTML = "Paketna dostava";
    price.innerHTML = "59 kn";
    para.innerHTML =
      "Uobičajeni rok za paketnu dostavu je od 2 do 7 radnih dana od trenutka plaćanja narudžbe";
    description.innerHTML = "Dostava: 2-7 radnih dana";
  } else if (
    btnTakeaway &&
    btnTakeaway === deliveryChoiceSection.querySelectorAll("button")[1]
  ) {
    title.innerHTML =
      "Preuzimanje u robnoj kući IKEA Zagreb, dostavnom centru ili mjestu za preuzimanje";
    price.innerHTML = "0 kn";
    para.innerHTML = "Odaberi gdje želiš preuzeti narudžbu";
    description.innerHTML = "";
  }
};

//storing info from the first section
const storeAndChangeInfo = (event) => {
  if (event.target.closest(".takeaway__button--blue")) {
    document.querySelector(".takeaway__section").classList.toggle("is--hidden");
    document.querySelector(".js--one").classList.toggle("is--hidden");
    takeawayNumberArray[0].classList.toggle("takeaway__number--active");
  } else if (event.target.closest(".js--one__link")) {
    document.querySelector(".takeaway__section").classList.toggle("is--hidden");
    document.querySelector(".js--one").classList.toggle("is--hidden");
    document.querySelector(".form").classList.toggle("is--hidden");
    document
      .querySelector(".js-title--alternative")
      .classList.toggle("is--hidden");
    takeawayNumberArray[0].classList.toggle("takeaway__number--active");
    takeawayNumberArray[1].classList.toggle("takeaway__number--active");
  }
};

const openNextSection = (event) => {
  if (event.target.closest(".takeaway__button--blue")) {
    allAlternativeTitles[0].classList.toggle("is--hidden");
    document.querySelector(".form").classList.toggle("is--hidden");
    document.querySelector(".take");
    takeawayNumberArray[1].classList.toggle("takeaway__number--active");
  }
};

const emailValidation = () => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailFormat.test(email.value)) {
    email.style.border = "1px solid green";
  } else if (email.value === "") {
    email.style.border = "transparent";
    email.style.borderBottom = "gray 1px solid";
  } else {
    email.style.border = "1px solid red";
  }
};

const allInputsEntered = () => {
  const formInputs = Array.from(
    document.querySelectorAll(".form__input--text")
  );
  const checkboxInput = document.querySelector(".checkbox__input--rules");
  formInputs.forEach((input) => {
    if (input.value === "" || checkboxInput.checked !== true) {
      document.querySelector(".form__button").style.background = "gray";
    } else {
      document.querySelector(".form__button").style.background = "#1958a3";
    }
  });
};

const creditCardFormat = () => {
  const creditCard = document.querySelector("#cardnumber");
  creditCard.addEventListener("keyup", (event) => {
    console.log(event.target.value);
  });
};

creditCardFormat();

const openLastSection = (event) => {
  form.classList.toggle("is--hidden");
  document.querySelector(".takeaway__accepted").classList.toggle("is--hidden");
  takeawayNumberArray[1].classList.toggle("takeaway__number--active");
  takeawayNumberArray[2].classList.toggle("takeaway__number--active");
  allAlternativeTitles[1].classList.toggle("is--hidden");

  document.querySelector(".takeaway__payment").classList.toggle("is--hidden");

  event.preventDefault();
};

let price = 0;
let priceDOM = document.querySelector(".takeaway-js--price");
const updatePrice = () => {
  fetchData().then((data) => {
    data.moreProducts.productWindow.forEach((product) => {
      if (cartProductsID.includes(product.itemNo)) {
        price += product.priceNumeral;
      }
      priceDOM.innerHTML = `${price.toFixed(2)} kn`;
      document.querySelector('.js-without-pdv').innerHTML = `${price.toFixed(2)} kn`
      document.querySelector('.js-pdv').innerHTML = `${(price * 0.25).toFixed(2)} kn`
    });
  });
};

updatePrice();

const priceWithPDV = (event) => {
  if (event.target.checked) {
    document.querySelector(".takeaway-js--price").innerHTML = `${
      (price + price * 0.25).toFixed(2)
    } kn`;
  } else {
    document.querySelector(".takeaway-js--price").innerHTML = `${price.toFixed(2)} kn`;
  }
};
