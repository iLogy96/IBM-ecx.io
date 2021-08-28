//Unesi string i napravi da se slova izmjenjuju kao uppercase i lower case
//Input: Frontend Bootcamp; Output:FrOnTeNd BoOtCaMp

let myString = 'Frontend Bootcamp';
let transformed = '';
for(let i = 0; i<myString.length;i++){
    if(i % 2){
        transformed+=myString[i].toLowerCase();
    }
    else{
        transformed+=myString[i].toUpperCase()
    }
}
console.log(transformed);

