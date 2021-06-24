//Exercise Objects
var person = {
   name : 'John', age : 50
};
console.log(person.name + ' is ' + person.age);
//Exercise 2
var txt = 'Hello world';
var x = txt.length;
console.log(x)
//Exercise 3
var txt = 'We are "Vikings".';
console.log(txt);
//Exercise String Methods
var txt1 = 'Hello ';
var txt2 = 'World';
console.log(txt1 + txt2);
var txt = "abcdefghijklm";
var pos = txt.indexOf('h');
console.log(pos);
var txt = "I can eat bananas all day";
var x = txt.slice(10,17);
console.log(x);
var txt = "Hello World";
var y = txt.replace('Hello','Welcome');
console.log(y);
var txt = 'Hello World';
console.log(txt.toUpperCase());
var txt = 'Hello World';
console.log(txt.toLowerCase());
//Exercise Arrays
var cars = ["Saab", "Volvo","BMW"]
var x = cars[1]
console.log(x);
var cars = ["Volvo","Jeep","Mercedes"];
cars[0]= "Ford";
console.log(cars[0]);
console.log(cars.length);
//Exercise Array Methods
const fruits = ["Banana","Orange","Apple"];
fruits.pop();
fruits.push("Kiwi");
fruits.splice(1,2);
console.log(fruits);