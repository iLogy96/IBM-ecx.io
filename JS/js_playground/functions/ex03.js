//funkcija koja provjerava palindrome
let a;
function palindrome (str){
    a = str.split('').reverse().join('')
    if (str === a ){
        return 'palindrom je';
    }
    else{
        return 'nije palindrom'
    }
}
console.log(palindrome('anavolimilovana'));

