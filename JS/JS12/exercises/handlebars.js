//zad 1.
// const data = [
//     {
//       id: 1,
//       name: "Leanne Graham",
//       email: "Sincere@april.biz",
//       address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "1-770-736-8031 x56442",
//       website: "hildegard.org",
//       company: {
//         name: "Romaguera-Crona",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 2,
//       name: "Ervin Howell",
//       email: "Shanna@melissa.tv",
//       address: {
//         street: "Victor Plains",
//         suite: "Apt. 556",
//         city: "Wisokyburgh",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "1-770-736-8031 x56442",
//       website: "anastsia.net",
//       company: {
//         name: "Deckow-Crist",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 3,
//       name: "Clementine Bauch",
//       email: "Nathan@yesenia.net",
//       address: {
//         street: "Douglas Extension",
//         suite: "Apt. 556",
//         city: "McKenziehaven",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "1-463-123-4447",
//       website: "ramiro.info",
//       company: {
//         name: "Romaguera-Jacobson",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 4,
//       name: "Patricia Lebsack",
//       email: "Julianne.OConner@kory.org",
//       address: {
//         street: "Hoeger Mall",
//         suite: "Apt. 556",
//         city: "South Elvis",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "493-170-9623 x156",
//       website: "kale.biz",
//       company: {
//         name: "Robel-Corkery",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 5,
//       name: "Chelsey Dietrich",
//       email: "Lucio_Hettinger@annie.ca",
//       address: {
//         street: "Skiles Walks",
//         suite: "Apt. 556",
//         city: "Roscoeview",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "(254)954-1289",
//       website: "hildegard.org",
//       company: {
//         name: "Keebler LLC",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 6,
//       name: "Mrs. Dennis Schulist",
//       email: "Karley_Dach@jasper.info",
//       address: {
//         street: "Norberto Crossing",
//         suite: "Apt. 556",
//         city: "South Christy",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "1-447-935-8478 x6430",
//       website: "ola.org",
//       company: {
//         name: "Considine-Lockman",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 7,
//       name: "Kurtis Weissnat",
//       email: "Telly.Hoeger@billy.biz",
//       address: {
//         street: "Rex Trail",
//         suite: "Apt. 556",
//         city: "Howemouth",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "1210.067.6132",
//       website: "elvis.io",
//       company: {
//         name: "Johns Group",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 8,
//       name: "Nicholas Runolfsdottir V",
//       email: "Sherwood@rosamond.me",
//       address: {
//         street: "Ellsworth Summit",
//         suite: "Apt. 556",
//         city: "Alliyaviw",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "586.493.6943 x140",
//       website: "jacynthe.com",
//       company: {
//         name: "Abernathy Group",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 9,
//       name: "Glenna Reichert",
//       email: "Sincere@april.biz",
//       address: {
//         street: "Dayna Park",
//         suite: "Apt. 556",
//         city: "Bartholomebury",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "(775)976-6794 x41206",
//       website: "eonrad.com",
//       company: {
//         name: "Yost and Sons",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//     {
//       id: 10,
//       name: "Clementina DuBuque",
//       email: "Rey.Padberg@karina.biz",
//       address: {
//         street: "Kattie Turnpike",
//         suite: "Apt. 556",
//         city: "Lebsackbury",
//         zipcode: "92998-3874",
//         geo: {
//           lat: "37.3159",
//           lng: "81.1496",
//         },
//       },
//       phone: "024-648-3804",
//       website: "ambrose.net",
//       company: {
//         name: "Hoeger LLC",
//         catchphrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets",
//       },
//     },
//   ];

// const source = document.querySelector('#cardTemplate').innerHTML;
// const div = document.querySelector('.wrapper');
// const template = Handlebars.compile(source);
// const output = template({data:data});
// div.innerHTML = output;

//zadatak 6
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (data) {
    return data.json();
  })
  .then(function (json) {
    let posts = json;
    const source = document.querySelector("#cardTemplate").innerHTML;
    const div = document.querySelector(".wrapper");
    const template = Handlebars.compile(source);
    const output = template({ data: posts });
    div.innerHTML = output;
  })
  .catch(function (err) {
    console.log("Fetch problem: " + err.message);
  });

//zadatak 2
let card = document.querySelectorAll(".card");
card.forEach((item) => {
  item.addEventListener("click", (event) => {
    let url = new URL(window.location);
    url.searchParams.set("cardid", `${item.dataset.id}`);
    window.history.pushState({}, "", url);
    event.preventDefault();
  });
});
//zadatak 3
const currentUrl = new URL(window.location);
const cardId = currentUrl.searchParams.get("cardid");
if (cardId) {
  console.log(cardId);
}

//zadatak 7
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let index = data.findIndex((d) => d.name === "Ervin Howell");
    showPosts(index);
  });
function showPosts(newindex) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${newindex}`)
    .then((response) => response.json())
    .then((posts) => console.log(posts));
}

//zadatak 8
let input = document.querySelector('input');
let btn = document.querySelector('.search-button');
let body = document.querySelector('body');
btn.addEventListener('click',event =>{
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
      data.name.includes(input.value);
      // let index = data.findIndex((d) => d.name === "Ervin Howell");
      showPosts(index);
    });
  });
function showPosts(newindex) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${newindex}`)
    .then((response) => response.json())
    .then((posts) => console.log(posts));
}
