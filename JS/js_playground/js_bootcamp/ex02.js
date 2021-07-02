//napravi array kao konstantu i prebroji koliko je brojeva unutra veće od 25

const myArray = [
    [1,2,3],
    [20,30,40],
    [50,60,80],
    [12,13,14,15]
]
let count = 0;
for(let i = 0;i<myArray.length;i++){
    for(let j = 0; j<myArray[i].length;j++){
        if(myArray[i][j]>25){
            count++;
        }

    }
}
console.log(count);