/*switch je kao if petlja*/
function checkKeyboardLayout(layout) {
    switch (layout) {
      case "QUERTY":
        return 0;
      case "QUERTZ":
        return 1;
      default:
        return null;
    }
}
//ex1
var fruits = 'Banana'
switch(fruits) {
    case 'Banana':
        console.log("banana je")
        break;
    case 'Jabuka':
        console.log("Jabuka je");
        break;
}
//ex2
var age = 17;
var voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);
//ex3
var x = 16;
var y = 15;
if (x<y){
    console.log("dobor je");
 } else {
    console.log("nije dobro");
}
//ex4
let i;
for(i=0;i<10;i++){
    console.log(i);
}
//ex5
const fruits1 = ['Apple', 'Banana', 'Orange'];
for (x of fruits1){
    console.log(x);
}
//ex6 ponavljanje set
var objekt1 = [1,2,3,3,3,4,4,5,5,6,6,7];
var mapa = new Set(objekt1)
console.log(mapa)
//ex7
var studenti = {
    firstName: "Henry",
    lastName: "Ford",
    year: 1987,
    phoneNumber: "091/999-666"    
} 
console.log(studenti.firstName);
console.log(studenti);
studenti['firstName'] = "Ivek";
console.log(studenti.firstName);
//ex 8-vrlo slično ex4 sa for petljom
let j = 0;
while (j<10) {
    j++
    console.log(j);
}
//ex9
let f = 0;
while (f<10) {
    console.log(f);
    f=f+2;
}
//ex10
for (b=0;b<10;b++) {
    console.log(b);
    if (b == 5) {
        break;
    }
}


