let arrayDiff=(first,second)=>{
    console.log(first.filter(elem=>!second.includes(elem))); 
}
console.log(arrayDiff([1, 2, 3, 4,3,4,5,6], [1,3,4])); 
  // Output: [2, 5, 6]
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));  
  // Output: [1,3]