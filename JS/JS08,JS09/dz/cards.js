//card
const data = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Apt. 556",
      city: "Wisokyburgh",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "anastsia.net",
    company: {
      name: "Deckow-Crist",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Apt. 556",
      city: "McKenziehaven",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 556",
      city: "South Elvis",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Apt. 556",
      city: "Roscoeview",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "(254)954-1289",
    website: "hildegard.org",
    company: {
      name: "Keebler LLC",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 556",
      city: "South Christy",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-447-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Apt. 556",
      city: "Howemouth",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "1210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Apt. 556",
      city: "Alliyaviw",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    email: "Sincere@april.biz",
    address: {
      street: "Dayna Park",
      suite: "Apt. 556",
      city: "Bartholomebury",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "eonrad.com",
    company: {
      name: "Yost and Sons",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Apt. 556",
      city: "Lebsackbury",
      zipcode: "92998-3874",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchphrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];
console.log();
//funkcija koja mi appenda djecu
HTMLDivElement.prototype.appendChildren = function () {
  for (let i = 0; i < arguments.length; i++) this.appendChild(arguments[i]);
};
//main function
const divWrapper = document.querySelector(".wrapper");
function cardData(array) {
  array.forEach(function (item) {
    let divCardWrapper,
      companyNameWrapper,
      credentialsWrapper,
      companyName,
      userName,
      companyNameContent,
      userNameContent,
      address,
      adressContent,
      userNumber,
      userNumberContent,
      userMail,
      userMailContent,
      userWebsite,
      userWebsiteContent;
    divCardWrapper = document.createElement("div");
    divCardWrapper.classList.add("card");
    companyNameWrapper = document.createElement("div");
    companyNameWrapper.classList.add("company-name");
    credentialsWrapper = document.createElement("div");
    credentialsWrapper.classList.add("credentials");
    companyName = document.createElement("div");
    companyName.classList.add("companyName");
    userName = document.createElement("div");
    userName.classList.add("username");
    companyNameContent = document.createTextNode(item.company.name);
    userNameContent = document.createTextNode(item.name);
    address = document.createElement("div");
    adressContent = document.createTextNode(
      `${item.address.street},${item.address.city}`
    );
    userNumber = document.createElement("div");
    userNumberContent = document.createTextNode(item.phone);
    userMail = document.createElement("div");
    userMailContent = document.createTextNode(item.email);
    userWebsite = document.createElement("div");
    userWebsiteContent = document.createTextNode(item.website);
    companyName.appendChild(companyNameContent);
    userName.appendChild(userNameContent);
    address.appendChild(adressContent);
    userNumber.appendChild(userNumberContent);
    userMail.appendChild(userMailContent);
    userWebsite.appendChild(userWebsiteContent);
    companyNameWrapper.appendChildren(companyName, userName);
    credentialsWrapper.appendChildren(
      address,
      userNumber,
      userMail,
      userWebsite
    );
    divCardWrapper.appendChildren(companyNameWrapper, credentialsWrapper);
    divWrapper.appendChild(divCardWrapper);
  });
}
cardData(data);

//sort
const sort = document.querySelector("#sort");
sort.addEventListener("change", sortBy);
function sortBy(event) {
  if (event.target.value === "owner") {
    data.sort((a, b) => a.name.localeCompare(b.name));
    divWrapper.innerHTML = "";
    cardData(data);
  } else if (event.target.value === "company") {
    data.sort((a, b) => a.company.name.localeCompare(b.company.name));
    divWrapper.innerHTML = "";
    cardData(data);
  } else {
    data.sort((a, b) => a.id - b.id);
    divWrapper.innerHTML = "";
    cardData(data);
  }
}

//search
const search = document.querySelector("#search");
search.addEventListener("keyup", searchBy);
function searchBy(event) {
  divWrapper.innerHTML = "";
  const searchData = data.filter(
    (item) =>
      item.name.startsWith(event.target.value) ||
      item.company.name.startsWith(event.target.value)
  );
  cardData(searchData);
}

//click event
// const card = document.querySelector(".card");
// const body = document.querySelector("body");
// card.addEventListener("click", cardClick)
// function cardClick () {
//       divWrapper.style.backgroundColor = "gray";
//       divWrapper.style.opacity = "0.5";
//       let cardInfo = document.createElement("div");
//       cardInfo.classList.add("card-info");
//       let cardInfoCompanyName = document.createTextNode(data.company.name);
//       let cardInfoMotto = document.createTextNode();
//       cardInfo.appendChildren(cardInfoCompanyName, cardInfoMotto);
//       body.appendChild(cardInfo);
// }
