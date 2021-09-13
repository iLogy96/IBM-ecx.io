const showMoreButton = document.querySelector(".show-more__button");
const cart = document.querySelector(".js-cart");
const sectionArticle = document.querySelector(".section__article");
const cartNumber = document.querySelector(".js-cart-number");
const popupCart = document.querySelector(".popup");
const cartSvg = document.querySelector('.js-cart');
const buttonClose = document.querySelector('.popup--button');
const overlay = document.querySelector(".body__wrapper");
let id = 0;

//fetch podataka

const fetchData = (id) => {
  return fetch(`./JS/data/products${id}.json`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`Message ${err.message}`);
    });
};

//template

const handlebars = (article) => {
  const source = document.querySelector("#articleTemplate").innerHTML;
  const articleContainer = document.querySelector(".section__article");
  const template = Handlebars.compile(source);
  const output = template({ data: article });
  articleContainer.innerHTML += output;
};

//renderaj artikle prema id-u

const renderPosts = (id) => {
  fetchData(id)
    .then((article) => {
      handlebars(article.moreProducts.productWindow);
    })

    .then(() => {
      bindEventListeners();
    });
};
renderPosts(id);

//svi event listeneri
const bindEventListeners = () => {
  sectionArticle.addEventListener("click", addToCart);
  //prikaži sljedeći fetch
  showMoreButton.addEventListener("click", showMore);
  cartSvg.addEventListener("click", openCart);
  buttonClose.addEventListener("click",openCart);
};

//prikaži više
function showMore() {
  id++;
  renderPosts(id);
}

//add to cart
let product = [];
function addToCart(e) {
  if (e.target.closest(".add-to-cart__button")) {
    let productId = e.target.closest(".add-to-cart__button").dataset.id;
    product = JSON.parse(localStorage.getItem("product")) || [];
    product.push(productId);
    localStorage.setItem("product", JSON.stringify(product));

    cartNumber.innerHTML = product.length;
    cart.classList.add("js-add-to-cart");
    cartNumber.classList.add("js-add-to-cart-number");
  }
  e.preventDefault();
}

//open cart
function openCart() {
  console.log(popupCart)
  popupCart.classList.toggle("js--popup--active");
  overlay.classList.toggle("overlay");
}

//check local storage
const checkStorage = () => {
  if (JSON.parse(localStorage.getItem("product"))) {
    product = JSON.parse(localStorage.getItem("product"));
    cart.classList.add("js-add-to-cart");
    cartNumber.classList.add("js-add-to-cart-number");
    cartNumber.innerHTML = product.length;
  }
};
checkStorage();
