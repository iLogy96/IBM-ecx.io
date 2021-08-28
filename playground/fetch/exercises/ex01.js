//fetch without handlebars
const albumContainer = document.querySelector(".album");
fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderAlbum(data);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

function renderAlbum(photos) {
  photos.forEach((photo) => {
      const albumPhotoContainer = document.createElement('figure');
      const albumPhoto = document.createElement('img');
      albumPhoto.style.width = '300px'
      albumPhoto.src = photo.url;
      albumPhoto.alt = photo.title;
      albumPhotoContainer.appendChild(albumPhoto);
      albumContainer.appendChild(albumPhotoContainer);
  });
}
