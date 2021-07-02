// Write a JavaScript function for the Pythagorean theorem.

/*
In mathematics, the Pythagorean theorem, also known as Pythagoras' theorem, 
is a relation in Euclidean geometry among the three sides of a right triangle. 
It states that the square of the hypotenuse (the side opposite the right angle) 
is equal to the sum of the squares of the other two sides. 
The theorem can be written as an equation relating the lengths of the sides a, b and c, 
often called the "Pythagorean equation".
*/

function pythagorean(a, b) {
  return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
}
console.log(pythagorean(4, 3));
