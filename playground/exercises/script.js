const object = {
  name: "Ivan",
  surname: "Nešto",
  dateOfBirth: "16.06.1996",
};
console.log(object);

let person = new Object();
person.name = "random";
person.surname = "bullshit";
person.dateOfBirth = "18.09.2929";
console.log(person);

//konstruktor funkcija
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let myCar = new Car("Ford", "Focus", "2008");
console.log(myCar);

//primjer
function data(name, surname, dish) {
  this.name = name;
  this.surname = surname;
  this.dish = dish;
}

data.prototype.formatData = function () {
  return `My name is ${this.name} ${this.surname}, and my favorite dish is ${this.dish}`;
};

function createPerson() {
  let person = new data("Ivan", "Logožar", "Pizza");
  console.log(person.formatData());
}

createPerson();

//klase
// class Rectangle {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   calculateOpseg() {
//     console.log(2 * (this.a + this.b));
//   }

//   calculatePovršina() {
//     console.log(this.a * this.b);
//   }
// }

// let rectangle = new Rectangle(5, 10);
// rectangle.calculateOpseg();
// rectangle.calculatePovršina();

// class Rectangle extends dijametar {

//   constructor(a, b, d) {
//     super(a,b);
//     this.d = d;
//   }
//izmisljotina
//   calculateDijametar () {
//       console.log(this.d +this.a +this.b)
//   }
// }


class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea())
console.log(square.area);
