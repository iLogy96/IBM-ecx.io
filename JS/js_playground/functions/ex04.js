let greeting = 'Hello';
let name1 = 'world';
console.log(greeting+name1);
let greeting2 = greeting.replace(/l/g,'1');
let hello = greeting2+name1;
console.log(hello);
console.log(hello.split('').reverse().join(''));