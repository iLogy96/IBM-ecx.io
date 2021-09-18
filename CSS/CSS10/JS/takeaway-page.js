const takeawayButtonBlue = document.querySelector(".takeaway__button--blue");
const changeLink = document.querySelector(".js--one__link");
const buttonGray = document.querySelector(".form__button");
const deliveryChoiceSection = document.querySelector(".takeaway__choice");

//bindanje svih evenata
const bindEventListeners = () => {
  deliveryChoiceSection.addEventListener("click", deliveryOption);
  takeawayButtonBlue.addEventListener("click", storeInfo);
  changeLink.addEventListener("click", storeInfo);
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
const storeInfo = () => {
  document.querySelector(".takeaway__section").classList.toggle("is--hidden");
  document.querySelector(".section__show").classList.toggle("js--one");
  document.querySelector(".--one").classList.toggle("--one-closed");
  document.querySelector(".--two").classList.toggle("--two-open");
  document
    .querySelector(".js-title--alternative")
    .classList.toggle("is--hidden");
  document.querySelector(".form").classList.toggle("is--hidden");
};
