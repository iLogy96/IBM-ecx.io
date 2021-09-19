const takeawayGrid = document.querySelector(".takeaway");
const deliveryChoiceSection = document.querySelector(".takeaway__choice");
const takeawayNumberArray = Array.from(
  document.querySelectorAll(".takeaway__number")
);
const form = document.querySelector('.form')
//bindanje svih evenata
const bindEventListeners = () => {
  deliveryChoiceSection.addEventListener("click", deliveryOption);
  takeawayGrid.addEventListener("click", storeAndChangeInfo);
  takeawayGrid.addEventListener("click", openNextSection);
  form.addEventListener("click", changeButtonStyle)
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
    document
      .querySelector(".js-title--alternative")
      .classList.toggle("is--hidden");
    document.querySelector(".form").classList.toggle("is--hidden");
    document.querySelector(".take");
    takeawayNumberArray[1].classList.toggle("takeaway__number--active");
  }
};

const changeButtonStyle = (event) => {
  if(event.target.closest('.checkboxes')){
    console.log('hello')
  }
}