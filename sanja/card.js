const container = document.querySelector(".container");
const card = document.querySelector(".card");
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeOnX = document.querySelector(".close");

let users = [];

const fetchUser = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((json) => {
      users = json;
      return json;
    })
    .then((json) => {
      renderTemplate(json, "#users", ".container");
    })
    .catch((error) => console.log(error));
};

fetchUser();

const renderTemplate = (data, SOURCE_SELECTOR, OUTPUT_SELECTOR) => {
  const source = document.querySelector(SOURCE_SELECTOR).innerHTML;
  const template = Handlebars.compile(source);
  const output = template({ data });
  document.querySelector(OUTPUT_SELECTOR).innerHTML = output;
};

const populateModal = (id) => {
  if (users) {
    let user = users.find((user) => user.id == id);
    renderTemplate(user, "#companyName", "#modal");
  }
};

const clickOnCard = (event) => {
  if (event.target.closest(".card")) {
    populateModal(event.target.closest(".card").dataset.id);
    modal.classList.contains("active")
      ? modal.classList.remove("active")
      : modal.classList.add("active");
  }
};
container.addEventListener("click", clickOnCard);
