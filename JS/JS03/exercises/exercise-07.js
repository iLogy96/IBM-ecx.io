// Write a JavaScript program to calculate age.

function calculate_age(age) {
  var current = new Date().getFullYear();
  var birthYear = age.getFullYear();
  return Math.abs(current - birthYear);
}

console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));

function calc_age(age) {
  var days = new Date().getDay();
  var months = new Date().getMonth();
  var year = new Date().getFullYear();
  var current = days + months + year;
  var birthYear = age.getFullYear();
  return Math.abs(current - birthYear);
}
console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));
