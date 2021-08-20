fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
  .then((response) => response.json())
  .then(function (data) {
    renderPhoto(data);
  })
  .catch(function (err) {
    console.log("Fetch problem: " + err.message);
  });
function renderPhoto(photos) {
    photos.forEach((photo) => {
    const albumElement = document.querySelector(".album");
    const figureElement = document.createElement("figure");
    const photoElement = document.createElement("img");
    photoElement.src = photo.url;
    photoElement.alt = photo.title;
    figureElement.appendChild(photoElement);
    albumElement.appendChild(figureElement);
  });
}
