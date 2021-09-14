// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

let library = [];

class Library {
  constructor(author, name, readingStatus) {
    (this.author = author),
      (this.name = name),
      (this.readingStatus = readingStatus);
  }

  addBookToLibrary(){
      library.push(this);
  }
}

let book1 = new Library("Bill Gates", "The Road Ahead", true);
let book2 = new Library("Steve Jobs", "Walter Isaacson", true);
let book3 = new Library(
  "Suzane Collins",
  "Mockingjay: The Final Book of The Hunger Games",
  false
);
book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();
console.log(library)

