// Write a JavaScript function to format a number up to specified decimal places.

function decimals(num, n) {
  let b = new Number(num);
  if (typeof num === "number") {
    return b.toFixed(n);
  } else {
    return "string";
  }
}

console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
console.log(decimals("abc"));
