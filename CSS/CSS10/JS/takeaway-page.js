const takeawayGrid = document.querySelector(".takeaway");
const deliveryChoiceSection = document.querySelector(".takeaway__choice");
const takeawayNumberArray = Array.from(
  document.querySelectorAll(".takeaway__number")
);
const form = document.querySelector(".form");
const formButton = document.querySelector(".form__button");
const email = document.querySelector(".form__input--email");
const allAlternativeTitles = Array.from(
  document.querySelectorAll(".js-title--alternative")
);
let creditCard = document.querySelector("#cardnumber");
let creditCardValue = creditCard.value;
let price = 0;

/**************************
 BINDANJE SVIH EVENTA
**************************/

const bindEventListeners = () => {
  deliveryChoiceSection.addEventListener("click", deliveryOption);
  takeawayGrid.addEventListener("click", storeAndChangeInfo);
  takeawayGrid.addEventListener("click", openNextSection);
  email.addEventListener("keyup", emailValidation);
  form.addEventListener("change", allInputsEntered);
  formButton.addEventListener("click", openLastSection);
  formButton.addEventListener("click", deliveryAcceptedDetails);
  document
    .querySelector(".takeaway__accepted__link")
    .addEventListener("click", openLastSection);
  document
    .querySelector(".checkbox__input")
    .addEventListener("click", priceWithPDV);
};

/*****************************
 HANDLE LOCAL STORAGE AND CART
******************************/

const cartProducts = JSON.parse(localStorage.getItem("product") || []);
const cartProductsID = cartProducts.map((product) => product.id);

const fetchData = () => {
  return fetch(`./JS/data/products_all.json`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`Message ${err.message}`);
    });
};

const productQuantities = (product) => {
  product.quantities.forEach((item) => {
    if (
      item.text ===
      cartProducts.find((article) => article.id === product.itemNo).quantity
    ) {
      item.selected = "selected";
    }
  });
};

/*****************************
 DELIVERY CHOICE TABS
******************************/

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

/*********************************
 STORING INFO FROM FIRST SECTION
 AND OPENING NEXT SECTION
**********************************/

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

/*********************************
 EMAIL AND INPUTS VALIDATION
**********************************/

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
      formButton.style.background = "gray";
    } else {
      formButton.style.background = "#1958a3";
    }
  });
};

/*********************************
 STORING INFO FROM SECOND SECTION
 AND OPENING NEXT SECTION
**********************************/

const openLastSection = (event) => {
  form.classList.toggle("is--hidden");
  document.querySelector(".takeaway__accepted").classList.toggle("is--hidden");
  takeawayNumberArray[1].classList.toggle("takeaway__number--active");
  takeawayNumberArray[2].classList.toggle("takeaway__number--active");
  allAlternativeTitles[1].classList.toggle("is--hidden");

  document.querySelector(".takeaway__payment").classList.toggle("is--hidden");

  event.preventDefault();
};

const deliveryAcceptedDetails = () => {
  document.querySelector(".takeaway__accepted__details--name").innerHTML =
    document.querySelector(".form__input--name").value;
  document.querySelector(".takeaway__accepted__details--surname").innerHTML =
    document.querySelector(".form__input--surname").value;
  document.querySelector(".takeaway__accepted__details--email").innerHTML =
    document.querySelector(".form__input--email").value;
  document.querySelector(".takeaway__accepted__details--number").innerHTML =
    document.querySelector(".form__input--tel").value;
  document.querySelector(".takeaway__accepted__details--address").innerHTML =
    document.querySelector(".form__input--street").value;
  document.querySelector(".takeaway__accepted__details--city").innerHTML =
    document.querySelector(".form__input--city").value;
};

/*********************************
UPDATING PRICE AND ADDING PDV
**********************************/

const updatePrice = (product) => {
  let productQuantity = product.quantities.find(
    (quantity) => quantity.selected === "selected"
  ).value;
  console.log(productQuantity);
  price += product.priceNumeral * productQuantity;
  console.log(price);
  document.querySelector(".takeaway-js--price").innerHTML = `${price.toFixed(
    2
  )} kn`;
  document.querySelector(".js-without-pdv").innerHTML = `${price.toFixed(
    2
  )} kn`;
  document.querySelector(".js-pdv").innerHTML = `${(price * 0.25).toFixed(
    2
  )} kn`;
};

const priceWithPDV = (event) => {
  if (event.target.checked) {
    document.querySelector(".takeaway-js--price").innerHTML = `${(
      price +
      price * 0.25
    ).toFixed(2)} kn`;
  } else {
    document.querySelector(".takeaway-js--price").innerHTML = `${price.toFixed(
      2
    )} kn`;
  }
};

/*****************************
 HANDLEBARS + RENDER PRODUCTS
******************************/

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
          product.quantities = [
            {
              value: 1,
              text: 1,
              selected: "",
            },
            {
              value: 2,
              text: 2,
              selected: "",
            },
            {
              value: 3,
              text: 3,
              selected: "",
            },
            {
              value: 4,
              text: 4,
              selected: "",
            },
            {
              value: 5,
              text: 5,
              selected: "",
            },
            {
              value: 6,
              text: 6,
              selected: "",
            },
            {
              value: 7,
              text: 7,
              selected: "",
            },
            {
              value: 8,
              text: 8,
              selected: "",
            },
            {
              value: 9,
              text: 9,
              selected: "",
            },
            {
              value: 10,
              text: 10,
              selected: "",
            },
          ];
          productQuantities(product);
          updatePrice(product);
          handlebars(product);
        }
      });
    })
    .then(() => {
      bindEventListeners();
    });
};

renderProducts();
