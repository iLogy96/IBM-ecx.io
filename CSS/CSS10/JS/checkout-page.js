// const getFromLocalStorage = () => {
//   let addedProducts = JSON.parse(localStorage.getItem("product") || []);
//     addedProducts.forEach((product) => {
//       productID = product.id;
//     });
//   console.log(addedProducts);
// };

const basketSection = document.querySelector(".basket__section");
const addedProducts = JSON.parse(localStorage.getItem("product") || []);
const addedProductsID = addedProducts.map((product) => product.id);

const fetchData = () => {
  return fetch(`./JS/data/products_all.json`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`Message ${err.message}`);
    });
};

const handlebars = (product) => {
  const source = document.querySelector("#cartTemplate").innerHTML;
  const productContainer = document.querySelector(".basket__section");
  const template = Handlebars.compile(source);
  const output = template({ data: product });
  productContainer.innerHTML += output;
};

const renderProducts = () => {
  fetchData().then((data) => {
    data.moreProducts.productWindow.forEach((product) => {
      if (addedProductsID.includes(product.itemNo)) {
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
        handlebars(product);
      }
    });
    bindEventListeners();
  });
};

renderProducts();

const productQuantities = (product) => {
  product.quantities.forEach((item) => {
    if (
      item.text ===
      addedProducts.find((article) => article.id === product.itemNo).quantity
    ) {
      item.selected = "selected";
    }
  });
};

const bindEventListeners = () => {
  basketSection.addEventListener("click", deleteProduct);
};

const deleteProduct = (event) => {
  let bntRemove = event.target.closest(".basket__summary__remove").dataset.id;
  const basketArticle = document.querySelector(".basket__article");
  if (bntRemove && bntRemove === basketSection.querySelectorAll("button")[1]) {
    basketArticle.innerHTML = "";
  }
};
