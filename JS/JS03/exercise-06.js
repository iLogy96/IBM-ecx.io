// Write a JavaScript function to get the current date with custom formatting.

/* 
Output :
"29/06/2021"
"29-06-2021"
*/
function curday(str) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var year = today.getFullYear();
  let b = [dd, mm, year];
  return b.join(str);
}
console.log(curday("/"));
console.log(curday("-"));
