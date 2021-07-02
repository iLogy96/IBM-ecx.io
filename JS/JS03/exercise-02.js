// Write a JavaScript function to extract a specified number of characters from a string.

function truncateString(str, length) {
  if (length <= str.length) {
    return str.slice(0, length);
  }
  return "You entered a number too big";
}

console.log(
  truncateString(
    "When I grow up I would like to work as a Frontend developer",
    4
  )
);
