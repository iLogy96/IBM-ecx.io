let dnaStrand = (str) => {
  let array = str.trim().split("");
  console.log(array);
  let newStrand = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "A") {
      newStrand += "T";
    } else if (array[i] === "G") {
      newStrand += "C";
    }
  }
  return newStrand;
};
console.log(dnaStrand("ATTGC"));
//const numbers = [1,2,3,4,5,6,7,8,9];
//const odd_numbers=numbers.filter(item => item%2==1);
//console.log(odd_numbers)