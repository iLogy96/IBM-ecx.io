// Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).

let shortDays = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"];
function short_Days(date) {
  return shortDays[date.getDay()];
}

console.log(short_Days(new Date()));
console.log(short_Days(new Date(2015, 10, 1)));
