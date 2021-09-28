/**************************
 OVERLAY
**************************/
const primaryList = document.querySelector(".menu");
const header = document.querySelector(".header");
const filters = document.querySelector(".filters");
const search = document.querySelector(".search__input");

const init = () => {
  renderPosts();
  renderRegionOptions();
  bindEventListeners();
};

const spinnerTimeout = () => {
  const loaderOverlay = document.querySelector(".overlay");
  loaderOverlay.classList.add("overlay--is-hidden");
  loaderOverlay.classList.remove("overlay");
  loaderOverlay.innerHTML = "";
};

setTimeout(spinnerTimeout, 2000);

let visited = [];
const setStateToLocalStorage = () => {
  header.addEventListener("click", (event) => {
    if (event.target.closest(".menu__item--home")) {
      let state = {
        visited: 1,
      };
      visited = JSON.parse(localStorage.getItem("visited")) || [];
      let findVisited = visited.findIndex((obj) => obj.visited);
      if (findVisited >= 0) {
        visited[findVisited].visited += 1;
        localStorage.setItem("visited", JSON.stringify(visited));
        document.body.removeChild(".overlay");
      } else {
        visited.push(state);
        localStorage.setItem("visited", JSON.stringify(visited));
      }
    }
  });
};
setStateToLocalStorage();

/**************************
 HEADER SCROLL
**************************/

let current = 0;
function debounce(func, timeout = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const headerScroll = () => {
  if (window.scrollY > current && window.scrollY >= 100) {
    current = window.scrollY;
    header.classList.add("header--is-hidden");
  }
  if (window.scrollY < current) {
    current = window.scrollY;
    header.classList.remove("header--is-hidden");
  }
};
/**************************
 BURGER BARS
**************************/
const openDrawer = (event) => {
  const btn = event.target.closest(".icon-button");
  if (btn && btn === header.querySelectorAll("button")[0]) {
    document
      .querySelector(".drawer--hamburger")
      .classList.toggle("burger--is-flexed");
  }
  if (btn && btn === header.querySelectorAll("button")[1]) {
    document
      .querySelector(".drawer--user")
      .classList.toggle("burger--is-flexed");
  }
};

/**************************
 FETCH ALL POSTS
**************************/
const fetchPosts = () => {
  return fetch(`http://as-var-croapps.ecx.local:1337/posts`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`Message ${err}`);
    });
};
/**************************
 BIND ALL EVENT LISTENERS
 AND RENDER POSTS
**************************/

const bindEventListeners = () => {
  document.addEventListener(
    "scroll",
    debounce(() => {
      headerScroll();
    })
  );
  header.addEventListener("click", openDrawer);
  filters.addEventListener("click", sortingFilters);
  search.addEventListener(
    "keyup",
    debounce((e) => {
      searchPosts(e);
    })
  );
  document
    .querySelector("#regionSelect")
    .addEventListener("change", changeWood);

  document
    .querySelector("#widthInput")
    .addEventListener("change", calculateTotalSquareMeters);
  document
    .querySelector("#heightInput")
    .addEventListener("change", calculateTotalSquareMeters);
  window.addEventListener("load", footerObserver);
};

const handlebarsRender = (post) => {
  const source = document.querySelector("#postTemplate").innerHTML;
  const postContainer = document.querySelector(".posts");
  const template = Handlebars.compile(source);
  const output = template({ data: post });
  postContainer.innerHTML += output;
};

const renderPosts = () => {
  fetchPosts().then((data) => {
    handlebarsRender(sortPostsByPublished(data));
  });
};

/**************************
 SORT BUTTONS
**************************/

const sortPostsByPublished = (data) =>
  data.sort((a, b) => a.published.localeCompare(b.published));

const sortPostsByTitle = (data) =>
  data.sort((a, b) => a.title.localeCompare(b.title));

const sortPostsByAuthor = (data) =>
  data.sort((a, b) => a.author.localeCompare(b.author));

