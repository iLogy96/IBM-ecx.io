const btn = document.querySelector(".top");
const header = document.querySelector(".header");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  console.log("Odo na vrh pagea");
});

document.addEventListener("scroll", (e) => {
  e.preventDefault();
  if (window.scrollY !== 0) {
    header.style.opacity = ".7";
    header.style.opacity = ".5";
    header.style.opacity = ".3";
    header.style.opacity = "0";
    header.style.transition = "ease-in-out 300ms";
  } else {
    header.style.display = "block";
    header.style.opacity = "1";
  }
});

//ex03
const images = document.querySelector('.image')

function handleIntersection (entries) {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
        }
    });
}

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection,options);

observer.observe(images)