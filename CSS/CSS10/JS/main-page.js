const showMoreButton = document.querySelector(".show-more__button");
const cart = document.querySelector(".js-cart");
const sectionArticle = document.querySelector(".section__article");
const cartNumber = document.querySelector(".js-cart-number");
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
      console.log(article);
      handlebars(article.moreProducts.productWindow);
    })

    .then(() => {
      sectionArticle.addEventListener("click", addToCart);
    });
};
renderPosts(id);

const handleEventListeners = () => {
  //prikaži sljedeći fetch
  showMoreButton.addEventListener("click", showMore);
};

handleEventListeners();

function showMore() {
  id++;
  renderPosts(id);
}

function addToCart(e) {
  if (e.target.closest(".add-to-cart__button")) {
    let productId = e.target.closest(".add-to-cart__button").dataset.id;
    let product = JSON.parse(localStorage.getItem("product")) || [];
    product.push(productId);
    localStorage.setItem("product", JSON.stringify(product));
    cartNumber.innerHTML = product.length;
    cart.classList.add("js-add-to-cart");
    cartNumber.classList.add("js-add-to-cart-number");
  }
  e.preventDefault();
}
