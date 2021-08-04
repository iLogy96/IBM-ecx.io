//delete one key from object
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};
console.log(student);
//get length of an object
function objectLength(object) {
    let size = 0,
        key;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            size++;
        }
    }
    return size;
}
console.log(objectLength(student));
//display status funkcija
var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];
function youRead(array) {
    array.forEach(function(item) {
        if (item.readingStatus === true)        
        console.log(`Pročitali ste ${item.title} od autora ${item.author}`)  
        else if (item.readingStatus === false)
        console.log(`Niste još pročitali ${item.title} od autora ${item.author}`)
    });
}
console.log(youRead(library))
//objekti vjezba
let user = {
    name: 'random',
    age: 30,
    email: 'random@gmail.com'
}
console.log(Object.keys(user)[0]);
console.log(Object.keys(user));
console.log(user['age']);
console.log(user.name);
user['name'] = 'chun-li'
console.log(user.name);
//konstruktor koji ce vracat volumen cilindra
function Cylinder(height,diameter) {
    this.height = height;
    this.diameter = diameter;
}
Cylinder.prototype.Volume = function () {
    let radius = this.diameter / 2;
    return this.height * Math.PI * Math.pow(radius,2);
}
let cyl = new Cylinder (7,4)
console.log(cyl.Volume().toFixed(4));
//dice example

