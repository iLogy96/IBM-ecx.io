const container = document.querySelector(".container");

function loadPosts() {
  fetch("http://jsonplaceholder.typicode.com/posts/?_limit=50")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const div = document.createElement("div");
        div.classList.add("title");
        div.innerHTML = post.title;
        container.appendChild(div);
      });
    });
}

loadPosts();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadPosts();
  }
});
