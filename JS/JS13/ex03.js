const button = document.querySelector(".btn");
const ul = document.querySelector(".countries");

fetch(`https://restcountries.eu/rest/v2/all`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    button.addEventListener("click", () => {
      ul.innerHTML = "";
      data.forEach((country) => {
        const listItem = document.createElement("li");
        const listItemContent = document.createTextNode(country.name);
        listItem.appendChild(listItemContent);
        ul.appendChild(listItem);
      });
    });
  })
  .catch((err) => {
    console.log(`Ne šljaka ${err.message}`);
  });
