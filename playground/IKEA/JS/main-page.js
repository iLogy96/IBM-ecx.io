let id = 0;
const fetchData = (id) => {
  return fetch(`./JS/data/products${id}.json`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`Message ${err}`);
    });
};

const handlebars = (article) => {
  const source = document.querySelector("#articleTemplate").innerHTML;
  const articleContainer = document.querySelector(".section__article");
  const template = Handlebars.compile(source);
  const output = template({ data: article });
  articleContainer.innerHTML += output;
};

const renderPosts = () => {
  fetchData(id)
    .then((data) => {
      return data.moreProducts.productWindow;
    })
    .then((data) => {
      handlebars(data);
      nextData(data);
    })
    .then(() => {
      saveToLocalStorage();
    });
};

renderPosts();

const nextData = (data) => {
  const showMoreButton = document.querySelector(".show-more__button");
  id = 0;
  showMoreButton.addEventListener("click", () => {
    if (id < 4) {
      handlebars(data);
      id++;
    } else {
      showMoreButton.disabled = true;
    }
  });
};

let product = [];
const saveToLocalStorage = () => {
  const articleSection = document.querySelector(".section__article");
  articleSection.addEventListener("click", (event) => {
    if (event.target.closest(".add-to-cart__button")) {
      let productId = event.target.closest(".add-to-cart__button").dataset.id;
      let myProducts = {
        id: productId,
        quantity: 1,
      };
      product = JSON.parse(localStorage.getItem("product")) || [];
      let productFind = product.findIndex((obj) => obj.id === productId);
      if (productFind >= 0) {
        product[productFind].quantity += 1;
        localStorage.setItem("product", JSON.stringify(product));
      } else {
        product.push(myProducts);
        localStorage.setItem("product", JSON.stringify(product));
      }
    }
  });
};
