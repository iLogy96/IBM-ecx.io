const container = document.querySelector(".grid");
const source = document.querySelector("#cardTemplate").innerHTML;
const fetchCountries = () => {
  return fetch("https://restcountries.eu/rest/v2/all").then((res) =>
    res.json()
  );
};
const handlebars = (data) => {
  const template = Handlebars.compile(source);
  data.forEach((item) => {
    item.currencies = item.currencies[0].name;
  });
  const output = template({ data });
  container.innerHTML = output;
};

const renderCards = () => {
  fetchCountries().then((json) => {
    handlebars(json);
  });
};

function renderCountries(country) {
  country.forEach((element) => {
    let options = document.createElement("option");
    options.value = element.name;
    options.innerHTML = element.name;
    select.appendChild(options);
  });
}

const select = document.querySelector("select");
fetch(`https://restcountries.eu/rest/v2/all`)
  .then((response) => response.json())
  .then((data) => {
    renderCountries(data);
  })
  .catch((err) => console.error(err));

const selectEventHandler = (event) => {
  fetchCountries().then((json) => {
    event.target.value
      ? handlebars(json.filter((item) => item.name == event.target.value))
      : renderCards();
  });
};

select.addEventListener("change", selectEventHandler);

renderCards();
renderCountries();