const sortingFilters = (event) => {
  const filterButton = event.target.closest(".chip");
  if (filterButton && filterButton === filters.querySelectorAll("button")[0]) {
    filters.querySelectorAll("button")[2].classList.remove("chip--active");
    filters.querySelectorAll("button")[1].classList.remove("chip--active");
    filterButton.classList.add("chip--active");
    document.querySelector(".posts").innerHTML = "";
    fetchPosts().then((data) => {
      handlebarsRender(sortPostsByTitle(data));
    });
  }
  if (filterButton && filterButton === filters.querySelectorAll("button")[1]) {
    filters.querySelectorAll("button")[2].classList.remove("chip--active");
    filters.querySelectorAll("button")[0].classList.remove("chip--active");
    filterButton.classList.add("chip--active");
    document.querySelector(".posts").innerHTML = "";
    fetchPosts().then((data) => {
      handlebarsRender(sortPostsByAuthor(data));
    });
  }
  if (filterButton && filterButton === filters.querySelectorAll("button")[2]) {
    filters.querySelectorAll("button")[0].classList.remove("chip--active");
    filters.querySelectorAll("button")[1].classList.remove("chip--active");
    filterButton.classList.add("chip--active");
    document.querySelector(".posts").innerHTML = "";
    renderPosts();
  }
};

/**************************
 SEARCH POSTS
**************************/

const searchPosts = (e) => {
  fetchPosts().then((data) => {
    e.target.value
      ? handlebarsRender(
          data.filter((item) => item.author.includes(e.target.value))
        )
      : renderPosts();
  });
};

/**************************
 FETCH 2.0 (nedovršen)
**************************/

const fetchRegions = () => {
  return fetch(`http://as-var-croapps.ecx.local:1337/regions`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(`Message ${err}`);
    });
};

const fetchWoodType = (region) => {
  return fetch(`http://as-var-croapps.ecx.local:1337/${region}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`Message ${err}`);
    });
};

const handlebarsRegion = (region) => {
  const source = document.querySelector("#regionTemplate").innerHTML;
  const regionContainer = document.querySelector("#regionSelect");
  const template = Handlebars.compile(source);
  const output = template({ data: region });
  regionContainer.innerHTML += output;
};

const handlebarsWood = (wood) => {
  const source = document.querySelector("#woodTemplate").innerHTML;
  const woodContainer = document.querySelector("#woodSelect");
  const template = Handlebars.compile(source);
  const output = template({ data: wood });
  woodContainer.innerHTML += output;
};

const renderRegionOptions = () => {
  fetchRegions().then((data) => {
    handlebarsRegion(data);
    console.log(data);
  });
};

let woodType = [];
const changeWood = (event) => {
  if (event.target.value !== "Select region") {
    fetchRegions()
      .then((data) => {
        data.forEach((item) => {
          fetchWoodType(item.regionWoodsRelation).then((item) => {});
        });
      })
      .then(() => {
        if (event.target.value === "Eurosibirsko-sjevernoamericka regija") {
          document.querySelector(".select__option--wood").innerHTML =
            woodType[0];
        }
        if (event.target.value === "Mediteranska regija") {
          document.querySelector(".select__option--wood").innerHTML =
            woodType[1];
        }
      });
  }
};

const calculateTotalSquareMeters = (event) => {
  const widthValue = event.target.value;
  const heightValue = document.querySelector("#heightInput").value;
  if (heightValue && widthValue) {
    document.querySelector(".total__square__meters").innerHTML =
      heightValue * widthValue;
  }
};
/**************************
 FOOTER INTERSECTION 
 OBSERVER
**************************/

const footerObserver = () => {
  let footer = document.querySelector(".footer");
  let options = {
    threshold: [0, 0.25, 0.5, 0.9],
  };
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      if (entry.intersectionRatio < 0.25) {
        footer.style.backgroundColor = "#4040e5";
      }
      if (entry.intersectionRatio >= 0.25 && entry.intersectionRatio < 0.5) {
        footer.style.backgroundColor = "#dfe1e6";
      }
      if (entry.intersectionRatio >= 0.5 && entry.intersectionRatio < 0.9) {
        footer.style.backgroundColor = "#7a869a";
      }
      if (entry.intersectionRatio >= 0.9) {
        footer.style.backgroundColor = "#000000";
      }
    });
  }, options);
  observer.observe(footer);
};

/**************************
 FUNCTION CALL
**************************/

init();
