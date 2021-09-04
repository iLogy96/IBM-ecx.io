const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((err) => {
      console.log(`Message ${err.message}`);
    });
};

const handlebars = (post) => {
  const source = document.querySelector("#postsTemplate").innerHTML;
  const postContainer = document.querySelector(".container");
  const template = Handlebars.compile(source);
  const output = template({ data: post });
  postContainer.innerHTML += output;
};

const renderPosts = () => {
  fetchData().then((post) => {
    handlebars(post);
  });
};

renderPosts();

window.addEventListener("scroll", () => {
  console.log(window.scrollY)
  console.log(window.innerHeight)
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    renderPosts();
  }
});
