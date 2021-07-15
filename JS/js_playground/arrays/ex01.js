//funkcija koja provjerava je li input array, ako je vraća True, inače, False
let isArray = (input) => Array.isArray(input);
console.log(isArray('w3resource'));
console.log(isArray([1,2,3,4]));
//funkcija koja klonira array
let cloneArray = (input) => {
    return [...input];
}
console.log(cloneArray([1,2,4,3]));
//funkcija koja vraća n elemenata arraya
let firstElement = (array,n) =>{
    if (n === undefined){
        return array[0];
    }
    else {
        return array.slice(0,n);
    }
}
console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));
//funkcija koja vraća zadnji element ili n zadnjih elemenata, reverse redoslijedom
let lastElement = (array,n) =>{
    if (n === undefined){
        return array.slice(-1);
    }
    else {
        return array.slice(-n).reverse();
    }
}
console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([7, 9, 0, -2],3));
console.log(lastElement([7, 9, 0, -2],6));
//funkcija koja vraća elemente arraya u string
let myColor = ["Red", "Green", "White", "Black"];
const arrayToString = (array) => array.join(','); 
console.log(arrayToString(myColor));
//funkcija koja accepta number as input i inserta - između svaka dva parna broja
let dashedNumber = (number) => {
    let num = number.toString().trim().split('')
    let result = [];
    for(let i = 0;i<num.length;i++){
        if (num[i-1] % 2 === 0 && num[i]%2===0){
            result.push('-',num[i])
        }
        else{
            result.push(num[i]);
        }
    }
    return result.join("") 
}
console.log(dashedNumber(234466));