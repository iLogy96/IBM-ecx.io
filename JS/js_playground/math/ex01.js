//funkcija koja vraća random broj u nekom intervalu
function randInt(x,y){
    return x+ Math.floor(Math.random()*(y-x+1))
}
console.log(randInt(50,1000));
//funkcija koja zaokružuje na decimalna mjesta
function decimals (num,mjesto){
    if (typeof num === 'number'){
        return num.toFixed(mjesto);
    }
    else {
        num=parseFloat(num);
        return num.toFixed(mjesto);
    }
}
console.log(decimals('2.100212',3));
//funkcija koja traži highest i lowest value in array
array1 = [6,78,55,12,4,5,8,10,424];
let max1 = array1[0];
let min1 = array1[0];
function max(){
    for (let i = 0; i<array1.length;i++){
        if (max1<array1[i]){
            max1 = array1[i]
        }
        else if (array1[i]<min1){
            min1 = array1[i];
        }    
        }return 'Max je '+ max1 + ' a min je ' + min1;
}
console.log(max(array1));
//funkcija koja provjerava je li broj prirodan
function natNum(num){
    if (num >= 0 && Math.floor(num)===num){
        return 'Broj je prirodan'
    }
    else{
        return 'Broj nije prirodan'
    }
}
console.log(natNum(10.22));
//funkcija koja provjerava je li broj potenciran s 2
function powofTwo(n){
    if (n && (n&(n-1))===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(powofTwo(16))
//funckija koja zaokružuje na zadan broj dec. mjesta
function roundIt(dec,places){
    return dec.toFixed(places);
}
console.log(roundIt(12.374,2));
//https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php
//rijesiti jos 15,17,18,19,26,28,29