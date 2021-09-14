const showMoreButton = document.querySelector(".show-more__button");
const cart = document.querySelector(".js-cart");
const sectionArticle = document.querySelector(".section__article");
const cartNumber = document.querySelector(".js-cart-number");
const popupCart = document.querySelector(".popup");
const cartSvg = document.querySelector('.js-cart');
const buttonClose = document.querySelector('.popup--button');
const overlay = document.querySelector(".body__wrapper");
const burgerButton = document.querySelector('.menu-icon');
const burgerSection = document.querySelector('.section__burger')
const burgerButtonClose = document.querySelector('.section__burger--close')
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
  cartSvg.addEventListener("click", expandCart);
  buttonClose.addEventListener("click",expandCart);
  burgerButton.addEventListener("click",expandBurgerMenu)
  burgerButtonClose.addEventListener("click",expandBurgerMenu)
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

    //display article name added to cart
    let productName = e.target.closest(".add-to-cart__button").dataset.name;
    const articleName = document.querySelector('.popup__article--name')
    articleName.innerHTML = productName;
    if(popupCart.classList.contains('js--popup--active')){
      expandCart();
    }
  }
  e.preventDefault();
}

//open cart
function expandCart() {
  popupCart.classList.toggle("js--popup--active");
  overlay.classList.toggle("overlay");
}

//open burger menu
function expandBurgerMenu() {
  burgerSection.classList.toggle("is--active");
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
