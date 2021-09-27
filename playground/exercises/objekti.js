function personData(name, surname, dish) {
  this.name = name;
  this.surname = surname;
  this.dish = dish;
}

personData.prototype.formatData = function () {
  return `I am ${this.name} ${this.surname} and my fav dish is ${this.dish}`;
};

const start = () => {
  let person = new personData();
  person.name = "john";
  person.surname = "doe";
  person.dish = "pizza";
  console.log(person.formatData());
};

start();


//dodavanje knjige u library

let library = [
  {
    author: "Marija Jurić Zagorka",
    title: "The Wich Of Grich",
    libraryID: 1254,
  },
  { author: "Antun Gustav Matoš", title: "Tired Tale", libraryID: 4264 },
  {
    author: "Mousy Blacksmith",
    title: "Blacksmith Of His Own Luck",
    libraryID: 3245,
  },
  
];

const librarySortById = () => {
  library.sort((a, b) => a.title.localeCompare(b.title));
  console.log(library);
};

let myBook = [];
function bookData(author, title, libraryID) {
  this.author = author;
  this.title = title;
  this.libraryID = libraryID;
}
let newBook = new bookData("Random", "Bullshit", 12345);

console.log(newBook);


const addNewBookToLibrary = () => {
  while (confirm("Add another book")) {
    let author = prompt("Author");
    let title = prompt("Title");
    let libraryID = prompt("ID");
    let book = new bookData(author, title, libraryID);
    library.push(book);
  }
  librarySortById();
  console.log(library);
};
